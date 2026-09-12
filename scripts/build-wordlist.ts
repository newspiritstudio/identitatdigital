import { createReadStream, createWriteStream, existsSync, readFileSync, writeFileSync } from 'node:fs'
import { mkdir } from 'node:fs/promises'
import { createInterface } from 'node:readline'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import type { ReadableStream as NodeReadableStream } from 'node:stream/web'

/**
 * Generador de la llista de paraules catalanes per a frases de pas.
 *
 * La seguretat d'una frase de pas no ve de les paraules, que són públiques,
 * sinó de la mida de la llista: amb 2048 entrades i sis paraules triades amb un
 * generador criptogràfic hi ha 2048⁶ combinacions. Mateix principi que les
 * llistes «diceware» de l'Electronic Frontier Foundation, en català.
 *
 * La mida és 2048 = 2^11 perquè dona 11 bits justos per paraula: el càlcul de
 * força és paraules × 11 sense decimals, i un tirat d'11 bits es llegeix
 * directament dels bytes de `crypto.getRandomValues` amb rebuig dels valors
 * fora de rang.
 *
 * Font: el diccionari català de Softcatalà que fa servir LanguageTool, un
 * fitxer de 39 MB amb 1,3 milions de formes flexionades en tres columnes
 * (forma, lema, etiqueta EAGLES). Conté tot el català, terminologia mèdica i
 * química incloses, i la feina d'aquest script és sobretot treure-la.
 *
 * Com que el diccionari no diu quines paraules són d'ús corrent, s'hi afegeixen
 * dues fonts auxiliars, totes dues només per filtrar i mai per aportar paraules
 * noves:
 *
 *   1. El diccionari arrel de Softcatalà, que per a cada nom apunta de quines
 *      obres surt. Els noms que només consten al diccionari de salut o al
 *      Termcat cauen.
 *   2. La taula de freqüències d'ús del mateix projecte, 227.000 formes amb el
 *      nombre d'aparicions en un corpus de text català, per ordenar els
 *      candidats de més corrent a menys.
 *
 * Totes tres surten del mateix dipòsit i comparteixen llicència, citada a la
 * capçalera del fitxer generat i a WORDLIST_META.
 *
 * Ús:
 *   pnpm build-wordlist              genera src/lib/passwords/wordlist.ca.ts
 *   FORCE_DOWNLOAD=1 pnpm build-wordlist   ignora la memòria cau i torna a baixar
 *
 * És determinista. La data de generació només es refresca quan la llista canvia,
 * perquè una execució de comprovació no embruti el `git diff`.
 */

/* ------------------------------------------------------------------ */
/* Fonts                                                               */
/* ------------------------------------------------------------------ */

/** Diccionari de formes flexionades amb etiquetatge EAGLES (~39 MB). */
const DICT_URL =
  'https://raw.githubusercontent.com/Softcatala/catalan-dict-tools/master/resultats/lt/diccionari.txt'

/** Diccionari arrel: per a cada nom, de quines obres lexicogràfiques surt. */
const ROOT_NOUNS_URL =
  'https://raw.githubusercontent.com/Softcatala/catalan-dict-tools/master/diccionari-arrel/noms-fdic.txt'

/** Freqüència d'ús de cada forma en un corpus de text català (227.000 formes). */
const FREQ_URL =
  'https://raw.githubusercontent.com/Softcatala/catalan-dict-tools/master/frequencies/frequencies-dict-forms.txt'

const DICT_LICENCE =
  'Diccionari català de Softcatalà (projecte catalan-dict-tools), amb llicència dual GNU GPL v2 o posterior i GNU LGPL v2.1 o posterior. Del mateix dipòsit surten el diccionari arrel de noms i la taula de freqüències d’ús, emprats per descartar tecnicismes i per ordenar els candidats.'

const OUTPUT_PATH = new URL('../src/lib/passwords/wordlist.ca.ts', import.meta.url)

/* ------------------------------------------------------------------ */
/* Paràmetres del filtratge                                            */
/* ------------------------------------------------------------------ */

/** 2^11. No és negociable: vegeu la capçalera. */
const WORD_COUNT = 2048
const BITS_PER_WORD = 11

/** Llargada mínima. Per sota de quatre lletres les paraules es confonen. */
const MIN_LENGTH = 4

/**
 * Llargada màxima desitjada. Una paraula llarga es tecleja malament i allarga
 * la frase sense afegir-hi ni un bit més d'entropia, de manera que l'objectiu
 * és quedar-se entre quatre i nou lletres.
 *
 * Ara bé: entre la unicitat del prefix de quatre lletres i el mínim d'ús al
 * corpus, amb nou lletres no s'arriba a 2048. Quan passa això el generador
 * afluixa el límit d'una lletra en una lletra i ho diu per consola, tal com
 * mana l'especificació. Val més una paraula llarga però corrent («abastament»)
 * que una de curta que no diu ningú («bocoi»): la llarga es recorda i
 * s'escriu, i la curta s'ha d'anar a mirar.
 */
const MAX_LENGTH = 9

/** Longitud del prefix que ha de determinar la paraula sense ambigüitat. */
const PREFIX_LENGTH = 4

/**
 * Aparicions al corpus a partir de les quals una paraula es considera
 * prou habitual perquè no calgui protegir-la de les seves veïnes.
 */
const HABITUAL = 300

/**
 * Mínim d'aparicions al corpus per considerar que una paraula és vocabulari
 * viu. Per sota d'aquí hi ha els cultismes, els arcaismes i els tecnicismes
 * que el filtre de fonts no ha enxampat: correctes, però impossibles de
 * recordar. És també el filtre que se'n duu les sigles i les abreviatures.
 */
const MIN_USE = 160

/** Mínim d'aparicions del plural per acceptar un nom homògraf d'una forma verbal. */
const MIN_PLURAL_EVIDENCE = 100

/**
 * Proporció màxima entre l'ús del singular i el del plural en un homògraf
 * verbal. Si el singular surt vint vegades més que el plural, el que es
 * compta no és el nom sinó el verb.
 */
const MAX_SINGULAR_RATIO = 20

/**
 * Termes vetats.
 *
 * Una frase de pas es llegeix en veu alta, es dicta per telèfon i de vegades
 * la veu algú altre per damunt de l'espatlla. Que el generador et doni
 * «cadaver-tumor-forca» no és graciós, és una mala experiència d'ús. Per això
 * es treu tot el camp semàntic de la mort, la malaltia, la violència, el
 * sexe, l'escatologia, les drogues, els insults i l'angoixa, encara que
 * siguin paraules catalanes impecables i corrents. La llista és explícita i
 * conservadora: davant del dubte, fora, que paraules n'hi ha de sobres.
 */
