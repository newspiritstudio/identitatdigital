import Link from 'next/link'
import type { Metadata } from 'next'

import {
  DARK_PATTERN_SEVERITY_LABELS,
  analyseDarkPatterns,
  loadCorpus,
  percentage,
} from '@/lib/analysis'

import { getClient } from '../../lib'
import {
  BackToIndex,
  Bar,
  KeyNumber,
  KeyNumbers,
  Note,
  Scroller,
  StatusStack,
  num,
  pct,
} from '../parts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Els patrons enganyosos' }

/** Què fa realment cada tipus de patró, dit sense adjectius. */
const TYPE_EXPLANATIONS: Record<string, string> = {
  'unbalanced-consent':
    'Acceptar-ho tot és un botó; rebutjar-ho tot són diverses pantalles o no hi és.',
  'hidden-exit':
    'L’opció que et protegeix existeix, però és uns quants menús per sota de la pantalla on ets.',
  nagging: 'La pregunta torna cada cert temps fins que canvies de resposta.',
  'confusing-language':
    'El text no és fals, però costa saber què passa si dius que sí i què passa si dius que no.',
  preselected: 'L’opció més favorable a l’empresa ja ve marcada quan arribes.',
  confirmshaming:
    'Rebutjar implica llegir una frase que et fa quedar malament per haver-ho rebutjat.',
  other: 'Casos que no encaixen als tipus anteriors i que la fitxa descriu un per un.',
}

