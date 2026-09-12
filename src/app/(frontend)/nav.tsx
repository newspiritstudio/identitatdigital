'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Navegació principal amb indicació de secció actual.
 *
 * `aria-current="page"` a l'enllaç de la secció on som (WCAG 2.4.8). Es marca
 * la secció i no la coincidència exacta, perquè dins d'«Anàlisi» hi ha sis
 * pàgines i totes hi pertanyen.
 *
 * Únic component de client del capçal. Només llegeix el camí de la URL.
 */
const LINKS = [
  { href: '/aplicacions', label: 'Aplicacions' },
  { href: '/empreses', label: 'Empreses' },
  { href: '/analisi', label: 'Anàlisi' },
  { href: '/filtracions', label: 'Filtracions' },
  { href: '/eines', label: 'Eines' },
  { href: '/institucions', label: 'Institucions' },
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