const BANNED_WORDS: readonly string[] = [
  // Mort, dol i tot el que hi volta.
  'abatut', 'agonia', 'ataud', 'cadaver', 'cementiri', 'defuncio', 'difunt', 'dol',
  'enterrament', 'esquela', 'exequies', 'funeral', 'funerari', 'hecatombe', 'holocaust',
  'lapida', 'mausoleu', 'mort', 'morta', 'mortalitat', 'necrologica', 'nínxol', 'ossari',
  'sarcofag', 'sepulcre', 'sepultura', 'taut', 'tanatori', 'tomba', 'viuda', 'vidu',
  // Violència, armes, guerra i crim.
  'agressio', 'agressor', 'amenaca', 'apunyalament', 'arma', 'assalt', 'assassi',
  'assassinat', 'atemptat', 'atracador', 'atracament', 'bala', 'bandit', 'bomba',
  'botxi', 'bufetada', 'canoner', 'captiu', 'carnisseria', 'cartutx', 'crim', 'criminal',
  'daga', 'delicte', 'delinquent', 'desertor', 'destral', 'dictador', 'escamot',
  'esclau', 'esclavatge', 'estocada', 'explosio', 'explosiu', 'forca', 'fugitiu',
  'ganivet', 'garrot', 'genocidi', 'guerra', 'guerrer', 'guerrilla', 'guillotina',
  'gulag', 'kamikaze', 'ladre', 'llanca', 'manilles', 'massacre', 'metralla',
  'metralleta', 'mutilacio', 'napalm', 'patibul', 'pistola', 'presidiari', 'preso',
  'presoner', 'punyal', 'punyalada', 'ostatge', 'rapte', 'raptor', 'ransom', 'revolver',
  'sabotatge', 'sanguinari', 'sequestre', 'sicari', 'tirania', 'tortura', 'trabuc',
  'traidor', 'traficant', 'trinxera', 'venjanca', 'revenja', 'verdugo', 'veri', 'verí',
  'victima', 'violador', 'violencia', 'xantatge',
  // Malaltia, dolor i cos malmès.
  'abces', 'alzheimer', 'amputacio', 'anemia', 'aneurisma', 'angina', 'anorexia',
  'apoplexia', 'artritis', 'asma', 'atac', 'autopsia', 'bacteri', 'buboo', 'cancer',
  'carcinoma', 'cirrosi', 'colera', 'coma', 'contagi', 'convulsio', 'crani', 'demencia',
  'dolor', 'epidemia', 'epilepsia', 'febre', 'ferida', 'ferit', 'gangrena', 'gonorrea',
  'grip', 'hematoma', 'hemorragia', 'hepatitis', 'infeccio', 'inflamacio', 'lepra',
  'lesio', 'malaltia', 'malalt', 'metastasi', 'migranya', 'nafra', 'nausea', 'necrosi',
  'osteoporosi', 'pandemia', 'paralisi', 'pesta', 'plaga', 'pneumonia', 'podridura',
  'psicosi', 'pustula', 'quimioterapia', 'rabia', 'sagnia', 'sang', 'sida', 'sifilis',
  'simptoma', 'tifus', 'trauma', 'tuberculosi', 'tumor', 'ulcera', 'verola', 'virus',
  // Sexe, cos íntim i escatologia.
  'anus', 'burdell', 'cagarro', 'cagada', 'calconets', 'coit', 'condo', 'condom',
  'dejeccio', 'ereccio', 'escatologic', 'esperma', 'excrement', 'fem', 'femta',
  'incest', 'lupanar', 'mamella', 'merda', 'nuesa', 'nudisme', 'orgasme', 'orgia',
  'orinal', 'penis', 'pipi', 'pixum', 'porno', 'pornografia', 'prostibul', 'prostituta',
  'puta', 'putain', 'semen', 'sodomia', 'testicle', 'topless', 'vagina', 'verga',
  'violacio', 'virilitat', 'vomit', 'xeringa',
  // Drogues i addiccions.
  'addicte', 'addiccio', 'alcoholic', 'amfetamina', 'cocaina', 'droga', 'drogaddicte',
  'haixix', 'heroina', 'ludopatia', 'marihuana', 'morfina', 'narcotic', 'nicotina',
  'opi', 'sobredosi', 'tabac', 'xeringuilla',
  // Insults i qualificatius que fan mal.
  'babau', 'beneit', 'bordeu', 'burro', 'cabro', 'collonada', 'cretinisme', 'cretí',
  'cursi', 'depravat', 'estupid', 'ganso', 'gandul', 'garrepa', 'groller', 'idiota',
  'imbecil', 'inutil', 'lleig', 'malparit', 'mediocre', 'neci', 'obes', 'panxut',
  'poca-solta', 'porqueria', 'pudent', 'pudenta', 'ruc', 'sapastre', 'subnormal',
  'tanoca', 'toixo', 'tonto', 'tros',
  // Discriminació i odi.
  'antisemita', 'apartheid', 'esclavisme', 'feixisme', 'feixista', 'homofob',
  'masclisme', 'masclista', 'nazi', 'nazisme', 'neofeixista', 'racisme', 'racista',
  'sexisme', 'sexista', 'xenofob', 'xenofobia',
  // Por, angoixa i ocultisme inquietant.
  'agonic', 'amargor', 'angoixa', 'ansietat', 'blasfemia', 'demoni', 'depressio',
  'desesper', 'diable', 'dimoni', 'esglai', 'espant', 'exorcisme', 'fantasma', 'infern',
  'inquisicio', 'malson', 'panic', 'paranoia', 'patiment', 'perdicio', 'purgatori',
  'satanic', 'satanisme', 'suicidi', 'terror', 'terrorista', 'tragedia', 'traumatic',
  'vampir', 'zombi', 'zombie',
  // Catàstrofes.
  'accident', 'allau', 'catastrofe', 'desastre', 'diluvi', 'incendi', 'inundacio',
  'naufragi', 'ruina', 'sequera', 'terratremol', 'tsunami',
  // Formes que es llegeixen com a verb tot i constar com a nom, o com a mot
  // gramatical: en una frase de pas despisten més que no ajuden.
  'deixa', 'escolta', 'espera', 'estic', 'mira', 'ocupa', 'parla', 'passa', 'pensa',
  'queda', 'troba', 'contra', 'davant', 'darrere', 'dins', 'sota', 'menys', 'massa',
  'quina', 'tant', 'junt', 'mateixa', 'nova', 'noma', 'meso', 'esse', 'aira',
  'amarra', 'atura', 'desperta', 'gira', 'mana', 'menja', 'pega', 'pela', 'pica',
  'pinta', 'pren', 'sobretot', 'surt', 'tira', 'toca', 'torna', 'treu', 'tria',
  'visca', 'capdavall', 'dalt', 'dintre', 'arreu', 'extra', 'basa', 'lleva', 'sola',
  // Segona tanda de mots desagradables, trobats en revisar la llista generada.
  'aborigen', 'abusador', 'acusat', 'adversari', 'aldarull', 'armeria', 'atrocitat',
  'bacanal', 'baioneta', 'barjaula', 'bazuca', 'bordell', 'borratxo', 'bragueta',
  'brivall', 'brutal', 'budell', 'burilla', 'burra', 'cacera', 'calfred', 'calvari',
  'castedat', 'catapulta', 'cega', 'ceguesa', 'celibat', 'cementeri', 'cicatriu',
  'cicuta', 'cigarret', 'cinisme', 'colitis', 'condemnat',
  'cripta', 'croada', 'crucifix', 'crueltat', 'culata', 'culpable',
  'degenerat', 'deixalla', 'delator', 'deliri', 'dement', 'demolidor',
  'deportat', 'depressiu', 'destrossa', 'detingut',
  'detonador', 'diabetis', 'diazepam', 'dictadura', 'dimoniet',
  'divorci', 'duel', 'edema',
  'embriac', 'enemic', 'engonal', 'esbirro',
  'esguerrat', 'exdona', 'exili', 'exmarit', 'exorcista', 'exparella', 'extintor',
  'fallit', 'fetus', 'flagell', 'foll', 'fossat', 'fractura',
  'frustrat', 'fuetada', 'fugitiva', 'fumeta', 'furor', 'fusell', 'garjola', 'gemec',
  'geperut', 'gihadista', 'gitano', 'gladiador', 'grotesc', 'gueto',
  'guillat', 'harem', 'herpes', 'homicidi', 'horror', 'hospici', 'hostatge',
  'inadaptat', 'ineptitud',
  'inflor', 'insomni', 'intocable', 'invasor',
  'invertit', 'jueu', 'jueva', 'jutgessa', 'jutjat', 'latrina',
  'libido', 'linxament', 'lividesa', 'lladre', 'llepaculs', 'mala',
  'malfactor', 'malifeta', 'mamada', 'manicomi', 'martiri', 'masmorra',
  'matallops', 'matxet', 'melanoma', 'merder', 'meuca', 'miserable',
  'misogin', 'moribund', 'mordassa', 'morralla', 'mortal', 'mulat', 'murga',
  'nepotisme', 'ofegament', 'ofensiva', 'oncologia', 'opiaci',
  'opressor', 'padrastre', 'pamflet', 'pecat', 'pelvis', 'pentotal', 'perill',
  'pillatge', 'pinxo', 'pixaner', 'plebeu', 'ploraner', 'podrit',
  'prejudici', 'prostitut', 'pubertat', 'pudor', 'pulmonia', 'punxada', 'putada',
  'puteta', 'puto', 'rascada', 'recluta',
  'rictus', 'rifle', 'riota', 'sacrifici', 'sadisme', 'salvatge',
  'sanatori', 'saqueig', 'sarcasme', 'segrest', 'semental', 'setge',
  'sodomita', 'sofriment', 'sotrac', 'suborn', 'suplicant',
  'tenebra', 'tiroteig', 'torpede', 'toxina',
  'truja', 'tuguri', 'udol', 'ullal', 'urani', 'usurpador', 'vaginal',
  'venjador', 'vessament', 'vici', 'vulva', 'xafarder', 'xinxa',
  // Religió, política i identitat: no són paraules dolentes, però en una frase
  // que algú ha de dictar en veu alta val més no fer-hi entrar cap bàndol.
  'baptista', 'bolxevic', 'budista', 'evangeli', 'hinduisme', 'islam', 'laborista',
  'leninisme', 'messies', 'metodista', 'psalm', 'rosari', 'sacerdot', 'sagrat',
  'clergue', 'druida',
  // Tercera tanda, després de revisar la llista amb el corpus de freqüències
  // de Softcatalà: cos malalt, baralles, mal humor i etiquetes de creences.
  'assot', 'batussa', 'bilis', 'butllofa', 'derrota', 'enveja', 'esbufec', 'esgarip', 'fatiga',
  'feredat', 'ferocitat', 'fetor', 'hiena', 'homicida', 'infractor', 'iniquitat', 'malvestat',
  'maldecap', 'madrastra', 'mastegot', 'metzina', 'mofeta', 'monstre', 'mutant', 'pecador',
  'penalitat', 'perjudici', 'peresa', 'plor', 'purga', 'quist', 'rebuig', 'ressaca', 'sanglot',
  'sutge', 'trastorn', 'tumult', 'xiscle', 'xusma', 'glaucoma', 'gland', 'miocardi', 'mucosa',
  'natja', 'ovari', 'pubis', 'islamista', 'judaisme', 'carlisme', 'catarisme', 'carmelita',
  'avemaria', 'nigromant', 'licantrop', 'idolatria', 'sotana', 'niciesa',
  // Darrera passada de revisió: malalties, ideologies i etiquetes identitàries
  // que havien quedat, i un parell de vulgaritats.
  'abatiment', 'abertzale', 'acritud', 'ateisme', 'carlista', 'cataracta', 'fatalista',
  'feridura', 'ferotgia', 'hutu', 'islamisme', 'justicier', 'macarra', 'malaptesa', 'paludisme',
  'pogrom', 'prepuci', 'sefardita', 'sionista', 'sunnita', 'titola', 'tutsi', 'usura',
  'populista', 'tabarra', 'trifulga', 'oprobi',
  'jihad', 'neonazi', 'neoliberal', 'xarnego', 'striptease', 'ultratomba', 'supremacia',
  'vandalisme', 'saquejador', 'reprimenda', 'rereguarda', 'reumatisme', 'meningitis',
  'malignitat', 'morbiditat', 'bronquitis', 'disenteria', 'colesterol', 'epiteli', 'cataclisme',
  'deformitat', 'desventura', 'devastador', 'brutalitat', 'barbaritat', 'ganivetada',
  'guerriller', 'almirallat', 'exdictador', 'franquista', 'calvinista', 'feudalisme',
  'fatalisme', 'moro', 'homosexual', 'sexualitat', 'virginitat', 'insatisfet', 'inutilitat',
  'invalidesa', 'obscuritat', 'ociositat', 'mesquinesa', 'melancolia', 'tossuderia',
  'ridiculesa', 'sopor', 'subterfugi', 'usurer', 'caganer', 'esverament', 'cruiximent',
  'ensopiment', 'oligarquia', 'atordiment', 'avorriment', 'afebliment', 'adversitat',
  'astorament',
  'avortament', 'dermatitis', 'lupus', 'meningococ', 'obscenitat', 'uretritis', 'xancre',
  'sepeli', 'tiroide', 'tomografia', 'caciquisme', 'ultradreta', 'tsarista', 'papista', 'talmud',
  'haiximita', 'viacrucis', 'miserere', 'morositat', 'migradesa', 'plorera', 'empipament',
  'fratricida', 'marranada', 'morbositat', 'mucositat', 'narcisista', 'benignitat',
  'absolutista', 'catalanista', 'federalisme', 'noucentista', 'separatista', 'unionista',
  'reaccionari', 'proletariat', 'ateu', 'ofensa', 'perversitat', 'pertorbador', 'picabaralla',
  'ploramiques', 'porra', 'punxa', 'renec', 'segrestador', 'sinistre', 'embriaguesa',
  'defalliment', 'psiquiatria', 'serf',
  'catalanisme', 'federalista', 'noucentisme', 'proletari', 'traumatisme', 'ensorrament',
]

