'use client'

import { useCallback, useSyncExternalStore } from 'react'

/**
 * Memòria compartida de les eines, dins del dispositiu.
 *
 * Les eines es parlen entre elles —el diagnòstic sap quines aplicacions fas
 * servir i la revisió de credencials ho aprofita per dir-te «aquesta filtració
 * és d'un servei que tens»— però cap d'aquestes dades no surt del navegador.
 * Viuen a `localStorage`, que no viatja amb les peticions com faria una galeta.
 *
 * Cada magatzem:
 *
 *  - valida el que llegeix, perquè `localStorage` és d'escriptura lliure per a
 *    qualsevol extensió o per a una versió antiga del lloc;
 *  - retorna sempre la mateixa referència mentre el contingut no canvia, que és
 *    el que demana `useSyncExternalStore` per no entrar en bucle;
 *  - avisa les altres pestanyes (esdeveniment `storage`) i els altres
 *    components de la mateixa pestanya (subscriptors propis);
 *  - funciona igual, però sense memòria, si l'emmagatzematge està bloquejat.
 *
 * Al servidor i durant la hidratació torna sempre el valor inicial, de manera
 * que el primer dibuix del client coincideix amb l'HTML del servidor.
 */

export type LocalStore<T> = {
  key: string
  get: () => T
  set: (next: T | ((current: T) => T)) => void
  clear: () => void
  subscribe: (listener: () => void) => () => void
  initial: T
}

export function createLocalStore<T>(
  key: string,
  parse: (raw: unknown) => T | null,
  initial: T,
  isEmpty: (value: T) => boolean = () => false,
): LocalStore<T> {
  const listeners = new Set<() => void>()
  let cachedRaw: string | null | undefined
  let cachedValue: T = initial
  /* Si l'emmagatzematge no funciona, el valor viu aquí mentre duri la pàgina. */
  let memory: T | null = null

  const readRaw = (): string | null => {
    try {
      return window.localStorage.getItem(key)
    } catch {
      return null
    }
  }

  const get = (): T => {
    if (typeof window === 'undefined') return initial
    if (memory !== null) return memory
    const raw = readRaw()
    if (raw === cachedRaw) return cachedValue
    cachedRaw = raw
    if (raw === null) {
      cachedValue = initial
      return cachedValue
    }
    try {
      cachedValue = parse(JSON.parse(raw)) ?? initial
    } catch {
      cachedValue = initial
    }
    return cachedValue
  }

  const emit = () => {
    for (const listener of listeners) listener()
  }

  const set = (next: T | ((current: T) => T)) => {
    const value = typeof next === 'function' ? (next as (current: T) => T)(get()) : next
    try {
      if (isEmpty(value)) window.localStorage.removeItem(key)
      else window.localStorage.setItem(key, JSON.stringify(value))
      memory = null
    } catch {
      memory = value
    }
    emit()
  }

  const clear = () => {
    try {
      window.localStorage.removeItem(key)
    } catch {
      /* Res a esborrar. */
    }
    memory = null
    emit()
  }

  const subscribe = (listener: () => void) => {
    listeners.add(listener)
    const onStorage = (event: StorageEvent) => {
      if (event.key === null || event.key === key) listener()
    }
    window.addEventListener('storage', onStorage)
    return () => {
      listeners.delete(listener)
      window.removeEventListener('storage', onStorage)
    }
  }

  return { key, get, set, clear, subscribe, initial }
}

/** Valor d'un magatzem com a estat de React, segur durant la hidratació. */
export function useLocalStore<T>(store: LocalStore<T>): [T, LocalStore<T>['set']] {
  const value = useSyncExternalStore(store.subscribe, store.get, () => store.initial)
  const set = useCallback<LocalStore<T>['set']>((next) => store.set(next), [store])
  return [value, set]
}

/* ─────────────────────────── magatzems de les eines ──────────────────────── */

const stringList = (raw: unknown): string[] | null =>
  Array.isArray(raw)
    ? [...new Set(raw.filter((entry): entry is string => typeof entry === 'string'))].slice(0, 1000)
    : null

const NO_STRINGS: string[] = []

/**
 * Aplicacions que la persona diu que fa servir.
 *
 * La clau és la de la primera versió de la calculadora d'exposició, perquè qui
 * ja hi havia fet la tria no la perdi.
 */
export const selectionStore = createLocalStore<string[]>(
  'identitat.exposicio.seleccio',
  stringList,
  NO_STRINGS,
  (value) => value.length === 0,
)

export type PlanState = {
  /** Identificadors d'accions del pla marcades com a fetes. */
  done: string[]
  /** Aplicacions que la persona ja no fa servir i vol esborrar. */
  leaving: string[]
}

const EMPTY_PLAN: PlanState = { done: [], leaving: [] }

export const planStore = createLocalStore<PlanState>(
  'identitat.diagnostic.pla',
  (raw) => {
    if (raw === null || typeof raw !== 'object') return null
    const record = raw as Record<string, unknown>
    return { done: stringList(record.done) ?? [], leaving: stringList(record.leaving) ?? [] }
  },
  EMPTY_PLAN,
  (value) => value.done.length === 0 && value.leaving.length === 0,
)
