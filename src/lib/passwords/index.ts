/**
 * Eina de contrasenyes: generació, mesura de força i comprovació de filtracions.
 *
 * Tot el que hi ha en aquest directori està pensat per funcionar dins del
 * navegador. Cap funció d'aquí no envia enlloc la contrasenya ni el resum
 * sencer; l'única cosa que surt del dispositiu són els cinc caràcters de prefix
 * de `pwned.ts`, i només quan la persona ho demana explícitament.
 */

export * from './random'
export * from './password'
export * from './passphrase'
export * from './strength'
export * from './pwned'
export { WORDLIST_CA, WORDLIST_META } from './wordlist.ca'
