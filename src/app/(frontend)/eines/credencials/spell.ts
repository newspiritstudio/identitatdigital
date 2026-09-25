/**
 * Descripció d'una contrasenya per a lectors de pantalla.
 *
 * Una contrasenya llegida de cop per un sintetitzador de veu és inservible:
 * «K7q» sona com una síl·laba i no es distingeix una ela d'una i majúscula, ni
 * un zero d'una o. Per això la caixa que ensenya la contrasenya amaga el text
 * visible amb `aria-hidden` i n'ofereix, al costat, aquesta versió lletrejada
 * caràcter a caràcter, amb el nom de cada símbol i dient de cada lletra si és
 * majúscula o minúscula.
 */

const SYMBOL_NAMES: Record<string, string> = {
  ' ': 'espai',
  '!': 'signe d’admiració',
  '"': 'cometes',
  '#': 'coixinet',
  $: 'dòlar',
  '%': 'percentatge',
  '&': 'i comercial',
  "'": 'apòstrof',
  '(': 'parèntesi obert',
  ')': 'parèntesi tancat',
  '*': 'asterisc',
  '+': 'signe de més',
  ',': 'coma',
  '-': 'guionet',
  '.': 'punt',
  '/': 'barra inclinada',
  ':': 'dos punts',
  ';': 'punt i coma',
  '<': 'menor que',
  '=': 'igual',
  '>': 'major que',
  '?': 'interrogant',
  '@': 'arrova',
  '[': 'claudàtor obert',
  '\\': 'barra invertida',
  ']': 'claudàtor tancat',
  '^': 'accent circumflex',
  _: 'guió baix',
  '`': 'accent greu',
  '{': 'clau oberta',
  '|': 'barra vertical',
  '}': 'clau tancada',
  '~': 'titlla',
}

export function describeCharacter(character: string): string {
  if (character >= '0' && character <= '9') return character
  if (character >= 'a' && character <= 'z') return `${character} minúscula`
  if (character >= 'A' && character <= 'Z') return `${character} majúscula`
  return SYMBOL_NAMES[character] ?? character
}

/** Lletreja una contrasenya sencera, caràcter a caràcter. */
export function spellOut(value: string): string {
  return [...value].map(describeCharacter).join(', ')
}

/**
 * Una frase de pas es llegeix millor per paraules: les paraules són
 * pronunciables i el que cal aclarir és què les separa i què hi ha al final.
 */
export function spellPassphrase(value: string, separator: string): string {
  const separatorName = describeCharacter(separator)
  return [...value]
    .reduce<string[]>((parts, character) => {
      if (character === separator) {
        parts.push(separatorName, '')
        return parts
      }
      if (character >= '0' && character <= '9') {
        parts.push(`xifra ${character}`, '')
        return parts
      }
      if (parts.length === 0) parts.push('')
      parts[parts.length - 1] += character
      return parts
    }, [])
    .filter((part) => part.length > 0)
    .join(', ')
}
