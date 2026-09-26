/**
 * Exporta el dataset editorial a JSON, un fitxer per entitat, per al
 * repositori identitatdigital-data.
 *
 *   pnpm export-data ../identitatdigital-data
 *
 * Les carpetes d'entitats del destí es buiden i es tornen a escriure, de
 * manera que una fitxa esborrada aquí també desapareix de l'exportació.
 */
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

import { apps as baseApps } from '../src/seed/apps'
import { companies as baseCompanies } from '../src/seed/companies'
import { incidents as baseIncidents } from '../src/seed/incidents'
import { methodologyDoc } from '../src/seed/methodology'
import { wave2 } from '../src/seed/onada2'
import { sources as baseSources } from '../src/seed/sources'
import { appStoreBundleIds } from '../src/seed/store-ids'
import { categories, dataTypes, purposes } from '../src/seed/taxonomies'

const target = process.argv[2]
if (!target) throw new Error('Cal indicar la carpeta de destí: pnpm export-data <carpeta>')
const root = resolve(target)

const json = (value: unknown) => `${JSON.stringify(value, null, 2)}\n`

const writeAll = (dir: string, items: { slug: string }[]) => {
  const path = join(root, dir)
  rmSync(path, { recursive: true, force: true })
  mkdirSync(path, { recursive: true })
  for (const item of items) writeFileSync(join(path, `${item.slug}.json`), json(item))
  return items.length
}

const bySlug = <T extends { slug: string }>(items: T[]) =>
  [...items].sort((a, b) => a.slug.localeCompare(b.slug))

const apps = bySlug([...baseApps, ...wave2.apps]).map((app) => ({
  ...app,
  appStoreBundleId: appStoreBundleIds[app.slug],
}))

const counts = {
  aplicacions: writeAll('aplicacions', apps),
  empreses: writeAll('empreses', bySlug([...baseCompanies, ...wave2.companies])),
  fonts: writeAll('fonts', bySlug([...baseSources, ...wave2.sources])),
  incidents: writeAll('incidents', bySlug([...baseIncidents, ...wave2.incidents])),
}

mkdirSync(join(root, 'taxonomies'), { recursive: true })
writeFileSync(join(root, 'taxonomies', 'categories.json'), json(categories))
writeFileSync(join(root, 'taxonomies', 'tipus-de-dades.json'), json(dataTypes))
writeFileSync(join(root, 'taxonomies', 'finalitats.json'), json(purposes))
writeFileSync(join(root, 'metodologia.json'), json(methodologyDoc))

console.log(
  `Exportat a ${root}: ${Object.entries(counts)
    .map(([name, n]) => `${n} ${name}`)
    .join(', ')}, ${categories.length} categories, ${dataTypes.length} tipus de dades, ${purposes.length} finalitats.`,
)
