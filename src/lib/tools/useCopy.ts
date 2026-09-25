'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'

/**
 * Copiar al porta-retalls amb confirmació llegible.
 *
 * `navigator.clipboard` no hi és sempre: cal un context segur i, en alguns
 * navegadors, permís. Si falla hi ha la reserva de sempre (una àrea de text
 * amagada i `execCommand`), i si també falla ho diem clarament. El que no pot
 * passar mai és que algú premi «Copia» i es quedi sense saber si s'ha copiat.
 */
export const useCopy = (success = 'Copiada al porta-retalls.') => {
  const [message, setMessage] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )

  const announce = useCallback((text: string) => {
    setMessage(text)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setMessage(''), 6000)
  }, [])

  const copy = useCallback(
    async (value: string) => {
      if (!value) return
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value)
          announce(success)
          return
        }
      } catch {
        // Provem la reserva.
      }
      try {
        const area = document.createElement('textarea')
        area.value = value
        area.setAttribute('readonly', '')
        area.style.position = 'fixed'
        area.style.opacity = '0'
        document.body.appendChild(area)
        area.select()
        const copied = document.execCommand('copy')
        document.body.removeChild(area)
        announce(copied ? success : 'No s’ha pogut copiar: selecciona-la i copia-la a mà.')
      } catch {
        announce('No s’ha pogut copiar: selecciona-la i copia-la a mà.')
      }
    },
    [announce, success],
  )

  return { message, copy }
}

/** Desa un text com a fitxer, sense passar per cap servidor. */
export const downloadText = (filename: string, content: string, type = 'text/markdown') => {
  const blob = new Blob([content], { type: `${type};charset=utf-8` })
  downloadBlob(filename, blob)
}

export const downloadBlob = (filename: string, blob: Blob) => {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.rel = 'noopener'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  // Es revoca després que el navegador hagi començat la descàrrega.
  setTimeout(() => URL.revokeObjectURL(url), 10_000)
}

const neverChanges = () => () => {}

/**
 * Cert només quan el component ja s'executa al navegador i ha acabat la
 * hidratació. El primer dibuix ha de coincidir amb el del servidor, que no pot
 * saber què hi ha desat al dispositiu.
 */
export const useHydrated = (): boolean =>
  useSyncExternalStore(
    neverChanges,
    () => true,
    () => false,
  )
