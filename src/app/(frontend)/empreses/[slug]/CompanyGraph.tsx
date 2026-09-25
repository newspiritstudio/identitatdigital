'use client'

import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import type { Company } from '@/payload-types'

type CompanyGraphProps = {
  company: Company
  companies: Company[]
  apps: Array<{ id: string; name: string; slug: string; company?: Company | string | null }>
}

const idOf = (value: unknown): string | null => {
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (value && typeof value === 'object' && 'id' in value) return String((value as { id?: unknown }).id ?? '')
  return null
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export function CompanyGraph({ company, companies, apps }: CompanyGraphProps) {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState(String(company.id))
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const dragRef = useRef<{ pointerId: number; startX: number; startY: number; originX: number; originY: number } | null>(null)

  const companyById = useMemo(
    () => new Map(companies.map((item) => [String(item.id), item])),
    [companies],
  )

  const rootId = useMemo(() => {
    let current: Company | null = company
    while (current?.parent) {
      const parentId = idOf(current.parent)
      if (!parentId) break
      const parent = companyById.get(parentId)
      if (!parent) break
      current = parent
    }
    return String(current?.id ?? company.id)
  }, [company, companyById])

  const nodes = useMemo(() => {
    const all = new Map<string, Company>()
    for (const item of companies) all.set(String(item.id), item)

    const direct = new Map<string, Company[]>()
    for (const item of companies) {
      const parentId = idOf(item.parent)
      if (parentId) {
        const bucket = direct.get(parentId) ?? []
        bucket.push(item)
        direct.set(parentId, bucket)
      }
    }

    const result: Array<{ id: string; x: number; y: number; name: string; appCount: number }> = []
    const visit = (id: string, depth: number, y: number): number => {
      const item = all.get(id)
      if (!item) return y

      result.push({
        id,
        x: 220 + depth * 180,
        y,
        name: item.name,
        appCount: apps.filter((app) => idOf(app.company) === id).length,
      })

      const children = (direct.get(id) ?? []).sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''))
      if (children.length === 0) return y + 90

      let nextY = y + 90
      const clusterSpacing = 82
      children.forEach((child, index) => {
        const childY = nextY + index * clusterSpacing
        nextY = visit(String(child.id), depth + 1, childY)
      })
      return Math.max(nextY, y + 90 + (children.length - 1) * clusterSpacing + 90)
    }

    visit(rootId, 0, 70)

    const minX = Math.min(...result.map((node) => node.x), 0)
    const maxX = Math.max(...result.map((node) => node.x), 0)
    const width = Math.max(720, maxX - minX + 260)
    const shiftX = (width - (maxX - minX + 200)) / 2 - minX
    result.forEach((node) => {
      node.x += shiftX
    })

    const maxY = Math.max(...result.map((node) => node.y), 90) + 100
    return { nodes: result, width, height: maxY }
  }, [apps, companies, rootId])

  const selectedCompany = companyById.get(selectedId) ?? company

  const selectedParentCompany = selectedCompany.parent
    ? (companies as Company[]).find((item) => String(item.id) === idOf(selectedCompany.parent)) ?? null
    : null

  const selectedLineage: Company[] = []
  const seen = new Set<string>()
  let cursor: Company | null = selectedCompany
  while (cursor) {
    const cursorId = String(cursor.id ?? '')
    if (!cursorId || seen.has(cursorId)) break
    seen.add(cursorId)
    selectedLineage.unshift(cursor)

    const parentValue: Company['parent'] | undefined = cursor.parent
    if (parentValue && typeof parentValue === 'object' && 'id' in parentValue && parentValue.id) {
      cursor = parentValue as Company
    } else if (parentValue && typeof parentValue === 'string') {
      cursor = (companies as Company[]).find((item) => String(item.id) === String(parentValue)) ?? null
    } else {
      cursor = null
    }
  }

  const selectedRootCompany = selectedLineage[0] ?? selectedCompany
  const selectedViaLabel = selectedLineage.length > 1 ? selectedLineage.slice(1).map((entry) => entry.name).join(' → ') : '—'

  const edges = useMemo(() => {
    const entries: Array<{ from: { x: number; y: number; id: string }; to: { x: number; y: number; id: string } }> = []
    for (const item of companies) {
      const parentId = idOf(item.parent)
      if (!parentId) continue
      const parentNode = nodes.nodes.find((node) => node.id === parentId)
      const currentNode = nodes.nodes.find((node) => node.id === String(item.id))
      if (parentNode && currentNode) entries.push({ from: parentNode, to: currentNode })
    }
    return entries
  }, [companies, nodes.nodes])

  const handleSelect = (nodeId: string, companySlug?: string) => {
    setSelectedId(nodeId)
    if (companySlug) router.push(`/empreses/${companySlug}`)
  }

  const beginDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: pan.x,
      originY: pan.y,
    }
    ;(event.currentTarget as HTMLDivElement).setPointerCapture(event.pointerId)
  }

  const moveDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return
    const dx = event.clientX - dragRef.current.startX
    const dy = event.clientY - dragRef.current.startY
    setPan({
      x: clamp(dragRef.current.originX + dx * 0.75, -120, 120),
      y: clamp(dragRef.current.originY + dy * 0.75, -90, 90),
    })
  }

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragRef.current && dragRef.current.pointerId === event.pointerId) {
      dragRef.current = null
    }
  }

  return (
    <>
      <div className="company-graph card" style={{ padding: '1.25rem', borderRadius: '18px', border: '1px solid var(--line)', background: 'var(--surface)' }}>
        <div className="company-graph-meta" style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
          <strong>Grup empresarial</strong>
          <span>{selectedCompany.name}</span>
        </div>

        <div
          className="company-graph-stage"
          onPointerDown={beginDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
        >
          <svg
            viewBox={`0 0 ${nodes.width} ${nodes.height}`}
            role="img"
            aria-label={`Diagrama del grup empresarial de ${company.name}`}
            className="company-graph-svg"
            style={{ width: '100%', height: '100%', display: 'block' }}
          >
            <defs>
              <linearGradient id="graphNodeFill" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <g transform={`translate(${pan.x} ${pan.y})`}>
              {edges.map((edge, index) => (
                <path
                  key={`${edge.from.id}-${edge.to.id}-${index}`}
                  d={`M ${edge.from.x + 75} ${edge.from.y + 52} C ${edge.from.x + 75} ${edge.from.y + 72}, ${edge.to.x + 75} ${edge.to.y - 22}, ${edge.to.x + 75} ${edge.to.y}`}
                  stroke="var(--line-strong)"
                  strokeWidth="1.5"
                  fill="none"
                />
              ))}

              {nodes.nodes.map((node) => {
                const isSelected = selectedId === node.id
                const current = companyById.get(node.id)
                return (
                  <g
                    key={node.id}
                    className="company-graph-node"
                    onMouseEnter={() => setSelectedId(node.id)}
                    onFocus={() => setSelectedId(node.id)}
                    onClick={() => handleSelect(node.id, current?.slug)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        handleSelect(node.id, current?.slug)
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Veure la fitxa de ${current?.name ?? node.name}`}
                    style={{ cursor: 'pointer', outline: 'none' }}
                  >
                    <rect
                      x={node.x}
                      y={node.y}
                      width="150"
                      height="52"
                      rx="12"
                      fill={isSelected ? 'url(#graphNodeFill)' : 'var(--surface, #ffffff)'}
                      stroke={isSelected ? 'var(--accent)' : 'var(--line-strong)'}
                      strokeWidth={isSelected ? 2 : 1}
                    />
                    <text
                      x={node.x + 75}
                      y={node.y + 22}
                      textAnchor="middle"
                      style={{ fontSize: '12px', fontWeight: 700, fill: 'var(--text)', pointerEvents: 'none' }}
                    >
                      {current?.name ?? node.name}
                    </text>
                    <text
                      x={node.x + 75}
                      y={node.y + 38}
                      textAnchor="middle"
                      style={{ fontSize: '10px', fill: 'var(--muted)', pointerEvents: 'none' }}
                    >
                      {node.appCount} app{node.appCount === 1 ? '' : 's'}
                    </text>
                  </g>
                )
              })}
            </g>
          </svg>
        </div>
      </div>

      <div className="scroller company-graph-details" role="region" tabIndex={0} aria-label={`Identificació de ${selectedCompany.name}`}>
        <table>
          <caption className="visually-hidden">Identificació de {selectedCompany.name}</caption>
          <tbody>
            <tr>
              <th scope="row">Nom</th>
              <td>{selectedCompany.name}</td>
            </tr>
            {selectedCompany.legalName ? (
              <tr>
                <th scope="row">Denominació legal</th>
                <td>{selectedCompany.legalName}</td>
              </tr>
            ) : null}
            <tr>
              <th scope="row">Grup</th>
              <td>
                {selectedRootCompany ? (
                  <a href={`/empreses/${selectedRootCompany.slug}`}>{selectedRootCompany.name}</a>
                ) : (
                  '—'
                )}
              </td>
            </tr>
            {selectedLineage.length > 1 ? (
              <tr>
                <th scope="row">Via</th>
                <td>{selectedViaLabel}</td>
              </tr>
            ) : null}
            <tr>
              <th scope="row">Empresa matriu</th>
              <td>
                {selectedParentCompany ? (
                  <a href={`/empreses/${selectedParentCompany.slug}`}>{selectedParentCompany.name}</a>
                ) : (
                  'Cim del grup'
                )}
              </td>
            </tr>
            {selectedCompany.headquartersCountry ? (
              <tr>
                <th scope="row">Seu</th>
                <td>{selectedCompany.headquartersCountry}</td>
              </tr>
            ) : null}
            {selectedCompany.euEstablishment ? (
              <tr>
                <th scope="row">Establiment a la UE</th>
                <td>{selectedCompany.euEstablishment}</td>
              </tr>
            ) : null}
            {selectedCompany.leadSupervisoryAuthority ? (
              <tr>
                <th scope="row">Autoritat de control</th>
                <td>{selectedCompany.leadSupervisoryAuthority}</td>
              </tr>
            ) : null}
            {selectedCompany.ownership ? (
              <tr>
                <th scope="row">Titularitat</th>
                <td>{selectedCompany.ownership}</td>
              </tr>
            ) : null}
            {selectedCompany.primaryRevenueModel ? (
              <tr>
                <th scope="row">Model d’ingressos</th>
                <td>{selectedCompany.primaryRevenueModel}</td>
              </tr>
            ) : null}
            {selectedCompany.foundedYear ? (
              <tr>
                <th scope="row">Any de fundació</th>
                <td>{selectedCompany.foundedYear}</td>
              </tr>
            ) : null}
            {selectedCompany.website ? (
              <tr>
                <th scope="row">Web</th>
                <td>
                  <a href={selectedCompany.website} target="_blank" rel="noreferrer">
                    {selectedCompany.website}
                  </a>
                </td>
              </tr>
            ) : null}
            {selectedCompany.privacyContact ? (
              <tr>
                <th scope="row">Contacte de privadesa</th>
                <td>
                  {selectedCompany.privacyContact.startsWith('http') ? (
                    <a href={selectedCompany.privacyContact} target="_blank" rel="noreferrer">
                      {selectedCompany.privacyContact}
                    </a>
                  ) : (
                    selectedCompany.privacyContact
                  )}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </>
  )
}
