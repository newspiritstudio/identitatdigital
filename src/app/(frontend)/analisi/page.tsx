import Link from 'next/link'
import type { Metadata } from 'next'

import {
  analyseDarkPatterns,
  analyseDataTypes,
  analyseDeletion,
  analyseEvidence,
  analyseGroups,
  analyseIncidents,
  analyseJurisdictions,
  analyseSecurity,
  buildSharingGraph,
  loadCorpus,
} from '@/lib/analysis'

import { getClient } from '../lib'
import { Bar, KeyNumber, KeyNumbers, Note, StatusStack, millions, num, pct } from './parts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Anàlisi' }

export default async function AnalysisIndexPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)

  const apps = corpus.apps.length
  const data = analyseDataTypes(corpus)
  const groups = analyseGroups(corpus)
  const graph = buildSharingGraph(corpus)
  const patterns = analyseDarkPatterns(corpus)
  const deletion = analyseDeletion(corpus)
  const jurisdictions = analyseJurisdictions(corpus)
  const security = analyseSecurity(corpus)
  const evidence = analyseEvidence(corpus)
  const incidents = analyseIncidents(corpus)

  /* Xifres derivades del corpus que la biblioteca no precalcula. */
  const mostCollected = data.rows[0]
  const topGroups = groups.groups.slice(0, 2)
  const twoGroupApps = topGroups.reduce((sum, group) => sum + group.appCount, 0)
  const onlyIntraGroupEdges = graph.edges.every((edge) => edge.viaTrackers === 0)
  const deletionApplicable = deletion.possible.total - deletion.possible.na
  const retentionApplicable = deletion.dataAfterDeletion.total - deletion.dataAfterDeletion.na
  const retainSomething = deletion.dataAfterDeletion.yes + deletion.dataAfterDeletion.partial
  const worstIndicator = evidence.worstDocumented[0]
  const officialLevel = evidence.byLevel.find((level) => level.level === 'official')
  const transport = security.measures.find((measure) => measure.key === 'transport-encryption')
  const e2eeApplicable = security.e2ee.total - security.e2ee.na

  /* Sense fitxes publicades no hi ha res a analitzar, i inventar-s'ho seria
   * exactament el contrari del que fa aquesta secció. */
  if (apps === 0 || mostCollected === undefined || worstIndicator === undefined) {
    return (
      <>
        <h1>Anàlisi</h1>
        <p className="unknown">
          Encara no hi ha prou fitxes publicades per analitzar res de manera transversal.
        </p>
      </>
    )
  }

  return (
    <>
      <h1>Anàlisi</h1>
      <p className="lede">
        Una fitxa explica un servei. Aquestes pàgines expliquen què surt quan es miren les{' '}
        {num(apps)} fitxes publicades alhora: quines dades recull tothom, on van a parar, què costa
        marxar i quina part de tot plegat encara no hem pogut documentar. Cada xifra que llegiràs
        porta el seu denominador, i els desconeguts es diuen al costat de la xifra, no al final.
      </p>

      <KeyNumbers>
        <KeyNumber value={num(apps)} label="fitxes publicades" />
        <KeyNumber value={num(data.totalRows)} label="files de matriu de dades" />
        <KeyNumber value={num(evidence.totalClaims)} label="afirmacions amb evidència" />
        <KeyNumber value={pct(evidence.unknownShare)} label="d’afirmacions en desconegut" />
      </KeyNumbers>

      <h2>Hi ha una dada que recull gairebé tothom</h2>
      <p>
        {mostCollected.name} és la dada més estesa del directori: la recullen{' '}
        {num(mostCollected.reach)} de les {num(apps)} fitxes. De les que la recullen,{' '}
        {num(mostCollected.linkedToIdentity)} la vinculen a la identitat de la persona i{' '}
        {num(mostCollected.usedForTracking)} la fan servir per seguir-la fora del servei.
      </p>
      <table>
        <caption className="visually-hidden">
          Tipus de dada recollits pel nombre més alt de fitxes del corpus
        </caption>
        <tbody>
          <tr>
            <th scope="row">Fitxes que la recullen</th>
            <td>
              <Bar value={mostCollected.reach} total={apps} unit="fitxes" />
            </td>
          </tr>
          <tr>
            <th scope="row">La vinculen a la identitat</th>
            <td>
              <Bar
                value={mostCollected.linkedToIdentity}
                total={mostCollected.reach}
                unit="de les que la recullen"
                faint
              />
            </td>
          </tr>
          <tr>
            <th scope="row">La fan servir per al seguiment</th>
            <td>
              <Bar
                value={mostCollected.usedForTracking}
                total={mostCollected.reach}
                unit="de les que la recullen"
                faint
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Vinculada a la identitat, una dada tècnica deixa de ser tècnica. Una adreça de xarxa sola és
        un número que canvia; associada a un compte, converteix una navegació anònima en un
        historial amb nom i data. I si a més serveix per reconèixer la mateixa persona en altres
        llocs, el que es construeix ja no és l’historial d’un servei sinó el d’una persona a través
        de serveis que no ha relacionat mai entre ells.
      </p>
      <p>
        <Link href="/analisi/dades">Quines dades recull tothom</Link>, tipus per tipus.
      </p>

      <h2>Molts noms, poques cases</h2>
      <p>
        Les {num(apps)} fitxes pengen de {num(groups.groups.length)} grups empresarials diferents,
        però el repartiment no és pla: {topGroups[0]?.rootName} n’aplega{' '}
        {num(topGroups[0]?.appCount ?? 0)} i {topGroups[1]?.rootName},{' '}
        {num(topGroups[1]?.appCount ?? 0)}. Entre tots dos sumen {num(twoGroupApps)} de les{' '}
        {num(apps)}, i els tres primers grups en tenen {num(groups.appsInTopThreeGroups)}.
      </p>
      <p>
        El que importa d’aquesta concentració no és el nombre d’aplicacions sinó el perfil que en
        surt sumat. {topGroups[0]?.rootName} acumula {num(topGroups[0]?.dataTypeCount ?? 0)} tipus
        de dada diferents entre les seves fitxes i {topGroups[1]?.rootName},{' '}
        {num(topGroups[1]?.dataTypeCount ?? 0)}: cap aplicació sola no recull tant, però el conjunt
        acaba a la mateixa casa.
      </p>
      <p>
        El graf de cessions amb destinatari identificat té {num(graph.edges.length)} arestes
        {onlyIntraGroupEdges
          ? ', i totes són intragrup: dades que pugen d’una filial a la seva matriu.'
          : '.'}
      </p>
      <Note>
        Això no vol dir que no hi hagi cessions cap enfora. Vol dir que no les podem dibuixar:{' '}
        {num(graph.rowsToThirdParties)} files de la matriu declaren que la dada es comparteix amb
        tercers sense que la política digui amb qui, i el corpus té {num(graph.documentedTrackers)}{' '}
        rastrejadors de tercers documentats amb nom d’empresa. És el buit més gran del model avui, i
        qualsevol lectura del graf ha de comptar-hi.
      </Note>
      <p>
        <Link href="/analisi/grups">La concentració i el graf de cessions</Link>.
      </p>

      <h2>La interfície també decideix</h2>
      <p>
        De les {num(apps)} fitxes publicades, {num(patterns.appsWithPatterns)} documenten almenys un
        patró enganyós —una manera de presentar les opcions que empeny cap a la que convé a
        l’empresa— i en {num(patterns.appsWithoutPatterns)} hem revisat la interfície sense
        trobar-ne cap. En total n’hi ha {num(patterns.totalPatterns)} de documentats, dels quals{' '}
        {num(patterns.bySeverity.high)} de gravetat alta.
      </p>
      <StatusStack tally={patterns.claims} />
      <p>
        Els dos tipus més freqüents són{' '}
        {patterns.byType
          .slice(0, 2)
          .map((type) => type.label.toLowerCase())
          .join(' i ')}
        . Tots dos actuen sobre el mateix: el cost d’arribar a l’opció que et protegeix. Una casella
        ja marcada i un enllaç de sortida enterrat tres pantalles endins no impedeixen res, però fan
        que la configuració per defecte sigui, a la pràctica, la configuració de gairebé tothom.
      </p>
      <p>
        <Link href="/analisi/patrons">Els patrons enganyosos, per tipus i per gravetat</Link>.
      </p>

      <h2>Marxar es pot; sortir del tot, menys</h2>
      <p>
        En {num(deletion.possible.yes)} de les {num(deletionApplicable)} fitxes on la pregunta té
        sentit es pot eliminar el compte, i {num(deletion.selfService.yes)} deixen fer-ho sense
        haver d’escriure a ningú. La mediana d’espera és de {num(deletion.medianWaitingDays ?? 0)}{' '}
        dies i la més llarga és de {num(deletion.maxWaitingDays ?? 0)}.
      </p>
      <p>
        El que no és net és el rastre. {num(retainSomething)} de les {num(retentionApplicable)}{' '}
        fitxes on l’indicador aplica declaren que conserven alguna cosa després d’eliminar el compte
        —registres de facturació, dades agregades, còpies de seguretat— i{' '}
        {num(jurisdictions.appsWithTransfers)} de {num(apps)} documenten transferències de dades
        fora de la Unió Europea.
      </p>
      <Note>
        {num(deletion.waitingUnknown)} fitxes no declaren període d’espera i{' '}
        {num(deletion.difficultyUnknown)} no tenen dificultat declarada, de manera que la mediana es
        calcula sobre {num(apps - deletion.waitingUnknown)} fitxes, no sobre {num(apps)}.
      </Note>
      <p>
        <Link href="/analisi/sortir">Què costa marxar</Link>: esborrat, esperes, què queda desat i
        on van les dades.
      </p>

      <h2>El que no sabem, dit en veu alta</h2>
      <p>
        De {num(evidence.totalClaims)} afirmacions aplicables, {num(evidence.claims.unknown)} queden
        en desconegut: un {pct(evidence.unknownShare)}. I {num(evidence.claimsWithoutSources)}{' '}
        afirmacions documentades no tenen cap font, que és l’única xifra d’aquest projecte que ha de
        ser zero.
      </p>
      <StatusStack tally={evidence.claims} unit="afirmacions" />
      <p>
        El forat concret té nom: {worstIndicator.label.toLowerCase()}, amb{' '}
        {num(worstIndicator.unknown)} fitxes de {num(worstIndicator.applicable)} sense documentar (
        {pct(worstIndicator.unknownShare)}). Amb aquest nivell de desconeixement, d’aquest indicador
        no se’n pot concloure res sobre el conjunt del directori: l’única cosa que diu la xifra és
        que no ho hem mirat prou.
      </p>
      <Note>
        Hi ha una limitació estructural més: {num(officialLevel?.claims ?? 0)} de les{' '}
        {num(evidence.claims.documented)} afirmacions documentades se sostenen en documentació
        publicada per la mateixa empresa. És la font més verificable que hi ha, però vol dir que
        bona part del que afirmem és el que les empreses diuen de si mateixes.
      </Note>
      <p>
        <Link href="/analisi/evidencia">La mètrica d’honestedat del projecte</Link>.
      </p>

      <h2>I el que sí que funciona</h2>
      <p>
        Les dades no només diuen coses incòmodes. Les {num(transport?.tally.yes ?? 0)} fitxes de{' '}
        {num(apps)} xifren el trànsit, {num(security.mfa.yes + security.mfa.partial)} de{' '}
        {num(security.mfa.total - security.mfa.na)} ofereixen verificació en dos passos i cap no té
        l’SMS com a únic segon factor. La matriu de dades està documentada fins al detall:{' '}
        {num(evidence.dataRows)} files i {num(evidence.dataRowsWithoutSources)} sense font.
      </p>
      <p>
        El xifratge d’extrem a extrem és una altra història:{' '}
        {num(security.e2eeEverythingByDefault.length)} fitxes de les {num(e2eeApplicable)} on la
        pregunta té sentit xifren tot el contingut per defecte
        {security.e2eeEverythingByDefault.length > 0
          ? ` (${security.e2eeEverythingByDefault.map((app) => app.name).join(', ')})`
          : ''}
        . La resta el xifren en part, només si s’activa, o no el xifren. «Per defecte» és la paraula
        important: un xifratge que s’ha d’anar a buscar a la configuració protegeix qui ja sabia que
        existia.
      </p>

      <h2>Com llegir aquestes pàgines</h2>
      <ul>
        <li>
          <strong>Cap xifra sense denominador.</strong> No hi trobaràs «la majoria»: hi trobaràs{' '}
          {num(patterns.appsWithPatterns)} de {num(apps)}. Amb {num(apps)} fitxes, un percentatge
          sol amagar més del que explica.
        </li>
        <li>
          <strong>Desconegut no vol dir dolent.</strong> Vol dir que no ho hem documentat. Cada
          vegada que una xifra tingui desconeguts, hi són al costat; i quan són tants que no
          permeten concloure res, ho diem en comptes de concloure.
        </li>
        <li>
          <strong>No puntuem aquí.</strong> Les notes de cada servei són a{' '}
          <Link href="/aplicacions">el directori</Link> i el seu càlcul és a{' '}
          <Link href="/metodologia">la metodologia</Link>. Aquestes pàgines compten pràctiques i
          expliquen el mecanisme; la conclusió la treu qui llegeix.
        </li>
      </ul>

      <h2>Les pàgines</h2>
      <ul className="grid">
        <li className="card">
          <h3>
            <Link href="/analisi/dades">Dades</Link>
          </h3>
          <p className="meta">
            Quines dades recull tothom, quines acaben lligades a la identitat i quines serveixen per
            seguir la gent fora del servei. {num(data.rows.length)} tipus catalogats.
          </p>
        </li>
        <li className="card">
          <h3>
            <Link href="/analisi/grups">Grups</Link>
          </h3>
          <p className="meta">
            Qui acumula quantes fitxes i quants tipus de dada, i el graf de cessions amb destinatari
            identificat. {num(groups.groups.length)} grups i {num(incidents.total)} incidents
            registrats.
          </p>
        </li>
        <li className="card">
          <h3>
            <Link href="/analisi/patrons">Patrons</Link>
          </h3>
          <p className="meta">
            Els {num(patterns.totalPatterns)} patrons enganyosos documentats, per tipus, per
            gravetat i per fitxa.
          </p>
        </li>
        <li className="card">
          <h3>
            <Link href="/analisi/sortir">Sortir</Link>
          </h3>
          <p className="meta">
            Eliminació del compte, dificultat, esperes, què queda desat després i on van les dades.
          </p>
        </li>
        <li className="card">
          <h3>
            <Link href="/analisi/catala">Català</Link>
          </h3>
          <p className="meta">
            Quantes fitxes es poden fer servir en català i quantes en tradueixen trenta sense
            incloure’l. Dimensió informativa: no entra a cap puntuació.
          </p>
        </li>
        <li className="card">
          <h3>
            <Link href="/analisi/evidencia">Evidència</Link>
          </h3>
          <p className="meta">
            Quina part del que afirmem està documentada, amb quina qualitat de font i què ens queda
            per mirar.
          </p>
        </li>
      </ul>

      <p className="meta">
        Les sancions registrades als {num(incidents.total)} incidents del directori sumen{' '}
        {millions(incidents.totalFinesEur)} milions d’euros anunciats, dels quals{' '}
        {millions(incidents.finalFinesEur)} milions corresponen a resolucions fermes i{' '}
        {millions(incidents.overturnedFinesEur)} milions a sancions anul·lades o reduïdes. El
        registre d’incidents és una selecció editorial dels casos rellevants, no un cens: serveix
        per veure on es concentren, no per calcular-ne una taxa.
      </p>
    </>
  )
}
