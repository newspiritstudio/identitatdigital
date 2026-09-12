import Link from 'next/link'
import type { Metadata } from 'next'

import { loadCorpus } from '@/lib/analysis'

import { getClient } from '../../lib'
import ExposureTool from './ExposureTool'
import { buildSnapshot } from './snapshot'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Calculadora d’exposició personal' }

/**
 * Calculadora d'exposició personal.
 *
 * Repartiment de feina entre servidor i navegador:
 *
 *  - Aquí, al servidor, es carrega el corpus una sola vegada i se'n construeix
 *    una instantània retallada. És la mateixa per a tothom i no depèn de res del
 *    que faci la persona que visita la pàgina.
 *  - Al navegador, el component de client fa tot el càlcul. La tria d'aplicacions
 *    no s'envia enlloc, no es desa a cap servidor i no genera cap petició.
 *
 * La instantània es retalla al servidor (vegeu `snapshot.ts`) perquè el
 * navegador no rebi camps que l'eina no fa servir.
 */
export default async function ExposurePage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)
  const snapshot = buildSnapshot(corpus)

  return (
    <>
      <h1>Calculadora d’exposició personal</h1>
      <p className="lede">
        Tria les aplicacions que fas servir i mira què en surt del conjunt: quines dades teves
        circulen, quantes empreses hi tenen accés, quins grups empresarials t’acumulen i on tens el
        punt més feble. No hi ha cap nota ni cap veredicte sobre tu; hi ha recomptes, cadascun amb
        el seu denominador i amb l’enllaç a la fitxa d’on surt.
      </p>

      <h2>Com pots comprovar que no es desa res</h2>
      <p>
        Tot el càlcul passa dins del teu navegador. Ni la selecció ni cap resultat s’envien a cap
        servidor, i mentre fas servir l’eina no es fa cap petició de xarxa. No cal creure’ns-ho:
      </p>
      <ol>
        <li>
          Obre les eines de desenvolupament del navegador i ves a la pestanya <em>Xarxa</em>.
        </li>
        <li>Marca i desmarca aplicacions de la llista de sota.</li>
        <li>
          No hi apareixerà cap petició nova. L’única càrrega de la pàgina és la inicial, que porta
          el directori ja calculat.
        </li>
      </ol>
      <p>
        Si tornes a visitar la pàgina, la tria hi continua perquè es desa al teu dispositiu, a
        l’emmagatzematge local del navegador i no en una galeta: una galeta viatjaria amb cada
        petició al servidor i aquesta informació no hi ha d’arribar mai. El botó «Esborra la tria»
        l’elimina, i esborrar les dades del lloc des del navegador també. Si tens l’emmagatzematge
        desactivat, l’eina funciona igual: només que no recordarà res.
      </p>
      <p className="meta">
        Les dades de la pàgina surten de les {snapshot.publishedApps} fitxes publicades al
        directori. El que no hi consta documentat surt marcat com a desconegut i no compta com a
        negatiu: la diferència entre «hem comprovat que no» i «no ho hem mirat» és tot el projecte.
        Els criteris de puntuació són els de la{' '}
        <Link href="/metodologia">metodologia publicada</Link>.
      </p>

      <ExposureTool snapshot={snapshot} />
    </>
  )
}
