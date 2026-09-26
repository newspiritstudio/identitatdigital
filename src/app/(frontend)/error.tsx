'use client'

import Link from 'next/link'

/*
 * Error inesperat en renderitzar una pàgina (base de dades caiguda, dades
 * malmeses). En producció `error.message` no porta cap detall intern; el
 * `digest` és el que permet trobar l'error als registres del servidor.
 */
export default function PageError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    <div className="content-wrapper">
      <h1>Aquesta pàgina no s’ha pogut carregar</h1>
      <p className="lede">
        L’error és nostre. Torna-ho a provar d’aquí a una estona o ves a la{' '}
        <Link href="/">portada</Link>.
      </p>
      <p>
        <button type="button" onClick={() => retry()}>
          Torna-ho a provar
        </button>
      </p>
      {error.digest ? <p className="meta">Referència de l’error: {error.digest}</p> : null}
    </div>
  )
}