/**
 * Paraules massa rares, tècniques o forasteres per recordar-les.
 *
 * Són totes correctes i el diccionari les recull amb raó, però una llista de
 * frases de pas ha de ser de vocabulari que la gent tingui al cap. Aquí hi
 * cauen unitats de mesura, elements químics, cultismes, arcaismes, gentilicis
 * de pobles antics, tecnicismes que el filtre de fonts no ha enxampat i
 * manlleus que el filtre de grafia no detecta perquè s'escriuen amb lletres
 * catalanes («bourbon», «office», «round»). La llista s'ha fet llegint la
 * llista generada de dalt a baix i apuntant tot el que feia aixecar la cella.
 */
const OBSCURE_WORDS: readonly string[] = [
  'adaram', 'addenda', 'afalac', 'agutzil', 'alferes', 'alfil', 'alfombra',
  'amaurosi', 'anafase', 'ander', 'anil', 'antara', 'aquelarre', 'aranzel', 'axioma',
  'azimut', 'babord', 'balandra', 'bill', 'bocoi', 'bourbon', 'boutique', 'bran',
  'brocat', 'buirac', 'bulb', 'cadmi', 'camelot', 'caniche', 'cofurna', 'cohort',
  'coriandre', 'cubicle', 'cumquat', 'curvatura', 'dallonses', 'dandi', 'dedins',
  'defora', 'delme', 'denari', 'dermis', 'dervix', 'digest', 'dioxina', 'disulfur',
  'dopamina', 'dorsal', 'ducat', 'efesi', 'einstein', 'elder', 'elenc', 'erari',
  'eslau', 'fardatxo', 'fiduciari', 'fondue', 'foxtrot', 'franci', 'gadolini',
  'gambit', 'gamma', 'gangli', 'gasto', 'gaudi', 'gesmil', 'gibrell', 'glicol',
  'glide', 'golden', 'gometa', 'gorg', 'griso', 'guacamole', 'guiatge', 'hades',
  'hall', 'hamaca', 'harpia', 'hipercub', 'iarda', 'iber', 'idus', 'ilerget', 'imam',
  'ingesta', 'ianqui', 'jova', 'jumbo', 'lauril', 'lemma', 'liana', 'licitud', 'lies',
  'loft', 'loqui', 'lord', 'lotus', 'lutz', 'mambo', 'menisc', 'milord', 'mimosa',
  'moira', 'momo', 'morse', 'moscovita', 'mousse', 'naftalina', 'nespra', 'nimbus',
  'nirvana', 'nitidesa', 'octanatge', 'office', 'ollada', 'ovni', 'oxidasa',
  'pacotilla', 'patxoca', 'picossada', 'pierrot', 'plus', 'plutoni', 'poloni', 'ponx',
  'porus', 'quiche', 'questa', 'quid', 'quirat', 'rampell', 'replicant', 'resquill',
  'rogle', 'round', 'ruble', 'rulot', 'sansa', 'selenita', 'septe', 'serbi',
  'sesterci', 'sigma', 'silici', 'simi', 'sioux', 'somer', 'spin', 'subespai',
  'subrutina', 'suite', 'sumeri', 'suricata', 'tatami', 'tiri', 'titani', 'totxana',
  'triclini', 'trigemin', 'tsar', 'vestal', 'vividor', 'xaiet', 'cerebel', 'cimbell',
  'atzucac', 'batibull', 'beixamel', 'bemoll', 'brunzidor', 'capdavall', 'celeritat',
  'coquet', 'coseta', 'deflector', 'disjuntor', 'fixament', 'fleuma', 'fotesa',
  'fotimer', 'gerd', 'gresol', 'horeta', 'juguesca', 'llumeta', 'madrigal', 'menester',
  'mesc', 'milhomes', 'miqueta', 'numeret', 'obsidiana', 'peuet', 'senderi',
  'sotscap', 'subtilesa', 'tabaquer', 'tafaner', 'trapella', 'xiuxiueig',
  // Gentilicis i pobles històrics, arcaismes, llatinismes, sigles llegides com
  // a paraula i tecnicismes de geologia, química i dret que s'han colat.
  'adquirent', 'aforisme', 'alaga', 'algutzir', 'ammonita', 'amorreu', 'arameu', 'asteca',
  'aturador', 'austral', 'baba', 'babel', 'balear', 'barnilla', 'basc', 'bastament', 'belga',
  'berber', 'bizantina', 'blaugrana', 'bordiol', 'brasiler', 'buriat', 'cacic', 'cadastre',
  'capcinada', 'carolingi', 'celesta', 'cimbori', 'cingla', 'clepsa', 'corinti', 'cretaci',
  'crioll', 'croat', 'cubella', 'desfici', 'desvari', 'devessall', 'detriment', 'diantre',
  'ditet', 'docilitat', 'dovella', 'duro', 'efluvi', 'eivissenc', 'embalum', 'enraonia',
  'errant', 'eslovac', 'estaria', 'etarra', 'etrusc', 'fenici', 'feudatari', 'framenor',
  'furrier', 'galiot', 'galzeran', 'gatosa', 'gironina', 'gremial', 'grec', 'guillaume', 'gussi',
  'hemo', 'hitita', 'hugonot', 'hule', 'illenc', 'indonesi', 'influx', 'isolament', 'israelita',
  'iugoslau', 'largo', 'lassitud', 'laude', 'licitador', 'lied', 'lignit', 'liquen', 'literat',
  'londinenc', 'magma', 'malai', 'mampara', 'maqui', 'matuta', 'matx', 'mesell', 'mesquite',
  'miquelet', 'miralla', 'mitger', 'morisc', 'motet', 'mullena', 'mutisme', 'nentsi', 'noruec',
  'novici', 'numerari', 'obvietat', 'opacitat', 'open', 'opus', 'oremus', 'osonenc', 'output',
  'palatinat', 'paleozoic', 'parisenc', 'pesantor', 'pime', 'plebs', 'plegament', 'polaina',
  'pomerani', 'porrer', 'praxi', 'prevere', 'prohom', 'pulcritud', 'quefer', 'quixot', 'ranera',
  'renill', 'replec', 'resulta', 'reusenc', 'ribella', 'rocam', 'ronsal', 'rudi', 'rupia',
  'russa', 'sacerdoci', 'sagacitat', 'salm', 'sapador', 'saberut', 'sarment', 'senescal',
  'setial', 'sisme', 'solta', 'sometent', 'sortint', 'sotsprior', 'subclasse', 'subgrup',
  'sucrer', 'suec', 'taifa', 'taumaturg', 'taxonomia', 'tebior', 'tele', 'tibantor', 'tofa',
  'torratxa', 'trepig', 'tricorni', 'trumfo', 'txec', 'uixer', 'ultramar', 'urinari', 'usatge',
  'vaguetat', 'vescomtat', 'vicaria', 'virginal', 'viscosa', 'vitualla', 'vivent', 'volva',
  'xafogor', 'xerrameca', 'xeviot', 'zain', 'sigla', 'saldo', 'soviet', 'biomassa', 'biosfera',
  'fosfat', 'glucosa', 'trapezi', 'simbiosi', 'sintaxi',
  // Darrera passada: cultismes, dialectalismes, noms d'ofici desapareguts,
  // termes d'història i de geologia, i castellanismes col·loquials.
  'acetona', 'adagi', 'amenitat', 'amorf', 'anacoreta', 'argamassa', 'argonauta', 'arquetip',
  'aviram', 'bafarada', 'baladre', 'bantu', 'basarda', 'bastaix', 'bauxita', 'beatitud',
  'benisser', 'beutat', 'blavenca', 'bonior', 'boscatge', 'bosquerol', 'botonet', 'bullici',
  'bursada', 'cabotatge', 'camussa', 'catre', 'cetaci', 'corifeu', 'cosinet', 'coqueto',
  'cretenc', 'daixonses', 'definidor', 'desferra', 'diatriba', 'divo', 'domus', 'dropo', 'efod',
  'emfiteusi', 'empirisme', 'epidermis', 'epigrama', 'epitafi', 'ermot', 'esguard', 'eslip',
  'essa', 'esvoranc', 'etnologia', 'exabrupte', 'exegesi', 'feaci', 'fembra', 'fiacre',
  'figaflor', 'fixesa', 'flegma', 'fogoner', 'forjador', 'fuseller', 'gaiato', 'gasiu', 'gelera',
  'giragonsa', 'graf', 'guilda', 'hilaritat', 'hirsut', 'humus', 'impietat', 'incunable',
  'iugoslava', 'janer', 'labor', 'labrador', 'laringe', 'letargia', 'levita', 'lirisme',
  'llagot', 'llepafils', 'llopada', 'lloure', 'llumet', 'lluneta', 'lustre', 'madona', 'malm',
  'mameluc', 'manescal', 'marfil', 'marmita', 'masteler', 'matxo', 'medecina', 'melangia',
  'mendicant', 'menestral', 'merovingi', 'mesozoic', 'micena', 'mimetisme', 'minaire',
  'mirament', 'moabita', 'mogol', 'moresc', 'moscatell', 'mullader', 'murri', 'musiqueta',
  'necesser', 'nodrissa', 'noviciat', 'opuscle', 'ormeig', 'ossada', 'paborde', 'paeria',
  'palestra', 'paroxisme', 'parlador', 'pectoral', 'pern', 'picador', 'pillet', 'pipeta',
  'piter', 'pitrera', 'plagi', 'plaqueta', 'plexe', 'pomera', 'poncella', 'potinga', 'praderia',
  'prosista', 'psique', 'quest', 'quibuts', 'quisso', 'rampoina', 'ranuncle', 'relectura',
  'remeier', 'remitent', 'ressort', 'revulsiu', 'rodonesa', 'romanista', 'roquissar', 'rosassa',
  'rudiment', 'ruixim', 'sainet', 'salmista', 'salobre', 'sendera', 'seti', 'siemens', 'silicat',
  'sofista', 'solfa', 'somali', 'sopera', 'sortilegi', 'sotabosc', 'suabi', 'surera', 'taurus',
  'tebeo', 'tereseta', 'tisana', 'topazi', 'torrador', 'traguet', 'tubercle', 'tubular',
  'tundra', 'uadi', 'vaguista', 'vaqueria', 'vaselina', 'vedet', 'virolla', 'vodevil', 'xaloc',
  'xalupa', 'xaveta', 'xavo', 'xeic', 'xerpa', 'xipell', 'xurro',
  'absis', 'abstemi', 'adrogueria', 'alcista', 'bruguerar', 'cabota', 'clofolla', 'esglesiola',
  'gorgera', 'lapidari', 'llagoster', 'llicorella', 'llumener', 'loquacitat', 'martingala',
  'minaret', 'piuladissa', 'plaguicida', 'picapedrer', 'pitxer', 'polseguera', 'prefectura',
  'procurador', 'publicista', 'psiquiatre', 'rotunditat', 'salconduit', 'senderol', 'somera',
  'sotavent', 'sotstinent', 'subapartat', 'subconjunt', 'suboficial', 'tabernacle', 'tomaquera',
  'torrentada', 'jovialitat', 'justesa', 'hospitaler', 'hemeroteca', 'homilia', 'fogonada',
  'graonada', 'gasiveria', 'reliquiari', 'marmessor', 'marquesina', 'galifardeu', 'manefla',
  'murrieria', 'jebuseu', 'vietnamita', 'novia', 'bacil', 'aflorament', 'alentiment',
  'abaltiment', 'absidiola', 'aixanti', 'aladern', 'anotador', 'ascona', 'baladrer', 'balquena',
  'beguina', 'beoci', 'bibelot', 'blauet', 'bluf', 'bolic', 'burell', 'catacumba', 'cenacle',
  'citoplasma', 'eixelebrat', 'embranzida', 'eslora', 'exegeta', 'exhibidor', 'faramalla',
  'fingiment', 'fogonet', 'fumerol', 'fugacitat', 'galindaina', 'garnatxa', 'glicina', 'gobelet',
  'iuan', 'justet', 'llagut', 'mallot', 'mangosta', 'marmota', 'melassa', 'menhir', 'merenga',
  'nimietat', 'pabordia', 'palissada', 'panada', 'pentagrama', 'pitet', 'plaf', 'pomell',
  'prebenda', 'rabassaire', 'ratafia', 'reincident', 'rojor', 'romanalla', 'romeria', 'salnitre',
  'sofisma', 'sotabarba', 'subcomarca', 'talbot', 'tabal', 'tabola', 'torbament', 'tururut',
  'uralita', 'vallenc', 'valva', 'vastitud', 'voivodat', 'xarnera',
  'abscissa', 'absentisme', 'alabarda', 'aldehid', 'alisi', 'alletament', 'alveolar',
  'amalequita', 'amerindi', 'ardidesa', 'arrova', 'autarquia', 'bacina', 'balandre', 'besoncle',
  'bivac', 'braman', 'brocal', 'bullanga', 'cameller', 'cataplasma', 'ceilan', 'cohereu',
  'deganat', 'entalpia', 'fogassa', 'fogot', 'futon', 'galimaties', 'ganduleria', 'garneu',
  'glossari', 'graller', 'hermetisme', 'hovercraft', 'ictiosaure', 'immaduresa', 'jiddisch',
  'leninista', 'lumen', 'macro', 'madeixa', 'mallerenga', 'marasme', 'nematode', 'neologisme',
  'octogenari', 'orografia', 'panacea', 'pentinador', 'piccolo', 'puput', 'purins', 'rabosot',
  'rampant', 'rapsode', 'ribatge', 'samovar', 'segarrenc', 'sudista', 'tabaquisme', 'tetralogia',
  'torbera', 'trifori', 'tuareg', 'tubet', 'userda', 'zenc', 'alineament',
  'anta', 'arna', 'aram', 'bast', 'beix', 'cadi', 'celta', 'cerro', 'colp', 'cosmopolita',
  'crac', 'delma', 'dori', 'dringadissa', 'esdevenidor', 'fogatjament', 'foia', 'rami', 'roll',
  'ronc', 'saquet', 'teca', 'tosca', 'troca', 'trau', 'trapa', 'verra', 'veta', 'vescomtessa',
  'sindicatura', 'pana', 'petja', 'polo', 'ring', 'puro',
  'pragmatisme', 'sornegueria', 'tarragonina', 'exsecretari', 'pluviositat',
]

