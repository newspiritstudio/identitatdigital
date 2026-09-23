import { lot as lot01 } from './lot-01'
import { lot as lot02 } from './lot-02'
import { lot as lot03 } from './lot-03'
import { lot as lot04 } from './lot-04'
import { lot as lot05 } from './lot-05'
import { lot as lot06 } from './lot-06'
import { lot as lot07 } from './lot-07'
import { lot as lot08 } from './lot-08'
import { lot as lot09 } from './lot-09'
import { lot as lot10 } from './lot-10'
import { lot as lot11 } from './lot-11'
import { lot as lot12 } from './lot-12'
import { lot as lot13 } from './lot-13'
import { lot as lot14 } from './lot-14'
import { lot as lot15 } from './lot-15'
import { lot as lot16 } from './lot-16'
import { lot as lot17 } from './lot-17'
import { lot as lot18 } from './lot-18'
import { lot as lot19 } from './lot-19'
import { lot as lot20 } from './lot-20'
import { lot as lot21 } from './lot-21'
import { lot as lot22 } from './lot-22'
import { lot as lot23 } from './lot-23'
import { lot as lot24 } from './lot-24'
import { lot as lot25 } from './lot-25'
import { lot as lot26 } from './lot-26'
import { lot as lot27 } from './lot-27'
import { lot as lot28 } from './lot-28'
import { lot as lot29 } from './lot-29'
import { lot as lot30 } from './lot-30'
import { lot as lot31 } from './lot-31'
import { lot as lot32 } from './lot-32'
import { lot as lot33 } from './lot-33'
import { lot as lot34 } from './lot-34'
import { lot as lot35 } from './lot-35'
import { lot as lot36 } from './lot-36'
import { lot as lot37 } from './lot-37'
import { lot as lot38 } from './lot-38'
import { lot as lot39 } from './lot-39'
import type { SeedLot } from './types'

/**
 * Segona onada: les 400 aplicacions més descarregades.
 *
 * El rànquing surt dels tops gratuïts oficials de l'App Store a Espanya
 * (itunes.apple.com/es/rss/topfreeapplications), consultats el 22 de
 * setembre de 2026: primer el top general i després els tops de cada
 * categoria intercalats per posició, sense jocs, fins a sumar 400 serveis
 * amb les 25 fitxes de la primera onada. Cada lot agrupa les aplicacions
 * d'un mateix grup empresarial perquè comparteixin empresa i fonts.
 */
const lots: SeedLot[] = [lot01, lot02, lot03, lot04, lot05, lot06, lot07, lot08, lot09, lot10, lot11, lot12, lot13, lot14, lot15, lot16, lot17, lot18, lot19, lot20, lot21, lot22, lot23, lot24, lot25, lot26, lot27, lot28, lot29, lot30, lot31, lot32, lot33, lot34, lot35, lot36, lot37, lot38, lot39]

export const wave2: SeedLot = {
  companies: lots.flatMap((lot) => lot.companies),
  sources: lots.flatMap((lot) => lot.sources),
  apps: lots.flatMap((lot) => lot.apps),
  incidents: lots.flatMap((lot) => lot.incidents),
  storeIds: Object.assign({}, ...lots.map((lot) => lot.storeIds)),
}
