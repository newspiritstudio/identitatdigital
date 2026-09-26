'use client'

import { useEffect, useRef, useState } from 'react'

import {
  clean,
  cleanFileName,
  FORMAT_LABELS,
  GROUP_LABELS,
  inspect,
  MAX_FILE_BYTES,
  MIME_TYPES,
  RISK_LABELS,
  type Cleaning,
  type Inspection,
  type MetaField,
  type MetaGroup,
} from '@/lib/metadata'
import { downloadBlob, useHydrated } from '@/lib/tools/useCopy'

import styles from '../credencials/contrasenyes.module.css'
import { de } from '@/lib/apostrof'

/**
 * Inspector i netejador de metadades.
 *
 * Els fitxers es llegeixen amb l'API de fitxers del navegador i es processen
 * aquí mateix: no hi ha cap petició de xarxa ni res que es desi. La còpia neta
 * es torna a inspeccionar abans d'oferir-la, de manera que el que diem que
 * queda és el que realment hi queda.
 */

const MAX_FILES = 20
const PREVIEWABLE = new Set(['jpeg', 'png', 'webp'])
const GROUP_ORDER: MetaGroup[] = [
  'location',
  'identity',
  'device',
  'time',
  'content',
  'software',
  'other',
]

const size = new Intl.NumberFormat('ca-ES', { maximumFractionDigits: 1 })
const formatBytes = (bytes: number) =>
  bytes < 1024
    ? `${bytes} B`
    : bytes < 1024 * 1024
      ? `${size.format(bytes / 1024)} kB`
      : `${size.format(bytes / 1024 / 1024)} MB`

type CleanState =
  | { kind: 'idle' }
  | { kind: 'cleaning' }
  | { kind: 'done'; result: Cleaning; preview: string | null }
  | { kind: 'error'; message: string }

type Item =
  | { id: string; name: string; bytes: number; kind: 'reading' }
  | { id: string; name: string; bytes: number; kind: 'rejected'; message: string }
  | {
      id: string
      name: string
      bytes: number
      kind: 'ready'
      inspection: Inspection
      clean: CleanState
    }

let counter = 0

const osmUrl = (lat: number, lon: number) =>
  `https://www.openstreetmap.org/?mlat=${lat.toFixed(6)}&mlon=${lon.toFixed(6)}#map=17/${lat.toFixed(6)}/${lon.toFixed(6)}`

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
    </a>
  )
}

