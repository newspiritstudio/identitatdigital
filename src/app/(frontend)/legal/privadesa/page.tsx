import Link from 'next/link'
import type { Metadata } from 'next'

import { Avis, DocMeta, Pendent, Resum, TableWrap } from '../parts'

export const metadata: Metadata = { title: 'Política de privadesa' }

/**
 * Política de privadesa. Articles 12, 13 i 14 del Reglament (UE) 2016/679 i
 * Llei orgànica 3/2018.
 *
 * Aquest text és el document que més compromet el projecte: si algú el llegeix
 * i troba una afirmació que el codi no sosté, tot el que diem sobre les altres
 * empreses perd valor. Per això cada afirmació d'aquí es pot comprovar al
 * repositori públic i s'assenyala amb precisió el que encara no sabem.
 */
export default function PrivacyPage() {
  return (
    <>
      <h1>Política de privadesa</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Aquest lloc existeix per explicar què fan les aplicacions amb les dades de les persones.
        Seria absurd que la nostra pròpia política de privadesa fos un text llarg i impenetrable. Ho
        hem intentat evitar: aquí hi ha exactament el que fem, per què ho fem i com pots
        comprovar-ho.
      </p>

      <Resum>
        <p>
          <strong>El resum honest:</strong>
        </p>
        <ul>
          <li>No hi ha comptes ni registre. No et podem identificar.</li>
          <li>No hi ha galetes per a qui visita, ni analítica, ni rastrejadors, ni píxels.</li>
          <li>No hi ha cap formulari de contacte on puguis deixar dades.</li>
          <li>
            No hi ha cap script de tercers. Quan visites una pàgina, el teu navegador no parla amb
            cap servidor que no sigui el nostre.
          </li>
          <li>
            Les eines de la secció <Link href="/eines">Eines</Link> calculen dins del teu
            dispositiu. Les teves contrasenyes no surten del navegador, mai.
          </li>
          <li>
            L’única dada personal teva que podem arribar a tocar és la teva adreça IP als registres
            del servidor, com a qualsevol servidor web del món. Ho expliquem sota.
          </li>
          <li>No venem res, no cedim res i no fem perfils de ningú.</li>
        </ul>
      </Resum>

      <h2>1. Qui és responsable del tractament</h2>
      <TableWrap label="Dades identificatives del responsable del tractament">
        <table>
          <caption className="visually-hidden">
            Dades identificatives del responsable del tractament
          </caption>
          <tbody>
            <tr>
              <th scope="row">Responsable</th>
              <td>New Spirit Studio S.L.</td>
            </tr>
            <tr>
              <th scope="row">NIF</th>
              <td>B75352872</td>
            </tr>
            <tr>
              <th scope="row">Domicili</th>
              <td>Carrer del Sol, 62, 08201 Sabadell (Barcelona)</td>
            </tr>
            <tr>
              <th scope="row">Correu de contacte</th>
              <td>
                <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>
              </td>
            </tr>
            <tr>
              <th scope="row">Telèfon</th>
              <td>611 54 62 16</td>
            </tr>
            <tr>
              <th scope="row">Delegat de protecció de dades</th>
              <td>
                No n’hi ha, i a l’apartat 9 expliquem per què no en calia designar cap. El punt de
                contacte per a qualsevol qüestió de protecció de dades és el correu anterior.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>2. Com està fet aquest lloc, i per què això importa</h2>
      <p>
        La privadesa d’un lloc web no depèn del que digui la seva política, sinó de com està
        construït. Aquestes són les decisions tècniques que fan que la resta d’aquest document sigui
        tan curt:
      </p>
      <ul>
        <li>
          <strong>Les pàgines es generen al servidor.</strong> El navegador rep HTML ja fet. No hi
          ha cap biblioteca de tercers carregada des d’una xarxa de distribució externa.
        </li>
        <li>
          <strong>
            La política de seguretat de contingut només permet el nostre propi origen.
          </strong>{' '}
          La directiva <code>connect-src &apos;self&apos;</code> impedeix que qualsevol codi de la
          pàgina obri una connexió a un servidor que no sigui el nostre. Encara que algú hi colés un
          rastrejador, el navegador el bloquejaria. Això no és una promesa: és una capçalera HTTP
          que pots inspeccionar amb les eines de desenvolupament del teu navegador.
        </li>
        <li>
          <strong>La capçalera de permisos desactiva funcions sensibles.</strong> Càmera, micròfon i
          geolocalització estan bloquejats per al lloc sencer. També hi és bloquejada l’API{' '}
          <code>browsing-topics</code>, el sistema de publicitat basat en interessos que Google va
          incorporar a Chrome: aquest lloc no hi participa.
        </li>
        <li>
          <strong>No hi ha cap sistema d’analítica instal·lat.</strong> Ni Google Analytics, ni cap
          alternativa, ni tan sols de les que es presenten com a respectuoses amb la privadesa. No
          sabem quanta gent ens visita ni d’on ve, i ho acceptem.
        </li>
      </ul>
      <p>
        El codi del lloc és públic. Qualsevol pot verificar aquestes afirmacions llegint-lo, o
        obrint la pestanya de xarxa del navegador i comprovant que carregar una pàgina no genera cap
        petició a cap domini de tercers.
      </p>

      <h2>3. Quins tractaments fem</h2>
      <p>Aquests són tots. No n’hi ha cap més.</p>

      <h3>3.1. Registres del servidor</h3>
      <p>
        Qualsevol servidor web deixa constància de les peticions que rep, i el nostre no és cap
        excepció. Aquests registres poden contenir la teva adreça IP, la data i l’hora, la pàgina
        demanada, el codi de resposta, l’identificador del navegador i, si hi has arribat des d’un
        enllaç, l’adreça d’origen.
      </p>
      <p>
        Aquestes dades no s’associen a cap persona identificada, no s’exploten amb finalitats
        estadístiques ni comercials i no es creuen amb res. Serveixen per a tres coses: que el lloc
        funcioni, detectar atacs i abusos, i poder diagnosticar una errada quan n’hi ha una.
      </p>
      <TableWrap label="Tractament dels registres del servidor">
        <table>
          <caption className="visually-hidden">Tractament dels registres del servidor</caption>
          <tbody>
            <tr>
              <th scope="row">Base jurídica</th>
              <td>
                Interès legítim, article 6.1.f del Reglament general de protecció de dades.
                L’interès és mantenir el servei disponible i segur, que és també el teu interès quan
                el fas servir. La ponderació entre aquest interès i els teus drets consta a
                l’anàlisi interna del projecte.
              </td>
            </tr>
            <tr>
              <th scope="row">Conservació</th>
              <td>
                El nostre criteri és no conservar-los més de 30 dies, tret que un registre concret
                sigui necessari per documentar un incident de seguretat, cas en què es conserva el
                temps estrictament necessari per resoldre’l.{' '}
                <Pendent>
                  confirmar la retenció de registres que aplica per defecte el proveïdor
                  d’allotjament i alinear-la amb aquest criteri
                </Pendent>
              </td>
            </tr>
            <tr>
              <th scope="row">Destinataris</th>
              <td>
                El proveïdor d’allotjament, com a encarregat del tractament.{' '}
                <Pendent>identitat del proveïdor d’allotjament i contracte de l’article 28</Pendent>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>3.2. Comptes del panell d’administració</h3>
      <p>
        El lloc té un panell d’edició a <code>/admin</code> que fa servir només l’equip editorial.
        Hi ha comptes perquè cal saber qui ha escrit i qui ha modificat cada fitxa. No hi pot entrar
        ningú de fora: els comptes els crea l’administració i no hi ha registre obert.
      </p>
      <p>
        De cada persona editora s’hi desa el nom, l’adreça de correu, el rol, la contrasenya —
        guardada com a resum criptogràfic amb sal, mai en clar — i les dades necessàries per aplicar
        el bloqueig per intents fallits. La sessió caduca al cap de vuit hores i el compte es
        bloqueja deu minuts després de cinc intents fallits.
      </p>
      <TableWrap label="Tractament dels comptes del panell d’administració">
        <table>
          <caption className="visually-hidden">
            Tractament dels comptes del panell d’administració
          </caption>
          <tbody>
            <tr>
              <th scope="row">Base jurídica</th>
              <td>
                Execució de la relació contractual o de col·laboració amb la persona editora,
                article 6.1.b, i interès legítim en la seguretat i la traçabilitat de l’edició,
                article 6.1.f.
              </td>
            </tr>
            <tr>
              <th scope="row">Conservació</th>
              <td>
                Mentre duri la relació i, després, el temps en què es puguin derivar
                responsabilitats. L’autoria dels canvis històrics es conserva perquè és el que fa
                auditable el contingut publicat.
              </td>
            </tr>
            <tr>
              <th scope="row">Destinataris</th>
              <td>
                El proveïdor d’allotjament i el proveïdor de la base de dades, com a encarregats.{' '}
                <Pendent>
                  identitat dels proveïdors i contractes d’encarregat del tractament signats
                </Pendent>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>3.3. Correus que ens escrius</h3>
      <p>
        No hi ha cap formulari de contacte en aquest lloc. Si ens escrius, ho fas des del teu propi
        correu a l’adreça <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>, i
        aleshores tractem el que hi posis: la teva adreça, el teu nom si el dius i el contingut del
        missatge.
      </p>
      <TableWrap label="Tractament dels correus que ens arriben">
        <table>
          <caption className="visually-hidden">Tractament dels correus que ens arriben</caption>
          <tbody>
            <tr>
              <th scope="row">Base jurídica</th>
              <td>
                Interès legítim a respondre a qui ens escriu, article 6.1.f. Si el que ens demanes
                és exercir un dret de protecció de dades, la base és el compliment d’una obligació
                legal, article 6.1.c, en relació amb els articles 15 a 22 del Reglament.
              </td>
            </tr>
            <tr>
              <th scope="row">Conservació</th>
              <td>
                El temps necessari per respondre i, després, el necessari per acreditar que ho hem
                fet. Per a les sol·licituds d’exercici de drets, tres anys, que és el termini de
                prescripció de les infraccions greus de la Llei orgànica 3/2018. La resta de
                correspondència s’esborra quan ja no té sentit conservar-la.
              </td>
            </tr>
            <tr>
              <th scope="row">Destinataris</th>
              <td>
                El proveïdor de correu electrònic, com a encarregat.{' '}
                <Pendent>
                  proveïdor de correu de admin@newspirit.studio i ubicació del servei
                </Pendent>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>3.4. Publicació de contingut sobre empreses i persones</h3>
      <p>
        El lloc publica anàlisis sobre empreses. Les empreses no són persones físiques i les seves
        dades no són dades personals. Ara bé, en documentar sancions, resolucions judicials i
        incidents, de vegades apareix el nom d’una persona física: qui va presentar una reclamació
        que va acabar en una resolució, o qui ocupava un càrrec directiu en el moment dels fets.
      </p>
      <p>
        Quan això passa, la dada es publica només si ja és pública en la font oficial, si és
        rellevant per entendre el fet i si es refereix a la persona en la seva funció professional o
        pública, mai en la seva esfera privada. No publiquem dades de categories especials de
        l’article 9, ni dades de menors, ni res que no consti en una font citada.
      </p>
      <TableWrap label="Tractament de la publicació de contingut sobre empreses i persones">
        <table>
          <caption className="visually-hidden">
            Tractament de la publicació de contingut sobre empreses i persones
          </caption>
          <tbody>
            <tr>
              <th scope="row">Base jurídica</th>
              <td>
                Interès legítim, article 6.1.f, en l’exercici de la llibertat d’informació que
                reconeix l’article 20.1.d de la Constitució, en el marc de la conciliació entre
                protecció de dades i llibertat d’expressió i informació que preveu l’article 85 del
                Reglament.
              </td>
            </tr>
            <tr>
              <th scope="row">Origen de les dades</th>
              <td>
                Fonts públiques identificades i enllaçades a cada fitxa: resolucions d’autoritats de
                control, sentències, documentació oficial de les empreses, anàlisis independents i
                premsa. Això és la informació de l’article 14 del Reglament, per a les dades que no
                ens ha donat la persona interessada.
              </td>
            </tr>
            <tr>
              <th scope="row">Conservació</th>
              <td>
                Mentre la informació conservi interès públic i documental. Una fitxa antiga no
                s’esborra: es marca com a superada i es conserva l’historial, perquè poder saber què
                dèiem abans forma part del valor del projecte.
              </td>
            </tr>
            <tr>
              <th scope="row">Drets</th>
              <td>
                Qualsevol persona que hi aparegui pot escriure’ns. Els procediments de rectificació
                i de rèplica són a la{' '}
                <Link href="/legal/politica-editorial">política editorial</Link>.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>4. Les eines: què passa exactament</h2>
      <p>
        La secció <Link href="/eines">Eines</Link> conté un generador de contrasenyes i frases de
        pas, una calculadora d’exposició personal i un comparador d’aplicacions. Totes tres
        funcionen íntegrament dins del teu navegador. Ni el que tries, ni el que escrius, ni el que
        et surt arriben al nostre servidor, i no es desa res al teu dispositiu si no t’ho diem
        expressament en aquesta pàgina i a la de <Link href="/legal/galetes">galetes</Link>.
      </p>

      <h3>4.1. El generador de contrasenyes</h3>
      <p>
        Les contrasenyes es generen al teu dispositiu amb el generador criptogràfic del navegador.
        No viatgen enlloc, no les veiem, no les desem i no les podem recuperar. Quan tanques la
        pestanya, desapareixen.
      </p>

      <h3>4.2. La comprovació de contrasenyes filtrades</h3>
      <p>
        Aquesta és la part que mereix una explicació llarga, perquè és exactament el tipus
        d’afirmació que aquest projecte exigeix que les empreses demostrin. Així que la demostrem
        nosaltres.
      </p>
      <p>
        La comprovació funciona amb una tècnica anomenada <strong>k-anonimat</strong>. El
        procediment, pas a pas:
      </p>
      <ol>
        <li>
          Escrius una contrasenya al camp. <strong>No surt del camp.</strong>
        </li>
        <li>
          El teu navegador en calcula el resum criptogràfic SHA-1. Aquest càlcul passa dins del teu
          dispositiu.
        </li>
        <li>
          El navegador n’agafa <strong>només els cinc primers caràcters hexadecimals</strong> i els
          envia a una ruta del nostre servidor. Cinc caràcters hexadecimals són un de més d’un milió
          de prefixos possibles: milers de contrasenyes diferents comparteixen el mateix prefix.
        </li>
        <li>
          El nostre servidor reenvia aquest prefix, i res més, a l’API de Have I Been Pwned a{' '}
          <code>api.pwnedpasswords.com</code>. Com que la petició la fa el nostre servidor, Have I
          Been Pwned no arriba a veure ni la teva adreça IP.
        </li>
        <li>
          L’API respon amb la llista de tots els resums que comencen per aquest prefix, amb el
          nombre de vegades que cadascun ha aparegut en filtracions. Nosaltres et passem la llista
          tal com ens arriba.
        </li>
        <li>
          El teu navegador busca en aquesta llista el teu resum sencer i et diu el resultat. La
          comparació decisiva passa al teu dispositiu.
        </li>
      </ol>
      <p>
        Conseqüència:{' '}
        <strong>
          ni nosaltres ni Have I Been Pwned rebem mai la teva contrasenya, ni el seu resum sencer.
        </strong>{' '}
        El nostre servidor tampoc no desa ni registra aquests prefixos: la petició es reenvia i la
        resposta es retorna, sense escriure res enlloc.
      </p>
      <p>
        El prefix de cinc caràcters, aïllat, no permet identificar cap persona ni cap contrasenya, i
        per tant no és una dada personal en el sentit de l’article 4.1 del Reglament. Ara bé, la
        petició HTTP que el transporta sí que arriba al nostre servidor com qualsevol altra, i pot
        deixar rastre als registres descrits a l’apartat 3.1 en els mateixos termes que la resta de
        peticions: adreça IP, data i ruta. Ho diem perquè la diferència entre «no en desem res» i
        «no en desem res més enllà del que desa qualsevol servidor» és precisament el tipus de matís
        que criticaríem si l’ometés una altra empresa.
      </p>
      <p>
        Per què el prefix passa pel nostre servidor i no va directe des del teu navegador: perquè la
        nostra política de seguretat de contingut prohibeix al navegador connectar-se a cap domini
        que no sigui el nostre. Aquesta restricció, que és una mesura de seguretat, obliga a aquest
        disseny, i de retruc t’hi afegeix privadesa, perquè la teva adreça IP no arriba al tercer.
      </p>

      <h3>4.3. La calculadora d’exposició i el comparador</h3>
      <p>
        Tries aplicacions d’una llista i l’eina calcula, amb les dades que ja tens carregades a la
        pàgina, quines dades teves circulen i quines empreses hi accedeixen. La selecció no s’envia
        enlloc i el resultat no es desa a cap servidor nostre. Cap de les dues eines no fa cap
        petició mentre les fas servir: la llista sencera d’aplicacions viatja una sola vegada, en
        carregar la pàgina, i tot el càlcul posterior passa al teu dispositiu.
      </p>
      <p>
        Hi ha una diferència entre les dues que val la pena explicar, perquè afecta on acaba la teva
        tria:
      </p>
      <ul>
        <li>
          <strong>La calculadora d’exposició recorda la teva selecció</strong> a l’emmagatzematge
          local del navegador, amb la clau <code>identitat.exposicio.seleccio</code>. Només hi desa
          la llista d’aplicacions que has marcat: ni el resultat, ni cap xifra, ni cap
          identificador. No és una galeta, no s’envia en cap petició i no en sabem res. Té un botó
          «Esborra la tria» que la treu del tot. La taula completa és a la pàgina de{' '}
          <Link href="/legal/galetes">galetes</Link>.
        </li>
        <li>
          <strong>El comparador no desa res al dispositiu</strong>: posa la selecció a l’adreça de
          la pàgina perquè puguis copiar l’enllaç i compartir-lo. Això vol dir que qui rebi l’enllaç
          en veurà la selecció. És el comportament que es vol, i el diem perquè ho sàpigues abans
          d’enviar-lo.
        </li>
      </ul>
      <Avis>
        <p>
          <strong>Revisat contra el codi publicat.</strong> A data d’aquesta versió, les tres eines
          s’han repassat una per una: l’única escriptura al dispositiu és la de la calculadora
          d’exposició descrita aquí, no n’hi ha cap altra en emmagatzematge local, ni de sessió, ni
          en cap base de dades del navegador, i l’única petició que surt del navegador mentre les
          fas servir és la del prefix de cinc caràcters de l’apartat 4.2.
        </p>
      </Avis>

      <h2>5. Taula resum dels tractaments</h2>
      <TableWrap label="Resum de tots els tractaments, amb dades, finalitat, base jurídica i conservació">
        <table>
          <caption className="visually-hidden">
            Resum de tots els tractaments, amb dades, finalitat, base jurídica i conservació
          </caption>
          <thead>
            <tr>
              <th scope="col">Tractament</th>
              <th scope="col">Dades</th>
              <th scope="col">Finalitat</th>
              <th scope="col">Base jurídica</th>
              <th scope="col">Conservació</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registres del servidor</td>
              <td>Adreça IP, data i hora, ruta, codi de resposta, agent d’usuari</td>
              <td>Funcionament, seguretat i diagnòstic</td>
              <td>Interès legítim, article 6.1.f</td>
              <td>30 dies com a criteri propi</td>
            </tr>
            <tr>
              <td>Comptes del panell</td>
              <td>Nom, correu, rol, contrasenya xifrada, intents d’accés</td>
              <td>Edició del contingut i traçabilitat</td>
              <td>Articles 6.1.b i 6.1.f</td>
              <td>Durada de la relació i terminis de responsabilitat</td>
            </tr>
            <tr>
              <td>Correspondència</td>
              <td>Adreça de correu, nom si es dona, contingut del missatge</td>
              <td>Respondre i atendre l’exercici de drets</td>
              <td>Articles 6.1.f i 6.1.c</td>
              <td>Fins a tres anys en els exercicis de drets</td>
            </tr>
            <tr>
              <td>Contingut editorial</td>
              <td>Noms de persones en funció pública o professional, en fonts ja públiques</td>
              <td>Informació d’interès general</td>
              <td>Article 6.1.f amb l’article 85</td>
              <td>Mentre conservi interès públic i documental</td>
            </tr>
            <tr>
              <td>Comprovació de contrasenyes</td>
              <td>Cap. Només un prefix de cinc caràcters, que no identifica ningú</td>
              <td>Saber si una contrasenya ha aparegut en filtracions</td>
              <td>No hi ha tractament de dades personals</td>
              <td>No es desa res</td>
            </tr>
            <tr>
              <td>Analítica i publicitat</td>
              <td>Cap</td>
              <td>No se’n fa</td>
              <td>—</td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>6. Amb qui compartim dades</h2>
      <p>
        No venem, no lloguem ni cedim dades personals a ningú. No hi ha xarxes publicitàries, ni
        intermediaris de dades, ni socis comercials.
      </p>
      <p>
        Els únics tercers que hi intervenen són els proveïdors tècnics imprescindibles perquè el
        lloc funcioni, que actuen com a encarregats del tractament amb el contracte de l’article 28
        del Reglament: el proveïdor d’allotjament i el de correu electrònic.{' '}
        <Pendent>
          llista definitiva d’encarregats del tractament, amb la seva identitat, el servei que
          presten i la referència del contracte
        </Pendent>
      </p>
      <p>
        A més, quan fas servir la comprovació de contrasenyes, el nostre servidor consulta l’API de
        Have I Been Pwned. No li enviem cap dada personal teva, de manera que no és un encarregat
        del tractament: és una font externa que rep un prefix anònim.
      </p>
      <p>
        També podem comunicar dades quan una llei ens hi obligui, o a una autoritat judicial,
        policial o de control que ho requereixi legítimament. Si això passa mai, i la llei no ens ho
        prohibeix, ho farem constar.
      </p>

      <h2>7. Transferències internacionals</h2>
      <p>
        No fem transferències internacionals de dades personals derivades de la teva visita. La
        consulta a Have I Been Pwned surt de la Unió Europea, però no hi viatja cap dada personal:
        només el prefix de cinc caràcters, que no identifica ningú i que no és una dada personal.
      </p>
      <p>
        <Pendent>
          confirmar la ubicació física dels servidors del proveïdor d’allotjament i, si algun servei
          es presta des de fora de l’Espai Econòmic Europeu, documentar-ne la garantia de l’article
          46 o la decisió d’adequació aplicable
        </Pendent>
      </p>

      <h2>8. Els teus drets</h2>
      <p>
        Tens els drets dels articles 15 a 22 del Reglament general de protecció de dades. En aquest
        lloc són inusualment fàcils d’exercir, perquè tenim molt poques dades teves.
      </p>
      <TableWrap label="Drets de protecció de dades i com exercir-los">
        <table>
          <caption className="visually-hidden">
            Drets de protecció de dades i com exercir-los
          </caption>
          <tbody>
            <tr>
              <th scope="row">Accés</th>
              <td>Saber si tractem dades teves i, si n’hi ha, obtenir-ne una còpia.</td>
            </tr>
            <tr>
              <th scope="row">Rectificació</th>
              <td>Corregir el que sigui inexacte o completar el que sigui incomplet.</td>
            </tr>
            <tr>
              <th scope="row">Supressió</th>
              <td>Demanar que esborrem dades teves quan ja no calguin o t’hi oposis amb raó.</td>
            </tr>
            <tr>
              <th scope="row">Limitació</th>
              <td>
                Demanar que les conservem però deixem de fer-ne ús mentre es resol una disputa.
              </td>
            </tr>
            <tr>
              <th scope="row">Oposició</th>
              <td>
                Oposar-te als tractaments basats en interès legítim per motius de la teva situació
                particular.
              </td>
            </tr>
            <tr>
              <th scope="row">Portabilitat</th>
              <td>
                Rebre les dades que ens hagis donat en un format estructurat. A la pràctica només
                aplica als comptes del panell, perquè és l’únic tractament amb dades que ens hagis
                facilitat tu.
              </td>
            </tr>
            <tr>
              <th scope="row">Decisions automatitzades</th>
              <td>
                No en prenem. Les puntuacions del lloc es calculen sobre empreses, no sobre
                persones, i no produeixen cap efecte jurídic ni similar sobre ningú. Per tant,
                l’article 22 no hi entra.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Per exercir-los, escriu a <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>{' '}
        dient què vols. Et respondrem com a molt tard al cap d’un mes; si la sol·licitud és complexa
        podem allargar-ho dos mesos més, però t’ho direm dins del primer mes i explicant per què.
      </p>
      <p>
        Només et demanarem documentació identificativa si tenim dubtes raonables sobre qui ets, tal
        com preveu l’article 12.6. Per a la major part de sol·licituds no caldrà, perquè la resposta
        serà que no tenim cap dada teva.
      </p>

      <h3>Reclamar davant l’autoritat de control</h3>
      <p>
        Si consideres que no hem respectat els teus drets, pots presentar una reclamació davant
        l’Agència Espanyola de Protecció de Dades, sense cap cost i sense necessitat d’advocat.
        També pots reclamar directament, si ho prefereixes, i sense haver-nos escrit abans.
      </p>
      <TableWrap label="Dades de contacte de l’autoritat de control">
        <table>
          <caption className="visually-hidden">Dades de contacte de l’autoritat de control</caption>
          <tbody>
            <tr>
              <th scope="row">Autoritat</th>
              <td>Agencia Española de Protección de Datos</td>
            </tr>
            <tr>
              <th scope="row">Adreça</th>
              <td>Carrer de Jorge Juan, 6, 28001 Madrid</td>
            </tr>
            <tr>
              <th scope="row">Telèfon</th>
              <td>901 100 099 · 91 266 35 17</td>
            </tr>
            <tr>
              <th scope="row">Seu electrònica</th>
              <td>
                <a href="https://sedeagpd.gob.es" target="_blank" rel="noreferrer">
                  sedeagpd.gob.es
                  <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Lloc web</th>
              <td>
                <a href="https://www.aepd.es" target="_blank" rel="noreferrer">
                  www.aepd.es
                  <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Com que el responsable té el domicili a Catalunya i tracta dades d’àmbit privat, l’autoritat
        competent és l’Agència Espanyola de Protecció de Dades. L’Autoritat Catalana de Protecció de
        Dades té competència sobre el sector públic de Catalunya, no sobre aquest lloc.
      </p>

      <h2>9. Per què no hi ha delegat de protecció de dades</h2>
      <p>
        L’article 37 del Reglament obliga a designar-ne un en tres casos: quan el responsable és una
        autoritat pública, quan l’activitat principal consisteix en una observació habitual i
        sistemàtica de persones a gran escala, o quan consisteix en el tractament a gran escala de
        dades sensibles.
      </p>
      <p>
        Cap dels tres es compleix. No som una autoritat pública. No observem ningú: no hi ha
        analítica, ni galetes, ni rastreig. I no tractem dades de categories especials. L’article 34
        de la Llei orgànica 3/2018 afegeix una llista d’entitats obligades, i no en formem part.
      </p>
      <p>
        Per tant no hem designat cap delegat. Hem designat un punt de contacte, que és l’adreça de
        correu d’aquest document, i qualsevol qüestió de protecció de dades hi arriba directament
        als administradors de la societat.
      </p>

      <h2>10. Seguretat</h2>
      <p>
        L’article 32 del Reglament demana mesures tècniques i organitzatives adequades al risc.
        Aquestes són les que hi ha, i es poden comprovar totes al codi o a les capçaleres de
        resposta del servidor:
      </p>
      <ul>
        <li>
          <strong>Tot el trànsit va xifrat</strong>, amb HSTS a dos anys, amb subdominis inclosos i
          amb sol·licitud d’inclusió a la llista de precàrrega dels navegadors.
        </li>
        <li>
          <strong>Política de seguretat de contingut</strong> restringida al nostre origen, amb{' '}
          <code>object-src &apos;none&apos;</code>, <code>base-uri &apos;self&apos;</code>,{' '}
          <code>form-action &apos;self&apos;</code> i <code>frame-ancestors &apos;self&apos;</code>.
        </li>
        <li>
          <strong>Capçaleres complementàries</strong>: <code>X-Content-Type-Options: nosniff</code>,{' '}
          <code>X-Frame-Options: SAMEORIGIN</code>,{' '}
          <code>Referrer-Policy: strict-origin-when-cross-origin</code> —de manera que quan surts
          cap a un altre lloc no li enviem la ruta exacta que estaves llegint— i{' '}
          <code>Cross-Origin-Opener-Policy: same-origin</code>.
        </li>
        <li>
          <strong>Permissions-Policy</strong> que desactiva càmera, micròfon, geolocalització i
          l’API de temes de navegació.
        </li>
        <li>
          <strong>Contrasenyes del panell</strong> desades com a resum amb sal, sessions de vuit
          hores, bloqueig de deu minuts després de cinc intents fallits.
        </li>
        <li>
          <strong>Els esborranys no surten mai al web públic.</strong> El control d’accés només
          serveix contingut publicat a qui no ha iniciat sessió.
        </li>
        <li>
          <strong>L’API GraphQL està desactivada per defecte</strong> i només s’activa explícitament
          en desenvolupament.
        </li>
        <li>
          <strong>L’aplicació es nega a arrencar</strong> si falta una variable de configuració
          crítica, si la clau de signatura és massa curta o si en producció l’adreça del lloc no fa
          servir HTTPS.
        </li>
      </ul>
      <p>
        I una debilitat coneguda, que preferim dir nosaltres: la política de seguretat de contingut
        encara admet <code>&apos;unsafe-inline&apos;</code> per a scripts i estils, cosa que en
        redueix l’eficàcia davant d’atacs d’injecció de codi. Està previst substituir-ho per un
        sistema de valors únics per petició quan el lloc tingui el disseny definitiu. Mentrestant,
        que el lloc no accepti cap entrada de text de qui el visita i que no hi hagi sessions per
        segrestar en limita molt l’impacte.
      </p>
      <p>
        Si tot i això hi hagués una violació de seguretat que impliqués un risc per als drets de les
        persones, ho notificaríem a l’Agència Espanyola de Protecció de Dades en 72 hores i, si el
        risc fos alt, també a les persones afectades, tal com manen els articles 33 i 34.
      </p>

      <h2>11. Menors</h2>
      <p>
        Aquest lloc no s’adreça específicament a menors ni en recull cap dada, perquè no recull
        dades de ningú. Qualsevol persona pot llegir-lo. L’article 7 de la Llei orgànica 3/2018, que
        fixa els catorze anys per al consentiment, no hi entra, perquè no basem cap tractament en el
        consentiment.
      </p>

      <h2>12. Canvis en aquesta política</h2>
      <p>
        Si canviem alguna cosa del que hi ha aquí, canviarà primer el codi. Per això aquesta
        política porta versió i data, i per això el codi del lloc és públic: perquè es pugui
        comprovar que el document i el programa diuen el mateix.
      </p>
      <p>
        Si algun dia afegim una funció que impliqui tractar dades noves —un butlletí, comentaris, un
        formulari, una analítica—, aquesta política s’actualitzarà <em>abans</em> d’activar-la, i el
        canvi s’anunciarà de manera visible al lloc.
      </p>
    </>
  )
}
