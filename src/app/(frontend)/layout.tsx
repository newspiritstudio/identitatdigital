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
        </footer>
      </body>
    </html>
  )
}
