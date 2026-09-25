'use client'

import { useRef } from 'react'
import type { ReactNode } from 'react'

type AppDetailsModalProps = {
  children: ReactNode
}

export default function AppDetailsModal({
  children,
}: AppDetailsModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const closeDialog = () => {
    dialogRef.current?.close()
  }

  return (
    <>
      <button
        type="button"
        className="section-link"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
      >
        Veure la fitxa completa
      </button>

      <dialog
        ref={dialogRef}
        className="details-dialog"
        aria-labelledby="details-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog()
          }
        }}
      >
        <div className="details-dialog-inner">

          <header className="details-dialog-header">
            <div>
              <p className="meta">Fitxa completa</p>

              <h2 id="details-dialog-title">
                Informació detallada
              </h2>

              <p className="details-dialog-intro">
                Consulta tota la informació documentada sobre aquesta
                aplicació.
              </p>
            </div>

            <button
              type="button"
              className="dialog-close"
              onClick={closeDialog}
              aria-label="Tancar"
            >
              <span aria-hidden="true">×</span>
            </button>
          </header>

          <div className="details-dialog-content">
            {children}
          </div>

        </div>
      </dialog>
    </>
  )
}
