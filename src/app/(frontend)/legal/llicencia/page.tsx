import Link from 'next/link'
import type { Metadata } from 'next'

import { Avis, DocMeta, Resum, TableWrap } from '../parts'

export const metadata: Metadata = { title: 'Llicència del contingut' }

/**
 * Llicència del contingut i drets de tercers.
 *
 * És el document més important del paquet legal, perquè és el que decideix si
 * el projecte compleix el seu objectiu: que la informació circuli. Una base de
 * coneixement pública amb tots els drets reservats seria una contradicció.
 */
export default function LicensePage() {
  return (
    <>
      <h1>Llicència del contingut i drets de tercers</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Aquest projecte existeix perquè la informació sobre què fan les aplicacions amb les dades de
        les persones arribi al màxim de gent possible. Per això el contingut és obert. Aquest
        document diu exactament què pots fer amb ell, amb quines condicions, i quins materials
        queden fora de la llicència perquè no són nostres per donar-los.
      </p>

      <Resum>
        <p>
          <strong>La llicència, en curt:</strong>
        </p>
        <ul>
          <li>
            El contingut editorial i la base de dades són{' '}
            <strong>Creative Commons Reconeixement-CompartirIgual 4.0 Internacional</strong> (CC
            BY-SA 4.0).
          </li>
          <li>
            Pots copiar-lo, adaptar-lo i republicar-lo, també amb finalitat comercial, si cites
            l’origen i comparteixes les teves adaptacions amb la mateixa llicència.
          </li>
          <li>
            <strong>Els mitjans de comunicació tenen un permís addicional</strong> per reproduir
            fitxes, taules i puntuacions amb atribució sense que la clàusula de compartir igual els
            afecti l’article sencer. Ho expliquem a l’apartat 6.
          </li>
          <li>
            <strong>Queden fora</strong>: els logotips i les marques de les aplicacions, les
            citacions literals de polítiques alienes, les dades de Have I Been Pwned i la marca
            Identitat.digital.
          </li>
          <li>El codi font del lloc té llicència MIT, que és una cosa diferent.</li>
        </ul>
      </Resum>

      <h2>1. La llicència</h2>
      <p>
        Llevat del que s’exclou expressament a l’apartat 5, tot el contingut d’Identitat.digital es
        publica sota la llicència{' '}
        <a
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.ca"
          target="_blank"
          rel="noreferrer"
        >
          Creative Commons Reconeixement-CompartirIgual 4.0 Internacional
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>
        .
      </p>
      <p>Això vol dir que qualsevol persona pot, sense demanar-nos permís:</p>
      <ul>
        <li>
          <strong>Compartir</strong>: copiar i redistribuir el material en qualsevol mitjà i format.
        </li>
        <li>
          <strong>Adaptar</strong>: remesclar, transformar i construir a partir del material, per a
          qualsevol finalitat, <strong>inclosa la comercial</strong>.
        </li>
      </ul>
      <p>Amb dues condicions:</p>
      <ul>
        <li>
          <strong>Reconeixement.</strong> Cal citar l’autoria, indicar l’enllaç a la llicència i
          assenyalar si s’han fet canvis. L’atribució no pot suggerir que aprovem el teu ús.
        </li>
        <li>
          <strong>Compartir igual.</strong> Si transformes el material o hi construeixes a sobre,
          has de distribuir la teva obra derivada amb la mateixa llicència o amb una de compatible.
        </li>
      </ul>
      <p>
        I una prohibició: no pots aplicar mesures tecnològiques que restringeixin legalment a altres
        fer el que la llicència permet.
      </p>

      <h3>Com atribuir</h3>
      <p>
        Un exemple d’atribució correcta, que pots copiar tal qual i adaptar a la peça que
        reutilitzis:
      </p>
      <p className="meta">
        «Font: Identitat.digital, de New Spirit Studio S.L. Fitxa consultada el [data]. Disponible
        sota llicència CC BY-SA 4.0.» amb un enllaç a la fitxa original i un altre a la llicència.
      </p>

      <h2>2. Què cobreix exactament la llicència</h2>
      <p>
        Aquesta és la part que sol quedar vaga a les llicències de les bases de coneixement, i aquí
        no ho volem deixar vagament. La llicència cobreix:
      </p>
      <TableWrap label="Material del lloc, què és cadascun i quin dret s’hi llicencia">
        <table>
          <caption className="visually-hidden">
            Material del lloc, què és cadascun i quin dret s’hi llicencia
          </caption>
          <thead>
            <tr>
              <th scope="col">Material</th>
              <th scope="col">Què és</th>
              <th scope="col">Dret que s’hi llicencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Les fitxes redactades</td>
              <td>
                El text de cada aplicació: els detalls de cada afirmació, les notes, els resums i
                les valoracions escrites
              </td>
              <td>Dret d’autor sobre obra literària, article 10 del text refós de la LPI</td>
            </tr>
            <tr>
              <td>Les anàlisis i els incidents</td>
              <td>
                Les fitxes de sancions, resolucions i incidents, redactades i contextualitzades
              </td>
              <td>Dret d’autor sobre obra literària</td>
            </tr>
            <tr>
              <td>La metodologia de puntuació</td>
              <td>
                Els principis, les dimensions, els 38 indicadors, els pesos, les fórmules i la
                política de tractament del que és desconegut
              </td>
              <td>
                Dret d’autor sobre el text i sobre l’estructura. La idea de puntuar no és
                apropiable; la manera concreta d’expressar-la, sí
              </td>
            </tr>
            <tr>
              <td>Les puntuacions calculades</td>
              <td>
                Les quatre xifres de cada fitxa i el seu desglossament, i les instantànies
                històriques
              </td>
              <td>
                Resultat de l’aplicació d’un criteri editorial propi. Es llicencien com a part del
                conjunt
              </td>
            </tr>
            <tr>
              <td>L’estructura de la base de dades</td>
              <td>
                El model de col·leccions, el vocabulari de tipus de dada i de finalitats, i el patró
                d’afirmació amb evidència
              </td>
              <td>
                Dret d’autor sobre col·leccions i bases de dades originals per la selecció o la
                disposició dels continguts, article 12 del text refós de la LPI
              </td>
            </tr>
            <tr>
              <td>La selecció i la disposició del conjunt</td>
              <td>
                Quines aplicacions entren al directori, com es relacionen amb empreses i grups, i
                com s’ordena tot plegat
              </td>
              <td>
                Dret d’autor sobre la base de dades i{' '}
                <strong>dret sui generis del fabricant de bases de dades</strong>
              </td>
            </tr>
            <tr>
              <td>El catàleg de fonts</td>
              <td>
                Les 101 fitxes de fonts amb el seu resum en català, la seva fiabilitat i la data de
                consulta
              </td>
              <td>
                Dret d’autor sobre els resums i dret sui generis sobre el catàleg com a conjunt
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h3>El dret sui generis, i per què la versió 4.0 és imprescindible</h3>
      <p>
        Aquest punt mereix una explicació pròpia, perquè és on la majoria de projectes es deixen un
        forat.
      </p>
      <p>
        A més del dret d’autor, la Directiva 96/9/CE i els articles 133 i següents del text refós de
        la Llei de propietat intel·lectual reconeixen un <strong>dret sui generis</strong> a qui fa
        una base de dades amb una inversió substancial en obtenir, verificar o presentar-ne el
        contingut. Aquest dret no protegeix les dades una per una: protegeix el conjunt, i permet
        impedir l’extracció o la reutilització de la totalitat o d’una part substancial.
      </p>
      <p>
        Identitat.digital encaixa exactament en el supòsit: la inversió no és en generar dades
        noves, sinó en <em>obtenir-les i verificar-les</em>, que és precisament el que la Directiva
        protegeix. Localitzar una política de privadesa, llegir-la, extreure’n l’afirmació
        rellevant, contrastar-la amb una resolució d’una autoritat de control, datar-la i
        enllaçar-la, cent vegades per fitxa, és una inversió substancial en verificació.
      </p>
      <p>
        Aquest dret existeix encara que no el reclamem, i dura quinze anys des de la finalització de
        la base de dades, renovables amb cada modificació substancial. Per tant, si volem que la
        gent pugui reutilitzar el conjunt,{' '}
        <strong>no n’hi ha prou de llicenciar el dret d’autor</strong>: cal llicenciar també el dret
        sui generis. Si no, algú podria copiar legítimament el text d’una fitxa i, en canvi, tenir
        problemes per descarregar-se el conjunt sencer, que és justament el que volem que pugui fer
        un mitjà, una universitat o una altra organització.
      </p>
      <Avis>
        <p>
          <strong>Per això la llicència ha de ser 4.0 i no 3.0.</strong> Les llicències Creative
          Commons 4.0 llicencien expressament els drets sui generis de bases de dades en la seva
          secció 4, i estableixen que quan s’exerceixen només aquests drets sobre la totalitat o una
          part substancial del contingut, l’usuari queda tractat com si fos una adaptació, amb les
          obligacions corresponents. Les llicències 3.0 no ho feien: el dret sui generis hi quedava
          en un territori ambigu, gestionat de manera diferent segons la versió adaptada a cada
          jurisdicció. Publicar aquest projecte amb una 3.0 deixaria sense llicenciar precisament el
          dret més rellevant per a una base de dades.
        </p>
      </Avis>

      <h2>3. Per què CC BY-SA i no una altra</h2>
      <p>
        La decisió estava entre tres opcions reals. Aquestes són, amb el que s’hi guanya i el que
        s’hi perd.
      </p>

      <h3>Reconeixement 4.0 (CC BY)</h3>
      <p>
        <strong>A favor:</strong> és la que menys fricció genera. Qualsevol pot agafar el contingut
        i fer-ne el que vulgui amb només citar-nos. És la que fa circular més ràpid la informació,
        que és l’objectiu del projecte.
      </p>
      <p>
        <strong>En contra:</strong> permet que algú es baixi les vint-i-cinc fitxes, les vint-i-nou
        empreses i les cent una fonts, en faci un producte tancat, hi posi publicitat o un mur de
        pagament, i no torni res. No és un problema teòric: una base de dades verificada d’aquesta
        mena és exactament el material que una empresa d’extracció de dades voldria incorporar sense
        contribuir-hi. El projecte hi hauria posat la inversió de verificació i perdria el control
        sobre si el resultat continua sent públic.
      </p>

      <h3>Reconeixement-NoComercial (CC BY-NC)</h3>
      <p>
        <strong>Descartada, i per dues raons independents.</strong>
      </p>
      <p>
        La primera és pràctica: <strong>deixaria fora els mitjans de comunicació</strong>. Gairebé
        tots els diaris són empreses comercials. Una llicència no comercial els obligaria a
        demanar-nos permís cada vegada que volguessin reproduir una taula, que és exactament el
        contrari del que volem. També deixaria fora la Viquipèdia, que és CC BY-SA i no pot
        incorporar material no comercial.
      </p>
      <p>
        La segona és de compatibilitat. El catàleg de filtracions de{' '}
        <strong>Have I Been Pwned</strong> que el projecte incorpora té llicència Creative Commons
        Reconeixement 4.0. Una llicència BY permet redistribuir i adaptar sense restringir
        addicionalment el que la llicència autoritza. Si presentéssim un conjunt que incorpora
        aquell material sota una etiqueta «no comercial», estaríem comunicant a qui el rep una
        restricció que sobre aquell material no existeix, i li faríem impossible saber quina part
        pot fer servir comercialment i quina no. Amb BY-SA això no passa: les condicions de BY-SA
        són més exigents que les de BY, però no n’anul·len cap llibertat —la comercial hi continua
        permesa—, de manera que incorporar material BY 4.0 en un conjunt BY-SA 4.0 és una operació
        neta, sempre que se’n mantingui l’atribució, que és el que fem.
      </p>
      <p>
        A això s’hi afegeix que «no comercial» no té una definició clara. Un professor que cobra?
        Una associació que ven samarretes? Un bloc amb un banner? La incertesa desanima justament
        els usos que volem.
      </p>

      <h3>Reconeixement-CompartirIgual 4.0 (CC BY-SA) — la triada</h3>
      <p>
        <strong>A favor:</strong>
      </p>
      <ul>
        <li>
          <strong>Permet l’ús comercial</strong>, incloent-hi els mitjans, les empreses i les
          administracions. No tanca cap porta per motius econòmics.
        </li>
        <li>
          <strong>Garanteix reciprocitat.</strong> Qui construeixi a sobre d’aquest treball ha de
          deixar el resultat igual d’obert. Una base de coneixement verificada amb esforç no es pot
          convertir en el producte tancat d’altri.
        </li>
        <li>
          <strong>És compatible amb Have I Been Pwned</strong>, que és CC BY 4.0.
        </li>
        <li>
          <strong>És compatible amb la Viquipèdia</strong>, que fa servir CC BY-SA 4.0. Això és un
          canal de distribució enorme per a aquest tipus de contingut, i tancar-lo seria una
          equivocació estratègica.
        </li>
        <li>
          <strong>Llicencia el dret sui generis</strong>, com totes les 4.0, que és la peça crítica
          per a un projecte que és, sobretot, una base de dades.
        </li>
      </ul>
      <p>
        <strong>En contra, i cal dir-ho:</strong> la clàusula de compartir igual genera fricció. Un
        mitjà que vulgui reproduir una de les nostres taules pot arribar a témer que l’obligació
        s’estengui al seu article sencer. Tècnicament aquesta por sol ser infundada —la clàusula
        només afecta les obres <em>derivades</em>, no la mera inclusió d’un material al costat d’un
        altre dins d’una col·lecció, i el dret de citació i el dret d’informació de premsa operen al
        marge de qualsevol llicència—, però la por és real i frena usos que volem que passin.
      </p>
      <p>
        Per això no ens hi quedem: hi afegim un permís addicional, explícit, que elimina aquesta
        fricció exactament on es produeix. És l’apartat 6.
      </p>

      <h2>4. La llicència del codi és una altra cosa</h2>
      <p>
        El codi font del lloc —l’aplicació, el motor de puntuació, les col·leccions del gestor de
        continguts, els scripts— es publica amb <strong>llicència MIT</strong>. És una llicència
        permissiva pensada per a programari, i no s’ha de confondre amb la del contingut.
      </p>
      <p>
        En resum: el <em>programa</em> és MIT, el <em>que hi ha escrit a dins</em> és CC BY-SA 4.0.
        Qualsevol pot muntar un lloc com aquest amb el nostre codi; qui vulgui publicar les nostres
        fitxes ha de complir la clàusula de compartir igual.
      </p>

      <h2>5. Avís d’exclusió: què no cobreix aquesta llicència</h2>
      <Avis>
        <p>
          <strong>
            La llicència Creative Commons només abasta els drets que són nostres. Els materials
            següents pertanyen a tercers i nosaltres no els podem sublicenciar. Si els vols fer
            servir, has de comprovar-ne les condicions pel teu compte.
          </strong>
        </p>
      </Avis>

      <h3>5.1. Logotips, icones i marques de les aplicacions i empreses analitzades</h3>
      <p>
        Els noms, els logotips, les icones i qualsevol altre signe distintiu de les aplicacions i de
        les empreses que documentem són <strong>marques registrades dels seus titulars</strong>. No
        els llicenciem, perquè no són nostres.
      </p>
      <p>
        Les icones s’obtenen de l’API pública de consulta de l’App Store d’Apple a partir de
        l’identificador de paquet de cada servei, i cada fitxer desa a la biblioteca de quina marca
        és, de quina fitxa de la botiga s’ha extret i quin dia. Es fan servir amb una finalitat
        exclusivament identificativa: assenyalar de quin producte parla cada fitxa. Aquest ús no
        implica cap relació, autorització, patrocini ni aprovació per part dels seus titulars.
      </p>
      <p>
        Cal recordar, a més, que les llicències Creative Commons diuen expressament que no
        concedeixen cap dret sobre marques ni sobre la imatge o el nom de ningú. Encara que el
        logotip fos nostre, la llicència no el transmetria.
      </p>
      <p className="meta">
        Si reutilitzes una fitxa nostra, pots reproduir-ne el text sota CC BY-SA 4.0. Per
        reproduir-ne el logotip, has de tenir una base pròpia per fer-ho: l’ús identificatiu que es
        descriu a l’apartat 7, el dret de citació, o el permís del titular.
      </p>

      <h3>5.2. Citacions literals de polítiques de privadesa i de condicions</h3>
      <p>
        Quan una fitxa reprodueix una frase exacta d’una política de privadesa, d’unes condicions
        d’ús o d’una resolució administrativa, aquell fragment continua sent propietat del seu
        autor.
      </p>
      <p>
        El publiquem a l’empara del <strong>dret de citació</strong>, article 32.1 del text refós de
        la Llei de propietat intel·lectual, i de l’article 5.3.d de la Directiva 2001/29/CE. Les
        condicions d’aquest dret es compleixen sempre a cada fitxa: es tracta d’obres ja divulgades,
        la inclusió es fa a títol de citació per a l’anàlisi i el comentari crític, l’extensió es
        limita al que justifica la finalitat, i s’indica sempre la font i l’autoria.
      </p>
      <p>
        Conseqüència pràctica: aquests fragments no els sublicenciem. Si els reutilitzes, ho fas
        sota el teu propi dret de citació, i has de complir-ne les mateixes condicions.
      </p>

      <h3>5.3. El catàleg de filtracions de Have I Been Pwned</h3>
      <p>
        Les dades de filtracions que incorpora el projecte provenen del catàleg públic de{' '}
        <a href="https://haveibeenpwned.com" target="_blank" rel="noreferrer">
          Have I Been Pwned
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>
        , que es publica sota llicència{' '}
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">
          Creative Commons Reconeixement 4.0 Internacional
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>{' '}
        i que exigeix atribució i enllaç a haveibeenpwned.com.
      </p>
      <p>
        Aquest material conserva la seva pròpia llicència: no el sublicenciem sota CC BY-SA, perquè
        no cal i perquè no ens correspon. El que sí que és nostre, i sí que és CC BY-SA 4.0, és el
        lligam editorial que hi hem afegit —a quina empresa i a quines aplicacions del nostre model
        correspon cada filtració i quins tipus de dada del nostre vocabulari hi van quedar exposats.
      </p>
      <p className="meta">
        Atribució: dades de filtracions cortesia de Have I Been Pwned —{' '}
        <a href="https://haveibeenpwned.com" target="_blank" rel="noreferrer">
          haveibeenpwned.com
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>
        , sota llicència CC BY 4.0.
      </p>

      <h3>5.4. La llista de paraules en català de les frases de pas</h3>
      <p>
        El generador de frases de pas fa servir una llista de 2.048 paraules catalanes derivada del{' '}
        <a href="https://github.com/Softcatala/catalan-dict-tools" target="_blank" rel="noreferrer">
          diccionari català de Softcatalà
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>{' '}
        (projecte <em>catalan-dict-tools</em>), que es distribueix amb{' '}
        <strong>llicència dual GNU GPL v2 o posterior i GNU LGPL v2.1 o posterior</strong>. Del
        mateix dipòsit surten el diccionari arrel de noms i la taula de freqüències d’ús, que
        serveixen per descartar tecnicismes i per ordenar els candidats, i que tenen la mateixa
        llicència.
      </p>
      <p>
        Com que és una llicència de programari i no una llicència de contingut, aquí no serveix de
        res la compatibilitat entre llicències Creative Commons. La solució és la mateixa que amb
        Have I Been Pwned, i està feta:
      </p>
      <ul>
        <li>
          <strong>La llista viu en un fitxer propi</strong>,{' '}
          <code>src/lib/passwords/wordlist.ca.ts</code>, separat de la resta del codi i del
          contingut. No es barreja amb res.
        </li>
        <li>
          <strong>
            D’entre les dues llicències de la font, exercim l’opció de la LGPL v2.1 o posterior
          </strong>
          , que és la menys restrictiva de les dues i la que la mateixa Softcatalà ofereix. Aquest
          fitxer, doncs, es distribueix sota LGPL v2.1 o posterior, i no sota la llicència MIT de la
          resta del codi ni sota la CC BY-SA 4.0 del contingut.
        </li>
        <li>
          <strong>El fitxer porta escrita la seva procedència</strong> a la constant{' '}
          <code>WORDLIST_META</code>: l’adreça exacta de la font, la llicència i la data de
          generació.
        </li>
        <li>
          <strong>La forma editable és pública.</strong> El fitxer és generat i el generador,{' '}
          <code>scripts/build-wordlist.ts</code>, és al mateix repositori públic, amb tots els
          criteris de filtratge explicats un per un. Qui vulgui refer la llista, modificar-la o
          substituir-la ho pot fer, que és exactament el que la LGPL exigeix que sigui possible.
        </li>
        <li>
          <strong>Queda expressament exclosa</strong> de la llicència CC BY-SA 4.0 d’aquesta pàgina.
        </li>
      </ul>
      <p>
        Aquesta separació no afecta la resta del projecte. La llista és un fitxer de dades, no un
        component enllaçat que arrossegui condicions cap enfora, i les obligacions de la LGPL es
        compleixen amb la publicació del fitxer, de la seva llicència i del generador que el
        produeix.
      </p>
      <p>
        Val a dir que hi ha un argument de fons que hi juga a favor: les paraules soltes d’una
        llengua no són obra de ningú i no es poden apropiar. El que podria estar protegit és{' '}
        <em>la selecció concreta</em> del diccionari —per dret sui generis del seu fabricant, si hi
        ha hagut inversió substancial— i el programari que l’acompanya. Com que el nostre ús
        consisteix a derivar-ne un subconjunt, el camí prudent és respectar la llicència declarada i
        atribuir-la sempre, que és el que fem, i no discutir si calia.
      </p>
      <p className="meta">
        Atribució: llista derivada del diccionari català de Softcatalà, projecte{' '}
        <a href="https://github.com/Softcatala/catalan-dict-tools" target="_blank" rel="noreferrer">
          catalan-dict-tools
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>
        , sota GNU LGPL v2.1 o posterior.
      </p>

      <h3>5.5. La marca Identitat.digital i la identitat visual del projecte</h3>
      <p>
        El nom «Identitat.digital», el nom «New Spirit Studio», els seus logotips i la identitat
        visual del lloc queden fora de la llicència. Pots citar-los per referir-te al projecte —és
        precisament el que t’exigim en atribuir-nos—, però no pots fer-los servir per identificar
        els teus propis productes o serveis, ni de manera que suggereixi que el que fas ve de
        nosaltres o que l’aprovem.
      </p>

      <h3>5.6. Contingut de tercers enllaçat</h3>
      <p>
        Els llocs que enllacem tenen les seves pròpies condicions. Enllaçar-los no ens en dona cap
        dret ni te’n dona a tu.
      </p>

      <h2>6. Permís addicional per a mitjans de comunicació i ús periodístic</h2>
      <p>
        Com a titulars dels drets, i en paral·lel a la llicència CC BY-SA 4.0, concedim aquest
        permís addicional. Qui vulgui pot acollir-s’hi en comptes d’acollir-se a la clàusula de
        compartir igual:
      </p>
      <Avis>
        <p>
          <strong>
            Els mitjans de comunicació, professionals i no professionals, poden reproduir fitxes,
            taules, puntuacions i gràfics d’Identitat.digital dins de peces informatives, sense que
            això els obligui a publicar la peça sencera sota CC BY-SA.
          </strong>
        </p>
        <p>Condicions, i són totes:</p>
        <ul>
          <li>Que se citi Identitat.digital com a font, amb enllaç a la fitxa original.</li>
          <li>
            Que s’indiqui la data de consulta, perquè el contingut canvia quan canvien les
            polítiques de les empreses.
          </li>
          <li>
            Que les dades no es modifiquin ni es descontextualitzin. Es poden retallar i maquetar;
            no es poden alterar les xifres, els estats ni les afirmacions.
          </li>
          <li>Que no se suggereixi cap relació ni aprovació per part nostra.</li>
        </ul>
        <p>
          Aquest permís no cobreix la reproducció substancial del conjunt de la base de dades, que
          continua regida per la CC BY-SA 4.0, ni els materials exclosos de l’apartat 5.
        </p>
      </Avis>
      <p>
        Aquest permís no retalla res: qui prefereixi la llicència CC BY-SA 4.0 la té igualment
        disponible, amb totes les seves llibertats intactes. Només afegeix una via per a l’ús que
        més volem afavorir i que és, alhora, el que la clàusula de compartir igual més podria
        espantar.
      </p>
      <p className="meta">
        Al marge de tot això, el dret de citació de l’article 32 i el dret d’informació de premsa
        existeixen tant si concedim permisos com si no. Ningú no necessita la nostra autorització
        per citar-nos en una notícia.
      </p>

      <h2>7. Ús de marques alienes: per què és legítim</h2>
      <p>
        Aquest lloc fa servir noms i logotips de productes que no són seus. Ho fa constantment, i és
        imprescindible: no hi ha manera d’explicar què fa WhatsApp amb les teves dades sense
        anomenar-lo WhatsApp.
      </p>
      <p>Aquest ús no infringeix cap marca. El fonament és doble i coincident:</p>
      <ul>
        <li>
          <strong>Article 37 de la Llei 17/2001, de marques</strong>, per a les marques espanyoles.
        </li>
        <li>
          <strong>Article 14 del Reglament (UE) 2017/1001</strong>, per a les marques de la Unió
          Europea.
        </li>
      </ul>
      <p>
        Tots dos preceptes estableixen el mateix: el titular d’una marca{' '}
        <strong>no pot prohibir</strong> a un tercer l’ús del signe quan es fa per{' '}
        <strong>identificar o referir-se a productes o serveis com a propis del titular</strong>,
        especialment quan és necessari per indicar la destinació d’un producte o d’un servei. És el
        que s’anomena ús referencial o nominatiu, i és exactament el que fem: assenyalar de quin
        producte parlem.
      </p>
      <p>
        La condició que hi posen tots dos articles és que l’ús sigui conforme a les pràctiques
        lleials en matèria industrial o comercial. El compliment, punt per punt:
      </p>
      <TableWrap label="Exigències legals de l’ús de marques alienes i com les compleix el lloc">
        <table>
          <caption className="visually-hidden">
            Exigències legals de l’ús de marques alienes i com les compleix el lloc
          </caption>
          <thead>
            <tr>
              <th scope="col">Exigència</th>
              <th scope="col">Com la complim</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No suggerir cap vincle comercial amb el titular</td>
              <td>
                Ho diem expressament a l’avís legal, a aquesta pàgina i a l’encapçalament de cada
                fitxa. El lloc no accepta publicitat ni patrocini de cap empresa documentada.
              </td>
            </tr>
            <tr>
              <td>No aprofitar-se indegudament del renom de la marca</td>
              <td>
                Les icones apareixen en miniatura, al costat del nom del servei, amb la sola funció
                d’ajudar a reconèixer de quina aplicació es parla. No s’utilitzen com a reclam, ni a
                la pàgina d’inici com a element promocional, ni per identificar cap producte nostre.
              </td>
            </tr>
            <tr>
              <td>No desacreditar ni denigrar la marca</td>
              <td>
                Cada afirmació negativa va acompanyada del seu estat, el seu nivell d’evidència i
                les seves fonts. No hi ha judicis de valor sense base documental, ni
                desqualificacions personals, ni llenguatge vexatori. El que és desconegut es marca
                com a desconegut i no penalitza la puntuació.
              </td>
            </tr>
            <tr>
              <td>No fer-ne un ús a títol de marca pròpia</td>
              <td>
                No venem res sota aquests signes, no els incorporem a la nostra identitat visual i
                no els fem servir per distingir cap servei nostre.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        A tot això s’hi afegeix que l’activitat del lloc és informativa i crítica, i que la
        llibertat d’informació de l’article 20.1.d de la Constitució empara parlar de productes que
        arriben a milions de persones. El règim de la comparació publicitària de la Llei 3/1991 de
        competència deslleial ni tan sols hi entra, perquè no competim amb aquestes empreses ni
        oferim cap producte alternatiu; però, com que el comparador del lloc posa serveis un al
        costat de l’altre, complim igualment els seus requisits: comparem només serveis que
        cobreixen la mateixa necessitat, amb característiques objectives, verificables i
        representatives, i idèntiques per a tots.
      </p>

      <h2>8. Si detectes un problema de drets</h2>
      <p>
        Si ets titular d’un dret i consideres que aquest lloc el vulnera, escriu a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a> indicant el material
        concret, la pàgina on és i la teva titularitat. Ho revisarem amb diligència i, si tens raó,
        ho retirarem o ho corregirem. Si no hi estem d’acord, t’explicarem per què, amb el raonament
        a la vista. No retirem contingut verificat només perquè algú ho demani, però tampoc no
        mantenim res que no puguem sostenir.
      </p>
      <p>
        Si el que vols és rebatre una afirmació sobre la teva empresa, el camí és la{' '}
        <Link href="/legal/politica-editorial">política editorial</Link>, que preveu un dret de
        rèplica amb terminis concrets.
      </p>

      <h2>9. Referències</h2>
      <ul>
        <li>
          Reial decret legislatiu 1/1996, text refós de la Llei de propietat intel·lectual: articles
          10, 12, 32 i 133 a 137.
        </li>
        <li>Directiva 96/9/CE sobre la protecció jurídica de les bases de dades.</li>
        <li>Directiva 2001/29/CE, article 5.3.d, sobre el dret de citació.</li>
        <li>Llei 17/2001, de marques, article 37.</li>
        <li>Reglament (UE) 2017/1001, sobre la marca de la Unió Europea, article 14.</li>
        <li>Llei 3/1991, de competència deslleial, articles 9 i 10.</li>
        <li>
          Text legal de la llicència Creative Commons Reconeixement-CompartirIgual 4.0
          Internacional, secció 4, sobre drets sui generis de bases de dades.
        </li>
      </ul>
    </>
  )
}
