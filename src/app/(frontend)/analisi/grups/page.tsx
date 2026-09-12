import Link from 'next/link'
import type { Metadata } from 'next'

import { analyseGroups, analyseIncidents, buildSharingGraph, loadCorpus } from '@/lib/analysis'

import { getClient } from '../../lib'
import {
  BackToIndex,
  Bar,
  KeyNumber,
  KeyNumbers,
  Note,
  Scroller,
  SharingDiagram,
  millions,
  num,
} from '../parts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Qui acumula les fitxes' }

/** Mateixes etiquetes que el formulari de l’empresa, escurçades per a la taula. */
const REVENUE_LABELS: Record<string, string> = {
  advertising: 'Publicitat',
  subscription: 'Subscripcions',
  freemium: 'Gratuït i de pagament',
  mixed: 'Diverses fonts',
  commerce: 'Venda i comissions',
  cloud: 'Serveis al núvol',
  hardware: 'Maquinari',
  donations: 'Donacions',
  unknown: 'No documentada',
}

export default async function GroupsPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)

  const apps = corpus.apps.length
  const analysis = analyseGroups(corpus)
  const graph = buildSharingGraph(corpus)
  const incidents = analyseIncidents(corpus)

  const groups = analysis.groups
  const multiApp = groups.filter((group) => group.appCount > 1)
  const onlyIntraGroupEdges = graph.edges.every((edge) => edge.viaTrackers === 0)
  const unidentifiedSenders = graph.nodes
    .filter((node) => node.toUnidentifiedThirdParties + node.toUnidentifiedBrokers > 0)
    .sort(
      (a, b) =>
        b.toUnidentifiedThirdParties +
        b.toUnidentifiedBrokers -
        (a.toUnidentifiedThirdParties + a.toUnidentifiedBrokers),
    )
    .slice(0, 10)
  const sharedRows =
    graph.rowsToThirdParties +
    graph.rowsToBrokers +
    graph.rowsWithinGroup +
    graph.rowsSharedWithNobody +
    graph.rowsSharingUnknown

  if (apps === 0 || groups.length === 0) {
    return (
      <>
        <h1>Qui acumula les fitxes</h1>
        <p className="unknown">Encara no hi ha cap fitxa assignada a cap empresa.</p>
        <BackToIndex />
      </>
    )
  }

  return (
    <>
      <h1>Qui acumula les fitxes</h1>
      <p className="lede">
        La pregunta d’aquesta pàgina no és de qui és cada aplicació —això ja ho diu la fitxa— sinó
        quantes de les aplicacions que fem servir acaben a la mateixa taula. Un grup es defineix
        aquí per la matriu última: pugem per la cadena de propietat fins a l’empresa que ja no en té
        cap per damunt.
      </p>

      <KeyNumbers>
        <KeyNumber value={num(groups.length)} label={`grups per a ${num(apps)} fitxes`} />
        <KeyNumber value={num(analysis.appsInTopThreeGroups)} label="fitxes als tres grups grans" />
        <KeyNumber value={num(graph.edges.length)} label="cessions amb destinatari identificat" />
        <KeyNumber value={num(graph.rowsToThirdParties)} label="files a tercers sense nom" />
      </KeyNumbers>

      <h2>El repartiment</h2>
      <p>
        {multiApp.length > 0
          ? `Només ${num(multiApp.length)} grups tenen més d’una fitxa al directori; tots els altres en tenen una.`
          : 'Cada grup té una sola fitxa al directori.'}{' '}
        La columna de tipus de dada és la unió dels que recullen totes les aplicacions del grup: és
        el perfil que en surt sumat, no el de l’aplicació que més en reculli.
      </p>
      <Scroller label="Grups empresarials del corpus, amb fitxes, tipus de dada acumulats, empreses, seu i model d’ingressos">
        <table>
          <caption className="visually-hidden">
            Grups empresarials del corpus, amb fitxes, tipus de dada acumulats, empreses, seu i
            model d’ingressos
          </caption>
          <thead>
            <tr>
              <th scope="col">Grup</th>
              <th scope="col">Fitxes</th>
              <th scope="col">Tipus de dada acumulats</th>
              <th scope="col">Empreses al corpus</th>
              <th scope="col">Seu</th>
              <th scope="col">Ingressos</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group.rootId}>
                <td>{group.rootName}</td>
                <td>
                  <Bar value={group.appCount} total={apps} />
                </td>
                <td>
                  <Bar value={group.dataTypeCount} total={corpus.dataTypes.length} faint />
                </td>
                <td className="meta">{num(group.companies.length)}</td>
                <td className="meta">{group.headquartersCountry ?? '—'}</td>
                <td className="meta">
                  {REVENUE_LABELS[group.primaryRevenueModel ?? 'unknown'] ?? '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>

      <h2>Per què importa la concentració</h2>
      <p>
        Una aplicació sola veu una part de la vida de qui la fa servir. {groups[0]?.rootName} en té{' '}
        {num(groups[0]?.appCount ?? 0)} al directori i, entre totes, hi acumula{' '}
        {num(groups[0]?.dataTypeCount ?? 0)} tipus de dada diferents. Cap de les seves aplicacions
        no recull tant per si sola: el que hi ha és un cercador, un mapa, un vídeo i un navegador
        que responen a la mateixa casa.
      </p>
      <p>
        El que es pot deduir d’un perfil així no és la suma de les parts. Qui sap què cerques i on
        vas, o amb qui parles i què mires, no necessita que li diguis res més: la combinació respon
        preguntes que cap de les dades no responia per separat. És per això que la propietat importa
        tant com la política de privadesa.
      </p>
      {groups[0] ? (
        <table>
          <caption className="visually-hidden">
            Tipus de dada que acumula el grup més gran del corpus i quantes de les seves aplicacions
            els recullen
          </caption>
          <thead>
            <tr>
              <th scope="col">Dades que acumula {groups[0].rootName}</th>
              <th scope="col">Aplicacions del grup que la recullen</th>
            </tr>
          </thead>
          <tbody>
            {groups[0].dataTypes.slice(0, 10).map((dataType) => (
              <tr key={dataType.dataTypeId}>
                <td>{dataType.name}</td>
                <td>
                  <Bar value={dataType.apps} total={groups[0]?.appCount ?? 0} unit="aplicacions" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <h2>El graf de cessions</h2>
      <p>
        Aquest graf només dibuixa les cessions que podem anomenar: aquelles on el destinatari té nom
        i fitxa al directori. Té {num(graph.edges.length)} arestes
        {onlyIntraGroupEdges ? ' i totes són intragrup' : ''}, i el gruix de cada traç és
        proporcional al nombre de files de la matriu de dades que la sustenten.
      </p>
      <SharingDiagram edges={graph.edges} />
      <table>
        <caption className="visually-hidden">
          Cessions documentades entre empreses del corpus, amb les files de matriu i les fitxes
          implicades
        </caption>
        <thead>
          <tr>
            <th scope="col">Qui cedeix</th>
            <th scope="col">Qui rep</th>
            <th scope="col">Files de la matriu</th>
            <th scope="col">Fitxes implicades</th>
          </tr>
        </thead>
        <tbody>
          {graph.edges.map((edge) => (
            <tr key={`${edge.fromCompanyId}-${edge.toCompanyId}`}>
              <td>{edge.fromName}</td>
              <td>{edge.toName}</td>
              <td className="meta">{num(edge.weight)}</td>
              <td className="meta">{num(edge.appIds.length)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Llegit literalment, el graf diu una cosa molt concreta: que les dades pugen de la filial
        europea a la matriu. Una filial com {graph.edges[0]?.fromName} existeix en bona part per fer
        de responsable del tractament davant del Reglament europeu, i la compartició amb el grup és,
        precisament, el mecanisme pel qual el que recull acaba on decideix qui mana.
      </p>

      <h2>El buit més gran del model</h2>
      <p>
        De les {num(sharedRows)} files de matriu on la dada es recull,{' '}
        {num(graph.rowsToThirdParties)} declaren que es comparteix amb tercers i{' '}
        {num(graph.rowsToBrokers)} amb intermediaris de dades, sense que la política digui amb qui.
        El directori té {num(graph.documentedTrackers)} rastrejadors de tercers documentats amb nom
        d’empresa.
      </p>
      <Note>
        Aquestes {num(graph.rowsToThirdParties + graph.rowsToBrokers)} files no es converteixen en
        cap node inventat del graf: un destinatari sense nom no és un node, és un forat. Mentre
        aquest forat sigui aquest, el graf de cessions no es pot llegir com un mapa complet dels
        fluxos de dades, sinó com el mapa de la part que les polítiques de privadesa anomenen.
      </Note>
      <table>
        <caption className="visually-hidden">
          Empreses amb més files cedides a destinataris que no s’identifiquen pel nom
        </caption>
        <thead>
          <tr>
            <th scope="col">Empresa</th>
            <th scope="col">Files cedides a destinataris sense nom</th>
            <th scope="col">Fitxes al directori</th>
          </tr>
        </thead>
        <tbody>
          {unidentifiedSenders.map((node) => (
            <tr key={node.companyId}>
              <td>{node.name}</td>
              <td>
                <Bar
                  value={node.toUnidentifiedThirdParties + node.toUnidentifiedBrokers}
                  total={graph.rowsToThirdParties + graph.rowsToBrokers}
                  unit="files"
                />
              </td>
              <td className="meta">{num(node.apps)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Incidents i sancions per grup</h2>
      <p>
        El directori registra {num(incidents.total)} incidents —bretxes, sancions, resolucions i
        usos indeguts— repartits així entre els grups:
      </p>
      <table>
        <caption className="visually-hidden">
          Incidents i sancions anunciades per grup empresarial
        </caption>
        <thead>
          <tr>
            <th scope="col">Grup</th>
            <th scope="col">Incidents</th>
            <th scope="col">Sancions anunciades</th>
          </tr>
        </thead>
        <tbody>
          {incidents.byGroup.map((row) => (
            <tr key={row.groupId}>
              <td>{row.groupName}</td>
              <td>
                <Bar value={row.incidents} total={incidents.total} unit="incidents" />
              </td>
              <td className="meta">
                {row.finesEur > 0 ? `${millions(row.finesEur)} milions d’euros` : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Note>
        Aquesta taula no és una taxa de reincidència. El registre d’incidents és una selecció
        editorial dels casos rellevants i documentats, no un cens: un grup amb més incidents pot
        tenir-ne més perquè n’ha comès més, perquè és més gran o perquè és més vigilat. Dels{' '}
        {num(incidents.total)} incidents, {num(incidents.finesWithoutAmount)} tenen actuació
        administrativa sense import documentat, i {millions(incidents.overturnedFinesEur)} milions
        d’euros del total anunciat corresponen a sancions anul·lades o reduïdes.
      </Note>

      <p>
        Les fitxes de cada empresa i la seva cadena de propietat són a{' '}
        <Link href="/empreses">Empreses i grups</Link>.
      </p>

      <BackToIndex />
    </>
  )
}
