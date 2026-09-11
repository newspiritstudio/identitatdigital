import type { CategorySeed, DataTypeSeed, PurposeSeed } from './types'

/**
 * Vocabularis controlats del projecte.
 *
 * Són la infraestructura que fa possible preguntar al directori sencer. Si
 * «ubicació precisa» s'escriu de vint maneres diferents, la pregunta «quines
 * aplicacions recullen ubicació precisa?» no té resposta.
 */

export const dataTypes: DataTypeSeed[] = [
  {
    slug: 'identificador-de-compte',
    name: 'Identificador de compte',
    family: 'identifiers',
    sensitivity: 2,
    description:
      'Nom d’usuari, identificador intern i qualsevol clau que el servei utilitza per reconèixer un compte.',
    whyItMatters:
      'És el fil que uneix totes les altres dades. Sense identificador no hi ha perfil; amb ell, tota l’activitat queda cosida a una mateixa persona.',
    appleLabel: 'User ID',
  },
  {
    slug: 'nom-i-cognoms',
    name: 'Nom i cognoms',
    family: 'identifiers',
    sensitivity: 2,
    description: 'Nom real o nom públic declarat al perfil.',
    appleLabel: 'Name',
  },
  {
    slug: 'adreca-electronica',
    name: 'Adreça electrònica',
    family: 'contact',
    sensitivity: 2,
    description: 'Correu associat al compte, incloent-hi els àlies de verificació.',
    whyItMatters:
      'És l’identificador que més sovint permet creuar bases de dades entre serveis diferents.',
    appleLabel: 'Email Address',
  },
  {
    slug: 'numero-de-telefon',
    name: 'Número de telèfon',
    family: 'contact',
    sensitivity: 3,
    description: 'Número utilitzat per registrar-se, verificar el compte o rebre avisos.',
    whyItMatters:
      'A diferència del correu, gairebé ningú en té més d’un i està lligat a una identitat legal. És un identificador molt persistent.',
    appleLabel: 'Phone Number',
  },
  {
    slug: 'identificador-de-dispositiu',
    name: 'Identificador de dispositiu',
    family: 'device',
    sensitivity: 3,
    description: 'Identificadors del terminal o de la instal·lació de l’aplicació.',
    appleLabel: 'Device ID',
  },
  {
    slug: 'identificador-publicitari',
    name: 'Identificador publicitari',
    family: 'identifiers',
    sensitivity: 3,
    description:
      'IDFA a iOS, identificador de publicitat d’Android o equivalents propis del servei.',
    whyItMatters:
      'És l’identificador dissenyat expressament per seguir una persona entre aplicacions diferents.',
    appleLabel: 'Advertising Data',
  },
  {
    slug: 'adreca-ip',
    name: 'Adreça IP',
    family: 'device',
    sensitivity: 3,
    description: 'Adreça de xarxa des de la qual es connecta el dispositiu.',
    whyItMatters:
      'Permet deduir la ubicació aproximada i relacionar sessions que semblaven independents.',
  },
  {
    slug: 'galetes-i-identificadors-web',
    name: 'Galetes i identificadors web',
    family: 'identifiers',
    sensitivity: 3,
    description: 'Galetes, emmagatzematge local i empremtes del navegador.',
  },
  {
    slug: 'adreca-postal',
    name: 'Adreça postal',
    family: 'contact',
    sensitivity: 3,
    description: 'Adreça de facturació, de lliurament o de residència.',
  },
  {
    slug: 'llista-de-contactes',
    name: 'Llista de contactes',
    family: 'social',
    sensitivity: 4,
    description: 'Agenda del telèfon o contactes importats.',
    whyItMatters:
      'Revela dades de terceres persones que no han acceptat res. És l’exemple clàssic de dada que no és només teva.',
    appleLabel: 'Contacts',
  },
  {
    slug: 'ubicacio-precisa',
    name: 'Ubicació precisa',
    family: 'location',
    sensitivity: 5,
    description: 'Coordenades amb precisió de metres, en temps real o històriques.',
    whyItMatters:
      'On dorms, on treballes, a quin metge vas i a quina manifestació. Quatre punts d’ubicació basten per identificar una persona única entre milions.',
    appleLabel: 'Precise Location',
  },
  {
    slug: 'ubicacio-aproximada',
    name: 'Ubicació aproximada',
    family: 'location',
    sensitivity: 3,
    description: 'Població, regió o zona deduïda de la xarxa.',
    appleLabel: 'Coarse Location',
  },
  {
    slug: 'contingut-de-missatges',
    name: 'Contingut de missatges',
    family: 'content',
    sensitivity: 5,
    description: 'Text, àudio i fitxers de les converses privades.',
    whyItMatters:
      'És el contingut més íntim que una persona confia a un servei. La diferència entre poder-lo llegir o no marca tota la resta.',
  },
  {
    slug: 'metadades-de-comunicacio',
    name: 'Metadades de comunicació',
    family: 'behaviour',
    sensitivity: 4,
    description: 'Qui parla amb qui, quan, amb quina freqüència i des d’on.',
    whyItMatters:
      'Encara que el contingut estigui xifrat, el mapa de relacions revela vincles laborals, sentimentals, mèdics i polítics.',
  },
  {
    slug: 'publicacions-i-comentaris',
    name: 'Publicacions i comentaris',
    family: 'content',
    sensitivity: 3,
    description: 'Contingut públic o semipúblic creat per la persona usuària.',
  },
  {
    slug: 'fotografies-i-videos',
    name: 'Fotografies i vídeos',
    family: 'content',
    sensitivity: 4,
    description: 'Imatges pujades, incloent-hi les metadades del fitxer.',
    appleLabel: 'Photos or Videos',
  },
  {
    slug: 'fitxers-i-documents',
    name: 'Fitxers i documents',
    family: 'content',
    sensitivity: 4,
    description: 'Documents emmagatzemats o compartits a través del servei.',
  },
  {
    slug: 'veu-i-audio',
    name: 'Veu i àudio',
    family: 'content',
    sensitivity: 4,
    description: 'Enregistraments de veu, notes d’àudio i comandes parlades.',
    appleLabel: 'Audio Data',
  },
  {
    slug: 'historial-de-navegacio',
    name: 'Historial de navegació',
    family: 'behaviour',
    sensitivity: 4,
    description: 'Pàgines visitades dins i fora del servei.',
    whyItMatters:
      'És una de les dades més reveladores que existeixen: mostra interessos, salut, orientació i creences sense que calgui declarar-los.',
    appleLabel: 'Browsing History',
  },
  {
    slug: 'historial-de-cerca',
    name: 'Historial de cerca',
    family: 'behaviour',
    sensitivity: 4,
    description: 'Consultes escrites al cercador del servei.',
    whyItMatters: 'La gent pregunta a un cercador coses que no diria a ningú.',
    appleLabel: 'Search History',
  },
  {
    slug: 'historial-de-visualitzacio',
    name: 'Historial de reproducció',
    family: 'behaviour',
    sensitivity: 3,
    description: 'Contingut vist o escoltat, amb durada i moment.',
  },
  {
    slug: 'interaccions-i-us',
    name: 'Interaccions i ús',
    family: 'behaviour',
    sensitivity: 3,
    description:
      'Clics, temps de permanència, desplaçament, pauses i qualsevol senyal de comportament dins del producte.',
    appleLabel: 'Product Interaction',
  },
  {
    slug: 'interessos-inferits',
    name: 'Interessos inferits',
    family: 'behaviour',
    sensitivity: 4,
    description:
      'Categories que el servei dedueix de l’activitat, no dades que la persona hagi facilitat.',
    whyItMatters:
      'És la dada que la persona no sap que existeix. Sovint inclou categories sensibles deduïdes indirectament.',
  },
  {
    slug: 'xarxa-de-contactes',
    name: 'Xarxa de contactes',
    family: 'social',
    sensitivity: 4,
    description: 'Amistats, seguidors, grups i connexions professionals.',
  },
  {
    slug: 'informacio-del-dispositiu',
    name: 'Informació del dispositiu',
    family: 'device',
    sensitivity: 2,
    description: 'Model, sistema operatiu, idioma, resolució i configuració.',
  },
  {
    slug: 'xarxa-i-connectivitat',
    name: 'Xarxa i connectivitat',
    family: 'device',
    sensitivity: 2,
    description: 'Operador, tipus de connexió i xarxes wifi properes.',
  },
  {
    slug: 'aplicacions-instal-lades',
    name: 'Aplicacions instal·lades',
    family: 'device',
    sensitivity: 4,
    description: 'Inventari d’aplicacions presents al dispositiu.',
    whyItMatters:
      'La llista d’aplicacions és un perfil per si sola: revela salut, orientació, religió i situació econòmica.',
  },
  {
    slug: 'dades-de-pagament',
    name: 'Dades de pagament',
    family: 'financial',
    sensitivity: 4,
    description: 'Mitjà de pagament, adreça de facturació i historial de transaccions.',
    appleLabel: 'Payment Info',
  },
  {
    slug: 'historial-de-compres',
    name: 'Historial de compres',
    family: 'financial',
    sensitivity: 3,
    description: 'Productes i serveis adquirits a través del servei.',
    appleLabel: 'Purchase History',
  },
  {
    slug: 'dades-biometriques',
    name: 'Dades biomètriques',
    family: 'biometric',
    sensitivity: 5,
    specialCategory: true,
    description:
      'Trets facials, empremtes o veu tractats amb finalitat identificativa.',
    whyItMatters: 'No es poden canviar. Una contrasenya filtrada es canvia; una cara, no.',
  },
  {
    slug: 'dades-de-salut',
    name: 'Dades de salut',
    family: 'health',
    sensitivity: 5,
    specialCategory: true,
    description: 'Informació sobre estat de salut, condicions mèdiques o activitat física.',
  },
  {
    slug: 'orientacio-sexual',
    name: 'Orientació sexual',
    family: 'special',
    sensitivity: 5,
    specialCategory: true,
    description: 'Orientació declarada o deduïble de l’ús del servei.',
  },
  {
    slug: 'conviccions-i-opinions',
    name: 'Conviccions i opinions',
    family: 'special',
    sensitivity: 5,
    specialCategory: true,
    description: 'Opinions polítiques, creences religioses o afiliació sindical.',
  },
  {
    slug: 'dades-de-diagnostic',
    name: 'Dades de diagnòstic',
    family: 'diagnostics',
    sensitivity: 1,
    description: 'Registres de fallades, rendiment i estabilitat de l’aplicació.',
    appleLabel: 'Diagnostics',
  },
/* ── Ampliació de setembre de 2026 ──
   * Tipus de dada que el vocabulari no cobria i que la importació del catàleg de
   * Have I Been Pwned va deixar al descobert. El vocabulari original responia la
   * pregunta «què recull una aplicació»; les filtracions plantegen la pregunta
   * complementària, «quins secrets custodia», i és on hi havia el forat més gran:
   * dues de cada tres filtracions exposen contrasenyes i no hi havia on desar-ho.
   *
   * Afegir vocabulari no mou cap puntuació. El sostre de volum de dades es
   * calcula sobre la sensibilitat acumulada del que una fitxa declara recollir,
   * no sobre la mida del catàleg, de manera que aquests tipus només afectaran una
   * nota quan algú documenti que un servei els recull de debò.
   */
  {
    slug: 'contrasenya',
    name: 'Contrasenya',
    family: 'credentials',
    sensitivity: 5,
    description:
      'Contrasenya del compte, tant si es desa xifrada amb una funció de derivació moderna com si es desa amb un resum antic o, en els casos pitjors, en text pla.',
    whyItMatters:
      'La gent reutilitza contrasenyes. Una contrasenya filtrada d’un servei sense importància obre els comptes que sí que en tenen, i per això una sola filtració es propaga a mitja vida digital d’una persona.',
  },
  {
    slug: 'pregunta-de-seguretat',
    name: 'Pregunta i resposta de seguretat',
    family: 'credentials',
    sensitivity: 5,
    description:
      'Preguntes de recuperació del compte i les seves respostes, sovint desades sense xifrar.',
    whyItMatters:
      'La resposta no es pot canviar: el cognom de soltera de la mare és per sempre. Una filtració la crema a tots els serveis alhora, i habitualment permet saltar-se la contrasenya en comptes d’haver-la d’endevinar.',
  },
  {
    slug: 'testimoni-d-autenticacio',
    name: 'Testimoni d’autenticació',
    family: 'credentials',
    sensitivity: 4,
    description:
      'Galetes de sessió, testimonis d’accés i claus d’API que mantenen la sessió oberta sense tornar a demanar la contrasenya.',
    whyItMatters:
      'Qui té el testimoni entra sense contrasenya i, sovint, sense passar pel segon factor. És la manera més silenciosa de perdre un compte que tens ben protegit.',
  },
  {
    slug: 'data-de-naixement',
    name: 'Data de naixement',
    family: 'identifiers',
    sensitivity: 3,
    description: 'Data completa o any de naixement declarat al perfil o exigit al registre.',
    whyItMatters:
      'Combinada amb el nom i el codi postal identifica una persona concreta amb una precisió altíssima. També és la dada que decideix si el servei et tracta com a menor.',
  },
  {
    slug: 'genere',
    name: 'Gènere declarat',
    family: 'identifiers',
    sensitivity: 2,
    description: 'Gènere que la persona declara al perfil o que el servei infereix del seu ús.',
    whyItMatters:
      'És una de les primeres variables de segmentació publicitària i condiciona què et mostren abans que hagis fet res.',
  },
  {
    slug: 'ocupacio-i-carrec',
    name: 'Ocupació i càrrec',
    family: 'identifiers',
    sensitivity: 3,
    description: 'Professió, càrrec, empresa ocupadora i situació laboral.',
    whyItMatters:
      'És la matèria primera del frau dirigit: saber on treballes i de qui depens permet escriure el correu exacte que et farà caure.',
  },
  {
    slug: 'document-identificatiu-oficial',
    name: 'Document identificatiu oficial',
    family: 'identifiers',
    sensitivity: 5,
    description:
      'Número de document nacional d’identitat, passaport, permís de conduir o número de seguretat social, i les imatges d’aquests documents.',
    whyItMatters:
      'No es pot canviar quan es filtra i habilita la suplantació amb efectes legals, des d’obrir un contracte fins a demanar un crèdit. És la pèrdua més difícil de reparar.',
  },
  {
    slug: 'origen-etnic-o-nacionalitat',
    name: 'Origen ètnic o nacionalitat',
    family: 'special',
    sensitivity: 5,
    specialCategory: true,
    description: 'Origen racial o ètnic, nacionalitat i país de naixement declarats o inferits.',
    whyItMatters:
      'És una categoria especial de l’article 9 del RGPD. Tractar-la sense una base reforçada és il·lícit, i fer-la servir per segmentar obre la porta a la discriminació directa.',
    appleLabel: 'Sensitive Info',
  },
  {
    slug: 'situacio-familiar',
    name: 'Situació familiar',
    family: 'identifiers',
    sensitivity: 3,
    description: 'Estat civil, convivència, fills a càrrec i estructura de la llar.',
    whyItMatters:
      'Defineix moments vitals de gran valor publicitari, com una separació o un embaràs, i és la mena de dada que les plataformes dedueixen abans que la persona l’hagi explicat a ningú.',
  },
  {
    slug: 'nivell-d-ingressos',
    name: 'Nivell d’ingressos i solvència',
    family: 'financial',
    sensitivity: 4,
    description:
      'Ingressos estimats o declarats, capacitat de despesa, solvència i segment socioeconòmic assignat.',
    whyItMatters:
      'És diferent de la dada de pagament: no diu com pagues sinó quant et poden cobrar. Permet preus personalitzats i decideix quines ofertes no arribes a veure mai.',
  },
  {
    slug: 'nivell-formatiu',
    name: 'Nivell formatiu',
    family: 'identifiers',
    sensitivity: 2,
    description: 'Estudis cursats, titulacions i centres on s’han obtingut.',
    whyItMatters:
      'Per si sol diu poc, però és una de les variables que més afina els models de segmentació quan es creua amb l’ocupació i l’edat.',
  },
  {
    slug: 'llengua',
    name: 'Llengua',
    family: 'identifiers',
    sensitivity: 2,
    description: 'Llengües que la persona declara parlar o que el servei dedueix del seu ús.',
    whyItMatters:
      'Sembla innòcua i sovint no ho és: la llengua és un indici raonable de l’origen, i per aquesta via acaba funcionant com un substitut d’una dada que sí que és especial.',
  },
]

