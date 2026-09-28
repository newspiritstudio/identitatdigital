'use client'

import { useEffect, useRef, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

/**
 * S'executa abans que el navegador pinti el cos (vegeu el layout), perquè qui
 * ha triat el mode fosc no vegi un instant la pàgina en clar. L'emmagatzematge
 * pot estar bloquejat (navegació privada, galetes desactivades): llavors mana
 * la preferència del sistema.
 */
export const THEME_INIT_SCRIPT = `(function(){var s;try{s=localStorage.getItem('theme')}catch(e){}var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light';var r=document.documentElement;r.setAttribute('data-theme',d);r.style.colorScheme=d})()`

// La font de veritat és l'atribut de <html>: l'escriu l'script inicial i el
// botó, i React només el llegeix.
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}
const getTheme = (): Theme =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
const getServerTheme = (): Theme => 'light'

const applyTheme = (theme: Theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  document.documentElement.style.colorScheme = theme
  try {
    window.localStorage.setItem('theme', theme)
  } catch {
    // Sense emmagatzematge el canvi val per a aquesta pàgina i prou.
  }
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  // Quan React ha de tornar a pintar el document al client (la pàgina 404,
  // un error d'hidratació), refà <html> sense l'atribut que havia posat
  // l'script inicial i la pàgina tornava al mode clar. Es torna a aplicar.
  useEffect(() => {
    if (document.documentElement.hasAttribute('data-theme')) return
    let stored: string | null = null
    try {
      stored = window.localStorage.getItem('theme')
    } catch {
      // Sense emmagatzematge mana la preferència del sistema.
    }
    const dark =
      stored === 'dark' ||
      (stored !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  }, [])

  const handleToggle = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    const rect = buttonRef.current?.getBoundingClientRect()
    const root = document.documentElement

    // Punt exacte on comença la transició.
    root.style.setProperty(
      '--theme-origin-x',
      `${rect ? rect.left + rect.width / 2 : window.innerWidth / 2}px`,
    )
    root.style.setProperty(
      '--theme-origin-y',
      `${rect ? rect.top + rect.height / 2 : window.innerHeight / 2}px`,
    )

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // El canvi es fa directament al DOM, dins la mateixa crida: la View
    // Transition captura l'estat nou sense esperar cap renderització de React.
    if (reducedMotion || !document.startViewTransition) {
      applyTheme(nextTheme)
      return
    }
    const transition = document.startViewTransition(() => applyTheme(nextTheme))
    // Si el navegador salta l'animació (pestanya oculta, una altra transició
    // en curs), `ready` es rebutja però el tema ja s'ha aplicat igualment.
    transition.ready.catch(() => undefined)
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Canvia a mode clar' : 'Canvia a mode fosc'}
      onClick={handleToggle}
    >
      {theme === 'dark' ? '☀️ Clar' : '🌙 Fosc'}
    </button>
  )
}
