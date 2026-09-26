import Link from 'next/link'
import type { Metadata } from 'next'

import { loadCorpus } from '@/lib/analysis'
import { WORDLIST_META } from '@/lib/passwords/wordlist.ca'

import { getClient } from '../../lib'
import '../eines.css'
import { buildCredentialsIndex } from './catalog'
import EmailCheck from './EmailCheck'
import OwnPolicyReload from './OwnPolicyReload'
import PasswordTool from './PasswordTool'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Credencials: filtracions i contrasenyes',
  description:
    'Mira en quines filtracions surt la teva adreça i què has de fer, audita les contrasenyes que fas servir (filtrades, repetides o previsibles) i genera’n de noves. Cap contrasenya no surt del teu dispositiu.',
}

/**
 * Eina de credencials: tot el que té a veure amb com s'entra als comptes.
 *
 *  - Filtracions per adreça: el navegador consulta XposedOrNot directament i
 *    creua el resultat amb el directori (índex construït aquí, al servidor).
 *  - Auditoria de contrasenyes: k-anonimat contra Have I Been Pwned i
 *    comparació local entre elles.
 *  - Generadors de contrasenyes i frases de pas.
 *  - Guia de gestors de contrasenyes (abans, una pàgina a part).
 */
export default async function CredentialsPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)
  const index = buildCredentialsIndex(corpus)

  return (
    <div className="content-wrapper">
      <OwnPolicyReload />
      <div className="text-page tool-page">
        <p className="meta">
          <Link href="/eines">Eines</Link>
        </p>
        <h1>Credencials: filtracions i contrasenyes</h1>
        <p className="lede">
          Mira en quines filtracions surt la teva adreça, comprova si les teves contrasenyes ja
          circulen o si en repeteixes, i genera’n de noves. Res del que escriguis no es desa.
        </p>
        <nav aria-label="En aquesta pàgina" className="tool-nav">
          <a href="#correu">Filtracions</a>
          <a href="#auditoria">Auditoria</a>
          <a href="#generador">Generador</a>
          <a href="#gestors">Gestors</a>
          <a href="#privadesa">Privadesa</a>
        </nav>

        <EmailCheck index={index} />

        <PasswordTool />

        <h2 id="gestors">Gestors de contrasenyes</h2>
        <p>
          Un gestor de contrasenyes és la millora de seguretat més gran que es pot fer en una tarda.
          Resol el problema que l’auditoria sol detectar: ningú no pot recordar cent contrasenyes
          diferents, i per això s’acaben repetint.
        </p>
        {index.authenticators.length > 0 ? (
          <p>
            Per al segon factor, al directori hi ha les fitxes de{' '}
            {index.authenticators.map((app, position) => (
              <span key={app.slug}>
                {position > 0 ? (position === index.authenticators.length - 1 ? ' i ' : ', ') : ''}
                <Link href={`/aplicacions/${app.slug}`}>{app.name}</Link>
                {app.overall !== null ? ` (${app.overall}/100)` : ''}
              </span>
            ))}
            .
          </p>
        ) : null}
        <details className="tool-more">
          <summary>Guia per triar un gestor i fer-lo servir bé</summary>
          <h3>Per què la repetició és el problema</h3>
          <p>
            Quan una empresa pateix una filtració, les credencials acaben en llistes que es proven
            automàticament contra altres serveis, una pràctica que es diu <em>credential stuffing</em>. No cal
            que ningú et tingui a l’objectiu; n’hi ha prou que la teva adreça i la teva contrasenya
            hagin sortit d’un lloc qualsevol. El{' '}
            <Link href="/filtracions">catàleg de filtracions</Link> d’aquest lloc recull els llocs
            d’on han sortit.
          </p>
          <p>
            Amb una contrasenya diferent a cada servei, una filtració afecta un sol compte; amb la
            mateixa a tot arreu, els afecta tots alhora. Ho pots comprovar amb
            l’<a href="#auditoria">auditoria de contrasenyes</a> d’aquesta pàgina, que fa la consulta
            sense enviar cap contrasenya.
          </p>

          <h3>Què fa un gestor</h3>
          <ul>
            <li>
              <strong>Genera</strong> una contrasenya llarga i aleatòria diferent per a cada servei,
              que no has de recordar.
            </li>
            <li>
              <strong>Les desa xifrades</strong> amb una clau derivada d’una contrasenya mestra que
              només saps tu.
            </li>
            <li>
              <strong>Les omple</strong> al lloc correcte, cosa que protegeix contra la suplantació
              de llocs web: un gestor no omple les credencials de la teva entitat bancària en un
              domini que s’hi assembla, i una persona sí que les hi pot escriure.
            </li>
            <li>
              <strong>T’avisa</strong> de les que has repetit i de les que han aparegut en
              filtracions.
            </li>
          </ul>

          <h3>Criteris per triar-ne un</h3>
          <p>
            Són els indicadors amb què el projecte analitza qualsevol servei, aplicats a un gestor
            de contrasenyes. Et serveixen per triar-ne un i per saber què has de preguntar.
          </p>
          <ol>
            <li>
              <strong>Xifratge d’extrem a extrem, per defecte i sobre tot el magatzem.</strong> Que
              el proveïdor no pugui llegir el contingut encara que vulgui, sense que hagis d’activar
              cap opció. Si depèn d’una casella de configuració, no és una garantia.
            </li>
            <li>
              <strong>Que el proveïdor no pugui recuperar-te la contrasenya mestra.</strong> Si te la
              pot recuperar, és que hi té accés d’alguna manera. A canvi, el codi de recuperació és
              teu i l’has de guardar bé.
            </li>
            <li>
              <strong>Auditories independents publicades, amb informe llegible i data.</strong> Un
              «auditat per una empresa líder» sense informe publicat no acredita res. Mira’n també la
              data: una auditoria de fa cinc anys descriu una versió del programa que ja no existeix.
            </li>
            <li>
              <strong>Codi obert de la part que xifra.</strong> No garanteix que estigui bé, però
              permet que algú altre ho comprovi. Sense el codi, l’única prova que el xifratge
              funciona com diu el proveïdor és la seva paraula.
            </li>
            <li>
              <strong>Exportació completa en format obert.</strong> Has de poder emportar-te tot el
              magatzem en un fitxer que un altre gestor pugui llegir. Si no el pots exportar, quedes
              lligat a aquell proveïdor.
            </li>
            <li>
              <strong>Verificació en dos passos amb clau física o aplicació.</strong> Millor que no
              sigui per SMS, que és el segon factor més fàcil de robar.
            </li>
            <li>
              <strong>Jurisdicció i model de negoci.</strong> On és l’empresa, quina autoritat la
              supervisa i de què viu. Un gestor gratuït que no cobra a ningú ha de treure els diners
              d’algun lloc: mira d’on.
            </li>
            <li>
              <strong>Què passa si l’empresa tanca.</strong> Si el magatzem xifrat és local i
              exportable, un tancament és una molèstia; si només és al seu servidor, el pots perdre.
            </li>
          </ol>

          <h3>La contrasenya mestra</h3>
          <p>
            És l’única que has de recordar i, per tant, l’única que ha de ser molt llarga. Una
            frase de pas de sis paraules aleatòries és fàcil de recordar i molt difícil d’endevinar;
            el <a href="#generador">generador d’aquesta pàgina</a> en fa, i explica quants bits
            d’entropia té cada opció i què vol dir això en temps d’atac.
          </p>
          <p>
            Tres regles: que no s’assembli a cap altra que facis servir, que
            no surti d’enlloc que et puguin endevinar i que en tinguis una còpia de seguretat fora
            de línia, escrita en paper i guardada com guardaries un document important. Si perds la
            contrasenya mestra d’un gestor ben fet, ho perds tot, perquè ningú més no hi pot entrar.
          </p>

          <h3>El del navegador, serveix?</h3>
          <p>
            És molt millor que repetir contrasenyes, i si l’alternativa és no fer res, fes-lo
            servir. Té tres límits: sol quedar lligat a l’ecosistema del
            navegador, de manera que canviar de navegador es fa costós; el xifratge sovint depèn de
            la sessió del compte, i per tant qui controli aquell compte controla el magatzem; i
            comparteix empresa amb un negoci que viu de saber què fas, cosa que no el fa insegur,
            però és un motiu per llegir-ne les condicions. Al{' '}
            <Link href="/aplicacions">directori</Link> hi ha les fitxes dels navegadors i les
            empreses que hi ha al darrere.
          </p>

          <h3>Per a una escola, un ajuntament o una empresa</h3>
          <p>
            En una organització, el problema passa a ser compartir contrasenyes i, sobretot,
            retirar-les quan algú marxa. Cal mirar els criteris de dalt i tres més:
          </p>
          <ul>
            <li>
              <strong>Magatzems compartits amb permisos per persona i registre d’accessos.</strong>
            </li>
            <li>
              <strong>Revocació immediata</strong> quan algú deixa l’entitat, sense haver de canviar
              totes les contrasenyes a mà.
            </li>
            <li>
              <strong>Contracte d’encarregat del tractament</strong> amb ubicació de les dades i
              retorn en acabar, com qualsevol altra eina. Ho explica el{' '}
              <Link href="/institucions">protocol per a escoles i ajuntaments</Link>.
            </li>
          </ul>

          <h3>Per què aquí no hi ha una taula comparativa</h3>
          <p>
            Perquè encara no hem documentat cap gestor amb el mateix rigor amb què hem documentat
            les fitxes del <Link href="/aplicacions">directori</Link>: cada afirmació amb la seva
            font, el seu nivell d’evidència i la seva data. Sense aquesta feina, una llista dels
            «millors» seria només la nostra opinió.
          </p>
          <p>
            Quan les fitxes hi siguin, sortiran al directori amb la mateixa puntuació desmuntable
            que la resta i es podran descarregar a <Link href="/dades">dades obertes</Link>.
            Mentrestant, els criteris de més amunt són els que faríem servir nosaltres, i els pots
            aplicar tu mateix.
          </p>
        </details>

        <h2 id="privadesa">Què surt del teu dispositiu</h2>
        <ul>
          <li>
            <strong>Filtracions per adreça:</strong> l’adreça va directament del teu navegador a
            XposedOrNot, sense passar pel nostre servidor, que per tant no la pot desar. No carreguem
            els logotips que retorna XposedOrNot, perquè cada imatge seria una petició més a un
            tercer i li diria en quines filtracions surts.
          </li>
          <li>
            <strong>Auditoria de contrasenyes:</strong> de cada contrasenya només en surten els cinc
            primers caràcters del resum. La comparació entre elles
            (repetides, variants) es fa sense xarxa.
          </li>
          <li>
            <strong>Generadors:</strong> no en surt res; les contrasenyes es generen al navegador.
          </li>
          <li>
            <strong>Res no es desa:</strong> ni l’adreça, ni les contrasenyes, ni els resultats.
            L’única cosa que pot quedar al dispositiu és la tria del diagnòstic, i només si prems
            «Afegeix-los al diagnòstic».
          </li>
        </ul>

        <details className="tool-more">
          <summary>Com es comprova una contrasenya sense enviar-la</summary>
          <p>
            La comprovació de filtracions consulta l’índex de{' '}
            <a
              href="https://haveibeenpwned.com/Passwords"
              rel="noopener noreferrer"
              target="_blank"
            >
              Have I Been Pwned
              <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
            </a>
            , que recull més de vuit-cents milions de contrasenyes aparegudes en filtracions.
            No hi enviem la contrasenya. Fem servir un mètode anomenat <strong>k-anonimat</strong>,
            que funciona així:
          </p>
          <ol>
            <li>
              El teu navegador calcula el <strong>resum SHA-1</strong> de la contrasenya. Un resum
              és una empremta de quaranta caràcters hexadecimals de la qual no es pot recuperar el
              text original. Aquest càlcul es fa dins del teu dispositiu.
            </li>
            <li>
              D’aquests quaranta caràcters se n’agafen <strong>els cinc primers</strong>. Cinc
              caràcters hexadecimals són vint bits, o sigui un calaix d’entre 1.048.576 possibles. A
              cada calaix hi ha una mitjana de vuit-centes contrasenyes diferents.
            </li>
            <li>
              Només aquests cinc caràcters surten del teu dispositiu. Arriben a un servidor nostre,
              que els reenvia a Have I Been Pwned i ens torna la llista sencera de sufixos d’aquell
              calaix.
            </li>
            <li>
              El teu navegador busca el seu sufix dins d’aquella llista, també en local, i així
              sap si la contrasenya hi és o no.
            </li>
          </ol>
          <p>
            Així, ni el nostre servidor ni Have I Been Pwned reben mai la contrasenya ni el
            resum sencer. El màxim que poden saber és que algú ha preguntat per un calaix on hi ha
            vuit-centes contrasenyes diferents, i això no permet deduir per quina preguntàvem.
            Demanem a més a Have I Been Pwned que <strong>encoixini</strong> la resposta amb
            entrades falses, perquè la mida de la resposta tampoc no reveli res.
          </p>
          <p>
            <strong>Ho pots comprovar.</strong> Obre les eines de
            desenvolupament del navegador, ves a la pestanya de xarxa i prem el botó d’auditar: hi
            veuràs una sola petició per contrasenya, a <code>/eines/api/pwned?prefix=</code> seguit
            de cinc caràcters, i cap altra dada. El servidor no registra el prefix enlloc.
          </p>
        </details>
        <details className="tool-more">
          <summary>Què vol dir cada xifra</summary>
          <p>
            La força es mesura en <strong>bits d’entropia</strong>: cada bit multiplica per dos la
            feina de qui vol trobar la contrasenya. És l’única mesura defensable, perquè depèn de
            com s’ha generat la contrasenya i no de quin aspecte té. Les puntuacions de zero a cent
            i els semàfors que es veuen a molts formularis són inventats.
          </p>
          <p>
            Els temps de trencament que ensenyem van sempre amb la hipòtesi escrita al costat, i
            n’hi ha tres perquè es vegi que el resultat en depèn: entre l’escenari conservador i
            l’extrem hi ha deu ordres de magnitud. Una xifra de temps que no diu quin atac suposa no
            informa de res.
          </p>
          <p>
            Si escrius una contrasenya teva per comprovar-la, l’eina no te’n dirà cap xifra de
            força. L’entropia és una propietat del procés que ha generat la
            contrasenya, i el procés d’una persona que en pensa una no és aleatori: tria paraules,
            dates, noms i les substitucions de sempre, que és el primer que prova qualsevol atac.
            Una xifra alta perquè hi has posat un signe d’admiració seria enganyosa.
          </p>
        </details>
        <details className="tool-more">
          <summary>Fonts</summary>
          <ul className="plain">
            <li>
              <span className="badge">Adreces</span>{' '}
              <a href="https://xposedornot.com" rel="noopener noreferrer" target="_blank">
                XposedOrNot
                <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
              </a>
              , projecte obert de consulta de filtracions. L’API és gratuïta i sense clau per a ús
              no comercial, amb un límit de consultes per connexió, i les condicions demanen
              citar-ne la font. El lligam amb les fitxes del directori el fem nosaltres, a partir
              del <Link href="/filtracions">catàleg de filtracions</Link>.
            </li>
            <li>
              <span className="badge">Filtracions</span>{' '}
              <a
                href="https://haveibeenpwned.com/Passwords"
                rel="noopener noreferrer"
                target="_blank"
              >
                Have I Been Pwned — Pwned Passwords
                <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
              </a>
              , de Troy Hunt. L’API de consulta per rang és pública i gratuïta. El nostre servidor
              només li reenvia les consultes.
            </li>
            <li>
              <span className="badge">Paraules</span> La llista de {WORDLIST_META.wordCount}{' '}
              paraules catalanes de les frases de pas ({WORDLIST_META.bitsPerWord} bits per paraula)
              es va generar el {WORDLIST_META.generatedAt} a partir de{' '}
              <a href={WORDLIST_META.source} rel="noopener noreferrer" target="_blank">
                aquesta font
                <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
              </a>
              . <span className="meta">{WORDLIST_META.licence}</span>
            </li>
          </ul>
        </details>
      </div>
    </div>
  )
}
