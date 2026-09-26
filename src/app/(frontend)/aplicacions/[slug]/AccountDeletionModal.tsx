'use client'

import { useEffect, useRef, useState } from 'react'
import type { App } from '@/payload-types'
import { de } from '@/lib/apostrof'

type Deletion = App['accountDeletion']

type Props = {
  appName: string
  deletion: Deletion | null | undefined
  brandColor?: string | null
}

export default function AccountDeletionModal({
  appName,
  deletion,
  brandColor,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const onClose = () => setOpen(false)

    dialog.addEventListener('close', onClose)

    return () => {
      dialog.removeEventListener('close', onClose)
    }
  }, [])

  const openDialog = () => {
    dialogRef.current?.showModal()
    setOpen(true)
  }

  const closeDialog = () => {
    dialogRef.current?.close()
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        className="applink action applink-button deletion-action"
        style={
          brandColor
            ? ({ '--brand': brandColor } as React.CSSProperties)
            : undefined
        }
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={openDialog}
      >
        Esborrar el compte
      </button>

      <dialog
        ref={dialogRef}
        className="deletion-dialog"
        aria-labelledby="deletion-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog()
          }
        }}
      >
        <div className="deletion-dialog-inner">

          {/* CAPÇALERA */}
          <button
              type="button"
              className="dialog-close"
              onClick={closeDialog}
              aria-label="Tancar"
            >
              <span aria-hidden="true">×</span>
            </button>

          <header className="deletion-dialog-header">
            <div>
              <h2 id="deletion-dialog-title">
                Esborrar el compte {de(appName)}
              </h2>

              <p className="deletion-dialog-intro">
                Informació disponible sobre el procés d’eliminació del compte,
                els passos necessaris i les dades que es poden conservar.
              </p>
            </div>

            
          </header>

          {/* RESUM */}

          <section
            className="deletion-summary"
            aria-labelledby="deletion-summary-title"
          >
            <h3 id="deletion-summary-title">Abans de començar</h3>

            <dl className="deletion-facts">
              <div className="deletion-fact">
                <dt>Eliminació disponible</dt>
                <dd>
                  <span
                    className={
                      deletion?.possible
                        ? 'deletion-status is-positive'
                        : 'deletion-status is-negative'
                    }
                  >
                    {deletion?.possible ? 'Sí' : 'No'}
                  </span>
                </dd>
              </div>

              <div className="deletion-fact">
                <dt>Es pot fer des de l’app</dt>
                <dd>
                  {deletion?.selfService ? 'Sí' : 'No'}
                </dd>
              </div>

              <div className="deletion-fact">
                <dt>Dificultat</dt>
                <dd>
                  {difficultyLabel(deletion?.difficulty)}
                </dd>
              </div>

              <div className="deletion-fact">
                <dt>Temps d’espera</dt>
                <dd>
                  {deletion?.waitingPeriodDays === null ||
                  deletion?.waitingPeriodDays === undefined
                    ? 'No documentat'
                    : `${deletion.waitingPeriodDays} dies`}
                </dd>
              </div>

              <div className="deletion-fact">
                <dt>Cal contactar amb suport</dt>
                <dd>
                  {deletion?.requiresSupportContact ? 'Sí' : 'No'}
                </dd>
              </div>
            </dl>
          </section>

          {/* PASSOS */}

          {(deletion?.steps ?? []).length > 0 ? (
            <section
              className="deletion-steps-section"
              aria-labelledby="deletion-steps-title"
            >
              <div className="deletion-section-heading">
                <p className="meta">Procés</p>
                <h3 id="deletion-steps-title">
                  Passos per esborrar el compte
                </h3>
              </div>

              <ol className="deletion-steps">
                {(deletion?.steps ?? []).map((step, index) => (
                  <li key={step.id} className="deletion-step">
                    <span
                      className="deletion-step-number"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>

                    <div className="deletion-step-content">
                      <p>{step.step}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : (
            <section
              className="deletion-steps-section"
              aria-labelledby="deletion-steps-title"
            >
              <div className="deletion-section-heading">
                <p className="meta">Procés</p>
                <h3 id="deletion-steps-title">
                  Passos per esborrar el compte
                </h3>
              </div>

              <p className="unknown">
                No hi ha cap pas del procés documentat.
              </p>
            </section>
          )}

          {/* INFORMACIÓ ADDICIONAL */}

          {(deletion?.obstacles || deletion?.dataRetained) && (
            <section
              className="deletion-additional"
              aria-labelledby="deletion-additional-title"
            >
              <div className="deletion-section-heading">
                <p className="meta">Informació addicional</p>
                <h3 id="deletion-additional-title">
                  Què cal tenir en compte
                </h3>
              </div>

              <div className="deletion-notes">
                {deletion?.obstacles ? (
                  <div className="deletion-note">
                    <h4>Possibles obstacles</h4>
                    <p>{deletion.obstacles}</p>
                  </div>
                ) : null}

                {deletion?.dataRetained ? (
                  <div className="deletion-note">
                    <h4>Dades que es poden conservar</h4>
                    <p>{deletion.dataRetained}</p>
                  </div>
                ) : null}
              </div>
            </section>
          )}

          {/* ACCIÓ FINAL */}

          <footer className="deletion-dialog-footer">
            {deletion?.directUrl ? (
              <>
                <div>
                  <p className="meta">Acció</p>
                  <h3>Iniciar l’eliminació</h3>
                  <p>
                    Obre la pàgina corresponent per iniciar el procés
                    d’eliminació del compte.
                  </p>
                </div>

                <a
                  href={deletion.directUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="applink action deletion-primary-action"
                >
                  Esborrar el compte
                  <span className="visually-hidden">
                    {' '}
                    (s’obre en una pestanya nova)
                  </span>
                </a>
              </>
            ) : (
              <p className="unknown">
                No hi ha cap enllaç directe documentat per iniciar
                l’eliminació.
              </p>
            )}
          </footer>
        </div>
      </dialog>
    </>
  )
}

function difficultyLabel(value: string | null | undefined) {
  switch (value) {
    case 'easy':
      return 'Fàcil'
    case 'medium':
      return 'Mitjana'
    case 'hard':
      return 'Difícil'
    case 'impossible':
      return 'No és possible'
    default:
      return 'No documentada'
  }
}