export const purposes: PurposeSeed[] = [
  {
    slug: 'prestacio-del-servei',
    name: 'Prestació del servei',
    privacyImpact: 'necessary',
    necessaryForService: true,
    description: 'Fer funcionar allò que la persona ha demanat expressament.',
    typicalLegalBasis: 'contract',
  },
  {
    slug: 'seguretat-i-prevencio-del-frau',
    name: 'Seguretat i prevenció del frau',
    privacyImpact: 'necessary',
    necessaryForService: true,
    description: 'Detectar accessos no autoritzats, comptes falsos i abusos.',
    typicalLegalBasis: 'legitimate-interest',
  },
  {
    slug: 'compliment-legal',
    name: 'Compliment d’obligacions legals',
    privacyImpact: 'necessary',
    necessaryForService: true,
    description: 'Conservació fiscal, requeriments judicials i obligacions sectorials.',
    typicalLegalBasis: 'legal-obligation',
  },
  {
    slug: 'moderacio-de-continguts',
    name: 'Moderació de continguts',
    privacyImpact: 'necessary',
    description: 'Aplicació de les normes de la comunitat i obligacions del Reglament de Serveis Digitals.',
    typicalLegalBasis: 'legal-obligation',
  },
  {
    slug: 'atencio-a-lusuari',
    name: 'Atenció a la persona usuària',
    privacyImpact: 'neutral',
    necessaryForService: true,
    description: 'Resoldre incidències i respondre consultes.',
    typicalLegalBasis: 'contract',
  },
  {
    slug: 'mesura-i-analisi-dus',
    name: 'Mesura i anàlisi d’ús',
    privacyImpact: 'neutral',
    description: 'Estadístiques agregades sobre com s’utilitza el servei.',
    typicalLegalBasis: 'legitimate-interest',
  },
  {
    slug: 'millora-del-producte',
    name: 'Millora del producte',
    privacyImpact: 'neutral',
    description: 'Desenvolupament de funcions noves i correcció d’errors.',
    typicalLegalBasis: 'legitimate-interest',
  },
  {
    slug: 'investigacio-i-estadistica',
    name: 'Recerca i estadística',
    privacyImpact: 'neutral',
    description: 'Estudis interns o acadèmics sobre l’ús del servei.',
    typicalLegalBasis: 'legitimate-interest',
  },
  {
    slug: 'personalitzacio-de-continguts',
    name: 'Personalització de continguts',
    privacyImpact: 'intrusive',
    description: 'Adaptació del que es mostra segons el comportament observat.',
    typicalLegalBasis: 'mixed',
  },
  {
    slug: 'recomanacions-algoritmiques',
    name: 'Recomanacions algorítmiques',
    privacyImpact: 'intrusive',
    description: 'Sistemes que decideixen l’ordre i la selecció del contingut.',
    typicalLegalBasis: 'mixed',
  },
  {
    slug: 'mesura-publicitaria',
    name: 'Mesura publicitària',
    privacyImpact: 'intrusive',
    description: 'Atribució de conversions i recompte d’impressions.',
    typicalLegalBasis: 'consent',
  },
  {
    slug: 'compartir-dins-del-grup',
    name: 'Compartició dins del grup empresarial',
    privacyImpact: 'intrusive',
    description: 'Circulació de dades entre les empreses del mateix conglomerat.',
    typicalLegalBasis: 'legitimate-interest',
  },
  {
    slug: 'entrenament-de-models-dia',
    name: 'Entrenament de models d’intel·ligència artificial',
    privacyImpact: 'intrusive',
    description: 'Ús del contingut de les persones usuàries per entrenar models generatius.',
    typicalLegalBasis: 'legitimate-interest',
  },
  {
    slug: 'publicitat-personalitzada',
    name: 'Publicitat personalitzada',
    privacyImpact: 'highly-intrusive',
    description: 'Selecció d’anuncis a partir del perfil de la persona.',
    typicalLegalBasis: 'consent',
  },
  {
    slug: 'elaboracio-de-perfils',
    name: 'Elaboració de perfils',
    privacyImpact: 'highly-intrusive',
    description: 'Inferència d’atributs, interessos i prediccions de comportament.',
    typicalLegalBasis: 'mixed',
  },
  {
    slug: 'cessio-a-tercers',
    name: 'Cessió a tercers',
    privacyImpact: 'highly-intrusive',
    description: 'Comunicació de dades a empreses alienes al grup.',
    typicalLegalBasis: 'consent',
  },
]

