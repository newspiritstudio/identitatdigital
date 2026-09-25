import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Eines' }

/**
 * Índex de les eines pràctiques.
 *
 * El càlcul passa al navegador i no es desa res. Cada pàgina explica com
 * comprovar-ho.
 */
export default function ToolsPage() {
  return (
    <div className="content-wrapper">
      <div className="text-page">
      <h1>Eines</h1>
      <p className="lede">
        Eines per passar de saber què fan amb les teves dades a fer-hi alguna cosa. Les que calculen
        ho fan dins del navegador: ni les contrasenyes, ni les aplicacions que triïs, ni cap resultat
        surten del teu dispositiu ni es desen enlloc.
      </p>

      <div className="grid">
        <article className="card">
          <h2>
            <Link href="/eines/contrasenyes">Contrasenyes</Link>
          </h2>
          <p>
            Genera contrasenyes i frases de pas amb entropia real, i comprova si una contrasenya ja
            ha aparegut en alguna filtració coneguda sense arribar a enviar-la enlloc.
          </p>
        </article>

        <article className="card">
          <h2>
            <Link href="/eines/exposicio">Exposició personal</Link>
          </h2>
          <p>
            Tria les aplicacions que fas servir i mira quines dades teves circulen, quantes empreses
            hi accedeixen i quins grups empresarials n’acumulen més.
          </p>
        </article>

        <article className="card">
          <h2>
            <Link href="/eines/gestors">Gestors de contrasenyes</Link>
          </h2>
          <p>
            Què fa realment un magatzem de contrasenyes, quins vuit criteris el fan bo i com es tria,
            amb el mateix vocabulari amb què el directori analitza qualsevol altre servei.
          </p>
        </article>

        <article className="card">
          <h2>
            <Link href="/eines/comparador">Comparador i alternatives</Link>
          </h2>
          <p>
            Posa dues o tres aplicacions de la mateixa categoria una al costat de l’altra, indicador
            per indicador, i mira què guanyaries canviant.
          </p>
        </article>
      </div>
    </div>
    </div>
  )
}
