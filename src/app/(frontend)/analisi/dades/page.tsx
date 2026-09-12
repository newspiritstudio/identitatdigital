import Link from 'next/link'
import type { Metadata } from 'next'

import { analyseDataTypes, buildSharingGraph, loadCorpus, percentage } from '@/lib/analysis'

import { getClient } from '../../lib'
import { BackToIndex, Bar, KeyNumber, KeyNumbers, Note, Scroller, num, pct } from '../parts'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = { title: 'Quines dades recull tothom' }

/** Etiquetes de les famílies del catàleg de tipus de dada. */
const FAMILY_LABELS: Record<string, string> = {
  identifiers: 'Identificadors',
  contact: 'Contacte',
  device: 'Dispositiu',
  location: 'Ubicació',
  behaviour: 'Comportament',
  content: 'Contingut',
  social: 'Relacions',
  financial: 'Diners',
  biometric: 'Biometria',
  health: 'Salut',
  special: 'Categoria especial',
  diagnostics: 'Diagnòstic',
  credentials: 'Credencials',
}

export default async function DataTypesPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)

  const apps = corpus.apps.length
  const analysis = analyseDataTypes(corpus)
  const graph = buildSharingGraph(corpus)

  const present = analysis.rows.filter((row) => row.reach > 0)
  const absent = analysis.rows.filter((row) => row.documentedBy === 0)
  const special = analysis.rows.filter((row) => row.specialCategory)

  /* Recomptes de buits agregats de totes les files de la matriu. */
  const sumOf = (key: 'collectionUnknown' | 'linkageUnknown' | 'trackingUnknown' | 'sharingUnknown') =>
    analysis.rows.reduce((total, row) => total + row[key], 0)
  const collectionUnknown = sumOf('collectionUnknown')
  const linkageUnknown = sumOf('linkageUnknown')
  const trackingUnknown = sumOf('trackingUnknown')
  const sharingUnknown = sumOf('sharingUnknown')

  const topTracking = [...present]
    .sort((a, b) => b.usedForTracking - a.usedForTracking || b.reach - a.reach)
    .slice(0, 6)

  if (apps === 0 || present.length === 0) {
    return (
      <>
        <h1>Quines dades recull tothom</h1>
        <p className="unknown">Encara no hi ha cap matriu de dades publicada.</p>
        <BackToIndex />
      </>
    )
  }

  return (
    <>
      <h1>Quines dades recull tothom</h1>
      <p className="lede">
        Cada fitxa porta una matriu on consta, tipus de dada per tipus de dada, si el servei el
        recull, si el lliga a la identitat de la persona, si el fa servir per seguir-la fora del
        servei i amb qui el comparteix. Sumades, les {num(analysis.totalRows)} files d’aquestes
        matrius responen la pregunta que cap fitxa no pot respondre sola: qui recull això?
      </p>

      <KeyNumbers>
        <KeyNumber value={num(analysis.rows.length)} label="tipus de dada catalogats" />
        <KeyNumber value={num(present.length)} label="que apareixen en alguna fitxa" />
        <KeyNumber value={num(analysis.totalRows)} label="files de matriu" />
        <KeyNumber value={num(analysis.appsWithoutDataMatrix)} label="fitxes sense matriu" />
      </KeyNumbers>

      <h2>Què recull qui</h2>
      <p>
        La columna d’abast compta les fitxes on la dada acaba als servidors del servei, tant si es
        recull sempre com si només es recull quan la persona activa una funció. Les dues columnes
        següents es calculen només sobre aquestes fitxes: preguntar si una dada que no es recull
        queda vinculada a la identitat no té resposta possible.
      </p>
      <Scroller>
        <table>
          <thead>
            <tr>
              <th scope="col">Tipus de dada</th>
              <th scope="col">Família</th>
              <th scope="col">La recullen</th>
              <th scope="col">Lligada a la identitat</th>
              <th scope="col">Seguiment fora del servei</th>
              <th scope="col">Cedida a tercers</th>
            </tr>
          </thead>
          <tbody>
            {present.map((row) => (
              <tr key={row.dataTypeId}>
                <td>
                  {row.name}
                  {row.specialCategory ? <> <span className="badge">categoria especial</span></> : null}
                </td>
                <td className="meta">{FAMILY_LABELS[row.family ?? ''] ?? '—'}</td>
                <td>
                  <Bar value={row.reach} total={apps} />
                </td>
                <td>
                  <Bar value={row.linkedToIdentity} total={row.reach} faint />
                </td>
                <td>
                  <Bar value={row.usedForTracking} total={row.reach} faint />
                </td>
                <td className="meta">{num(row.sharedWithThirdParties)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Scroller>
      <Note>
        Buits d’aquesta taula: {num(collectionUnknown)} files no diuen si la dada es recull,{' '}
        {num(linkageUnknown)} no diuen si queda vinculada a la identitat, {num(trackingUnknown)} no
        diuen si serveix per al seguiment i {num(sharingUnknown)} no diuen amb qui es comparteix. La
        matriu de dades és, ara mateix, la part més ben documentada del projecte; el que està pitjor
        documentat és a{' '}
        <Link href="/analisi/evidencia">la pàgina d’evidència</Link>.
      </Note>

      <h2>De dada tècnica a historial amb nom</h2>
      <p>
        La diferència entre una dada recollida i una dada vinculada a la identitat és tot el que hi
        ha entre una estadística i un expedient. {present[0]?.name} apareix a{' '}
        {num(present[0]?.reach ?? 0)} de les {num(apps)} fitxes i{' '}
        {num(present[0]?.linkedToIdentity ?? 0)} d’aquestes la lliguen a un compte. A partir
        d’aquí, cada connexió deixa de ser un registre tècnic anònim i passa a ser una línia d’un
        historial que té nom, hora i lloc aproximat.
      </p>
      <p>
        Això no és una acusació ni una anomalia: hi ha raons tècniques legítimes per registrar
        aquestes dades —seguretat, detecció d’abús, compliment legal— i moltes polítiques les
        expliquen. El que la taula deixa veure és una altra cosa: que la mateixa dada que serveix per
        protegir el compte serveix, al mateix temps i sense que s’hagi de tornar a demanar res, per
        construir el perfil.
      </p>

      <h2>Les dades que serveixen per seguir la gent</h2>
      <p>
        Seguir algú fora del servei vol dir reconèixer la mateixa persona en llocs on no ha entrat
        amb aquell compte. Per fer-ho calen identificadors estables, i aquestes són les dades que més
        fitxes declaren fer servir amb aquesta finalitat.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Tipus de dada</th>
            <th scope="col">Fitxes que la fan servir per al seguiment</th>
            <th scope="col">Sobre les que la recullen</th>
          </tr>
        </thead>
        <tbody>
          {topTracking.map((row) => (
            <tr key={row.dataTypeId}>
              <td>{row.name}</td>
              <td>
                <Bar value={row.usedForTracking} total={apps} unit="fitxes" />
              </td>
              <td className="meta">
                {num(row.usedForTracking)} de {num(row.reach)} (
                {pct(percentage(row.usedForTracking, row.reach))})
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Aquí és on la cessió a tercers pesa més. De les {num(analysis.totalRows)} files de la matriu,{' '}
        {num(graph.rowsToThirdParties)} declaren que la dada es comparteix amb tercers,{' '}
        {num(graph.rowsWithinGroup)} que es comparteix dins del mateix grup empresarial i{' '}
        {num(graph.rowsSharedWithNobody)} que no es comparteix amb ningú. Qui són aquests tercers és
        una pregunta que el model encara no sap respondre, i està explicada a{' '}
        <Link href="/analisi/grups">la pàgina de grups</Link>.
      </p>

      <h2>Categories especials</h2>
      <p>
        El Reglament general de protecció de dades tracta a part unes quantes categories —salut,
        biometria, conviccions, orientació sexual, origen ètnic— perquè el dany d’una filtració no és
        comparable. Al directori hi apareixen així:
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Fitxes que la recullen</th>
            <th scope="col">Lligada a la identitat</th>
          </tr>
        </thead>
        <tbody>
          {special.map((row) => (
            <tr key={row.dataTypeId}>
              <td>{row.name}</td>
              <td>
                <Bar value={row.reach} total={apps} unit="fitxes" />
              </td>
              <td className="meta">
                {row.reach > 0 ? `${num(row.linkedToIdentity)} de ${num(row.reach)}` : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Note>
        Les xifres d’aquesta taula són massa petites per generalitzar-hi res. No diuen que el sector
        reculli categories especials ni que no ho faci: diuen quines fitxes concretes ho declaren, i
        cada cas s’ha de llegir a la seva fitxa, amb la funció que el justifica al costat.
      </Note>

      <h2>El que el catàleg preveu i cap fitxa no documenta</h2>
      <p>
        {num(absent.length)} dels {num(analysis.rows.length)} tipus de dada catalogats no apareixen a
        cap fitxa:{' '}
        {absent.map((row) => row.name.toLowerCase()).join(', ')}.
      </p>
      <Note>
        Que no hi siguin no vol dir que ningú no els reculli. Una contrasenya o una data de naixement
        són dades que molts serveis demanen; el que diu aquesta llista és que cap de les{' '}
        {num(apps)} fitxes no ho ha documentat com a fila de la matriu. És feina nostra pendent, no
        una afirmació sobre els serveis.
      </Note>

      <BackToIndex />
    </>
  )
}
