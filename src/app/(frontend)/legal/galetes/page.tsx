import Link from 'next/link'
import type { Metadata } from 'next'

import { DocMeta, Resum, TableWrap } from '../parts'

export const metadata: Metadata = { title: 'Política de galetes' }

/**
 * Política de galetes. Article 22.2 de la Llei 34/2002 i Guia sobre l'ús de les
 * galetes de l'Agència Espanyola de Protecció de Dades.
 *
 * El projecte documenta sancions per bàners de galetes enganyosos. Aquest
 * document ha d'explicar per què aquí no n'hi ha cap i per què això no és una
 * omissió sinó la conseqüència d'una decisió tècnica.
 */
export default function CookiesPage() {
  return (
    <>
      <h1>Política de galetes</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Aquest lloc no t’instal·la cap galeta. Per això no veus cap bàner demanant-te permís. A
        continuació expliquem per què això és legal, per què és preferible i com pots comprovar-ho
        tu mateix en trenta segons.
      </p>

      <Resum>
        <p>
          <strong>Galetes que et posa aquest lloc quan el visites: cap.</strong> Ni pròpies, ni de
          tercers, ni tècniques, ni de sessió. Tampoc no fem servir emmagatzematge de sessió, ni
          bases de dades al navegador, ni empremtes digitals del dispositiu. L’única cosa que es
          desa al teu dispositiu és la tria de la calculadora d’exposició, si la fas servir, i
          l’expliquem sencera a l’apartat d’emmagatzematge.
        </p>
      </Resum>

      <h2>Comprova-ho tu</h2>
      <p>
        No cal que ens creguis. Obre les eines de desenvolupament del teu navegador —normalment amb
        F12—, ves a la pestanya d’emmagatzematge o d’aplicació i mira la llista de galetes d’aquest
        domini. Ha de ser buida. Fes el mateix a la pestanya de xarxa i comprova que carregar una
        pàgina no genera cap petició a cap domini que no sigui el nostre.
      </p>
      <p>
        Si algun dia hi trobes alguna cosa que aquest document no expliqui, és un error i el volem
        saber: <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>.
      </p>

      <h2>Què diu la llei i per què no cal bàner</h2>
      <p>
        L’article 22.2 de la Llei 34/2002 de serveis de la societat de la informació estableix que
        els prestadors poden utilitzar dispositius d’emmagatzematge i recuperació de dades als
        equips terminals dels destinataris —això és el que fan les galetes, però també
        l’emmagatzematge local i qualsevol tècnica equivalent— sempre que els hagin donat informació
        clara i completa i n’hagin obtingut el consentiment.
      </p>
      <p>
        El mateix article estableix dues excepcions: no cal consentiment quan l’emmagatzematge
        serveix únicament per efectuar la transmissió d’una comunicació per una xarxa de
        comunicacions electròniques, o quan és <strong>estrictament necessari</strong> per prestar
        un servei expressament sol·licitat per la persona usuària.
      </p>
      <p>
        La Guia sobre l’ús de les galetes de l’Agència Espanyola de Protecció de Dades desenvolupa
        aquesta excepció i hi inclou, entre d’altres, les galetes d’autenticació o identificació de
        sessió, les de seguretat, les d’entrada de dades per omplir formularis i les d’equilibri de
        càrrega.
      </p>
      <p>
        Aquí el raonament és molt més senzill que tot això:{' '}
        <strong>no hi ha cap galeta a la qual aplicar l’excepció</strong>, perquè no n’hi ha cap. Un
        bàner de consentiment que no demana consentiment per a res no informa de res. Seria una
        molèstia decorativa, i el projecte considera que aquesta mena de decoració és part del
        problema que documenta.
      </p>

      <h2>Per què no n’hi ha, tècnicament</h2>
      <p>Perquè les decisions d’arquitectura ho impedeixen, no perquè ho hàgim promès:</p>
      <ul>
        <li>
          <strong>No hi ha comptes per a qui visita.</strong> Sense inici de sessió no cal cap
          galeta de sessió.
        </li>
        <li>
          <strong>Les pàgines es generen al servidor.</strong> El navegador rep HTML acabat; no hi
          ha cap estat que calgui recordar entre pàgines.
        </li>
        <li>
          <strong>No hi ha cap script de tercers.</strong> Cap xarxa de distribució de continguts,
          cap tipografia externa, cap vídeo incrustat, cap botó de xarxa social. Aquests són els
          vehicles habituals de les galetes de tercers, i aquí no n’hi ha cap.
        </li>
        <li>
          <strong>No hi ha analítica de cap mena.</strong> Ni Google Analytics ni cap alternativa,
          inclosa cap de les que es presenten com a respectuoses amb la privadesa i que igualment
          necessiten identificar visites.
        </li>
        <li>
          <strong>La política de seguretat de contingut bloqueja les connexions externes.</strong>{' '}
          La directiva <code>connect-src &apos;self&apos;</code> impedeix al navegador contactar amb
          cap servidor de tercers. Encara que algú hi introduís un rastrejador per error, no
          funcionaria.
        </li>
        <li>
          <strong>La capçalera de permisos desactiva l’API de temes de navegació</strong> de Chrome,
          que és el mecanisme amb què Google vol substituir les galetes de tercers. Aquest lloc no
          hi participa.
        </li>
      </ul>

      <h2>L’única galeta del sistema: el panell d’administració</h2>
      <p>
        Hi ha exactament una galeta en tot el sistema, i no t’afecta si no formes part de l’equip
        editorial.
      </p>
      <TableWrap label="Galetes del panell d’administració, amb qui les rep, per a què serveixen, durada i si necessiten consentiment">
        <table>
          <caption className="visually-hidden">
            Galetes del panell d’administració, amb qui les rep, per a què serveixen, durada i si
            necessiten consentiment
          </caption>
          <thead>
            <tr>
              <th scope="col">Galeta</th>
              <th scope="col">Qui la rep</th>
              <th scope="col">Per a què</th>
              <th scope="col">Durada</th>
              <th scope="col">Cal consentiment?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Galeta de sessió del gestor de continguts Payload, anomenada{' '}
                <code>payload-token</code> per defecte
              </td>
              <td>
                Només qui inicia sessió a <code>/admin</code>, és a dir, l’equip editorial
              </td>
              <td>
                Mantenir la sessió oberta mentre s’edita el contingut i evitar haver de tornar a
                escriure la contrasenya a cada pàgina
              </td>
              <td>Vuit hores</td>
              <td>
                No. És una galeta d’autenticació, estrictament necessària per prestar un servei
                —accedir al panell— expressament sol·licitat per qui hi inicia sessió. Excepció de
                l’article 22.2 de la Llei 34/2002.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Aquesta galeta és pròpia, tècnica i de sessió. No serveix per fer cap seguiment, no viatja a
        cap tercer i no existeix fins que algú escriu unes credencials correctes. Si mai visites{' '}
        <code>/admin</code> sense iniciar sessió, no se te’n crea cap.
      </p>

      <h2>Emmagatzematge al dispositiu i eines</h2>
      <p>
        Les eines de la secció <Link href="/eines">Eines</Link> calculen dins del navegador. Una
        d’elles desa una cosa al teu dispositiu i les altres dues no en desen cap. Aquesta és la
        llista completa, revisada contra el codi publicat:
      </p>
      <TableWrap label="Què desa cada eina al dispositiu, on ho desa i durant quant de temps">
        <table>
          <caption className="visually-hidden">
            Què desa cada eina al dispositiu, on ho desa i durant quant de temps
          </caption>
          <thead>
            <tr>
              <th scope="col">Eina</th>
              <th scope="col">Què desa</th>
              <th scope="col">On</th>
              <th scope="col">Durada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Contrasenyes</th>
              <td>Res. Ni les contrasenyes generades, ni les que hi escrius, ni els resultats.</td>
              <td>—</td>
              <td>Res sobreviu a tancar la pestanya.</td>
            </tr>
            <tr>
              <th scope="row">Exposició personal</th>
              <td>
                La llista d’aplicacions que has marcat, i res més. Ni el resultat, ni cap xifra, ni
                cap identificador.
              </td>
              <td>
                Emmagatzematge local del navegador, clau <code>identitat.exposicio.seleccio</code>.
                No és una galeta i no viatja mai en cap petició al servidor.
              </td>
              <td>
                Fins que l’esborris. L’eina té un botó «Esborra la tria», i esborrar les dades del
                lloc al navegador també la treu.
              </td>
            </tr>
            <tr>
              <th scope="row">Comparador</th>
              <td>
                Res al dispositiu. La selecció va a l’adreça de la pàgina, perquè l’enllaç es pugui
                compartir.
              </td>
              <td>La barra d’adreces.</td>
              <td>El que duri la pestanya.</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Per què l’emmagatzematge de la calculadora no necessita consentiment: l’article 22.2 de la
        Llei 34/2002 exigeix consentiment per emmagatzemar informació al dispositiu, tret que sigui
        estrictament necessari per prestar un servei <strong>expressament sol·licitat</strong> per
        qui el fa servir. Aquí la informació la genera qui fa servir l’eina, s’hi desa perquè l’eina
        serveixi per a alguna cosa entre visites, no surt mai del dispositiu, no permet identificar
        ningú i es pot esborrar amb un botó que hi ha a la mateixa pàgina. Tot i això, el criteri
        que hem seguit no és el mínim legal sinó el que exigim a les fitxes: dir-ho, dir on és i
        donar la manera de desfer-ho.
      </p>
      <p>
        Cap eina no fa cap petició a cap servidor, amb una sola excepció que està explicada al
        detall a la <Link href="/legal/privadesa">política de privadesa</Link>: la comprovació de
        contrasenyes filtrades envia cinc caràcters hexadecimals del resum SHA-1 a una ruta d’aquest
        mateix lloc. La contrasenya no hi és, i el resum sencer tampoc.
      </p>

      <h2>Com controlar les galetes en general</h2>
      <p>
        Encara que aquí no en necessitis, tots els navegadors permeten veure, bloquejar i esborrar
        les galetes que et posen els llocs que visites. Ho trobaràs a la configuració de privadesa
        de Chrome, Firefox, Safari, Edge o Brave. Bloquejar les galetes de tercers és una de les
        mesures més efectives i menys costoses que pots prendre, i no afectarà gens la teva
        experiència en aquest lloc.
      </p>

      <h2>Referències</h2>
      <ul>
        <li>
          Article 22.2 de la Llei 34/2002, d’11 de juliol, de serveis de la societat de la
          informació i de comerç electrònic.
        </li>
        <li>Article 5.3 de la Directiva 2002/58/CE, de privadesa i comunicacions electròniques.</li>
        <li>Guia sobre l’ús de les galetes de l’Agència Espanyola de Protecció de Dades.</li>
        <li>
          Directrius 03/2022 del Comitè Europeu de Protecció de Dades sobre patrons enganyosos a les
          interfícies.
        </li>
        <li>
          Dictamen 4/2012 del Grup de Treball de l’article 29 sobre l’exempció de consentiment de
          determinades galetes.
        </li>
      </ul>
      <p className="meta">
        Les sancions de la CNIL a Google i a Facebook per fer més difícil rebutjar les galetes que
        acceptar-les estan documentades a les fitxes corresponents d’aquest mateix lloc. És
        precisament per això que aquí no hi ha cap botó.
      </p>
    </>
  )
}