/**
 * Fonts lexicogràfiques que, si són les úniques que recullen un nom, el
 * marquen com a terme especialitzat: el diccionari de salut i el Termcat.
 * Un nom que només surt d'aquí («metopodínia», «paraamiloïdosi») és correcte
 * però no el recorda ningú.
 */
const TECHNICAL_SOURCES = new Set(['dsalut', 'termcat'])

/**
 * Marques del diccionari arrel que assenyalen material que no és vocabulari
 * català corrent: sigles, manlleus de l'anglès no adaptats, entrades que
 * només documenta la Viquipèdia i noms que només recull el llibre d'estil
 * dels mitjans, que és ple de topònims i de marques.
 */
const FOREIGN_SOURCES = new Set([
  'sigla',
  'sigles',
  'anglès',
  'angles',
  'english',
  'wiki',
  'viquipedia',
  'esadir',
])

/**
 * Grafies que en català només surten en manlleus sense adaptar.
 *
 * La k, la w i la y no pertanyen a l'alfabet català, i les seqüències ck, sh,
 * th, ph, oo, ee, zz o dg són angleses o alemanyes. Serveix per treure
 * «hardware», «hobby», «feeling», «husky» o «bridge», que el diccionari
 * recull perquè la gent els diu, però que no es poden dictar per telèfon a
 * ningú que no sàpiga anglès.
 */
