import Link from 'next/link'
import type { Metadata } from 'next'

import { analyseEvidence, analyseSecurity, loadCorpus } from '@/lib/analysis'

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

export const metadata: Metadata = { title: 'Què sabem i què no' }

export default async function EvidencePage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)

  const apps = corpus.apps.length
  const analysis = analyseEvidence(corpus)
  const security = analyseSecurity(corpus)

  const worst = analysis.worstDocumented.filter((indicator) => indicator.unknown > 0)
  const complete = analysis.byIndicator.filter((indicator) => indicator.unknown === 0)
  const official = analysis.byLevel.find((level) => level.level === 'official')
  const independent = analysis.byLevel.find((level) => level.level === 'independent')
  const regulator = analysis.byLevel.find((level) => level.level === 'regulator')
  const audits = security.independentAudits
  const auditsIndicator = analysis.byIndicator.find(
    (indicator) => indicator.key === 'independent-audits',
  )
  const appsWithGaps = analysis.byApp.filter((app) => app.unknown > 0)

  if (apps === 0) {
    return (
      <>
        <h1>Què sabem i què no</h1>
        <p className="unknown">Encara no hi ha cap fitxa publicada per mesurar.</p>
        <BackToIndex />
      </>
    )
  }

  return (
    <>
      <h1>Què sabem i què no</h1>
      <p className="lede">
        Aquesta pàgina no mesura les aplicacions: ens mesura a nosaltres. Diu quina part del que
        afirmem està documentada, amb quina mena de font i què ens queda per mirar. És la pàgina que
        fa creïbles totes les altres, perquè un directori que no sap dir quant no sap acaba fent
        passar el silenci per conclusió.
      </p>

      <KeyNumbers>
        <KeyNumber value={num(analysis.totalClaims)} label="afirmacions aplicables" />
        <KeyNumber value={pct(analysis.unknownShare)} label="en desconegut" />
        <KeyNumber value={num(analysis.claimsWithoutSources)} label="afirmacions sense cap font" />
        <KeyNumber value={num(analysis.dataRows)} label="files de matriu documentades" />
      </KeyNumbers>

      <h2>La regla</h2>
      <p>
        Un desconegut no és una mala nota: és una tasca pendent. La diferència entre «hem comprovat
        que no ho fan» i «no ho hem mirat» és tot el projecte, i per això les dues coses no es
        barregen mai en una sola xifra. El que sí que és un incompliment és una afirmació documentada
        sense font, i aquesta xifra ha de ser zero: ara mateix és{' '}
        {num(analysis.claimsWithoutSources)}.
      </p>
      <StatusStack tally={analysis.claims} unit="afirmacions" />
      <p>
        Les afirmacions marcades com a «no aplica» surten del denominador. Exigir xifratge d’extrem a
        extrem a un navegador o un procés d’eliminació de compte a un servei que no en demana seria
        mesurar el no-res i inflar artificialment la cobertura.
      </p>

      <h2>D’on surt el que afirmem</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Nivell d’evidència</th>
            <th scope="col">Afirmacions documentades</th>
          </tr>
        </thead>
        <tbody>
          {analysis.byLevel.map((level) => (
            <tr key={level.level}>
              <th scope="row">{level.label}</th>
              <td>
                <Bar value={level.claims} total={analysis.claims.documented} unit="afirmacions" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Note>
        Aquesta és la limitació estructural del projecte, i no la resol cap millora de mètode:{' '}
        {num(official?.claims ?? 0)} de les {num(analysis.claims.documented)} afirmacions documentades
        se sostenen en documents publicats per la mateixa empresa. Són la font més verificable que hi
        ha —es poden citar, datar i tornar a comprovar— però vol dir que bona part del que sabem és
        el que les empreses diuen de si mateixes. Només {num(independent?.claims ?? 0)} afirmacions
        se sostenen en una anàlisi independent i {num(regulator?.claims ?? 0)} en una resolució d’un
        regulador, que són les úniques fonts que poden contradir-les.
      </Note>

      <h2>Els indicadors pitjor documentats</h2>
      <p>
        Aquesta és la llista de feina pendent, ordenada pel percentatge de fitxes on l’indicador
        queda sense resposta.
      </p>
      <Scroller>
        <table>
          <thead>
            <tr>
              <th scope="col">Indicador</th>
              <th scope="col">Sense documentar</th>
              <th scope="col">Sobre fitxes on aplica</th>
            </tr>
          </thead>
          <tbody>
            {worst.map((indicator) => (
              <tr key={indicator.key}>
                <td>{indicator.label}</td>
                <td>
                  <Bar value={indicator.unknown} total={indicator.applicable} unit="fitxes" />
                </td>
                <td className="meta">{pct(indicator.unknownShare)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>
      <p>
        Els altres {num(complete.length)} indicadors estan documentats a totes les fitxes on
        s’apliquen.
      </p>

      {auditsIndicator && auditsIndicator.unknown > 0 ? (
        <>
          <h2>Un buit que val la pena mirar de prop: les auditories independents</h2>
          <p>
            {num(auditsIndicator.unknown)} de les {num(auditsIndicator.applicable)} fitxes no diuen
            res sobre si el servei publica auditories de seguretat independents (
            {pct(auditsIndicator.unknownShare)}). Amb aquest nivell de desconeixement no es pot
            concloure res: ni que el sector s’auditi ni que no ho faci.
          </p>
          <StatusStack tally={audits} />
          <p>
            Hi ha un detall que ho explica: de les {num(audits.total)} fitxes, només{' '}
            {num(audits.no)} declaren que no hi ha auditoria independent. Un recompte tan baix en
            aquesta casella no vol dir que gairebé totes s’auditin: vol dir que gairebé mai no
            documentem una absència. Trobar una auditoria publicada és fàcil; demostrar que no n’hi
            ha cap exigeix una recerca que no hem fet, i mentre no la fem la resposta honesta és «no
            ho sabem».
          </p>
        </>
      ) : null}

      <h2>Quines fitxes tenen més buits</h2>
      <p>
        La confiança de la darrera columna la calcula el mòdul de puntuació i té en compte la
        cobertura i la qualitat de les fonts; el detall del càlcul és a{' '}
        <Link href="/metodologia">la metodologia</Link>.
      </p>
      <Scroller>
        <table>
          <thead>
            <tr>
              <th scope="col">Fitxa</th>
              <th scope="col">Indicadors sense documentar</th>
              <th scope="col">Sobre els aplicables</th>
              <th scope="col">Confiança</th>
            </tr>
          </thead>
          <tbody>
            {appsWithGaps.map((app) => (
              <tr key={app.id}>
                <td>
                  <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                </td>
                <td>
                  <Bar value={app.unknown} total={app.applicable} unit="indicadors" />
                </td>
                <td className="meta">{pct(app.unknownShare)}</td>
                <td className="meta">
                  {app.confidence === null ? (
                    <span className="unknown">—</span>
                  ) : (
                    num(app.confidence)
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>
      <p>
        Les {num(apps - appsWithGaps.length)} fitxes que no surten a la taula tenen tots els
        indicadors aplicables documentats.
      </p>

      <h2>La matriu de dades</h2>
      <p>
        A banda de les afirmacions amb evidència, cada fitxa porta una matriu de tipus de dada on
        cada fila té el seu nivell d’evidència i les seves fonts. De les {num(analysis.dataRows)}{' '}
        files del corpus, {num(analysis.dataRowsWithoutSources)} no tenen cap font i{' '}
        {num(analysis.dataRowsWithoutEvidenceLevel)} no declaren nivell d’evidència.
      </p>

      <h2>Què hem de fer</h2>
      <ul>
        {worst.slice(0, 3).map((indicator) => (
          <li key={indicator.key}>
            Documentar <strong>{indicator.label.toLowerCase()}</strong> a les{' '}
            {num(indicator.unknown)} fitxes que el tenen obert.
          </li>
        ))}
        <li>
          Buscar fonts que no siguin de la mateixa empresa per als indicadors on una política de
          privadesa no és prova suficient, com el seguiment entre aplicacions o la presència de
          rastrejadors de tercers.
        </li>
        <li>
          Convertir en afirmacions documentades els casos on avui hi ha silenci, sobretot quan la
          resposta honesta és «no ho fan»: una absència comprovada val tant com una presència.
        </li>
      </ul>

      <p className="meta">
        Aquesta pàgina es recalcula a cada visita amb el corpus publicat. Si les xifres han canviat
        des de l’última vegada, és que hi ha hagut feina, no que hi hagi hagut una correcció de
        mètode; els canvis de mètode es documenten a{' '}
        <Link href="/metodologia">la metodologia</Link>.
      </p>

      <BackToIndex />
    </>
  )
}
