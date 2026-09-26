import Link from 'next/link'
import type { Metadata } from 'next'

import { analyseCatalan, loadCorpus } from '@/lib/analysis'

import { getClient } from '../../lib'
import { BackToIndex, Bar, KeyNumber, KeyNumbers, Note, Scroller, num, pct } from '../parts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Es pot viure en català?',
  description:
    'Quantes de les aplicacions del directori tenen interfície en català, segons els idiomes que cada empresa declara a la seva fitxa de l’App Store.',
}

const STATUS_TEXT: Record<string, string> = {
  yes: 'Sí',
  partial: 'Parcialment',
  no: 'No',
  unknown: 'No comprovat',
  na: 'No aplica',
}

export default async function CatalanPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)
  const analysis = analyseCatalan(corpus)

  if (analysis.appsConsidered === 0) {
    return (
      <>
        <h1>Es pot viure en català?</h1>
        <p className="unknown">Encara no hi ha cap fitxa publicada.</p>
        <BackToIndex />
      </>
    )
  }

  const despite = analysis.withoutDespiteMany.filter((row) => (row.languages ?? 0) >= 20)
  const maxLanguages = analysis.rows.reduce((max, row) => Math.max(max, row.languages ?? 0), 0)

  return (
    <>
      <h1>Es pot viure en català?</h1>
      <p className="lede">
        De les {num(analysis.checked)} fitxes comprovades, {num(analysis.withCatalan)} es poden fer
        servir amb la interfície en català i {num(analysis.withoutCatalan)} no. La font és la
        mateixa per a totes: la llista d’idiomes d’interfície que cada empresa declara a la seva
        fitxa de l’App Store.
      </p>

      <Note>
        Aquesta dimensió <strong>no entra a cap puntuació</strong> i no mou cap nota. Tenir
        interfície en català no fa una empresa més respectuosa amb les dades. Si sumés, afavoriria
        les plataformes més grans, que tradueixen a seixanta idiomes perquè tenen equips per fer-ho,
        i perjudicaria eines petites i ben fetes per equips de cinc persones. Mesura l’accés i no la
        qualitat, i es publica al costat de la nota com a informació complementària.
      </Note>

      <KeyNumbers>
        <KeyNumber value={pct(analysis.share)} label="de les comprovades, en català" />
        <KeyNumber value={num(analysis.withoutCatalan)} label="fitxes sense català" />
        <KeyNumber
          value={num(analysis.averageLanguagesWithout ?? 0)}
          label="idiomes de mitjana, a les que no el tenen"
        />
        <KeyNumber
          value={num(analysis.averageLanguagesWith ?? 0)}
          label="idiomes de mitjana, a les que sí"
        />
      </KeyNumbers>

      <h2>Capacitat de traducció</h2>
      <p>
        Les fitxes que <strong>no</strong> tenen català tradueixen la interfície a{' '}
        {num(analysis.averageLanguagesWithout ?? 0)} idiomes de mitjana. Les que sí que el tenen, a{' '}
        {num(analysis.averageLanguagesWith ?? 0)}. La falta de mitjans no ho explica: qui tradueix a
        trenta idiomes i no inclou el català ha decidit no incloure’l.
      </p>
      {despite.length > 0 ? (
        <>
          <Scroller label="Fitxes sense català que tot i així tradueixen a vint idiomes o més">
            <table>
              <caption className="visually-hidden">
                Fitxes sense català que tot i així tradueixen a vint idiomes o més
              </caption>
              <thead>
                <tr>
                  <th scope="col">Fitxa</th>
                  <th scope="col">Idiomes d’interfície</th>
                  <th scope="col">Grup</th>
                </tr>
              </thead>
              <tbody>
                {despite.map((row) => (
                  <tr key={row.slug}>
                    <th scope="row">
                      <Link href={`/aplicacions/${row.slug}`}>{row.name}</Link>
                    </th>
                    <td>
                      <Bar value={row.languages ?? 0} total={maxLanguages} unit="idiomes" />
                    </td>
                    <td>{row.groupName ?? '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Scroller>
        </>
      ) : null}

      <h2>Llengua i puntuació</h2>
      <p>
        La puntuació global mitjana de les fitxes amb català és{' '}
        {analysis.averageOverallWith === null ? '—' : num(analysis.averageOverallWith)} i la de les
        que no en tenen és{' '}
        {analysis.averageOverallWithout === null ? '—' : num(analysis.averageOverallWithout)}. La
        diferència no permet treure conclusions: són mostres de deu i quinze fitxes triades per
        difusió, no per llengua. Ho publiquem com a dada, i per aquest motiu la llengua no entra al
        càlcul.
      </p>

      <h2>Per grup empresarial</h2>
      <p>
        La decisió d’incloure el català sovint la pren el grup que publica l’aplicació. Quan un grup
        té diverses fitxes al directori, cal mirar-les juntes.
      </p>
      <Scroller label="Fitxes amb català per empresa o grup del directori">
        <table>
          <caption className="visually-hidden">
            Fitxes amb català per empresa o grup del directori
          </caption>
          <thead>
            <tr>
              <th scope="col">Empresa</th>
              <th scope="col">Fitxes</th>
              <th scope="col">Amb català</th>
            </tr>
          </thead>
          <tbody>
            {analysis.groups.map((group) => (
              <tr key={group.groupName}>
                <th scope="row">{group.groupName}</th>
                <td>{num(group.apps)}</td>
                <td>
                  {num(group.withCatalan)} de {num(group.apps)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>

      <h2>Totes les fitxes</h2>
      <Scroller label="Disponibilitat en català de totes les fitxes del directori">
        <table>
          <caption className="visually-hidden">
            Disponibilitat en català de totes les fitxes del directori
          </caption>
          <thead>
            <tr>
              <th scope="col">Fitxa</th>
              <th scope="col">Interfície en català</th>
              <th scope="col">Idiomes declarats</th>
              <th scope="col">Puntuació global</th>
            </tr>
          </thead>
          <tbody>
            {analysis.rows.map((row) => (
              <tr key={row.slug}>
                <th scope="row">
                  <Link href={`/aplicacions/${row.slug}`}>{row.name}</Link>
                </th>
                <td>{STATUS_TEXT[row.status] ?? row.status}</td>
                <td>{row.languages === null ? '—' : num(row.languages)}</td>
                <td>{row.overall === null ? '—' : num(row.overall)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>

      <h2>Com es comprova</h2>
      <p>
        L’script <code>pnpm import-catalan</code> consulta l’API pública de l’App Store per a cada
        aplicació del directori i en llegeix la llista d’idiomes d’interfície de la versió
        publicada. Desa l’estat, el nombre d’idiomes, la data de comprovació i una font documental
        per fitxa, que és la mateixa pàgina de la botiga. Qualsevol persona ho pot comprovar, i les
        dades es poden descarregar a la pàgina de <Link href="/dades">dades obertes</Link>.
      </p>
      <p>
        Aquesta comprovació <strong>no</strong> diu res de la qualitat de la traducció, de si el web
        també és en català ni de si es pot reclamar en català a l’atenció al client. Cadascuna
        d’aquestes preguntes necessita la seva font, i el que no s’hagi comprovat queda com a
        desconegut.
      </p>

      <BackToIndex />
    </>
  )
}
