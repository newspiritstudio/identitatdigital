'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react'

import styles from './exposicio.module.css'
import { analyseSelection, outOf, scoreClass, type Exposure } from './compute'
import { COMPARABILITY_LABELS, DIMENSION_LABELS, type AppLite, type Snapshot } from './types'

/**
 * La calculadora, sencera, dins del navegador.
 *
 * No hi ha cap `fetch`, cap `action`, cap formulari que s'enviï enlloc i cap
 * escriptura fora de `localStorage`. És deliberat i és comprovable: amb la
 * pestanya de xarxa de les eines de desenvolupament oberta, marcar i desmarcar
 * aplicacions no genera ni una sola petició.
 *
 * L'única cosa que travessa la frontera servidor–client és la instantània, que
 * arriba ja calculada com a propietat i és la mateixa per a tothom: no depèn de
 * qui la demana ni del que hagi triat abans.
 */

const STORAGE_KEY = 'identitat.exposicio.seleccio'

/** Constant per no crear una matriu nova a cada dibuix i invalidar els memos. */
const NO_SELECTION: string[] = []

/**
 * Lectura de la selecció desada.
 *
 * Embolcallada en `try`/`catch` perquè `localStorage` llança excepcions en més
 * casos dels que sembla: navegació privada en alguns navegadors, cookies de
 * tercers bloquejades dins d'un marc, i configuracions que desactiven
 * l'emmagatzematge per lloc. Si falla, la pàgina funciona igual amb la selecció
 * buida, que és l'estat inicial normal.
 */
const readStoredSelection = (valid: Set<string>): string[] => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === null) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((entry): entry is string => typeof entry === 'string' && valid.has(entry))
  } catch {
    return []
  }
}

const writeStoredSelection = (selection: string[]): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selection))
  } catch {
    // Res a fer i res a dir: la tria continua vivint a la memòria de la pàgina.
  }
}

const clearStoredSelection = (): void => {
  try {
    window.localStorage.removeItem(STORAGE_KEY)
  } catch {
    /* Igual que a l'escriptura. */
  }
}

/**
 * Saber si ja s'ha hidratat, sense efectes ni estat.
 *
 * El servidor no pot saber què hi ha desat al dispositiu, de manera que el
 * primer dibuix ha de ser idèntic al del servidor —selecció buida— i només
 * després es pot mostrar la tria recuperada. `useSyncExternalStore` amb una
 * subscripció que no notifica mai fa exactament això: retorna `false` mentre
 * s'hidrata i `true` tot seguit. La via alternativa, cridar `setState` dins
 * d'un efecte, provoca una cascada de dibuixos i és el que React desaconsella.
 */
const neverChanges = () => () => {}
const useHydrated = (): boolean =>
  useSyncExternalStore(
    neverChanges,
    () => true,
    () => false,
  )

