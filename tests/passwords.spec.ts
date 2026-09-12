import { describe, expect, it } from 'vitest'

import {
  CHARACTER_CLASSES,
  generatePassword,
  passwordEntropyBits,
  type CharacterClass,
} from '@/lib/passwords/password'
import { bitsPerWord, generatePassphrase, passphraseEntropyBits } from '@/lib/passwords/passphrase'
import { cryptoUint32, randomBelow, shuffled, type Uint32Source } from '@/lib/passwords/random'
import {
  countInRange,
  isValidPrefix,
  normalisePrefix,
  sha1Hex,
  splitHash,
} from '@/lib/passwords/pwned'
import { crackSeconds, evaluateTypedPassword, strengthLabel } from '@/lib/passwords/strength'

/**
 * Llista inventada de 2048 paraules. Les proves no toquen mai `wordlist.ca.ts`:
 * la lògica ha de ser demostrable amb qualsevol llista, i la catalana només n'és
 * el valor per defecte.
 */
const fakeWordlist = Array.from({ length: 2048 }, (_, i) => `paraula${i}`)
const tinyWordlist = ['alba', 'brot', 'cim', 'dau']

/** Font determinista, per provar el camí del rebuig sense dependre de l'atzar. */
const scriptedSource = (values: number[]): { source: Uint32Source; calls: () => number } => {
  let index = 0
  return {
    source: () => {
      const value = values[index % values.length] as number
      index += 1
      return value
    },
    calls: () => index,
  }
}

describe('randomBelow: mostreig per rebuig', () => {
  it('descarta els valors de la cua incompleta en comptes d’aplicar-hi el mòdul', () => {
    // Amb límit 3, 2^32 % 3 = 1, o sigui que el valor 4294967295 cau fora de la
    // zona aprofitable i s'ha de descartar. Amb un mòdul directe hauria tornat 0.
    const { source, calls } = scriptedSource([4294967295, 4294967295, 5])
    expect(randomBelow(3, source)).toBe(2) // 5 % 3
    expect(calls()).toBe(3)
  })

  it('la zona acceptada és un múltiple exacte del límit, que és el que treu el biaix', () => {
    for (const bound of [7, 10, 26, 28, 62, 90, 2048]) {
      const limit = 2 ** 32 - (2 ** 32 % bound)
      expect(limit % bound).toBe(0)
    }
  })

  it('no té biaix apreciable en una mostra gran', () => {
    const bound = 7
    const samples = 140_000
    const counts = new Array<number>(bound).fill(0)

    let outOfRange = 0
    for (let i = 0; i < samples; i += 1) {
      const value = randomBelow(bound, cryptoUint32)
      if (!Number.isInteger(value) || value < 0 || value >= bound) outOfRange += 1
      counts[value] = (counts[value] as number) + 1
    }
    expect(outOfRange).toBe(0)

    const expected = samples / bound
    for (const count of counts) {
      // Desviació típica ≈ 138 sobre 20.000; el 4 % són més de cinc sigmes.
      expect(Math.abs(count - expected) / expected).toBeLessThan(0.04)
    }

    // Khi quadrat amb 6 graus de llibertat: el valor crític a 0,001 és 22,46.
    const chiSquare = counts.reduce((sum, c) => sum + (c - expected) ** 2 / expected, 0)
    expect(chiSquare).toBeLessThan(22.46)
  })

  it('rebutja límits impossibles', () => {
    expect(() => randomBelow(0)).toThrow(RangeError)
    expect(() => randomBelow(-3)).toThrow(RangeError)
    expect(() => randomBelow(2.5)).toThrow(RangeError)
    expect(randomBelow(1)).toBe(0)
  })

  it('la barreja conserva exactament els mateixos elements', () => {
    const input = [...'abcdefghij']
    const out = shuffled(input)
    expect(out).toHaveLength(input.length)
    expect([...out].sort()).toEqual([...input].sort())
    expect(input).toEqual([...'abcdefghij']) // no muta l'original
  })
})

