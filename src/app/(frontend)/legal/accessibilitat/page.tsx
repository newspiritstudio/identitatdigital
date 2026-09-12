import type { Metadata } from 'next'

import { Avis, DocMeta, Pendent, Resum, TableWrap } from '../parts'

export const metadata: Metadata = { title: 'Declaració d’accessibilitat' }

/**
 * Declaració d'accessibilitat, en esborrany.
 *
 * El lloc encara no té el disseny definitiu. Signar una declaració de
 * conformitat ara seria exactament el tipus de compromís buit que aquest
 * projecte documenta a les fitxes d'altres empreses. Així que diem l'estat real.
 */
export default function AccessibilityPage() {
  return (
    <>
      <h1>Declaració d’accessibilitat</h1>
      <DocMeta version="0.1 (esborrany)" updated="12 de setembre de 2026" />

      <Avis>
        <p>
          <strong>Això és un esborrany, no una declaració de conformitat.</strong> El lloc es troba en
          una fase de validació de contingut i encara no té el disseny definitiu. No hi ha hagut cap
          auditoria d’accessibilitat, ni interna ni externa. Publicar ara una declaració de
          conformitat total o parcial seria una afirmació que no podem sostenir, i aquest projecte
          existeix precisament per assenyalar afirmacions que no se sostenen.
        </p>
        <p>
          El que hi ha a continuació és l’estat real després de revisar el codi, les mancances que ja
          coneixem, el que ens comprometem a fer i com informar-nos si trobes una barrera.
        </p>
      </Avis>

      <Resum>
        <p>
          <strong>En curt:</strong> aquesta declaració és <strong>voluntària</strong> —cap norma no
          l’exigeix a aquest lloc, i a l’apartat 2 expliquem per què—, i l’assumim igualment. El
          compromís és arribar a les WCAG 2.2 nivell AA i a la norma EN 301 549. L’estat actual és
          una base tècnica decent i un disseny sense treballar.
        </p>
      </Resum>

      <h2>1. Compromís</h2>
      <p>
        New Spirit Studio S.L. es compromet que Identitat.digital sigui accessible d’acord amb les{' '}
        <strong>Pautes d’accessibilitat per al contingut web (WCAG) 2.2, nivell AA</strong>, i amb la
        norma europea harmonitzada <strong>EN 301 549</strong>, que és la que recull els requisits
        d’accessibilitat per als productes i serveis de tecnologies de la informació a la Unió
        Europea i que incorpora les WCAG per a la part web.
      </p>
      <p>
        Aquest compromís no és decoratiu: un lloc que publica informació d’interès públic sobre drets
        digitals i que no es pot llegir amb un lector de pantalla estaria excloent precisament les
        persones que més sovint queden fora de les decisions sobre tecnologia.
      </p>

      <h2>2. És obligatòria aquesta declaració? No. I l’assumim igualment</h2>
      <p>
        Cal ser precisos, perquè la resposta canvia segons la norma que es miri. Hem revisat les tres
        que podrien aplicar.
      </p>

      <h3>2.1. Reial decret 1112/2018: no aplica</h3>
      <p>
        És la norma que transposa la Directiva (UE) 2016/2102 i la que crea l’obligació de publicar
        una declaració d’accessibilitat amb un format determinat. El seu àmbit és el{' '}
        <strong>sector públic</strong>: administracions, entitats de dret públic i entitats privades
        que prestin serveis finançats amb fons públics o que exerceixin funcions públiques.
      </p>
      <p>
        Identitat.digital és un projecte privat d’una societat limitada, sense finançament públic i
        sense cap funció pública delegada. El Reial decret 1112/2018 no li és aplicable i, per tant,
        no li exigeix ni conformitat ni declaració.
      </p>

      <h3>2.2. Directiva (UE) 2019/882 i Llei 11/2023: no aplica, per dues raons</h3>
      <p>
        La Directiva (UE) 2019/882, coneguda com a Llei europea d’accessibilitat, sí que arriba al
        sector privat. Es va transposar a Espanya amb la Llei 11/2023 i és aplicable des del 28 de
        juny de 2025. Ara bé, no s’aplica a tot Internet: el seu article 2 conté una{' '}
        <strong>llista tancada</strong> de productes i serveis. Per al que aquí interessa, hi entren
        el comerç electrònic, els serveis bancaris, els llibres electrònics, el transport de
        passatgers, les comunicacions electròniques i l’accés als serveis de comunicació audiovisual.
      </p>
      <p>
        <strong>Primera raó:</strong> Identitat.digital no és cap d’aquests serveis. En concret, no és
        comerç electrònic, que la Directiva defineix com els serveis prestats a distància, per via
        electrònica, <em>amb vista a la celebració d’un contracte amb una persona consumidora</em>.
        Aquí no es contracta res, no es ven res, no s’obre cap compte i no es fa cap pagament. És una
        publicació informativa gratuïta i, com a tal, queda fora de l’àmbit d’aplicació.
      </p>
      <p>
        <strong>Segona raó, subsidiària:</strong> encara que un dia el projecte incorporés un servei
        de l’àmbit de la Directiva, l’article 4.5 exclou les microempreses que presten serveis de les
        obligacions d’accessibilitat, precisament per la desproporció de la càrrega. Ho diem com a
        argument de reforç, no com a excusa: no pensem acollir-nos-hi.{' '}
        <Pendent>
          confirmar que New Spirit Studio S.L. compleix la definició de microempresa —menys de deu
          persones treballadores i volum de negoci o balanç anual no superior a dos milions d’euros—
          per poder-ho afirmar amb seguretat
        </Pendent>
      </p>

      <h3>2.3. Reial decret legislatiu 1/2013: obligació general, sense declaració</h3>
      <p>
        El text refós de la Llei general de drets de les persones amb discapacitat i de la seva
        inclusió social estableix un principi general de no-discriminació i d’accessibilitat
        universal que abasta els béns, productes i serveis a disposició del públic, i preveu el deure
        de fer ajustos raonables. Aquest principi <strong>sí que ens obliga</strong> com a criteri de
        conducta.
      </p>
      <p>
        El que aquesta norma no fa és imposar una conformitat tècnica concreta ni obligar a publicar
        cap declaració per a un lloc web privat: aquest desenvolupament reglamentari existeix per al
        sector públic al Reial decret 1112/2018. La conseqüència pràctica és que tenim un deure de no
        excloure ningú i de fer ajustos quan se’ns demanin, però no una obligació formal de declarar
        res.
      </p>

      <h3>2.4. Conclusió</h3>
      <p>
        <strong>Aquesta declaració és voluntària.</strong> L’assumim per tres motius:
      </p>
      <ul>
        <li>
          Perquè un projecte que exigeix transparència a les grans plataformes no pot escudar-se en
          una exempció legal per no dir en quin estat està.
        </li>
        <li>
          Perquè l’accessibilitat és una condició del dret a la informació. Publicar informació que
          una part de la població no pot llegir és una forma de no publicar-la.
        </li>
        <li>
          Perquè declarar-ho públicament ens obliga a complir-ho, i un compromís que no es pot
          comprovar no val res.
        </li>
      </ul>

      <h2>3. Estat de compliment actual</h2>
      <p>
        <strong>No conforme</strong>, per manca d’avaluació. No hem fet cap auditoria, ni automàtica
        ni manual, ni cap prova amb persones usuàries de tecnologies de suport. La valoració que
        segueix és una revisió del codi, no una avaluació de conformitat.
      </p>

      <h3>3.1. El que ja funciona</h3>
      <ul>
        <li>
          <strong>Contingut llegible sense JavaScript.</strong> Les pàgines es generen al servidor i
          el text hi és present a l’HTML inicial. Un lector de pantalla o un navegador en mode text
          poden llegir-ho tot.
        </li>
        <li>
          <strong>Idioma declarat.</strong> L’element arrel porta <code>lang=&quot;ca&quot;</code>, de
          manera que els lectors de pantalla apliquen la pronunciació catalana.
        </li>
        <li>
          <strong>Estructura semàntica.</strong> Es fan servir capçaleres jeràrquiques, regions de
          pàgina, llistes de definició per a les afirmacions amb evidència i taules reals per a les
          dades tabulars, no maquetació amb taules ni amb divs buits.
        </li>
        <li>
          <strong>Cap imatge sense text alternatiu.</strong> Això no depèn de la disciplina de qui
          edita: el camp de text alternatiu és obligatori al gestor de continguts i una imatge no es
          pot desar sense ell. És una garantia estructural, no una bona intenció.
        </li>
        <li>
          <strong>Cap animació, cap moviment automàtic, cap contingut intermitent i cap reproducció
          automàtica.</strong> Els criteris 2.2.2 i 2.3.1 es compleixen per absència de causa.
        </li>
        <li>
          <strong>Contrast de color del text dins dels límits.</strong> Els colors del full d’estil
          donen ràtios de contrast sobre fons blanc entre 4,9:1 i 8,2:1, per damunt del mínim de
          4,5:1 que demana el criteri 1.4.3 per a text normal.
        </li>
        <li>
          <strong>Cap element depèn només del color per transmetre informació.</strong> Les
          puntuacions es mostren sempre com a xifra, i el color només reforça. Els estats de les
          afirmacions es mostren com a text.
        </li>
        <li>
          <strong>Cap límit de temps, cap sessió que caduqui, cap CAPTCHA i cap formulari</strong> a
          la part pública del lloc.
        </li>
      </ul>

      <h3>3.2. Mancances conegudes</h3>
      <p>Aquestes les hem trobades nosaltres revisant el codi. N’hi haurà més.</p>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th scope="col">Mancança</th>
              <th scope="col">Criteri WCAG 2.2</th>
              <th scope="col">Efecte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                No hi ha enllaç per saltar al contingut principal. Qui navega amb teclat ha de
                travessar la navegació sencera a cada pàgina.
              </td>
              <td>2.4.1 Evitar blocs (A)</td>
              <td>Alt</td>
            </tr>
            <tr>
              <td>
                Les taules de dades no tenen títol (<code>caption</code>) i les seves capçaleres no
                declaren l’abast (<code>scope</code>). Un lector de pantalla pot no relacionar bé cada
                cel·la amb la seva capçalera.
              </td>
              <td>1.3.1 Informació i relacions (A)</td>
              <td>Alt en les taules comparatives, que són el cor del lloc</td>
            </tr>
            <tr>
              <td>
                Les taules són amples i no tenen contenidor amb desplaçament horitzontal. En una
                pantalla estreta o amb ampliació al 400 % poden provocar desplaçament de la pàgina
                sencera.
              </td>
              <td>1.4.10 Reajustament (AA)</td>
              <td>Alt en mòbil</td>
            </tr>
            <tr>
              <td>
                No hi ha estil propi de focus visible. Depenem del que dibuixi el navegador, que en
                alguns casos té poc contrast sobre el nostre fons.
              </td>
              <td>2.4.7 Focus visible (AA) i 2.4.11 Focus no tapat (AA)</td>
              <td>Mitjà</td>
            </tr>
            <tr>
              <td>
                Els enllaços externs s’obren en una pestanya nova sense avisar-ne, i no hi ha cap
                indicació visual ni textual que ho anticipi.
              </td>
              <td>3.2.5 Canvis a petició (AAA) i bona pràctica general</td>
              <td>Mitjà</td>
            </tr>
            <tr>
              <td>
                Hi ha text a 0,75 i 0,8 rem —els distintius de nivell d’evidència i les llistes de
                fonts— que resulta petit i, en gris, poc llegible per a moltes persones.
              </td>
              <td>1.4.4 Canvi de mida del text (AA) i llegibilitat general</td>
              <td>Mitjà</td>
            </tr>
            <tr>
              <td>
                La navegació no indica en quina secció ets: no hi ha cap marca d’element actiu.
              </td>
              <td>2.4.8 Ubicació (AAA) i orientació de l’usuari</td>
              <td>Baix</td>
            </tr>
            <tr>
              <td>
                El contrast de les vores dels distintius i d’altres elements no textuals no s’ha
                verificat contra el mínim de 3:1.
              </td>
              <td>1.4.11 Contrast no textual (AA)</td>
              <td>Per determinar</td>
            </tr>
            <tr>
              <td>
                Les eines de la secció /eines són interactives i encara no s’han revisat: etiquetatge
                de camps, missatges d’error, anunci de resultats a tecnologies de suport i ús amb
                teclat.
              </td>
              <td>1.3.1, 3.3.1, 3.3.2, 4.1.2, 4.1.3</td>
              <td>Per determinar</td>
            </tr>
            <tr>
              <td>
                El panell d’administració a <code>/admin</code> és de tercers i el seu nivell
                d’accessibilitat no depèn de nosaltres. No l’hem avaluat.
              </td>
              <td>Tot el conjunt</td>
              <td>Afecta només l’equip editorial</td>
            </tr>
            <tr>
              <td>
                No hi ha suport de tema fosc ni respecte de la preferència de moviment reduït del
                sistema. Avui no hi ha moviment, però caldrà tenir-ho present quan n’hi hagi.
              </td>
              <td>1.4.12 i 2.3.3 (AAA)</td>
              <td>Baix</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>3.3. Contingut de tercers</h3>
      <p>
        Els documents als quals enllacem —polítiques de privadesa, resolucions d’autoritats,
        articles— són de tercers i la seva accessibilitat no depèn de nosaltres. Molts d’ells són
        PDF sense etiquetar. Quan sigui possible, el resum en català que publiquem a la fitxa de la
        font ha de permetre entendre el contingut essencial sense haver d’obrir el document original.
      </p>

      <h2>4. Calendari</h2>
      <p>
        Aquest esborrany es converteix en una declaració real quan el lloc tingui el disseny
        definitiu. El pla és aquest:
      </p>
      <ol>
        <li>
          <strong>Correccions immediates</strong>, que no depenen del disseny: enllaç per saltar al
          contingut, títols i abast a les taules, contenidors amb desplaçament, estil de focus propi i
          indicació dels enllaços externs.
        </li>
        <li>
          <strong>Revisió de les eines</strong> a mesura que es publiquin, amb els criteris de
          formularis i de missatges d’estat.
        </li>
        <li>
          <strong>Avaluació sistemàtica</strong> amb la metodologia de les WCAG-EM: automàtica per
          detectar el que és detectable automàticament, i manual per a la resta, que és la major part.
        </li>
        <li>
          <strong>Proves amb lector de pantalla i només amb teclat</strong>, i, si és possible, amb
          persones usuàries reals de tecnologies de suport.
        </li>
        <li>
          <strong>Publicació de la declaració definitiva</strong>, amb l’estat de conformitat que
          resulti de l’avaluació i no el que ens agradaria.
        </li>
      </ol>
      <p>
        <Pendent>
          dates concretes de cada fase, que depenen del calendari del disseny definitiu del lloc
        </Pendent>
      </p>

      <h2>5. Com informar-nos d’una barrera</h2>
      <p>
        Si no pots accedir a algun contingut d’aquest lloc, o si hi trobes una barrera, escriu a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a>. Ens arriba directament a
        les persones que administren la societat, no a un bústia genèrica.
      </p>
      <p>Digue’ns, si pots:</p>
      <ul>
        <li>L’adreça de la pàgina on has trobat el problema.</li>
        <li>Què intentaves fer i què ha passat.</li>
        <li>
          Quin navegador, sistema operatiu i tecnologia de suport fas servir, si en fas servir cap.
        </li>
        <li>Una adreça on respondre’t.</li>
      </ul>
      <p>
        <strong>El que ens comprometem a fer:</strong> acusar-ne recepció en 5 dies hàbils, dir-te en
        15 dies hàbils si ho podem corregir i quan, i fer-ho. Si una correcció requereix el disseny
        definitiu i no la podem avançar, t’ho direm clarament i et facilitarem el contingut en un
        format alternatiu accessible mentrestant. Això últim és el que la llei anomena un ajust
        raonable, i hi estem obligats amb declaració o sense.
      </p>

      <h3>Si no estàs satisfet amb la resposta</h3>
      <p>
        Com que aquest lloc no és del sector públic, no hi ha el procediment de reclamació davant la
        unitat responsable d’accessibilitat que preveu el Reial decret 1112/2018, i no seria honest
        derivar-te a un canal que no et pot atendre.
      </p>
      <p>
        El que sí que existeix: pots dirigir-te a l’Oficina d’Atenció a la Discapacitat, a les
        entitats del moviment associatiu de la discapacitat, o exercir les accions que preveu el text
        refós de la Llei general de drets de les persones amb discapacitat davant la jurisdicció
        ordinària. I, en qualsevol cas, insistir-nos. La barrera continua sent nostra i la volem
        corregir.
      </p>

      <h2>6. Preparació d’aquesta declaració</h2>
      <p>
        Preparada el 12 de setembre de 2026 mitjançant una <strong>autoavaluació</strong> basada en
        la revisió del codi font del lloc. No hi ha hagut avaluació externa, ni proves amb usuaris, ni
        ús d’eines automàtiques de validació. Es revisarà cada vegada que el lloc canviï de manera
        substancial i, en tot cas, com a mínim un cop l’any.
      </p>
      <p>
        Referències: Directiva (UE) 2019/882; Llei 11/2023; Reial decret legislatiu 1/2013; Reial
        decret 1112/2018 i Directiva (UE) 2016/2102, a efectes de delimitar l’àmbit; norma EN 301 549;
        Pautes WCAG 2.2 del W3C.
      </p>
    </>
  )
}
