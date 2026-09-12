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
 * PER QUÈ NO `source() % bound`, QUE SERIA UNA LÍNIA:
 *
 * Perquè introdueix biaix i el biaix és real, no una pedanteria acadèmica. La
 * font dona 2^32 valors possibles. Si `bound` no divideix 2^32 —i no ho fa per
 * a cap alfabet que no sigui una potència de dos: 26 lletres, 10 xifres, 28
 * símbols, 62 alfanumèrics— els primers `2^32 % bound` residus surten una
 * vegada més que la resta. Amb 62 caràcters, els 40 primers de l'alfabet són
 * lleugerament més probables que els 22 últims. La diferència per caràcter és
 * minúscula, però és sistemàtica i coneguda: qui ataca pot ordenar l'espai de
 * cerca de més probable a menys probable i escurçar la feina. Una eina que
 * promet entropia ha de donar entropia, no gairebé.
 *
 * El remei és descartar (rebutjar) els valors que cauen a la cua incompleta i
 * tornar a demanar-ne un altre. La probabilitat de rebuig és, com a molt,
 * inferior a una milionèsima per a qualsevol alfabet d'aquesta eina, de manera
 * que el bucle acaba de seguida; el cost és irrellevant i la distribució queda
 * exacta.
 *
 * NO SIMPLIFIQUIS AIXÒ A UN MÒDUL. Si algú vol «netejar» aquesta funció, que
 * llegeixi primer aquest comentari i després torni a considerar-ho.
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