const FOREIGN_SPELLING = /[kwy]|ck|sh|th|ph|oo|ee|zz|ii|uu|aa|dg/

/* ------------------------------------------------------------------ */
/* Descàrrega amb memòria cau                                          */
/* ------------------------------------------------------------------ */

const CACHE_DIR = join(tmpdir(), 'identitatdigital-wordlist')

/**
 * Baixa un fitxer en flux i el desa a la memòria cau del sistema.
 *
 * El diccionari fa 39 MB; es passa del socket al disc sense acumular-lo a la
 * memòria, i a la segona execució no es torna a baixar. Amb `FORCE_DOWNLOAD=1`
 * o `--force` es refà la descàrrega, que és el que cal quan Softcatalà publica
 * una revisió del diccionari.
 */
async function fetchCached(url: string, name: string, force: boolean): Promise<string> {
  const path = join(CACHE_DIR, name)
  if (existsSync(path) && !force) {
    console.log(`  ·  ${name.padEnd(16)} de la memòria cau`)
    return path
  }

  await mkdir(CACHE_DIR, { recursive: true })
  const response = await fetch(url)
  if (!response.ok || !response.body) {
    throw new Error(`La descàrrega de ${name} ha respost ${response.status}`)
  }

  /*
   * `response.body` és el `ReadableStream` del DOM i `Readable.fromWeb` en vol
   * el de `node:stream/web`. En temps d'execució és el mateix objecte —Node
   * implementa l'estàndard web—, però TypeScript declara els dos tipus per
   * separat i no els reconcilia. La conversió és per al compilador, no per al
   * programa.
   */
  const body = response.body as unknown as NodeReadableStream<Uint8Array>
  await pipeline(Readable.fromWeb(body), createWriteStream(path))
  console.log(`  ↓  ${name.padEnd(16)} baixat`)
  return path
}

