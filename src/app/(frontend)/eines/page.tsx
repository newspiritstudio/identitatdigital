import Link from 'next/link'
import type { Metadata } from 'next'

import './eines.css'
import ToolsStatus from './ToolsStatus'

export const metadata: Metadata = {
  title: 'Eines',
  description:
    'Diagnòstic d’identitat digital, filtracions i contrasenyes, metadades de fotos i documents i comparador d’aplicacions. Tot es calcula al teu navegador.',
}

/**
 * Índex de les eines.
 *
 * Poques i encadenades: el diagnòstic és la porta d'entrada i envia a les
 * altres quan el pla ho demana (credencials per a les contrasenyes, comparador
 * per a les alternatives). Cada pàgina explica com comprovar què surt del
 * dispositiu.
 */
export default function ToolsPage() {
  return (
    <div className="content-wrapper">
      <div className="text-page tool-page">
        <h1>Eines</h1>
        <p className="lede">
          Per passar de saber què fan amb les teves dades a fer-hi alguna cosa. Tot es calcula al
          teu navegador: res del que hi posis no surt del dispositiu.
        </p>

        <ToolsStatus />

        <ul className="plain tools-grid">
          {TOOLS.map((tool) => (
            <li key={tool.slug} className="tool-card" data-tool={tool.slug}>
              <p className="tool-card-eyebrow">{tool.eyebrow}</p>
              <h2>
                <Link href={`/eines/${tool.slug}`}>{tool.title}</Link>
              </h2>
              <p>{tool.text}</p>
              <p className="tool-card-foot">
                <span className="meta">{tool.note}</span>
                <span className="tool-card-cta" aria-hidden="true">
                  Obre-la →
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const TOOLS = [
  {
    slug: 'diagnostic',
    eyebrow: 'Comença aquí',
    title: 'Diagnòstic d’identitat digital',
    text: 'Marca els serveis que fas servir i obtén un pla d’acció personal, amb l’enllaç oficial de cada pas.',
    note: 'Es desa al dispositiu i es descarrega.',
  },
  {
    slug: 'credencials',
    eyebrow: 'Comptes',
    title: 'Filtracions i contrasenyes',
    text: 'En quines filtracions surt la teva adreça, quines contrasenyes ja circulen o repeteixes, i un generador.',
    note: 'Cap contrasenya surt del dispositiu.',
  },
  {
    slug: 'metadades',
    eyebrow: 'Fitxers',
    title: 'Metadades de fotos i documents',
    text: 'Què diu de tu una foto o un document abans d’enviar-lo, i una còpia neta per descarregar.',
    note: 'Els fitxers no es pugen enlloc.',
  },
  {
    slug: 'comparador',
    eyebrow: 'Alternatives',
    title: 'Comparador d’aplicacions',
    text: 'Dues o tres aplicacions de la mateixa categoria, indicador per indicador.',
    note: 'Dades del directori.',
  },
]
