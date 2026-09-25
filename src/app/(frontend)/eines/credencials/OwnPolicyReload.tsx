'use client'

import { useEffect } from 'react'

/**
 * La consulta a XposedOrNot necessita la política de seguretat pròpia
 * d'aquesta pàgina (next.config.mjs), que només obre `connect-src` aquí. Però
 * la política la fixa el document que el navegador ha carregat, i quan s'hi
 * arriba amb un enllaç intern el document continua sent el de la pàgina
 * anterior, amb `connect-src 'self'`: la consulta quedava bloquejada. En aquest
 * cas es torna a carregar l'adreça de debò, un sol cop i sense afegir cap
 * entrada a l'historial.
 */
export default function OwnPolicyReload() {
  useEffect(() => {
    const [entry] = performance.getEntriesByType('navigation')
    if (!entry) return
    const loadedPath = new URL(entry.name).pathname
    if (loadedPath !== window.location.pathname) window.location.replace(window.location.href)
  }, [])
  return null
}