export default async function DarkPatternsPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)

  const apps = corpus.apps.length
  const analysis = analyseDarkPatterns(corpus)

  const listed = analysis.topApps.length
  const patternsPerApp = listed > 0 ? Math.round((analysis.totalPatterns / listed) * 10) / 10 : 0

  if (apps === 0) {
    return (
      <>
        <h1>Els patrons enganyosos</h1>
        <p className="unknown">Encara no hi ha cap fitxa publicada.</p>
        <BackToIndex />
      </>
    )
  }

  return (
    <>
      <h1>Els patrons enganyosos</h1>
      <p className="lede">
        Un patró enganyós és una manera de presentar les opcions perquè la que convé a l’empresa
        surti gairebé sola i la que et protegeix costi una mica més. No impedeix triar, però fa que
        gairebé tothom es quedi amb la configuració per defecte.
      </p>

      <KeyNumbers>
        <KeyNumber
          value={`${num(analysis.appsWithPatterns)} de ${num(apps)}`}
          label="fitxes amb algun patró documentat"
        />
        <KeyNumber value={num(analysis.totalPatterns)} label="patrons documentats" />
        <KeyNumber value={num(analysis.bySeverity.high)} label="de gravetat alta" />
        <KeyNumber value={num(analysis.appsWithoutPatterns)} label="fitxes revisades sense cap" />
      </KeyNumbers>

      <h2>On hem mirat</h2>
      <p>
        Aquesta xifra s’ha de llegir primer, perquè una llista buida de patrons pot voler dir que no
        n’hi ha o que ningú no s’ho ha mirat. Aquest és el repartiment de l’afirmació «aquesta fitxa
        té patrons enganyosos» a les {num(apps)} fitxes publicades:
      </p>
      <StatusStack tally={analysis.claims} />
      {analysis.appsUnknown > 0 ? (
        <Note>
          Hi ha {num(analysis.appsUnknown)} fitxes on no ho hem revisat. Tot el que ve a continuació
          es refereix a les {num(apps - analysis.appsUnknown)} restants, no al directori sencer.
        </Note>
      ) : null}

      <h2>Per tipus</h2>
      <p>
        Un mateix patró pot aparèixer en diverses fitxes, i una fitxa pot tenir-ne de diversos
        tipus. La columna de fitxes compta en quantes apareix cada tipus.
      </p>
      <Scroller label="Tipus de patró enganyós documentats, amb què fa cadascun i en quantes fitxes apareix">
        <table>
          <caption className="visually-hidden">
            Tipus de patró enganyós documentats, amb què fa cadascun i en quantes fitxes apareix
          </caption>
          <thead>
            <tr>
              <th scope="col">Tipus</th>
              <th scope="col">Què fa</th>
              <th scope="col">Fitxes on apareix</th>
              <th scope="col">Gravetat alta</th>
            </tr>
          </thead>
          <tbody>
            {analysis.byType.map((row) => (
              <tr key={row.type}>
                <td>{row.label}</td>
                <td className="meta">{TYPE_EXPLANATIONS[row.type] ?? '—'}</td>
                <td>
                  <Bar value={row.apps} total={apps} unit="fitxes" />
                </td>
                <td className="meta">
                  {num(row.high)} de {num(row.occurrences)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>

      <h2>Per gravetat</h2>
      <p>
        La gravetat mesura quant condiciona el patró la decisió de la persona, no quantes vegades
        apareix. Tres avisos insistents no equivalen a un botó de rebuig que no existeix.
      </p>
      <table>
        <caption className="visually-hidden">
          Patrons enganyosos documentats repartits per gravetat
        </caption>
        <thead>
          <tr>
            <th scope="col">Gravetat</th>
            <th scope="col">Patrons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{DARK_PATTERN_SEVERITY_LABELS.high}</th>
            <td>
              <Bar value={analysis.bySeverity.high} total={analysis.totalPatterns} unit="patrons" />
            </td>
          </tr>
          <tr>
            <th scope="row">{DARK_PATTERN_SEVERITY_LABELS.medium}</th>
            <td>
              <Bar
                value={analysis.bySeverity.medium}
                total={analysis.totalPatterns}
                unit="patrons"
              />
            </td>
          </tr>
          <tr>
            <th scope="row">{DARK_PATTERN_SEVERITY_LABELS.low}</th>
            <td>
              <Bar value={analysis.bySeverity.low} total={analysis.totalPatterns} unit="patrons" />
            </td>
          </tr>
          <tr>
            <th scope="row">Sense gravetat declarada</th>
            <td>
              <Bar
                value={analysis.bySeverity.unspecified}
                total={analysis.totalPatterns}
                unit="patrons"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Quines fitxes en concentren més</h2>
      <p>
        La taula s’ordena per la gravetat sumada dels patrons, de manera que un patró greu pesa més
        que dos de lleus. La columna de gravetat desglossa què hi ha darrere de cada posició.
      </p>
      <Scroller label="Fitxes amb més patrons enganyosos documentats, desglossats per gravetat">
        <table>
          <caption className="visually-hidden">
            Fitxes amb més patrons enganyosos documentats, desglossats per gravetat
          </caption>
          <thead>
            <tr>
              <th scope="col">Fitxa</th>
              <th scope="col">Patrons documentats</th>
              <th scope="col">Alta</th>
              <th scope="col">Mitjana</th>
              <th scope="col">Baixa</th>
            </tr>
          </thead>
          <tbody>
            {analysis.topApps.map((app) => (
              <tr key={app.id}>
                <td>
                  <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                </td>
                <td className="meta">{num(app.patterns)}</td>
                <td className="meta">{num(app.high)}</td>
                <td className="meta">{num(app.medium)}</td>
                <td className="meta">{num(app.low)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>

      <Note>
        Aquesta taula no mesura la mala fe de cada empresa i s’ha de llegir amb dues precaucions. La
        primera: hi ha {num(analysis.totalPatterns)} patrons repartits entre {num(listed)} fitxes,
        una mitjana de {num(patternsPerApp)} per fitxa, que és molt poc per a interfícies d’aquesta
        mida. Documentem l’exemple més visible de cada servei i no fem una auditoria exhaustiva de
        la interfície, de manera que un 1 vol dir «n’hem documentat un», no «només n’hi ha un».
        {analysis.appsClaimingWithoutList > 0 ? (
          <>
            {' '}
            La segona: {num(analysis.appsClaimingWithoutList)} fitxes afirmen tenir patrons
            enganyosos però no en documenten cap a la llista, i per això no surten aquí. És
            documentació que tenim pendent.
          </>
        ) : null}
      </Note>

      <h2>Què vol dir per a qui fa servir el servei</h2>
      <p>
        Els dos tipus més freqüents del directori (
        {analysis.byType
          .slice(0, 2)
          .map((type) => type.label.toLowerCase())
          .join(' i ')}
        ) fan més costós arribar a l’opció que et protegeix. Per això el consentiment que dones
        depèn tant del que vols com de la paciència que tens en aquell moment. Aquest consentiment
        és la base legal amb què després es recullen i es cedeixen les dades, de manera que el
        disseny de la pantalla hi pesa tant com el text de la política.
      </p>
      <p>
        Les {num(analysis.appsWithoutPatterns)} fitxes de {num(apps)} on hem revisat la interfície
        sense trobar-hi cap patró ({pct(percentage(analysis.appsWithoutPatterns, apps))}) mostren
        que es pot fer una interfície sense aquests patrons. Cada patró concret, amb la pantalla on
        apareix i la font que el documenta, és a la fitxa del servei corresponent.
      </p>

      <BackToIndex />
    </>
  )
}
