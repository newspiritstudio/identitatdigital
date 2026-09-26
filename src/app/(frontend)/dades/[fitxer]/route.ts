import { getPayload } from 'payload'

import config from '@payload-config'
import { DATASETS, datasetByKey, loadExportInput } from '@/lib/opendata/datasets'
import { toCsv } from '@/lib/opendata/csv'

/**
 * Descàrrega dels conjunts oberts.
 *
 * Una sola ruta serveix `/dades/<conjunt>.json`, `/dades/<conjunt>.csv` i
 * `/dades/index.json`, que és el manifest llegible per màquines amb la llista
 * de conjunts, les seves columnes i les llicències.
 *
 * Sense clau, sense registre, sense límit d'ús i amb `Access-Control-Allow-Origin: *`,
 * de manera que es pugui llegir des de quaderns i pàgines de tercers.
 *
 * La memòria cau és d'una hora: el corpus canvia a ritme editorial i així no cal
 * refer nou consultes per descàrrega.
 */
export const revalidate = 3600

const LICENCE = 'CC-BY-SA-4.0'
const ATTRIBUTION = 'Identitat.digital — New Spirit Studio, S.L.'

const headers = (contentType: string, filename?: string): HeadersInit => ({
  'Content-Type': contentType,
  'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
  'Access-Control-Allow-Origin': '*',
  'X-Licence': LICENCE,
  ...(filename === undefined ? {} : { 'Content-Disposition': `inline; filename="${filename}"` }),
})

const notFound = (): Response =>
  new Response(
    JSON.stringify({
      error: 'Aquest conjunt no existeix.',
      disponibles: DATASETS.map((dataset) => dataset.key),
      manifest: '/dades/index.json',
    }),
    {
      status: 404,
      // Un 404 no s'ha de quedar a la memòria cau: el conjunt pot aparèixer.
      headers: { ...headers('application/json; charset=utf-8'), 'Cache-Control': 'no-store' },
    },
  )

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ fitxer: string }> },
): Promise<Response> {
  const { fitxer } = await params

  const dot = fitxer.lastIndexOf('.')
  if (dot < 1) return notFound()
  const key = fitxer.slice(0, dot)
  const format = fitxer.slice(dot + 1)

  if (key === 'index' && format === 'json') {
    return new Response(
      JSON.stringify(
        {
          nom: 'Identitat.digital — dades obertes',
          llicencia: LICENCE,
          llicenciaUrl: 'https://creativecommons.org/licenses/by-sa/4.0/deed.ca',
          atribucio: ATTRIBUTION,
          documentacio: 'https://identitat.digital/dades',
          metodologia: 'https://identitat.digital/metodologia',
          excepcions:
            'El catàleg de filtracions prové de Have I Been Pwned (CC BY 4.0). Els logotips i les marques no entren en cap de les dues llicències.',
          conjunts: DATASETS.map((dataset) => ({
            clau: dataset.key,
            titol: dataset.title,
            unitat: dataset.unit,
            descripcio: dataset.description,
            json: `/dades/${dataset.key}.json`,
            csv: `/dades/${dataset.key}.csv`,
            columnes: dataset.columns,
          })),
        },
        null,
        2,
      ),
      { status: 200, headers: headers('application/json; charset=utf-8') },
    )
  }

  const dataset = datasetByKey(key)
  if (dataset === undefined) return notFound()
  if (format !== 'json' && format !== 'csv') return notFound()

  const payload = await getPayload({ config })
  const rows = dataset.build(await loadExportInput(payload))

  if (format === 'csv') {
    const columns = dataset.columns.map((column) => column.name)
    return new Response(toCsv(columns, rows), {
      status: 200,
      headers: headers('text/csv; charset=utf-8', `${dataset.key}.csv`),
    })
  }

  return new Response(
    JSON.stringify(
      {
        conjunt: dataset.key,
        titol: dataset.title,
        unitat: dataset.unit,
        generat: new Date().toISOString(),
        llicencia: LICENCE,
        atribucio: ATTRIBUTION,
        columnes: dataset.columns,
        files: rows.length,
        dades: rows,
      },
      null,
      2,
    ),
    { status: 200, headers: headers('application/json; charset=utf-8', `${dataset.key}.json`) },
  )
}
