import { CHARACTER_CLASSES, type CharacterClass } from './password'

/**
 * Traducció de l'entropia a llenguatge humà: etiquetes, temps de trencament i
 * les hipòtesis de què depenen.
 *
 * La força d'una contrasenya es mesura en BITS D'ENTROPIA i prou. És l'única
 * xifra defensable, perquè depèn de com s'ha generat la contrasenya i no de
 * quin aspecte té. Les puntuacions de zero a cent i els semàfors de colors que
 * es veuen pertot són inventats: no hi ha cap manera de saber si «Barcelona1!»
 * costa d'endevinar mirant-se-la.
 */

/* ─────────────────────────────── etiquetes ──────────────────────────────── */

export type StrengthTone = 'bad' | 'mid' | 'good'

export interface StrengthLabel {
  level: string
  tone: StrengthTone
  advice: string
}

/**
 * Els llindars no són cap estàndard: són el resultat de mirar les xifres de la
 * taula de temps de trencament d'aquesta mateixa pàgina i preguntar-se a partir
 * de quin punt l'escenari agressiu deixa de ser un problema.
 */
export function strengthLabel(bits: number): StrengthLabel {
  if (bits < 40) {
    return {
      level: 'molt feble',
      tone: 'bad',
      advice:
        'Cau en minuts o hores davant d’un atac fora de línia. No serveix per a res que importi.',
    }
  }
  if (bits < 60) {
    return {
      level: 'feble',
      tone: 'bad',
      advice:
        'Aguanta davant d’un atac barat, però no davant de qui tingui unes quantes targetes gràfiques i ganes.',
    }
  }
  if (bits < 80) {
    return {
      level: 'acceptable',
      tone: 'mid',
      advice:
        'Raonable per a comptes de poca importància. Per al correu, el banc o el gestor de contrasenyes, val més pujar.',
    }
  }
  if (bits < 100) {
    return {
      level: 'forta',
      tone: 'good',
      advice: 'Fora de l’abast d’un atac de força bruta amb la tecnologia d’avui.',
    }
  }
  return {
    level: 'molt forta',
    tone: 'good',
    advice:
      'La contrasenya deixa de ser la baula feble: el risc passa a ser una filtració del servei o un enganyifa de suplantació.',
  }
}

/* ────────────────────────── temps de trencament ─────────────────────────── */

export interface CrackScenario {
  id: string
  label: string
  /** Provatures per segon que se suposen. */
  guessesPerSecond: number
  /** La hipòtesi, escrita. Sense això la xifra de temps no vol dir res. */
  assumption: string
}

/**
 * Tres escenaris, i sempre amb la hipòtesi al costat.
 *
 * Una xifra de temps de trencament sense dir quin atac se suposa és soroll: el
 * mateix conjunt de bits pot ser «tres-cents anys» o «vint minuts» segons què
 * assumeixis, i qui publica la xifra tria l'escenari que li convé. Per això n'hi
 * ha tres i per això la diferència entre el primer i l'últim és de deu ordres de
 * magnitud: perquè es vegi que el resultat és una conseqüència de la suposició.
 *
 * Tots tres són atacs FORA DE LÍNIA: qui ataca ja té a les mans el fitxer de
 * resums, normalment perquè hi ha hagut una filtració, i pot provar tantes
 * combinacions com li permeti el maquinari sense que ningú no l'aturi. Un atac
 * EN LÍNIA, provant contra el formulari d'entrada d'un servei, va de deu a cent
 * provatures per segon i topa amb limitacions de ritme i bloquejos; contra un
 * atac així, gairebé qualsevol contrasenya generada aquí és inabastable. El cas
 * dolent és el de fora de línia, i és el que val la pena mirar.
 *
 * Les xifres són ordres de magnitud arrodonits cap amunt, del costat pessimista.
 */
