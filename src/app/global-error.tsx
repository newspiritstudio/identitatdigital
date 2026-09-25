'use client'

/*
 * Últim recurs: només es veu si falla el layout mateix. Porta el seu propi
 * document i no carrega els estils del lloc, per no dependre de res que pugui
 * haver fallat.
 */
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string }
  retry: () => void
}) {
  return (
    <html lang="ca">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: '3rem auto', maxWidth: '40rem', padding: '0 1rem' }}>
        <title>Error · identitat.digital</title>
        <h1>identitat.digital no s’ha pogut carregar</h1>
        <p>És un error nostre, no teu. Torna-ho a provar d’aquí a una estona.</p>
        <p>
          <button type="button" onClick={() => retry()}>
            Torna-ho a provar
          </button>
        </p>
        {error.digest ? <p>Referència de l’error: {error.digest}</p> : null}
      </body>
    </html>
  )
}
