import type { Metadata } from 'next'
import Link from 'next/link'

import { getClient } from '../../lib'
import '../eines.css'
import Comparador from './Comparador'
import { loadComparator, pickCells, resolveSelection } from './snapshot'

/**
 * Comparador d'aplicacions i cercador d'alternatives.
 *
 * Component de servidor: llegeix el corpus, en prepara una instantània mínima i
 * serialitzable i la passa al navegador, amb les caselles de la selecció
 * inicial. Les de la resta de fitxes arriben en una sola descàrrega sencera;
 * triar categoria, triar fitxes, amagar els indicadors coincidents i obrir
 * l'evidència són operacions locals.
 *
 * L'excepció és la selecció, que viatja per l'URL (`?a=whatsapp&b=signal`) per
 * poder compartir una comparació. Per això s'escriu i es llegeix de manera
 * explícita, en lloc de quedar-se en un estat intern.
 *
 * És dinàmica perquè depèn del corpus publicat i dels paràmetres de consulta:
 * una versió estàtica quedaria congelada a la primera compilació.
 */
export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Comparador i alternatives' }

export default async function ComparadorPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const payload = await getClient()
  const data = await loadComparator(payload)
  const { snapshot } = data
  const initial = resolveSelection(snapshot, params)
  const appIdBySlug = new Map(snapshot.apps.map((app) => [app.slug, app.id]))
  const initialCells = pickCells(
    data,
    initial.appSlugs.flatMap((slug) => appIdBySlug.get(slug) ?? []),
  )

  return (
    <div className="content-wrapper">
      <div className="text-page tool-page">
        <p className="meta">
          <Link href="/eines">Eines</Link>
        </p>
        <h1>Comparador i alternatives</h1>
        <p className="lede">
          Posa dues o tres fitxes de la mateixa categoria una al costat de l’altra, indicador per
          indicador, i mira què es guanya i què es perd canviant de servei.
        </p>

        <p className="meta">
          La comparació es fa dins del teu navegador a partir de dades ja publicades: no s’envia ni
          es desa res. L’adreça de la pàgina recull la selecció, de manera que pots copiar l’enllaç
          i ensenyar la comparació a qui vulguis.{' '}
          <Link href="/metodologia">Com es calculen els indicadors</Link>.
        </p>

        <Comparador snapshot={snapshot} initial={initial} initialCells={initialCells} />
      </div>
    </div>
  )
}
