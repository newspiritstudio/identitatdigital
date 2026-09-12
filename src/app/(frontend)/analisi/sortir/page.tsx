import Link from 'next/link'
import type { Metadata } from 'next'

import { analyseDeletion, analyseJurisdictions, loadCorpus } from '@/lib/analysis'

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
} from '../parts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Què costa marxar' }

export default async function LeavingPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)

  const apps = corpus.apps.length
  const deletion = analyseDeletion(corpus)
  const jurisdictions = analyseJurisdictions(corpus)

  /* Denominadors honestos: les fitxes on la pregunta no té sentit surten fora. */
  const deletionApplicable = deletion.possible.total - deletion.possible.na
  const retentionApplicable =
    deletion.dataAfterDeletion.total - deletion.dataAfterDeletion.na
  const retainSomething = deletion.dataAfterDeletion.yes + deletion.dataAfterDeletion.partial
  const withWaiting = apps - deletion.waitingUnknown
  const hardest = deletion.hardestToLeave.filter((app) => app.difficulty !== null).slice(0, 10)

  if (apps === 0) {
    return (
      <>
        <h1>Què costa marxar</h1>
        <p className="unknown">Encara no hi ha cap fitxa publicada.</p>
        <BackToIndex />
      </>
    )
  }

  return (
    <>
      <h1>Què costa marxar</h1>
      <p className="lede">
        Entrar sempre és una pantalla. Sortir és una altra cosa, i no es mesura només amb un botó
        d’eliminar el compte: compta quantes passes calen, quants dies s’ha d’esperar, què es queda
        l’empresa després i a quin país acaben les dades que no s’esborren.
      </p>

      <KeyNumbers>
        <KeyNumber
          value={`${num(deletion.possible.yes)} de ${num(deletionApplicable)}`}
          label="fitxes on es pot eliminar el compte"
        />
        <KeyNumber
          value={`${num(deletion.medianWaitingDays ?? 0)} dies`}
          label="d’espera, en mediana"
        />
        <KeyNumber
          value={`${num(retainSomething)} de ${num(retentionApplicable)}`}
          label="conserven dades després"
        />
        <KeyNumber
          value={`${num(jurisdictions.appsWithTransfers)} de ${num(apps)}`}
          label="transfereixen dades fora de la UE"
        />
      </KeyNumbers>

      <h2>Es pot marxar?</h2>
      <p>
        {deletion.possible.na > 0
          ? `${num(deletion.possible.na)} de les ${num(apps)} fitxes no demanen compte per funcionar, i per tant la pregunta no s’hi aplica. A les altres ${num(deletionApplicable)}:`
          : `A les ${num(deletionApplicable)} fitxes on la pregunta s’aplica:`}
      </p>
      <p>
        <strong>Es pot eliminar el compte</strong>
      </p>
      <StatusStack tally={deletion.possible} />
      <p>
        <strong>Es pot fer sense escriure a suport</strong>
      </p>
      <StatusStack tally={deletion.selfService} />
      <p>
        La segona pregunta és la que separa un tràmit d’una negociació. Un procés autoservei
        s’acaba quan tu decideixes; un procés que passa per un formulari de suport s’acaba quan algú
        contesta, i mentrestant el compte segueix obert.{' '}
        {deletion.requiresSupportContact > 0
          ? `${num(deletion.requiresSupportContact)} de les ${num(apps)} fitxes declaren que cal contactar amb suport.`
          : 'Cap fitxa no declara que calgui contactar amb suport.'}
      </p>

      <h2>Quant costa</h2>
      <Scroller>
        <table>
          <thead>
            <tr>
              <th scope="col">Dificultat declarada</th>
              <th scope="col">Fitxes</th>
            </tr>
          </thead>
          <tbody>
            {deletion.byDifficulty.map((row) => (
              <tr key={row.difficulty}>
                <th scope="row">{row.label}</th>
                <td>
                  <Bar value={row.apps} total={apps} unit="fitxes" />
                </td>
              </tr>
            ))}
            <tr>
              <th scope="row">Sense dificultat declarada</th>
              <td>
                <Bar value={deletion.difficultyUnknown} total={apps} unit="fitxes" faint />
              </td>
            </tr>
          </tbody>
        </table>
      </Scroller>
      <p>
        {num(deletion.withDocumentedSteps)} de les {num(apps)} fitxes tenen les passes documentades,
        amb una mediana de {num(deletion.medianSteps ?? 0)} passes, i {num(deletion.withDirectUrl)}{' '}
        porten enllaç directe al formulari d’eliminació. Tenir l’enllaç no és un detall: la
        diferència entre marxar i deixar-ho córrer sovint és no trobar la pàgina.
      </p>

      <h2>Quant s’espera</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Període d’espera</th>
            <th scope="col">Fitxes</th>
          </tr>
        </thead>
        <tbody>
          {deletion.waiting.map((bucket) => (
            <tr key={bucket.key}>
              <th scope="row">{bucket.label}</th>
              <td>
                <Bar value={bucket.apps} total={apps} unit="fitxes" />
              </td>
            </tr>
          ))}
          <tr>
            <th scope="row">Sense període declarat</th>
            <td>
              <Bar value={deletion.waitingUnknown} total={apps} unit="fitxes" faint />
            </td>
          </tr>
        </tbody>
      </table>
      <Note>
        La mediana de {num(deletion.medianWaitingDays ?? 0)} dies es calcula sobre les{' '}
        {num(withWaiting)} fitxes que declaren període, no sobre les {num(apps)}. El màxim declarat
        és de {num(deletion.maxWaitingDays ?? 0)} dies. Un període d’espera no és sempre una trampa:
        sovint és un marge de recuperació per si t’has equivocat. Però mentre dura, el compte encara
        existeix i es pot reactivar entrant-hi, que és exactament el que fa que molta gent no acabi
        de marxar.
      </Note>

      <h2>Les fitxes on marxar costa més</h2>
      <Scroller>
        <table>
          <thead>
            <tr>
              <th scope="col">Fitxa</th>
              <th scope="col">Dificultat</th>
              <th scope="col">Espera</th>
              <th scope="col">Passes</th>
              <th scope="col">Cal escriure a suport</th>
            </tr>
          </thead>
          <tbody>
            {hardest.map((app) => (
              <tr key={app.id}>
                <td>
                  <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                </td>
                <td className="meta">
                  {deletion.byDifficulty.find((row) => row.difficulty === app.difficulty)?.label ??
                    '—'}
                </td>
                <td className="meta">
                  {app.waitingPeriodDays === null ? (
                    <span className="unknown">no declarada</span>
                  ) : (
                    `${num(app.waitingPeriodDays)} dies`
                  )}
                </td>
                <td className="meta">{num(app.steps)}</td>
                <td className="meta">{app.requiresSupportContact ? 'Sí' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>

      <h2>Què queda desat després</h2>
      <StatusStack tally={deletion.dataAfterDeletion} />
      <p>
        {num(retainSomething)} de les {num(retentionApplicable)} fitxes on l’indicador aplica
        declaren que, després d’eliminar el compte, es queden alguna cosa. Normalment són registres
        de facturació que la llei obliga a conservar, dades agregades que ja no identifiquen ningú o
        còpies de seguretat que caduquen al cap d’uns mesos. {num(deletion.withRetainedDataDescription)}{' '}
        de les {num(apps)} fitxes expliquen per escrit què es queden exactament.
      </p>
      <p>
        Val la pena no llegir-ho com una trampa: eliminar el compte és eliminar el compte, no
        esborrar-se de la història del món. El que importa és saber-ho abans, perquè «he eliminat el
        compte» i «ja no tenen res meu» no són la mateixa frase.
      </p>

      <h2>On acaben les dades</h2>
      <p>
        La jurisdicció declarada decideix davant de quina autoritat es poden exercir els drets i quin
        tribunal mira una reclamació. Aquest és el repartiment:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Jurisdicció declarada</th>
            <th scope="col">Fitxes</th>
          </tr>
        </thead>
        <tbody>
          {jurisdictions.byJurisdiction.map((row) => (
            <tr key={row.jurisdiction}>
              <th scope="row">{row.jurisdiction}</th>
              <td>
                <Bar value={row.apps} total={apps} unit="fitxes" />
              </td>
            </tr>
          ))}
          {jurisdictions.jurisdictionUnknown > 0 ? (
            <tr>
              <th scope="row">Sense jurisdicció declarada</th>
              <td>
                <Bar value={jurisdictions.jurisdictionUnknown} total={apps} unit="fitxes" faint />
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <p>
        {jurisdictions.byJurisdiction[0]
          ? `${num(jurisdictions.byJurisdiction[0].apps)} de les ${num(apps)} fitxes situen la seva jurisdicció a ${jurisdictions.byJurisdiction[0].jurisdiction}. `
          : ''}
        Això explica per què tants procediments europeus acaben sempre davant de la mateixa autoritat
        de control: la finestreta única del Reglament fa que qui té la seu principal en un país en
        sigui el supervisor per a tota la Unió.
      </p>

      <h2>Transferències fora de la Unió Europea</h2>
      <StatusStack tally={jurisdictions.transfers} />
      <p>
        {num(jurisdictions.appsWithTransfers)} de les {num(apps)} fitxes documenten que les dades
        surten de la Unió Europea. Sortir-ne no és il·legal ni excepcional: el Reglament ho preveu i
        demana un mecanisme que mantingui la protecció. El que declaren les fitxes és això:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Mecanisme declarat</th>
            <th scope="col">Fitxes amb transferències</th>
          </tr>
        </thead>
        <tbody>
          {jurisdictions.byMechanism.map((row) => (
            <tr key={row.mechanism}>
              <th scope="row">{row.label}</th>
              <td>
                <Bar
                  value={row.apps}
                  total={jurisdictions.appsWithTransfers}
                  unit="de les que transfereixen"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Note>
        {jurisdictions.transfersWithoutMechanism > 0
          ? `${num(jurisdictions.transfersWithoutMechanism)} de les ${num(jurisdictions.appsWithTransfers)} fitxes amb transferències documentades no declaren amb quin mecanisme les fan. És un buit de documentació, no una absència de mecanisme.`
          : 'Totes les fitxes amb transferències documentades declaren amb quin mecanisme les fan.'}{' '}
        I el mecanisme més declarat, la decisió d’adequació, depèn d’una decisió política de la
        Comissió Europea que es pot revisar: ja ha passat dues vegades amb els Estats Units.
      </Note>

      <p>
        El procés concret de cada servei, amb les passes i l’enllaç directe, és a la seva fitxa del{' '}
        <Link href="/aplicacions">directori</Link>.
      </p>

      <BackToIndex />
    </>
  )
}
