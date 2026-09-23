import type { AppSeed, CompanySeed, IncidentSeed, SourceSeed } from '../types'

/**
 * Un lot de la segona onada. Cada lot és autònom: porta les fonts, les
 * empreses i els incidents que necessiten les seves fitxes, i els
 * identificadors de l'App Store per baixar-ne la icona. Així es poden
 * documentar en paral·lel sense trepitjar-se.
 */
export type SeedLot = {
  companies: CompanySeed[]
  sources: SourceSeed[]
  apps: AppSeed[]
  incidents: IncidentSeed[]
  storeIds: Record<string, string>
}