/** Recorre un fitxer línia a línia sense carregar-lo sencer. */
async function* readLines(path: string): AsyncGenerator<string> {
  const stream = createReadStream(path, { encoding: 'utf8' })
  const reader = createInterface({ input: stream, crlfDelay: Infinity })
  for await (const line of reader) yield line
}

/* ------------------------------------------------------------------ */
/* Lectura de les fonts                                                */
/* ------------------------------------------------------------------ */

/** Freqüència de cada forma al corpus. El format és `forma, recompte`. */
async function readFrequencies(path: string): Promise<Map<string, number>> {
  const frequencies = new Map<string, number>()
  for await (const line of readLines(path)) {
    const comma = line.lastIndexOf(',')
    if (comma < 1) continue
    const count = Number(line.slice(comma + 1).trim())
    if (Number.isFinite(count)) frequencies.set(line.slice(0, comma).trim(), count)
  }
  return frequencies
}

/**
 * Obres lexicogràfiques de què surt cada nom, segons el diccionari arrel.
 *
 * El format és `entrada=categories: M;fonts: LT, GDLC;` i les línies que
 * comencen per coixinet són entrades desactivades, que no arriben al
 * diccionari final. L'entrada pot portar flexió o ser multiparaula
 * («baladí baladina», «aspartat d'insulina»); només interessa el primer mot.
 */
async function readSourcesByNoun(path: string): Promise<Map<string, Set<string>>> {
  const sources = new Map<string, Set<string>>()
  for await (const line of readLines(path)) {
    if (!line || line.startsWith('#')) continue
    const equals = line.indexOf('=')
    if (equals < 1) continue
    const entry = line.slice(0, equals).split(' ')[0]?.toLowerCase()
    if (!entry) continue
    const match = /fonts:\s*([^;]*)/.exec(line)
    const set = sources.get(entry) ?? new Set<string>()
    if (match?.[1]) for (const source of match[1].split(',')) set.add(source.trim().toLowerCase())
    sources.set(entry, set)
  }
  return sources
}

type Dictionary = {
  /** Formes que el diccionari reconeix com a nom comú singular i lema alhora. */
  readonly candidates: Set<string>
  /** Qualsevol forma que també sigui una forma verbal. */
  readonly verbForms: Set<string>
  /** Lemes que són infinitius: «parlar», «saber», «dinar». */
  readonly verbLemmas: Set<string>
  /** Formes que el diccionari també reconeix com a nom propi. */
  readonly properNouns: Set<string>
  /** Participis: «perdut», «caiguda», «trobada», «clavat». */
  readonly participles: Set<string>
  /** Aparicions al corpus de les formes singulars de cada nom. */
  readonly singularUse: Map<string, number>
  /** Aparicions al corpus de les formes plurals de cada nom. */
  readonly pluralUse: Map<string, number>
  readonly totalLines: number
  readonly commonNouns: number
}

/**
 * Buida el diccionari de 1,3 milions de línies en les estructures que fa
 * servir el filtratge.
 *
 * Sobre les etiquetes EAGLES, comprovades damunt del fitxer i no damunt la
 * documentació: la primera lletra és la categoria (N nom, V verb, A adjectiu),
 * la segona distingeix comú (C) de propi (P), la tercera és el gènere
 * (M masculí, F femení, C comú) i la quarta el nombre (S singular, P plural,
 * N invariable). Els noms invariables són dos grups ben diferents: sigles en
 * majúscula (ADN, ADSL), que cauen pel filtre de minúscules, i noms com
 * «temps», «llapis» o «dilluns», que sí que ens interessen perquè en singular
 * s'escriuen igual. Per això s'accepten tant S com N.
 *
 * El lema pot dur un sufix d'homografia («pols_1», «pols_2») que s'ha de
 * treure abans de comparar-lo amb la forma.
 */
async function readDictionary(path: string, frequencies: Map<string, number>): Promise<Dictionary> {
  const candidates = new Set<string>()
  const verbForms = new Set<string>()
  const verbLemmas = new Set<string>()
  const properNouns = new Set<string>()
  const participles = new Set<string>()
  const singularUse = new Map<string, number>()
  const pluralUse = new Map<string, number>()
  let totalLines = 0
  let commonNouns = 0

  for await (const line of readLines(path)) {
    if (!line) continue
    totalLines += 1

    const parts = line.split(' ')
    if (parts.length !== 3) continue
    const [form, rawLemma, tag] = parts as [string, string, string]

    if (tag.startsWith('V')) {
      verbForms.add(form.toLowerCase())
      verbLemmas.add(rawLemma.replace(/_\d+$/, '').toLowerCase())
      /* La tercera lletra P marca el participi: VMP00SM0 és «clavat». */
      if (tag[2] === 'P') participles.add(form.toLowerCase())
      continue
    }
    if (tag.startsWith('NP')) {
      properNouns.add(form.toLowerCase())
      continue
    }
    if (!tag.startsWith('NC')) continue
    commonNouns += 1

    const lemma = rawLemma.replace(/_\d+$/, '')
    const number = tag[3]
    const use = frequencies.get(form.toLowerCase()) ?? 0
    if (use > 0) {
      const target = number === 'P' ? pluralUse : singularUse
      target.set(lemma, (target.get(lemma) ?? 0) + use)
    }

    /* Només singulars (o invariables) i només quan la forma és el lema: així
     * la llista recull «taula» i no «taules», i mai una flexió qualsevol. */
    if (number !== 'S' && number !== 'N') continue
    if (form !== lemma) continue
    candidates.add(form)
  }

  return {
    candidates,
    verbForms,
    verbLemmas,
    properNouns,
    participles,
    singularUse,
    pluralUse,
    totalLines,
    commonNouns,
  }
}

/* ------------------------------------------------------------------ */
/* Filtratge                                                           */
/* ------------------------------------------------------------------ */

/**
 * Només lletres de la a a la z, en minúscula.
 *
 * És el filtre més dolorós de tots, perquè se'n va l'accent, la dièresi, la ce
 * trencada, el guionet i el punt volat: fora «cafè», «pingüí», «caça»,
 * «para-sol» i «col·lecció». Empobreix el català escrit, i es reconeix sense
 * excuses. Però una frase de pas s'ha de poder teclejar al mòbil amb presses,
 * en una consola de recuperació amb el teclat en anglès i en un televisor amb
 * el comandament a distància, i cada dièresi és una ocasió d'equivocar-se o de
 * no poder entrar. Aquí la prioritat és que la frase es pugui escriure a tot
 * arreu, i per això la grafia es limita a l'ASCII.
 */
const ASCII_ONLY = /^[a-z]+$/

/** Distància d'edició d'1: substitució, inserció o supressió d'una lletra. */
type NeighbourIndex = {
  readonly exact: Set<string>
  readonly wildcards: Set<string>
  readonly deletions: Set<string>
}

