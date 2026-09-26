'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

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
  /* { href: '/institucions', label: 'Institucions' },*/
  { href: '/dades', label: 'Dades' },
  { href: '/metodologia', label: 'Metodologia' },
  /*{ href: '/consultes', label: 'Consultes' },*/
] as const

export function MainNav() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      const toggle = document.querySelector('.site-nav-toggle')
      const menu = document.querySelector('#site-nav')

      if (toggle && menu && !toggle.contains(target) && !menu.contains(target)) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        className={`site-nav-toggle${open ? ' is-open' : ''}`}
        aria-label={open ? 'Tancar menú' : 'Obrir menú'}
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="site-nav"
        className={`site-nav${open ? ' is-open' : ''}`}
        aria-label="Seccions del lloc"
        aria-hidden={!open}
      >
        {LINKS.map(({ href, label }) => {
          const current = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link
              aria-current={current ? 'page' : undefined}
              href={href}
              key={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
