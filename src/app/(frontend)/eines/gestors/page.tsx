import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gestors de contrasenyes',
  description:
    'Què fa un gestor de contrasenyes, quins criteris el fan bo i com es tria, amb el mateix vocabulari amb què aquest lloc analitza qualsevol altre servei.',
}

/**
 * Guia de gestors de contrasenyes.
 *
 * La pàgina no compara productes ni en recomana cap. Encara no hem documentat
 * cap gestor amb el rigor que demanem a les fitxes del directori, i sense
 * aquesta feina una taula comparativa seria una llista d'opinions.
 *
 * El que sí que dona són els criteris, que són els mateixos indicadors amb què
 * puntuem qualsevol servei, perquè qui llegeix els apliqui a la seva tria.
 */
export default function PasswordManagersPage() {
  return (
    <>
      <p className="meta">
        <Link href="/eines">Eines</Link>
      </p>
      <h1>Gestors de contrasenyes</h1>
      <p className="lede">
        Un gestor de contrasenyes és la millora de seguretat més gran que es pot fer en una tarda.
        No perquè sigui màgic, sinó perquè resol el problema real: ningú no pot recordar cent
        contrasenyes diferents, i per això les repeteix.
      </p>

      <h2>Per què la repetició és el problema</h2>
      <p>
        Quan una empresa pateix una filtració, les credencials acaben en llistes que es proven
        automàticament contra altres serveis. Això té nom: <em>credential stuffing</em>. No cal que
        ningú et tingui a l’objectiu; n’hi ha prou que la teva adreça i la teva contrasenya hagin
        sortit d’un lloc qualsevol. El{' '}
        <Link href="/filtracions">catàleg de filtracions</Link> d’aquest lloc és, essencialment, la
        llista de llocs d’on han sortit.
      </p>
      <p>
        Amb una contrasenya diferent a cada servei, una filtració és un problema en un sol lloc. Amb
        la mateixa a tot arreu, és un problema a tot arreu alhora. Ho pots comprovar ara mateix amb
        la <Link href="/eines/contrasenyes">comprovació de contrasenyes filtrades</Link>, que fa la
        consulta sense arribar a enviar mai la teva contrasenya.
      </p>

      <h2>Què fa realment un gestor</h2>
      <ul>
        <li>
          <strong>Genera</strong> una contrasenya llarga i aleatòria diferent per a cada servei, que
          no has de recordar.
        </li>
        <li>
          <strong>Les desa xifrades</strong> amb una clau derivada d’una contrasenya mestra que
          només saps tu.
        </li>
        <li>
          <strong>Les omple</strong> al lloc correcte, cosa que protegeix contra la suplantació de
          llocs web. Un gestor no omple les credencials de la teva entitat bancària en un domini que
          se li assembla, i tu sí que ho faries.
        </li>
        <li>
          <strong>T’avisa</strong> de les que has repetit i de les que han aparegut en filtracions.
        </li>
      </ul>

      <h2>Els criteris, amb el vocabulari d’aquest lloc</h2>
      <p>
        Aquests són els mateixos indicadors amb què el projecte analitza qualsevol servei, aplicats
        a un gestor de contrasenyes. Serveixen per fer-te tu la teva tria i, sobretot, per saber què
        has de preguntar.
      </p>
      <ol>
        <li>
          <strong>Xifratge d’extrem a extrem, per defecte i sobre tot el magatzem.</strong> Que el
          proveïdor no pugui llegir el contingut encara que vulgui, i no només si actives una opció.
          «Per defecte» és la paraula que separa una garantia d’una casella de configuració.
        </li>
        <li>
          <strong>Que el proveïdor no pugui recuperar-te la contrasenya mestra.</strong> Sona
          incòmode, però si te la pot recuperar és que hi té accés d’alguna manera. La contrapartida
          és que el codi de recuperació és teu i l’has de guardar bé.
        </li>
        <li>
          <strong>Auditories independents publicades, amb informe llegible i data.</strong> Un
          «auditat per una empresa líder» sense informe publicat no acredita res. Mira la data: una
          auditoria de fa cinc anys parla d’un programa que ja no existeix.
        </li>
        <li>
          <strong>Codi obert de la part que xifra.</strong> No garanteix que estigui bé, però permet
          que algú altre ho comprovi. Sense codi, l’única prova que el xifratge funciona com diuen és
          que ho diuen.
        </li>
        <li>
          <strong>Exportació completa en format obert.</strong> Has de poder emportar-te tot el
          magatzem en un fitxer que un altre gestor pugui llegir. Si no se’n pot sortir, el
          magatzem es converteix en una dependència.
        </li>
        <li>
          <strong>Verificació en dos passos amb clau física o aplicació.</strong> No amb SMS, que és
          el segon factor més fàcil de robar.
        </li>
        <li>
          <strong>Jurisdicció i model de negoci.</strong> On és l’empresa, quina autoritat la
          supervisa i de què viu. Un gestor gratuït que no cobra a ningú ha de treure els diners
          d’algun lloc, i val la pena saber d’on.
        </li>
        <li>
          <strong>Què passa si l’empresa tanca.</strong> Si el magatzem xifrat és local i exportable,
          un tancament és una molèstia. Si només viu al seu servidor, és una pèrdua.
        </li>
      </ol>

      <h2>La contrasenya mestra</h2>
      <p>
        És l’única que has de recordar i, per tant, l’única que ha de ser llarga de debò. Una frase
        de pas de sis paraules aleatòries és fàcil de recordar i molt difícil d’endevinar; el{' '}
        <Link href="/eines/contrasenyes">generador d’aquest lloc</Link> en fa, i explica quants bits
        d’entropia té cada opció i què vol dir això en temps d’atac.
      </p>
      <p>
        Tres regles que no es poden saltar: que no s’assembli a cap altra que facis servir, que no
        surti d’enlloc que et puguin endevinar i que en tinguis una còpia de seguretat fora de
        línia, escrita en paper i guardada com guardaries un document important. Perdre la
        contrasenya mestra d’un gestor ben fet vol dir perdre-ho tot, i això és el preu de què ningú
        més no hi pugui entrar.
      </p>

      <h2>El del navegador, serveix?</h2>
      <p>
        És molt millor que repetir contrasenyes, i si l’alternativa real és no fer res, endavant.
        Però té tres límits que convé conèixer: sol quedar lligat a l’ecosistema del navegador, de
        manera que canviar de navegador es fa costós; el xifratge sovint depèn de la sessió del
        compte, i per tant qui controli aquell compte controla el magatzem; i comparteix empresa amb
        un negoci que viu de saber què fas, cosa que no el fa insegur però sí que fa que valgui la
        pena llegir-ne les condicions. Al{' '}
        <Link href="/aplicacions">directori</Link> hi ha les fitxes dels navegadors i les empreses
        que hi ha al darrere.
      </p>

      <h2>Per a una escola, un ajuntament o una empresa</h2>
      <p>
        En una organització el problema canvia de forma: no és recordar contrasenyes sinó
        compartir-les i, sobretot, retirar-les quan algú marxa. Els punts que s’han de mirar són els
        de dalt més tres:
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
          <strong>Contracte d’encarregat del tractament</strong> amb ubicació de les dades i retorn
          en acabar, com qualsevol altra eina. Ho explica el{' '}
          <Link href="/institucions">protocol per a escoles i ajuntaments</Link>.
        </li>
      </ul>

      <h2>Per què aquí no hi ha una taula comparativa</h2>
      <p>
        Perquè encara no hem documentat cap gestor amb el mateix rigor amb què hem documentat les
        fitxes del <Link href="/aplicacions">directori</Link>: cada afirmació amb la seva font, el
        seu nivell d’evidència i la seva data. Sense aquesta feina, una llista dels «millors» seria
        la nostra opinió amb aparença de mètode.
      </p>
      <p>
        Quan les fitxes hi siguin, sortiran al directori amb la mateixa puntuació desmuntable que la
        resta i es podran descarregar a <Link href="/dades">dades obertes</Link>. Mentrestant, els
        criteris de més amunt són el mateix que faríem servir nosaltres, i són públics justament
        perquè no hagis d’esperar-nos.
      </p>
    </>
  )
}
