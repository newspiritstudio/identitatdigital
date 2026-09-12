import { cryptoUint32, randomBelow, type Uint32Source } from './random'
import { WORDLIST_CA } from './wordlist.ca'

/**
 * Generador de frases de pas a l'estil «diceware»: N paraules triades a l'atzar
 * d'una llista tancada.
 *
 * La llista arriba per paràmetre i la catalana només n'és el valor per defecte.
 * Això no és una floritura d'injecció de dependències: permet provar la lògica
 * amb una llista petita i inventada, i deixa la porta oberta a llistes d'altres
 * llengües sense tocar res d'aquí.
 */

export const MIN_WORDS = 3
export const MAX_WORDS = 12

export const SEPARATORS = ['-', '.', ' ', '_'] as const
export type Separator = (typeof SEPARATORS)[number]

export interface PassphraseOptions {
  words: number
  separator?: string
  /** Afegeix una xifra al final. Aporta molt menys del que sembla. */
  digit?: boolean
  /** Posa en majúscula la inicial de cada paraula. No aporta cap bit. */
  capitalise?: boolean
}

export interface GeneratedPassphrase {
  kind: 'passphrase'
  value: string
  words: string[]
  separator: string
  /** Bits que aporten les paraules. Exacte, no estimat. */
  wordBits: number
  /** Bits que aporten els afegits (la xifra). */
  extraBits: number
  /** wordBits + extraBits. */
  entropyBits: number
  wordlistSize: number
  bitsPerWord: number
}

/**
 * Bits per paraula d'una llista.
 *
 * Amb 2048 paraules són exactament 11 bits, perquè 2048 = 2^11. Amb qualsevol
 * altra mida el nombre té decimals i el que ensenyem és un arrodoniment cap
 * avall. Per això la llista catalana té exactament 2048 paraules.
 */
export function bitsPerWord(wordlistSize: number): number {
  if (wordlistSize < 2) return 0
  return Math.log2(wordlistSize)
}

/**
 * Entropia d'una frase de pas, en bits.
 *
 * Les paraules aporten `n × log2(mida de la llista)`. Amb 2048 paraules són
 * 11n bits justos: sis paraules en fan 66 i set, 77. No hi ha cap aproximació,
 * perquè sabem com s'ha generat la frase.
 *
 * La xifra del final aporta log2(10) = 3,32 bits. Sembla més perquè la frase es
 * veu més complicada, però qui ataca ja compta que n'hi pugui haver una al
 * final. Una paraula més aporta 11 bits.
 *
 * Les majúscules inicials aporten zero bits i no entren al càlcul. Posar en
 * majúscula la inicial de cada paraula és una transformació fixa que qui ataca
 * aplica igual. Serveixen per passar formularis que n'exigeixen una.
 */
export function passphraseEntropyBits(
  wordCount: number,
  wordlistSize: number,
  options: { digit?: boolean } = {},
): number {
  const words = wordCount * bitsPerWord(wordlistSize)
  const extra = options.digit ? Math.log2(10) : 0
  return words + extra
}

export function generatePassphrase(
  options: PassphraseOptions,
  wordlist: readonly string[] = WORDLIST_CA,
  source: Uint32Source = cryptoUint32,
): GeneratedPassphrase {
  const { words: count } = options
  if (!Number.isInteger(count) || count < MIN_WORDS || count > MAX_WORDS) {
    throw new RangeError(
      `El nombre de paraules ha de ser un enter entre ${MIN_WORDS} i ${MAX_WORDS}`,
    )
  }
  if (wordlist.length < 2) {
    throw new RangeError('La llista de paraules ha de tenir com a mínim dues paraules')
  }

  const separator = options.separator ?? '-'

  // Amb repetició: treure les paraules ja triades faria la frase lleugerament
  // més curta d'entropia de calcular i, sobretot, convertiria cada paraula en
  // una tria dependent de les anteriors. Amb repetició, cada paraula aporta
  // exactament els mateixos bits i el càlcul segueix sent exacte.
  const chosen: string[] = []
  for (let i = 0; i < count; i += 1) {
    chosen.push(wordlist[randomBelow(wordlist.length, source)] as string)
  }

  const shown = options.capitalise
    ? chosen.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    : chosen

  let value = shown.join(separator)
  if (options.digit) {
    value += String(randomBelow(10, source))
  }

  const wordBits = count * bitsPerWord(wordlist.length)
  const extraBits = options.digit ? Math.log2(10) : 0

  return {
    kind: 'passphrase',
    value,
    words: shown,
    separator,
    wordBits,
    extraBits,
    entropyBits: wordBits + extraBits,
    wordlistSize: wordlist.length,
    bitsPerWord: bitsPerWord(wordlist.length),
  }
}
