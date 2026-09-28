import { Noto_Sans, Roboto_Mono } from 'next/font/google'

/**
 * Tipografies del web i del panell, servides des del mateix domini.
 *
 * `next/font` les baixa en compilar i les serveix des de `/_next/static`: cap
 * petició a Google des del navegador de qui llegeix, i compatible amb la
 * política `font-src 'self'`. Són fonts variables, de manera que un sol fitxer
 * cobreix tots els gruixos que fa servir el full d'estil (400–800).
 *
 * `subsets` només diu què es precarrega: el llatí bàsic, que ja inclou totes
 * les lletres del català. Les altres parts de la font es baixen si cal.
 */
export const notoSans = Noto_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-noto-sans',
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

/** Classes que declaren les dues variables a l'element arrel. */
export const fontVariables = `${notoSans.variable} ${robotoMono.variable}`