export const CRACK_SCENARIOS: readonly CrackScenario[] = [
  {
    id: 'slow-hash',
    label: 'Conservador',
    guessesPerSecond: 1e5,
    assumption:
      'Atac fora de línia contra un resum lent i amb sal (bcrypt amb cost 12, o Argon2id amb paràmetres raonables), amb un ordinador amb vuit targetes gràfiques de consum: 100.000 provatures per segon.',
  },
  {
    id: 'fast-hash',
    label: 'Agressiu',
    guessesPerSecond: 1e12,
    assumption:
      'Atac fora de línia contra un resum ràpid, del tipus que encara fan servir molts serveis (SHA-1, SHA-256 o MD5 d’una sola passada), amb un clúster de targetes gràfiques llogat per hores: un bilió de provatures per segon.',
  },
  {
    id: 'state',
    label: 'Extrem',
    guessesPerSecond: 1e15,
    assumption:
      'Adversari amb pressupost d’estat, maquinari dedicat fet a mida i anys de temps, contra un resum ràpid: mil bilions de provatures per segon. És una hipòtesi deliberadament exagerada, per veure què aguanta fins i tot així.',
  },
]

/**
 * Segons que cal, de mitjana, per trobar la contrasenya.
 *
 * Fem servir 2^(bits−1), que és el nombre mitjà de provatures fins a encertar
 * recorrent l'espai sencer, i no 2^bits, que és el cas pitjor. És la meitat: una
 * diferència d'un bit, irrellevant davant dels ordres de magnitud que separen
 * els escenaris, però val més dir quina de les dues xifres és.
 */
export function crackSeconds(entropyBits: number, guessesPerSecond: number): number {
  if (entropyBits <= 0) return 0
  return Math.pow(2, entropyBits - 1) / guessesPerSecond
}

const MINUTE = 60
const HOUR = 3600
const DAY = 86400
const YEAR = 31557600 // any julià, 365,25 dies

const caNumber = (value: number, digits = 0) =>
  new Intl.NumberFormat('ca-ES', { maximumFractionDigits: digits }).format(value)

/** Durada en català, arrodonida amb generositat perquè es llegeixi d'un cop. */
export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds)) return 'més temps del que es pot escriure'
  if (seconds < 1) return 'a l’instant'
  if (seconds < MINUTE) return `${caNumber(seconds)} segons`
  if (seconds < HOUR) return `${caNumber(seconds / MINUTE)} minuts`
  if (seconds < DAY) return `${caNumber(seconds / HOUR)} hores`
  if (seconds < YEAR) return `${caNumber(seconds / DAY)} dies`

  const years = seconds / YEAR
  if (years < 1e3) return `${caNumber(years)} anys`
  if (years < 1e6) return `${caNumber(years / 1e3, 1)} milers d’anys`
  if (years < 1e9) return `${caNumber(years / 1e6, 1)} milions d’anys`
  if (years < 1e12) return `${caNumber(years / 1e9, 1)} milers de milions d’anys`
  // 1,4×10¹⁰ anys és l'edat de l'univers: més enllà d'aquí la xifra ja no diu res.
  return 'molt més que l’edat de l’univers'
}

export interface CrackEstimate extends CrackScenario {
  seconds: number
  text: string
}

export function crackEstimates(entropyBits: number): CrackEstimate[] {
  return CRACK_SCENARIOS.map((scenario) => {
    const seconds = crackSeconds(entropyBits, scenario.guessesPerSecond)
    return { ...scenario, seconds, text: formatDuration(seconds) }
  })
}

/* ─────────────── avaluació d'una contrasenya escrita per algú ───────────── */

export interface TypedPasswordEvaluation {
  length: number
  classes: CharacterClass[]
  /**
   * `longitud × log2(alfabet observat)`. NO és la força de la contrasenya: és
   * el sostre que tindria si l'hagués generat una màquina. Sempre s'ha de
   * presentar com a tal.
   */
  naiveUpperBoundBits: number
  /** Patrons detectats que fan pensar que la força real és molt més baixa. */
  observations: string[]
}

