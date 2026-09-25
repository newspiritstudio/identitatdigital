'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

type Logo = {
  url?: string | null
  alt?: string | null
}

type App = {
  id: string | number
  name: string
  slug: string
  logo?: Logo | string | number | null
}

type Props = {
  apps: App[]
}

// Sense accents ni majúscules: qui escriu «viquipedia» també ha de trobar la
// Viquipèdia.
const fold = (text: string) =>
  text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

export default function AppsGrid({ apps }: Props) {
  const [search, setSearch] = useState('')

  const filteredApps = useMemo(() => {
    const query = fold(search.trim())

    if (!query) return apps

    return apps.filter((app) => fold(app.name).includes(query))
  }, [apps, search])

  return (
    <>
      <div className="apps-search">
        <label htmlFor="app-search" className="visually-hidden">
          Cercar aplicacions
        </label>

        <input
          id="app-search"
          type="search"
          placeholder="Cerca una aplicació..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      {/* Qui fa servir un lector de pantalla no veu com es filtra la graella. */}
      <p className="visually-hidden" role="status">
        {search.trim()
          ? filteredApps.length === 1
            ? '1 aplicació trobada'
            : `${filteredApps.length} aplicacions trobades`
          : ''}
      </p>

      <div className="apps-grid">
        {filteredApps.map((app) => {
          const logo =
            typeof app.logo === 'object' && app.logo !== null
              ? app.logo
              : null

          return (
            <Link
              key={app.id}
              href={`/aplicacions/${app.slug}`}
              className="app-card"
            >
              <div className="app-card-logo">
                {logo?.url ? (
                  // Miniatura de 128 px ja retallada per Payload i servida amb
                  // memòria cau llarga: l'optimitzador de Next no hi afegiria res.
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.url}
                    alt=""
                    loading="lazy" className="logo appgrid-logo"
                  />
                ) : (
                  <span className="app-card-placeholder">
                    {app.name.charAt(0)}
                  </span>
                )}
              </div>

              <span>{app.name}</span>
            </Link>
          )
        })}
      </div>

      {filteredApps.length === 0 && (
        <p className="apps-empty">
          No s’han trobat aplicacions.
        </p>
      )}
    </>
  )
}
