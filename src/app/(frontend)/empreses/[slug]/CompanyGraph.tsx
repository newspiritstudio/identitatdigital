'use client'

import { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { ownershipLabel, revenueModelLabel } from '@/lib/companies'
import { countryName } from '@/lib/countries'
import { supervisoryAuthorityName } from '@/lib/supervisory-authorities'
import type { Company } from '@/payload-types'

/** L'establiment a la UE és un codi de país o una societat amb la ciutat. */
const establishmentLabel = (value: string) => (/^[A-Z]{2}$/.test(value) ? countryName(value) : value)

/** Només els camps que el gràfic mostra: tot el que rep viatja dins la pàgina. */
export type GraphCompany = Pick<
  Company,
  | 'id'
  | 'name'
  | 'slug'
  | 'parentGroup'
  | 'legalName'
  | 'website'
  | 'headquartersCountry'
  | 'euEstablishment'
  | 'leadSupervisoryAuthority'
  | 'supervisoryNote'
  | 'foundedYear'
  | 'ownership'
  | 'primaryRevenueModel'
  | 'privacyContact'
> & { parent: string | null }

type CompanyGraphProps = {
  company: GraphCompany
  companies: GraphCompany[]
  apps: Array<{
    id: string
    company: string | null
  }>
}

type GraphNode = {
  id: string
  x: number
  y: number
  name: string
  appCount: number
}

const NODE_WIDTH = 220
const NODE_HEIGHT = 72

const HORIZONTAL_GAP = 70
const VERTICAL_GAP = 110
const GRAPH_PADDING = 60

const idOf = (value: unknown): string | null => {
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value)
  }

  if (value && typeof value === 'object' && 'id' in value) {
    return String(
      (value as { id?: unknown }).id ?? '',
    )
  }

  return null
}

const clamp = (
  value: number,
  min: number,
  max: number,
) => Math.min(Math.max(value, min), max)

