import type { CategorySeed, DataTypeSeed, PurposeSeed } from './types'

/**
 * Vocabularis controlats del projecte.
 *
 * Si «ubicació precisa» s'escriu de vint maneres diferents, no es pot consultar
 * el directori sencer per aquesta dada.
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
      'Permet relacionar totes les altres dades entre si. Sense identificador no es pot construir un perfil; amb ell, tota l’activitat queda associada a una mateixa persona.',
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
      'Revela dades de terceres persones que no han acceptat res, de manera que no és una dada només teva.',
    appleLabel: 'Contacts',
  },
  {
    slug: 'ubicacio-precisa',
    name: 'Ubicació precisa',
    family: 'location',
    sensitivity: 5,
    description: 'Coordenades amb precisió de metres, en temps real o històriques.',
    whyItMatters:
      'Revela on dorms, on treballes, a quin metge vas i a quines manifestacions assisteixes. Quatre punts d’ubicació basten per identificar una persona única entre milions.',
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
      'És el contingut més íntim que una persona confia a un servei, i per això és decisiu saber si el servei el pot llegir.',
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
      'La persona no sap que aquesta dada existeix. Sovint inclou categories sensibles deduïdes indirectament.',
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
      'La llista d’aplicacions revela per si sola salut, orientació, religió i situació econòmica.',
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
    whyItMatters: 'A diferència d’una contrasenya, no es poden canviar si es filtren.',
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
      'La gent reutilitza contrasenyes. Una contrasenya filtrada d’un servei sense importància permet entrar als comptes que sí que en tenen, i per això una sola filtració s’estén a molts altres serveis de la mateixa persona.',
  },
  {
    slug: 'pregunta-de-seguretat',
    name: 'Pregunta i resposta de seguretat',
    family: 'credentials',
    sensitivity: 5,
    description:
      'Preguntes de recuperació del compte i les seves respostes, sovint desades sense xifrar.',
    whyItMatters:
      'La resposta no es pot canviar (el cognom de soltera de la mare sempre és el mateix). Una filtració la inutilitza a tots els serveis alhora, i habitualment permet entrar al compte sense haver d’endevinar la contrasenya.',
  },
  {
    slug: 'testimoni-d-autenticacio',
    name: 'Testimoni d’autenticació',
    family: 'credentials',
    sensitivity: 4,
    description:
      'Galetes de sessió, testimonis d’accés i claus d’API que mantenen la sessió oberta sense tornar a demanar la contrasenya.',
    whyItMatters:
      'Qui té el testimoni entra sense contrasenya i, sovint, sense passar pel segon factor, de manera que es pot perdre un compte ben protegit sense cap avís.',
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
      'És la base del frau dirigit: saber on treballes i de qui depens permet escriure un correu fraudulent molt creïble.',
  },
  {
    slug: 'document-identificatiu-oficial',
    name: 'Document identificatiu oficial',
    family: 'identifiers',
    sensitivity: 5,
    description:
      'Número de document nacional d’identitat, passaport, permís de conduir o número de seguretat social, i les imatges d’aquests documents.',
    whyItMatters:
      'No es pot canviar quan es filtra i habilita la suplantació amb efectes legals, des d’obrir un contracte fins a demanar un crèdit, i és la pèrdua més difícil de reparar.',
  },
  {
    slug: 'origen-etnic-o-nacionalitat',
    name: 'Origen ètnic o nacionalitat',
    family: 'special',
    sensitivity: 5,
    specialCategory: true,
    description: 'Origen racial o ètnic, nacionalitat i país de naixement declarats o inferits.',
    whyItMatters:
      'És una categoria especial de l’article 9 del RGPD. Tractar-la sense una base reforçada és il·lícit, i fer-la servir per segmentar permet la discriminació directa.',
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
      'A diferència de la dada de pagament, indica quant et poden cobrar. Permet aplicar preus personalitzats i decidir quines ofertes no et mostren mai.',
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
      'Sovint no és innòcua: la llengua és un indici raonable de l’origen, i per aquesta via acaba funcionant com a substitut d’una dada de categoria especial.',
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
      'El servei necessita saber a qui envies cada missatge, però no necessita poder-lo llegir. La diferència principal entre serveis de missatgeria és si el poden llegir o no.',
  },
  {
    slug: 'xarxes-socials',
    name: 'Xarxes socials',
    functionalNeed:
      'Publicar contingut per a un públic ampli i seguir el que publiquen altres persones.',
    privacyContext:
      'La publicació és pública per definició, però el perfil de comportament que se’n deriva no ho és. La qüestió de privadesa és el que dedueixen de tu a partir del que expliques.',
  },
  {
    slug: 'comunitats-i-forums',
    name: 'Comunitats i fòrums',
    functionalNeed: 'Participar en converses temàtiques amb persones desconegudes.',
    privacyContext:
      'El pseudònim és la protecció principal, sempre que el servei el mantingui separat de la identitat real.',
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
      'Un cercador rep preguntes que ningú faria en veu alta, i per això és decisiu si les associa o no a una identitat.',
  },
  {
    slug: 'navegadors',
    name: 'Navegadors',
    functionalNeed: 'Accedir a llocs web, gestionar sessions i sincronitzar dades entre dispositius.',
    privacyContext:
      'El navegador té accés a tota l’activitat web. Per això cal mirar què decideix no recollir i què bloqueja de tercers.',
  },
  {
    slug: 'correu-electronic',
    name: 'Correu electrònic',
    functionalNeed: 'Enviar i rebre correu, i conservar-lo de manera accessible.',
    privacyContext:
      'La bústia conserva contractes, informació de salut, feina i relacions. La pregunta principal és qui la pot llegir.',
  },
  {
    slug: 'mapes-i-navegacio',
    name: 'Mapes i navegació',
    functionalNeed: 'Orientar-se, buscar llocs i calcular rutes.',
    privacyContext:
      'La ubicació és imprescindible per calcular una ruta, però conservar-ne l’historial durant anys no ho és.',
  },
  {
    slug: 'comerc-electronic',
    name: 'Comerç electrònic',
    functionalNeed: 'Comprar productes i rebre’ls a casa.',
    privacyContext:
      'Una adreça i un mitjà de pagament són inevitables, però un perfil de consum de deu anys utilitzat per a publicitat no ho és.',
  },
  {
    slug: 'repartiment-a-domicili',
    name: 'Repartiment a domicili',
    functionalNeed: 'Demanar menjar o productes i rebre’ls en poca estona.',
    privacyContext:
      'Requereix ubicació en temps real durant el lliurament. Cal mirar què es fa amb aquesta ubicació després del lliurament.',
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
  /* ── Segona onada: categories que demana el rànquing de l'App Store ── */
  {
    slug: 'assistents-d-ia',
    name: 'Assistents d’intel·ligència artificial',
    functionalNeed: 'Conversar amb un model de llenguatge per escriure, resumir, programar o resoldre dubtes.',
    privacyContext:
      'La gent explica a un xatbot coses que no explicaria a un cercador. La primera pregunta és si les converses serveixen per entrenar models i si ho pots evitar.',
  },
  {
    slug: 'ofimatica-i-productivitat',
    name: 'Ofimàtica i productivitat',
    functionalNeed: 'Crear documents, fulls de càlcul i notes, organitzar l’agenda i escanejar papers.',
    privacyContext:
      'Els documents de feina i els papers escanejats contenen contractes, nòmines i dades de terceres persones. Cal saber on es desen i qui hi pot accedir.',
  },
  {
    slug: 'emmagatzematge-al-nuvol',
    name: 'Emmagatzematge al núvol',
    functionalNeed: 'Desar fotos i fitxers fora del dispositiu i sincronitzar-los.',
    privacyContext:
      'Una còpia de totes les fotos d’una vida és també un arxiu de cares, llocs i dates. Cal saber si el proveïdor les pot analitzar o només les guarda.',
  },
  {
    slug: 'videoconferencia-i-feina',
    name: 'Videoconferència i comunicació de feina',
    functionalNeed: 'Fer reunions en línia i coordinar equips de treball.',
    privacyContext:
      'Sovint no el tria la persona usuària sinó l’organització. Això desplaça el control de les dades cap a l’administrador del compte de feina o d’escola.',
  },
  {
    slug: 'autenticacio-i-seguretat',
    name: 'Autenticació i seguretat',
    functionalNeed: 'Generar codis d’accés, protegir connexions i gestionar la identitat digital.',
    privacyContext:
      'Són eines de protecció, i per això es valoren amb més exigència: una aplicació de seguretat que recull més del necessari contradiu la seva pròpia finalitat.',
  },
  {
    slug: 'administracio-publica',
    name: 'Tràmits i administració pública',
    functionalNeed: 'Identificar-se davant de l’administració, fer tràmits i rebre notificacions oficials.',
    privacyContext:
      'No hi ha alternativa de mercat: si l’administració ofereix el tràmit només per una aplicació, cal fer-la servir. La base legal és l’obligació legal o l’interès públic, no el consentiment.',
  },
  {
    slug: 'educacio',
    name: 'Educació',
    functionalNeed: 'Aprendre, seguir el curs escolar i comunicar-se amb el centre educatiu.',
    privacyContext:
      'Moltes persones usuàries són menors i no han triat l’eina. Les dades acadèmiques i de comportament a l’aula mereixen la protecció reforçada que el RGPD dona a la infància.',
  },
  {
    slug: 'banca-i-finances',
    name: 'Banca, pagaments i inversió',
    functionalNeed: 'Gestionar comptes, pagar, enviar diners i invertir.',
    privacyContext:
      'Els moviments d’un compte revelen salut, ideologia, relacions i rutines. La normativa de blanqueig obliga a conservar-ne molts, però no a fer-los servir per a màrqueting.',
  },
  {
    slug: 'mobilitat-i-transport',
    name: 'Mobilitat i transport',
    functionalNeed: 'Moure’s per la ciutat: transport públic, vehicles amb conductor, bicicletes, aparcament i carburant.',
    privacyContext:
      'Cada trajecte deixa un origen, un destí i una hora. Acumulats, diuen on vius, on treballes i qui visites.',
  },
  {
    slug: 'viatges-i-allotjament',
    name: 'Viatges i allotjament',
    functionalNeed: 'Reservar vols, trens, hotels i activitats.',
    privacyContext:
      'Reservar un viatge exigeix el document d’identitat i dades de passatgers que les autoritats poden reclamar. Cal mirar què se’n fa més enllà del viatge.',
  },
  {
    slug: 'salut-i-assistencia-sanitaria',
    name: 'Salut i assistència sanitària',
    functionalNeed: 'Demanar cita mèdica, consultar l’historial i gestionar la cobertura sanitària.',
    privacyContext:
      'Les dades de salut són categoria especial de l’article 9 del RGPD. El tractament ha de ser el mínim imprescindible i mai no hauria d’alimentar publicitat.',
  },
  {
    slug: 'benestar-i-activitat-fisica',
    name: 'Benestar i activitat física',
    functionalNeed: 'Registrar entrenaments, alimentació, cicle menstrual o estat d’ànim.',
    privacyContext:
      'Moltes d’aquestes dades són de salut encara que l’aplicació no sigui sanitària. Que es presentin com a «benestar» no les treu de la protecció especial.',
  },
  {
    slug: 'noticies-i-mitjans',
    name: 'Notícies, ràdio i mitjans',
    functionalNeed: 'Informar-se i escoltar la ràdio o els pòdcasts d’un mitjà.',
    privacyContext:
      'El que llegeixes permet inferir opinions polítiques, una categoria especial. Els mitjans solen viure de la publicitat programàtica, que multiplica els tercers presents.',
  },
  {
    slug: 'meteorologia',
    name: 'Meteorologia',
    functionalNeed: 'Consultar la previsió del temps i les alertes.',
    privacyContext:
      'Una previsió només necessita una ubicació aproximada. Les aplicacions gratuïtes del temps s’han fet famoses per vendre la ubicació precisa i contínua.',
  },
  {
    slug: 'feina-i-ocupacio',
    name: 'Feina i ocupació',
    functionalNeed: 'Buscar feina, enviar el currículum i gestionar la relació amb l’empresa de treball temporal.',
    privacyContext:
      'Un currículum recull formació, trajectòria, edat i sovint una foto. Per a la privadesa, qui el pot veure i quant de temps el conserven compta molt més que la cerca.',
  },
  {
    slug: 'habitatge',
    name: 'Habitatge',
    functionalNeed: 'Buscar pis per comprar o llogar i contactar amb qui l’ofereix.',
    privacyContext:
      'Les cerques d’habitatge revelen ingressos, situació familiar i on vols viure. Els contactes amb anunciants solen passar a immobiliàries que són responsables pel seu compte.',
  },
  {
    slug: 'compravenda-entre-particulars',
    name: 'Compravenda entre particulars',
    functionalNeed: 'Vendre i comprar objectes de segona mà a altres persones.',
    privacyContext:
      'Tractar amb persones desconegudes obliga a verificar identitats i a moderar, però també exposa ubicació i hàbits de consum a la plataforma i a la contrapart.',
  },
  {
    slug: 'alimentacio-i-restauracio',
    name: 'Supermercats, restauració i fidelització',
    functionalNeed: 'Fer la compra, demanar menjar a un establiment i acumular descomptes.',
    privacyContext:
      'Els programes de punts són un intercanvi explícit: descomptes a canvi del tiquet de compra detallat. El que es compra al supermercat diu molt de la salut i la família.',
  },
  {
    slug: 'llibres-i-lectura',
    name: 'Llibres, audiollibres i lectura',
    functionalNeed: 'Llegir o escoltar llibres i històries en format digital.',
    privacyContext:
      'Què llegeixes, fins on i a quina hora és una dada íntima. Les biblioteques la protegeixen per tradició; les plataformes comercials, no sempre.',
  },
  {
    slug: 'edicio-de-foto-i-video',
    name: 'Edició de foto i vídeo',
    functionalNeed: 'Retocar imatges, muntar vídeos i generar contingut visual, sovint amb IA.',
    privacyContext:
      'Pujar una foto de la cara per editar-la pot equivaler a cedir una dada biomètrica. Cal saber si la imatge es processa al dispositiu o al servidor i si serveix per entrenar models.',
  },
  {
    slug: 'traduccio-i-referencia',
    name: 'Traducció, diccionaris i referència',
    functionalNeed: 'Traduir textos i veu, consultar diccionaris i identificar objectes.',
    privacyContext:
      'El que es tradueix sovint és privat: correus, contractes, converses. Cal saber si el text s’envia al servidor i si s’hi queda.',
  },
  {
    slug: 'utilitats',
    name: 'Utilitats',
    functionalNeed: 'Resoldre tasques puntuals del dispositiu: widgets, comandaments, neteja o personalització.',
    privacyContext:
      'Moltes utilitats gratuïtes les publiquen desenvolupadors petits que es financen amb SDK publicitaris. Demanen permisos que la funció no justifica.',
  },
  {
    slug: 'esports-i-resultats',
    name: 'Esports i resultats',
    functionalNeed: 'Seguir competicions, gestionar fitxes federatives i reservar pistes.',
    privacyContext:
      'Sol ser un àmbit amb poca exigència de dades, però les federacions tracten menors i les aplicacions de resultats viuen de publicitat i de socis d’apostes.',
  },
  {
    slug: 'apostes',
    name: 'Apostes i joc en línia',
    functionalNeed: 'Fer apostes esportives i jugar a jocs d’atzar amb diners.',
    privacyContext:
      'La llei obliga a verificar la identitat i a detectar el joc problemàtic. El risc és que el mateix perfil que hauria de protegir serveixi per retenir qui més perd.',
  },
  {
    slug: 'telecomunicacions',
    name: 'Operadors de telecomunicacions',
    functionalNeed: 'Gestionar la línia mòbil, la fibra i la factura.',
    privacyContext:
      'L’operador coneix a qui truques i on és el mòbil en cada moment. Aquestes metadades tenen una protecció específica, a banda del RGPD.',
  },
  {
    slug: 'llar-connectada',
    name: 'Llar connectada',
    functionalNeed: 'Controlar càmeres, altaveus, electrodomèstics i alarmes des del mòbil.',
    privacyContext:
      'Els dispositius de casa veuen i escolten l’espai més privat. L’accés a aquest espai passa pel núvol del fabricant i depèn de la jurisdicció on es troba.',
  },
]
