import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import './styles.css'
import { MainNav } from './nav'

export const metadata: Metadata = {
  title: {
    default: 'Identitat.digital',
    template: '%s · Identitat.digital',
  },
  description:
    'Base de coneixement sobre privadesa, identitat digital i seguretat en línia. Cada afirmació, amb la seva font.',
}

/**
 * Estructura comuna de totes les pàgines.
 *
 * Tres coses hi són per accessibilitat i no s'han de treure:
 *
 *  - L'enllaç de salt al contingut, primer element focalitzable del document i
 *    visible només quan té el focus (WCAG 2.4.1). Sense ell, qui navega amb
 *    teclat ha de travessar la navegació sencera a cada pàgina.
 *  - `id` i `tabindex="-1"` a `<main>`, perquè el salt hi porti el focus de
 *    debò i no només el desplaçament.
 *  - Noms a les regions de navegació. N'hi ha dues i, sense nom, un lector de
 *    pantalla les anuncia totes dues com a «navegació» i no es distingeixen.
 */
export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body>
        <a className="skip-link" href="#contingut">
          Vés al contingut
        </a>
        <header className="site-header">
          <Link href="/" className="site-title">
            Identitat.digital
          </Link>
          <MainNav />
        </header>
        <main id="contingut" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <p>
            Interfície de validació de la fase 1. El disseny arribarà més endavant; ara el que
            importa és que les dades siguin correctes i traçables.
          </p>
          <nav aria-label="Informació legal i dades obertes">
            <Link href="/legal">Informació legal</Link>
            <Link href="/legal/privadesa">Privadesa</Link>
            <Link href="/legal/galetes">Galetes</Link>
            <Link href="/legal/llicencia">Llicència</Link>
            <Link href="/legal/accessibilitat">Accessibilitat</Link>
            <Link href="/legal/condicions">Condicions d’ús</Link>
            <Link href="/legal/avis-legal">Avís legal</Link>
            <Link href="/legal/politica-editorial">Política editorial</Link>
            <Link href="/dades">Dades obertes</Link>
            <a
              href="https://github.com/newspiritstudio/identitatdigital"
              rel="noopener noreferrer"
              target="_blank"
            >
              Codi font
              <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
            </a>
          </nav>
          <p className="site-owner">
            Identitat.digital és un projecte de New Spirit Studio S.L., NIF B75352872, carrer del
            Sol, 62, 08201 Sabadell. El codi es publica sota llicència MIT i el contingut sota
            Creative Commons Reconeixement-CompartirIgual 4.0, amb les exclusions detallades a la
            pàgina de llicència.
          </p>
        </footer>
      </body>
    </html>
  )
}
