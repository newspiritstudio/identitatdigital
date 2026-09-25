import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import './styles.css'
import { MainNav } from './nav'
import { ThemeToggle } from './theme-toggle'

export const metadata: Metadata = {
  title: {
    default: 'identitat.digital',
    template: '%s · identitat.digital',
  },
  description:
    'Base de coneixement sobre privadesa, identitat digital i seguretat en línia. Cada afirmació, amb la seva font.',
}

/**
 * Estructura comuna de totes les pàgines.
 *
 * Hi ha tres elements que hi són per accessibilitat i no s'han de treure:
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
        <ThemeToggle />
        <a className="skip-link" href="#contingut">
          Vés al contingut
        </a>
        <header className="site-header">
          <Link href="/" className="site-title">
            <strong>identitat</strong>.digital
          </Link>
          <div className="site-header-tools">
            <MainNav />
          </div>
        </header>
        <main id="contingut" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-footer">
          <nav aria-label="Informació legal i dades obertes">
            <Link href="/legal">Informació legal</Link>
            <Link href="/legal/privadesa">Privadesa</Link>
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
            Identitat.digital és un projecte de New Spirit Studio S.L. El codi es publica sota
            llicència MIT i el contingut sota Creative Commons Reconeixement-CompartirIgual 4.0.
          </p>
        </footer>
      </body>
    </html>
  )
}
