'use client'

import { useEffect, useRef, useState } from 'react'

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const nextTheme =
      stored === 'dark' || (!stored && prefersDark)
        ? 'dark'
        : 'light'

    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    document.documentElement.style.colorScheme = nextTheme
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const button = buttonRef.current
    const rect = button?.getBoundingClientRect()

    const originX = rect
      ? rect.left + rect.width / 2
      : window.innerWidth / 2

    const originY = rect
      ? rect.top + rect.height / 2
      : window.innerHeight / 2

    // Store the exact point where the transition should start.
    document.documentElement.style.setProperty(
      '--theme-origin-x',
      `${originX}px`
    )

    document.documentElement.style.setProperty(
      '--theme-origin-y',
      `${originY}px`
    )

    const changeTheme = () => {
      setTheme(nextTheme)
    }

    // Respect reduced motion.
    if (reducedMotion) {
      changeTheme()
      return
    }

    // Fallback for browsers without View Transitions.
    if (!document.startViewTransition) {
      changeTheme()
      return
    }

    document.startViewTransition(changeTheme)
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle"
      aria-label={
        theme === 'dark'
          ? 'Canviar a mode clar'
          : 'Canviar a mode fosc'
      }
      aria-pressed={theme === 'dark'}
      onClick={handleToggle}
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}