describe('generatePassword: classes forçades', () => {
  const contains = (value: string, name: CharacterClass) =>
    [...value].some((ch) => CHARACTER_CLASSES[name].includes(ch))

  it('cada classe demanada hi surt sempre, també amb la longitud mínima', () => {
    for (let i = 0; i < 400; i += 1) {
      const { value } = generatePassword({
        length: 4,
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true,
      })
      expect(value).toHaveLength(4)
      expect(contains(value, 'lowercase')).toBe(true)
      expect(contains(value, 'uppercase')).toBe(true)
      expect(contains(value, 'digits')).toBe(true)
      expect(contains(value, 'symbols')).toBe(true)
    }
  })

  it('no fa servir cap classe que no s’hagi demanat', () => {
    for (let i = 0; i < 100; i += 1) {
      const { value } = generatePassword({ length: 20, lowercase: true, digits: true })
      expect(/^[a-z0-9]+$/.test(value)).toBe(true)
      expect(contains(value, 'digits')).toBe(true)
      expect(contains(value, 'lowercase')).toBe(true)
    }
  })

  it('els caràcters forçats no queden sempre al davant', () => {
    // Si no hi hagués barreja, la xifra seria sempre a la segona posició.
    const positions = new Set<number>()
    for (let i = 0; i < 200; i += 1) {
      const { value } = generatePassword({ length: 8, lowercase: true, digits: true })
      positions.add([...value].findIndex((ch) => CHARACTER_CLASSES.digits.includes(ch)))
    }
    expect(positions.size).toBeGreaterThan(3)
  })

  it('rebutja el que no es pot generar', () => {
    expect(() => generatePassword({ length: 16 })).toThrow(RangeError)
    expect(() => generatePassword({ length: 2, lowercase: true })).toThrow(RangeError)
    expect(() =>
      generatePassword({
        length: 4,
        lowercase: true,
        uppercase: true,
        digits: true,
        symbols: true,
      }),
    ).not.toThrow()
    expect(() => generatePassword({ length: 300, lowercase: true, uppercase: true })).toThrow(
      RangeError,
    )
  })
})

describe('passwordEntropyBits', () => {
  it('sense restriccions és exactament longitud × log2(alfabet)', () => {
    expect(passwordEntropyBits(20, ['lowercase'], false)).toBeCloseTo(20 * Math.log2(26), 10)
    expect(passwordEntropyBits(16, ['lowercase', 'uppercase', 'digits'], false)).toBeCloseTo(
      16 * Math.log2(62),
      10,
    )
  })

  it('forçar classes rebaixa la xifra: l’aproximació és conservadora', () => {
    const classes: CharacterClass[] = ['lowercase', 'uppercase', 'digits', 'symbols']
    const free = passwordEntropyBits(16, classes, false)
    const forced = passwordEntropyBits(16, classes, true)

    expect(forced).toBeLessThan(free)
    // Σ log2(mida de classe) + (longitud − k) × log2(alfabet)
    const alphabet = 26 + 26 + 10 + 28
    const expected =
      Math.log2(26) + Math.log2(26) + Math.log2(10) + Math.log2(28) + 12 * Math.log2(alphabet)
    expect(forced).toBeCloseTo(expected, 10)
  })

  it('amb una sola classe forçar no canvia res', () => {
    expect(passwordEntropyBits(12, ['digits'], true)).toBeCloseTo(12 * Math.log2(10), 10)
  })

  it('la contrasenya generada porta la mateixa xifra que la fórmula', () => {
    const generated = generatePassword({ length: 24, lowercase: true, uppercase: true })
    expect(generated.entropyBits).toBeCloseTo(
      passwordEntropyBits(24, ['lowercase', 'uppercase'], true),
      10,
    )
    expect(generated.alphabetSize).toBe(52)
  })
})

describe('generatePassphrase', () => {
  it('amb 2048 paraules, N paraules són exactament 11N bits', () => {
    expect(bitsPerWord(2048)).toBe(11)
    for (const words of [4, 5, 6, 7, 8]) {
      const phrase = generatePassphrase({ words }, fakeWordlist)
      expect(phrase.wordBits).toBe(11 * words)
      expect(phrase.entropyBits).toBe(11 * words)
      expect(phrase.words).toHaveLength(words)
      expect(phrase.value.split('-')).toHaveLength(words)
    }
    expect(passphraseEntropyBits(6, 2048)).toBe(66)
    expect(passphraseEntropyBits(7, 2048)).toBe(77)
  })

  it('la xifra final aporta només log2(10) bits, menys d’un terç d’una paraula', () => {
    const phrase = generatePassphrase({ words: 6, digit: true }, fakeWordlist)
    expect(phrase.extraBits).toBeCloseTo(Math.log2(10), 10)
    expect(phrase.entropyBits).toBeCloseTo(66 + Math.log2(10), 10)
    expect(phrase.extraBits).toBeLessThan(11)
    expect(/\d$/.test(phrase.value)).toBe(true)
  })

  it('les majúscules inicials no aporten cap bit', () => {
    const plain = generatePassphrase({ words: 5 }, fakeWordlist)
    const capitalised = generatePassphrase({ words: 5, capitalise: true }, fakeWordlist)
    expect(capitalised.entropyBits).toBe(plain.entropyBits)
    expect(capitalised.words.every((w) => /^[A-Z]/.test(w))).toBe(true)
  })

  it('només fa servir paraules de la llista que se li dona', () => {
    for (let i = 0; i < 200; i += 1) {
      const phrase = generatePassphrase({ words: 5, separator: '.' }, tinyWordlist)
      expect(phrase.words.every((w) => tinyWordlist.includes(w))).toBe(true)
      expect(phrase.value.split('.')).toHaveLength(5)
      expect(phrase.bitsPerWord).toBe(2)
      expect(phrase.entropyBits).toBe(10)
    }
  })

  it('rebutja recomptes de paraules fora de rang', () => {
    expect(() => generatePassphrase({ words: 2 }, fakeWordlist)).toThrow(RangeError)
    expect(() => generatePassphrase({ words: 40 }, fakeWordlist)).toThrow(RangeError)
    expect(() => generatePassphrase({ words: 5 }, ['sola'])).toThrow(RangeError)
  })
})