function Fields({ fields }: { fields: MetaField[] }) {
  const groups = GROUP_ORDER.map((group) => ({
    group,
    fields: fields.filter((field) => field.group === group),
  })).filter((entry) => entry.fields.length > 0)
  return (
    <>
      {groups.map(({ group, fields: list }) => (
        <section key={group} className="metadata-group" data-group={group}>
          <h4>{GROUP_LABELS[group]}</h4>
          <dl className="metadata-fields">
            {list.map((field) => (
              <div key={`${field.key}:${field.label}`} data-risk={field.risk}>
                <dt>
                  {field.label}{' '}
                  <span className="badge" data-risk={field.risk}>
                    {RISK_LABELS[field.risk]}
                  </span>
                </dt>
                <dd>
                  <span className="metadata-value">{field.value}</span>
                  {field.why ? <span className="meta"> — {field.why}</span> : null}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </>
  )
}

function Verification({ result }: { result: Cleaning }) {
  const left = result.verification.fields
  const high = left.filter((field) => field.risk === 'high')
  return (
    <div className="metadata-verification">
      <p
        className={`${styles.result} ${high.length === 0 && !result.verification.gps ? styles.resultOk : styles.resultAlert}`}
      >
        {left.length === 0
          ? 'Còpia revisada: no hi queda cap metadada que sapiguem llegir.'
          : high.length === 0 && !result.verification.gps
            ? `Còpia revisada: no hi queda res de risc alt. ${left.length === 1 ? 'Hi queda 1 camp menor, detallat' : `Hi queden ${left.length} camps menors, detallats`} a sota.`
            : `Atenció: a la còpia encara hi ${high.length === 1 ? 'queda 1 camp' : `queden ${high.length} camps`} de risc alt.`}
      </p>
      {result.done.length > 0 ? (
        <>
          <h4>Què s’ha tret</h4>
          <p className="metadata-done">
            {result.done
              .map((line, index) =>
                index === 0 ? line.charAt(0).toUpperCase() + line.slice(1) : line,
              )
              .join(', ')}
            .
          </p>
        </>
      ) : null}
      {result.remaining.length > 0 ? (
        <>
          <h4>Què queda i per què</h4>
          <ul>
            {result.remaining.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </>
      ) : null}
      {left.length > 0 ? (
        <details>
          <summary>El que encara es llegeix a la còpia ({left.length})</summary>
          <Fields fields={left} />
        </details>
      ) : null}
    </div>
  )
}

export default function MetadataTool() {
  const hydrated = useHydrated()
  const [items, setItems] = useState<Item[]>([])
  const [dragging, setDragging] = useState(false)
  const [notice, setNotice] = useState('')
  const files = useRef(new Map<string, File>())
  const previews = useRef(new Set<string>())
  const input = useRef<HTMLInputElement>(null)

  // Les previsualitzacions són URL de blob: s'alliberen en sortir.
  useEffect(() => {
    const urls = previews.current
    return () => urls.forEach((url) => URL.revokeObjectURL(url))
  }, [])

  const update = (id: string, change: (item: Item) => Item) =>
    setItems((current) => current.map((item) => (item.id === id ? change(item) : item)))

  const add = (list: FileList | File[]) => {
    const incoming = [...list]
    if (incoming.length === 0) return
    const room = MAX_FILES - files.current.size
    const accepted = incoming.slice(0, Math.max(0, room))
    setNotice(
      incoming.length > accepted.length
        ? `Com a màxim ${MAX_FILES} fitxers alhora: se n’han deixat ${incoming.length - accepted.length} fora. Treu-ne algun i torna-ho a provar.`
        : '',
    )
    const fresh: Item[] = accepted.map((file) => {
      counter += 1
      const id = `f${counter}`
      if (file.size > MAX_FILE_BYTES) {
        return {
          id,
          name: file.name,
          bytes: file.size,
          kind: 'rejected',
          message: `És massa gran: el límit és ${formatBytes(MAX_FILE_BYTES)} per fitxer.`,
        }
      }
      if (file.size === 0)
        return { id, name: file.name, bytes: 0, kind: 'rejected', message: 'El fitxer és buit.' }
      files.current.set(id, file)
      return { id, name: file.name, bytes: file.size, kind: 'reading' }
    })
    setItems((current) => [...current, ...fresh])
    for (const item of fresh) {
      const file = files.current.get(item.id)
      if (!file) continue
      file
        .arrayBuffer()
        .then((buffer) => inspect(new Uint8Array(buffer)))
        .then((inspection) =>
          update(item.id, (current) => ({
            ...current,
            kind: 'ready',
            inspection,
            clean: { kind: 'idle' },
          })),
        )
        .catch(() =>
          update(item.id, (current) => ({
            ...current,
            kind: 'rejected',
            message: 'No s’ha pogut llegir el fitxer. Potser l’has mogut o esborrat.',
          })),
        )
    }
  }

  const releasePreview = (item: Item | undefined) => {
    if (item?.kind === 'ready' && item.clean.kind === 'done' && item.clean.preview) {
      URL.revokeObjectURL(item.clean.preview)
      previews.current.delete(item.clean.preview)
    }
  }

  const remove = (id: string) => {
    releasePreview(items.find((item) => item.id === id))
    files.current.delete(id)
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const clear = () => {
    items.forEach(releasePreview)
    files.current.clear()
    setItems([])
    setNotice('')
    if (input.current) input.current.value = ''
  }

  const runClean = async (id: string) => {
    const file = files.current.get(id)
    if (!file) return
    update(id, (item) => (item.kind === 'ready' ? { ...item, clean: { kind: 'cleaning' } } : item))
    try {
      const result = await clean(new Uint8Array(await file.arrayBuffer()))
      let preview: string | null = null
      if (PREVIEWABLE.has(result.verification.format)) {
        preview = URL.createObjectURL(
          new Blob([result.bytes as BlobPart], { type: MIME_TYPES[result.verification.format] }),
        )
        previews.current.add(preview)
      }
      update(id, (item) =>
        item.kind === 'ready' ? { ...item, clean: { kind: 'done', result, preview } } : item,
      )
    } catch (error) {
      update(id, (item) =>
        item.kind === 'ready'
          ? {
              ...item,
              clean: {
                kind: 'error',
                message:
                  error instanceof Error ? error.message : 'No s’ha pogut fer la còpia neta.',
              },
            }
          : item,
      )
    }
  }

  const download = (item: Item) => {
    if (item.kind !== 'ready' || item.clean.kind !== 'done') return
    const { result } = item.clean
    downloadBlob(
      cleanFileName(item.name),
      new Blob([result.bytes as BlobPart], { type: MIME_TYPES[result.verification.format] }),
    )
  }

  const ready = items.filter(
    (item): item is Extract<Item, { kind: 'ready' }> => item.kind === 'ready',
  )
  const withLocation = ready.filter(
    (item) =>
      item.inspection.gps || item.inspection.fields.some((field) => field.group === 'location'),
  ).length
  const withIdentity = ready.filter((item) =>
    item.inspection.fields.some((field) => field.group === 'identity'),
  ).length
  const withDevice = ready.filter((item) =>
    item.inspection.fields.some((field) => field.group === 'device' && field.risk !== 'low'),
  ).length

  return (
    <section className={`card ${styles.tool} metadata-tool`} aria-labelledby="inspector">
      <h2 id="inspector">Revisa i neteja els teus fitxers</h2>
      <div
        className="metadata-drop"
        data-dragging={dragging || undefined}
        onDragOver={(event) => {
          event.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(event) => {
          event.preventDefault()
          setDragging(false)
          if (hydrated) add(event.dataTransfer.files)
        }}
      >
        <div className={styles.controls}>
          <label className={styles.field} htmlFor="metadades-fitxers">
            <span>Tria fotos o documents (o arrossega’ls aquí)</span>
            <input
              ref={input}
              id="metadades-fitxers"
              type="file"
              multiple
              disabled={!hydrated}
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif,image/avif,.heic,.heif,.avif,application/pdf,.pdf,.docx,.xlsx,.pptx,.odt,.ods,.odp"
              aria-describedby="metadades-avis"
              onChange={(event) => {
                if (event.target.files) add(event.target.files)
                event.target.value = ''
              }}
            />
          </label>
        </div>
        <p id="metadades-avis" className="meta">
          Fotos JPEG, PNG, WebP i HEIC; PDF; Word, Excel, PowerPoint i LibreOffice. Fins a{' '}
          {MAX_FILES} fitxers de {formatBytes(MAX_FILE_BYTES)} com a màxim. Els fitxers no surten
          del teu dispositiu: es llegeixen i es netegen en aquesta pestanya, sense connexió a cap
          servidor.
        </p>
      </div>
      {notice ? (
        <p role="alert" className={styles.note}>
          {notice}
        </p>
      ) : null}

      {ready.length > 0 ? (
        <dl className="credentials-email-headline metadata-headline" aria-live="polite">
          <div>
            <dt>Fitxers revisats</dt>
            <dd className={styles.count}>{ready.length}</dd>
          </div>
          <div>
            <dt>Diuen on eres</dt>
            <dd className={styles.count}>{withLocation}</dd>
          </div>
          <div>
            <dt>Diuen qui ets</dt>
            <dd className={styles.count}>{withIdentity}</dd>
          </div>
          <div>
            <dt>Identifiquen l’aparell concret</dt>
            <dd className={styles.count}>{withDevice}</dd>
          </div>
        </dl>
      ) : null}

      {items.length > 0 ? (
        <>
          <ol className="plain metadata-files">
            {items.map((item) => (
              <li
                key={item.id}
                className="card metadata-file"
                data-state={item.kind}
                aria-busy={item.kind === 'reading'}
              >
                <h3>
                  <span className="metadata-name">{item.name}</span>{' '}
                  <span className="meta">
                    · {formatBytes(item.bytes)}
                    {item.kind === 'ready' ? ` · ${FORMAT_LABELS[item.inspection.format]}` : ''}
                  </span>
                </h3>

                {item.kind === 'reading' ? <p className={styles.note}>Llegint…</p> : null}
                {item.kind === 'rejected' ? (
                  <p className={`${styles.result} ${styles.resultUnknown}`}>{item.message}</p>
                ) : null}

                {item.kind === 'ready' ? (
                  <>
                    {item.inspection.format !== 'unknown' ? (
                      <p
                        className={`${styles.result} ${
                          item.inspection.fields.some((field) => field.risk === 'high')
                            ? styles.resultAlert
                            : item.inspection.fields.length === 0
                              ? styles.resultOk
                              : styles.resultUnknown
                        }`}
                      >
                        {item.inspection.fields.length === 0
                          ? 'No hi hem trobat metadades.'
                          : `${item.inspection.fields.length} ${item.inspection.fields.length === 1 ? 'camp' : 'camps'}, ${
                              item.inspection.fields.filter((field) => field.risk === 'high').length
                            } de risc alt.`}
                      </p>
                    ) : null}

                    {item.inspection.gps ? (
                      <p className="metadata-gps">
                        <strong>Ubicació exacta:</strong> {item.inspection.gps.lat.toFixed(6)},{' '}
                        {item.inspection.gps.lon.toFixed(6)}.{' '}
                        <ExternalLink
                          href={osmUrl(item.inspection.gps.lat, item.inspection.gps.lon)}
                        >
                          Mira-ho al mapa
                        </ExternalLink>
                        <span className="meta"> (OpenStreetMap; només s’obre si hi fas clic)</span>
                      </p>
                    ) : null}

                    <Fields
                      fields={item.inspection.fields.filter((field) => field.risk !== 'low')}
                    />
                    {item.inspection.fields.some((field) => field.risk === 'low') ? (
                      <details className="tool-more">
                        <summary>
                          {(() => {
                            const low = item.inspection.fields.filter(
                              (field) => field.risk === 'low',
                            ).length
                            return `${low} ${low === 1 ? 'camp més' : 'camps més'} de risc baix`
                          })()}
                        </summary>
                        <Fields
                          fields={item.inspection.fields.filter((field) => field.risk === 'low')}
                        />
                      </details>
                    ) : null}

                    {item.inspection.notes.length > 0 ? (
                      <ul className="metadata-notes">
                        {item.inspection.notes.map((note) => (
                          <li key={note}>{note}</li>
                        ))}
                      </ul>
                    ) : null}

                    <div className={styles.actions}>
                      {item.inspection.cleanable && item.clean.kind !== 'done' ? (
                        <button
                          type="button"
                          className={styles.buttonPrimary}
                          disabled={item.clean.kind === 'cleaning'}
                          onClick={() => runClean(item.id)}
                        >
                          {item.clean.kind === 'cleaning' ? 'Netejant…' : 'Fes-ne una còpia neta'}
                        </button>
                      ) : null}
                      {item.clean.kind === 'done' ? (
                        <button
                          type="button"
                          className={styles.buttonPrimary}
                          onClick={() => download(item)}
                        >
                          Descarrega {cleanFileName(item.name)}
                        </button>
                      ) : null}
                      <button
                        type="button"
                        className={styles.button}
                        onClick={() => remove(item.id)}
                      >
                        Treu-lo de la llista
                      </button>
                    </div>

                    <div aria-live="polite">
                      {item.clean.kind === 'error' ? (
                        <p role="alert" className={`${styles.result} ${styles.resultAlert}`}>
                          {item.clean.message}
                        </p>
                      ) : null}
                      {item.clean.kind === 'done' ? (
                        <>
                          <Verification result={item.clean.result} />
                          {item.clean.preview ? (
                            <details className="metadata-preview">
                              <summary>Mostra la còpia neta</summary>
                              <figure>
                                {/* eslint-disable-next-line @next/next/no-img-element -- és un blob local, no hi ha res a optimitzar */}
                                <img src={item.clean.preview} alt={`Còpia neta ${de(item.name)}`} />
                                <figcaption className="meta">
                                  La còpia neta té exactament els mateixos píxels; no s’ha tornat
                                  a comprimir.
                                </figcaption>
                              </figure>
                            </details>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  </>
                ) : null}

                {item.kind === 'rejected' ? (
                  <div className={styles.actions}>
                    <button type="button" className={styles.button} onClick={() => remove(item.id)}>
                      Treu-lo de la llista
                    </button>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
          <div className={styles.actions}>
            <button type="button" className={styles.button} onClick={clear}>
              Buida-ho tot
            </button>
          </div>
        </>
      ) : null}
    </section>
  )
}