export function CompanyGraph({
  company,
  companies,
  apps,
}: CompanyGraphProps) {
  const router = useRouter()

  const [selectedId, setSelectedId] = useState(
    String(company.id),
  )

  const [pan, setPan] = useState({
    x: 0,
    y: 0,
  })

  const dragRef = useRef<{
    pointerId: number
    startX: number
    startY: number
    originX: number
    originY: number
  } | null>(null)

  /*
   * Company lookup.
   */
  const companyById = useMemo(
    () =>
      new Map(
        companies.map((item) => [
          String(item.id),
          item,
        ]),
      ),
    [companies],
  )

  /*
   * Find the root/top-level company.
   */
  const rootId = useMemo(() => {
    let current: GraphCompany | null = company

    const visited = new Set<string>()

    while (current?.parent) {
      const currentId = String(current.id)

      if (visited.has(currentId)) {
        break
      }

      visited.add(currentId)

      const parentId = idOf(current.parent)

      if (!parentId) {
        break
      }

      const parent = companyById.get(parentId)

      if (!parent) {
        break
      }

      current = parent
    }

    return String(
      current?.id ?? company.id,
    )
  }, [company, companyById])

  /*
   * Build the actual tree.
   *
   * Unlike the old implementation, children are distributed
   * horizontally and parents are centered over their subtree.
   */
  const nodes = useMemo(() => {
    const all = new Map<string, GraphCompany>()

    for (const item of companies) {
      all.set(String(item.id), item)
    }

    /*
     * Parent -> children.
     */
    const direct = new Map<string, GraphCompany[]>()

    for (const item of companies) {
      const parentId = idOf(item.parent)

      if (!parentId) {
        continue
      }

      const bucket = direct.get(parentId) ?? []

      bucket.push(item)

      direct.set(parentId, bucket)
    }

    /*
     * Keep siblings deterministic.
     */
    for (const children of direct.values()) {
      children.sort((a, b) =>
        (a.name ?? '').localeCompare(
          b.name ?? '',
        ),
      )
    }

    /*
     * Calculate how much horizontal space every
     * subtree requires.
     */
    const subtreeWidth = new Map<
      string,
      number
    >()

    const measure = (id: string): number => {
      const children =
        direct.get(id) ?? []

      /*
       * Leaf node.
       */
      if (children.length === 0) {
        subtreeWidth.set(
          id,
          NODE_WIDTH,
        )

        return NODE_WIDTH
      }

      /*
       * Width occupied by all children.
       */
      const childrenWidth =
        children.reduce(
          (total, child) => {
            return (
              total +
              measure(
                String(child.id),
              )
            )
          },
          0,
        ) +
        HORIZONTAL_GAP *
          (children.length - 1)

      /*
       * Parent must never have a subtree smaller
       * than its own node.
       */
      const width = Math.max(
        NODE_WIDTH,
        childrenWidth,
      )

      subtreeWidth.set(id, width)

      return width
    }

    measure(rootId)

    const result: GraphNode[] = []

    /*
     * Position nodes recursively.
     */
    const position = (
      id: string,
      depth: number,
      left: number,
    ) => {
      const item = all.get(id)

      if (!item) {
        return
      }

      const width =
        subtreeWidth.get(id) ??
        NODE_WIDTH

      const children =
        direct.get(id) ?? []

      /*
       * Parent is centered inside its subtree.
       */
      const x =
        left +
        width / 2 -
        NODE_WIDTH / 2

      const y =
        GRAPH_PADDING +
        depth *
          (NODE_HEIGHT +
            VERTICAL_GAP)

      result.push({
        id,
        x,
        y,
        name: item.name,
        appCount: apps.filter(
          (app) =>
            idOf(app.company) === id,
        ).length,
      })

      if (children.length === 0) {
        return
      }

      /*
       * Total width required by all children.
       */
      const totalChildrenWidth =
        children.reduce(
          (total, child) =>
            total +
            (subtreeWidth.get(
              String(child.id),
            ) ?? NODE_WIDTH),
          0,
        ) +
        HORIZONTAL_GAP *
          (children.length - 1)

      /*
       * Center the whole child group beneath
       * the parent.
       */
      let childLeft =
        left +
        (width -
          totalChildrenWidth) /
          2

      for (const child of children) {
        const childId = String(
          child.id,
        )

        const childWidth =
          subtreeWidth.get(
            childId,
          ) ?? NODE_WIDTH

        position(
          childId,
          depth + 1,
          childLeft,
        )

        childLeft +=
          childWidth +
          HORIZONTAL_GAP
      }
    }

    position(
      rootId,
      0,
      0,
    )

    /*
     * Calculate final SVG dimensions.
     */
    const minX = Math.min(
      ...result.map(
        (node) => node.x,
      ),
      0,
    )

    const maxX = Math.max(
      ...result.map(
        (node) =>
          node.x + NODE_WIDTH,
      ),
      NODE_WIDTH,
    )

    const minY = Math.min(
      ...result.map(
        (node) => node.y,
      ),
      0,
    )

    const maxY = Math.max(
      ...result.map(
        (node) =>
          node.y + NODE_HEIGHT,
      ),
      NODE_HEIGHT,
    )

    /*
     * Shift everything so there is padding
     * around the graph.
     */
    const shiftX =
      GRAPH_PADDING - minX

    const shiftY =
      GRAPH_PADDING - minY

    result.forEach((node) => {
      node.x += shiftX
      node.y += shiftY
    })

    return {
      nodes: result,
      width:
        maxX -
        minX +
        GRAPH_PADDING * 2,
      height:
        maxY -
        minY +
        GRAPH_PADDING * 2,
    }
  }, [
    apps,
    companies,
    rootId,
  ])

  /*
   * Currently selected company.
   */
  const selectedCompany =
    companyById.get(selectedId) ??
    company

  /*
   * Selected company's direct parent.
   */
  const selectedParentCompany =
    selectedCompany.parent
      ? companies.find(
          (item) =>
            String(item.id) ===
            idOf(
              selectedCompany.parent,
            ),
        ) ?? null
      : null

  /*
   * Build selected company's lineage.
   */
  const selectedLineage: GraphCompany[] = []

  const seen = new Set<string>()

  let cursor: GraphCompany | null =
    selectedCompany

  while (cursor) {
    const cursorId = String(
      cursor.id ?? '',
    )

    if (
      !cursorId ||
      seen.has(cursorId)
    ) {
      break
    }

    seen.add(cursorId)

    selectedLineage.unshift(
      cursor,
    )

    cursor = cursor.parent
      ? companyById.get(cursor.parent) ?? null
      : null
  }

  const selectedRootCompany =
    selectedLineage[0] ??
    selectedCompany

  const selectedViaLabel =
    selectedLineage.length > 1
      ? selectedLineage
          .slice(1)
          .map(
            (entry) => entry.name,
          )
          .join(' → ')
      : '—'

  /*
   * Build parent -> child edges.
   */
  const edges = useMemo(() => {
    const nodeById =
      new Map(
        nodes.nodes.map(
          (node) => [
            node.id,
            node,
          ],
        ),
      )

    const entries: Array<{
      from: GraphNode
      to: GraphNode
    }> = []

    for (const item of companies) {
      const parentId = idOf(
        item.parent,
      )

      if (!parentId) {
        continue
      }

      const parentNode =
        nodeById.get(parentId)

      const currentNode =
        nodeById.get(
          String(item.id),
        )

      if (
        parentNode &&
        currentNode
      ) {
        entries.push({
          from: parentNode,
          to: currentNode,
        })
      }
    }

    return entries
  }, [
    companies,
    nodes.nodes,
  ])

  /*
   * Select a company and navigate to it.
   */
  const handleSelect = (
    nodeId: string,
    companySlug?: string,
  ) => {
    setSelectedId(nodeId)

    if (companySlug) {
      router.push(
        `/empreses/${companySlug}`,
      )
    }
  }

  /*
   * Pan interaction.
   */
  const beginDrag = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    dragRef.current = {
      pointerId:
        event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: pan.x,
      originY: pan.y,
    }

    event.currentTarget.setPointerCapture(
      event.pointerId,
    )
  }

  const moveDrag = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (
      !dragRef.current ||
      dragRef.current
        .pointerId !==
        event.pointerId
    ) {
      return
    }

    const dx =
      event.clientX -
      dragRef.current.startX

    const dy =
      event.clientY -
      dragRef.current.startY

    setPan({
      x: clamp(
        dragRef.current.originX +
          dx * 0.75,
        -300,
        300,
      ),
      y: clamp(
        dragRef.current.originY +
          dy * 0.75,
        -250,
        250,
      ),
    })
  }

  const endDrag = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (
      dragRef.current &&
      dragRef.current
        .pointerId ===
        event.pointerId
    ) {
      dragRef.current = null
    }
  }

  return (
    <>
      <div
        className="company-graph card"
        style={{
          padding: '1.25rem',
          borderRadius: '18px',
          border:
            '1px solid var(--line)',
          background:
            'var(--surface)',
        }}
      >
        <div
          className="company-graph-meta"
          style={{
            display: 'flex',
            justifyContent:
              'space-between',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
            fontSize: '0.9rem',
          }}
        >
          <strong>
            Grup empresarial
          </strong>

          <span>
            {selectedCompany.name}
          </span>
        </div>

        <div
          className="company-graph-stage"
          onPointerDown={
            beginDrag
          }
          onPointerMove={
            moveDrag
          }
          onPointerUp={
            endDrag
          }
          onPointerLeave={
            endDrag
          }
          style={{
            position:
              'relative',
            width: '100%',
            height: 'auto',
            overflow:
              'hidden',
            borderRadius:
              '14px',
            touchAction:
              'none',
            cursor:
              'grab',
            background:
              'var(--background, transparent)',
          }}
        >
          <svg
            viewBox={`0 0 ${nodes.width} ${nodes.height}`}
            role="img"
            aria-label={`Diagrama del grup empresarial de ${company.name}`}
            className="company-graph-svg"
            preserveAspectRatio="xMidYMid meet"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
            }}
          >
            <defs>
              <linearGradient
                id="graphNodeFill"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--accent)"
                  stopOpacity="0.22"
                />

                <stop
                  offset="100%"
                  stopColor="var(--accent)"
                  stopOpacity="0.08"
                />
              </linearGradient>
            </defs>

            <g
              transform={`translate(${pan.x} ${pan.y})`}
            >
              {/*
               * Tree connections.
               */}
              {edges.map(
                (
                  edge,
                  index,
                ) => {
                  const fromX =
                    edge.from.x +
                    NODE_WIDTH /
                      2

                  const fromY =
                    edge.from.y +
                    NODE_HEIGHT

                  const toX =
                    edge.to.x +
                    NODE_WIDTH /
                      2

                  const toY =
                    edge.to.y

                  const verticalGap =
                    toY -
                    fromY

                  const curve =
                    Math.max(
                      35,
                      verticalGap *
                        0.45,
                    )

                  return (
                    <path
                      key={`${edge.from.id}-${edge.to.id}-${index}`}
                      d={`
                        M ${fromX} ${fromY}
                        C ${fromX} ${fromY + curve},
                          ${toX} ${toY - curve},
                          ${toX} ${toY}
                      `}
                      stroke="var(--line-strong)"
                      strokeWidth="2"
                      fill="none"
                    />
                  )
                },
              )}

              {/*
               * Nodes.
               */}
              {nodes.nodes.map(
                (node) => {
                  const isSelected =
                    selectedId ===
                    node.id

                  const current =
                    companyById.get(
                      node.id,
                    )

                  return (
                    <g
                      key={
                        node.id
                      }
                      className="company-graph-node"
                      onMouseEnter={() =>
                        setSelectedId(
                          node.id,
                        )
                      }
                      onFocus={() =>
                        setSelectedId(
                          node.id,
                        )
                      }
                      onClick={() =>
                        handleSelect(
                          node.id,
                          current?.slug,
                        )
                      }
                      onKeyDown={(
                        event,
                      ) => {
                        if (
                          event.key ===
                            'Enter' ||
                          event.key ===
                            ' '
                        ) {
                          event.preventDefault()

                          handleSelect(
                            node.id,
                            current?.slug,
                          )
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Veure la fitxa de ${
                        current?.name ??
                        node.name
                      }`}
                      style={{
                        cursor:
                          'pointer',
                        outline:
                          'none',
                      }}
                    >
                      <rect
                        x={node.x}
                        y={node.y}
                        width={
                          NODE_WIDTH
                        }
                        height={
                          NODE_HEIGHT
                        }
                        rx="14"
                        fill={
                          isSelected
                            ? 'url(#graphNodeFill)'
                            : 'var(--surface, #ffffff)'
                        }
                        stroke={
                          isSelected
                            ? 'var(--accent)'
                            : 'var(--line-strong)'
                        }
                        strokeWidth={
                          isSelected
                            ? 2
                            : 1
                        }
                      />

                      <text
                        x={
                          node.x +
                          NODE_WIDTH /
                            2
                        }
                        y={
                          node.y +
                          30
                        }
                        textAnchor="middle"
                        style={{
                          fontSize:
                            '15px',
                          fontWeight: 700,
                          fill: 'var(--text)',
                          pointerEvents:
                            'none',
                        }}
                      >
                        {current?.name ??
                          node.name}
                      </text>

                      <text
                        x={
                          node.x +
                          NODE_WIDTH /
                            2
                        }
                        y={
                          node.y +
                          52
                        }
                        textAnchor="middle"
                        style={{
                          fontSize:
                            '12px',
                          fill: 'var(--muted)',
                          pointerEvents:
                            'none',
                        }}
                      >
                        {
                          node.appCount
                        }{' '}
                        app
                        {node.appCount ===
                        1
                          ? ''
                          : 's'}
                      </text>
                    </g>
                  )
                },
              )}
            </g>
          </svg>
        </div>
      </div>

      <div
        className="scroller company-graph-details"
        role="region"
        tabIndex={0}
        aria-label={`Identificació de ${selectedCompany.name}`}
      >
        <table>
          <caption className="visually-hidden">
            Identificació de{' '}
            {selectedCompany.name}
          </caption>

          <tbody>
            <tr>
              <th scope="row">
                Nom
              </th>

              <td>
                {
                  selectedCompany.name
                }
              </td>
            </tr>

            {selectedCompany.legalName ? (
              <tr>
                <th scope="row">
                  Denominació legal
                </th>

                <td>
                  {
                    selectedCompany.legalName
                  }
                </td>
              </tr>
            ) : null}

            <tr>
              <th scope="row">
                Grup
              </th>

              <td>
                {selectedRootCompany ? (
                  <a
                    href={`/empreses/${selectedRootCompany.slug}`}
                  >
                    {
                      selectedRootCompany.name
                    }
                  </a>
                ) : (
                  '—'
                )}
              </td>
            </tr>

            {selectedLineage.length >
            1 ? (
              <tr>
                <th scope="row">
                  Via
                </th>

                <td>
                  {
                    selectedViaLabel
                  }
                </td>
              </tr>
            ) : null}

            <tr>
              <th scope="row">
                {selectedCompany.ownership === 'state' ? 'Depèn de' : 'Empresa matriu'}
              </th>

              <td>
                {selectedParentCompany ? (
                  <a
                    href={`/empreses/${selectedParentCompany.slug}`}
                  >
                    {
                      selectedParentCompany.name
                    }
                  </a>
                ) : selectedCompany.parentGroup ? (
                  `${selectedCompany.parentGroup} (sense fitxa al directori)`
                ) : (
                  'Cim del grup'
                )}
              </td>
            </tr>

            {selectedCompany.headquartersCountry ? (
              <tr>
                <th scope="row">
                  Seu
                </th>

                <td>
                  {countryName(
                    selectedCompany.headquartersCountry,
                  )}
                </td>
              </tr>
            ) : null}

            {selectedCompany.euEstablishment &&
            selectedCompany.ownership !== 'state' ? (
              <tr>
                <th scope="row">
                  Establiment a la UE
                </th>

                <td>
                  {establishmentLabel(
                    selectedCompany.euEstablishment,
                  )}
                </td>
              </tr>
            ) : null}

            {selectedCompany.leadSupervisoryAuthority ? (
              <tr>
                <th scope="row">
                  Autoritat de control
                </th>

                <td>
                  {supervisoryAuthorityName(
                    selectedCompany.leadSupervisoryAuthority,
                  )}
                  {selectedCompany.supervisoryNote ? (
                    <p className="meta">
                      {selectedCompany.supervisoryNote}
                    </p>
                  ) : null}
                </td>
              </tr>
            ) : null}

            {selectedCompany.ownership ? (
              <tr>
                <th scope="row">
                  Titularitat
                </th>

                <td>
                  {ownershipLabel(
                    selectedCompany.ownership,
                  )}
                </td>
              </tr>
            ) : null}

            {selectedCompany.primaryRevenueModel &&
            selectedCompany.ownership !== 'state' ? (
              <tr>
                <th scope="row">
                  Model d’ingressos
                </th>

                <td>
                  {revenueModelLabel(
                    selectedCompany.primaryRevenueModel,
                  )}
                </td>
              </tr>
            ) : null}

            {selectedCompany.foundedYear ? (
              <tr>
                <th scope="row">
                  Any de fundació
                </th>

                <td>
                  {
                    selectedCompany.foundedYear
                  }
                </td>
              </tr>
            ) : null}

            {selectedCompany.website ? (
              <tr>
                <th scope="row">
                  Web
                </th>

                <td>
                  <a
                    href={
                      selectedCompany.website
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                      selectedCompany.website
                    }
                  </a>
                </td>
              </tr>
            ) : null}

            {selectedCompany.privacyContact ? (
              <tr>
                <th scope="row">
                  Contacte de
                  privadesa
                </th>

                <td>
                  {selectedCompany.privacyContact.startsWith(
                    'http',
                  ) ? (
                    <a
                      href={
                        selectedCompany
                          .privacyContact
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      {
                        selectedCompany
                          .privacyContact
                      }
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