import type { Metadata } from 'next'

import { Avis, DocMeta, Resum, TableWrap } from '../parts'

export const metadata: Metadata = { title: 'Declaració d’accessibilitat' }

/**
 * Declaració d'accessibilitat.
 *
 * Passa d'esborrany a declaració real quan hi ha una avaluació de debò al
 * darrere. La que hi ha és una autoavaluació amb un comprovador automàtic
 * propi, i per això l'estat declarat és parcialment conforme: una eina
 * automàtica troba entre un quart i un terç de les barreres reals.
 */
export default function AccessibilityPage() {
  return (
    <>
      <h1>Declaració d’accessibilitat</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <Avis>
        <p>
          <strong>Estat: parcialment conforme amb les WCAG 2.2 nivell AA.</strong> L’avaluació és
          una <strong>autoavaluació</strong>: revisió manual del codi més un comprovador automàtic
          propi que és al repositori i que qualsevol pot tornar a executar. No hi ha hagut
          auditoria externa ni proves amb persones usuàries de tecnologies de suport, i mentre no
          n’hi hagi aquesta declaració no pot valer com a certificat de res.
        </p>
        <p>
          El que hi ha a continuació és l’estat real, com s’ha comprovat, què queda fora i amb quin
          calendari, i com informar-nos si trobes una barrera.
        </p>
      </Avis>

      <Resum>
        <p>
          <strong>En curt:</strong> aquesta declaració és <strong>voluntària</strong> —cap norma no
          l’exigeix a aquest lloc, i a l’apartat 2 expliquem per què—, i l’assumim igualment. El
          compromís és arribar a les WCAG 2.2 nivell AA i a la norma EN 301 549. L’estat actual és
          parcialment conforme: 78 pàgines analitzades sense cap incidència de les que una màquina
          sap detectar, i tres excepcions conegudes, totes lligades a que el disseny visual encara
          és provisional i a que no s’han fet proves amb persones.
        </p>
      </Resum>

      <h2>1. Compromís</h2>
      <p>
        New Spirit Studio S.L. es compromet que Identitat.digital sigui accessible d’acord amb les{' '}
        <strong>Pautes d’accessibilitat per al contingut web (WCAG) 2.2, nivell AA</strong>, i amb
        la norma europea harmonitzada <strong>EN 301 549</strong>, que és la que recull els
        requisits d’accessibilitat per als productes i serveis de tecnologies de la informació a la
        Unió Europea i que incorpora les WCAG per a la part web.
      </p>
      <p>
        Aquest compromís no és decoratiu: un lloc que publica informació d’interès públic sobre
        drets digitals i que no es pot llegir amb un lector de pantalla estaria excloent precisament
        les persones que més sovint queden fora de les decisions sobre tecnologia.
      </p>

      <h2>2. És obligatòria aquesta declaració? No. I l’assumim igualment</h2>
      <p>
        Cal ser precisos, perquè la resposta canvia segons la norma que es miri. Hem revisat les
        tres que podrien aplicar.
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
        passatgers, les comunicacions electròniques i l’accés als serveis de comunicació
        audiovisual.
      </p>
      <p>
        <strong>Primera raó:</strong> Identitat.digital no és cap d’aquests serveis. En concret, no
        és comerç electrònic, que la Directiva defineix com els serveis prestats a distància, per
        via electrònica,{' '}
        <em>amb vista a la celebració d’un contracte amb una persona consumidora</em>. Aquí no es
        contracta res, no es ven res, no s’obre cap compte i no es fa cap pagament. És una
        publicació informativa gratuïta i, com a tal, queda fora de l’àmbit d’aplicació.
      </p>
      <p>
        <strong>Segona raó, subsidiària:</strong> encara que un dia el projecte incorporés un servei
        de l’àmbit de la Directiva, l’article 4.5 exclou les microempreses que presten serveis de
        les obligacions d’accessibilitat, precisament per la desproporció de la càrrega. Ho diem com
        a argument de reforç, no com a excusa: no pensem acollir-nos-hi. New Spirit Studio S.L.
        compleix la definició de microempresa: no té cap persona treballadora per compte aliè —els
        dos administradors cotitzen al règim especial de treballadors autònoms— i el volum de negoci
        anual és molt per sota dels dos milions d’euros que marca el llindar.
      </p>

      <h3>2.3. Reial decret legislatiu 1/2013: obligació general, sense declaració</h3>
      <p>
        El text refós de la Llei general de drets de les persones amb discapacitat i de la seva
        inclusió social estableix un principi general de no-discriminació i d’accessibilitat
        universal que abasta els béns, productes i serveis a disposició del públic, i preveu el
        deure de fer ajustos raonables. Aquest principi <strong>sí que ens obliga</strong> com a
        criteri de conducta.
      </p>
      <p>
        El que aquesta norma no fa és imposar una conformitat tècnica concreta ni obligar a publicar
        cap declaració per a un lloc web privat: aquest desenvolupament reglamentari existeix per al
        sector públic al Reial decret 1112/2018. La conseqüència pràctica és que tenim un deure de
        no excloure ningú i de fer ajustos quan se’ns demanin, però no una obligació formal de
        declarar res.
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
        <strong>Parcialment conforme</strong> amb les WCAG 2.2 nivell AA, per les excepcions que
        s’enumeren a l’apartat 3.3. L’estat es basa en una <strong>autoavaluació</strong> feta amb
        una eina automàtica pròpia i una revisió manual del codi. No hi ha hagut avaluació externa
        ni proves amb persones usuàries de tecnologies de suport, i per tant el que es diu aquí no
        pot valer com a certificat de res.
      </p>

      <h3>3.1. Com s’ha avaluat</h3>
      <p>
        El repositori conté un comprovador propi, <code>scripts/check-accessibility.ts</code>, que
        es llança amb <code>pnpm check-a11y</code>. Rastreja totes les pàgines públiques del lloc,
        en llegeix l’HTML que arriba al navegador i hi busca les barreres que una màquina sap
        trobar: imatges sense text alternatiu, capçaleres de taula sense abast, taules sense títol,
        camps de formulari sense etiqueta, enllaços i botons sense nom accessible, identificadors
        repetits, salts de nivell entre capçaleres, tabulació forçada, marcs sense títol, absència
        d’enllaç de salt i enllaços que obren una pestanya nova sense avisar-ne. Cada comprovació
        porta escrit el criteri de les WCAG 2.2 que la justifica.
      </p>
      <p>
        <strong>Resultat de la darrera execució, el 12 de setembre de 2026: 78 pàgines
        analitzades, cap incidència.</strong> El resultat no s’ha d’estirar més enllà del que diu:
        no hi ha els errors que una eina automàtica sap detectar. Les eines automàtiques troben
        entre un quart i un terç de les barreres reals. Si l’ordre de lectura té sentit, si un text
        alternatiu diu el que ha de dir o si el focus es veu sobre el fons que hi ha només ho troba
        una persona mirant-s’ho, i això encara no s’ha fet amb mètode.
      </p>
      <p>
        El comprovador és al repositori perquè qualsevol persona el pugui llegir, hi trobi els
        forats i ens digui què no mira. Amb una eina de tercers que no podem ensenyar, la
        declaració seria més fàcil de signar i més difícil de comprovar.
      </p>

      <h3>3.2. El que ja funciona</h3>
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
          <strong>Enllaç de salt al contingut</strong> com a primer element focalitzable de cada
          pàgina, visible quan rep el focus, que porta el focus de debò a <code>&lt;main&gt;</code> i
          no només el desplaçament (criteri 2.4.1).
        </li>
        <li>
          <strong>Taules de dades amb semàntica completa.</strong> Les seixanta-cinc capçaleres del
          lloc declaren el seu abast i les quaranta-nou taules porten títol, ocult visualment perquè
          l’encapçalament visible ja hi és, però present per a qui navega taula per taula (criteri
          1.3.1).
        </li>
        <li>
          <strong>Taules amples dins de contenidors desplaçables</strong> que es poden desplaçar
          amb teclat i que s’anuncien com a regió amb nom, de manera que a 320 píxels o amb
          ampliació al 400 % la pàgina no es desborda en horitzontal (criteris 1.4.10 i 2.1.1).
        </li>
        <li>
          <strong>Indicador de focus propi</strong>, de tres píxels i amb separació, que no queda
          tapat per la vora de cap cel·la ni pel fons de cap element (criteris 2.4.7 i 2.4.11).
        </li>
        <li>
          <strong>Mida de lletra base relativa.</strong> El full d’estil no fixa cap mida en
          píxels a l’arrel, de manera que qui hagi apujat la mida per defecte del navegador ho nota
          (criteri 1.4.4).
        </li>
        <li>
          <strong>Indicació de la secció actual</strong> a la navegació, amb{' '}
          <code>aria-current</code> i no només amb un canvi de color (criteri 2.4.8).
        </li>
        <li>
          <strong>Avís als enllaços que obren una pestanya nova</strong>, llegible per a lectors de
          pantalla, a tots els enllaços externs del lloc.
        </li>
        <li>
          <strong>Respecte de la preferència de moviment reduït</strong> del sistema operatiu
          (criteri 2.3.3). Avui no hi ha cap animació; la regla hi és perquè el dia que n’hi hagi ja
          estigui coberta.
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
          4,5:1 que demana el criteri 1.4.3 per a text normal. Les vores dels distintius s’han
          enfosquit fins a 4,5:1 per complir el criteri 1.4.11, que exigeix 3:1 als elements no
          textuals.
        </li>
        <li>
          <strong>Cap element depèn només del color per transmetre informació.</strong> Les
          puntuacions es mostren sempre com a xifra, i el color només reforça. Els estats de les
          afirmacions es mostren com a text.
        </li>
        <li>
          <strong>Eines interactives amb etiquetatge complet.</strong> Els camps de les tres eines
          tenen etiqueta associada, els grups de caselles porten <code>fieldset</code> i{' '}
          <code>legend</code>, i els resultats que canvien sense recarregar s’anuncien amb una
          regió d’estat acotada, no recitant taules senceres (criteris 3.3.2, 4.1.2 i 4.1.3).
        </li>
        <li>
          <strong>Cap límit de temps, cap sessió que caduqui i cap CAPTCHA</strong> a la part
          pública del lloc.
        </li>
      </ul>

      <h3>3.3. Contingut no accessible</h3>
      <p>
        Aquestes són les excepcions per les quals la conformitat és parcial i no total. Les hem
        trobades nosaltres; n’hi haurà més, i per això hi ha l’apartat 5.
      </p>
      <TableWrap label="Excepcions de conformitat conegudes, amb el criteri WCAG 2.2 afectat i el motiu">
        <table>
          <caption className="visually-hidden">
            Excepcions de conformitat conegudes, amb el criteri WCAG 2.2 afectat i el motiu
          </caption>
          <thead>
            <tr>
              <th scope="col">Excepció</th>
              <th scope="col">Criteri WCAG 2.2</th>
              <th scope="col">Motiu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                No s’han fet proves amb lectors de pantalla reals ni amb persones usuàries de
                tecnologies de suport. L’avaluació és automàtica i de codi.
              </td>
              <td>Tot el conjunt</td>
              <td>Càrrega desproporcionada en aquesta fase; previst a l’apartat 4</td>
            </tr>
            <tr>
              <td>
                El disseny visual és provisional. L’espaiat, la jerarquia tipogràfica i la
                llegibilitat no s’han treballat, i això afecta criteris que depenen de la
                presentació.
              </td>
              <td>1.4.8 (AAA), 1.4.12 Espaiat del text (AA)</td>
              <td>El lloc és en fase de validació de contingut</td>
            </tr>
            <tr>
              <td>
                No hi ha tema fosc. Qui necessiti contrast invertit depèn del que li ofereixi el
                navegador o el sistema.
              </td>
              <td>Bona pràctica; no és un criteri de nivell AA</td>
              <td>Pendent del disseny definitiu</td>
            </tr>
            <tr>
              <td>
                El panell d’administració a <code>/admin</code> és programari de tercers i el seu
                nivell d’accessibilitat no depèn de nosaltres. No l’hem avaluat i el comprovador
                l’exclou expressament.
              </td>
              <td>Tot el conjunt</td>
              <td>Contingut de tercers; afecta només l’equip editorial</td>
            </tr>
            <tr>
              <td>
                Els documents de tercers als quals enllacem —polítiques, resolucions, articles— són
                sovint PDF sense etiquetar.
              </td>
              <td>Contingut de tercers, art. 3.2 de referència habitual</td>
              <td>Fora del nostre control; vegeu l’apartat 3.4</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>3.4. Contingut de tercers</h3>
      <p>
        Els documents als quals enllacem —polítiques de privadesa, resolucions d’autoritats,
        articles— són de tercers i la seva accessibilitat no depèn de nosaltres. Molts d’ells són
        PDF sense etiquetar. La mesura compensatòria és estructural i no depèn de la bona voluntat:
        cada font del catàleg porta un resum en català escrit per nosaltres, de manera que el
        contingut essencial es pugui entendre sense haver d’obrir el document original.
      </p>

      <h2>4. Calendari</h2>
      <p>
        Les correccions que no depenien del disseny ja són fetes i són a l’apartat 3.2. El que
        queda, amb dates:
      </p>
      <ol>
        <li>
          <strong>Comprovació automàtica a cada canvi.</strong> Feta. <code>pnpm check-a11y</code> és
          al repositori i s’executa contra el lloc publicat; una pàgina nova que introdueixi un
          error de taula, d’etiqueta o d’enllaç el fa aparèixer immediatament.
        </li>
        <li>
          <strong>Proves manuals només amb teclat i amb lector de pantalla</strong> (VoiceOver i
          NVDA), pàgina per pàgina, amb acta escrita del que falli.{' '}
          <strong>Abans del 31 de desembre de 2026.</strong>
        </li>
        <li>
          <strong>Avaluació sistemàtica amb la metodologia WCAG-EM</strong>, amb mostra
          representativa i informe publicat en aquesta mateixa pàgina.{' '}
          <strong>Durant el primer trimestre del 2027</strong>, un cop el disseny definitiu estigui
          tancat.
        </li>
        <li>
          <strong>Proves amb persones usuàries reals de tecnologies de suport</strong>, si trobem la
          manera de fer-les bé i de remunerar-les. Dir que es faran «si es pot» seria un compromís
          buit: el compromís concret és buscar-hi pressupost i dir públicament si no se n’ha
          trobat.
        </li>
        <li>
          <strong>Actualització d’aquesta declaració</strong> amb l’estat de conformitat que
          resulti de l’avaluació, i no el que ens agradaria que fos.
        </li>
      </ol>
      <p>
        Si alguna d’aquestes dates es passa, el que canviarà és la data, no el que diu aquesta
        pàgina. Un calendari que s’esborra quan no es compleix no és un calendari.
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
        <strong>El que ens comprometem a fer:</strong> acusar-ne recepció en 5 dies hàbils, dir-te
        en 15 dies hàbils si ho podem corregir i quan, i fer-ho. Si una correcció requereix el
        disseny definitiu i no la podem avançar, t’ho direm clarament i et facilitarem el contingut
        en un format alternatiu accessible mentrestant. Això últim és el que la llei anomena un
        ajust raonable, i hi estem obligats amb declaració o sense.
      </p>

      <h3>Si no estàs satisfet amb la resposta</h3>
      <p>
        Com que aquest lloc no és del sector públic, no hi ha el procediment de reclamació davant la
        unitat responsable d’accessibilitat que preveu el Reial decret 1112/2018, i no seria honest
        derivar-te a un canal que no et pot atendre.
      </p>
      <p>
        El que sí que existeix: pots dirigir-te a l’Oficina d’Atenció a la Discapacitat, a les
        entitats del moviment associatiu de la discapacitat, o exercir les accions que preveu el
        text refós de la Llei general de drets de les persones amb discapacitat davant la
        jurisdicció ordinària. I, en qualsevol cas, insistir-nos. La barrera continua sent nostra i
        la volem corregir.
      </p>

      <h2>6. Preparació d’aquesta declaració</h2>
      <p>
        Preparada el 12 de setembre de 2026 mitjançant una <strong>autoavaluació</strong> que
        combina dues coses: una revisió manual del codi font i l’execució del comprovador automàtic{' '}
        <code>scripts/check-accessibility.ts</code> contra el lloc publicat, descrit a l’apartat
        3.1. No hi ha hagut avaluació externa ni proves amb persones usuàries de tecnologies de
        suport.
      </p>
      <p>
        Tant el comprovador com el codi del lloc són públics al{' '}
        <a
          href="https://github.com/newspiritstudio/identitatdigital"
          rel="noopener noreferrer"
          target="_blank"
        >
          repositori del projecte
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>
        , de manera que qualsevol persona pot refer l’avaluació i comprovar si el que diem aquí és
        cert. Es revisarà cada vegada que el lloc canviï de manera substancial i, en tot cas, com a
        mínim un cop l’any.
      </p>
      <p className="meta">
        Referències: Directiva (UE) 2019/882; Llei 11/2023; Reial decret legislatiu 1/2013; Reial
        decret 1112/2018 i Directiva (UE) 2016/2102, a efectes de delimitar l’àmbit; norma EN 301
        549; Pautes WCAG 2.2 del W3C.
      </p>
    </>
  )
}