const SEQUENCES = ['abcdefghijklmnopqrstuvwxyz', '0123456789', 'qwertyuiop', 'asdfghjkl']

/**
 * Mira una contrasenya escrita per una persona i en diu el poc que se'n pot dir
 * honestament.
 *
 * PER QUÈ AIXÒ NO RETORNA UNA XIFRA DE FORÇA. L'entropia és una propietat del
 * PROCÉS que ha generat la contrasenya, no de la cadena de caràcters. Quan
 * l'eina genera una contrasenya, coneixem el procés —tantes tries uniformes
 * dins de tant alfabet— i el compte és exacte. Quan algú n'escriu una, el procés
 * és un cervell humà: tria noms, dates, paraules del diccionari, substitucions
 * previsibles (a→@, e→3, i→1, una majúscula al començament, un signe
 * d'admiració al final) i estructures que es repeteixen en milions de
 * contrasenyes filtrades. Els programes d'atac moderns proven exactament aquests
 * patrons primer.
 *
 * «Tr0ub4dor&3» té 11 caràcters i 4 classes: la fórmula ingènua li donaria uns
 * 65 bits, i en realitat cau davant d'un atac de diccionari amb regles de
 * mutació. Ensenyar 65 bits seria una xifra falsament tranquil·litzadora, i és
 * pitjor que no ensenyar-ne cap.
 *
 * Per això aquí no hi ha cap número de força: hi ha el sostre teòric, marcat com
 * a sostre, i una llista de senyals d'alerta. Si vols una xifra de debò, genera
 * la contrasenya amb l'eina.
 */
export function evaluateTypedPassword(value: string): TypedPasswordEvaluation {
  const classes: CharacterClass[] = []
  let alphabetSize = 0
  for (const name of ['lowercase', 'uppercase', 'digits', 'symbols'] as const) {
    const set = CHARACTER_CLASSES[name]
    if ([...value].some((ch) => set.includes(ch))) {
      classes.push(name)
      alphabetSize += set.length
    }
  }
  // Tot allò que no és ASCII imprimible compta com un alfabet addicional prudent.
  if ([...value].some((ch) => ch.charCodeAt(0) > 126)) alphabetSize += 32

  const observations: string[] = []
  const lower = value.toLowerCase()

  if (value.length < 12) {
    observations.push('Té menys de dotze caràcters: la longitud és el que més pesa.')
  }
  if (/^\d+$/.test(value)) {
    observations.push('Només són xifres: una data o un número de telèfon es prova de seguida.')
  }
  if (/^[a-zà-ÿ]+$/i.test(value)) {
    observations.push(
      'Només són lletres: si a més és una paraula de diccionari, un atac la troba en segons.',
    )
  }
  if (/(.)\1{2,}/.test(value)) {
    observations.push('Hi ha un caràcter repetit tres vegades o més.')
  }
  if (SEQUENCES.some((seq) => hasRun(lower, seq) || hasRun(lower, [...seq].reverse().join('')))) {
    observations.push('Conté una seqüència del teclat o de l’abecedari (abc, 123, qwerty…).')
  }
  if (/^[A-ZÀ-Ý]/.test(value) && /\d{1,4}$/.test(value)) {
    observations.push(
      'Segueix el patró «majúscula al davant, xifres al darrere», que és el més habitual a les filtracions i el primer que es prova.',
    )
  }
  if (/(19|20)\d{2}/.test(value)) {
    observations.push('Conté una cosa que sembla un any.')
  }

  return {
    length: value.length,
    classes,
    naiveUpperBoundBits: value.length > 0 ? value.length * Math.log2(Math.max(alphabetSize, 2)) : 0,
    observations,
  }
}

const hasRun = (haystack: string, sequence: string): boolean => {
  for (let i = 0; i + 3 <= sequence.length; i += 1) {
    if (haystack.includes(sequence.slice(i, i + 3))) return true
  }
  return false
}
