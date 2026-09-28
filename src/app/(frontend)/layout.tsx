import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'

import { fontVariables } from '../fonts'
import './styles.css'
import { MainNav } from './nav'
import { THEME_INIT_SCRIPT, ThemeToggle } from './theme-toggle'

export const metadata: Metadata = {
  // Les URL relatives de les metadades es resolen
  // contra el domini públic, que Next incrusta en compilar.
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'identitat.digital',
    template: '%s · identitat.digital',
  },
  description:
    'Base de coneixement sobre privadesa, identitat digital i seguretat en línia. Cada afirmació, amb la seva font.',
  openGraph: { type: 'website', siteName: 'identitat.digital', locale: 'ca_ES' },
  twitter: { card: 'summary' },
}

/** Color de la barra del navegador, d'acord amb el tema del sistema. */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f1f1f1' },
    { media: '(prefers-color-scheme: dark)', color: '#02080d' },
  ],
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
export default async function FrontendLayout({ children }: { children: React.ReactNode }) {
  // La política de seguretat només deixa executar scripts amb aquest `nonce`
  // (`src/proxy.ts`); Next el posa als seus, i aquest és l'únic script propi.
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    // Extensions com LanguageTool afegeixen atributs a <html> abans de la
    // hidratació; sense això, React ho marca com a error a cada càrrega.
    <html lang="ca" className={fontVariables} suppressHydrationWarning>
      <body>
        <script nonce={nonce} dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <a className="skip-link" href="#contingut">
          Vés al contingut
        </a>
        <ThemeToggle />
        <header className="site-header">
          <Link href="/aplicacions" className="site-title">
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
          <div className="site-footer-grid">
            <div className="site-footer-brand">
              <Link href="/" className="site-title site-footer-title">
                <strong>identitat</strong>.digital
              </Link>
              <p>
                Base de coneixement sobre privadesa, identitat digital i seguretat en línia. Cada
                afirmació, amb la seva font i el seu context.
              </p>
            </div>

            <div className="site-footer-column">
              <h2>Explora</h2>
              <nav aria-label="Navegació principal del peu de pàgina">
                <Link href="/aplicacions">Aplicacions</Link>
                <Link href="/empreses">Empreses i grups</Link>
                <Link href="/analisi">Anàlisi</Link>
                <Link href="/filtracions">Filtracions</Link>
                <Link href="/institucions">Institucions</Link>
              </nav>
            </div>

            <div className="site-footer-column">
              <h2>Aprendre</h2>
              <nav aria-label="Recursos i metodologia">
                <Link href="/metodologia">Metodologia</Link>
                <Link href="/dades">Dades obertes</Link>
                <Link href="/consultes">Consultes</Link>
                <Link href="/eines">Eines</Link>
              </nav>
            </div>

            <div className="site-footer-column">
              <h2>Legal</h2>
              <nav aria-label="Informació legal i codi font">
                <Link href="/legal">Informació legal</Link>
                <Link href="/legal/privadesa">Privadesa</Link>
                <a
                  href="https://github.com/newspiritstudio/identitatdigital-data"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Codi font
                  <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
                </a>
              </nav>
            </div>
          </div>

          <div className="site-footer-meta">
            <p className="site-owner">
              Identitat.digital és un projecte de New Spirit Studio S.L. El contingut es publica
              sota llicència Creative Commons Reconeixement-CompartirIgual 4.0.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
