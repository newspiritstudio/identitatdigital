import type { Metadata } from 'next'

import { WORDLIST_META } from '@/lib/passwords/wordlist.ca'

import PasswordTool from './PasswordTool'

export const metadata: Metadata = {
  title: 'Contrasenyes',
  description:
    'Genera contrasenyes i frases de pas amb entropia calculada, i comprova si una contrasenya ha aparegut en filtracions sense enviar-la enlloc.',
}

/**
 * Pàgina de l'eina de contrasenyes.
 *
 * Component de servidor prim: aquí només hi ha el text, que és fix, i la crida
 * al component de client que fa la feina. Cap contrasenya no es genera ni es
 * comprova al servidor, i per tant el servidor no en pot veure cap.
 *
 * L'explicació del k-anonimat no és un annex: forma part de l'eina. Aquest
 * projecte demana a les empreses que expliquin què fan amb les dades de qui les
 * fa servir, i la manera de no ser una contradicció ambulant és explicar-ho aquí
 * amb el mateix detall i deixar-ho comprovable.
 */
export default function PasswordsPage() {
  return (
    <>
      <h1>Contrasenyes</h1>
      <p className="lede">
        Genera una contrasenya o una frase de pas amb aleatorietat criptogràfica, mira quants bits
        d’entropia té de debò i comprova si ja ha aparegut en alguna filtració coneguda. Tot passa
        dins del teu navegador: la contrasenya no s’envia enlloc ni es desa en cap lloc.
      </p>

      <PasswordTool />

      <h2>Com és que es pot comprovar una contrasenya sense enviar-la</h2>
      <p>
        La comprovació de filtracions consulta l’índex de{' '}
        <a href="https://haveibeenpwned.com/Passwords" rel="noopener noreferrer" target="_blank">
          Have I Been Pwned
          <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
        </a>
        , que recull més de vuit-cents milions de contrasenyes aparegudes en filtracions. La manera
        òbvia de consultar-lo seria enviar-hi la contrasenya, i és exactament el que no farem. El
        mètode que fem servir es diu <strong>k-anonimat</strong> i funciona així:
      </p>
      <ol>
        <li>
          El teu navegador calcula el <strong>resum SHA-1</strong> de la contrasenya. Un resum és
          una empremta de quaranta caràcters hexadecimals de la qual no es pot recuperar el text
          original. Aquest càlcul es fa dins del teu dispositiu.
        </li>
        <li>
          D’aquests quaranta caràcters se n’agafen <strong>els cinc primers</strong>. Cinc caràcters
          hexadecimals són vint bits, o sigui un calaix d’entre 1.048.576 possibles. A cada calaix
          hi ha una mitjana de vuit-centes contrasenyes diferents.
        </li>
        <li>
          Només aquests cinc caràcters surten del teu dispositiu. Arriben a un servidor nostre, que
          els reenvia a Have I Been Pwned i ens torna la llista sencera de sufixos d’aquell calaix.
        </li>
        <li>
          El teu navegador busca el seu sufix dins d’aquella llista, altra vegada en local. Aquí és
          on se sap si la contrasenya hi és o no.
        </li>
      </ol>
      <p>
        El resultat: ni el nostre servidor ni Have I Been Pwned reben mai la contrasenya ni el resum
        sencer. El màxim que poden saber és que algú ha preguntat per un calaix on hi ha vuit-centes
        contrasenyes diferents, i això no permet deduir per quina preguntàvem. Demanem a més a Have
        I Been Pwned que <strong>encoixini</strong> la resposta amb entrades falses, perquè ni tan
        sols la mida de la resposta no digui res.
      </p>
      <p>
        <strong>Això es pot comprovar, no cal creure’ns.</strong> Obre les eines de desenvolupament
        del navegador, ves a la pestanya de xarxa i prem el botó de comprovar: hi veuràs una sola
        petició, a <code>/eines/api/pwned?prefix=</code> seguit de cinc caràcters. Res més. El codi
        de la ruta i el de l’eina són públics i tenen escrit, en un comentari, que el prefix no es
        registra enlloc.
      </p>

      <h2>Què vol dir cada xifra</h2>
      <p>
        La força es mesura en <strong>bits d’entropia</strong>, que és el nombre de vegades que qui
        ataca ha de doblar la feina. Cada bit multiplica per dos el cost de trobar-la. És l’única
        mesura defensable, perquè depèn de com s’ha generat la contrasenya i no de quin aspecte té:
        les puntuacions de zero a cent i els semàfors que es veuen a molts formularis són inventats.
      </p>
      <p>
        Els temps de trencament que ensenyem van sempre amb la hipòtesi escrita al costat, i n’hi ha
        tres precisament perquè es vegi que el resultat en depèn: entre l’escenari conservador i
        l’extrem hi ha deu ordres de magnitud. Una xifra de temps sense dir quin atac se suposa no
        és informació, és decoració.
      </p>
      <p>
        Si escrius una contrasenya teva per comprovar-la, l’eina no te’n dirà cap xifra de força, i
        és a posta. L’entropia és una propietat del procés que ha generat la contrasenya, i el
        procés d’una persona que en pensa una no és aleatori: tria paraules, dates, noms i les
        substitucions de sempre, que és el primer que prova qualsevol atac. Ensenyar-te una xifra
        alta perquè hi has posat un signe d’admiració seria enganyar-te.
      </p>

      <h2>Fonts</h2>
      <ul className="plain">
        <li>
          <span className="badge">Filtracions</span>{' '}
          <a href="https://haveibeenpwned.com/Passwords" rel="noopener noreferrer" target="_blank">
            Have I Been Pwned — Pwned Passwords
            <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
          </a>
          , de Troy Hunt. L’API de consulta per rang és pública i gratuïta. Nosaltres només hi fem
          de pont.
        </li>
        <li>
          <span className="badge">Paraules</span> La llista de {WORDLIST_META.wordCount} paraules
          catalanes de les frases de pas ({WORDLIST_META.bitsPerWord} bits per paraula) es va
          generar el {WORDLIST_META.generatedAt} a partir de{' '}
          <a href={WORDLIST_META.source} rel="noopener noreferrer" target="_blank">
            aquesta font
            <span className="visually-hidden"> (s’obre en una pestanya nova)</span>
          </a>
          . <span className="meta">{WORDLIST_META.licence}</span>
        </li>
      </ul>
    </>
  )
}
