'use client'

import Link from 'next/link'

import styles from './exposicio.module.css'
import { outOf, scoreClass, type Exposure } from './compute'
import { COMPARABILITY_LABELS, DIMENSION_LABELS, type AppLite, type CompanyLite } from './types'

/**
 * Seccions descriptives del diagnòstic: quines dades circulen, quines empreses
 * hi accedeixen, quins grups les acumulen, el punt més feble i les
 * alternatives. Són les de la primera calculadora d'exposició, que continuen
 * sent el cor del diagnòstic; el pla d'acció, el mapa de risc i les filtracions
 * viuen en components propis.
 */

/** Barra de proporció amb la xifra sempre escrita al costat. */
export function Proportion({ part, total, label }: { part: number; total: number; label: string }) {
  const width = total === 0 ? 0 : Math.round((part / total) * 100)
  return (
    <span className={styles.numeric}>
      <span className={styles.bar} aria-hidden="true">
        <span className={styles.barFill} style={{ width: `${width}%` }} />
      </span>
      {part} de {total} {label}
    </span>
  )
}

export function Score({ value }: { value: number | null }) {
  if (value === null) return <span className="unknown">sense puntuació</span>
  return <span className={scoreClass(value)}>{value}</span>
}


/** Nom d'empresa enllaçat a la seva fitxa quan en té. */
function CompanyBadge({ company }: { company: CompanyLite }) {
  if (company.slug.length === 0) return <span className="badge">{company.name}</span>
  return (
    <Link className="badge" href={`/empreses/${company.slug}`}>
      {company.name}
    </Link>
  )
}

