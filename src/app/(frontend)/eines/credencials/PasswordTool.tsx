'use client'

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'

import {
  CHARACTER_CLASS_LABELS,
  MIN_PASSWORD_LENGTH,
  generatePassword,
  type CharacterClass,
  type GeneratedPassword,
} from '@/lib/passwords/password'
import {
  MAX_WORDS,
  MIN_WORDS,
  SEPARATORS,
  generatePassphrase,
  type GeneratedPassphrase,
} from '@/lib/passwords/passphrase'
import { crackEstimates, strengthLabel } from '@/lib/passwords/strength'
import { WORDLIST_CA } from '@/lib/passwords/wordlist.ca'

import styles from './contrasenyes.module.css'
import PasswordAudit, { type PasswordAuditHandle } from './PasswordAudit'
import { spellOut, spellPassphrase } from './spell'

/**
 * Tota l'eina, dins del navegador.
 *
 * Res del que es genera aquí no s'envia enlloc i res no es desa: ni a la memòria
 * del navegador, ni en una galeta, ni en un registre. Quan es tanca la pestanya
 * no en queda res. L'única petició de xarxa que fa aquesta part és la de la
 * comprovació de filtracions de l'auditoria, només quan algú prem el botó, i el
 * que hi viatja són cinc caràcters hexadecimals del resum: mai la contrasenya.
 */

/* ───────────────────────── generar només al navegador ───────────────────── */

const noSubscribe = () => () => {}

/**
 * Cert només quan el component ja s'executa al navegador.
 *
 * El servidor no ha de generar mai cap contrasenya: si en generés una, l'hauria
 * vista, i aquesta pàgina promet el contrari. Per això la pintada del servidor
 * no en té cap i la primera es genera un cop el component ja és al dispositiu.
 */
const useIsClient = () =>
  useSyncExternalStore(
    noSubscribe,
    () => true,
    () => false,
  )

/* ─────────────────────────── copiar al porta-retalls ─────────────────────── */

const useCopy = () => {
  const [message, setMessage] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )

  const announce = useCallback((text: string) => {
    setMessage(text)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setMessage(''), 6000)
  }, [])

  /*
   * `navigator.clipboard` no hi és sempre: cal un context segur i, en alguns
   * navegadors, permís. Si falla hi ha la reserva de sempre (una àrea de text
   * amagada i `execCommand`), i si també falla ho diem clarament. El que no pot
   * passar mai és que algú premi «Copia» i es quedi sense saber si s'ha copiat:
   * enganxaria una contrasenya antiga sense adonar-se'n.
   */
  const copy = useCallback(
    async (value: string) => {
      if (!value) return
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value)
          announce('Copiada al porta-retalls.')
          return
        }
      } catch {
        // Provem la reserva.
      }
      try {
        const area = document.createElement('textarea')
        area.value = value
        area.setAttribute('readonly', '')
        area.style.position = 'fixed'
        area.style.opacity = '0'
        document.body.appendChild(area)
        area.select()
        const copied = document.execCommand('copy')
        document.body.removeChild(area)
        announce(
          copied
            ? 'Copiada al porta-retalls.'
            : 'No s’ha pogut copiar: selecciona-la i copia-la a mà.',
        )
      } catch {
        announce('No s’ha pogut copiar: selecciona-la i copia-la a mà.')
      }
    },
    [announce],
  )

  return { message, copy }
}

/* ──────────────────────────────── la força ───────────────────────────────── */

const oneDecimal = new Intl.NumberFormat('ca-ES', { maximumFractionDigits: 1 })
const plain = new Intl.NumberFormat('ca-ES')