function createNeighbourIndex(): NeighbourIndex {
  return { exact: new Set(), wildcards: new Set(), deletions: new Set() }
}

function wildcardsOf(word: string): string[] {
  const out: string[] = []
  for (let i = 0; i < word.length; i += 1) out.push(`${word.slice(0, i)}*${word.slice(i + 1)}`)
  return out
}

function deletionsOf(word: string): string[] {
  const out: string[] = []
  for (let i = 0; i < word.length; i += 1) out.push(word.slice(0, i) + word.slice(i + 1))
  return out
}

function hasNeighbour(index: NeighbourIndex, word: string): boolean {
  for (const pattern of wildcardsOf(word)) if (index.wildcards.has(pattern)) return true
  if (index.deletions.has(word)) return true
  for (const shorter of deletionsOf(word)) {
    if (index.exact.has(shorter) || index.deletions.has(shorter)) return true
  }
  return false
}

function addNeighbour(index: NeighbourIndex, word: string): void {
  index.exact.add(word)
  for (const pattern of wildcardsOf(word)) index.wildcards.add(pattern)
  for (const shorter of deletionsOf(word)) index.deletions.add(shorter)
}

type Selection = {
  readonly words: string[]
  readonly maxLength: number
  readonly stats: Record<string, number>
}

/**
 * Tria les 2048 paraules definitives.
 *
 * L'ordre és el nervi de tot plegat i ha de ser reproduïble: els candidats
 * s'ordenen per nombre d'aparicions al corpus de més a menys i, en cas
 * d'empat, alfabèticament. Es recorren en aquest ordre i es va omplint la
 * llista mentre es compleixin les dues restriccions de llegibilitat. Com que
 * l'ordre no depèn de res més que de les dades, dues execucions donen el
 * mateix resultat.
 */
function select(
  pool: readonly string[],
  usageOf: (word: string) => number,
  maxLength: number,
): Selection {
  const stats: Record<string, number> = { llargada: 0, prefix: 0, veines: 0 }
  const ranked = pool
    .filter((word) => word.length <= maxLength)
    .sort((a, b) => usageOf(b) - usageOf(a) || (a < b ? -1 : a > b ? 1 : 0))
  stats.llargada = ranked.length

  const prefixes = new Set<string>()
  const neighbours = createNeighbourIndex()
  const words: string[] = []

  for (const word of ranked) {
    /* Prefix de quatre lletres únic: qui es recorda del principi de la paraula
     * la pot escriure sencera sense dubtar, i un gestor de contrasenyes pot
     * completar-la. Si el prefix ja és pres, la paraula menys usada cau. */
    const prefix = word.slice(0, PREFIX_LENGTH)
    if (prefixes.has(prefix)) {
      stats.prefix += 1
      continue
    }

    /* Parelles que només es distingeixen per una lletra («gorra»/«gorro»):
     * es descarta la segona si no és prou habitual, perquè en una frase
     * dictada en veu alta la que no se sent mai s'acaba escrivint malament.
     * Si totes dues són corrents, no hi ha confusió possible i es queden. */
    if (usageOf(word) < HABITUAL && hasNeighbour(neighbours, word)) {
      stats.veines += 1
      continue
    }

    prefixes.add(prefix)
    addNeighbour(neighbours, word)
    words.push(word)
    if (words.length === WORD_COUNT) break
  }

  return { words, maxLength, stats }
}

/* ------------------------------------------------------------------ */
/* Escriptura del mòdul                                                */
/* ------------------------------------------------------------------ */

/**
 * Data de generació estable.
 *
 * Si la llista que acabem de calcular és idèntica a la que ja hi ha al
 * repositori, es conserva la data antiga. Així una execució de comprovació no
 * toca el fitxer i el generador és determinista byte a byte.
 */
function resolveGeneratedAt(words: readonly string[]): string {
  try {
    const previous = readFileSync(OUTPUT_PATH, 'utf8')
    const listed = [...previous.matchAll(/'([a-z]{2,})',/g)].map((match) => match[1])
    const olderDate = /generatedAt:\s*'([^']+)'/.exec(previous)?.[1]
    if (olderDate && listed.length === words.length && listed.every((w, i) => w === words[i])) {
      return olderDate
    }
  } catch {
    /* Encara no existeix: és la primera generació. */
  }
  return new Date().toISOString().slice(0, 10)
}

/** Compon el mòdul TypeScript, amb les paraules en files de vuit. */
function renderModule(words: readonly string[], generatedAt: string): string {
  const rows: string[] = []
  for (let i = 0; i < words.length; i += 8) {
    rows.push(`  ${words.slice(i, i + 8).map((word) => `'${word}',`).join(' ')}`)
  }

  // La forquilla de llargades no es pot escriure a mà a la capçalera: el
  // generador afluixa el límit superior si amb nou lletres no reuneix 2048
  // paraules, i aleshores el comentari mentiria. Es calcula de la llista.
  const lengths = words.map((word) => word.length)
  const minLength = Math.min(...lengths)
  const maxLength = Math.max(...lengths)

  return `/**
 * FITXER GENERAT AUTOMÀTICAMENT. NO L'EDITIS A MÀ.
 *
 * Qualsevol canvi fet aquí es perdrà la propera vegada que algú executi:
 *
 *     pnpm build-wordlist
 *
 * El generador és \`scripts/build-wordlist.ts\` i allà hi ha explicat, criteri
 * per criteri, per què cada paraula hi és i per què n'han quedat fora tantes
 * altres.
 *
 * Què és això: la llista de paraules catalanes amb què es construeixen les
 * frases de pas, a l'estil de les llistes «diceware» de l'Electronic Frontier
 * Foundation. Són noms comuns en singular, escrits només amb lletres de la a
 * a la z perquè es puguin teclejar a qualsevol teclat, de ${minLength} a ${maxLength}
 * lletres, amb les ${PREFIX_LENGTH} primeres lletres úniques dins de la llista, i
 * triades d'entre les més corrents del català.
 *
 * Per què n'hi ha exactament 2048 i no 2000 ni 2500: 2048 és 2^11, de manera
 * que cada paraula aporta exactament 11 bits d'entropia. Amb qualsevol altra
 * mida la força d'una frase seria log2(mida) per paraula, un nombre amb
 * decimals que obliga a arrodonir i converteix el càlcul en una aproximació.
 * Amb 2048 el compte és exacte i mental: sis paraules són 66 bits, set en són
 * 77. També permet treure 11 bits nets de \`crypto.getRandomValues\` sense
 * introduir biaix de mòdul.
 *
 * Font de les paraules i llicències: vegeu WORDLIST_META.
 */

export const WORDLIST_CA: readonly string[] = [
${rows.join('\n')}
]

export const WORDLIST_META: {
  readonly source: string
  readonly licence: string
  readonly generatedAt: string
  readonly wordCount: ${WORD_COUNT}
  readonly bitsPerWord: ${BITS_PER_WORD}
} = {
  source: '${DICT_URL}',
  licence:
    '${DICT_LICENCE.replace(/'/g, "\\'")}',
  generatedAt: '${generatedAt}',
  wordCount: ${WORD_COUNT},
  bitsPerWord: ${BITS_PER_WORD},
}
`
}

/* ------------------------------------------------------------------ */
/* Programa                                                            */
/* ------------------------------------------------------------------ */

