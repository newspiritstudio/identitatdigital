import Link from 'next/link'
import type { Metadata } from 'next'

import { DATASETS, loadExportInput } from '@/lib/opendata/datasets'

import { getClient } from '../lib'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dades obertes',
  description:
    'El corpus sencer d’Identitat.digital en JSON i CSV, amb diccionari de dades, sense registre ni clau, amb llicència CC BY-SA 4.0.',
}

const CA = new Intl.NumberFormat('ca-ES')

/**
 * Diccionari de dades i descàrrega.
 *
 * El recompte de files es calcula en el moment de servir la pàgina, executant
 * cada `build()`, perquè no pugui quedar desfasat respecte del que es baixa.
 */
export default async function OpenDataPage() {
  const payload = await getClient()
  const input = await loadExportInput(payload)
  const counts = DATASETS.map((dataset) => ({ dataset, rows: dataset.build(input).length }))
  const total = counts.reduce((sum, entry) => sum + entry.rows, 0)

  return (
    <div className="content-wrapper ">
      <div className="text-page">
      <h1>Dades obertes</h1>
      <p className="lede">
        Tot el que hi ha en aquest lloc es pot descarregar sencer, en JSON i en CSV, sense registre,
        sense clau i sense límit d’ús. Són {CA.format(total)} files repartides en {DATASETS.length}{' '}
        conjunts que es poden creuar entre si.
      </p>

      <p>
        Demanem a les empreses del directori que permetin emportar-se les dades en un format
        reutilitzable, i aquesta pàgina aplica el mateix criteri a les nostres.
      </p>

      <h2>Condicions d’ús</h2>
      <ul>
        <li>
          <strong>Llicència:</strong>{' '}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.ca"
            rel="license noopener noreferrer"
            target="_blank"
          >
            CC BY-SA 4.0
            <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
          </a>
          . Cita l’origen i comparteix igual.
        </li>
        <li>
          <strong>Atribució suggerida:</strong> «Identitat.digital — New Spirit Studio, S.L., CC
          BY-SA 4.0, consultat el [data]». Indica la data, perquè les puntuacions canvien.
        </li>
        <li>
          <strong>Excepcions:</strong> el catàleg de filtracions prové de{' '}
          <a href="https://haveibeenpwned.com" rel="noopener noreferrer" target="_blank">
            Have I Been Pwned
            <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
          </a>{' '}
          amb llicència CC BY 4.0, i els logotips i les marques no entren en cap de les dues
          llicències.
        </li>
        <li>
          <strong>Compromís:</strong> aquestes exportacions no deixaran de publicar-se ni perdran
          camps. Hi ha 90 dies d’avís abans de qualsevol canvi que trenqui el format.
        </li>
      </ul>

      <h2>Com es fa servir</h2>
      <p>
        Cada conjunt té dues adreces fixes, <code>/dades/[conjunt].json</code> i{' '}
        <code>/dades/[conjunt].csv</code>. Hi ha també un manifest llegible per màquines a{' '}
        <a href="/dades/index.json">/dades/index.json</a> amb la llista de conjunts, les columnes i
        les llicències, per si vols automatitzar-ho sense llegir aquesta pàgina.
      </p>
      <p>
        Les respostes porten <code>Access-Control-Allow-Origin: *</code>, de manera que es poden
        llegir directament des d’un quadern o d’una pàgina de tercers. Els CSV són UTF-8 amb marca
        d’ordre de bytes, separador coma i final de línia CRLF, seguint l’RFC 4180: s’obren bé tant
        a un full de càlcul com a <code>pandas</code>. Els camps amb diversos valors se separen amb
        una barra vertical.
      </p>
      <p>
        <strong>Un camp buit vol dir que no hi ha valor</strong>, no zero ni «no». Quan una
        afirmació no s’ha pogut documentar, la columna d’estat diu <code>unknown</code>, que és
        diferent de <code>no</code>. Si no es respecta aquesta distinció, les conclusions que
        se’n treguin seran errònies.
      </p>

      <h2>Els conjunts</h2>
      {counts.map(({ dataset, rows }) => (
        <section key={dataset.key} className="dataset">
          <h3 id={dataset.key}>{dataset.title}</h3>
          <p className="meta">
            {dataset.unit} {CA.format(rows)} files · {dataset.columns.length} columnes ·{' '}
            <a href={`/dades/${dataset.key}.json`}>JSON</a> ·{' '}
            <a href={`/dades/${dataset.key}.csv`}>CSV</a>
          </p>
          <p>{dataset.description}</p>
          <div
            className="scroller"
            role="region"
            tabIndex={0}
            aria-label={`Columnes del conjunt ${dataset.title}`}
          >
            <table>
              <caption className="visually-hidden">{`Columnes del conjunt ${dataset.title}`}</caption>
              <thead>
                <tr>
                  <th scope="col">Columna</th>
                  <th scope="col">Tipus</th>
                  <th scope="col">Què hi ha</th>
                </tr>
              </thead>
              <tbody>
                {dataset.columns.map((column) => (
                  <tr key={column.name}>
                    <th scope="row">
                      <code>{column.name}</code>
                    </th>
                    <td>{column.type}</td>
                    <td>{column.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <h2>Vocabularis</h2>
      <p>
        Tres columnes es repeteixen en diversos conjunts. L’estat d’una afirmació és{' '}
        <code>yes</code>, <code>partial</code>, <code>no</code>, <code>unknown</code> o{' '}
        <code>na</code>, on <code>na</code> vol dir que l’indicador no té sentit per a aquell servei
        i <code>unknown</code> vol dir que no ho hem pogut documentar. El nivell d’evidència és{' '}
        <code>official</code>, <code>regulator</code>, <code>independent</code>, <code>press</code>,{' '}
        <code>editorial</code> o <code>unknown</code>, de més a menys garantia. Les dimensions de
        puntuació són <code>privacy</code>, <code>security</code> i <code>agency</code>. La{' '}
        <Link href="/metodologia">metodologia</Link> explica els pesos i com es combinen.
      </p>

      <h2>Reproduir les puntuacions</h2>
      <p>
        Amb el conjunt d’<a href="#indicadors">indicadors</a> i la metodologia publicada es pot
        refer qualsevol nota des de zero: cada fila porta l’indicador, el seu pes, el seu valor i si
        era aplicable. Si algun càlcul no et surt, és un error nostre: escriu-nos a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>.
      </p>
    </div>
    </div>
  )
}
