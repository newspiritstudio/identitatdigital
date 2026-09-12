import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import './styles.css'

export const metadata: Metadata = {
  title: {
    default: 'Identitat.digital',
    template: '%s · Identitat.digital',
  },
  description:
    'Base de coneixement sobre privadesa, identitat digital i seguretat en línia. Cada afirmació, amb la seva font.',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body>
        <header className="site-header">
          <Link href="/" className="site-title">
            Identitat.digital
          </Link>
          <nav>
            <Link href="/aplicacions">Aplicacions</Link>
            <Link href="/empreses">Empreses</Link>
            <Link href="/analisi">Anàlisi</Link>
            <Link href="/filtracions">Filtracions</Link>
            <Link href="/eines">Eines</Link>
            <Link href="/metodologia">Metodologia</Link>
            <Link href="/consultes">Consultes</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <p>
            Interfície de validació de la fase 1. El disseny arribarà més endavant; ara el que
            importa és que les dades siguin correctes i traçables.
          </p>
          <nav aria-label="Informació legal">
            <Link href="/legal">Informació legal</Link>
            <Link href="/legal/privadesa">Privadesa</Link>
            <Link href="/legal/galetes">Galetes</Link>
            <Link href="/legal/llicencia">Llicència</Link>
            <Link href="/legal/accessibilitat">Accessibilitat</Link>
            <Link href="/legal/condicions">Condicions d’ús</Link>
            <Link href="/legal/avis-legal">Avís legal</Link>
            <Link href="/legal/politica-editorial">Política editorial</Link>
          </nav>
          <p className="site-owner">
            Identitat.digital és un projecte de New Spirit Studio S.L., NIF B75352872, carrer del
            Sol, 62, 08201 Sabadell. El contingut es publica sota llicència Creative Commons
            Reconeixement-CompartirIgual 4.0, amb les exclusions detallades a la pàgina de
            llicència.
          </p>
        </footer>
      </body>
    </html>
  )
}
