import type { Metadata } from 'next'
import Link from 'next/link'

import { getClient } from '../../lib'
import Comparador from './Comparador'
import { buildComparatorSnapshot, resolveSelection } from './snapshot'

/**
 * Comparador d'aplicacions i cercador d'alternatives.
 *
 * La pàgina és un component de servidor que fa una sola cosa: llegir el corpus,
 * preparar-ne una instantània mínima i serialitzable i passar-la al navegador.
 * A partir d'aquí no hi torna a haver cap petició: triar categoria, triar
 * fitxes, amagar els indicadors coincidents i obrir l'evidència són operacions
 * locals. El servidor no arriba a saber què compara ningú.
 *
 * L'única excepció és deliberada i és el que fa útil l'eina: la selecció també
 * viatja per l'URL (`?a=whatsapp&b=signal`). Serveix per compartir una
 * comparació amb algú altre, que és exactament el que la gent voldrà fer amb
 * això, i per això s'escriu i es llegeix explícitament en lloc d'amagar-se en
 * un estat intern.
 *
 * És dinàmica perquè depèn del corpus publicat i dels paràmetres de consulta:
 * una versió estàtica quedaria congelada a la primera compilació.
 */
export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Comparador i alternatives' }

export default async function ComparadorPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await searchParams
  const payload = await getClient()
  const snapshot = await buildComparatorSnapshot(payload)
  const initial = resolveSelection(snapshot, params)

  return (
    <>
      <h1>Comparador i alternatives</h1>
      <p className="lede">
        Posa dues o tres fitxes de la mateixa categoria una al costat de l’altra, indicador per
        indicador, i mira què es guanya i què es perd canviant de servei.
      </p>

      <p className="meta">
        La comparació es fa dins del teu navegador a partir de dades ja publicades: no s’envia ni es
        desa res. L’adreça de la pàgina recull la selecció, de manera que pots copiar l’enllaç i
        ensenyar la comparació a qui vulguis.{' '}
        <Link href="/metodologia">Com es calculen els indicadors</Link>.
      </p>

      <Comparador snapshot={snapshot} initial={initial} />
    </>
  )
}
