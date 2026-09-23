import Link from 'next/link'
import type { Metadata } from 'next'

import { Avis, DocMeta, Pendent, TableWrap } from '../parts'

export const metadata: Metadata = { title: 'Avís legal' }

/**
 * Avís legal i informació general, article 10 de la Llei 34/2002, de serveis de
 * la societat de la informació i de comerç electrònic.
 */
export default function LegalNoticePage() {
  return (
    <>
      <h1>Avís legal</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Qui hi ha darrere d’aquest lloc, com contactar-hi i sota quines regles funciona. És la
        informació que l’article 10 de la Llei 34/2002 obliga a tenir permanentment accessible, i
        aquí la trobaràs sencera i sense haver de buscar-la.
      </p>

      <h2>Titular del lloc</h2>
      <TableWrap label="Dades identificatives del titular del lloc">
        <table>
          <caption className="visually-hidden">Dades identificatives del titular del lloc</caption>
          <tbody>
            <tr>
              <th scope="row">Denominació social</th>
              <td>New Spirit Studio S.L.</td>
            </tr>
            <tr>
              <th scope="row">Forma jurídica</th>
              <td>Societat de responsabilitat limitada. Petita i mitjana empresa.</td>
            </tr>
            <tr>
              <th scope="row">NIF</th>
              <td>B75352872</td>
            </tr>
            <tr>
              <th scope="row">Domicili social i fiscal</th>
              <td>Carrer del Sol, 62, 08201 Sabadell (Barcelona)</td>
            </tr>
            <tr>
              <th scope="row">Adreça de notificacions</th>
              <td>La mateixa del domicili social.</td>
            </tr>
            <tr>
              <th scope="row">Correu electrònic</th>
              <td>
                <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>
              </td>
            </tr>
            <tr>
              <th scope="row">Telèfon</th>
              <td>
                <a href="tel:+34611546216">611 54 62 16</a>
              </td>
            </tr>
            <tr>
              <th scope="row">Dades registrals</th>
              <td>
                <Pendent>
                  dades d’inscripció al Registre Mercantil de Barcelona: tom, foli, full i
                  inscripció
                </Pendent>
              </td>
            </tr>
            <tr>
              <th scope="row">Nom de domini</th>
              <td>identitat.digital</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>Administració</h3>
      <p>
        L’administració de la societat correspon a dos administradors mancomunats, que actuen i
        signen sempre conjuntament:
      </p>
      <ul>
        <li>
          <strong>Marc Celeiro Escribà</strong>, director tecnològic.
        </li>
        <li>
          <strong>Roger Bach Gómez</strong>, director executiu.
        </li>
      </ul>
      <p>New Spirit Studio S.L. no pertany a cap grup de societats.</p>

      <h3>Assegurança de responsabilitat civil</h3>
      <p>
        New Spirit Studio S.L. té subscrita una pòlissa de responsabilitat civil professional amb
        Zurich, número 00000165177759, que inclou una garantia específica de protecció de dades amb
        un límit de 100.000 euros. Ho fem constar aquí perquè una declaració de responsabilitat
        sense cobertura darrere val poc.
      </p>

      <h3>Activitat i professions regulades</h3>
      <p>
        L’activitat de New Spirit Studio S.L. és el desenvolupament de programari i de serveis
        digitals. No és una professió regulada, de manera que no hi ha col·legi professional, ni
        número de col·legiat, ni títol acadèmic homologat que calgui declarar en virtut de l’article
        10.1.f de la Llei 34/2002. Aquest lloc no presta serveis d’assessorament jurídic ni cap
        altre servei subjecte a col·legiació.
      </p>

      <h2>Què és Identitat.digital</h2>
      <p>
        Identitat.digital és una base de coneixement pública en català sobre privadesa digital.
        Documenta què fan les aplicacions d’ús quotidià amb les dades de les persones: quines
        recullen, amb qui les comparteixen, com les protegeixen, si te’n pots anar i què queda quan
        ho fas.
      </p>
      <p>
        El projecte forma part de l’activitat pròpia de l’estudi i n’és propietat. No és una
        associació, ni una fundació, ni un organisme públic, ni té cap mena de reconeixement
        oficial. És una publicació editorial amb una metodologia declarada i amb totes les fonts a
        la vista.
      </p>
      <p>
        L’accés al lloc és lliure i gratuït. No cal registrar-s’hi, no s’hi pot obrir cap compte i
        no s’hi contracta res. Les eines de la secció <Link href="/eines">Eines</Link> funcionen
        dins del teu navegador i són igualment gratuïtes.
      </p>

      <h2>Aquest lloc no és assessorament</h2>
      <Avis>
        <p>
          El contingut d’Identitat.digital és informació d’interès general. No és assessorament
          jurídic, ni tècnic, ni de seguretat, ni una certificació de cap producte. Les puntuacions
          són una valoració editorial construïda sobre fets documentats en una data concreta, amb la{' '}
          <Link href="/metodologia">metodologia</Link> publicada i amb les fonts enllaçades, i no
          substitueixen la lectura de les condicions de cap servei ni el criteri d’un professional.
        </p>
      </Avis>

      <h2>Independència i relacions comercials</h2>
      <p>
        Aquest lloc no accepta publicitat, ni enllaços d’afiliació, ni contingut patrocinat, ni cap
        pagament per aparèixer al directori, per no aparèixer-hi o per modificar una puntuació. Les
        empreses documentades no revisen les fitxes abans de publicar-les. Si una empresa considera que
        hem comès un error, pot escriure’ns i publiquem la seva versió al costat de la fitxa.
      </p>

      <h2>Propietat intel·lectual i marques</h2>
      <p>
        El contingut editorial del lloc és obra de New Spirit Studio S.L. i es publica sota
        Creative Commons Reconeixement-CompartirIgual 4.0. El codi és MIT. Els materials de tercers
        que en queden fora —el catàleg de filtracions de Have I Been Pwned, els logotips i les
        marques— es detallen al fitxer <code>NOTICE</code> del repositori i a la pàgina de{' '}
        <Link href="/dades">dades obertes</Link>.
      </p>
      <p>
        Els noms comercials, les marques i els logotips de les aplicacions i de les empreses
        analitzades pertanyen als seus titulars. Es fan servir amb finalitat exclusivament
        identificativa, per assenyalar de quin producte parla cada fitxa. Aquest ús no implica cap
        relació, autorització, patrocini ni aprovació per part d’aquests titulars.
      </p>

      <h2>Enllaços a altres llocs</h2>
      <p>
        El projecte enllaça sistemàticament les seves fonts: documentació oficial de les empreses,
        resolucions d’autoritats de control, anàlisis independents i premsa. Aquests llocs són de
        tercers i no en controlem el contingut, la disponibilitat ni les pràctiques de privadesa.
        Quan els obres, hi vas sota les condicions d’aquells llocs, no sota les nostres.
      </p>
      <p>
        D’acord amb l’article 17 de la Llei 34/2002, no responem del contingut aliè que enllacem
        llevat que en coneguem efectivament la il·licitud i no actuem amb diligència per retirar
        l’enllaç. Si detectes un enllaç a un contingut il·lícit o perjudicial, escriu-nos a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a> i el revisarem.
      </p>
      <p>
        Pots enllaçar aquest lloc lliurement. L’única cosa que et demanem és que l’enllaç no doni a
        entendre una relació, una aprovació o una col·laboració que no existeix, i que no
        reprodueixi el lloc dins d’un marc que n’amagui l’origen.
      </p>

      <h2>Disponibilitat del servei</h2>
      <p>
        Fem el possible perquè el lloc funcioni sempre, però no garantim la disponibilitat
        ininterrompuda ni l’absència d’errors. Podem modificar, suspendre o retirar qualsevol part
        del lloc, inclosos el contingut i les eines, sense avís previ. Les interrupcions per
        manteniment, per problemes del proveïdor d’allotjament o per causes de força major no
        generen cap dret a indemnització.
      </p>

      <h2>Ús acceptable</h2>
      <p>
        No es pot fer servir aquest lloc per a finalitats il·lícites, ni per intentar accedir a les
        seves parts restringides, ni per interferir en el seu funcionament, ni per fer-ne un ús
        automatitzat que en degradi el servei per a la resta. Les condicions completes, i el que sí
        que pots fer amb el contingut, són a les{' '}
        <Link href="/legal/condicions">condicions d’ús</Link>.
      </p>

      <h2>Protecció de dades</h2>
      <p>
        El tractament de dades personals està descrit sencer a la{' '}
        <Link href="/legal/privadesa">política de privadesa</Link>. El resum és que navegar per
        aquest lloc no requereix cap dada teva: no hi ha comptes, ni formularis, ni galetes per a
        qui visita, ni analítica, ni rastrejadors.
      </p>

      <h2>Llei aplicable i jurisdicció</h2>
      <p>
        Aquest avís legal i la resta de documents legals del lloc es regeixen pel dret espanyol i
        pel dret de la Unió Europea que hi sigui aplicable.
      </p>
      <p>
        Si ets una persona consumidora, qualsevol controvèrsia se sotmet als jutjats i tribunals del
        teu domicili, tal com estableix la normativa de defensa de les persones consumidores; cap
        clàusula d’aquest lloc no pot obligar-te a litigar en un altre lloc. Si no ho ets, les parts
        se sotmeten als jutjats i tribunals de Sabadell.
      </p>
      <p>
        Aquest lloc no ofereix cap contractació en línia, de manera que no hi ha cap contracte de
        consum que pugui donar lloc a una reclamació de consum derivada d’aquest lloc. La plataforma
        europea de resolució de litigis en línia va deixar d’estar operativa el juliol de 2025 i,
        per tant, no n’enllacem cap adreça. Si tens una queixa, el camí directe és escriure’ns a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>.
      </p>

      <h2>Modificacions</h2>
      <p>
        Podem actualitzar aquest avís legal quan canviïn les dades del titular, l’arquitectura del
        lloc o la normativa aplicable. Cada versió porta el número i la data al capdamunt. Els
        canvis rellevants es fan constar a l’historial del repositori públic del projecte, de manera
        que sempre es pot veure què deia abans i què diu ara.
      </p>
    </>
  )
}
