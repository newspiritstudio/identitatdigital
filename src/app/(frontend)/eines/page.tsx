import Link from 'next/link'
import type { Metadata } from 'next'

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
      <div className="text-page">
        <h1>Eines</h1>
        <p className="lede">
          Per passar de saber què fan amb les teves dades a fer-hi alguna cosa. Totes calculen dins
          del teu navegador: ni els serveis que triïs, ni les contrasenyes, ni els fitxers que
          examinis surten del teu dispositiu.
        </p>

        <ToolsStatus />

        <div className="grid tools-grid">
          <article className="card tool-card" data-tool="diagnostic">
            <h2>
              <Link href="/eines/diagnostic">Diagnòstic d’identitat digital</Link>
            </h2>
            <p>
              Marca els serveis que fas servir i obtén el teu pla d’acció: què has d’activar, què has
              de desactivar i on, amb l’enllaç oficial de cada pas. A més, el mapa de risc de cada
              servei, les seves filtracions conegudes i quines empreses acumulen les teves dades.
            </p>
            <p className="meta">Es pot anar marcant, es desa al dispositiu i es descarrega.</p>
          </article>

          <article className="card tool-card" data-tool="credencials">
            <h2>
              <Link href="/eines/credencials">Filtracions i contrasenyes</Link>
            </h2>
            <p>
              Mira en quines filtracions surt la teva adreça i què s’hi va exposar, audita les
              contrasenyes que fas servir (filtrades, repetides o previsibles) i genera’n de noves.
              Inclou la guia per triar un gestor de contrasenyes.
            </p>
            <p className="meta">Cap contrasenya no surt del dispositiu.</p>
          </article>

          <article className="card tool-card" data-tool="metadades">
            <h2>
              <Link href="/eines/metadades">Metadades de fotos i documents</Link>
            </h2>
            <p>
              Abans de publicar o enviar una foto o un document, mira què diu de tu sense que es
              vegi: on es va fer, amb quin aparell, qui l’ha escrit. I descarrega’n una còpia neta.
            </p>
            <p className="meta">Els fitxers no es pugen enlloc.</p>
          </article>

          <article className="card tool-card" data-tool="comparador">
            <h2>
              <Link href="/eines/comparador">Comparador i alternatives</Link>
            </h2>
            <p>
              Posa dues o tres aplicacions de la mateixa categoria una al costat de l’altra,
              indicador per indicador, i mira què guanyaries canviant.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
