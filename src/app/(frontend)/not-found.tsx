import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Pàgina no trobada', robots: { index: false } }

export default function NotFound() {
  return (
    <div className="content-wrapper">
      <h1>No hem trobat aquesta pàgina</h1>
      <p className="lede">
        Potser l’adreça té un error, o la fitxa ha canviat de nom. Pots tornar a la{' '}
        <Link href="/">portada</Link> o buscar-la entre les <Link href="/aplicacions">aplicacions</Link>{' '}
        i les <Link href="/empreses">empreses</Link>.
      </p>
    </div>
  )
}
