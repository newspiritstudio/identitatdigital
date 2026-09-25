import Link from 'next/link'
import type { Metadata } from 'next'

import { loadCorpus } from '@/lib/analysis'

import { getClient } from '../../lib'
import DiagnosticTool from './DiagnosticTool'
import { buildSnapshot } from './snapshot'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Diagnòstic d’identitat digital',
  description:
    'Tria els serveis que fas servir i obtén un pla d’acció personal, un mapa de risc, les filtracions dels teus serveis i quines empreses acumulen les teves dades. Tot es calcula al teu navegador.',
}

/**
 * Diagnòstic d'identitat digital.
 *
 * Evolució de la calculadora d'exposició. El repartiment de feina és el mateix:
 *
 *  - Al servidor es carrega el corpus i se'n construeix una instantània
 *    retallada, igual per a tothom (fitxes, filtracions del catàleg de HIBP ja
 *    lligades a cada fitxa, incidents i controls amb les adreces on s'actua).
 *  - Al navegador es fa tot el càlcul: exposició, pla d'acció, mapa de risc i
 *    informe. La tria no s'envia enlloc.
 */
export default async function DiagnosticPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)
  const snapshot = buildSnapshot(corpus)

  return (
    <div className="content-wrapper">
      <div className="text-page">
        <p className="meta">
          <Link href="/eines">Eines</Link>
        </p>
        <h1>Diagnòstic d’identitat digital</h1>
        <p className="lede">
          Marca els serveis que fas servir i en dos minuts tindràs el que cap fitxa no et pot dir
          tota sola: quines dades teves circulen i qui les acumula, quins dels teus serveis s’han
          filtrat, on tens els punts febles i un pla d’acció concret, amb l’enllaç on es fa cada
          pas, que pots anar marcant a mesura que avances.
        </p>

        <DiagnosticTool snapshot={snapshot} />

        <h2 id="privadesa">Com pots comprovar que no es desa res enlloc més</h2>
        <p>
          Tot el càlcul passa dins del teu navegador. La pàgina arriba amb el directori ja preparat
          ({snapshot.publishedApps} fitxes i {snapshot.breaches.length} filtracions del catàleg
          lligables) i, a partir d’aquí, marcar serveis, completar accions o descarregar l’informe no
          genera cap petició de xarxa. Ho pots veure a la pestanya <em>Xarxa</em> de les eines de
          desenvolupament del navegador.
        </p>
        <p>
          La tria i les accions fetes es desen a l’emmagatzematge local del navegador, no en una
          galeta: una galeta viatjaria amb cada petició i aquesta informació no ha d’arribar mai al
          servidor. El botó «Esborra-ho tot d’aquest dispositiu» ho elimina. L’enllaç per compartir
          posa la tria després del signe <code>#</code> de l’adreça, que els navegadors no envien mai
          al servidor.
        </p>
        <p className="meta">
          El que no consta documentat a les fitxes surt marcat com a desconegut i no compta com a
          negatiu. Els criteris de puntuació dels serveis són els de la{' '}
          <Link href="/metodologia">metodologia publicada</Link>; els pesos del pla d’acció estan
          escrits a la mateixa eina.
        </p>
      </div>
    </div>
  )
}
