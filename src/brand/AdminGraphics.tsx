import React from 'react'

import { ISOTIP_PATHS, ISOTIP_VIEWBOX } from './isotip'

/**
 * Gràfics del panell d'edició: l'isotip a la barra de navegació i l'isotip amb
 * el nom a la pàgina d'entrada. Substitueixen els de sèrie del CMS; els estils
 * són a `src/app/(payload)/custom.scss`.
 */

function Isotip({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={ISOTIP_VIEWBOX}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {ISOTIP_PATHS.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </svg>
  )
}

export function AdminIcon() {
  return (
    <span className="id-brand-icon">
      <Isotip />
      <span className="id-visually-hidden">identitat.digital</span>
    </span>
  )
}

export function AdminLogo() {
  return (
    <span className="id-brand-logo">
      <Isotip className="id-brand-logo__mark" />
      <span className="id-brand-logo__name">
        <strong>identitat</strong>.digital
      </span>
    </span>
  )
}
