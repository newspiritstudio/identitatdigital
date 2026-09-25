'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

type DirectoryCompany = {
  id: string
  name: string
  slug?: string
}

type DirectoryGroup = {
  rootId: string
  rootName: string
  rootSlug: string
  appCount: number
  dataTypeCount: number
  companies: DirectoryCompany[]
}

export function CompanyDirectoryExplorer({ groups }: { groups: DirectoryGroup[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return groups

    return groups.filter((group) => {
      const groupMatch = group.rootName.toLowerCase().includes(value)
      const companyMatch = group.companies.some((company) =>
        company.name.toLowerCase().includes(value),
      )
      return groupMatch || companyMatch
    })
  }, [groups, query])

  return (
    <div className="company-directory-explorer">
      <label className="company-search">
        <span className="visually-hidden">Cerca una empresa o grup</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cerca una empresa o grup…"
          aria-label="Cerca una empresa o grup"
        />
      </label>

      <div className="company-directory-list">
        {filtered.length === 0 ? (
          <p className="company-empty-state">No hi ha coincidències per a aquesta cerca.</p>
        ) : (
          filtered.map((group) => (
            <article key={group.rootId} className="company-directory-group">
              <div className="company-directory-group-header">
                <h3>
                  <Link href={`/empreses/${group.rootSlug}`}>{group.rootName}</Link>
                </h3>
                <span>{group.appCount} apps</span>
              </div>

              <div className="company-directory-meta">
                <span>{group.companies.length} empreses</span>
                <span>{group.dataTypeCount} tipus de dada</span>
              </div>

              <ul className="company-directory-company-list">
                {group.companies.map((company) => (
                  <li key={company.id}>
                    <Link href={`/empreses/${company.slug || company.id}`}>{company.name}</Link>
                  </li>
                ))}
              </ul>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
