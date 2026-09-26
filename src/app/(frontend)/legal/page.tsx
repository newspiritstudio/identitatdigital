import Link from 'next/link'
import type { Metadata } from 'next'

import { DocMeta } from './parts'
import styles from './legal.module.css'

export const metadata: Metadata = { title: 'Informació legal' }

/**
 * Índex del paquet legal.
 *
 * Aquest lloc existeix per denunciar polítiques de privadesa impenetrables.
 * Els nostres documents legals han de ser curts, concrets i comprovables, o no
 * tindríem cap autoritat per exigir-ho a ningú.
 */
export default function LegalIndexPage() {
  return (
    <div className="content-wrapper">
      <h1>Informació legal</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Cinc documents escrits perquè puguis comprovar què fa aquest lloc amb les teves dades, què
        pots fer amb el que hi publiquem i a qui has de reclamar si alguna cosa no va bé.
      </p>

      <h2>En una línia</h2>
      <p>
        Aquest lloc no et demana cap compte, no t’instal·la cap galeta, no té analítica ni
        rastrejadors, no envia res a cap tercer quan el visites i no té cap formulari on puguis
        deixar dades. Els documents següents ho desenvolupen i expliquen com comprovar-ho.
      </p>

      <h2>Documents</h2>
      <ul className={styles.toc}>
        <li>
          <strong>
            <Link href="/legal/avis-legal">Avís legal</Link>
          </strong>
          <p>
            Qui hi ha darrere del lloc, amb totes les dades que exigeix l’article 10 de la Llei de
            serveis de la societat de la informació: raó social, NIF, domicili, contacte,
            administració i assegurança.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/privadesa">Política de privadesa</Link>
          </strong>
          <p>
            Cada tractament de dades que fem, la seva base jurídica, els terminis, els destinataris
            i els teus drets. Amb la taula completa i amb les dades de contacte de l’Agència
            Espanyola de Protecció de Dades.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/galetes">Política de galetes</Link>
          </strong>
          <p>
            Per què no hi ha bàner de consentiment: no hi ha galetes per a qui visita. Inclou el
            fonament legal que ho justifica.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/condicions">Condicions d’ús</Link>
          </strong>
          <p>
            Com es pot fer servir el lloc i què garantim i què no garantim del generador de
            contrasenyes i de la comprovació de contrasenyes filtrades.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/accessibilitat">Declaració d’accessibilitat</Link>
          </strong>
          <p>
            Parcialment conforme amb les WCAG 2.2 AA. Diu com s’ha avaluat, què ja funciona, les
            tres excepcions conegudes, el calendari de les proves que falten i com informar d’una
            barrera.
          </p>
        </li>
      </ul>

      <h2>Governança</h2>
      <p>
        Qui pot canviar la metodologia, què passa quan qui edita una fitxa té un vincle comercial
        amb l’empresa que hi surt i què passa amb les dades si el projecte s’atura són decisions que
        no formen part de cap dels documents anteriors. Si en vols saber els detalls, escriu a
        l’adreça de contacte del final d’aquesta pàgina.
      </p>

      <h2>Documentació interna</h2>
      <p>
        Quatre documents més no es publiquen aquí perquè van adreçats a qui ha de mantenir el lloc
        i, si algun dia cal, a l’autoritat de control: el registre
        d’activitats de tractament de l’article 30 del Reglament general de protecció de dades,
        l’anàlisi de si cal una avaluació d’impacte de l’article 35, el procediment de violacions de
        seguretat dels articles 33 i 34 i la política de còpies de seguretat.
      </p>

      <h2>Contacte</h2>
      <p>
        Per a qualsevol qüestió d’aquestes pàgines, incloent-hi l’exercici dels teus drets de
        protecció de dades, escriu a{' '}
        <a href="mailto:hola@identitat.digital">hola@identitat.digital</a>.
      </p>
    </div>
  )
}