async function buildWordlist(): Promise<void> {
  const force = process.env.FORCE_DOWNLOAD === '1' || process.argv.includes('--force')

  console.log('\n📝  Llista de paraules catalanes per a frases de pas\n')

  const [dictPath, rootPath, freqPath] = await Promise.all([
    fetchCached(DICT_URL, 'diccionari.txt', force),
    fetchCached(ROOT_NOUNS_URL, 'noms-fdic.txt', force),
    fetchCached(FREQ_URL, 'frequencies.txt', force),
  ])

  const frequencies = await readFrequencies(freqPath)
  const sourcesByNoun = await readSourcesByNoun(rootPath)
  const dictionary = await readDictionary(dictPath, frequencies)

  const usageOf = (word: string): number =>
    (dictionary.singularUse.get(word) ?? 0) + (dictionary.pluralUse.get(word) ?? 0)

  const banned = new Set([...BANNED_WORDS, ...OBSCURE_WORDS])
  const funnel: [string, number][] = []
  let pool = [...dictionary.candidates].sort()

  funnel.push(['formes al diccionari', dictionary.totalLines])
  funnel.push(['noms comuns', dictionary.commonNouns])
  funnel.push(['noms en singular, forma igual al lema', pool.length])

  /* Ni accents, ni dièresis, ni ce trencada, ni guionets, ni majúscules. */
  pool = pool.filter((word) => ASCII_ONLY.test(word))
  funnel.push(['només lletres a-z', pool.length])

  pool = pool.filter((word) => word.length >= MIN_LENGTH)
  funnel.push([`de ${MIN_LENGTH} lletres en amunt`, pool.length])

  /* Terminologia mèdica i tècnica: fora. */
  pool = pool.filter((word) => {
    const sources = sourcesByNoun.get(word)
    if (!sources || sources.size === 0) return true
    return [...sources].some((source) => !TECHNICAL_SOURCES.has(source))
  })
  funnel.push(['sense terminologia especialitzada', pool.length])

  /* Sigles, manlleus anglesos i entrades d'enciclopèdia o de llibre d'estil. */
  pool = pool.filter((word) => {
    const sources = sourcesByNoun.get(word)
    if (!sources) return true
    return ![...sources].some((source) => FOREIGN_SOURCES.has(source))
  })
  funnel.push(['sense sigles ni manlleus marcats', pool.length])

  pool = pool.filter((word) => !FOREIGN_SPELLING.test(word))
  funnel.push(['amb grafia catalana', pool.length])


  /* Infinitius substantivats («el dinar», «el saber»): es llegeixen com a
   * verbs i la consigna és que la llista siguin coses, no accions. */
  pool = pool.filter((word) => !dictionary.verbLemmas.has(word))
  funnel.push(['sense infinitius substantivats', pool.length])


  /* Participis substantivats: «l'acabat», «la caiguda», «un clavat». El
   * diccionari els dóna com a noms i la gent els fa servir, però en una frase
   * de pas es llegeixen com una acció acabada i no com una cosa, que és el
   * que demanàvem. A més són la font de mig catàleg de terminacions en -at i
   * -ada que faria la llista repetitiva i difícil de distingir a l'oïda. */
  pool = pool.filter((word) => !dictionary.participles.has(word))
  funnel.push(['sense participis substantivats', pool.length])

  /* Noms que el diccionari també recull com a nom propi: topònims, marques,
   * noms de persona i gentilicis de pobles antics («adam», «babel»,
   * «babiloni»). No són vocabulari comú i porten una freqüència que no és
   * seva, sinó del nom propi. */
  pool = pool.filter((word) => !dictionary.properNouns.has(word))
  funnel.push(['sense homògrafs de nom propi', pool.length])

  /**
   * La prova del plural per als homògrafs verbals.
   *
   * Moltes formes són alhora nom i forma d'un verb: «casa» és la casa i és
   * del verb casar; «porta» és la porta i és de portar. No es poden descartar
   * totes, perquè s'enduria mig vocabulari bàsic, i tampoc no es poden
   * acceptar totes, perquè la freqüència del corpus seria la del verb i
   * colaria «estic» o «crec» com si fossin noms.
   *
   * La prova que ho decideix és el plural, que només té el nom: «cases» i
   * «portes» surten molt, «estics» no surt mai. Es demana que el plural
   * tingui presència pròpia i que no sigui residual comparat amb el singular.
   */
  pool = pool.filter((word) => {
    if (!dictionary.verbForms.has(word)) return true
    const plural = dictionary.pluralUse.get(word) ?? 0
    const singular = dictionary.singularUse.get(word) ?? 0
    return plural >= MIN_PLURAL_EVIDENCE && plural * MAX_SINGULAR_RATIO >= singular
  })
  funnel.push(['homògrafs verbals amb plural propi', pool.length])

  /* Sigles, abreviatures i paraules que no diu ningú: si no arriben a un
   * grapat d'aparicions en un corpus de milions de paraules, no són
   * vocabulari corrent i no serveixen per recordar una frase. */
  pool = pool.filter((word) => usageOf(word) >= MIN_USE)
  funnel.push([`amb ${MIN_USE} usos o més al corpus`, pool.length])

  pool = pool.filter((word) => !banned.has(word))
  funnel.push(['sense termes vetats', pool.length])

  /* Si amb el límit de llargada no hi ha prou paraules, s'afluixa d'una en
   * una i es deixa constància, tal com demana l'especificació. */
  let maxLength = MAX_LENGTH
  let selection = select(pool, usageOf, maxLength)
  while (selection.words.length < WORD_COUNT && maxLength < 14) {
    maxLength += 1
    console.log(
      `  ⚠️  Amb un màxim de ${maxLength - 1} lletres només se n'han reunit ` +
        `${selection.words.length}; s'afluixa el límit fins a ${maxLength}.`,
    )
    selection = select(pool, usageOf, maxLength)
  }

  console.log('\n  Filtratge:')
  for (const [label, count] of funnel) {
    console.log(`    ${String(count).padStart(9)}  ${label}`)
  }
  console.log(`    ${String(selection.stats.llargada).padStart(9)}  de ${MIN_LENGTH} a ${maxLength} lletres`)
  console.log(`    ${String(selection.stats.prefix).padStart(9)}  descartades per prefix repetit`)
  console.log(
    `    ${String(selection.stats.veines).padStart(9)}  descartades per assemblar-se a una de la llista`,
  )

  if (selection.words.length !== WORD_COUNT) {
    throw new Error(
      `Només s'han reunit ${selection.words.length} paraules i en calen ${WORD_COUNT}. ` +
        'Cal afluixar algun criteri del generador.',
    )
  }

  /* La llista es desa alfabèticament, no per freqüència: així es pot buscar
   * una paraula a ull i el fitxer es compara bé entre versions. L'ordre no
   * afecta la seguretat, perquè la tria sempre és aleatòria sobre tot el
   * conjunt. Com que només hi ha lletres ASCII, l'ordenació per punts de codi
   * és l'alfabètica i no depèn de la configuració regional de la màquina. */
  const words = [...selection.words].sort()
  const generatedAt = resolveGeneratedAt(words)
  writeFileSync(OUTPUT_PATH, renderModule(words, generatedAt), 'utf8')

  const shortest = words.reduce((a, b) => (b.length < a.length ? b : a))
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a))
  console.log(
    `\n  ✓  ${words.length} paraules · ${BITS_PER_WORD} bits cadascuna · ` +
      `de ${shortest.length} a ${longest.length} lletres`,
  )
  console.log(`     sis paraules = ${6 * BITS_PER_WORD} bits d'entropia`)
  console.log(`     escrit a src/lib/passwords/wordlist.ca.ts (data ${generatedAt})\n`)
}

await buildWordlist().catch((error: unknown) => {
  console.error('❌ La generació de la llista ha fallat:', error)
  process.exit(1)
})
