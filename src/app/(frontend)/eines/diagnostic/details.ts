'use client'

import { useEffect, useSyncExternalStore } from 'react'

import type { DetailsBundle } from './types'

/**
 * Càrrega dels textos del pla d'acció (vegeu `detalls/route.ts`).
 *
 * Una sola petició per pàgina, sense paràmetres, que es fa només quan hi ha
 * resultats a ensenyar. Si falla, el pla funciona igual: les accions surten
 * sense el text editorial i la pàgina diu que falta.
 */

export type DetailsState =
  | { status: 'idle' | 'loading'; data: null }
  | { status: 'ready'; data: DetailsBundle }
  | { status: 'error'; data: null }

let state: DetailsState = { status: 'idle', data: null }
const listeners = new Set<() => void>()
const IDLE: DetailsState = { status: 'idle', data: null }

const set = (next: DetailsState) => {
  state = next
  for (const listener of listeners) listener()
}

const load = () => {
  if (state.status === 'loading' || state.status === 'ready') return
  set({ status: 'loading', data: null })
  fetch('/eines/diagnostic/detalls', { headers: { Accept: 'application/json' } })
    .then(async (response) => {
      if (!response.ok) throw new Error(String(response.status))
      const data: unknown = await response.json()
      if (data === null || typeof data !== 'object' || Array.isArray(data)) throw new Error('forma')
      set({ status: 'ready', data: data as DetailsBundle })
    })
    .catch(() => set({ status: 'error', data: null }))
}

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

/** Estat de la càrrega. `enabled` la dispara la primera vegada que és cert. */
export const useDetails = (enabled: boolean): DetailsState & { retry: () => void } => {
  const current = useSyncExternalStore(
    subscribe,
    () => state,
    () => IDLE,
  )
  useEffect(() => {
    if (enabled) load()
  }, [enabled])
  return { ...current, retry: load } as DetailsState & { retry: () => void }
}
