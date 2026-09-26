/**
 * «de» davant d'un nom propi, apostrofat quan toca: «d’Instagram», «d’eBay»,
 * però «de WhatsApp», «de Huawei» o «de Yahoo».
 *
 * S'apostrofa davant de vocal i de h muda, però no davant de i o u
 * semivocals, és a dir, seguides d'una altra vocal («de Huawei»). Els noms que
 * comencen per w o y es llegeixen amb consonant.
 */
const VOWEL = /^[aeiouàèéíòóúïü]/i
const SEMIVOWEL = /^h?[iu][aeiouàèéíòóú]/i

export function de(name: string): string {
  const bare = name.replace(/^h/i, '')
  const elides = VOWEL.test(bare) && !SEMIVOWEL.test(name)
  return elides ? `d’${name}` : `de ${name}`
}