function Strength({ bits, exact }: { bits: number; exact: boolean }) {
  const label = strengthLabel(bits)
  const estimates = crackEstimates(bits)

  // La barra no és informació: és decoració. La xifra i l'etiqueta van escrites
  // al costat, perquè ni un color ni una amplada no diuen res a qui no els veu.
  const fill = Math.min(100, Math.round((bits / 128) * 100))
  const fillClass =
    label.tone === 'bad'
      ? `${styles.meterFill} ${styles.meterFillBad}`
      : label.tone === 'good'
        ? `${styles.meterFill} ${styles.meterFillGood}`
        : styles.meterFill

  return (
    <div className={styles.strength}>
      <p>
        Força: <span className={styles.bits}>{oneDecimal.format(bits)} bits</span> d’entropia,{' '}
        <strong>{label.level}</strong>. {label.advice}
      </p>
      <div className={styles.meter} aria-hidden="true">
        <span className={fillClass} style={{ width: `${fill}%` }} />
      </div>
      <p className="meta">
        {exact
          ? 'Xifra exacta: sabem exactament com s’ha generat, de manera que els bits es compten, no s’estimen.'
          : 'Cota inferior: forçar classes de caràcters trenca la uniformitat, i el càlcul es queda curt a posta.'}
      </p>

      <table className={styles.scenarios}>
        <caption className="meta">
          Temps mitjà per trobar-la provant combinacions. Cada xifra val només amb la hipòtesi del
          costat: un temps de trencament sense dir quin atac se suposa no vol dir res.
        </caption>
        <thead>
          <tr>
            <th scope="col">Escenari</th>
            <th scope="col">Temps</th>
          </tr>
        </thead>
        <tbody>
          {estimates.map((estimate) => (
            <tr key={estimate.id}>
              <th scope="row">
                {estimate.label}
                <span className={styles.assumption}>{estimate.assumption}</span>
              </th>
              <td>{estimate.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ────────────────────── la caixa amb la contrasenya ──────────────────────── */

function Secret({
  value,
  spelled,
  describedAs,
  onSend,
}: {
  value: string
  spelled: string
  describedAs: string
  onSend: (value: string) => void
}) {
  const { message, copy } = useCopy()

  return (
    <>
      {/*
       * `output` porta una regió activa discreta de sèrie: quan se'n genera una
       * de nova, el lector de pantalla llegeix la versió lletrejada i no el text
       * visible, que queda amagat perquè, llegit de cop, seria inintel·ligible.
       */}
      <output className={styles.secret}>
        <span
          className={value ? styles.value : `${styles.value} ${styles.valueEmpty}`}
          aria-hidden="true"
        >
          {value || 'Encara no se n’ha generat cap.'}
        </span>
        {/*
         * La descripció va fora de la caixa visible: si fos a dins, seleccionar
         * la contrasenya per copiar-la a mà arrossegaria també aquest text.
         */}
        <span className={styles.srOnly}>
          {describedAs}: {spelled}
        </span>
      </output>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.button}
          onClick={() => void copy(value)}
          disabled={!value}
        >
          Copia
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => onSend(value)}
          disabled={!value}
        >
          Afegeix-la a l’auditoria
        </button>
        <span className={styles.copyState} role="status">
          {message}
        </span>
      </div>
    </>
  )
}

/* ───────────────────────────── frases de pas ─────────────────────────────── */

function PassphrasePanel({ onSend }: { onSend: (value: string) => void }) {
  const [words, setWords] = useState(6)
  const [separator, setSeparator] = useState<string>('-')
  const [digit, setDigit] = useState(false)
  const [capitalise, setCapitalise] = useState(false)
  // Cada increment demana una frase nova amb les mateixes opcions.
  const [nonce, setNonce] = useState(0)
  const isClient = useIsClient()

  const result: GeneratedPassphrase | null = useMemo(() => {
    void nonce
    if (!isClient) return null
    return generatePassphrase({ words, separator, digit, capitalise }, WORDLIST_CA)
  }, [isClient, words, separator, digit, capitalise, nonce])

  return (
    <section className={`card ${styles.tool}`} aria-labelledby="frases">
      <h3 id="frases">Frase de pas</h3>
      <p>
        Sis paraules catalanes triades a l’atzar són 66 bits: resisteixen qualsevol atac de força
        bruta d’avui i, a diferència d’una ristra de símbols, es poden recordar i teclejar. És el
        que val la pena fer servir per a les poques contrasenyes que has de saber de memòria.
      </p>

      <fieldset className={styles.controls}>
        <legend className={styles.srOnly}>Opcions de la frase de pas</legend>

        <label className={styles.field} htmlFor="fp-words">
          <span>Paraules</span>
          <span className={styles.range}>
            <input
              id="fp-words"
              type="range"
              min={MIN_WORDS}
              max={MAX_WORDS}
              step={1}
              value={words}
              onChange={(event) => setWords(Number(event.target.value))}
            />
            <span className={styles.rangeValue} aria-hidden="true">
              {words}
            </span>
          </span>
        </label>

        <label className={styles.field} htmlFor="fp-separator">
          <span>Separador</span>
          <select
            id="fp-separator"
            value={separator}
            onChange={(event) => setSeparator(event.target.value)}
          >
            {SEPARATORS.map((option) => (
              <option key={option} value={option}>
                {option === ' ' ? 'espai' : option}
              </option>
            ))}
          </select>
        </label>

        <div className={styles.field}>
          <span id="fp-extres">Afegits</span>
          <div className={styles.checks} role="group" aria-labelledby="fp-extres">
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={digit}
                onChange={(event) => setDigit(event.target.checked)}
              />
              Xifra al final
            </label>
            <label className={styles.check}>
              <input
                type="checkbox"
                checked={capitalise}
                onChange={(event) => setCapitalise(event.target.checked)}
              />
              Majúscules inicials
            </label>
          </div>
        </div>
      </fieldset>

      {(digit || capitalise) && (
        <p className={styles.note}>
          {digit && (
            <>
              La xifra del final aporta 3,3 bits: multiplica per deu la feina de qui ataca, mentre
              que una paraula més la multiplicaria per 2.048.{' '}
            </>
          )}
          {capitalise && (
            <>Les majúscules inicials aporten zero bits: són una transformació fixa. </>
          )}
          Totes dues opcions serveixen per passar formularis que les exigeixen, no per guanyar
          força.
        </p>
      )}

      <Secret
        value={result?.value ?? ''}
        spelled={result ? spellPassphrase(result.value, result.separator) : ''}
        describedAs="Frase de pas generada"
        onSend={onSend}
      />

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.buttonPrimary}
          onClick={() => setNonce((current) => current + 1)}
        >
          Genera’n una altra
        </button>
      </div>

      {result && (
        <>
          <Strength bits={result.entropyBits} exact />
          <p className="meta">
            {result.words.length} paraules × {result.bitsPerWord} bits ={' '}
            {plain.format(result.wordBits)} bits
            {result.extraBits > 0
              ? `, més ${oneDecimal.format(result.extraBits)} bits de la xifra`
              : ''}
            . La llista té {plain.format(result.wordlistSize)} paraules, que són 2¹¹: per això el
            compte és exacte i no un arrodoniment.
          </p>
        </>
      )}
    </section>
  )
}

/* ──────────────────────────── contrasenyes ───────────────────────────────── */

const CLASS_NAMES: readonly CharacterClass[] = ['lowercase', 'uppercase', 'digits', 'symbols']

interface PasswordAttempt {
  result: GeneratedPassword | null
  error: string
}

function PasswordPanel({ onSend }: { onSend: (value: string) => void }) {
  const [length, setLength] = useState(20)
  const [classes, setClasses] = useState<Record<CharacterClass, boolean>>({
    lowercase: true,
    uppercase: true,
    digits: true,
    symbols: true,
  })
  const [requireEachClass, setRequireEachClass] = useState(true)
  const [nonce, setNonce] = useState(0)
  const isClient = useIsClient()

  const { result, error }: PasswordAttempt = useMemo(() => {
    void nonce
    if (!isClient) return { result: null, error: '' }
    try {
      return { result: generatePassword({ length, ...classes, requireEachClass }), error: '' }
    } catch (caught) {
      return {
        result: null,
        error: caught instanceof Error ? caught.message : 'No s’ha pogut generar la contrasenya.',
      }
    }
  }, [isClient, length, classes, requireEachClass, nonce])

  const toggle = (name: CharacterClass) =>
    setClasses((current) => ({ ...current, [name]: !current[name] }))

  return (
    <section className={`card ${styles.tool}`} aria-labelledby="caracters">
      <h3 id="caracters">Contrasenya de caràcters</h3>
      <p>
        Per a tot el que guardis en un gestor de contrasenyes i no hagis de teclejar mai: com més
        llarga, millor. Vint caràcters de l’alfabet sencer passen dels 120 bits.
      </p>

      <fieldset className={styles.controls}>
        <legend className={styles.srOnly}>Opcions de la contrasenya</legend>

        <label className={styles.field} htmlFor="pw-length">
          <span>Longitud</span>
          <span className={styles.range}>
            <input
              id="pw-length"
              type="range"
              min={MIN_PASSWORD_LENGTH}
              max={64}
              step={1}
              value={length}
              onChange={(event) => setLength(Number(event.target.value))}
            />
            <span className={styles.rangeValue} aria-hidden="true">
              {length}
            </span>
          </span>
        </label>

        <div className={styles.field}>
          <span id="pw-classes">Caràcters</span>
          <div className={styles.checks} role="group" aria-labelledby="pw-classes">
            {CLASS_NAMES.map((name) => (
              <label key={name} className={styles.check}>
                <input type="checkbox" checked={classes[name]} onChange={() => toggle(name)} />
                {CHARACTER_CLASS_LABELS[name]}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.field}>
          <span>Restriccions</span>
          <label className={styles.check}>
            <input
              type="checkbox"
              checked={requireEachClass}
              onChange={(event) => setRequireEachClass(event.target.checked)}
            />
            Com a mínim un caràcter de cada classe
          </label>
        </div>
      </fieldset>

      {requireEachClass && (
        <p className={styles.note}>
          Forçar la presència de cada classe no fa la contrasenya més forta: la fa una mica més
          feble, perquè descarta combinacions. Serveix per passar formularis que exigeixen un
          símbol. Els bits de sota ja ho tenen en compte.
        </p>
      )}

      {error && (
        <p className={`${styles.result} ${styles.resultAlert}`} role="alert">
          {error}
        </p>
      )}

      <Secret
        value={result?.value ?? ''}
        spelled={result ? spellOut(result.value) : ''}
        describedAs="Contrasenya generada"
        onSend={onSend}
      />

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.buttonPrimary}
          onClick={() => setNonce((current) => current + 1)}
        >
          Genera’n una altra
        </button>
      </div>

      {result && (
        <>
          <Strength bits={result.entropyBits} exact={!result.forcedClasses} />
          <p className="meta">
            {result.length} caràcters d’un alfabet de {result.alphabetSize}
            {result.forcedClasses && result.classes.length > 1
              ? ', amb una posició reservada a cada classe'
              : ''}
            .
          </p>
        </>
      )}
    </section>
  )
}

/* ─────────────────────────────── l'eina ──────────────────────────────────── */

/**
 * Auditoria i generadors a la mateixa peça, perquè el botó «Comprova-la» de
 * cada generador pugui afegir la contrasenya nova a l'auditoria. Afegir-la no
 * la comprova: la consulta continua sent una acció explícita.
 */
export default function PasswordTool() {
  const audit = useRef<PasswordAuditHandle | null>(null)
  const sendToAudit = useCallback((value: string) => audit.current?.add(value, 'Generada'), [])

  return (
    <>
      <PasswordAudit ref={audit} />
      <h2 id="generador">Genera’n de noves</h2>
      <PassphrasePanel onSend={sendToAudit} />
      <PasswordPanel onSend={sendToAudit} />
    </>
  )
}