export function ExposureSections({ exposure }: { exposure: Exposure }) {
  const total = exposure.selected
  const topGroup = exposure.groups[0]

  return (
    <>
      {/* El grau de documentació es diu sempre, sigui alt o baix: és el que
          permet saber quant pesa el que llegiràs. Per damunt d'un quart de
          caselles sense resposta canvia de to, perquè llavors el resultat ja no
          és una descripció sinó un esbós. */}
      <p className={exposure.unknowns.share >= 25 ? styles.warning : 'meta'}>
        {exposure.unknowns.share >= 25 ? (
          <>
            <strong>Atenció al que no sabem.</strong>{' '}
          </>
        ) : null}
        De les caselles que es podrien haver documentat a les fitxes que has triat, un{' '}
        {exposure.unknowns.share} % encara no ho està: {exposure.unknowns.status} files de la matriu
        de dades no diuen si la dada es recull, {exposure.unknowns.sharing} no diuen amb qui es
        comparteix i {exposure.unknowns.indicators} indicadors de puntuació aplicables no s’han
        pogut documentar. A sota hi ha el que consta documentat, que no és tot el que passa: un
        buit a la fitxa no vol dir que el servei no ho faci.
      </p>

      {/* ─────────────── 1. Dades ─────────────── */}
      <h2 id="dades">Quines dades teves circulen</h2>
      <p>
        Unió dels tipus de dada que recullen les {total}{' '}
        {total === 1 ? 'aplicació triada' : 'aplicacions triades'}, de la més sensible a la menys.
        «Vinculada» vol dir que queda lligada a la teva identitat; «seguiment», que serveix per
        seguir-te fora del servei. Són les dues coses que converteixen una dada solta en un perfil.
      </p>
      <div className={styles.wide}>
        <table>
          <caption className="visually-hidden">
            Tipus de dada que recullen les aplicacions seleccionades, amb la seva sensibilitat i si
            queden vinculades a la identitat
          </caption>
          <thead>
            <tr>
              <th scope="col">Tipus de dada</th>
              <th scope="col">Sensibilitat</th>
              <th scope="col">La recullen</th>
              <th scope="col">Vinculada a la teva identitat</th>
              <th scope="col">Serveix per seguir-te</th>
            </tr>
          </thead>
          <tbody>
            {exposure.dataTypes.map((dataType) => (
              <tr key={dataType.slug}>
                <th scope="row" style={{ fontWeight: 500 }}>
                  {dataType.name}
                  {dataType.special ? (
                    <>
                      {' '}
                      <span className="badge">article 9 del RGPD</span>
                    </>
                  ) : null}
                  {dataType.optional > 0 ? (
                    <div className="meta">
                      {dataType.always} sempre · {dataType.optional} només si ho actives
                    </div>
                  ) : null}
                </th>
                <td className={styles.numeric}>{dataType.sensitivity} sobre 5</td>
                <td>
                  <Proportion part={dataType.collectedBy} total={total} label="que has triat" />
                  {dataType.statusUnknown > 0 ? (
                    <div className="unknown">
                      {dataType.statusUnknown} més la mencionen sense poder dir si la recullen
                    </div>
                  ) : null}
                </td>
                <td className={styles.numeric}>
                  {dataType.linked} de {dataType.collectedBy}
                  {dataType.linkedUnknown > 0 ? (
                    <div className="unknown">{dataType.linkedUnknown} no documentades</div>
                  ) : null}
                </td>
                <td className={styles.numeric}>
                  {dataType.tracking} de {dataType.collectedBy}
                  {dataType.trackingUnknown > 0 ? (
                    <div className="unknown">{dataType.trackingUnknown} no documentades</div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {exposure.unknowns.appsWithoutMatrix > 0 ? (
        <p className="unknown">
          {outOf(exposure.unknowns.appsWithoutMatrix, total)} encara no tenen cap fila de matriu de
          dades documentada i, per tant, no aporten res a aquesta taula.
        </p>
      ) : null}

      {/* ─────────────── 5. Categories especials ─────────────── */}
      <h2 id="article-9">Categories especials de l’article 9 del RGPD</h2>
      {exposure.specialCategories.length === 0 ? (
        <p>
          Cap de les {total} {total === 1 ? 'fitxa triada' : 'fitxes triades'} no documenta la
          recollida de dades de l’article 9 del RGPD —origen ètnic, opinions polítiques, religió,
          afiliació sindical, genètica, biometria identificativa, salut, vida o orientació sexual.
          Que no consti documentat no vol dir que no passi.
        </p>
      ) : (
        <>
          <p>
            Aquestes dades tenen un règim jurídic propi: el tractament està prohibit per defecte i
            només és lícit si es compleix una de les excepcions de l’article 9.2, normalment el
            consentiment explícit, i per això es compten a part.
          </p>
          <ul className="plain">
            {exposure.specialCategories.map((dataType) => (
              <li key={dataType.slug}>
                <strong>{dataType.name}</strong>: {outOf(dataType.collectedBy, total)} (
                {dataType.apps.join(', ')}).
              </li>
            ))}
          </ul>
        </>
      )}

      {/* ─────────────── 2. Empreses ─────────────── */}
      <h2 id="empreses">Quantes empreses hi tenen accés</h2>
      <p>
        {total === 1
          ? 'L’aplicació que has triat té'
          : `Les ${total} aplicacions que has triat tenen`}{' '}
        darrere <strong>{exposure.controllers.length}</strong>{' '}
        {exposure.controllers.length === 1
          ? 'empresa responsable'
          : 'empreses responsables diferents'}
        {exposure.recipients.length > 0 ? (
          <>
            , i a les fitxes hi apareixen <strong>{exposure.recipients.length}</strong>{' '}
            {exposure.recipients.length === 1
              ? 'empresa més com a destinatària amb nom'
              : 'empreses més com a destinatàries amb nom'}
          </>
        ) : null}
        . En total, <strong>{exposure.namedCompanies}</strong>{' '}
        {exposure.namedCompanies === 1
          ? 'empresa que podem anomenar'
          : 'empreses que podem anomenar'}
        .
      </p>
      <h3>Responsables dels serveis</h3>
      <p className={styles.tags}>
        {exposure.controllers.map((company) => (
          <CompanyBadge key={company.id} company={company} />
        ))}
      </p>
      <h3>Destinatàries documentades amb nom</h3>
      {exposure.recipients.length === 0 ? (
        <p className="unknown">
          Cap. A les fitxes que has triat no hi ha cap rastrejador de tercers amb empresa
          identificada.
        </p>
      ) : (
        <p className={styles.tags}>
          {exposure.recipients.map((company) => (
            <CompanyBadge key={company.id} company={company} />
          ))}
        </p>
      )}

      <h3>El que no es pot comptar: cessions sense destinatari</h3>
      <p>
        Les polítiques de privadesa parlen de «socis», «proveïdors de serveis» i «tercers» sense
        anomenar-los. Quan passa, la fitxa ho recull com el que és: sabem que la dada surt, no sabem
        cap on. Compta com un forat de documentació, no com un zero, i per això el recompte
        d’empreses de sobre és sempre un mínim.
      </p>
      <ul>
        <li>
          <strong>{exposure.rowsToUnnamedThirdParties}</strong> files de matriu de dades cedides a
          tercers sense destinatari identificat.
        </li>
        <li>
          <strong>{exposure.rowsToUnnamedBrokers}</strong> files cedides a intermediaris de dades
          sense destinatari identificat.
        </li>
        <li>
          <strong>{exposure.unknowns.sharing}</strong> files on la dada es recull i no consta
          documentat amb qui es comparteix.
        </li>
        {exposure.unnamedTrackers > 0 ? (
          <li>
            <strong>{exposure.unnamedTrackers}</strong> rastrejadors de tercers documentats a les
            fitxes sense empresa assignada.
          </li>
        ) : null}
      </ul>

      {/* ─────────────── 3. Grups ─────────────── */}
      <h2 id="grups">Quins grups empresarials t’acumulen</h2>
      <p>
        Cada aplicació compta una sola vegada, al grup de la seva matriu última. La columna de tipus
        de dada és la unió de tot el que li arriba sumant les seves aplicacions: és la part que no
        es veu mirant les fitxes d’una en una.
      </p>
      <div className={styles.wide}>
        <table>
          <caption className="visually-hidden">
            Grups empresarials que acumulen dades de les aplicacions seleccionades
          </caption>
          <thead>
            <tr>
              <th scope="col">Grup</th>
              <th scope="col">Aplicacions teves</th>
              <th scope="col">Tipus de dada que hi arriben</th>
            </tr>
          </thead>
          <tbody>
            {exposure.groups.map((group) => (
              <tr key={group.company.id.length > 0 ? group.company.id : group.company.name}>
                <th scope="row" style={{ fontWeight: 500 }}>
                  {group.company.name}
                  {group.companies.length > 1 ? (
                    <div className="meta">
                      A través de {group.companies.map((company) => company.name).join(', ')}.
                    </div>
                  ) : null}
                </th>
                <td>
                  <Proportion part={group.apps.length} total={total} label="que has triat" />
                  <div className="meta">{group.apps.map((app) => app.name).join(', ')}</div>
                </td>
                <td className={styles.numeric}>
                  {group.dataTypes}
                  {group.sharedAcrossApps > 0 ? (
                    <div className="meta">
                      {group.sharedAcrossApps} li arriben per més d’una aplicació teva
                    </div>
                  ) : null}
                  {group.specialDataTypes > 0 ? (
                    <div className="meta">{group.specialDataTypes} de l’article 9</div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {topGroup && topGroup.apps.length > 1 ? (
        <p>
          El grup que en concentra més és <strong>{topGroup.company.name}</strong>:{' '}
          {outOf(topGroup.apps.length, total)}, i li arriben {topGroup.dataTypes} tipus de dada
          diferents sumant-les totes
          {topGroup.sharedAcrossApps > 0
            ? `, dels quals ${topGroup.sharedAcrossApps} per més d’una via`
            : ''}
          .
        </p>
      ) : (
        <p>
          Cap grup no n’acumula més d’una: les {total}{' '}
          {total === 1
            ? 'aplicació que has triat pertany a'
            : 'aplicacions que has triat pertanyen a'}{' '}
          {exposure.groups.length === 1
            ? 'un sol grup'
            : `${exposure.groups.length} grups diferents`}
          .
        </p>
      )}

      {/* ─────────────── 4. Punt més feble ─────────────── */}
      <h2 id="punt-feble">El teu punt més feble</h2>
      {exposure.weakest === null ? (
        <p className="unknown">
          Cap de les {total} {total === 1 ? 'fitxa triada' : 'fitxes triades'} no té encara
          puntuació global calculada, de manera que no es poden comparar entre elles.
        </p>
      ) : (
        <Weakest app={exposure.weakest} total={total} />
      )}
      {exposure.appsWithoutScore > 0 ? (
        <p className="unknown">
          {outOf(exposure.appsWithoutScore, total)} no tenen puntuació global i queden fora
          d’aquesta comparació.
        </p>
      ) : null}
      {exposure.provisionalScores > 0 ? (
        <p className="meta">
          {outOf(exposure.provisionalScores, total)} tenen la puntuació marcada com a provisional:
          la confiança encara és massa baixa per comparar-les amb la resta.
        </p>
      ) : null}

      {/* ─────────────── 6. Alternatives ─────────────── */}
      <h2 id="alternatives">Què guanyaries i què perdries canviant</h2>
      {exposure.alternatives.length === 0 ? (
        <p className="unknown">
          Cap de les {total} {total === 1 ? 'fitxa triada' : 'fitxes triades'} no té alternatives
          documentades. No vol dir que no n’hi hagi: vol dir que encara no les hem analitzat.
        </p>
      ) : (
        <>
          <p>
            Alternatives triades per la redacció a les fitxes que has marcat. Cap canvi és gratuït:
            la columna de la dreta diu què s’hi perd, i quan és buida és perquè la fitxa encara no
            ho documenta, no perquè no hi hagi contrapartida.
          </p>
          <div className={styles.wide}>
            <table>
              <caption className="visually-hidden">
                Alternatives possibles a les aplicacions seleccionades, amb la diferència de
                puntuació i què s’hi perd
              </caption>
              <thead>
                <tr>
                  <th scope="col">Si canviessis</th>
                  <th scope="col">Per</th>
                  <th scope="col">Diferència de puntuació</th>
                  <th scope="col">Què s’hi perd</th>
                </tr>
              </thead>
              <tbody>
                {exposure.alternatives.map((offer) => (
                  <tr key={`${offer.from.slug}-${offer.to.slug}`}>
                    <th scope="row" style={{ fontWeight: 500 }}>
                      <Link href={`/aplicacions/${offer.from.slug}`}>{offer.from.name}</Link>
                      <div className="meta">
                        Global: <Score value={offer.from.overall} />
                      </div>
                    </th>
                    <td>
                      <Link href={`/aplicacions/${offer.to.slug}`}>{offer.to.name}</Link>
                      <div className="meta">
                        Global: <Score value={offer.to.overall} /> ·{' '}
                        {COMPARABILITY_LABELS[offer.to.comparability]}
                      </div>
                      {offer.to.rationale.length > 0 ? <p>{offer.to.rationale}</p> : null}
                    </td>
                    <td>
                      {offer.delta === null ? (
                        <span className="unknown">no comparable</span>
                      ) : (
                        <span
                          className={`${styles.delta} ${
                            offer.delta > 0
                              ? styles.deltaUp
                              : offer.delta < 0
                                ? styles.deltaDown
                                : ''
                          }`}
                        >
                          {offer.delta > 0 ? '+' : ''}
                          {offer.delta} punts
                        </span>
                      )}
                    </td>
                    <td className={styles.tradeOff}>
                      {offer.to.tradeOffs ?? <span className="unknown">no documentat</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {exposure.appsWithoutAlternatives > 0 ? (
            <p className="unknown">
              {outOf(exposure.appsWithoutAlternatives, total)} no tenen cap alternativa documentada
              a la fitxa.
            </p>
          ) : null}
        </>
      )}
    </>
  )
}

/**
 * Detall de la fitxa amb la puntuació global més baixa.
 *
 * El que importa no és la xifra sinó el motiu: la llista d'indicadors surt de
 * `scores.breakdown`, que és el mateix detall reproduïble que fa servir la
 * metodologia publicada. Els indicadors sense evidència no hi surten, perquè no
 * fan baixar res: es compten a part.
 */
function Weakest({ app, total }: { app: AppLite; total: number }) {
  return (
    <>
      <p>
        De les {total} {total === 1 ? 'aplicació triada' : 'aplicacions triades'}, la que té la
        puntuació global més baixa és{' '}
        <strong>
          <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
        </strong>
        , amb <Score value={app.overall} /> sobre 100
        {app.confidence !== null ? ` i un grau de confiança de ${app.confidence} sobre 100` : ''}
        {app.provisional ? ' (marcada com a provisional)' : ''}.
      </p>
      {app.weakIndicators.length === 0 ? (
        <p className="unknown">
          La fitxa no té el detall per indicador desat, de manera que no en podem explicar el motiu
          concret.
        </p>
      ) : (
        <>
          <p>Els indicadors documentats que més l’estiren cap avall són aquests:</p>
          <ul>
            {app.weakIndicators.map((indicator) => (
              <li key={indicator.key.length > 0 ? indicator.key : indicator.label}>
                <strong>{indicator.label}</strong>{' '}
                <span className="badge">
                  {DIMENSION_LABELS[indicator.dimension] ?? indicator.dimension}
                </span>{' '}
                — puntua {Math.round(indicator.value * 100)} sobre 100.
              </li>
            ))}
          </ul>
        </>
      )}
      {app.unknownIndicators > 0 ? (
        <p className="meta">
          A més, {app.unknownIndicators} indicadors aplicables d’aquesta fitxa no s’han pogut
          documentar. No compten com a negatius: en surten del càlcul i el que se’n ressent és el
          grau de confiança, no la puntuació.
        </p>
      ) : null}
    </>
  )
}