export const categories: CategorySeed[] = [
  {
    slug: 'missatgeria',
    name: 'Missatgeria',
    functionalNeed:
      'Parlar en privat amb persones conegudes, en text, veu o vídeo, i compartir-hi fitxers.',
    privacyContext:
      'El servei necessita saber a qui envies cada missatge; no necessita poder-lo llegir. Aquesta és la línia que separa un servei de missatgeria d’un altre.',
  },
  {
    slug: 'xarxes-socials',
    name: 'Xarxes socials',
    functionalNeed:
      'Publicar contingut per a un públic ampli i seguir el que publiquen altres persones.',
    privacyContext:
      'La publicació és pública per definició, però el perfil de comportament que se’n deriva no ho és. La diferència entre el que expliques i el que dedueixen de tu és tot el terreny en disputa.',
  },
  {
    slug: 'comunitats-i-forums',
    name: 'Comunitats i fòrums',
    functionalNeed: 'Participar en converses temàtiques amb persones desconegudes.',
    privacyContext:
      'El pseudònim és la protecció principal. El que compta és si el servei el manté separat de la identitat real.',
  },
  {
    slug: 'descobriment-visual',
    name: 'Descobriment visual',
    functionalNeed: 'Trobar i desar idees, referències i productes en format d’imatge.',
  },
  {
    slug: 'video-i-streaming',
    name: 'Vídeo i streaming',
    functionalNeed: 'Veure contingut audiovisual sota demanda.',
    privacyContext:
      'L’historial de reproducció és una dada de comportament molt reveladora, encara que sembli innocu.',
  },
  {
    slug: 'musica-i-audio',
    name: 'Música i àudio',
    functionalNeed: 'Escoltar música i pòdcasts en línia.',
  },
  {
    slug: 'cercadors',
    name: 'Cercadors',
    functionalNeed: 'Trobar informació a la xarxa a partir d’una consulta.',
    privacyContext:
      'Un cercador rep les preguntes que ningú faria en veu alta. Que les associï o no a una identitat ho canvia tot.',
  },
  {
    slug: 'navegadors',
    name: 'Navegadors',
    functionalNeed: 'Accedir a llocs web, gestionar sessions i sincronitzar dades entre dispositius.',
    privacyContext:
      'El navegador ho veu tot. La qüestió no és què podria recollir, sinó què decideix no recollir i què bloqueja de tercers.',
  },
  {
    slug: 'correu-electronic',
    name: 'Correu electrònic',
    functionalNeed: 'Enviar i rebre correu, i conservar-lo de manera accessible.',
    privacyContext:
      'La bústia és l’arxiu de la vida adulta: contractes, salut, feina i relacions. Qui la pot llegir és la pregunta central.',
  },
  {
    slug: 'mapes-i-navegacio',
    name: 'Mapes i navegació',
    functionalNeed: 'Orientar-se, buscar llocs i calcular rutes.',
    privacyContext:
      'La ubicació és imprescindible per calcular una ruta; conservar-ne l’historial durant anys, no.',
  },
  {
    slug: 'comerc-electronic',
    name: 'Comerç electrònic',
    functionalNeed: 'Comprar productes i rebre’ls a casa.',
    privacyContext:
      'Una adreça i un mitjà de pagament són inevitables; un perfil de consum de deu anys utilitzat per a publicitat, no.',
  },
  {
    slug: 'repartiment-a-domicili',
    name: 'Repartiment a domicili',
    functionalNeed: 'Demanar menjar o productes i rebre’ls en poca estona.',
    privacyContext:
      'Requereix ubicació en temps real durant el lliurament. El que cal mirar és què passa amb aquesta ubicació després.',
  },
  {
    slug: 'cites',
    name: 'Aplicacions de cites',
    functionalNeed: 'Conèixer persones amb intenció romàntica o sexual.',
    privacyContext:
      'Són l’únic tipus de servei on les categories especials de l’article 9 del RGPD són el nucli del producte: orientació sexual, salut i creences.',
  },
  {
    slug: 'xarxes-professionals',
    name: 'Xarxes professionals',
    functionalNeed: 'Mantenir un perfil laboral, buscar feina i contactar amb altres professionals.',
    privacyContext:
      'El perfil és públic per voluntat pròpia, però l’historial de cerca de feina és una dada sensible en el context laboral.',
  },
]
