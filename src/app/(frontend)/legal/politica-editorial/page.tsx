import Link from 'next/link'
import type { Metadata } from 'next'

import { Avis, DocMeta, Resum, TableWrap } from '../parts'

export const metadata: Metadata = { title: 'Política editorial' }

/**
 * Política editorial, correccions i dret de rèplica.
 *
 * El lloc publica puntuacions i afirmacions sobre empreses identificades pel
 * seu nom. La legitimitat d'això no ve de tenir raó: ve de poder demostrar que
 * s'ha actuat amb diligència i d'oferir a l'altra part una manera real de
 * respondre. Aquest document és aquesta manera.
 */
export default function EditorialPolicyPage() {
  return (
    <>
      <h1>Política editorial</h1>
      <DocMeta version="1.0" updated="12 de setembre de 2026" />

      <p className="lede">
        Aquest lloc publica afirmacions sobre el comportament d’empreses identificades pel seu nom,
        i els posa una nota. Això és una responsabilitat seriosa. Aquest document explica amb quin
        mètode ho fem, com corregim quan ens equivoquem i com pot respondre una empresa que
        consideri que ens hem equivocat.
      </p>

      <Resum>
        <p>
          <strong>Els compromisos concrets:</strong> cap afirmació important sense font pública i
          enllaçable; el que no sabem es diu, no es puntua malament; tota puntuació es pot desmuntar
          fins al darrer indicador; els errors es corregeixen a la vista de tothom, no en silenci; i
          qualsevol empresa documentada té una via oberta per respondre, amb terminis escrits.
        </p>
      </Resum>

      <h2>1. Principis</h2>

      <h3>Cap afirmació important sense font</h3>
      <p>
        Cada dada d’una fitxa porta el seu estat, el seu nivell d’evidència, el seu detall en
        català, la data de verificació i els enllaços que la sostenen. Una afirmació sense font no
        es publica. És una restricció del model de dades, i el camp de fonts hi és a totes les
        afirmacions.
      </p>

      <h3>Desconegut no vol dir dolent</h3>
      <p>
        El que no hem pogut documentar queda marcat com a desconegut, no com a negatiu, i no mou la
        puntuació en cap direcció. Baixa el <strong>grau de confiança</strong> de l’anàlisi, que es
        publica al costat de la nota. Així, una empresa que no documenta res no
        queda ni castigada ni premiada: queda amb una anàlisi de confiança baixa.
      </p>

      <h3>Tota puntuació és desmuntable</h3>
      <p>
        Cada xifra desa el desglossament complet de com s’ha calculat: quins indicadors hi entren,
        amb quin pes i amb quin valor. Qualsevol persona pot refer el càlcul amb la{' '}
        <Link href="/metodologia">metodologia publicada</Link> o assenyalar exactament en quin
        indicador discrepa. Una puntuació que no es pot discutir indicador per indicador no és una
        anàlisi, és una opinió disfressada de xifra.
      </p>

      <h3>Historicitat</h3>
      <p>
        Es pot saber què deia una política, quan la vam consultar, què ha canviat i per què s’ha
        mogut una puntuació. Les instantànies de polítiques i de puntuacions es conserven. Una fitxa
        antiga no s’esborra ni es reescriu com si mai no hagués existit.
      </p>

      <h3>Independència</h3>
      <p>
        Sense publicitat, sense enllaços d’afiliació, sense contingut patrocinat, sense pagament per
        aparèixer, per no aparèixer o per canviar una nota. Cap empresa documentada revisa la seva
        fitxa abans de publicar-se.
      </p>
      <p>
        <strong>Model de finançament.</strong> El projecte l’autofinança íntegrament New Spirit
        Studio, S.L. amb recursos propis. No rep publicitat, ni patrocini, ni comissions
        d’afiliació, ni pagament de cap empresa documentada ni del seu grup. Si algun dia rebés un
        ajut públic o una subvenció, es diria aquí, amb l’organisme, l’import i l’any, abans que
        aquests diners toquessin cap fitxa.
      </p>
      <p>
        <strong>Conflictes d’interès.</strong> New Spirit Studio, S.L. ven serveis digitals, i per
        tant és possible que una empresa documentada, la seva matriu o un competidor seu sigui o
        hagi estat client nostre. A la data d’aquesta versió, <strong>cap</strong> de les empreses
        del corpus no ho és ni ho ha estat. Quan passi, la fitxa afectada ho dirà i qui tingui el
        vincle no en fixarà els indicadors. El procediment complet —declaració prèvia, abstenció,
        publicitat a la fitxa i finestra de vint-i-quatre mesos— és al{' '}
        <a
          href="https://github.com/newspiritstudio/identitatdigital/blob/main/docs/governanca.md"
          rel="noopener noreferrer"
          target="_blank"
        >
          document de governança
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>
        .
      </p>

      <h2>2. Jerarquia de l’evidència</h2>
      <p>
        No totes les fonts valen igual. Cada afirmació porta declarat el nivell de la que la sosté,
        i aquest nivell és visible al costat de l’afirmació:
      </p>
      <TableWrap label="Nivells de la jerarquia d’evidència, què és cadascun i com es fa servir">
        <table>
          <caption className="visually-hidden">
            Nivells de la jerarquia d’evidència, què és cadascun i com es fa servir
          </caption>
          <thead>
            <tr>
              <th scope="col">Nivell</th>
              <th scope="col">Què és</th>
              <th scope="col">Com es fa servir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Documentació oficial</td>
              <td>
                Polítiques de privadesa, condicions, centres d’ajuda i documentació tècnica de la
                mateixa empresa
              </td>
              <td>
                És la font preferent per a què diu que fa una empresa. No serveix per acreditar que
                ho compleixi.
              </td>
            </tr>
            <tr>
              <td>Autoritat de control</td>
              <td>
                Resolucions d’autoritats de protecció de dades, de competència o de consum, i
                sentències
              </td>
              <td>
                És la font més forta per acreditar un fet contrastat contradictòriament. Es desa
                sempre si la resolució és ferma, recorreguda, anul·lada o en tramitació.
              </td>
            </tr>
            <tr>
              <td>Anàlisi independent</td>
              <td>
                Auditories, recerca acadèmica, anàlisi tècnica de trànsit o de codi feta per tercers
              </td>
              <td>
                Serveix per contrastar el que diu una empresa amb el que fa el seu producte. Es cita
                sempre amb metodologia i data.
              </td>
            </tr>
            <tr>
              <td>Premsa</td>
              <td>Informacions periodístiques</td>
              <td>
                Útil per situar i per arribar a la font primària. No sostenen sola una afirmació
                greu: es busca sempre el document original.
              </td>
            </tr>
            <tr>
              <td>Valoració editorial</td>
              <td>La nostra interpretació d’uns fets documentats</td>
              <td>
                Es marca sempre com a tal i mai no es presenta com un fet.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>
        Les fonts es desen al catàleg amb el títol i l’idioma originals, l’editor, el tipus, la
        fiabilitat, la data de publicació i la data de consulta. El resum és en català; la citació
        literal es conserva en l’idioma en què es va publicar, perquè traduir una citació és
        començar a interpretar-la.
      </p>

      <h2>3. Com es fa una fitxa</h2>
      <ol>
        <li>
          <strong>Documentació.</strong> Es llegeixen les fonts oficials del servei i es desa una
          instantània del que deien i quin dia.
        </li>
        <li>
          <strong>Contrast.</strong> Es busquen resolucions d’autoritats, auditories i anàlisis
          independents que confirmin o contradiguin el que diu l’empresa. La discrepància entre el
          que es declara i el que s’ha acreditat és informació valuosa i es fa constar.
        </li>
        <li>
          <strong>Redacció amb evidència.</strong> Cada afirmació rep el seu estat, el seu nivell
          d’evidència, la seva data i les seves fonts.
        </li>
        <li>
          <strong>Càlcul.</strong> La puntuació es genera automàticament des dels indicadors. No
          s’escriu a mà ni s’ajusta a posteriori.
        </li>
        <li>
          <strong>Revisió.</strong> Una segona persona de l’equip revisa les afirmacions amb
          conseqüències més greus abans de publicar.
        </li>
        <li>
          <strong>Publicació i datació.</strong> La fitxa surt amb la data de la darrera verificació
          visible.
        </li>
      </ol>
      <p>
        El contingut l’escriuen i el verifiquen persones. Si en algun moment fem servir eines
        automàtiques per preparar esborranys o per trobar fonts, la responsabilitat editorial
        continua sent d’una persona identificada, que ha de comprovar cada font una per una abans de
        publicar. Cap afirmació entra al lloc perquè una màquina l’hagi proposada.
      </p>

      <h2>4. Revisió i caducitat</h2>
      <p>
        Les polítiques de privadesa canvien sovint i sense avisar. Una fitxa correcta avui pot ser
        incorrecta d’aquí a tres mesos. Per això cada afirmació porta la data en què es va verificar
        i per això les fitxes es revisen periòdicament.
      </p>
      <p>
        Quan una revisió detecta un canvi, s’actualitza l’afirmació, es recalcula la puntuació i
        queda registrada la instantània anterior amb la versió de metodologia que la va produir. Es
        pot veure, doncs, si una nota ha baixat perquè l’empresa ha empitjorat o perquè hem canviat
        la manera de mesurar.
      </p>
      <p>
        <strong>Cada quan es revisa una fitxa.</strong> Com a màxim cada <strong>sis mesos</strong>{' '}
        per als serveis amb més de cent milions de persones usuàries declarades, i com a màxim cada{' '}
        <strong>dotze</strong> per a la resta. A banda del calendari, una fitxa es revisa
        immediatament quan la font canvia de data, quan un regulador publica una resolució que
        l’afecta, quan l’empresa exerceix el dret de rèplica o quan algú ens assenyala un error.
      </p>
      <p>
        La data de verificació de cada afirmació és visible a la fitxa i s’exporta al conjunt de
        dades obert, de manera que no cal creure’ns: es pot comprovar quina part del que llegeixes
        és recent i quina no.
      </p>

      <h2>5. Correccions</h2>
      <p>
        Ens equivocarem. Per això hi ha un procediment escrit per a quan passi, amb el rastre del
        canvi visible a la fitxa.
      </p>
      <TableWrap label="Tipus de correcció, amb un exemple i el tractament que rep">
        <table>
          <caption className="visually-hidden">
            Tipus de correcció, amb un exemple i el tractament que rep
          </caption>
          <thead>
            <tr>
              <th scope="col">Tipus</th>
              <th scope="col">Exemple</th>
              <th scope="col">Com es tracta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Error material</td>
              <td>Una falta d’ortografia, un enllaç trencat, una data mal escrita</td>
              <td>Es corregeix directament, sense nota.</td>
            </tr>
            <tr>
              <td>Error de fet</td>
              <td>
                Una afirmació incorrecta sobre el comportament d’un servei, o una font mal
                interpretada
              </td>
              <td>
                Es corregeix, es recalcula la puntuació si cal i es publica una{' '}
                <strong>nota de correcció</strong> visible a la fitxa, amb la data i amb què deia
                abans.
              </td>
            </tr>
            <tr>
              <td>Informació desfasada</td>
              <td>L’empresa ha canviat la seva política i la fitxa encara reflecteix l’anterior</td>
              <td>
                S’actualitza i es fa constar el canvi. La versió anterior queda a l’historial,
                perquè saber què feia abans una empresa forma part de la informació.
              </td>
            </tr>
            <tr>
              <td>Canvi de metodologia</td>
              <td>Es modifiquen els indicadors o els pesos</td>
              <td>
                Es publica la nova versió de la metodologia amb el seu registre de canvis i es
                recalculen totes les fitxes. Cap moviment de nota queda sense explicació.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <Avis>
        <p>
          <strong>El compromís que més importa:</strong> una afirmació substantiva mai no es
          modifica ni s’elimina en silenci. Si la canviem, es veu que l’hem canviat, quan i per què.
          Editar discretament una afirmació desfavorable perquè algú s’ha queixat seria el fracàs
          complet d’aquest projecte.
        </p>
      </Avis>

      <h2>6. Dret de rèplica de les empreses documentades</h2>
      <p>
        Tota empresa que aparegui en aquest lloc té dret a respondre, com a contrapartida de
        publicar informació que l’afecta.
      </p>

      <h3>6.1. Com exercir-lo</h3>
      <p>
        Escriu a <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a> amb l’assumpte
        «Rèplica» i indica-hi:
      </p>
      <ul>
        <li>
          <strong>Quina afirmació concreta</strong> consideres inexacta, amb l’adreça de la fitxa.
          Una queixa genèrica sobre el to o sobre la nota global no es pot processar; una
          discrepància sobre un indicador concret, sí.
        </li>
        <li>
          <strong>Què és inexacte i què seria exacte</strong>, formulat de manera que es pugui
          publicar.
        </li>
        <li>
          <strong>La prova documental.</strong> Un enllaç a documentació pròpia, una resolució, una
          auditoria, una captura datada. La prova ha de ser comprovable per tercers.
        </li>
        <li>
          <strong>Qui escriu</strong>, amb què i en nom de qui, i una adreça de contacte.
        </li>
      </ul>

      <h3>6.2. Què fem, i quan</h3>
      <TableWrap label="Terminis de resposta a una rèplica d’una empresa documentada">
        <table>
          <caption className="visually-hidden">
            Terminis de resposta a una rèplica d’una empresa documentada
          </caption>
          <tbody>
            <tr>
              <th scope="row">Acusament de recepció</th>
              <td>5 dies hàbils des de la recepció.</td>
            </tr>
            <tr>
              <th scope="row">Resposta motivada</th>
              <td>15 dies hàbils des de la recepció, amb una decisió i el seu raonament.</td>
            </tr>
            <tr>
              <th scope="row">Correcció, si escau</th>
              <td>
                Immediata a partir de la decisió, amb nota de correcció visible i recàlcul de la
                puntuació si l’indicador afectat hi entrava.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
      <p>Els resultats possibles són tres, i tots tres es comuniquen per escrit:</p>
      <ol>
        <li>
          <strong>Tens raó.</strong> Es corregeix l’afirmació, es publica la nota de correcció i es
          recalcula la nota.
        </li>
        <li>
          <strong>Tens raó en part, o la qüestió és discutible.</strong> S’ajusta l’afirmació al que
          es pot sostenir, i s’hi incorpora la teva posició identificada com a tal.
        </li>
        <li>
          <strong>No estem d’acord.</strong> Mantenim l’afirmació i t’expliquem per què, amb les
          fonts a la vista. En aquest cas, si vols,{' '}
          <strong>publiquem la teva posició al costat de la fitxa</strong>, identificada com a
          resposta de l’empresa i sense editar-ne el contingut més enllà del que exigeixi la llei.
        </li>
      </ol>
      <p>
        La tercera possibilitat és la que fem servir quan no ens posem d’acord: la teva versió queda
        publicada al costat de la nostra, i que cadascú jutgi.
      </p>

      <h3>6.3. Què no fem</h3>
      <ul>
        <li>
          <strong>No retirem contingut verificat perquè algú ho demani.</strong> Una reclamació
          sense prova documental no mou res.
        </li>
        <li>
          <strong>No acceptem condicions per replicar.</strong> No hi ha acords de confidencialitat,
          ni «off the record», ni revisió prèvia de fitxes.
        </li>
        <li>
          <strong>No negociem puntuacions.</strong> La nota surt del càlcul. Si canvia, és perquè ha
          canviat un indicador documentat.
        </li>
        <li>
          <strong>No responem amenaces amb silenci.</strong> Si rebem un requeriment legal, el
          contestem pels canals que corresponguin i, si la llei no ho impedeix, en deixem constància
          pública.
        </li>
      </ul>

      <h3>6.4. Fonament</h3>
      <p>Aquest procediment va més enllà del que exigeix la llei, i és deliberat.</p>
      <p>
        La Llei orgànica 2/1984 regula el dret de rectificació sobre fets inexactes i perjudicials
        difosos per mitjans de comunicació social, amb un termini de set dies naturals per
        exercir-lo i l’obligació de publicar la rectificació en els tres dies següents. Sigui o no
        aquest lloc un «mitjà de comunicació social» en el sentit d’aquella llei —una qüestió
        discutible per a una base de dades editorial—, n’assumim l’estàndard i hi afegim terminis
        propis més clars.
      </p>
      <p>
        Al darrere hi ha el conflicte clàssic entre la llibertat d’informació de l’article 20.1.d de
        la Constitució i el dret a l’honor de l’article 18.1, que la jurisprudència constitucional
        reconeix també, de manera limitada, a les persones jurídiques. La informació preval quan
        concorren tres condicions: <strong>interès públic</strong> —el tractament massiu de dades de
        milions de persones ho és sens dubte—, <strong>veracitat</strong> —que no vol dir
        infal·libilitat, sinó diligència raonable en la comprovació— i{' '}
        <strong>absència d’expressions vexatòries</strong> innecessàries per a la informació.
      </p>
      <p>
        El model de dades del projecte és, precisament, la prova documental d’aquesta diligència:
        estat, nivell d’evidència, fonts i data a cada afirmació. Si mai cal acreditar-la davant
        d’un tribunal, no caldrà reconstruir res.
      </p>
      <p>
        Pel que fa a la Llei 3/1991 de competència deslleial: no competim amb les empreses
        documentades ni oferim productes alternatius, de manera que és dubtós que hi entrem. Tot i
        això, complim els seus requisits com a criteri de conducta. Les afirmacions són exactes,
        verdaderes i pertinents, que és el que exclou la denigració del seu article 9; i les
        comparacions es fan entre serveis que cobreixen la mateixa necessitat, sobre
        característiques objectives, verificables i representatives, i idèntiques per a tots, que és
        el que exigeix el seu article 10.
      </p>

      <h2>7. Com proposar una correcció si no ets l’empresa</h2>
      <p>
        Qualsevol persona pot assenyalar un error. Escriu a{' '}
        <a href="mailto:admin@newspirit.studio">admin@newspirit.studio</a> amb l’adreça de la fitxa,
        la frase concreta i, si pots, una font. Les propostes amb font es processen; les que són
        només una opinió sobre la nota, no, i no és per menyspreu: és que no hi ha res a comprovar.
      </p>
      <p>
        El contingut editorial viu al repositori públic del projecte com a text revisable, de manera
        que també es pot proposar un canvi allà i discutir-lo obertament.
      </p>

      <h2>8. Persones físiques que apareixen a les fitxes</h2>
      <p>
        Documentem empreses, no persones. Quan una persona física apareix —perquè consta en una
        resolució, en una sentència o en una font oficial—, hi apareix per la seva funció
        professional o pública i només en la mesura necessària per entendre el fet. Mai per la seva
        vida privada.
      </p>
      <p>
        Qualsevol persona física que hi aparegui pot exercir els drets de rectificació i supressió
        pels canals de la <Link href="/legal/privadesa">política de privadesa</Link>, i la seva
        sol·licitud es pondera entre el seu dret i l’interès públic de la informació, amb el
        resultat raonat per escrit.
      </p>

      <h2>9. Revisió d’aquesta política</h2>
      <p>
        Aquesta política es revisa quan canviï el mètode o quan l’experiència demostri que algun
        compromís no es pot complir. Si un termini d’aquest document resulta irrealista, el
        canviarem aquí en comptes d’incomplir-lo en silenci.
      </p>
    </>
  )
}
