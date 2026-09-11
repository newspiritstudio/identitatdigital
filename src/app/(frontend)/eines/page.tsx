import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Eines' }

/**
 * Índex de les eines pràctiques.
 *
 * La regla comuna a totes: el càlcul passa al navegador i no es desa res. Una
 * eina sobre privadesa que recollís dades per funcionar seria una contradicció,
 * i ho diem a cada pàgina perquè es pugui comprovar, no perquè ens creguin.
 */
export default function ToolsPage() {
  return (
    <>
      <h1>Eines</h1>
      <p className="lede">
        Tres eines per passar de saber què fan amb les teves dades a fer-hi alguna cosa. Totes
        funcionen dins del navegador: ni les contrasenyes, ni les aplicacions que triïs, ni cap
        resultat surten del teu dispositiu ni es desen enlloc.
      </p>

      <div className="grid">
        <article className="card">
          <h3>
            <Link href="/eines/contrasenyes">Contrasenyes</Link>
          </h3>
          <p>
            Genera contrasenyes i frases de pas amb entropia real, i comprova si una contrasenya ja
            ha aparegut en alguna filtració coneguda sense arribar a enviar-la enlloc.
          </p>
        </article>

        <article className="card">
          <h3>
            <Link href="/eines/exposicio">Exposició personal</Link>
          </h3>
          <p>
            Tria les aplicacions que fas servir i mira quines dades teves circulen, quantes empreses
            hi accedeixen i quins grups empresarials n’acumulen més.
          </p>
        </article>

        <article className="card">
          <h3>
            <Link href="/eines/comparador">Comparador i alternatives</Link>
          </h3>
          <p>
            Posa dues o tres aplicacions de la mateixa categoria una al costat de l’altra, indicador
            per indicador, i mira què guanyaries canviant.
          </p>
        </article>
      </div>
    </>
  )
}
