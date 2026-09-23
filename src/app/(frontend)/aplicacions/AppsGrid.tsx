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

export default function AppsGrid({ apps }: Props) {
  const [search, setSearch] = useState('')

  const filteredApps = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return apps

    return apps.filter((app) =>
      app.name.toLowerCase().includes(query),
    )
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
          No s'han trobat aplicacions.
        </p>
      )}
    </>
  )
}
