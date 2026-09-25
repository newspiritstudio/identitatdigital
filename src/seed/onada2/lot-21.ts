import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { AppSeed } from '../types'
import type { SeedLot } from './types'

/**
 * Lot 21 de la segona onada: banca, crèdit al consum i assegurances a Espanya
 * (Klarna, MyInvestor, ING, Plazo, Cetelem, Bankinter, Banc Sabadell i Mapfre),
 * més dues aplicacions de foto i vídeo (Canva i Retro).
 *
 * El fil que uneix el lot financer és que la sortida no depèn de la persona:
 * la llei de prevenció del blanqueig obliga a conservar la documentació deu
 * anys, i per això cap d’aquestes fitxes té una eliminació de compte real. La
 * diferència entre unes i altres és què fan amb les dades mentre duren: qui
 * les fa servir per a publicitat i perfils, qui les declara per rastrejar a
 * l’etiqueta de l’App Store i qui consulta fitxers de solvència.
 */

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

/* ═══════════════════════════ Canva ═══════════════════════════ */
const canva: AppSeed = {
  slug: 'canva',
  name: 'Canva',
  company: 'canva',
  categories: ['edicio-de-foto-i-video'],
  tagline: 'Els dissenys serveixen per entrenar els models d’IA si no ho desactives a la configuració',
  summary:
    'Canva analitza l’activitat, el contingut i els fitxers pujats per entrenar els seus algorismes, i deixa l’exclusió a un interruptor de la pàgina de preferències de privadesa que cal anar a buscar. L’etiqueta de l’App Store és una de les més carregades del lot: declara compres, ubicació, historial de cerca, contingut i identificadors vinculats a la persona, i publicitat de tercers entre les finalitats. A canvi, la seguretat està ben documentada: ISO 27001, SOC 2 Type II, PCI DSS, xifratge AES256 en repòs i un programa de recompenses a Bugcrowd.',
  platforms: ['ios', 'android', 'web', 'windows', 'macos'],
  businessModel: 'freemium',
  jurisdiction: 'Austràlia',
  userBase: 'Més de 200 milions de persones usuàries actives mensuals declarades per l’empresa',
  links: {
    website: 'https://www.canva.com/',
    privacyPolicy: 'https://www.canva.com/policies/privacy-policy/',
    appStore: appStore('897446215'),
  },
  accountRequired: f('yes', 'official', ['canva-privacy-policy'], 'Cal un compte amb adreça electrònica, o amb un identificador de Google, Facebook o Apple, per desar cap disseny.'),
  openSource: f('no', 'official', ['canva-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Els dissenys revelen per a qui es treballa: el currículum d’una persona, el cartell d’una manifestació, la invitació d’un bateig o la presentació d’una empresa abans de fer-se pública. Que aquest contingut alimenti per defecte l’entrenament d’algorismes és, en aquesta fitxa, el punt que més importa.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canva-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['canva-privacy-policy', 'canva-app-store'] }),
    row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['canva-privacy-policy'] }),
    row('ocupacio-i-carrec', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['canva-privacy-policy'], note: 'La política esmenta la professió entre les dades del compte; serveix per triar les plantilles que es recomanen.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['canva-privacy-policy', 'canva-app-store'], note: 'Els fitxers pujats es poden analitzar per entrenar els algorismes si no es desactiva a les preferències de privadesa.' }),
    row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['canva-privacy-policy'], note: 'Els dissenys, els documents i les presentacions són el contingut principal del servei.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['canva-app-store'], note: 'L’etiqueta declara l’historial de cerca vinculat a la persona i utilitzat també per a publicitat de tercers.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['canva-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['canva-privacy-policy', 'canva-app-store'], note: 'Les subscripcions i la impressió es cobren mitjançant passarel·les de pagament externes.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'personalitzacio-de-continguts'], sources: ['canva-app-store', 'canva-privacy-policy'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'seguretat-i-prevencio-del-frau'], sources: ['canva-app-store'], note: 'És l’única categoria declarada com a utilitzada per rastrejar.' }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['canva-privacy-policy', 'canva-app-store'], note: 'La política reconeix xarxes publicitàries com Google i Facebook.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'entrenament-de-models-dia', 'publicitat-personalitzada'], sources: ['canva-privacy-policy', 'canva-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['canva-privacy-policy'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['canva-app-store'] }),
    row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['canva-incident-2019'], note: 'Les contrasenyes es desen amb bcrypt; així consta a la comunicació de l’incident del 2019.' }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['canva-app-store'], 'L’etiqueta de l’App Store declara els identificadors com a dades utilitzades per rastrejar en altres aplicacions i webs.'),
    advertisingIdentifiers: f('yes', 'official', ['canva-privacy-policy', 'canva-app-store'], 'La política preveu publicitat mesurada i personalitzada amb xarxes com Facebook i Google.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['canva-app-store'], 'L’etiqueta inclou la «publicitat de tercers» entre les finalitats de la ubicació, el contacte, la cerca, els identificadors i l’ús.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['canva-privacy-policy'], 'Es pot desactivar a la pàgina de preferències de privadesa o escrivint a l’assistència.', {
      optOutUrl: 'https://www.canva.com/settings/privacy-preferences',
    }),
    profiling: f('yes', 'official', ['canva-privacy-policy'], 'La personalització de continguts i de publicitat es basa en el perfil d’activitat i d’interessos.'),
    aiTraining: f('yes', 'official', ['canva-privacy-policy'], 'La política diu que pot analitzar l’activitat, el contingut i els fitxers pujats per entrenar els seus algorismes; l’exclusió és un interruptor de les preferències de privadesa. El contingut de l’alumnat de Canva Education en queda exclòs.', {
      optOutUrl: 'https://www.canva.com/settings/privacy-preferences',
    }),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['canva-privacy-policy'], 'Proveïdors de facturació, allotjament i analítica, xarxes publicitàries, aplicacions integrades i, si s’usa un correu corporatiu, l’organització titular del domini.'),
    intraGroupSharing: f('yes', 'official', ['canva-privacy-policy'], 'Compartició amb les filials del grup, que inclou Affinity i Flourish.'),
    dataBrokerSales: f('partial', 'official', ['canva-privacy-policy'], 'La política no preveu vendre dades a intermediaris, però sí que les transferiria com a actiu en una fusió o adquisició.'),
    internationalTransfers: f('yes', 'official', ['canva-privacy-policy'], 'Tractament als Estats Units, Austràlia, Singapur, les Filipines, Nova Zelanda, la UE i el Regne Unit, amb el Marc de privadesa de dades UE-EUA i clàusules contractuals tipus per als països sense decisió d’adequació.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['canva-privacy-policy'], 'La política parla d’un «termini comercialment raonable» per al perfil i el contingut després de tancar el compte; només concreta terminis per als comptes educatius inactius.'),
    dataAfterDeletion: f('partial', 'official', ['canva-privacy-policy', 'canva-delete-account'], 'L’eliminació és definitiva als 14 dies, però la política es reserva conservar dades pels terminis legals i comptables.'),
    periods: [
      { dataType: 'identificador-de-compte', period: '14 dies des de la sol·licitud d’eliminació, període durant el qual encara es pot cancel·lar', sources: ['canva-delete-account'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['canva-delete-account']),
    selfService: f('yes', 'official', ['canva-delete-account'], 'Es fa des de la configuració del compte, amb confirmació per contrasenya o per codi enviat al correu.'),
    directUrl: 'https://www.canva.com/settings/login-and-security',
    difficulty: 'easy',
    waitingPeriodDays: 14,
    requiresSupportContact: false,
    steps: [
      'Si tens una subscripció de pagament, cancel·la-la primer perquè no es continuï cobrant.',
      'Descarrega els dissenys que vulguis conservar: no es podran recuperar.',
      'Entra al teu perfil, a «Your account» i després a «Account & security».',
      'A «Account Actions», tria «Delete account» i confirma amb la contrasenya o amb el codi que rebràs per correu.',
      'El compte s’elimina al cap de 14 dies; si tornes a entrar-hi abans, la sol·licitud es cancel·la.',
    ],
    obstacles:
      'Qui té un equip de creadors amb contingut publicat a la biblioteca no pot eliminar el compte sol i ha de passar per l’assistència.',
    dataRetained: 'El contingut i el perfil es conserven durant un «termini comercialment raonable» i la documentació de facturació, pels terminis legals.',
    sources: ['canva-delete-account', 'canva-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['canva-delete-account', 'canva-privacy-policy'], 'Es poden baixar els dissenys i els fitxers pujats des del compte, però no hi ha una exportació completa de les dades del perfil sense demanar-la.'),
    exportFormatQuality: 'mixed',
    rightsExercise: f('yes', 'official', ['canva-privacy-policy'], 'Canva no té establiment a la Unió Europea: els drets s’exerceixen davant del seu representant, European Data Protection Office (EDPO), a Dublín.', {
      url: 'https://edpo.com/gdpr-data-request/',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['canva-privacy-policy'], 'Hi ha una pàgina de preferències de privadesa amb l’exclusió de la publicitat personalitzada.', {
      url: 'https://www.canva.com/settings/privacy-preferences',
    }),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica d’ús.'),
    granularControls: f('partial', 'official', ['canva-privacy-policy'], 'Les preferències de privadesa separen la publicitat de l’entrenament de models, però no hi ha controls per finalitat més enllà d’això.'),
    defaultPosture: 'permissive',
    darkPatterns: f('partial', 'editorial', [], 'Que l’ús del contingut per entrenar algorismes estigui actiu per defecte i s’hagi de desactivar en una pàgina separada de la configuració és un consentiment desequilibrat: la decisió es pren sense que es plantegi.'),
    darkPatternList: [
      {
        type: 'unbalanced-consent',
        severity: 'medium',
        description:
          'L’ús de l’activitat i del contingut per entrenar els algorismes és la posició per defecte i només es desactiva anant a la pàgina de preferències de privadesa.',
        sources: ['canva-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: na('Els dissenys s’editen i es rendereixen als servidors de Canva, de manera que el xifratge d’extrem a extrem no hi és aplicable.'),
    transportEncryption: f('yes', 'official', ['canva-security'], 'Els dissenys només són accessibles per TLS/SSL.'),
    atRestEncryption: f('yes', 'official', ['canva-security'], 'Xifratge AES256 en repòs.'),
    mfa: f('yes', 'official', ['canva-security'], 'Ofereix verificació en dos passos i inici de sessió únic per a organitzacions.'),
    independentAudits: f('yes', 'official', ['canva-security'], 'ISO 27001, SOC 2 Type II, SOC 3, PCI DSS i adhesió al Marc de privadesa de dades.'),
    bugBounty: f('yes', 'official', ['canva-security-txt', 'canva-security'], 'Programa de recompenses a Bugcrowd, amb saló de la fama públic.', {
      url: 'https://bugcrowd.com/engagements/canva',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['canva-security-txt'], 'Fitxer security.txt amb política de divulgació, contacte i idioma preferit.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La filtració del 2019 és de les més grans del catàleg per nombre de comptes i, set mesos després, quatre milions de contrasenyes ja s’havien desxifrat. La resposta de l’empresa va ser pública i detallada, cosa que no sempre passa.',
    openQuestions: [
      'Quant dura exactament el «termini comercialment raonable» de conservació del contingut després de tancar el compte?',
      'L’exclusió de l’entrenament de models s’aplica retroactivament al contingut ja processat?',
    ],
  },
}

/* ═══════════════════════════ Retro ═══════════════════════════ */
const retro: AppSeed = {
  slug: 'retro',
  name: 'Retro',
  company: 'lone-palm-labs',
  categories: ['xarxes-socials'],
  tagline: 'Fotos només per a amics, però la baixa del compte passa per escriure als fundadors',
  summary:
    'Retro és un diari fotogràfic privat entre amics fet per un equip petit que ve d’Instagram. La política de privadesa és nord-americana i genèrica: no té secció europea ni representant a la UE, i l’única manera que hi consta per esborrar el compte és escriure a founders@retro.app. A canvi, l’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar, i això la separa de gairebé tota la resta d’aplicacions socials del catàleg.',
  platforms: ['ios', 'android'],
  businessModel: 'freemium',
  jurisdiction: 'Estats Units',
  userBase: 'Aplicació petita, sense xifres d’ús publicades',
  links: {
    website: 'https://retro.app/',
    privacyPolicy: 'https://retro.app/privacy',
    terms: 'https://retro.app/terms',
    appStore: appStore('6443709020'),
  },
  accountRequired: f('yes', 'official', ['retro-privacy-policy'], 'El registre demana nom, nom d’usuari i número de telèfon.'),
  openSource: f('no', 'official', ['retro-terms'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les fotos setmanals amb amics, amb la ubicació que la càmera hi afegeix i que es mostra als contactes per defecte, dibuixen amb qui es passa el temps i on. La llista de contactes puja al servidor quan s’usa la cerca d’amics: dades de persones que no han acceptat res.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['retro-privacy-policy', 'retro-app-store'] }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['retro-privacy-policy'], note: 'El nom d’usuari és públic al perfil.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['retro-privacy-policy'], note: 'És obligatori per crear el compte, però no es mostra al perfil si no es vol.' }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['retro-privacy-policy', 'retro-app-store'], note: 'La política demana que només es comparteixin contactes de persones properes o que hi hagin consentit: el consentiment de tercers es delega a qui instal·la l’aplicació.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['retro-privacy-policy', 'retro-app-store'] }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['retro-privacy-policy'], note: 'La ubicació de les fotos i els vídeos, presa de la càmera del sistema, es mostra als amics per defecte.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['retro-privacy-policy'], note: 'Geolocalització aproximada deduïda de l’adreça IP.' }),
    row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['retro-privacy-policy'] }),
    row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['retro-privacy-policy'], note: 'La subscripció Retro Premium es cobra amb Stripe, que rep les dades financeres; l’empresa diu que no en conserva cap.' }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['retro-privacy-policy'], note: 'Els missatges directes entre persones usuàries no es tracten com a informació pública.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['retro-privacy-policy', 'retro-app-store'], note: 'S’envien a Google Analytics.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['retro-privacy-policy', 'retro-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['retro-privacy-policy'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['retro-privacy-policy'], note: 'La política preveu galetes de socis de màrqueting, publicitat i xarxes socials.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['retro-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['retro-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('partial', 'official', ['retro-privacy-policy'], 'La política preveu socis publicitaris i galetes d’atribució, però l’etiqueta no declara cap identificador publicitari.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['retro-privacy-policy'], 'Google Analytics i socis de màrqueting i de xarxes socials.'),
  },
  dataUses: {
    targetedAdvertising: f('partial', 'official', ['retro-privacy-policy'], 'L’aplicació no mostra publicitat, però la política reserva la compartició amb socis publicitaris per a atribució i mesura, i parla de personalització contextual d’anuncis.'),
    profiling: f('partial', 'official', ['retro-privacy-policy'], 'Diu que tracta les dades per entendre millor els interessos, els comportaments i la demografia de les persones usuàries; no descriu perfils individuals per a publicitat.'),
    aiTraining: unknown('La política no diu res sobre l’ús de les fotos per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['retro-privacy-policy'], 'Allotjament al núvol (Amazon Web Services), pagaments amb Stripe, verificació d’identitat, analítica i socis publicitaris.'),
    intraGroupSharing: f('partial', 'official', ['retro-privacy-policy'], 'La política preveu compartir amb filials i societats matrius; l’empresa és petita i no consta que en tingui.'),
    dataBrokerSales: f('no', 'official', ['retro-privacy-policy'], 'Diu que no comparteix dades personals amb tercers que vulguin promocionar els seus productes, tret que s’hi consenti.'),
    internationalTransfers: f('yes', 'official', ['retro-privacy-policy'], 'El tractament es fa als Estats Units. La política no esmenta cap mecanisme de transferència del RGPD.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'low',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['retro-privacy-policy'], 'No hi ha cap termini concret: es conserva la informació mentre hi hagi compte i mentre calgui per a obligacions fiscals, legals o d’assegurança.'),
    dataAfterDeletion: f('partial', 'official', ['retro-privacy-policy'], 'Després de la sol·licitud d’esborrament, una part de la informació pot quedar a còpies de seguretat i arxius, i es poden conservar dades de comptes tancats per frau o seguretat per impedir que se’n tornin a obrir.'),
  },
  accountDeletion: {
    possible: f('yes', 'official', ['retro-privacy-policy']),
    selfService: f('no', 'official', ['retro-privacy-policy'], 'L’únic camí que documenta la política és escriure a founders@retro.app. No hem pogut verificar si l’aplicació ofereix l’opció a la configuració, com exigeixen les normes de l’App Store.'),
    difficulty: 'medium',
    requiresSupportContact: true,
    steps: [
      'Escriu a founders@retro.app demanant l’eliminació del compte i de les dades personals.',
      'Indica-hi el número de telèfon i el nom d’usuari amb què et vas registrar.',
      'Guarda la resposta com a prova: no hi ha cap termini compromès.',
    ],
    obstacles:
      'La política no fixa cap termini de resposta i es reserva no esborrar el compte si hi ha deutes, disputes o investigacions obertes.',
    dataRetained: 'Còpies de seguretat, dades de transaccions i informació necessària per a obligacions legals o per prevenir el frau.',
    sources: ['retro-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['retro-privacy-policy'], 'El dret de portabilitat es reconeix per correu electrònic, sense cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['retro-privacy-policy'], 'Hi ha un únic contacte, founders@retro.app. La política detalla els drets de Califòrnia i de Nevada, però no té secció del RGPD ni consta representant a la Unió Europea.', {
      url: 'mailto:founders@retro.app',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['retro-privacy-policy'], 'Remet als mecanismes genèrics del sector i a la configuració del navegador, no a un control dins de l’aplicació.'),
    telemetryOptOut: f('partial', 'official', ['retro-privacy-policy'], 'Enllaça l’exclusió de Google Analytics; no hi ha cap control propi.'),
    granularControls: unknown('No hem trobat documentació sobre els controls de privadesa de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'editorial', [], 'Mostrar per defecte als amics la ubicació d’on s’ha fet cada foto, i explicar-ho només a la política de privadesa, és una opció preseleccionada amb conseqüències que no es plantegen en el moment de publicar.'),
    darkPatternList: [
      {
        type: 'preselected',
        severity: 'medium',
        description:
          'La ubicació de les fotos i els vídeos, presa de la càmera del sistema, es mostra als amics per defecte segons la política de privadesa.',
        sources: ['retro-privacy-policy'],
      },
    ],
  },
  security: {
    e2ee: f('no', 'official', ['retro-privacy-policy'], 'La política descriu xifratge SSL en trànsit, però no xifratge d’extrem a extrem de les fotos ni dels missatges.'),
    transportEncryption: f('yes', 'official', ['retro-privacy-policy'], 'Xifratge SSL de la informació sensible en trànsit.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('L’accés es fa amb el número de telèfon i un codi; no hem trobat documentació sobre cap segon factor addicional.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: f('no', 'official', ['retro-security-txt'], 'El domini retro.app no publica cap fitxer security.txt: la consulta retorna un error 404.'),
  },
  alternatives: [
    {
      app: 'signal',
      comparability: 'partial',
      rationale:
        'Per compartir fotos amb un grup reduït d’amics, un grup de Signal ofereix la mateixa funció bàsica amb xifratge d’extrem a extrem i sense servidors que conservin el contingut.',
      tradeOffs: 'No hi ha diari fotogràfic, ni resums setmanals, ni descoberta d’amics.',
    },
  ],
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'És una aplicació petita amb una política de privadesa de plantilla nord-americana. La troballa útil no és cap pràctica agressiva, sinó el desajust entre un producte pensat per a l’esfera privada i un text legal que preveu socis publicitaris, verificació d’identitat i cap garantia europea.',
    openQuestions: [
      'L’aplicació ofereix l’eliminació del compte des de la configuració, com exigeix l’App Store des del 2022?',
      'Hi ha representant a la Unió Europea segons l’article 27 del RGPD?',
    ],
  },
}

/* ═══════════════════════════ Plazo ═══════════════════════════ */
const plazo: AppSeed = {
  slug: 'plazo',
  name: 'Plazo',
  company: 'idfinance-plazo',
  categories: ['banca-i-finances'],
  tagline: 'Crèdit al consum amb decisió automatitzada, fitxers de morositat i dades sensibles declarades a l’etiqueta de l’App Store',
  summary:
    'Plazo no és un banc: és la targeta i la línia de crèdit del grup ID Finance, amb el diner electrònic emès per Pecunia Cards. Per concedir-la, la solvència s’avalua de manera automatitzada amb consultes a ASNEF-Equifax, a CIREX d’Experian i als registres de la Seguretat Social. La política és, de tot el lot, la que descriu més usos operatius d’intel·ligència artificial: assistents de veu generativa per reclamar deute, amb gravacions i transcripcions processades per aquests sistemes.',
  platforms: ['ios', 'android'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.plazo.es/',
    privacyPolicy: 'https://www.plazo.es/privacidad/',
    appStore: appStore('1551296252'),
  },
  accountRequired: f('yes', 'official', ['plazo-privacy-policy'], 'El servei és una línia de crèdit: cal identificar-se amb document oficial, selfie i dades econòmiques.'),
  openSource: f('no', 'official', ['plazo-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La combinació d’ingressos, despesa mitjana, saldos, tipus d’habitatge, nombre de fills i situació laboral és un retrat econòmic complet. Passada per un model automàtic, decideix si es té crèdit i per quant, i acaba en fitxers de solvència que altres entitats consulten durant cinc anys.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['plazo-privacy-policy', 'plazo-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['plazo-privacy-policy'], note: 'Imatge del DNI o NIE i selfie per a la verificació d’identitat.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['plazo-privacy-policy'] }),
    row('genere', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['plazo-privacy-policy'] }),
    row('situacio-familiar', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['plazo-privacy-policy'], note: 'Estat civil i nombre de fills, dades que entren a l’avaluació de solvència.' }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['plazo-privacy-policy'], note: 'Ingressos mensuals, despesa mitjana, saldos i historial bancari.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['plazo-privacy-policy'], note: 'Situació laboral verificada amb la plataforma Belender contra els registres de la Seguretat Social.' }),
    row('nivell-formatiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils'], sources: ['plazo-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['plazo-privacy-policy', 'plazo-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['plazo-privacy-policy', 'plazo-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['plazo-privacy-policy', 'plazo-app-store'] }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['plazo-privacy-policy', 'plazo-app-store'], note: 'El compte i la targeta els emet Pecunia Cards EDE; hi intervé també Paynopain com a entitat de pagament.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['plazo-app-store', 'plazo-privacy-policy'] }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['plazo-privacy-policy'], note: 'Gravacions i transcripcions de veu processades per sistemes d’IA de reconeixement i síntesi, també per a recobrament.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['plazo-privacy-policy'], note: 'El selfie i la gravació de veu es demanen amb consentiment per a la verificació d’identitat.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['plazo-app-store', 'plazo-privacy-policy'], note: 'És l’única categoria declarada com a utilitzada per rastrejar.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['plazo-privacy-policy', 'plazo-app-store'], note: 'Microsoft Clarity enregistra les sessions: clics, desplaçaments i recorregut per l’aplicació.' }),
    row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['plazo-privacy-policy'], note: 'Cessió a Meta Platforms Ireland, amb consentiment, per crear audiències i optimitzar campanyes.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['plazo-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['plazo-app-store'], 'L’etiqueta declara els identificadors com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['plazo-privacy-policy'], 'Cessió a Meta Platforms Ireland per mesurar conversions i personalitzar anuncis a Facebook i Instagram, amb consentiment.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['plazo-privacy-policy'], 'Microsoft Clarity per a l’enregistrament de sessions i eines de Meta per a publicitat.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['plazo-privacy-policy'], 'Amb consentiment, revocable escrivint al delegat de protecció de dades.', {
      optOutUrl: 'mailto:dpd@plazo.es',
    }),
    profiling: f('yes', 'official', ['plazo-privacy-policy'], 'Perfilat per avaluar la solvència, concedir o modificar el límit de crèdit i detectar frau, amb dret a oposició i a revisió humana.'),
    aiTraining: f('no', 'official', ['plazo-privacy-policy'], 'La política descriu un ús operatiu intens d’IA (assistents virtuals, IVR, síntesi de veu per a recobrament) però no preveu utilitzar les dades per entrenar models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['plazo-privacy-policy'], 'Pecunia Cards, Paynopain, ASNEF-Equifax, Experian, proveïdors d’IA i de verificació d’identitat, i compradors de carteres de deute.'),
    intraGroupSharing: f('yes', 'official', ['plazo-privacy-policy'], 'Empreses del grup ID Finance, també per obtenir dades per a la puntuació de risc creditici i de frau.'),
    dataBrokerSales: f('partial', 'official', ['plazo-privacy-policy'], 'No hi ha venda de dades per a màrqueting, però sí cessió a tercers adquirents en la venda de carteres de deute.'),
    internationalTransfers: f('yes', 'official', ['plazo-privacy-policy'], 'Proveïdors d’IA i de síntesi de veu als Estats Units i Microsoft Clarity, amb clàusules contractuals tipus o normes corporatives vinculants.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['plazo-privacy-policy'], 'La política fixa terminis per obligació: deu anys per la llei de prevenció del blanqueig, sis per les obligacions comptables i mercantils i cinc per la prescripció de les accions del contracte.'),
    dataAfterDeletion: f('yes', 'official', ['plazo-privacy-policy'], 'Tancar el compte no atura aquests terminis: les dades queden bloquejades fins que s’esgoten.'),
    periods: [
      { dataType: 'document-identificatiu-oficial', period: '10 anys des de la fi de la relació, per la Llei 10/2010 de prevenció del blanqueig', sources: ['plazo-privacy-policy'] },
      { dataType: 'historial-de-compres', period: '6 anys per obligacions comptables i mercantils', sources: ['plazo-privacy-policy'] },
      { dataType: 'nivell-d-ingressos', period: '5 anys als sistemes d’informació creditícia des de la fi de l’operació', sources: ['plazo-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['plazo-delete-account']),
    selfService: f('yes', 'official', ['plazo-delete-account'], 'El centre d’ajuda diu que el compte es pot cancel·lar des de la mateixa aplicació; el detall dels passos es carrega amb JavaScript i no l’hem pogut verificar.'),
    directUrl: 'https://support.plazo.es/support/solutions/articles/101000507226',
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'Cancel·la abans la subscripció de la targeta perquè no es continuï cobrant.',
      'Amortitza el saldo pendent de la línia de crèdit: amb deute viu no es pot tancar.',
      'Cancel·la el compte des de l’aplicació, segons indica el centre d’ajuda.',
      'Si vols l’esborrament de les dades que la llei permeti suprimir, escriu a dpd@plazo.es.',
    ],
    obstacles:
      'Tancar el compte no esborra res: els deu anys de conservació per prevenció del blanqueig i els cinc anys als fitxers de solvència continuen corrent.',
    dataRetained: 'Documentació d’identitat i operacions durant deu anys, comptabilitat durant sis i dades als sistemes d’informació creditícia durant cinc.',
    sources: ['plazo-delete-account', 'plazo-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['plazo-privacy-policy'], 'La portabilitat i una còpia gratuïta de les dades es reconeixen, però s’han de demanar per correu.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['plazo-privacy-policy'], 'Delegat de protecció de dades propi, amb termini d’un mes prorrogable a dos.', {
      url: 'mailto:dpd@plazo.es',
      responseTimeDays: 30,
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['plazo-privacy-policy'], 'El consentiment per a la cessió publicitària es revoca escrivint al delegat de protecció de dades, no des de l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’enregistrament de sessions de Microsoft Clarity.'),
    granularControls: unknown('La política no documenta cap panell de preferències de privadesa dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('partial', 'official', ['plazo-privacy-policy'], 'La política parla genèricament de tècniques de xifratge i d’anonimització, sense detallar-les.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat documentació oficial sobre la verificació en dos passos; el centre d’ajuda esmenta accés biomètric.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt als dominis de Plazo ni d’ID Finance, ni cap canal públic documentat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La societat germana ID Finance Spain, del mateix grup, acumula sancions de l’AEPD per incloure persones en fitxers de morositat sense base jurídica. No són de Plazo, però expliquen com el grup gestiona el deute i per això consten a la fitxa del grup.',
    openQuestions: [
      'Quins són els passos exactes i el termini per cancel·lar el compte des de l’aplicació?',
      'L’enregistrament de sessions de Microsoft Clarity es pot rebutjar sense deixar d’utilitzar el servei?',
    ],
  },
}

/* ═══════════════════════════ Cetelem ═══════════════════════════ */
const cetelem: AppSeed = {
  slug: 'cetelem',
  name: 'Cetelem',
  company: 'banco-cetelem',
  categories: ['banca-i-finances'],
  tagline: 'Una denegació de crèdit pot ser definitiva sense que hi intervingui cap persona',
  summary:
    'Cetelem és la marca de crèdit al consum de BNP Paribas Personal Finance a Espanya. L’avís de protecció de dades és dels més explícits del lot: diu que, si el sistema de puntuació respon amb un rebuig directe, l’operació es dona per rebutjada sense intervenció humana posterior. Consulta la CIRBE, ASNEF i BADEXCUG, i fins a cinc fitxers antifrau, i el perfil comercial avançat pot arribar a set anys d’històric.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.cetelem.es/',
    privacyPolicy: 'https://www.cetelem.es/proteccion-de-datos',
    appStore: appStore('1246674535'),
  },
  accountRequired: f('yes', 'official', ['cetelem-privacy-policy'], 'L’aplicació és l’espai de client d’un contracte de crèdit o d’una targeta ja signats.'),
  openSource: f('no', 'official', ['cetelem-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Les dades transaccionals inclouen l’import, la data, l’hora, el tipus d’operació i qui n’és el beneficiari: el mapa complet de què es compra, quan i a qui es paga. A sobre s’hi construeix un perfil comercial que pot mirar set anys enrere i que es fa servir per oferir productes de socis de sectors que no tenen res a veure amb el crèdit.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['cetelem-privacy-policy'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['cetelem-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cetelem-privacy-policy', 'cetelem-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['cetelem-privacy-policy', 'cetelem-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['cetelem-privacy-policy', 'cetelem-app-store'], note: 'La política preveu comunicacions comercials per SMS, MMS, correu, WhatsApp o xarxes socials.' }),
    row('situacio-familiar', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['cetelem-privacy-policy'] }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'prestacio-del-servei'], sources: ['cetelem-privacy-policy'] }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['cetelem-privacy-policy'], note: 'Les dades econòmiques es contrasten amb la CIRBE del Banc d’Espanya, ASNEF i BADEXCUG.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['cetelem-privacy-policy', 'cetelem-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['cetelem-privacy-policy'], note: 'Moviments, saldos, imports, dates, hores i dades de les persones beneficiàries de cada operació.' }),
    row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['cetelem-privacy-policy'], note: 'Només si es contracten assegurances vinculades al crèdit.' }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['cetelem-privacy-policy'], note: 'Converses telefòniques enregistrades, xats i converses amb el chat-bot.' }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['cetelem-app-store'], note: 'L’etiqueta declara fotos o vídeos vinculats a la persona per a la funcionalitat de l’aplicació.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['cetelem-app-store'], note: 'És l’única categoria declarada com a utilitzada per rastrejar.' }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['cetelem-app-store', 'cetelem-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['cetelem-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['cetelem-privacy-policy'], note: 'Les dades de navegació es cedeixen a xarxes socials perquè mostrin anuncis segons el perfil.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['cetelem-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['cetelem-app-store'], 'L’etiqueta declara els identificadors com a dades utilitzades per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['cetelem-privacy-policy', 'cetelem-app-store'], 'Cessió de dades de navegació a xarxes socials per mostrar anuncis segons el perfil.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['cetelem-privacy-policy'], 'La política de cookies preveu rastrejadors publicitaris de tercers.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['cetelem-privacy-policy'], 'Ofertes pròpies i de «socis de confiança» de sectors tan diversos com l’automoció, l’energia, el tèxtil o les reformes.'),
    profiling: f('yes', 'official', ['cetelem-privacy-policy'], 'Perfil comercial avançat amb fins a set anys d’històric, puntuació de risc creditici i puntuació automàtica de prevenció del blanqueig.'),
    aiTraining: unknown('L’avís de protecció de dades no esmenta l’entrenament de models ni l’aprenentatge automàtic.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['cetelem-privacy-policy'], 'Sistemes d’informació creditícia (CIRBE, ASNEF, BADEXCUG), fitxers antifrau (Confirma, Hunter, FraudNet, Redsys, Iberpay), asseguradores, concessionaris, contact centers i compradors de carteres de deute.'),
    intraGroupSharing: f('yes', 'official', ['cetelem-privacy-policy'], 'Entitats del grup BNP Paribas, també per a l’intercanvi d’informació de prevenció del blanqueig, anticorrupció i sancions internacionals.'),
    dataBrokerSales: f('partial', 'official', ['cetelem-privacy-policy'], 'No hi ha venda de dades per a màrqueting, però sí cessió a empreses de compra de carteres de deute.'),
    internationalTransfers: f('yes', 'official', ['cetelem-privacy-policy'], 'Decisió d’adequació quan n’hi ha; si no, clàusules contractuals tipus, normes corporatives vinculants o les excepcions de l’article 49.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['cetelem-privacy-policy'], 'Durada del contracte més deu anys per a les dades de les operacions, vint anys si hi ha dipòsits abandonats en comptes tancats, i deu anys de bloqueig per la Llei 10/2010.'),
    dataAfterDeletion: f('yes', 'official', ['cetelem-privacy-policy'], 'Les dades queden bloquejades i només es tracten per atendre autoritats durant els terminis legals.'),
    periods: [
      { dataType: 'historial-de-compres', period: '10 anys des de la fi de la relació contractual', sources: ['cetelem-privacy-policy'] },
      { dataType: 'document-identificatiu-oficial', period: '10 anys de bloqueig per la Llei 10/2010 de prevenció del blanqueig', sources: ['cetelem-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['cetelem-privacy-policy'], 'Es pot resoldre el contracte, però l’esborrament de les dades està limitat pels terminis legals i el dret d’accés a les dades de prevenció del blanqueig s’ha d’exercir a través de l’AEPD.'),
    selfService: f('no', 'official', ['cetelem-contacte'], 'No hi ha cap opció de baixa a l’aplicació: cal fer servir el formulari de sol·licituds de la zona de client, el telèfon o el correu registrat.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Liquida el saldo pendent del crèdit o de la targeta.',
      'Entra a la zona de client, a l’aplicació o al web, i envia la sol·licitud de baixa pel formulari de sol·licituds.',
      'La petició ha d’arribar des de la mateixa adreça electrònica registrada al contracte.',
      'Per exercir els drets de protecció de dades, escriu a dpo@cetelem.es adjuntant còpia del document d’identitat.',
    ],
    obstacles:
      'Cal adjuntar còpia del DNI per exercir qualsevol dret, i l’accés a les dades tractades per prevenció del blanqueig només es pot demanar a través de l’Agència Espanyola de Protecció de Dades.',
    dataRetained: 'Dades de les operacions durant deu anys, vint si hi ha dipòsits abandonats, i impagaments als fitxers de solvència segons la LOPDGDD.',
    sources: ['cetelem-privacy-policy', 'cetelem-contacte'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['cetelem-privacy-policy'], 'La portabilitat es reconeix en format estructurat i de lectura mecànica, però s’ha de demanar per correu i amb còpia del document d’identitat.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('partial', 'official', ['cetelem-privacy-policy'], 'Hi ha delegat de protecció de dades, però l’exigència de còpia del DNI i el desviament del dret d’accés a l’AEPD per a les dades de blanqueig hi posen fricció.', {
      url: 'mailto:dpo@cetelem.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['cetelem-privacy-policy'], 'Les comunicacions comercials i la cessió a socis depenen del consentiment i es poden revocar, però no hi ha cap panell dins de l’aplicació.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: unknown('L’avís no documenta cap panell de preferències de privadesa dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('No hem trobat cap documentació oficial sobre el xifratge en trànsit de l’aplicació.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat documentació oficial sobre la verificació en dos passos.'),
    independentAudits: unknown('No consten auditories ni certificacions publicades per a Cetelem Espanya.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses de Cetelem Espanya.'),
    vulnerabilityDisclosure: unknown('No hi ha fitxer security.txt a cetelem.es ni cap canal públic documentat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La frase de l’annex de puntuació —el rebuig directe es dona per definitiu «sense intervenció humana posterior»— és de les poques vegades que una entitat espanyola ho escriu tan clarament. El cas sancionat el 2024, en què van cobrar mesos el deute d’un desconegut al compte d’una altra persona, mostra el cost pràctic d’aquesta automatització.',
    openQuestions: [
      'Quina és la data de vigència de l’avís de protecció de dades? El document no en porta cap.',
      'Quin és el procediment oficial i el termini per donar de baixa una targeta?',
    ],
  },
}

/* ═══════════════════════════ Bankinter ═══════════════════════════ */
const bankinter: AppSeed = {
  slug: 'bankinter',
  name: 'Bankinter',
  company: 'bankinter',
  categories: ['banca-i-finances'],
  tagline: 'Les dades dels exclients es poden conservar fins a vuitanta anys, i les dels clients serveixen per construir models d’IA',
  summary:
    'El document de vint-i-tants apartats de Bankinter és el més detallat del lot i també el que revela els terminis més llargs: fins a vuitanta anys d’informació d’exclients per si es discuteix la nul·litat d’una clàusula, i sis anys de justificants de sol·licituds de crèdit encara que s’hagin denegat. És l’únic banc del lot que declara expressament que tracta dades de clients per desenvolupar i validar models d’intel·ligència artificial, per interès legítim. A canvi, és l’única aplicació del lot financer que no declara cap dada utilitzada per rastrejar.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.bankinter.com/',
    privacyPolicy: 'https://www.bankinter.com/banca/nav/seguridad-privacidad',
    appStore: appStore('356160865'),
  },
  accountRequired: f('yes', 'official', ['bankinter-privacy-policy'], 'L’aplicació és la banca en línia del banc: cal ser-ne client.'),
  openSource: f('no', 'official', ['bankinter-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Saldos mitjans, moviments i productes contractats alimenten un perfil comercial que, amb consentiment, es completa amb registres públics, sistemes d’informació creditícia, la CIRBE, xarxes socials i Informa. És la imatge econòmica d’una persona vista alhora des de dins i des de fora del banc.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bankinter-privacy-policy'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bankinter-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bankinter-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bankinter-privacy-policy'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['bankinter-privacy-policy'] }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'prestacio-del-servei'], sources: ['bankinter-privacy-policy'], note: 'Les dades professionals i socioeconòmiques són una de les categories que s’utilitzen per desenvolupar models d’IA.' }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['bankinter-privacy-policy'], note: 'Es contrasta amb la CIRBE del Banc d’Espanya, ASNEF-Equifax, BADEXCUG i el Registre d’Acceptacions Impagades.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'prestacio-del-servei'], sources: ['bankinter-privacy-policy'], note: 'Les dades transaccionals agregades, com els saldos mitjans, formen el perfil comercial bàsic per interès legítim.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bankinter-privacy-policy'] }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bankinter-security'], note: 'L’empremta o el reconeixement facial per entrar a l’aplicació es queden al contenidor segur del telèfon i no es sincronitzen amb iCloud ni amb les còpies de seguretat.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['bankinter-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['bankinter-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['bankinter-app-store'] }),
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bankinter-app-store'], note: 'L’etiqueta la declara no vinculada a la persona, per a la funcionalitat de l’aplicació.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['bankinter-app-store'] }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['bankinter-privacy-policy'], note: 'Les gestions per banca telefònica s’enregistren.' }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['bankinter-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('partial', 'official', ['bankinter-app-store'], 'L’identificador d’usuari es declara per a publicitat o màrqueting del desenvolupador, però no hi ha identificadors publicitaris de tercers.'),
    thirdPartyTrackersPresent: unknown('No hem pogut verificar quins rastrejadors incorpora l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['bankinter-privacy-policy'], 'Comunicacions comercials pròpies i del grup, amb consentiment per al perfil comercial avançat.'),
    profiling: f('yes', 'official', ['bankinter-privacy-policy'], 'Perfil comercial bàsic per interès legítim i perfil avançat amb consentiment, que pot consultar registres públics, sistemes d’informació creditícia, la CIRBE, xarxes socials i Informa. Hi ha decisions automatitzades sense validació humana, com el test d’idoneïtat que bloqueja la contractació d’un producte.'),
    aiTraining: f('yes', 'official', ['bankinter-privacy-policy'], 'El document dedica un apartat al desenvolupament, la modificació i la validació de models algorísmics d’intel·ligència artificial amb dades de clients, per interès legítim. Diu que no en fa perfils ni hi tracta categories especials, i que aplica xifratge, agregació o pseudonimització quan no afecta l’exactitud.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['bankinter-privacy-policy'], 'Sistemes d’informació creditícia (CIRBE, ASNEF-Equifax, BADEXCUG, RAI), autoritats judicials i administratives, i encarregats del tractament.'),
    intraGroupSharing: f('yes', 'official', ['bankinter-privacy-policy'], 'Empreses del grup Bankinter i participades; per elaborar-hi perfil comercial cal consentiment.'),
    dataBrokerSales: unknown('El document no diu si cedeix dades a intermediaris de dades.'),
    internationalTransfers: f('partial', 'official', ['bankinter-privacy-policy'], 'Diu que amb caràcter general només tracta les dades dins de l’Espai Econòmic Europeu i que, si hi ha destinataris fora, adoptarà «les mesures i salvaguardes establertes a la normativa», sense concretar cap mecanisme ni cap destí.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['bankinter-privacy-policy'], 'El document porta una taula de terminis per finalitat, amb xifres poc habituals de trobar publicades.'),
    dataAfterDeletion: f('yes', 'official', ['bankinter-privacy-policy'], 'Un cop esgotats els terminis, les dades es bloquegen; part de la informació d’exclients es pot conservar fins a vuitanta anys.'),
    periods: [
      { dataType: 'identificador-de-compte', period: 'Fins a 80 anys per a certa informació d’exclients, per l’acció de nul·litat de clàusules abusives', sources: ['bankinter-privacy-policy'] },
      { dataType: 'nivell-d-ingressos', period: '6 anys els justificants de sol·licituds de crèdit, també si s’han denegat', sources: ['bankinter-privacy-policy'] },
      { dataType: 'document-identificatiu-oficial', period: '10 anys per prevenció del blanqueig des de la fi de la relació', sources: ['bankinter-privacy-policy'] },
      { dataType: 'adreca-electronica', period: '3 anys les comunicacions comercials; 3 mesos si el procés de contractació s’interromp', sources: ['bankinter-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['bankinter-privacy-policy'], 'Es pot cancel·lar la relació contractual, però l’esborrament efectiu xoca amb terminis que arriben als deu anys per blanqueig i als vuitanta per a certa informació d’exclients.'),
    selfService: unknown('No hem trobat cap document oficial de Bankinter que descrigui el tancament del compte ni si es pot fer des de l’aplicació.'),
    difficulty: 'unknown',
    requiresSupportContact: true,
    steps: [
      'Deixa el compte a zero i cancel·la els productes associats (targetes, rebuts domiciliats, préstecs).',
      'Demana la cancel·lació per banca telefònica, a l’oficina o a l’Àrea Client del web i de l’aplicació.',
      'Per exercir els drets de protecció de dades, escriu a privacidad@bankinter.com o adreça’t a l’Àrea Client.',
      'Demana el justificant del tancament per escrit.',
    ],
    obstacles:
      'El banc no publica cap guia del procediment. La conservació de fins a vuitanta anys de certa informació d’exclients fa que tancar el compte no equivalgui, ni de lluny, a desaparèixer dels seus sistemes.',
    dataRetained: 'Informació d’exclients fins a vuitanta anys, deu anys de dades de prevenció del blanqueig i sis anys de justificants de sol·licituds de crèdit.',
    sources: ['bankinter-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['bankinter-privacy-policy'], 'La portabilitat es reconeix; no hem trobat cap eina d’exportació autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['bankinter-privacy-policy'], 'Delegat de protecció de dades i diversos canals: correu, banca telefònica, oficina i Àrea Client del web i de l’aplicació.', {
      url: 'mailto:privacidad@bankinter.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['bankinter-privacy-policy'], 'El perfil comercial avançat i les comunicacions comercials depenen del consentiment, revocable des de l’Àrea Client.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: f('partial', 'official', ['bankinter-privacy-policy'], 'L’Àrea Client del web i de l’aplicació serveix per revocar consentiments, però no consta cap panell de preferències per finalitat.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('yes', 'official', ['bankinter-security'], 'Certificat de validació estesa emès per Entrust i xifratge de tota la informació transmesa.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: f('yes', 'official', ['bankinter-security'], 'Targeta de claus amb coordenades introduïdes en un panell gràfic per signar operacions, i entrada biomètrica amb la clau desada al contenidor segur del telèfon.', {
      methods: ['app-push', 'sms'],
    }),
    independentAudits: f('yes', 'official', ['bankinter-security'], 'Certificació simultània ISO 22301:2019 i ISO/IEC 27001:2022 per BSI, i després ISO/IEC 27017:2015, amb tests d’intrusió interns i externs periòdics.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('El fitxer security.txt no es pot consultar: el tallafoc del web respon amb un repte i no serveix el fitxer.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'Bankinter va absorbir EVO Banco l’abril de 2025 i, com a successora legal, va assumir la responsabilitat de la bretxa d’EVO de 2024. És un recordatori útil: en una fusió bancària, les dades i els incidents canvien de mans alhora.',
    openQuestions: [
      'Quin és el procediment oficial per tancar un compte i quants dies triga?',
      'Quin mecanisme de transferència internacional s’aplica quan hi ha proveïdors fora de l’Espai Econòmic Europeu?',
    ],
  },
}

/* ═══════════════════════════ Klarna ═══════════════════════════ */
const klarna: AppSeed = {
  slug: 'klarna',
  name: 'Klarna',
  company: 'klarna-bank',
  categories: ['banca-i-finances'],
  tagline: 'Tot el que declara a l’App Store queda vinculat a la teva identitat, i res no hi consta com a no vinculat',
  summary:
    'Klarna decideix de manera automatitzada si et concedeix un crèdit, si ets un risc de frau i, quan hi ha una compra impugnada, qui en té la responsabilitat. A Espanya envia l’adreça, la data de naixement i el DNI a una agència de crèdit i avisa que la consulta afectarà la qualificació creditícia. L’etiqueta de l’App Store no té cap categoria «no vinculada amb tu»: tot el que recull queda lligat a la persona, i els identificadors i les dades d’ús es declaren per rastrejar.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'commerce',
  jurisdiction: 'Suècia',
  userBase: 'Més de 100 milions de persones usuàries actives declarades per l’empresa',
  links: {
    website: 'https://www.klarna.com/es/',
    privacyPolicy: 'https://cdn.klarna.com/1.0/shared/content/legal/terms/0/es_es/privacy',
    appStore: appStore('1115120118'),
  },
  accountRequired: f('yes', 'official', ['klarna-privacy-policy'], 'Pagar a terminis exigeix identificació i avaluació de solvència.'),
  openSource: f('no', 'official', ['klarna-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Klarna veu alhora què compres, a quines botigues, si pagues tard i quina és la teva situació financera. Amb les funcions de finances personals arriba als comptes bancaris externs, i amb el navegador propi, als llocs que visites. És una posició d’observació que cap botiga té per separat.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['klarna-privacy-policy', 'klarna-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['klarna-privacy-policy'], note: 'Fotos i vídeos del document d’identitat, signatures electròniques reconegudes i, a Espanya, enviament del DNI a l’agència de crèdit.' }),
    row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['klarna-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['klarna-privacy-policy', 'klarna-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['klarna-privacy-policy', 'klarna-app-store'] }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['klarna-privacy-policy', 'klarna-app-store'] }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['klarna-privacy-policy'], note: 'Ingressos, crèdits, historial de pagaments negatius i aprovacions de crèdit anteriors.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['klarna-privacy-policy', 'klarna-app-store'], note: 'Número de targeta, caducitat, codi CVV, compte bancari i dades d’accés al banc per a les funcions d’agregació.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['klarna-privacy-policy', 'klarna-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['klarna-privacy-policy', 'klarna-app-store'], note: 'Els llocs visitats amb el navegador intern de l’aplicació o amb l’extensió del navegador.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['klarna-app-store'] }),
    row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['klarna-privacy-policy'], note: 'La funció de seguiment de comandes llegeix el correu electrònic que s’hi connecta.' }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['klarna-privacy-policy'], note: 'Trucades enregistrades o transcrites, i converses amb l’assistent d’IA, que es conserven fins a sis mesos.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['klarna-app-store'] }),
    row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['klarna-privacy-policy', 'klarna-app-store'], note: 'La política esmenta expressament l’identificador publicitari del mòbil.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['klarna-privacy-policy', 'klarna-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada', 'elaboracio-de-perfils'], sources: ['klarna-app-store', 'klarna-privacy-policy'] }),
    row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['klarna-privacy-policy'], note: 'La política inclou les dades sensibles entre les categories que pot tractar, sobretot per les llistes de sancions i de persones políticament exposades.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['klarna-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['klarna-app-store'], 'L’etiqueta declara identificadors i dades d’ús utilitzats per rastrejar.'),
    advertisingIdentifiers: f('yes', 'official', ['klarna-privacy-policy'], 'La política esmenta l’identificador publicitari del mòbil entre les dades del dispositiu.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['klarna-privacy-policy'], 'Comparteix amb socis publicitaris per a la segmentació i l’activació d’audiències; alguns fan servir les dades per a finalitats pròpies, amb Klarna com a corresponsable.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['klarna-privacy-policy'], 'Màrqueting personalitzat a les plataformes pròpies i a les de tercers, basat en el consentiment, revocable a la configuració de tecnologia de seguiment de l’aplicació.'),
    profiling: f('yes', 'official', ['klarna-privacy-policy'], 'Perfilat comercial i decisions automatitzades sense intervenció humana: aprovació de crèdit, risc de frau, verificació d’identitat, risc de blanqueig i responsabilitat en compres impugnades. La consulta de crèdit a Espanya afecta la qualificació creditícia.'),
    aiTraining: unknown('L’avís no diu si les dades es fan servir per entrenar models; només que els models d’aprenentatge automàtic s’usen per decidir i personalitzar.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['klarna-privacy-policy'], 'Botigues, passarel·les i xarxes de targetes, agències d’informació creditícia i fitxers de morositat, agències antifrau, empreses de cobrament i compradors de deute, xarxes d’afiliats i socis publicitaris.'),
    intraGroupSharing: f('yes', 'official', ['klarna-privacy-policy'], 'Empreses del grup Klarna; en compres a botigues de fora de l’EEE, la cessió entre societats del grup és obligatòria per processar el pagament.'),
    dataBrokerSales: f('partial', 'official', ['klarna-privacy-policy'], 'No ven dades com a tal, però la compartició amb socis publicitaris que les tracten per a finalitats pròpies i la cessió a compradors de deute hi són a prop.'),
    internationalTransfers: f('yes', 'official', ['klarna-privacy-policy'], 'Decisions d’adequació, clàusules contractuals tipus amb avaluació del país receptor, el Marc de privadesa UE-EUA i normes corporatives vinculants d’alguns proveïdors. La política reconeix que hi ha països amb lleis que poden impedir que les clàusules siguin efectives.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: f('no', 'official', ['klarna-privacy-policy'], 'No publica cap informe de transparència sobre peticions d’autoritats; només informes financers i de sostenibilitat.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['klarna-privacy-policy'], 'La política dona terminis concrets per finalitat, cosa poc habitual.'),
    dataAfterDeletion: f('yes', 'official', ['klarna-privacy-policy'], 'Les obligacions legals de conservació sobreviuen al tancament del compte.'),
    periods: [
      { dataType: 'historial-de-compres', period: 'Fins a 10 anys des de la fi de la relació contractual', sources: ['klarna-privacy-policy'] },
      { dataType: 'document-identificatiu-oficial', period: '5 anys per les obligacions de prevenció del blanqueig', sources: ['klarna-privacy-policy'] },
      { dataType: 'dades-de-pagament', period: '7 anys per la llei comptable sueca', sources: ['klarna-privacy-policy'] },
      { dataType: 'veu-i-audio', period: 'Fins a 6 mesos les converses amb l’assistent d’IA', sources: ['klarna-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('yes', 'official', ['klarna-delete-account']),
    selfService: f('yes', 'official', ['klarna-delete-account'], 'El tancament del compte i la sol·licitud d’esborrament es fan des de l’aplicació, a «Seguridad y privacidad» i «Derechos de privacidad».'),
    difficulty: 'medium',
    requiresSupportContact: false,
    steps: [
      'Liquida els pagaments pendents: amb deute viu no es pot tancar el compte.',
      'Obre el perfil de l’aplicació i entra a «Seguridad y privacidad».',
      'Tria «Derechos de privacidad» i després «Eliminar información personal».',
      'Confirma la sol·licitud; el que la llei obliga a conservar seguirà desat durant cinc, set o deu anys segons la categoria.',
    ],
    obstacles:
      'L’autoritat sueca té oberta des del 2022 una investigació sobre si Klarna exigeix requisits d’identificació desproporcionats per exercir els drets de supressió i d’accés.',
    dataRetained: 'Documentació de prevenció del blanqueig cinc anys, comptabilitat set anys i dades de la relació contractual fins a deu anys.',
    sources: ['klarna-delete-account', 'klarna-privacy-policy'],
  },
  userRights: {
    dataExport: f('yes', 'official', ['klarna-privacy-policy', 'klarna-delete-account'], 'L’extracte de dades i la portabilitat en format de lectura mecànica es demanen des de la mateixa aplicació.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['klarna-privacy-policy'], 'Equip de protecció de dades propi, amb adreça espanyola.', {
      url: 'mailto:privacidad@klarna.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['klarna-privacy-policy'], 'La configuració de tecnologia de seguiment de l’aplicació permet retirar el consentiment publicitari.'),
    telemetryOptOut: f('partial', 'official', ['klarna-privacy-policy'], 'Es pot retirar el consentiment del seguiment, però no l’analítica basada en interès legítim.'),
    granularControls: f('yes', 'official', ['klarna-privacy-policy', 'klarna-delete-account'], 'L’aplicació reuneix drets de privadesa, configuració de seguiment, preferències de comunicació i de pagament en un sol lloc.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'regulator', ['klarna-imy-2022'], 'L’autoritat sueca va sancionar Klarna perquè la informació de privadesa no deia amb quina finalitat ni amb quina base jurídica tractava les dades d’un dels serveis, i era deficient sobre els drets de portabilitat i d’oposició.'),
    darkPatternList: [
      {
        type: 'confusing-language',
        severity: 'medium',
        description:
          'La informació de privadesa donada el 2020 no identificava la finalitat ni la base jurídica d’un dels serveis i explicava malament els drets de portabilitat i d’oposició, segons la resolució de la IMY.',
        sources: ['klarna-imy-2022'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('partial', 'official', ['klarna-security'], 'La pàgina de seguretat parla de xifratge d’alt nivell sense concretar-lo.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: f('yes', 'official', ['klarna-security'], 'Verificació en dues fases, biometria i claus d’accés, amb alertes push i opció de congelar el compte.', {
      methods: ['passkey', 'app-push'],
    }),
    independentAudits: unknown('No consten certificacions de seguretat publicades.'),
    bugBounty: f('yes', 'official', ['klarna-hackerone'], 'Programa públic a HackerOne des del maig de 2024, amb recompensa mínima de 50 dòlars i abast que inclou les aplicacions mòbils i les seves interfícies.', {
      url: 'https://hackerone.com/klarna',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['klarna-hackerone'], 'El canal és el programa de HackerOne; el domini klarna.com no publica cap fitxer security.txt.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La sanció de la IMY va passar per tres instàncies: 7,5 milions de corones, rebaixades a 6 pel tribunal administratiu i restablertes en apel·lació. Val la pena recordar que l’autoritat principal de Klarna és la sueca, no l’espanyola: una reclamació presentada a l’AEPD s’acaba tramitant a Estocolm.',
    openQuestions: [
      'Les dades de clientela es fan servir per entrenar els models d’aprenentatge automàtic, més enllà d’aplicar-los?',
      'Quin és l’abast real de l’incident de novembre de 2025 que l’empresa atribueix a números de telèfon reciclats?',
    ],
  },
}

/* ═══════════════════════════ MyInvestor ═══════════════════════════ */
const myinvestor: AppSeed = {
  slug: 'myinvestor',
  name: 'MyInvestor',
  company: 'myinvestor-banco',
  categories: ['banca-i-finances'],
  tagline: 'Cap dada declarada per rastrejar, però trenta anys de conservació i cap explicació de les decisions automàtiques',
  summary:
    'MyInvestor és el banc digital del grup Andbank. L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar, cosa que el situa entre els millors del lot financer. En canvi, la política de protecció de dades no té cap apartat sobre decisions individuals automatitzades, tot i que consulta la CIRBE i ASNEF per avaluar la solvència, i fixa terminis de conservació que arriben als trenta anys.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://myinvestor.es/',
    privacyPolicy: 'https://cdn.myinvestor.es/public/legal/politica-de-proteccion-de-datos.pdf',
    appStore: appStore('1587906669'),
  },
  accountRequired: f('yes', 'official', ['myinvestor-legal'], 'És un banc supervisat pel Banc d’Espanya i la CNMV: cal obrir-hi compte.'),
  openSource: f('no', 'official', ['myinvestor-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un banc d’inversió veu la nòmina, el perfil inversor, els deutes, les despeses i fins i tot on es retira efectiu o es paga amb targeta. Aquestes dades de localització de les operacions són un mapa de moviments que poques aplicacions demanen de manera explícita.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['myinvestor-privacy-policy', 'myinvestor-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['myinvestor-privacy-policy'] }),
    row('origen-etnic-o-nacionalitat', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['myinvestor-privacy-policy'], note: 'La nacionalitat es recull per a les obligacions fiscals i de prevenció del blanqueig, no per a cap finalitat comercial.' }),
    row('situacio-familiar', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['myinvestor-privacy-policy'] }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['myinvestor-privacy-policy'], note: 'Informació laboral, professional i acadèmica, contrastada amb la Seguretat Social i l’Agència Tributària.' }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['myinvestor-privacy-policy'], note: 'Perfil inversor, historial creditici, deutes i despeses; es consulta la CIRBE i ASNEF.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['myinvestor-privacy-policy', 'myinvestor-app-store'] }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['myinvestor-privacy-policy'] }),
    row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['myinvestor-privacy-policy'], note: 'La política enumera expressament les dades de localització de les retirades d’efectiu i dels pagaments amb targeta.' }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['myinvestor-privacy-policy'], note: 'Converses telefòniques enregistrades i videovigilància.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['myinvestor-privacy-policy'], note: 'Per a la signatura i l’obertura de comptes a distància.' }),
    row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'atencio-a-lusuari'], sources: ['myinvestor-app-store'] }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['myinvestor-privacy-policy'], note: 'Perfils comercials i de risc de crèdit estimat, per interès legítim.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['myinvestor-privacy-policy', 'myinvestor-app-store'] }),
    row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['myinvestor-privacy-policy'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['myinvestor-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['myinvestor-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['myinvestor-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('partial', 'official', ['myinvestor-app-store'], 'Hi ha «dades de publicitat» declarades com a no vinculades a la persona, però cap identificador publicitari per rastrejar.'),
    thirdPartyTrackersPresent: f('partial', 'official', ['myinvestor-privacy-policy'], 'La política esmenta galetes i identificadors de dispositiu entre les categories tractades.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['myinvestor-privacy-policy'], 'Comunicacions comercials pròpies i cessió a societats del grup Andbank per a ofertes personalitzades, amb consentiment o interès legítim segons el cas.'),
    profiling: f('yes', 'official', ['myinvestor-privacy-policy'], 'Perfilat amb dades facilitades, generades, comportament transaccional històric i risc de crèdit estimat, per a finalitats comercials i d’anàlisi de risc.'),
    aiTraining: unknown('La política no esmenta la intel·ligència artificial ni l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['myinvestor-privacy-policy'], 'CIRBE del Banc d’Espanya, ASNEF, Bizum, sistemes comuns d’intercanvi de conductes fraudulentes i el registre de pagaments fraudulents d’EBA Clearing, administracions i autoritats.'),
    intraGroupSharing: f('yes', 'official', ['myinvestor-privacy-policy'], 'Societats del grup Andbank, també per enviar comunicacions comercials personalitzades d’altres entitats del grup.'),
    dataBrokerSales: unknown('La política no diu si cedeix dades a intermediaris de dades.'),
    internationalTransfers: f('yes', 'official', ['myinvestor-privacy-policy'], 'Cessions al grup Andbank en països sense nivell de protecció equivalent, amb anàlisi de risc i clàusules contractuals tipus de la Comissió Europea, la còpia de les quals es pot demanar al delegat de protecció de dades.', { mechanism: 'sccs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('yes', 'official', ['myinvestor-privacy-policy'], 'La política dona terminis concrets: deu anys per prevenció del blanqueig, vint per a operacions amb garantia hipotecària en escriptura pública i fins a trenta per la prescripció de les accions civils.'),
    dataAfterDeletion: f('yes', 'official', ['myinvestor-privacy-policy'], 'Un cop acabada la relació, les dades es conserven bloquejades durant aquests terminis, i el banc es reserva tractar-les per tornar a oferir productes si s’hi ha consentit.'),
    periods: [
      { dataType: 'document-identificatiu-oficial', period: '10 anys des de la fi de la relació de negoci, per prevenció del blanqueig', sources: ['myinvestor-privacy-policy'] },
      { dataType: 'historial-de-compres', period: '20 anys per a operacions amb garantia hipotecària formalitzades en escriptura pública', sources: ['myinvestor-privacy-policy'] },
      { dataType: 'identificador-de-compte', period: 'Fins a 30 anys segons la prescripció de les accions del Codi civil', sources: ['myinvestor-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['myinvestor-privacy-policy'], 'Es pot cancel·lar la relació i exercir el dret de supressió, però les dades queden bloquejades durant els terminis legals.'),
    selfService: unknown('No hem trobat cap document oficial que descrigui com es tanca el compte; les preguntes freqüents es carreguen amb JavaScript i no s’han pogut llegir.'),
    difficulty: 'unknown',
    requiresSupportContact: true,
    steps: [
      'Traspassa o ven les posicions d’inversió i deixa els comptes a zero.',
      'Demana la cancel·lació per l’atenció al client del banc.',
      'Escriu a dpo@myinvestor.es per exercir el dret de supressió i, si vols, oposar-te a rebre ofertes posteriors.',
    ],
    obstacles:
      'La política preveu expressament seguir tractant les dades per tornar a oferir productes propis, del grup o de tercers col·laboradors un cop acabada la relació.',
    dataRetained: 'Dades bloquejades durant deu, vint o fins a trenta anys segons la categoria i el producte.',
    sources: ['myinvestor-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['myinvestor-privacy-policy'], 'La portabilitat es reconeix, però la política adverteix, citant el criteri de l’AEPD, que les dades inferides i derivades no en són objecte: els resultats dels seus algorismes queden fora.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['myinvestor-privacy-policy'], 'Delegat de protecció de dades propi, amb adreça electrònica i postal.', {
      url: 'mailto:dpo@myinvestor.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['myinvestor-privacy-policy'], 'L’oposició a les comunicacions comercials es pot fer en el moment de signar el contracte o en qualsevol altre moment.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: unknown('No hem trobat cap panell de preferències de privadesa documentat dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: f('partial', 'official', ['myinvestor-privacy-policy'], 'La política cita la pseudonimització i el xifratge de dades personals com a mesures de l’article 32, sense concretar-ne la implementació.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat documentació oficial sobre la verificació en dos passos.'),
    independentAudits: unknown('No consten certificacions de seguretat publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('El domini no publica cap fitxer security.txt vàlid: la consulta acaba en una pàgina d’error.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El detall més útil de la política és l’advertiment sobre la portabilitat: citant l’AEPD, exclou del dret les dades «inferides» i «derivades». És a dir, el perfil que el banc construeix sobre una persona no és una dada que aquesta persona es pugui emportar.',
    openQuestions: [
      'Hi ha decisions individuals automatitzades de l’article 22 del RGPD? La política no en documenta cap, tot i que hi ha avaluació de solvència.',
      'Com es tanca el compte i quant triga?',
    ],
  },
}

/* ═══════════════════════════ ING ═══════════════════════════ */
const ing: AppSeed = {
  slug: 'ing',
  name: 'ING',
  company: 'ing-espana',
  categories: ['banca-i-finances'],
  tagline: 'Explica com decideix de manera automàtica i com fa servir la IA generativa, però no diu quants anys conserva les dades',
  summary:
    'La política d’ING és la més explícita del lot en dos punts que gairebé ningú documenta: les decisions automatitzades —puntuació de risc amb rebuig automàtic, bloqueig d’operacions en temps real i fins i tot rescissió automàtica del contracte per risc de blanqueig— i l’ús d’IA generativa, amb proves al centre de trucades i compromís que les dades no s’utilitzen per a finalitats pròpies d’aquests sistemes. El buit és la conservació: remet a una política interna, sense cap termini. I l’etiqueta de l’App Store declara identificadors per rastrejar.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.ing.es/',
    privacyPolicy: 'https://www.ing.es/sobre-ing/pdf/protecciondatosING.pdf',
    appStore: appStore('774858627'),
  },
  accountRequired: f('yes', 'official', ['ing-privacy-policy'], 'L’aplicació és la banca en línia del banc: cal ser-ne client.'),
  openSource: f('no', 'official', ['ing-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'La política enumera la localització GPS, les interaccions a xarxes socials, les gravacions de trucades i de xats i els interessos inferits al costat de les dades financeres. Fins i tot calcula una petjada de carboni estimada per transacció: una lectura del que es consumeix, no només del que es gasta.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['ing-privacy-policy', 'ing-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['ing-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ing-privacy-policy', 'ing-app-store'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ing-privacy-policy', 'ing-app-store'] }),
    row('situacio-familiar', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'prestacio-del-servei'], sources: ['ing-privacy-policy'], note: 'Estat civil, fills, règim econòmic matrimonial i nivell d’estudis.' }),
    row('ocupacio-i-carrec', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'prestacio-del-servei'], sources: ['ing-privacy-policy'] }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['ing-privacy-policy'], note: 'Nòmines, hàbits de pagament, taxació de l’habitatge, capacitat creditícia i productes contractats amb altres entitats, amb consulta a ASNEF-Equifax, Experian i la CIRBE.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ing-privacy-policy', 'ing-app-store'], note: 'Les dades d’alta de la targeta al telèfon es comuniquen a Bizum, Google, Apple i Mastercard, que hi actuen com a responsables propis.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['ing-privacy-policy', 'ing-app-store'] }),
    row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['ing-privacy-policy'], note: 'La política inclou expressament la localització GPS entre les categories tractades.' }),
    row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'compliment-legal'], sources: ['ing-privacy-policy'], note: 'Gravació de trucades i de xats, imatge i videovigilància.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'recomanacions-algoritmiques'], sources: ['ing-privacy-policy'], note: 'Interessos i necessitats inferits, i una petjada de carboni estimada per transacció.' }),
    row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal'], sources: ['ing-privacy-policy'], note: 'Dades sensibles com el càrrec polític o la discapacitat; la política diu que no tractarà cap dada sensible que es pugui inferir de les transaccions.' }),
    row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'mesura-i-analisi-dus'], sources: ['ing-app-store'] }),
    row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['ing-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['ing-app-store'], note: 'L’etiqueta declara identificadors utilitzats per rastrejar i identificadors de dispositiu per a publicitat de tercers.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['ing-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['ing-app-store', 'ing-privacy-policy'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['compliment-legal', 'atencio-a-lusuari'], sources: ['ing-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['ing-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['ing-app-store'], 'L’etiqueta declara els identificadors com a dades utilitzades per rastrejar: inusual en un banc.'),
    advertisingIdentifiers: f('yes', 'official', ['ing-app-store'], 'L’etiqueta declara identificadors de dispositiu i dades de publicitat per a publicitat de tercers i del desenvolupador.'),
    thirdPartyTrackersPresent: f('yes', 'official', ['ing-app-store'], 'La categoria «publicitat de tercers» apareix a l’etiqueta de l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['ing-privacy-policy'], 'El màrqueting propi es basa en l’interès legítim i les promocions de tercers, en el consentiment.'),
    profiling: f('yes', 'official', ['ing-privacy-policy'], 'Cinc tipus de perfilat documentats: frau i blanqueig, risc creditici, perfils comercials bàsics per interès legítim, perfils avançats amb dades externes i consentiment exprés, i perfilat informatiu. Hi ha decisions automatitzades amb rebuig automàtic de crèdit, bloqueig d’operacions en temps real i rescissió automàtica del contracte per risc de blanqueig.'),
    aiTraining: f('partial', 'official', ['ing-privacy-policy'], 'Fa servir IA tradicional contra el frau i IA generativa per millorar el xatbot, per a proves al centre de trucades amb un nombre reduït de clients avisats i per crear contingut de màrqueting. Declara mesures perquè les dades personals no s’utilitzin per a finalitats pròpies dels sistemes d’IA generativa i un procés de pseudonimització.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['ing-privacy-policy'], 'CIRBE, SEPBLAC, Experian i ASNEF-Equifax, Agència Tributària i Seguretat Social, Iberpay, la CNMV, gestores de fons i, per a l’alta de targetes, Bizum, Google, Apple i Mastercard.'),
    intraGroupSharing: f('yes', 'official', ['ing-privacy-policy'], 'Grup ING, present a més de quaranta països.'),
    dataBrokerSales: unknown('La política no diu si cedeix dades a intermediaris de dades.'),
    internationalTransfers: f('yes', 'official', ['ing-privacy-policy'], 'Clàusules contractuals tipus amb anàlisi previ de la legislació del país receptor i mesures de pseudonimització o xifratge, decisions d’adequació i normes corporatives vinculants per a les empreses del grup.', { mechanism: 'bcrs' }),
  },
  transparency: {
    policyClarity: 'high',
    transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
  },
  retention: {
    definedPeriods: f('no', 'official', ['ing-privacy-policy'], 'És el punt feble del document: no hi ha cap termini en anys per a les dades de clientela, només una remissió a «la nostra política interna de retenció i esborrament». Els únics terminis numèrics són perifèrics: cinc anys per a dades de sol·licitants i trenta dies per a un fitxer antifrau.'),
    dataAfterDeletion: f('partial', 'official', ['ing-privacy-policy'], 'Diu que les dades es mantindran bloquejades durant el termini previst a la legislació vigent, sense xifrar-lo.'),
  },
  accountDeletion: {
    possible: f('partial', 'official', ['ing-privacy-policy'], 'El dret de supressió es reconeix, però el banc conserva les dades bloquejades fins que acabi un termini de retenció que no publica.'),
    selfService: unknown('No hem trobat cap pàgina pública d’ING amb el procediment de baixa ni cap opció d’autoservei documentada.'),
    difficulty: 'unknown',
    requiresSupportContact: true,
    steps: [
      'Cancel·la els productes associats i deixa els comptes a zero.',
      'Demana la cancel·lació per telèfon, a l’Àrea Personal o a una oficina.',
      'Per exercir els drets de protecció de dades, escriu a proteccion.datos@ing.es o a dpo@ing.es.',
      'Recorda que, encara que t’oposis a les comunicacions comercials, el banc continuarà enviant les relacionades amb els productes contractats.',
    ],
    obstacles:
      'El banc no publica ni el procediment de baixa ni els terminis de conservació: qui vulgui saber quant duren les seves dades ha de demanar-ho expressament.',
    dataRetained: 'Dades bloquejades durant terminis no publicats, fixats per una política interna de retenció.',
    sources: ['ing-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['ing-privacy-policy'], 'La portabilitat es reconeix, amb transferència directa a una altra empresa quan sigui tècnicament possible; no hem trobat cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['ing-privacy-policy'], 'Delegat de protecció de dades i una adreça general de protecció de dades, amb canals per correu, telèfon i oficina.', {
      url: 'mailto:dpo@ing.es',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['ing-privacy-policy'], 'Els perfils comercials avançats depenen del consentiment exprés i es poden retirar des de l’Àrea Personal.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: f('partial', 'official', ['ing-app-privacy', 'ing-privacy-policy'], 'L’Àrea Personal permet gestionar consentiments, però el banc adverteix que continuarà enviant comunicacions relacionades amb els productes contractats.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('La pàgina de protecció de dades només parla de mesures tècniques i organitzatives genèriques.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: f('yes', 'official', ['ing-security'], 'Validació mòbil amb contrasenya alfanumèrica, validació biomètrica i clau de sis dígits de la qual només se’n demanen tres posicions aleatòries. La bústia d’SMS permet comprovar l’autenticitat dels missatges rebuts els últims set dies.', {
      methods: ['app-push', 'sms'],
    }),
    independentAudits: unknown('No consten certificacions de seguretat publicades.'),
    bugBounty: f('yes', 'official', ['ing-responsible-disclosure'], 'Programa de divulgació responsable amb recompensa econòmica, gestionat amb Intigriti, amb resposta inicial en un màxim de dos dies i en castellà o anglès.', {
      url: 'https://www.ing.es/responsible-disclosure',
    }),
    vulnerabilityDisclosure: f('yes', 'official', ['ing-responsible-disclosure'], 'Hi ha política de divulgació responsable pública, tot i que el domini ing.es no publica cap fitxer security.txt.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El contrast intern d’aquesta fitxa és el que la fa interessant: el banc que millor explica com decideixen els seus algorismes és, alhora, el que no publica cap termini de conservació i el que declara rastreig a l’App Store.',
    openQuestions: [
      'Quins terminis concrets fixa la política interna de retenció i esborrament?',
      'Hi ha resolucions de l’AEPD contra la sucursal espanyola? No hem pogut consultar el cercador de resolucions, que responia amb errors.',
    ],
  },
}

/* ═══════════════════════════ Banc Sabadell ═══════════════════════════ */
const bancoSabadell: AppSeed = {
  slug: 'banco-sabadell',
  name: 'Banc Sabadell',
  company: 'banco-sabadell',
  categories: ['banca-i-finances'],
  tagline: 'Consulta els fitxers de solvència per iniciativa pròpia i mira si tens una trucada en curs quan envies diners',
  summary:
    'L’annex de protecció de dades del Banc Sabadell diu que consulta ASNEF, BADEXCUG, la CIRBE i el RAI «sense que calgui una sol·licitud o autorització específica, prèvia i expressa» de la persona. El mecanisme antifrau de l’aplicació és igual de singular: comprova si hi ha una trucada en curs mentre s’envia un Bizum o una transferència, accedeix a l’agenda i mira si hi ha aplicacions fraudulentes al telèfon. L’etiqueta de l’App Store, en canvi, no declara cap dada per rastrejar.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.bancsabadell.com/',
    privacyPolicy: 'https://www.bancsabadell.com/bsnacional/es/anexo-informacion-detallada-proteccion-datos-caracter-particular/',
    appStore: appStore('347887638'),
  },
  accountRequired: f('yes', 'official', ['banco-sabadell-app-privacy'], 'L’aplicació és la banca en línia del banc: cal ser-ne client.'),
  openSource: f('no', 'official', ['banco-sabadell-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'El banc tracta el detall de les operacions, els moviments i «els textos» de les transaccions per detectar necessitats de contractació. El concepte de moviment bancari inclou a qui es paga i per què: qui va al fisioterapeuta, qui paga una quota sindical, qui manté una segona residència.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['banco-sabadell-privacy-policy'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['banco-sabadell-privacy-policy'], note: 'Es comunica al Fitxer de Titularitats Financeres del SEPBLAC, per l’article 43 de la Llei 10/2010.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['banco-sabadell-app-privacy'] }),
    row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['banco-sabadell-app-privacy'], note: 'L’aplicació accedeix a l’agenda per triar destinataris de Bizum.' }),
    row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['banco-sabadell-privacy-policy'], note: 'El perfil comercial tracta el detall de les operacions, els moviments i els textos de les transaccions.' }),
    row('nivell-d-ingressos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'elaboracio-de-perfils'], sources: ['banco-sabadell-privacy-policy'], note: 'Valoracions, seguiment i perfils de risc creditici i de capacitat de recuperació d’impagaments.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['banco-sabadell-privacy-policy', 'banco-sabadell-app-store'], note: 'L’IBAN i la titularitat es comparteixen amb el fitxer comú de prevenció del frau d’Iberpay.' }),
    row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'prestacio-del-servei'], sources: ['banco-sabadell-privacy-policy'], note: 'Lectors de retina, veu, imatge facial, empremta i signatura digitalitzada, amb consentiment; si el procés només existeix en versió biomètrica, sense consentiment no es pot formalitzar.' }),
    row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', sources: ['banco-sabadell-privacy-policy'], note: 'L’annex exclou expressament tractar dades de salut o d’origen ètnic amb finalitats comercials o d’enquesta.' }),
    row('aplicacions-instal-lades', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['banco-sabadell-app-privacy'], note: 'L’aplicació comprova si hi ha programari fraudulent instal·lat al telèfon.' }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['banco-sabadell-app-privacy', 'banco-sabadell-app-store'], note: 'La política de l’aplicació parla de capturar «el comportament a l’app»; també es comprova si hi ha una trucada en curs mentre s’envien diners.' }),
    row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['banco-sabadell-app-store'], note: 'L’etiqueta la declara no vinculada a la persona.' }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['banco-sabadell-app-store'] }),
    row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['banco-sabadell-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('no', 'official', ['banco-sabadell-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
    advertisingIdentifiers: f('no', 'official', ['banco-sabadell-app-store'], 'L’etiqueta no declara identificadors per a publicitat.'),
    thirdPartyTrackersPresent: unknown('No hem pogut verificar quins rastrejadors incorpora l’aplicació.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['banco-sabadell-privacy-policy'], 'Comunicacions comercials basades en el perfil, amb consentiment, tret dels casos en què el banc invoca l’interès legítim.'),
    profiling: f('yes', 'official', ['banco-sabadell-privacy-policy'], 'Perfils de risc creditici, de recuperació d’impagaments i comercials, amb consulta a ASNEF, BADEXCUG, la CIRBE i el RAI per iniciativa del banc.'),
    aiTraining: unknown('L’annex no esmenta en cap moment la intel·ligència artificial ni l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['banco-sabadell-privacy-policy'], 'Sistemes d’informació creditícia, fitxer comú de prevenció del frau i servei de titularitat de comptes d’Iberpay, SEPBLAC, jutjats, cossos de seguretat i cessionaris en titulitzacions i vendes de cartera.'),
    intraGroupSharing: f('yes', 'official', ['banco-sabadell-privacy-policy'], 'Societats del grup i participades, amb consentiment o per interès legítim antifrau.'),
    dataBrokerSales: f('partial', 'official', ['banco-sabadell-privacy-policy'], 'No hi ha venda de dades per a màrqueting, però sí cessió a cessionaris en titulitzacions i vendes de cartera de crèdit.'),
    internationalTransfers: f('partial', 'official', ['banco-sabadell-privacy-policy'], 'L’annex només preveu comunicacions a autoritats d’altres països, dins i fora de la Unió Europea, en matèria de blanqueig i terrorisme, i no identifica cap mecanisme de l’article 46.', { mechanism: 'unknown' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['banco-sabadell-privacy-policy'], 'No hi ha una taula de terminis: l’annex remet a la prescripció de les accions dels articles 1962 a 1972 del Codi civil, que pot arribar als trenta anys, i al mínim de deu anys de la Llei 10/2010.'),
    dataAfterDeletion: f('yes', 'official', ['banco-sabadell-privacy-policy'], 'Les dades es conserven un mínim de deu anys per prevenció del blanqueig i fins que prescriguin les accions contractuals.'),
    periods: [
      { dataType: 'document-identificatiu-oficial', period: 'Mínim 10 anys per la Llei 10/2010 de prevenció del blanqueig', sources: ['banco-sabadell-privacy-policy'] },
      { dataType: 'dades-de-pagament', period: '30 dies al fitxer antifrau d’Iberpay per a operacions sospitoses i un any si el frau es confirma', sources: ['banco-sabadell-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['banco-sabadell-app-privacy', 'banco-sabadell-privacy-policy'], 'Es pot donar de baixa l’usuari i cancel·lar els contractes, però l’esborrament efectiu xoca amb els terminis legals.'),
    selfService: f('no', 'official', ['banco-sabadell-app-privacy'], 'La política de l’aplicació ho diu expressament: per donar de baixa l’usuari cal trucar a atenció al client o escriure a infobs@bancsabadell.com.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Cancel·la els productes i els contractes associats (targetes, rebuts, préstecs) a l’oficina o amb el gestor.',
      'Truca al 963 085 000 o escriu a infobs@bancsabadell.com per donar de baixa l’usuari de la banca digital.',
      'Per exercir els drets de protecció de dades, escriu a ejercicioderechosprotecdatos@bancsabadell.com.',
      'Demana el justificant de la cancel·lació per escrit.',
    ],
    obstacles:
      'No hi ha cap opció de baixa dins de l’aplicació i el banc no publica terminis. La conservació fins a la prescripció de les accions, que pot arribar als trenta anys, fa que la baixa sigui de servei, no de dades.',
    dataRetained: 'Documentació contractual durant un mínim de deu anys i fins a la prescripció de les accions civils.',
    sources: ['banco-sabadell-app-privacy', 'banco-sabadell-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['banco-sabadell-privacy-policy'], 'La portabilitat es reconeix i s’exerceix per correu a la unitat de drets; no hem trobat cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['banco-sabadell-privacy-policy'], 'Delegat de protecció de dades i una unitat específica per a l’exercici de drets.', {
      url: 'mailto:ejercicioderechosprotecdatos@bancsabadell.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('partial', 'official', ['banco-sabadell-privacy-policy'], 'El perfil comercial es basa en el consentiment, però el banc es reserva casos en què hi aplica l’interès legítim, que no es pot revocar sinó només oposar-s’hi.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: unknown('No hem trobat cap panell de preferències de privadesa documentat dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: unknown('No hem trobat cap anàlisi de patrons foscos de l’aplicació.'),
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('El banc publica el certificat del web, però no hem trobat documentació sobre el xifratge de les comunicacions de l’aplicació.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: f('yes', 'official', ['banco-sabadell-security'], 'Doble verificació amb contrasenya i codi d’un sol ús al mòbil, i entrada biomètrica a l’aplicació.', {
      methods: ['sms', 'app-push'],
    }),
    independentAudits: unknown('No consten certificacions ni auditories publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('El fitxer security.txt no es pot consultar: el servidor respon amb un accés denegat.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'La troballa d’aquesta fitxa és la doble política: la que enllaça l’App Store és un text antic i curt, i la que val és l’annex d’informació detallada, actualitzat el juny de 2026. Qui llegeixi la primera no sabrà que el banc consulta fitxers de solvència per iniciativa pròpia.',
    openQuestions: [
      'Hi ha decisions individuals automatitzades de l’article 22 del RGPD? L’annex no en diu res, ni per afirmar-ho ni per negar-ho.',
      'Quin mecanisme de transferència internacional s’aplica quan hi ha proveïdors fora de l’Espai Econòmic Europeu?',
    ],
  },
}

/* ═══════════════════════════ Mapfre ═══════════════════════════ */
const mapfre: AppSeed = {
  slug: 'mapfre',
  name: 'Mapfre',
  company: 'mapfre-espana',
  categories: ['banca-i-finances'],
  tagline: 'Assegurances amb dades de salut i normes corporatives vinculants aprovades per l’AEPD, però amb rastreig declarat a l’App Store',
  summary:
    'La política de Mapfre tracta dades de salut per gestionar sinistres i validar reemborsaments, i preveu demanar-ne els antecedents als metges i als centres sanitaris. És dels pocs serveis del catàleg amb normes corporatives vinculants aprovades per l’AEPD el 2024, un mecanisme de transferència internacional molt més exigent que les clàusules tipus. Contrasta amb l’etiqueta de l’App Store, que declara les dades de contacte com a utilitzades per rastrejar: inusual en una asseguradora.',
  platforms: ['ios', 'android', 'web'],
  businessModel: 'subscription',
  jurisdiction: 'Espanya',
  links: {
    website: 'https://www.mapfre.es/',
    privacyPolicy: 'https://www.mapfre.es/privacidad',
    appStore: appStore('425349256'),
  },
  accountRequired: f('yes', 'official', ['mapfre-privacy-policy'], 'L’aplicació és l’àrea de clients: cal tenir pòlissa o registrar-s’hi.'),
  openSource: f('no', 'official', ['mapfre-privacy-policy'], undefined, { licence: 'Privativa' }),
  dataSummary:
    'Un expedient de sinistre d’assegurança de salut conté diagnòstics, proves i factures mèdiques. A més, les dades del cotxe i dels sinistres passen a fitxers comuns del sector gestionats per TIREA, que consulten totes les asseguradores: el que passa amb una companyia deixa de ser només amb aquella companyia.',
  dataCollection: [
    row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mapfre-privacy-policy', 'mapfre-app-store'] }),
    row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'prestacio-del-servei'], sources: ['mapfre-privacy-policy'] }),
    row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mapfre-app-store', 'mapfre-privacy-policy'] }),
    row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['mapfre-app-store', 'mapfre-privacy-policy'], note: 'Les dades de contacte són les que l’etiqueta declara com a utilitzades per rastrejar.' }),
    row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['mapfre-app-store', 'mapfre-privacy-policy'] }),
    row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mapfre-privacy-policy'], note: 'La política les qualifica de dades especialment protegides i preveu demanar les causes i els antecedents de salut als metges i als prestadors de serveis sanitaris.' }),
    row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mapfre-privacy-policy'] }),
    row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['mapfre-app-store'], note: 'Fotografies de sinistres i documentació aportada des de l’aplicació.' }),
    row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['mapfre-privacy-policy'], note: 'La política parla d’elaborar un «perfil comercial global» comparant la persona amb grups agregats.' }),
    row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['mapfre-app-store'], note: 'L’etiqueta la declara no vinculada a la persona, per a la personalització del producte. Les normes corporatives vinculants aprovades per l’AEPD inclouen les dades de geolocalització en el seu àmbit.' }),
    row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['mapfre-app-store'] }),
    row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['mapfre-app-store'] }),
    row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['mapfre-app-store'] }),
    row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['mapfre-aepd-galetes-2023'], note: 'L’AEPD va constatar que el web carregava galetes de Google Analytics abans de poder gestionar-les.' }),
    row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['mapfre-app-store'] }),
  ],
  tracking: {
    crossAppTracking: f('yes', 'official', ['mapfre-app-store'], 'L’etiqueta declara les dades de contacte com a utilitzades per rastrejar en altres aplicacions i webs.'),
    advertisingIdentifiers: f('partial', 'official', ['mapfre-app-store'], 'L’etiqueta no declara identificadors publicitaris, però sí dades de contacte per a rastreig.'),
    thirdPartyTrackersPresent: f('yes', 'regulator', ['mapfre-aepd-galetes-2023'], 'L’AEPD va verificar galetes de Google Analytics carregades abans del consentiment.'),
  },
  dataUses: {
    targetedAdvertising: f('yes', 'official', ['mapfre-privacy-policy'], 'Comunicacions comercials personalitzades per qualsevol mitjà, incloses ofertes creuades entre entitats del grup, amb consentiment.'),
    profiling: f('yes', 'official', ['mapfre-privacy-policy'], 'Perfil comercial global i càlculs estadístics o algorismes per avaluar el risc. La política afirma que «en cap moment es prenen decisions individuals automatitzades».'),
    aiTraining: unknown('La política no esmenta l’entrenament de models.'),
  },
  sharing: {
    thirdPartySharing: f('yes', 'official', ['mapfre-privacy-policy'], 'Professionals i centres sanitaris, i els sistemes comuns del sector assegurador gestionats per TIREA: SIHSA, SIAPTRI i el fitxer de prevenció del frau SIPFSRD.'),
    intraGroupSharing: f('yes', 'official', ['mapfre-privacy-policy'], 'Corresponsabilitat entre entitats del grup Mapfre, amb ofertes creuades.'),
    dataBrokerSales: unknown('La política no diu si cedeix dades a intermediaris de dades.'),
    internationalTransfers: f('yes', 'regulator', ['mapfre-bcr-aepd', 'mapfre-privacy-policy'], 'L’AEPD va aprovar el 2024 les normes corporatives vinculants de responsable del grup Mapfre, amb dictamen previ del Comitè Europeu de Protecció de Dades. També preveu decisions d’adequació i clàusules contractuals tipus.', { mechanism: 'bcrs' }),
  },
  transparency: {
    policyClarity: 'medium',
    transparencyReport: unknown('No hem trobat cap informe de transparència.'),
  },
  retention: {
    definedPeriods: f('partial', 'official', ['mapfre-privacy-policy'], 'Els terminis són genèrics —la durada del contracte més els períodes legals i antifrau— tret dels fitxers comuns del sector, on són de cinc anys.'),
    dataAfterDeletion: f('partial', 'official', ['mapfre-privacy-policy'], 'Un cop acabada la relació, les dades queden bloquejades durant els terminis legals de responsabilitat.'),
    periods: [
      { dataType: 'dades-de-salut', period: 'Durada del contracte més els terminis legals de responsabilitat, sense xifra concreta a la política', sources: ['mapfre-privacy-policy'] },
      { dataType: 'historial-de-compres', period: '5 anys als sistemes comuns del sector assegurador des de l’anul·lació de la pòlissa o del sinistre', sources: ['mapfre-privacy-policy'] },
    ],
  },
  accountDeletion: {
    possible: f('partial', 'official', ['mapfre-privacy-policy'], 'Es pot anul·lar la pòlissa i exercir el dret de supressió, amb les limitacions dels terminis legals i dels fitxers comuns del sector.'),
    selfService: unknown('No hem trobat cap opció documentada per eliminar el compte de l’àrea de clients des de l’aplicació ni des del web.'),
    difficulty: 'hard',
    requiresSupportContact: true,
    steps: [
      'Comunica l’anul·lació de la pòlissa amb un mes d’antelació al venciment, com preveu la llei del contracte d’assegurança.',
      'Escriu a l’Oficina Corporativa de Privadesa, a ocppd@mapfre.com, o al delegat de protecció de dades, per exercir el dret de supressió.',
      'Recorda que les dades dels sinistres es conserven cinc anys als fitxers comuns gestionats per TIREA, i que s’hi han d’exercir els drets a part.',
    ],
    obstacles:
      'Els fitxers comuns del sector són d’altres responsables: esborrar-se de Mapfre no esborra el que n’hagi arribat a SIHSA, SIAPTRI o al fitxer de prevenció del frau.',
    dataRetained: 'Dades bloquejades durant els terminis legals i cinc anys als sistemes comuns del sector assegurador.',
    sources: ['mapfre-privacy-policy'],
  },
  userRights: {
    dataExport: f('partial', 'official', ['mapfre-privacy-policy'], 'La portabilitat es reconeix i s’exerceix per escrit; no hem trobat cap eina d’autoservei.'),
    exportFormatQuality: 'unknown',
    rightsExercise: f('yes', 'official', ['mapfre-privacy-policy'], 'Oficina Corporativa de Privadesa i Protecció de Dades, amb adreça de correu i postal.', {
      url: 'mailto:ocppd@mapfre.com',
    }),
  },
  controls: {
    adPersonalizationOptOut: f('yes', 'official', ['mapfre-privacy-policy'], 'Les comunicacions comercials personalitzades i les ofertes creuades dins del grup es basen en el consentiment, revocable.'),
    telemetryOptOut: unknown('No hem trobat cap control per desactivar l’analítica de l’aplicació.'),
    granularControls: unknown('No hem trobat cap panell de preferències de privadesa documentat dins de l’aplicació.'),
    defaultPosture: 'mixed',
    darkPatterns: f('partial', 'regulator', ['mapfre-aepd-galetes-2023'], 'L’AEPD va apercebre l’asseguradora perquè el web carregava galetes analítiques abans que la persona les pogués gestionar: el consentiment arribava quan ja s’havien instal·lat.'),
    darkPatternList: [
      {
        type: 'preselected',
        severity: 'medium',
        description:
          'Galetes de Google Analytics carregades abans de poder gestionar-les, amb transferència de dades als Estats Units, segons la resolució de l’AEPD de 2023.',
        sources: ['mapfre-aepd-galetes-2023'],
      },
    ],
  },
  security: {
    e2ee: na('El servei no transporta comunicacions privades entre persones.'),
    transportEncryption: unknown('No hem trobat documentació oficial sobre el xifratge de les comunicacions de l’aplicació.'),
    atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
    mfa: unknown('No hem trobat documentació oficial sobre la verificació en dos passos.'),
    independentAudits: unknown('No consten certificacions de seguretat publicades.'),
    bugBounty: unknown('No hem trobat cap programa de recompenses.'),
    vulnerabilityDisclosure: unknown('Els dominis mapfre.es i mapfre.com no publiquen cap fitxer security.txt.'),
  },
  review: {
    researchStatus: 'documented',
    lastReviewedAt: WAVE2_DATE,
    incidentsReviewed: true,
    editorialNotes:
      'El ciberatac de 2020 és un dels pocs casos documentats pas a pas per una autoritat: la resolució d’arxiu de l’AEPD recull l’hora exacta de cada moviment de l’atacant i conclou que no hi va haver evidències de fuita d’informació. Serveix de contrast amb les notificacions de filtracions que no expliquen res.',
    openQuestions: [
      'Es pot eliminar el compte de l’àrea de clients sense passar per l’exercici del dret de supressió?',
      'Quins són els terminis concrets de conservació de les dades de salut dels sinistres?',
    ],
  },
}

export const lot: SeedLot = {
  companies: [
    {
      slug: 'klarna-group',
      name: 'Klarna Group',
      legalName: 'Klarna Group plc',
      description:
        'Societat matriu del grup Klarna, cotitzada a la Borsa de Nova York amb el símbol KLAR des del setembre de 2025 i amb domicili social a Londres.',
      headquartersCountry: 'GB',
      ownership: 'public',
      primaryRevenueModel: 'mixed',
      website: 'https://investors.klarna.com/',
      productDomains: ['klarna.com'],
    },
    {
      slug: 'klarna-bank',
      name: 'Klarna Bank',
      legalName: 'Klarna Bank AB (publ)',
      parent: 'klarna-group',
      description:
        'Banc suec fundat el 2005 com a Kreditor, responsable del tractament de dades del servei de pagament ajornat. L’autoritat de control principal és la sueca, l’IMY, i no l’espanyola.',
      headquartersCountry: 'SE',
      euEstablishment: 'SE',
      leadSupervisoryAuthority: 'imy-se',
      ownership: 'subsidiary',
      foundedYear: 2005,
      primaryRevenueModel: 'mixed',
      website: 'https://www.klarna.com/es/',
      productDomains: ['klarna.com', 'klarna.es', 'klarnacdn.net'],
      privacyContact: 'privacidad@klarna.es',
    },
    {
      slug: 'andbank',
      name: 'Andbank',
      legalName: 'Andbank Agricol Reig, S.A.',
      description:
        'Grup bancari andorrà supervisat per l’Autoritat Financera Andorrana, matriu del grup al qual pertany MyInvestor.',
      headquartersCountry: 'AD',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.andbank.com/',
      productDomains: ['andbank.com', 'andbank.es'],
    },
    {
      slug: 'myinvestor-banco',
      name: 'MyInvestor',
      legalName: 'MyInvestor Banco, S.A.',
      parent: 'andbank',
      description:
        'Banc digital espanyol especialitzat en inversió, inscrit amb el número 1544 al registre del Banc d’Espanya i supervisat també per la CNMV. L’accionista majoritari és Andbank.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://myinvestor.es/',
      productDomains: ['myinvestor.es', 'cdn.myinvestor.es'],
      privacyContact: 'dpo@myinvestor.es',
    },
    {
      slug: 'ing-groep',
      name: 'ING Groep',
      legalName: 'ING Groep N.V.',
      description:
        'Grup bancari neerlandès cotitzat, matriu d’ING Bank N.V., amb presència a més de quaranta països i normes corporatives vinculants pròpies per a les transferències dins del grup.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      ownership: 'public',
      primaryRevenueModel: 'mixed',
      website: 'https://www.ing.com/',
      productDomains: ['ing.com'],
    },
    {
      slug: 'ing-espana',
      name: 'ING España',
      legalName: 'ING Bank N.V., Sucursal en España',
      parent: 'ing-groep',
      description:
        'Sucursal espanyola del banc neerlandès ING Bank N.V., amb NIF W0037986G i inscrita amb el número 1465 al registre del Banc d’Espanya. Té seu a Madrid.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.ing.es/',
      productDomains: ['ing.es'],
      privacyContact: 'dpo@ing.es',
    },
    {
      slug: 'banco-sabadell',
      name: 'Banc Sabadell',
      legalName: 'Banco de Sabadell, S.A.',
      description:
        'Banc comercial català amb seu a Sabadell, cotitzat a l’IBEX 35. Opera banca minorista i d’empreses a Espanya i, amb la marca TSB, al Regne Unit.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'public',
      primaryRevenueModel: 'mixed',
      website: 'https://www.bancsabadell.com/',
      productDomains: ['bancsabadell.com', 'bancosabadell.com', 'grupbancsabadell.com'],
      privacyContact: 'dataprotectionofficer@bancsabadell.com',
    },
    {
      slug: 'mapfre',
      name: 'Mapfre',
      legalName: 'MAPFRE, S.A.',
      description:
        'Grup assegurador espanyol cotitzat a l’IBEX 35, amb presència a una trentena de països. L’AEPD li va aprovar el 2024 unes normes corporatives vinculants de responsable per a les transferències internacionals dins del grup.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'public',
      primaryRevenueModel: 'subscription',
      website: 'https://www.mapfre.com/',
      productDomains: ['mapfre.com', 'mapfre.es'],
    },
    {
      slug: 'mapfre-espana',
      name: 'Mapfre España',
      legalName: 'MAPFRE España, Compañía de Seguros y Reaseguros, S.A.',
      parent: 'mapfre',
      description:
        'Societat del grup Mapfre responsable del negoci assegurador a Espanya i del tractament de dades de l’aplicació. Té seu a Majadahonda (Madrid).',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.mapfre.es/',
      productDomains: ['mapfre.es', 'areadeclientes.mapfre.es'],
      privacyContact: 'ocppd@mapfre.com',
    },
    {
      slug: 'id-finance',
      name: 'ID Finance',
      legalName: 'ID Finance Investments, S.L.',
      description:
        'Grup de crèdit al consum en línia amb seu a Barcelona, propietari de les marques MoneyMan i Plazo. Opera a Espanya, el Brasil i Mèxic.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 2012,
      primaryRevenueModel: 'mixed',
      website: 'https://idfinance.com/',
      productDomains: ['plazo.es', 'moneyman.es', 'idfinance.com'],
    },
    {
      slug: 'idfinance-plazo',
      name: 'Plazo',
      legalName: 'IDFINANCE PLAZO, S.L.U.',
      parent: 'id-finance',
      description:
        'Societat del grup ID Finance que comercialitza la targeta i la línia de crèdit Plazo. No és entitat de crèdit: el diner electrònic l’emet Pecunia Cards EDE, supervisada pel Banc d’Espanya.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.plazo.es/',
      productDomains: ['plazo.es'],
      privacyContact: 'dpd@plazo.es',
    },
    {
      slug: 'banco-cetelem',
      name: 'Cetelem',
      legalName: 'Banco Cetelem, S.A.U.',
      description:
        'Banc espanyol especialitzat en crèdit al consum, finançament en punt de venda i targetes. Accionista únic: BNP Paribas Personal Finance. Inscrit al Registre d’Entitats del Banc d’Espanya amb el número 0225.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      parentGroup: 'BNP Paribas Personal Finance',
      foundedYear: 1988,
      primaryRevenueModel: 'mixed',
      website: 'https://www.cetelem.es/',
      productDomains: ['cetelem.es', 'zonacliente.cetelem.es'],
      privacyContact: 'dpo@cetelem.es',
    },
    {
      slug: 'bankinter',
      name: 'Bankinter',
      legalName: 'Bankinter, S.A.',
      description:
        'Banc espanyol cotitzat a l’IBEX 35, amb banca minorista, d’empreses i privada. Va absorbir EVO Banco l’abril de 2025 i opera a Irlanda i Portugal.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'public',
      foundedYear: 1965,
      primaryRevenueModel: 'mixed',
      website: 'https://www.bankinter.com/',
      productDomains: ['bankinter.com', 'bankintercard.es', 'evobanco.com'],
      privacyContact: 'privacidad@bankinter.com',
    },
    {
      slug: 'canva',
      name: 'Canva',
      legalName: 'Canva Pty Ltd',
      description:
        'Empresa australiana d’eines de disseny en línia. No té establiment a la Unió Europea: hi actua mitjançant un representant de l’article 27 del RGPD amb seu a Dublín. És propietària d’Affinity i de Flourish.',
      headquartersCountry: 'AU',
      ownership: 'private',
      foundedYear: 2013,
      primaryRevenueModel: 'freemium',
      website: 'https://www.canva.com/',
      productDomains: ['canva.com', 'affinity.co'],
    },
    {
      slug: 'lone-palm-labs',
      name: 'Lone Palm Labs',
      legalName: 'Lone Palm Labs, Inc.',
      description:
        'Empresa nord-americana petita, fundada per un equip que venia d’Instagram i finançada amb capital de risc. Desenvolupa Retro, un diari fotogràfic per a amics.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.lonepalm.io/',
      productDomains: ['retro.app', 'lonepalm.io'],
      privacyContact: 'founders@retro.app',
    },
  ],
  sources: [
    s('klarna-privacy-policy', 'Aviso de privacidad de Klarna', 'https://cdn.klarna.com/1.0/shared/content/legal/terms/0/es_es/privacy', 'Klarna Bank', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Avís de privadesa aplicable a Espanya, versió 17.2.0 del 24 d’agost de 2026: decisions automatitzades de crèdit i frau, compartició amb socis publicitaris corresponsables, transferències internacionals i terminis de conservació de tres mesos a deu anys.',
    }),
    s('klarna-app-store', 'Klarna | Compra ahora. Paga después: Privacidad de la app', 'https://apps.apple.com/es/app/id1115120118', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: identificadors i dades d’ús utilitzats per rastrejar i cap categoria declarada com a no vinculada a la persona.',
    }),
    s('klarna-delete-account', '¿Cómo cierro mi cuenta Klarna?', 'https://www.klarna.com/es/ayuda/cuenta-y-configuracion/como-cierro-mi-cuenta-klarna/', 'Klarna Bank', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Passos oficials per tancar el compte i demanar l’eliminació de les dades personals des de l’aplicació.',
    }),
    s('klarna-security', 'Seguridad — Klarna', 'https://www.klarna.com/es/seguridad/', 'Klarna Bank', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina de seguretat: verificació en dues fases, biometria, claus d’accés, alertes i opció de congelar el compte.',
    }),
    s('klarna-hackerone', 'Klarna Bug Bounty Program — HackerOne', 'https://hackerone.com/klarna', 'HackerOne', 'technical-doc', 'primary', {
      summary: 'Programa públic de recompenses per vulnerabilitats obert el maig de 2024, amb l’abast de les aplicacions mòbils i les seves interfícies.',
    }),
    s('klarna-imy-2022', 'Tillsyn av Klarna Bank AB', 'https://www.imy.se/tillsyner/klarna-bank-ab/', 'Integritetsskyddsmyndigheten', 'regulator', 'authority', {
      language: 'other',
      summary: 'Resolució de l’autoritat sueca de protecció de dades que imposa una sanció de 7,5 milions de corones a Klarna per informació de privadesa deficient, especialment sobre finalitats, base jurídica i drets de portabilitat i oposició.',
    }),
    s('klarna-incident-2021', 'May 27 incident report — Klarna', 'https://www.klarna.com/international/press/may-27-incident-report/', 'Klarna Bank', 'support-doc', 'primary', {
      summary: 'Informe oficial de l’incident del 27 de maig de 2021: una configuració incorrecta de memòria cau va exposar dades identificables entre comptes durant trenta-un minuts.',
    }),
    s('myinvestor-privacy-policy', 'Política de Protección de Datos MY-POL-022', 'https://cdn.myinvestor.es/public/legal/politica-de-proteccion-de-datos.pdf', 'MyInvestor Banco', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de protecció de dades vigent, versió 3.3 aprovada el 2 de desembre de 2025: categories de dades, consulta de CIRBE i ASNEF, perfilat per interès legítim, cessions al grup Andbank i terminis de deu, vint i fins a trenta anys.',
    }),
    s('myinvestor-app-store', 'MyInvestor: Privacidad de la app', 'https://apps.apple.com/es/app/id1587906669', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: cap dada declarada per rastrejar, amb informació financera i de crèdit vinculada a la persona.',
    }),
    s('myinvestor-legal', 'Información legal — MyInvestor', 'https://myinvestor.es/legal/informacion-legal/', 'MyInvestor Banco', 'other', 'primary', {
      language: 'es',
      summary: 'Dades identificatives del banc, número de registre al Banc d’Espanya i adhesió al Fons de Garantia de Dipòsits.',
    }),
    s('ing-privacy-policy', 'Política de Privacidad para clientes y potenciales clientes de ING', 'https://www.ing.es/sobre-ing/pdf/protecciondatosING.pdf', 'ING Bank N.V., Sucursal en España', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de privadesa completa actualitzada el 15 de setembre de 2025: cinc tipus de perfilat, quatre casos de decisions automatitzades, ús d’IA generativa i remissió a una política interna de retenció sense terminis concrets.',
    }),
    s('ing-app-privacy', 'Privacidad de la aplicación móvil — ING', 'https://www.ing.es/privacidad-aplicacion-movil', 'ING Bank N.V., Sucursal en España', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Pàgina de privadesa específica de l’aplicació, que és l’enllaç de gestió de dades declarat a l’App Store.',
    }),
    s('ing-app-store', 'ING España. Banca Móvil: Privacidad de la app', 'https://apps.apple.com/es/app/id774858627', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: identificadors utilitzats per rastrejar i identificador de dispositiu i historial de navegació per a publicitat de tercers.',
    }),
    s('ing-security', 'Seguridad en internet — ING', 'https://www.ing.es/seguridad-internet', 'ING Bank N.V., Sucursal en España', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina de seguretat: validació mòbil, validació biomètrica, clau de sis dígits amb posicions aleatòries i bústia per comprovar els SMS rebuts.',
    }),
    s('ing-responsible-disclosure', 'Divulgación responsable de vulnerabilidades — ING', 'https://www.ing.es/responsible-disclosure', 'ING Bank N.V., Sucursal en España', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Política de divulgació responsable gestionada amb Intigriti, amb recompensa econòmica i resposta inicial en un màxim de dos dies.',
    }),
    s('plazo-privacy-policy', 'Política de privacidad de Plazo', 'https://www.plazo.es/privacidad/', 'IDFINANCE PLAZO', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de privadesa de Plazo, actualitzada el juliol de 2026: decisions automatitzades de solvència, fitxers ASNEF-Equifax i CIREX, assistents d’IA de veu per a recobrament i terminis de conservació de deu, sis i cinc anys.',
    }),
    s('plazo-app-store', 'Plazo · Tarjeta y Préstamos: Privacidad de la app', 'https://apps.apple.com/es/app/id1551296252', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: identificadors per rastrejar i dades sensibles i financeres vinculades a la persona.',
    }),
    s('plazo-delete-account', '¿Cómo puedo cancelar mi cuenta Plazo?', 'https://support.plazo.es/support/solutions/articles/101000507226', 'IDFINANCE PLAZO', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Article del centre d’ajuda que confirma que el compte es pot cancel·lar des de la mateixa aplicació.',
    }),
    s('idfinance-aepd-2024', 'Resolución PS-00091-2024 contra ID Finance Spain', 'https://www.aepd.es/documento/ps-00091-2024.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'Sanció de 180.000 euros a ID Finance Spain per comunicar un deute controvertit a un registre de solvència sense base jurídica i no suprimir-lo.',
    }),
    s('cetelem-privacy-policy', 'Aviso de Protección de Datos de Banco Cetelem', 'https://www.cetelem.es/proteccion-de-datos', 'Banco Cetelem', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Avís de protecció de dades de Cetelem: annex de puntuació creditícia amb rebuig automàtic sense intervenció humana, fitxers CIRBE, ASNEF i BADEXCUG, fitxers antifrau i terminis de deu i vint anys.',
    }),
    s('cetelem-app-store', 'Cetelem | Banca online: Privacidad de la app', 'https://apps.apple.com/es/app/id1246674535', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: identificadors utilitzats per rastrejar i informació financera vinculada a la persona.',
    }),
    s('cetelem-contacte', 'Contacto — Cetelem', 'https://www.cetelem.es/contacto', 'Banco Cetelem', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Canals oficials d’atenció i de sol·licituds, l’única via documentada per donar de baixa un producte.',
    }),
    s('cetelem-aepd-2024', 'Resolución PS-00061-2024 contra Banco Cetelem', 'https://www.aepd.es/documento/ps-00061-2024.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'Sanció de 250.000 euros, reduïda a 150.000 per pagament voluntari, per tractar el compte d’una persona aliena i no executar del tot una sol·licitud de supressió.',
    }),
    s('bankinter-privacy-policy', 'Uso de datos personales — Bankinter', 'https://www.bankinter.com/file_source/nbol/nav/seguridad-privacidad/uso_datos_personales.pdf', 'Bankinter', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Document complet de protecció de dades de Bankinter, actualitzat el juliol de 2026: perfils comercials, fitxers de solvència, desenvolupament de models d’IA i taula de terminis de conservació que arriba als vuitanta anys.',
    }),
    s('bankinter-security', 'Seguridad y privacidad — Bankinter', 'https://www.bankinter.com/banca/nav/seguridad-privacidad', 'Bankinter', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina de seguretat: certificacions ISO 22301, ISO/IEC 27001 i ISO/IEC 27017, targeta de coordenades, entrada biomètrica i tests d’intrusió periòdics.',
    }),
    s('bankinter-app-store', 'Bankinter Móvil: Privacidad de la app', 'https://apps.apple.com/es/app/id356160865', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: cap dada declarada per rastrejar.',
    }),
    s('bankinter-aepd-evo-2026', 'Resolución PS-00408-2025 contra Bankinter (bretxa d’EVO Banco)', 'https://www.aepd.es/documento/ps-00408-2025.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'Sanció de 400.000 euros, reduïda a 240.000 per pagament voluntari, per la vulnerabilitat d’una API d’EVO Banco que va exposar dades d’1,27 milions de persones.',
    }),
    s('banco-sabadell-privacy-policy', 'Anexo de información detallada de protección de datos — Banco Sabadell', 'https://www.bancsabadell.com/bsnacional/es/anexo-informacion-detallada-proteccion-datos-caracter-particular/', 'Banco de Sabadell', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Annex vigent de protecció de dades, redacció de juny de 2026: perfils de risc, consulta de fitxers de solvència per iniciativa del banc, dades biomètriques i terminis fins a la prescripció de les accions.',
    }),
    s('banco-sabadell-app-privacy', 'Política de privacidad de la app — Banco Sabadell', 'https://www.bancsabadell.com/cs/Satellite/SabAtl/Politica-de-privacidad/6000025944814/es/', 'Banco de Sabadell', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política específica de l’aplicació, enllaçada des de l’App Store: accés a l’agenda per a Bizum, comprovació d’aplicacions fraudulentes, comprovació de trucada en curs i baixa de l’usuari només per telèfon o correu.',
    }),
    s('banco-sabadell-app-store', 'App Banco Sabadell: Privacidad de la app', 'https://apps.apple.com/es/app/id347887638', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: cap dada declarada per rastrejar i la major part de categories no vinculades a la persona.',
    }),
    s('banco-sabadell-security', 'Seguridad — Banco Sabadell', 'https://www.bancsabadell.com/bsnacional/es/seguridad/', 'Banco de Sabadell', 'technical-doc', 'primary', {
      language: 'es',
      summary: 'Pàgina de seguretat amb la descripció de la doble verificació i de l’accés biomètric.',
    }),
    s('mapfre-privacy-policy', 'Política de privacidad de MAPFRE', 'https://www.mapfre.es/privacidad', 'MAPFRE España', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de privadesa de Mapfre a Espanya: dades de salut per a la gestió de sinistres, perfil comercial global, sistemes comuns del sector assegurador gestionats per TIREA i transferències amb normes corporatives vinculants.',
    }),
    s('mapfre-app-store', 'Mapfre | ES: Privacidad de la app', 'https://apps.apple.com/es/app/id425349256', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: dades de contacte declarades com a utilitzades per rastrejar i ubicació exacta no vinculada per a la personalització del producte.',
    }),
    s('mapfre-bcr-aepd', 'Resolución TI/00002/2024: aprobación de las BCR de responsable del Grupo MAPFRE', 'https://www.aepd.es/documento/ti-00002-2024-resolucion-aprobacion-bcr-r-mapfre.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'Aprovació de les normes corporatives vinculants de responsable del grup Mapfre, amb dictamen previ del Comitè Europeu de Protecció de Dades.',
    }),
    s('mapfre-aepd-galetes-2023', 'Resolución PA/00053-2023: apercibimiento a MAPFRE España', 'https://www.aepd.es/documento/pa-00053-2023.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'Apercebiment per carregar galetes de Google Analytics abans que la persona les pogués gestionar i per les transferències associades als Estats Units.',
    }),
    s('mapfre-aepd-ciberatac-2021', 'Resolución E/09159/2020: archivo de actuaciones sobre el ciberataque a MAPFRE', 'https://www.aepd.es/documento/e-09159-2020.pdf', 'Agencia Española de Protección de Datos', 'regulator', 'authority', {
      language: 'es',
      summary: 'Cronologia oficial del ransomware Ragnar Locker de l’agost de 2020, amb l’arxiu d’actuacions i la constatació que no hi va haver evidències de fuita d’informació.',
    }),
    s('mapfre-comunicat-ciberatac', 'MAPFRE compensará a los clientes perjudicados en el servicio a causa del ciberataque', 'https://www.mapfre.com/comunicacion/corporativo-comunicacion/mapfre-compensara-a-los-clientes-perjudicados-en-el-servicio-a-causa-del-ciberataque/', 'MAPFRE', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Comunicat corporatiu sobre l’afectació dels serveis d’assistència i la compensació als assegurats.',
    }),
    s('canva-privacy-policy', 'Canva Privacy Policy', 'https://www.canva.com/policies/privacy-policy/', 'Canva', 'privacy-policy', 'primary', {
      summary: 'Política de privadesa global de Canva, vigent des del 25 d’agost de 2026: dades recollides, entrenament d’algorismes amb el contingut, publicitat, transferències internacionals i representant a la UE.',
    }),
    s('canva-app-store', 'Canva: Editor de Fotos y Vídeos — Privacidad de la app', 'https://apps.apple.com/es/app/id897446215', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: identificadors utilitzats per rastrejar i una llista llarga de dades vinculades a la persona, amb publicitat de tercers entre les finalitats.',
    }),
    s('canva-delete-account', 'Delete account — Canva Help Center', 'https://www.canva.com/help/delete-account/', 'Canva', 'support-doc', 'primary', {
      summary: 'Passos oficials per eliminar el compte des de la configuració i termini de 14 dies abans que sigui definitiu.',
    }),
    s('canva-security', 'Security at Canva', 'https://www.canva.com/security/', 'Canva', 'technical-doc', 'primary', {
      summary: 'Pàgina de seguretat: xifratge TLS en trànsit i AES256 en repòs, verificació en dos passos, programa de recompenses i certificacions ISO 27001, SOC 2, SOC 3 i PCI DSS.',
    }),
    s('canva-security-txt', 'security.txt de canva.com', 'https://www.canva.com/.well-known/security.txt', 'Canva', 'technical-doc', 'primary', {
      summary: 'Fitxer security.txt amb el programa de recompenses a Bugcrowd, la política de divulgació i el contacte de seguretat.',
    }),
    s('canva-incident-2019', 'May 24 FAQs — Canva Help Center', 'https://www.canva.com/help/incident-may24', 'Canva', 'support-doc', 'primary', {
      summary: 'Comunicació oficial de la filtració del 24 de maig de 2019 i del desxifrat de quatre milions de contrasenyes el gener de 2020.',
    }),
    s('canva-hibp', 'Canva — Have I Been Pwned', 'https://haveibeenpwned.com/PwnedWebsites#Canva', 'Have I Been Pwned', 'other', 'independent', {
      summary: 'Fitxa de la filtració: 137.272.116 comptes amb adreces electròniques, noms, noms d’usuari, ciutat de residència i contrasenyes en bcrypt.',
    }),
    s('retro-privacy-policy', 'Retro Privacy Policy', 'https://retro.app/privacy', 'Lone Palm Labs', 'privacy-policy', 'primary', {
      summary: 'Política de privadesa de Retro, actualitzada el 20 de maig de 2025: dades recollides, ubicació de les fotos compartida per defecte, socis, drets i eliminació del compte per correu.',
    }),
    s('retro-terms', 'Retro Terms of Use', 'https://retro.app/terms', 'Lone Palm Labs', 'terms', 'primary', {
      summary: 'Condicions d’ús de Retro, del 18 d’abril de 2024, que identifiquen Lone Palm Labs, Inc. com a titular del servei.',
    }),
    s('retro-app-store', 'Retro — Fotos con amigos: Privacidad de la app', 'https://apps.apple.com/es/app/id6443709020', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa de l’App Store espanyol: cap dada declarada per rastrejar i totes les categories vinculades a la persona.',
    }),
    s('retro-security-txt', 'Absència de security.txt a retro.app', 'https://retro.app/.well-known/security.txt', 'Lone Palm Labs', 'technical-doc', 'primary', {
      summary: 'La consulta del fitxer security.txt del domini de Retro retorna un error 404: no hi ha canal públic de divulgació de vulnerabilitats.',
    }),
  ],
  apps: [klarna, myinvestor, ing, plazo, cetelem, bankinter, bancoSabadell, mapfre, canva, retro],
  incidents: [
    {
      slug: 'klarna-imy-2022',
      title: 'Sanció de l’autoritat sueca a Klarna per informació de privadesa deficient',
      type: 'regulatory-fine',
      severity: 'medium',
      apps: ['klarna'],
      company: 'klarna-bank',
      occurredAt: '2020-03-01',
      disclosedAt: '2022-03-28',
      description:
        'L’autoritat sueca de protecció de dades va multar Klarna amb 7,5 milions de corones perquè la informació de privadesa de la primavera del 2020 no indicava la finalitat ni la base jurídica d’un dels serveis i informava malament sobre els drets, en particular els de portabilitat i oposició. El tribunal administratiu va rebaixar la sanció a 6 milions i el tribunal d’apel·lació la va restablir en 7,5 milions.',
      regulatory: {
        authority: 'Integritetsskyddsmyndigheten',
        legalBasis: 'Articles 12, 13 i 14 del RGPD',
        status: 'final',
      },
      sources: ['klarna-imy-2022'],
    },
    {
      slug: 'klarna-exposicio-2021',
      title: 'Exposició de dades entre comptes de Klarna per un error de memòria cau',
      type: 'leak',
      severity: 'medium',
      apps: ['klarna'],
      company: 'klarna-bank',
      occurredAt: '2021-05-27',
      disclosedAt: '2021-05-27',
      description:
        'Una configuració incorrecta de la memòria cau va fer que, durant trenta-un minuts, algunes persones veiessin el compte d’altres. Segons l’informe de l’empresa, unes 11.000 van arribar a veure dades identificables d’altres persones i unes 15.000 les van tenir exposades: nom, adreça, correu electrònic, data de naixement i telèfon. No hi va haver dades de targeta afectades.',
      affectedPeople: 'Unes 15.000 persones amb dades identificables exposades.',
      sources: ['klarna-incident-2021'],
    },
    {
      slug: 'plazo-aepd-2024',
      title: 'Sanció de l’AEPD a ID Finance per un deute comunicat a un fitxer de morositat',
      type: 'regulatory-fine',
      severity: 'medium',
      apps: ['plazo'],
      company: 'id-finance',
      occurredAt: '2024-01-01',
      description:
        'L’AEPD va sancionar ID Finance Spain amb 180.000 euros per comunicar a un registre de solvència un deute controvertit, sense la certesa exigida, i per no suprimir-lo després de la reclamació de la persona afectada.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 180000,
        legalBasis: 'Article 6.1 del RGPD i article 20 de la LOPDGDD',
        status: 'final',
      },
      sources: ['idfinance-aepd-2024'],
    },
    {
      slug: 'cetelem-aepd-2024',
      title: 'Sanció de l’AEPD a Banco Cetelem per un tractament sense base i una supressió incompleta',
      type: 'regulatory-fine',
      severity: 'medium',
      apps: ['cetelem'],
      company: 'banco-cetelem',
      occurredAt: '2024-01-01',
      description:
        'L’AEPD va imposar a Banco Cetelem una sanció de 250.000 euros, reduïda a 150.000 per reconeixement de responsabilitat i pagament voluntari, per tractar dades d’una persona aliena al contracte i per no executar completament una sol·licitud de supressió.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 250000,
        legalBasis: 'Articles 6.1 i 17 del RGPD',
        status: 'final',
      },
      sources: ['cetelem-aepd-2024'],
    },
    {
      slug: 'bankinter-evo-bretxa',
      title: 'Sanció de l’AEPD a Bankinter per la bretxa d’una API d’EVO Banco',
      type: 'breach',
      severity: 'high',
      apps: ['bankinter'],
      company: 'bankinter',
      occurredAt: '2024-11-01',
      description:
        'Una vulnerabilitat en una interfície de programació d’EVO Banco, entitat absorbida per Bankinter, va permetre accedir a dades de clientela. L’AEPD va resoldre l’expedient amb una sanció de 400.000 euros, reduïda a 240.000 per pagament voluntari.',
      affectedPeople: 'Prop d’1,27 milions de persones, segons la resolució.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        fineAmountEur: 400000,
        legalBasis: 'Articles 5.1.f i 32 del RGPD',
        status: 'final',
      },
      sources: ['bankinter-aepd-evo-2026'],
    },
    {
      slug: 'mapfre-ransomware-2020',
      title: 'Atac de ransomware contra Mapfre',
      type: 'breach',
      severity: 'high',
      apps: ['mapfre'],
      company: 'mapfre',
      occurredAt: '2020-08-14',
      disclosedAt: '2020-08-17',
      description:
        'El programari de segrest Ragnar Locker va xifrar sistemes del grup i va degradar els serveis d’assistència durant dies. L’empresa va anunciar que compensaria la clientela afectada i l’AEPD va arxivar les actuacions en no apreciar evidències que hi hagués hagut fuita d’informació personal.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        status: 'final',
      },
      sources: ['mapfre-aepd-ciberatac-2021', 'mapfre-comunicat-ciberatac'],
    },
    {
      slug: 'mapfre-aepd-galetes-2023',
      title: 'Apercebiment de l’AEPD a Mapfre España per les galetes del web',
      type: 'regulatory-order',
      severity: 'low',
      apps: ['mapfre'],
      company: 'mapfre-espana',
      occurredAt: '2023-01-01',
      description:
        'L’AEPD va apercebre Mapfre España perquè el seu web carregava galetes de Google Analytics abans que la persona visitant les pogués acceptar o rebutjar, amb les transferències als Estats Units que això comportava.',
      regulatory: {
        authority: 'Agencia Española de Protección de Datos',
        legalBasis: 'Article 22.2 de la LSSI',
        status: 'final',
      },
      sources: ['mapfre-aepd-galetes-2023'],
    },
    {
      slug: 'canva-filtracio-2019',
      title: 'Filtració de 137 milions de comptes de Canva',
      type: 'breach',
      severity: 'high',
      apps: ['canva'],
      company: 'canva',
      occurredAt: '2019-05-24',
      disclosedAt: '2019-05-24',
      description:
        'Un atac va donar accés a les dades de 137.272.116 comptes de Canva: adreces electròniques, noms, noms d’usuari, ciutat de residència i contrasenyes desades amb bcrypt. El gener de 2020, l’empresa va reconèixer que quatre milions d’aquestes contrasenyes ja s’havien desxifrat i s’havien publicat en línia, i va forçar el restabliment de les contrasenyes que no s’havien canviat des de la filtració.',
      affectedPeople: '137 milions de comptes a tot el món.',
      sources: ['canva-incident-2019', 'canva-hibp'],
    },
  ],
  storeIds: {
    klarna: 'com.klarna.app',
    myinvestor: 'com.myinvestor.es',
    ing: 'es.ingdirect.www',
    plazo: 'es.card.plazo',
    cetelem: 'com.cetelem.HomeBanking',
    bankinter: 'com.bankinter.Launcher',
    'banco-sabadell': 'com.bancosabadell.sabloc',
    mapfre: 'com.mapfre.mapfreapp',
    canva: 'com.canva.canvaeditor',
    retro: 'io.lonepalm.Retro',
  },
}
