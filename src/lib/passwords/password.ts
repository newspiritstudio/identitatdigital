import { cryptoUint32, randomBelow, shuffled, type Uint32Source } from './random'

/**
 * Generador de contrasenyes de caràcters aleatoris.
 */

/** Les quatre classes de caràcters que es poden activar. */
export const CHARACTER_CLASSES = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  digits: '0123456789',
  /*
   * Símbols ASCII, tret de la cometa simple, la cometa doble, la barra
   * invertida i l'accent greu. No és cap mena de pudor: són els quatre
   * caràcters que més sovint es mengen o es transformen quan una contrasenya
   * passa per una línia d'ordres, un fitxer de configuració, un camp que algú
   * ha escapat malament o un gestor que exporta a CSV. Queden 28 símbols, que
   * ja aporten 4,8 bits per caràcter.
   */
  symbols: '!#$%&()*+,-./:;<=>?@[]^_{|}~',
} as const

export type CharacterClass = keyof typeof CHARACTER_CLASSES

export const CHARACTER_CLASS_LABELS: Record<CharacterClass, string> = {
  lowercase: 'minúscules',
  uppercase: 'majúscules',
  digits: 'xifres',
  symbols: 'símbols',
}

export const MIN_PASSWORD_LENGTH = 4
export const MAX_PASSWORD_LENGTH = 128

export interface PasswordOptions {
  length: number
  lowercase?: boolean
  uppercase?: boolean
  digits?: boolean
  symbols?: boolean
  /** Garanteix que cada classe demanada surti com a mínim una vegada. */
  requireEachClass?: boolean
}

export interface GeneratedPassword {
  kind: 'password'
  value: string
  length: number
  /** Classes que s'han fet servir, en l'ordre de `CHARACTER_CLASSES`. */
  classes: CharacterClass[]
  alphabetSize: number
  /** Cota inferior de l'entropia, en bits. Vegeu `passwordEntropyBits`. */
  entropyBits: number
  /** Si s'ha forçat la presència de cada classe. */
  forcedClasses: boolean
}

const CLASS_ORDER: readonly CharacterClass[] = ['lowercase', 'uppercase', 'digits', 'symbols']

export function selectedClasses(options: PasswordOptions): CharacterClass[] {
  return CLASS_ORDER.filter((name) => options[name] === true)
}

/**
 * Entropia d'una contrasenya generada per aquesta eina, en bits.
 *
 * CAS SENSE RESTRICCIONS. Si no forcem res, cada posició és una tria uniforme i
 * independent dins d'un alfabet de `n` caràcters: l'entropia és exactament
 * `longitud × log2(n)`. Aquí no hi ha cap aproximació.
 *
 * CAS AMB CLASSES FORÇADES. Quan exigim que hi hagi com a mínim una minúscula,
 * una majúscula, una xifra i un símbol, ja no estem triant uniformement dins de
 * n^longitud: estem triant dins del subconjunt de contrasenyes que compleixen
 * la condició, i a més ho fem amb una distribució que no és perfectament
 * uniforme dins d'aquest subconjunt. Presentar `longitud × log2(n)` seria
 * inflar la xifra, perquè les restriccions sempre treuen possibilitats.
 *
 * L'APROXIMACIÓ QUE FEM SERVIR és fitar l'entropia mínima (la mesura correcta
 * per a la resistència a endevinar-la, no l'entropia de Shannon) comptant només
 * el que aporta cada tria per separat i renunciant del tot al que aporta la
 * barreja de posicions:
 *
 *     bits ≥ Σ log2(mida de cada classe forçada) + (longitud − k) × log2(n)
 *
 * on `k` és el nombre de classes forçades. La demostració és curta: el
 * generador col·loca les `k` posicions forçades amb una permutació uniforme, i
 * per a una contrasenya concreta el nombre de col·locacions que la podrien
 * haver produïda no pot superar el nombre total de col·locacions possibles.
 * Per tant la probabilitat de qualsevol contrasenya concreta no supera el
 * producte de les probabilitats d'una sola d'aquestes trajectòries, que és
 * justament el terme de la dreta.
 *
 * ÉS CONSERVADORA per dues raons. Primera, llença els bits de la barreja de
 * posicions, que n'hi ha (fins a log2(longitud!/(longitud−k)!), uns 13 bits per
 * a una contrasenya de 16 caràcters amb quatre classes). Segona, substitueix
 * `log2(n)` per `log2(mida de la classe)` a les `k` posicions forçades, i les
 * classes són sempre més petites que l'alfabet sencer. La xifra que ensenyem és
 * doncs un sòl, no un sostre: la força real és igual o més alta. Preferim
 * quedar-nos curts, perquè en una eina de seguretat l'error car és el contrari.
 *
 * Conseqüència que val la pena dir en veu alta: forçar classes REBAIXA
 * lleugerament l'entropia en comptes de pujar-la. Serveix per esquivar
 * formularis que exigeixen un símbol, no per fer la contrasenya més forta. Si
 * el sistema de destinació no ho exigeix, val més deixar-ho desactivat i, si
 * cal, afegir un caràcter més de longitud.
 */
export function passwordEntropyBits(
  length: number,
  classes: readonly CharacterClass[],
  forcedClasses: boolean,
): number {
  const alphabetSize = classes.reduce((sum, name) => sum + CHARACTER_CLASSES[name].length, 0)
  if (alphabetSize === 0 || length <= 0) return 0

  if (!forcedClasses || classes.length <= 1) {
    return length * Math.log2(alphabetSize)
  }

  const k = Math.min(classes.length, length)
  const forced = classes
    .slice(0, k)
    .reduce((sum, name) => sum + Math.log2(CHARACTER_CLASSES[name].length), 0)
  return forced + (length - k) * Math.log2(alphabetSize)
}

/**
 * Genera una contrasenya.
 *
 * Primer col·loca un caràcter de cada classe demanada, després omple la resta
 * amb l'alfabet sencer i finalment ho barreja tot, de manera que els caràcters
 * forçats no queden sempre al davant ni en cap ordre previsible.
 */
export function generatePassword(
  options: PasswordOptions,
  source: Uint32Source = cryptoUint32,
): GeneratedPassword {
  const draw = (alphabet: string): string =>
    alphabet[randomBelow(alphabet.length, source)] as string

  const { length } = options
  if (!Number.isInteger(length) || length < MIN_PASSWORD_LENGTH || length > MAX_PASSWORD_LENGTH) {
    throw new RangeError(
      `La longitud ha de ser un enter entre ${MIN_PASSWORD_LENGTH} i ${MAX_PASSWORD_LENGTH}`,
    )
  }

  const classes = selectedClasses(options)
  if (classes.length === 0) {
    throw new RangeError('Cal activar com a mínim una classe de caràcters')
  }

  const forcedClasses = options.requireEachClass !== false
  if (forcedClasses && classes.length > length) {
    throw new RangeError(
      `No caben ${classes.length} classes obligatòries en una contrasenya de ${length} caràcters`,
    )
  }

  const alphabet = classes.map((name) => CHARACTER_CLASSES[name]).join('')

  const chars: string[] = []
  if (forcedClasses) {
    for (const name of classes) chars.push(draw(CHARACTER_CLASSES[name]))
  }
  while (chars.length < length) chars.push(draw(alphabet))

  const value = shuffled(chars, source).join('')

  return {
    kind: 'password',
    value,
    length,
    classes,
    alphabetSize: alphabet.length,
    entropyBits: passwordEntropyBits(length, classes, forcedClasses),
    forcedClasses,
  }
}
