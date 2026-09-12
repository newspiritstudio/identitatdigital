'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Navegació principal amb indicació de secció actual.
 *
 * `aria-current="page"` a l'enllaç de la secció on som (WCAG 2.4.8: saber on
 * ets dins del lloc). Es marca la secció, no la coincidència exacta, perquè
 * dins d'«Anàlisi» hi ha sis pàgines i totes són «Anàlisi».
 *
 * És l'únic component de client del capçal, i no fa servir cap
 * emmagatzematge ni cap efecte: només llegeix el camí de la URL actual.
 */
const LINKS = [
  { href: '/aplicacions', label: 'Aplicacions' },
  { href: '/empreses', label: 'Empreses' },
  { href: '/analisi', label: 'Anàlisi' },
  { href: '/filtracions', label: 'Filtracions' },
  { href: '/eines', label: 'Eines' },
  { href: '/dades', label: 'Dades' },
  { href: '/metodologia', label: 'Metodologia' },
  { href: '/consultes', label: 'Consultes' },
] as const

export function MainNav() {
  const pathname = usePathname() ?? '/'

  return (
    <nav aria-label="Seccions del lloc">
      {LINKS.map(({ href, label }) => {
        const current = pathname === href || pathname.startsWith(`${href}/`)
        return (
          <Link aria-current={current ? 'page' : undefined} href={href} key={href}>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