describe('resum SHA-1 i prefix', () => {
  it('calcula resums coneguts, en majúscules', async () => {
    expect(await sha1Hex('password')).toBe('5BAA61E4C9B93F3F0682250B6CF8331B7EE68FD8')
    expect(await sha1Hex('abc')).toBe('A9993E364706816ABA3E25717850C26C9CD0D89D')
    expect(await sha1Hex('')).toBe('DA39A3EE5E6B4B0D3255BFEF95601890AFD80709')
    // Amb accents: el resum es calcula sobre els octets UTF-8, no sobre els caràcters.
    expect(await sha1Hex('màquina')).toBe('2D83DE7EC426D275270AD81158734A85E23835A4')
  })

  it('en treu cinc caràcters de prefix i trenta-cinc de sufix', async () => {
    const parts = splitHash(await sha1Hex('password'))
    expect(parts.prefix).toBe('5BAA6')
    expect(parts.prefix).toHaveLength(5)
    expect(parts.suffix).toBe('1E4C9B93F3F0682250B6CF8331B7EE68FD8')
    expect(parts.suffix).toHaveLength(35)
  })

  it('accepta els prefixos vàlids i els normalitza a majúscules', () => {
    expect(normalisePrefix('5BAA6')).toBe('5BAA6')
    expect(normalisePrefix('abcde')).toBe('ABCDE')
    expect(normalisePrefix('00000')).toBe('00000')
    expect(normalisePrefix('FFFFF')).toBe('FFFFF')
    expect(isValidPrefix('5baa6')).toBe(true)
  })

  it('rebutja qualsevol altra cosa', () => {
    const bad = [
      '',
      '1234',
      '123456',
      'GHIJK',
      '1234g',
      '12 34',
      ' 1234',
      '5BAA6 ',
      '5BAA6\n',
      '\n5BAA',
      '5BAA6;DROP',
      '../../x',
      '%35BAA',
      '1234５', // xifra de doble amplada
      'ABCD€',
      null,
      undefined,
      12345,
      ['5BAA6'],
      { prefix: '5BAA6' },
    ]
    for (const value of bad) {
      expect(normalisePrefix(value)).toBeNull()
      expect(isValidPrefix(value)).toBe(false)
    }
  })
})

describe('countInRange', () => {
  const body = [
    '1E4C9B93F3F0682250B6CF8331B7EE68FD8:12345',
    '0018A45C4D1DEF81644B54AB7F969B88D65:1',
  ].join('\r\n')

  it('troba el sufix i en retorna el recompte', () => {
    expect(countInRange(body, '1E4C9B93F3F0682250B6CF8331B7EE68FD8')).toBe(12345)
    expect(countInRange(body, '1e4c9b93f3f0682250b6cf8331b7ee68fd8')).toBe(12345)
  })

  it('retorna zero si el sufix no hi és', () => {
    expect(countInRange(body, 'A'.repeat(35))).toBe(0)
    expect(countInRange('', 'A'.repeat(35))).toBe(0)
  })

  it('ignora l’encoixinament, que ve amb el recompte a zero', () => {
    const padded = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:0\r\n'
    expect(countInRange(padded, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')).toBe(0)
  })
})

describe('força i temps de trencament', () => {
  it('el temps depèn de la hipòtesi, i molt', () => {
    const bits = 60
    const conservative = crackSeconds(bits, 1e5)
    const aggressive = crackSeconds(bits, 1e12)
    expect(conservative / aggressive).toBeCloseTo(1e7, 0)
    expect(crackSeconds(0, 1e5)).toBe(0)
  })

  it('les etiquetes van de menys a més', () => {
    expect(strengthLabel(20).tone).toBe('bad')
    expect(strengthLabel(70).tone).toBe('mid')
    expect(strengthLabel(128).tone).toBe('good')
  })
})

describe('evaluateTypedPassword', () => {
  it('marca el sostre com a sostre i detecta els patrons humans', () => {
    const result = evaluateTypedPassword('Barcelona1992!')
    expect(result.classes).toEqual(['lowercase', 'uppercase', 'digits', 'symbols'])
    // La fórmula ingènua dona una xifra alta; per això no s'ensenya com a força.
    expect(result.naiveUpperBoundBits).toBeGreaterThan(80)
    expect(result.observations.some((o) => o.includes('any'))).toBe(true)
  })

  it('avisa de les seqüències i de les repeticions', () => {
    expect(evaluateTypedPassword('qwerty123').observations.length).toBeGreaterThan(0)
    expect(evaluateTypedPassword('aaabbbccc').observations.some((o) => o.includes('repetit'))).toBe(
      true,
    )
  })
})
