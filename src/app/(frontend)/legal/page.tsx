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
    <>
      <h1>Informació legal</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Set documents. Cap d’ells està escrit per protegir-nos a nosaltres de tu: estan escrits
        perquè puguis comprovar què fa aquest lloc amb les teves dades, què pots fer amb el que hi
        publiquem i a qui has de reclamar si alguna cosa no va bé.
      </p>

      <h2>En una línia</h2>
      <p>
        Aquest lloc no et demana cap compte, no t’instal·la cap galeta, no té analítica ni
        rastrejadors, no envia res a cap tercer quan el visites i no té cap formulari on puguis
        deixar dades. Tot el que segueix és el desenvolupament d’aquesta frase i la prova que és
        certa.
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
            Cada tractament de dades que fem, la seva base jurídica, els terminis, els destinataris i
            els teus drets. Amb la taula completa i amb les dades de contacte de l’Agència Espanyola
            de Protecció de Dades.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/galetes">Política de galetes</Link>
          </strong>
          <p>
            Per què no hi ha bàner de consentiment: perquè no hi ha galetes per a qui visita. Amb el
            fonament legal de per què això és correcte i no una omissió.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/condicions">Condicions d’ús</Link>
          </strong>
          <p>
            Com es pot fer servir el lloc i, sobretot, què garantim i què no garantim del generador
            de contrasenyes i de la comprovació de contrasenyes filtrades.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/llicencia">Llicència del contingut</Link>
          </strong>
          <p>
            Què pots copiar, adaptar i republicar, sota quines condicions, i quins materials de
            tercers queden fora de la llicència perquè no són nostres per donar-los.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/politica-editorial">Política editorial</Link>
          </strong>
          <p>
            Com decidim què publiquem, com corregim els errors i com pot respondre una empresa
            documentada que consideri que ens hem equivocat.
          </p>
        </li>
        <li>
          <strong>
            <Link href="/legal/accessibilitat">Declaració d’accessibilitat</Link>
          </strong>
          <p>
            Esborrany. El lloc encara no té el disseny definitiu i no volem signar una conformitat
            que no podem sostenir. Diu l’estat real, les mancances conegudes i com informar d’una
            barrera.
          </p>
        </li>
      </ul>

      <h2>Documentació interna</h2>
      <p>
        Dos documents més no es publiquen aquí perquè no van adreçats a qui visita el lloc, sinó a
        qui l’ha de mantenir i, si algun dia cal, a l’autoritat de control: el registre d’activitats
        de tractament de l’article 30 del Reglament general de protecció de dades i l’anàlisi de si
        cal una avaluació d’impacte de l’article 35. Viuen al repositori del projecte, a{' '}
        <code>docs/legal/</code>.
      </p>

      <h2>Contacte</h2>
      <p>
        Per a qualsevol qüestió d’aquestes pàgines, incloent-hi l’exercici dels teus drets de
        protecció de dades, escriu a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>.
      </p>
    </>
  )
}
