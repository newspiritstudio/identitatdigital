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
      <DocMeta version="1.1" updated="25 de setembre de 2026" />

      <p className="lede">
        Aquest lloc no t’instal·la cap galeta i per això no veus cap bàner demanant-te permís. A
        continuació expliquem per què això és legal i com pots comprovar-ho tu mateix en trenta
        segons.
      </p>

      <Resum>
        <p>
          <strong>Galetes que et posa aquest lloc quan el visites: cap.</strong> Ni pròpies, ni de
          tercers, ni tècniques, ni de sessió. Tampoc no fem servir emmagatzematge de sessió, ni
          bases de dades al navegador, ni empremtes digitals del dispositiu. Al teu dispositiu
          només es desa la tria del diagnòstic i el progrés del seu pla d’acció, si el fas servir,
          i el tema clar o fosc, si l’has canviat. Ho detallem a l’apartat d’emmagatzematge.
        </p>
      </Resum>

      <h2>Comprova-ho tu</h2>
      <p>
        Obre les eines de desenvolupament del teu navegador (normalment amb F12), ves a la pestanya d’emmagatzematge o d’aplicació i mira la llista de galetes d’aquest
        domini. Ha de ser buida. Fes el mateix a la pestanya de xarxa i comprova que carregar una
        pàgina no genera cap petició a cap domini que no sigui el nostre.
      </p>
      <p>
        Si algun dia hi trobes alguna cosa que aquest document no expliqui, és un error: escriu-nos
        a <a href="mailto:hola@identitat.digital">hola@identitat.digital</a>.
      </p>

      <h2>Què diu la llei i per què no cal bàner</h2>
      <p>
        L’article 22.2 de la Llei 34/2002 de serveis de la societat de la informació estableix que
        els prestadors poden utilitzar dispositius d’emmagatzematge i recuperació de dades als
        equips terminals dels destinataris (les galetes, però també l’emmagatzematge local i
        qualsevol tècnica equivalent) sempre que els hagin donat informació
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
        En aquest lloc <strong>no hi ha cap galeta a la qual aplicar l’excepció</strong>, perquè no
        n’hi ha cap. Un bàner de consentiment que no demana consentiment per a res no informaria de
        res, i el projecte considera que aquesta mena de bàners forma part del problema que
        documenta.
      </p>

      <h2>Per què no n’hi ha, tècnicament</h2>
      <p>Les decisions d’arquitectura del lloc ho impedeixen:</p>
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
          cap tipografia externa, cap vídeo incrustat, cap botó de xarxa social, que són els
          vehicles habituals de les galetes de tercers.
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
        Hi ha una sola galeta en tot el sistema, i no t’afecta si no formes part de l’equip
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
                (l’accés al panell) expressament sol·licitat per qui hi inicia sessió. Excepció de
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
        Les eines de la secció <Link href="/eines">Eines</Link> calculen dins del navegador. El
        diagnòstic desa dues coses al teu dispositiu i les altres eines no en desen cap. Aquesta és
        la llista completa, revisada contra el codi del lloc:
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
              <th scope="row">Diagnòstic</th>
              <td>
                La llista d’aplicacions que has marcat, les accions del pla que has marcat com a
                fetes i els serveis que vols deixar. Ni el resultat, ni cap xifra, ni cap
                identificador.
              </td>
              <td>
                Emmagatzematge local del navegador, claus <code>identitat.exposicio.seleccio</code>{' '}
                i <code>identitat.diagnostic.pla</code>. No són galetes i no viatgen mai en cap
                petició al servidor.
              </td>
              <td>
                Fins que l’esborris. L’eina té un botó «Esborra-ho tot d’aquest dispositiu», i
                esborrar les dades del lloc al navegador també ho treu.
              </td>
            </tr>
            <tr>
              <th scope="row">Tema clar o fosc</th>
              <td>
                Si has triat el tema amb el botó «Clar» o «Fosc», quin has triat. Si no l’has tocat
                mai, no es desa res i es fa servir el del sistema.
              </td>
              <td>
                Emmagatzematge local del navegador, clau <code>theme</code>, amb el valor{' '}
                <code>light</code> o <code>dark</code>. No és una galeta i no viatja en cap petició
                al servidor.
              </td>
              <td>Fins que l’esborris, esborrant les dades del lloc al navegador.</td>
            </tr>
            <tr>
              <th scope="row">Credencials</th>
              <td>
                Res. Ni l’adreça que consultes, ni les contrasenyes que audites o generes, ni els
                resultats. Només si prems «Afegeix-los al diagnòstic» s’afegeixen serveis a la tria
                del diagnòstic, a la clau de dalt.
              </td>
              <td>—</td>
              <td>Res sobreviu a tancar la pestanya.</td>
            </tr>
            <tr>
              <th scope="row">Metadades</th>
              <td>Res. Els fitxers que examines i les còpies netes no es desen enlloc.</td>
              <td>—</td>
              <td>Res sobreviu a tancar la pestanya.</td>
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
        Per què l’emmagatzematge del diagnòstic no necessita consentiment: l’article 22.2 de la
        Llei 34/2002 exigeix consentiment per emmagatzemar informació al dispositiu, tret que sigui
        estrictament necessari per prestar un servei <strong>expressament sol·licitat</strong> per
        qui el fa servir. Aquí la informació la genera qui fa servir l’eina, s’hi desa perquè l’eina
        conservi la feina entre visites, no surt mai del dispositiu, no permet identificar
        ningú i es pot esborrar amb un botó que hi ha a la mateixa pàgina. Tot i això, hi apliquem
        el mateix criteri que exigim a les fitxes: dir-ho, dir on es desa i donar la manera
        d’esborrar-ho.
      </p>
      <p>
        Les eines només fan peticions quan prems un botó que ho demana, i es detallen a la <Link href="/legal/privadesa">política de privadesa</Link>: l’auditoria de
        contrasenyes envia cinc caràcters hexadecimals del resum SHA-1 de cada contrasenya a una
        ruta d’aquest mateix lloc (la contrasenya no hi és, i el resum sencer tampoc), i la
        consulta de filtracions per adreça envia l’adreça directament del teu navegador a
        XposedOrNot. Cap d’aquestes peticions no porta ni deixa cap galeta.
      </p>

      <h2>Com controlar les galetes en general</h2>
      <p>
        Encara que aquí no en necessitis, tots els navegadors permeten veure, bloquejar i esborrar
        les galetes que et posen els llocs que visites. Ho trobaràs a la configuració de privadesa
        de Chrome, Firefox, Safari, Edge o Brave. Bloquejar les galetes de tercers és una mesura
        eficaç i senzilla, i no afecta el funcionament d’aquest lloc.
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
        acceptar-les estan documentades a les fitxes corresponents d’aquest mateix lloc.
      </p>
    </>
  )
}
