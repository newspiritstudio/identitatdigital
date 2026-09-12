import Link from 'next/link'
import type { Metadata } from 'next'

import { Avis, DocMeta, Pendent, Resum } from '../parts'

export const metadata: Metadata = { title: 'Condicions d’ús' }

/**
 * Condicions d'ús del lloc i de les eines.
 *
 * L'única part d'aquest document que realment exonera de res és la que parla
 * del generador de contrasenyes i de la comprovació de filtracions. La resta
 * està escrita per explicar què es pot fer, no per blindar-nos.
 */
export default function TermsPage() {
  return (
    <>
      <h1>Condicions d’ús</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Les regles del joc d’aquest lloc. Són curtes perquè aquí no hi ha res a comprar, cap compte a
        obrir i cap dada teva a gestionar. El que sí que hi ha són tres eines que toquen coses
        delicades, i d’aquestes en parlem amb detall.
      </p>

      <Resum>
        <p>
          <strong>En resum:</strong> l’accés és lliure i gratuït; el contingut és informació, no
          assessorament; pots reutilitzar el que publiquem sota la{' '}
          <Link href="/legal/llicencia">llicència</Link>; les eines funcionen al teu dispositiu i no
          en garantim els resultats; i si trobes un error, volem que ens ho diguis.
        </p>
      </Resum>

      <h2>1. Qui som i què regulen aquestes condicions</h2>
      <p>
        Aquest lloc és titularitat de New Spirit Studio S.L., NIF B75352872, amb domicili al carrer
        del Sol, 62, 08201 Sabadell (Barcelona). Les dades completes són a l’{' '}
        <Link href="/legal/avis-legal">avís legal</Link>.
      </p>
      <p>
        Aquestes condicions regulen l’accés i l’ús del lloc i de les eines que hi ha. Navegar-hi
        implica acceptar-les. Si no hi estàs d’acord, la solució és senzilla: no el facis servir.
      </p>

      <h2>2. Accés</h2>
      <p>
        L’accés és lliure i gratuït. No cal registrar-s’hi, no s’hi pot crear cap compte i no
        t’hi demanem cap dada. No cal instal·lar res ni acceptar res per veure el contingut.
      </p>
      <p>
        Ens reservem el dret de modificar, suspendre o retirar qualsevol part del lloc, incloses les
        eines, sense avís previ. No garantim la disponibilitat contínua ni l’absència d’errors
        tècnics.
      </p>

      <h2>3. Naturalesa del contingut</h2>
      <p>
        Identitat.digital documenta el comportament d’aplicacions i empreses en matèria de
        privadesa, seguretat i control de les dades. Cada afirmació porta el seu estat, el seu nivell
        d’evidència, el seu detall, la data de verificació i les fonts. Les puntuacions es calculen
        amb una <Link href="/metodologia">metodologia publicada</Link> i cada xifra desa el seu
        desglossament complet.
      </p>
      <Avis>
        <p>
          <strong>El que aquest lloc no és.</strong> No és assessorament jurídic, ni tècnic, ni de
          seguretat. No és una certificació, ni un segell, ni una auditoria. No és un dictamen sobre
          si una empresa compleix o incompleix la normativa: això només ho pot declarar una autoritat
          de control o un tribunal.
        </p>
        <p>
          Les puntuacions són una <strong>valoració editorial</strong> construïda sobre fets
          documentats en una data concreta i amb uns criteris explícits. Són opinió fonamentada, no
          una mesura objectiva de la qualitat d’un producte, i no substitueixen la lectura de les
          condicions de cap servei ni el criteri d’un professional.
        </p>
      </Avis>
      <p>
        El contingut és correcte fins on hem pogut verificar-lo en la data indicada a cada fitxa. Les
        empreses canvien les seves polítiques sovint i sense avisar. Una fitxa pot quedar desfasada
        entre dues revisions. Quan passa, la corregim tan aviat com ho sabem, segons el que diu la{' '}
        <Link href="/legal/politica-editorial">política editorial</Link>.
      </p>

      <h2>4. Les eines</h2>
      <p>
        A <Link href="/eines">/eines</Link> hi ha un generador de contrasenyes i frases de pas, una
        comprovació de contrasenyes filtrades, una calculadora d’exposició personal i un comparador
        d’aplicacions. Totes funcionen dins del teu navegador. Són gratuïtes i les oferim tal com
        són.
      </p>

      <h3>4.1. Generador de contrasenyes i frases de pas</h3>
      <p>
        Genera contrasenyes aleatòries i frases de pas al teu dispositiu, amb el generador de nombres
        aleatoris criptogràficament segur del navegador. Ni la contrasenya ni cap dada derivada
        s’envien enlloc, no es desen i no les podem recuperar.
      </p>
      <Avis>
        <p>
          <strong>Exempció de responsabilitat específica.</strong> Aquesta eina s’ofereix sense cap
          garantia, expressa ni implícita, sobre la idoneïtat d’una contrasenya concreta per a un ús
          concret.
        </p>
        <ul>
          <li>
            <strong>La qualitat de l’aleatorietat depèn del teu navegador i del teu sistema
            operatiu</strong>, no de nosaltres. No podem garantir el comportament d’un navegador
            desactualitzat, modificat o compromès.
          </li>
          <li>
            <strong>No desem res.</strong> Si perds una contrasenya generada aquí, no te la podem
            tornar. Ningú no pot. Desa-la en un gestor de contrasenyes abans de tancar la pestanya.
          </li>
          <li>
            <strong>No facis servir l’eina en un dispositiu compartit, públic o que sospitis que pot
            estar compromès.</strong> Cap generació al navegador no protegeix d’un dispositiu que ja
            està sota control d’altri.
          </li>
          <li>
            <strong>L’entropia no ho és tot.</strong> Una contrasenya forta reutilitzada en deu
            serveis segueix sent un problema. L’eina no substitueix un gestor de contrasenyes ni la
            verificació en dos passos.
          </li>
          <li>
            New Spirit Studio S.L. no respon dels danys derivats de l’ús de contrasenyes generades
            amb aquesta eina, incloent-hi la pèrdua d’accés a comptes, la pèrdua d’informació o
            l’accés no autoritzat a serveis de tercers.
          </li>
        </ul>
      </Avis>

      <h3>4.2. Comprovació de contrasenyes filtrades</h3>
      <p>
        Aquesta eina et diu si una contrasenya ha aparegut en filtracions de dades conegudes. Ho fa
        per k-anonimat: el teu navegador calcula el resum SHA-1 de la contrasenya i n’envia només els
        cinc primers caràcters hexadecimals a una ruta del nostre servidor, que els reenvia a
        l’API de Have I Been Pwned. La contrasenya i el resum sencer no surten mai del teu
        dispositiu. El procediment sencer, pas a pas, és a la{' '}
        <Link href="/legal/privadesa">política de privadesa</Link>.
      </p>
      <Avis>
        <p>
          <strong>Exempció de responsabilitat específica.</strong> El resultat d’aquesta comprovació
          és informatiu i té límits importants que has de conèixer:
        </p>
        <ul>
          <li>
            <strong>Que una contrasenya no aparegui no vol dir que sigui segura.</strong> Vol dir
            només que no consta al catàleg de Have I Been Pwned. Una contrasenya trivial però encara
            no filtrada donarà un resultat negatiu i continuarà sent trivial.
          </li>
          <li>
            <strong>Que una contrasenya aparegui no vol dir que t’hagin entrat al compte.</strong>{' '}
            Vol dir que aquella cadena de caràcters figura en algun conjunt de dades filtrat. Si és
            una contrasenya teva, canvia-la a tot arreu on la facis servir; però no és la prova d’un
            incident al teu compte.
          </li>
          <li>
            <strong>El catàleg és necessàriament parcial.</strong> Recull filtracions conegudes i
            publicades. Les que no s’han fet públiques no hi són.
          </li>
          <li>
            <strong>Depenem d’un tercer.</strong> Les dades i la disponibilitat del servei són de
            Have I Been Pwned. No en garantim ni l’exactitud, ni l’actualització, ni la continuïtat,
            i no responem d’una resposta errònia o d’una interrupció del servei d’origen.
          </li>
          <li>
            <strong>No conservem cap prefix.</strong> El nostre servidor reenvia la consulta i torna
            la resposta, sense desar-la ni registrar-la.
          </li>
          <li>
            New Spirit Studio S.L. no respon de les decisions que prenguis a partir d’aquest
            resultat, ni dels danys que se’n derivin.
          </li>
        </ul>
      </Avis>

      <h3>4.3. Calculadora d’exposició i comparador</h3>
      <p>
        Tots dos treballen sobre les dades publicades al lloc en el moment de la consulta. El
        resultat és una estimació orientativa basada en la nostra metodologia, no un diagnòstic
        personalitzat ni una auditoria de la teva situació real, que depèn de coses que no coneixem:
        la teva configuració de privadesa, quant fas servir cada servei o quines dades hi has posat.
      </p>
      <p>
        El comparador només compara serveis que cobreixen una mateixa necessitat funcional, amb
        indicadors objectius, verificables i idèntics per a tots. La comparació és una eina per
        decidir, no una recomanació de compra ni una afirmació sobre la qualitat comercial de cap
        producte.
      </p>

      <p>
        <Pendent>
          revisar aquest apartat 4 quan les pàgines de /eines estiguin publicades i verificar que la
          descripció tècnica de cada eina coincideix amb el codi que s’hi publica
        </Pendent>
      </p>

      <h2>5. Ús permès i ús prohibit</h2>
      <p>
        Pots llegir, copiar, citar, adaptar i republicar el contingut del lloc en les condicions que
        fixa la <Link href="/legal/llicencia">llicència</Link>. Volem que la informació circuli;
        aquesta és la raó de ser del projecte.
      </p>
      <p>El que no pots fer:</p>
      <ul>
        <li>Fer servir el lloc per a finalitats il·lícites o contràries a la bona fe.</li>
        <li>
          Intentar accedir a àrees restringides, al panell d’administració o a dades no publicades, o
          provar de vulnerar les mesures de seguretat.
        </li>
        <li>
          Introduir codi maliciós, o fer accions que danyin, sobrecarreguin o degradin el
          funcionament del lloc.
        </li>
        <li>
          Fer extraccions automatitzades massives amb una intensitat que perjudiqui el servei per a
          la resta de persones. La llicència et permet reutilitzar el contingut; el que et demanem és
          que ho facis a un ritme raonable. Si necessites el conjunt sencer, escriu-nos i te’l
          facilitarem: és més barat per a tots dos.{' '}
          <Pendent>publicar una exportació o una API oberta del conjunt de dades</Pendent>
        </li>
        <li>
          Presentar el contingut de manera que suggereixi una relació, una aprovació o un patrocini
          per part d’Identitat.digital o de New Spirit Studio S.L. que no existeixi.
        </li>
        <li>
          Manipular les puntuacions o les afirmacions en reproduir-les, o descontextualitzar-les
          separant-les de la seva data i de les seves fonts.
        </li>
      </ul>

      <h2>6. Enllaços i contingut de tercers</h2>
      <p>
        El lloc enllaça les seves fonts de manera sistemàtica. Aquests llocs són de tercers i no els
        controlem. No responem del seu contingut, de la seva disponibilitat ni de les seves pràctiques
        de privadesa. D’acord amb l’article 17 de la Llei 34/2002, la nostra responsabilitat només
        naixeria si coneguéssim efectivament la il·licitud d’un contingut enllaçat i no actuéssim amb
        diligència per retirar-lo.
      </p>
      <p>
        Si veus un enllaç trencat, desviat o a un contingut il·lícit, digues-nos-ho a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>.
      </p>

      <h2>7. Responsabilitat</h2>
      <p>
        Posem tota la diligència que podem en el contingut i en les eines, i ho fem amb un mètode
        documentat i comprovable. Dit això, i dins dels límits que permet la llei:
      </p>
      <ul>
        <li>
          El lloc i les eines s’ofereixen tal com són, sense garanties d’adequació a una finalitat
          concreta.
        </li>
        <li>
          No responem dels danys indirectes, del lucre cessant ni de la pèrdua de dades derivats de
          l’ús o de la impossibilitat d’ús del lloc.
        </li>
        <li>
          No responem de les decisions que prenguis a partir de la informació publicada, incloent-hi
          contractar o deixar de contractar un servei de tercers.
        </li>
      </ul>
      <p>
        <strong>Aquestes limitacions no s’apliquen</strong> als casos de dol o culpa greu, ni als
        danys a la vida, la integritat física o la salut, ni a la responsabilitat que la normativa de
        persones consumidores declari indisponible. Si ets una persona consumidora, conserves íntegres
        els drets que et reconeix el text refós de la Llei general per a la defensa de les persones
        consumidores i usuàries, i cap clàusula d’aquest document no te’ls pot retallar.
      </p>

      <h2>8. Errors i correccions</h2>
      <p>
        Si trobes una dada equivocada, una font caiguda o una interpretació que et sembla injusta,
        escriu-nos. El procediment de correcció, els terminis i el dret de rèplica de les empreses
        documentades són a la{' '}
        <Link href="/legal/politica-editorial">política editorial</Link>. Si has trobat una barrera
        d’accessibilitat, el camí és a la{' '}
        <Link href="/legal/accessibilitat">declaració d’accessibilitat</Link>.
      </p>
      <p>
        Si has descobert una vulnerabilitat de seguretat en aquest lloc, escriu a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a> descrivint-la i dona’ns un
        temps raonable per corregir-la abans de fer-la pública. No emprendrem accions contra qui
        investigui de bona fe, sense degradar el servei, sense accedir a dades de tercers i sense
        divulgar res abans d’hora.
      </p>

      <h2>9. Modificació d’aquestes condicions</h2>
      <p>
        Podem actualitzar aquestes condicions quan canviï el lloc, les eines o la normativa. La versió
        vigent és sempre aquesta, amb el número i la data al capdamunt. Els canvis no tenen efecte
        retroactiu sobre els usos ja fets del contingut a l’empara de la llicència.
      </p>

      <h2>10. Llei aplicable i jurisdicció</h2>
      <p>
        Aquestes condicions es regeixen pel dret espanyol. Si ets una persona consumidora, qualsevol
        controvèrsia se sotmet als jutjats i tribunals del teu domicili. Si no ho ets, als jutjats i
        tribunals de Sabadell.
      </p>
      <p>
        Si una clàusula d’aquest document resulta nul·la, la resta continua sent vàlida i la clàusula
        afectada s’ha d’interpretar de la manera que més s’acosti a la seva finalitat dins del que
        permeti la llei.
      </p>
    </>
  )
}
