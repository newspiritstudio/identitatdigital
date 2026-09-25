import type { FactStatus, MfaMethod } from '../diagnostic/types'

/**
 * Tipus de l'eina de credencials.
 *
 * El servidor envia al navegador un índex petit per lligar el resultat de
 * XposedOrNot amb el directori: quines fitxes corresponen a cada filtració (pel
 * nom al catàleg de HIBP o pel domini), com es protegeix cada servei i com es
 * diuen en català els tipus de dada. El creuament es fa al navegador, que és
 * l'únic lloc on hi ha el resultat.
 */

export interface CredApp {
  slug: string
  name: string
  company: string
  overall: number | null
  mfa: { status: FactStatus; methods: MfaMethod[]; url: string | null }
  /** On es gestiona la seguretat del compte, si la fitxa ho documenta. */
  securityUrl: string | null
  deletion: { url: string | null; possible: FactStatus }
}

export interface CredDataType {
  name: string
  sensitivity: number
  special: boolean
}

export interface CredIndex {
  apps: CredApp[]
  /** Nom de filtració del catàleg (en minúscules) → fitxes lligades. */
  byBreachName: Record<string, number[]>
  /** Domini registrable → fitxes amb aquell lloc web. */
  byDomain: Record<string, number[]>
  /** Tipus de dada del projecte per slug, només els que surten al vocabulari de filtracions. */
  dataTypes: Record<string, CredDataType>
  /** Fitxes d'aplicacions d'autenticació (segon factor) del directori. */
  authenticators: { slug: string; name: string; overall: number | null }[]
}