/** Barra de proporció amb la xifra sempre escrita al costat. */
function Proportion({ part, total, label }: { part: number; total: number; label: string }) {
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

function Score({ value }: { value: number | null }) {
  if (value === null) return <span className="unknown">sense puntuació</span>
  return <span className={scoreClass(value)}>{value}</span>
}

export default function ExposureTool({ snapshot }: { snapshot: Snapshot }) {
  const hydrated = useHydrated()
  const [query, setQuery] = useState('')

  /* La tria desada es llegeix una sola vegada, en inicialitzar l'estat, i
   * només al navegador. Al servidor sempre és buida. */
  const [stored, setSelection] = useState<string[]>(() => {
    if (typeof window === 'undefined') return []
    return readStoredSelection(new Set(snapshot.apps.map((app) => app.slug)))
  })

  /* Mentre s'hidrata es dibuixa la selecció buida, que és el que ha enviat el
   * servidor. Just després apareix la tria recuperada. Sense aquest pas, una
   * persona que torna a la pàgina veuria un avís d'error d'hidratació a la
   * consola i, segons el cas, les caselles desincronitzades. */
  const selection = hydrated ? stored : NO_SELECTION

  useEffect(() => {
    if (!hydrated) return
    if (stored.length === 0) clearStoredSelection()
    else writeStoredSelection(stored)
  }, [hydrated, stored])

  const toggle = useCallback((slug: string) => {
    setSelection((current) =>
      current.includes(slug) ? current.filter((entry) => entry !== slug) : [...current, slug],
    )
  }, [])

  const exposure = useMemo(() => analyseSelection(snapshot, selection), [snapshot, selection])

  /* Agrupació de les caselles per categoria. Una aplicació apareix una sola
   * vegada, a la seva primera categoria: les caselles duplicades farien que
   * marcar-ne una deixés l'altra desmarcada i semblés una errada. */
  const groups = useMemo(() => {
    const normalised = query.trim().toLocaleLowerCase('ca')
    const buckets = new Map<number, AppLite[]>()
    const loose: AppLite[] = []
    for (const app of snapshot.apps) {
      if (
        normalised.length > 0 &&
        !app.name.toLocaleLowerCase('ca').includes(normalised) &&
        !app.company.name.toLocaleLowerCase('ca').includes(normalised)
      ) {
        continue
      }
      if (app.categories.length === 0) {
        loose.push(app)
        continue
      }
      const first = app.categories[0]
      const bucket = buckets.get(first)
      if (bucket) bucket.push(app)
      else buckets.set(first, [app])
    }
    const ordered = [...buckets.entries()]
      .map(([index, apps]) => ({
        name: snapshot.categories[index]?.name ?? '(sense categoria)',
        apps,
      }))
      .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    if (loose.length > 0) ordered.push({ name: 'Sense categoria', apps: loose })
    return ordered
  }, [snapshot, query])

  const visible = groups.reduce((sum, group) => sum + group.apps.length, 0)

  return (
    <>
      <section className={styles.picker} aria-labelledby="tria">
        <h2 id="tria" style={{ marginTop: 0 }}>
          Tria les aplicacions que fas servir
        </h2>

        <div className={styles.search}>
          <label htmlFor="cerca">Cerca per nom d’aplicació o d’empresa</label>
          <input
            id="cerca"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            autoComplete="off"
            placeholder="Per exemple: Instagram"
          />
          <p className="meta">
            {query.trim().length > 0
              ? `${visible} de les ${snapshot.apps.length} fitxes publicades coincideixen amb la cerca.`
              : `${snapshot.apps.length} fitxes publicades. La cerca només filtra la llista: les que ja has marcat continuen comptant.`}
          </p>
        </div>

        {groups.map((group) => (
          <fieldset key={group.name} className={styles.group}>
            <legend>{group.name}</legend>
            <div className={styles.options}>
              {group.apps.map((app) => (
                <label key={app.slug} className={styles.option} htmlFor={`app-${app.slug}`}>
                  <input
                    type="checkbox"
                    id={`app-${app.slug}`}
                    checked={selection.includes(app.slug)}
                    onChange={() => toggle(app.slug)}
                  />
                  <span>
                    <span className={styles.optionName}>{app.name}</span>{' '}
                    <span className={styles.optionMeta}>{app.company.name}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        <div className={styles.actions}>
          <button type="button" onClick={() => setSelection([])} disabled={selection.length === 0}>
            Esborra la tria
          </button>
          <span className={styles.count}>
            {selection.length === 0
              ? 'Cap aplicació triada.'
              : `${selection.length} ${selection.length === 1 ? 'aplicació triada' : 'aplicacions triades'} de ${snapshot.publishedApps} publicades.`}
          </span>
        </div>
      </section>

      {/*
       * La regió de resultats es torna a dibuixar sencera a cada clic. Posar-hi
       * `aria-live` faria que un lector de pantalla recités quatre taules cada
       * vegada que es marca una casella, que és soroll, no accessibilitat. La
       * regió viva és només la línia de resum de dins —el `role="status"` de
       * `Results`—, que és discreta i diu exactament què ha canviat; la resta
       * queda com una regió navegable amb nom.
       */}
      <section aria-label="Resultats de la selecció">
        {exposure.selected === 0 ? <EmptyState /> : <Results exposure={exposure} />}
      </section>
    </>
  )
}

/**
 * Estat buit.
 *
 * Una pàgina en blanc amb un títol no explica què hi guanyaràs marcant una
 * casella. Això sí, i sense prometre cap veredicte: el que fa l'eina és sumar
 * fitxes, i el que en surt és una descripció, no una nota.
 */
function EmptyState() {
  return (
    <div className={styles.empty}>
      <h2 style={{ marginTop: 0 }}>Què passarà quan triïs</h2>
      <p>
        Cada fitxa del directori explica un servei. Aquesta eina els suma. En triar-ne unes quantes,
        la pàgina recombina el que ja hi ha documentat i respon sis preguntes que cap fitxa no pot
        respondre tota sola:
      </p>
      <ul>
        <li>
          <strong>Quines dades teves circulen</strong>, ordenades per sensibilitat, marcant les que
          queden vinculades a la teva identitat i les que serveixen per seguir-te fora del servei.
        </li>
        <li>
          <strong>Quantes empreses hi tenen accés</strong>: les responsables dels serveis i les que
          hi apareixen documentades com a destinatàries.
        </li>
        <li>
          <strong>Quins grups empresarials t’acumulen</strong>, que és la pregunta interessant,
          perquè la gent tria serveis que percep com a independents i sovint no ho són.
        </li>
        <li>
          <strong>Quin és el teu punt més feble</strong> i per quins indicadors concrets ho és.
        </li>
        <li>
          <strong>Si hi ha dades de l’article 9 del RGPD</strong> pel mig, que tenen un règim
          jurídic diferent.
        </li>
        <li>
          <strong>Què guanyaries i què perdries canviant</strong>, quan la fitxa documenta
          alternatives.
        </li>
      </ul>
      <p className="meta">
        L’eina no et posarà cap nota ni et dirà si estàs molt o poc exposat: no existeix cap
        puntuació d’exposició personal amb metodologia publicada, i inventar-ne una aquí contradiria
        la resta del projecte. El que veuràs són recomptes amb el seu denominador i un enllaç a la
        fitxa d’on surt cadascun.
      </p>
    </div>
  )
}

function Results({ exposure }: { exposure: Exposure }) {
  const total = exposure.selected
  const topGroup = exposure.groups[0]
  /* Els tipus de dada que apareixen a la taula però només amb la recollida sense
   * documentar no compten com a «dades que circulen»: encara no sabem si ho fan. */
  const collectedTypes = exposure.dataTypes.filter((dataType) => dataType.collectedBy > 0).length

  return (
    <>
      {/* Resum d'una línia, descriptiu i comprovable sumant les taules de sota.
          No hi ha cap valoració: només què hi ha i d'on surt. */}
      <p className={styles.summary} role="status">
        Has triat <strong>{total}</strong> {total === 1 ? 'aplicació' : 'aplicacions'}. Entre totes
        recullen <strong>{collectedTypes}</strong> tipus de dada diferents documentats, hi apareixen{' '}
        <strong>{exposure.namedCompanies}</strong>{' '}
        {exposure.namedCompanies === 1 ? 'empresa amb nom' : 'empreses amb nom'} i{' '}
        <strong>{exposure.appsInSharedGroups}</strong> de les {total} acaben en un grup empresarial
        compartit amb alguna altra de les que has triat.
      </p>

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
        pogut documentar. El que llegiràs a sota és el que consta documentat, no tot el que passa:
        un buit de documentació no és una absència de tractament.
      </p>

      {/* ─────────────── 1. Dades ─────────────── */}
      <h2>Quines dades teves circulen</h2>
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
      <h2>Categories especials de l’article 9 del RGPD</h2>
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
            consentiment explícit. Per això es diuen a part i no barrejades amb la resta.
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
      <h2>Quantes empreses hi tenen accés</h2>
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
      {/* Les empreses no s'enllacen: el directori encara no té fitxa pròpia per
          empresa, només l'arbre de grups a /empreses. Val més un nom sense
          enllaç que un enllaç trencat. */}
      <h3>Responsables dels serveis</h3>
      <p className={styles.tags}>
        {exposure.controllers.map((company) => (
          <span key={company.id} className="badge">
            {company.name}
          </span>
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
            <span key={company.id} className="badge">
              {company.name}
            </span>
          ))}
        </p>
      )}

      <h3>El que no es pot comptar: cessions sense destinatari</h3>
      <p>
        Les polítiques de privadesa parlen de «socis», «proveïdors de serveis» i «tercers» sense
        anomenar-los. Quan passa, la fitxa ho recull com el que és: sabem que la dada surt, no sabem
        cap on. Això no és un zero; és un forat de documentació que fa que el recompte d’empreses de
        sobre sigui necessàriament un mínim, mai un total.
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
      <h2>Quins grups empresarials t’acumulen</h2>
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
      <h2>El teu punt més feble</h2>
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
      <h2>Què guanyaries i què perdries canviant</h2>
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
