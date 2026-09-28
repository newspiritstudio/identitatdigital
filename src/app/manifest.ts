import type { MetadataRoute } from 'next'

/**
 * Manifest del web. Permet afegir-lo a la pantalla d'inici amb el nom, les
 * icones i els colors de marca; no hi ha treballador de servei ni mode fora de
 * línia, perquè el contingut ha de ser sempre el publicat.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: 'identitat.digital',
    short_name: 'identitat',
    description:
      'Base de coneixement sobre privadesa, identitat digital i seguretat en línia. Cada afirmació, amb la seva font.',
    lang: 'ca',
    dir: 'ltr',
    start_url: '/aplicacions',
    scope: '/',
    display: 'standalone',
    background_color: '#f1f1f1',
    theme_color: '#002730',
    categories: ['education', 'reference', 'security'],
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      { src: '/icons/icon-192.png', type: 'image/png', sizes: '192x192', purpose: 'any' },
      { src: '/icons/icon-512.png', type: 'image/png', sizes: '512x512', purpose: 'any' },
      {
        src: '/icons/icon-maskable-512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
    ],
  }
}
