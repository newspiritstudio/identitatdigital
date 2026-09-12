/**
 * Aleatorietat per a la generació de contrasenyes.
 *
 * Tot surt de `crypto.getRandomValues`, que és el generador criptogràfic del
 * navegador i de Node. `Math.random()` no hi té cap paper: no està pensat per a
 * res que hagi de resistir un atac i, en alguns motors, el seu estat es pot
 * reconstruir observant-ne unes quantes sortides.
 *
 * La decisió important d'aquest fitxer és el MOSTREIG PER REBUIG. Vegeu
 * `randomBelow`.
 */

/** Una font que retorna un enter sense signe de 32 bits. */
export type Uint32Source = () => number

/** Font per defecte: el generador criptogràfic de la plataforma. */
export const cryptoUint32: Uint32Source = () => {
  const buffer = new Uint32Array(1)
  crypto.getRandomValues(buffer)
  return buffer[0] as number
}

const TWO_POW_32 = 2 ** 32

/**
 * Retorna un enter uniforme dins de [0, bound).
 *
 * No és `source() % bound` perquè el mòdul introdueix biaix. La font dona 2^32
 * valors i `bound` no divideix 2^32 per a cap alfabet que no sigui potència de
 * dos (26 lletres, 10 xifres, 28 símbols, 62 alfanumèrics), de manera que els
 * primers `2^32 % bound` residus surten una vegada més que la resta. Amb 62
 * caràcters, els 40 primers són lleugerament més probables que els 22 últims.
 * La diferència és minúscula però sistemàtica, i qui ataca pot ordenar l'espai
 * de cerca de més probable a menys probable.
 *
 * El remei és rebutjar els valors que cauen a la cua incompleta i demanar-ne un
 * altre. La probabilitat de rebuig queda per sota d'una milionèsima per a
 * qualsevol alfabet d'aquesta eina.
 */
export function randomBelow(bound: number, source: Uint32Source = cryptoUint32): number {
  if (!Number.isInteger(bound) || bound < 1 || bound > TWO_POW_32) {
    throw new RangeError(`El límit ha de ser un enter entre 1 i 2^32: s'ha rebut ${bound}`)
  }
  if (bound === 1) return 0

  // El valor més gran que encara deixa un nombre sencer de repeticions de
  // `bound` dins de [0, 2^32). Tot el que hi arribi o el superi es descarta.
  const limit = TWO_POW_32 - (TWO_POW_32 % bound)

  let value = source() >>> 0
  while (value >= limit) {
    value = source() >>> 0
  }
  return value % bound
}

/** Tria un element d'una llista no buida, uniformement. */
export function pick<T>(items: readonly T[], source: Uint32Source = cryptoUint32): T {
  if (items.length === 0) throw new RangeError('No es pot triar un element d’una llista buida')
  return items[randomBelow(items.length, source)] as T
}

/**
 * Barreja de Fisher–Yates, feta sobre una còpia.
 *
 * També aquí cada índex surt de `randomBelow`: una barreja amb índexs
 * esbiaixats deixaria rastre de quines posicions ocupen els caràcters que hem
 * forçat, que és precisament el que la barreja ha d'amagar.
 */
export function shuffled<T>(items: readonly T[], source: Uint32Source = cryptoUint32): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = randomBelow(i + 1, source)
    const tmp = out[i] as T
    out[i] = out[j] as T
    out[j] = tmp
  }
  return out
}
