import Link from 'next/link'
import type { Metadata } from 'next'

import '../eines.css'
import MetadataTool from './MetadataTool'

export const metadata: Metadata = {
  title: 'Metadades: què diuen de tu les fotos i els documents',
  description:
    'Mira quines dades amagades porten les teves fotos i documents (ubicació exacta, el teu nom, el número de sèrie de l’aparell, els autors dels comentaris) i fes-ne una còpia neta. El fitxer no surt del teu dispositiu.',
}

/**
 * Inspector de metadades. La pàgina és estàtica: tota la feina la fa
 * `MetadataTool` al navegador, amb les rutines pures de `@/lib/metadata`.
 */
export default function MetadataPage() {
  return (
    <div className="content-wrapper">
      <div className="text-page tool-page">
        <p className="meta">
          <Link href="/eines">Eines</Link>
        </p>
        <h1>Metadades: què diuen de tu les fotos i els documents</h1>
        <p className="lede">
          Les fotos i els documents porten dades que no es veuen: on es van fer, amb quin aparell,
          qui els ha escrit. Mira què diu cada fitxer i descarrega’n una còpia neta. Els fitxers no
          surten del teu dispositiu.
        </p>

        <MetadataTool />

        <h2 id="mes">Per saber-ne més</h2>

        <details className="tool-more" id="per-que">
          <summary>Per què importa</summary>
          <ul>
            <li>
              <strong>Ubicació:</strong> les coordenades GPS d’una foto feta a casa són l’adreça de
              casa, sovint amb un marge de pocs metres. N’hi ha prou amb una sola foto d’un anunci o
              d’una venda de segona mà.
            </li>
            <li>
              <strong>Número de sèrie:</strong> les càmeres i alguns mòbils l’escriuen a cada foto.
              Permet lligar comptes que semblen de persones diferents però publiquen fotos fetes amb
              el mateix aparell.
            </li>
            <li>
              <strong>Autor i empresa:</strong> els programes d’oficina hi posen el nom de l’usuari
              de l’ordinador i el de l’organització on hi ha la llicència. Un escrit «anònim» pot
              portar el nom de qui l’ha escrit.
            </li>
            <li>
              <strong>Comentaris i canvis controlats:</strong> el text esborrat amb el control de
              canvis activat continua dins del document. Qualsevol que l’obri el pot tornar a veure.
            </li>
            <li>
              <strong>Miniatures i versions:</strong> una foto retallada pot conservar una miniatura
              de l’original sencer, i un PDF modificat, les versions anteriors.
            </li>
            <li>
              <strong>Instruccions d’IA:</strong> moltes imatges generades amb IA porten dins el
              text exacte que es va fer servir per crear-les.
            </li>
          </ul>
        </details>
        <details className="tool-more" id="com-neteja">
          <summary>Com es fa la còpia neta</summary>
          <p>
            No es torna a codificar res: la imatge o el document queden exactament iguals i només
            canvien les metadades. A les fotos es buiden els camps que identifiquen i es conserva
            l’orientació, que cal perquè la foto no surti tombada. Als documents d’Office es treuen
            l’autor, l’empresa, la plantilla i les dates, els autors dels comentaris passen a dir-se
            «Autor» i les fotos incrustades es netegen igual que les soltes. Als PDF, els camps
            s’omplen d’espais al mateix lloc, perquè el fitxer continuï obrint-se exactament igual.
          </p>
          <p>
            Després, la còpia es torna a revisar amb el mateix inspector i et diem què hi queda. El
            títol d’un document, els comentaris i els canvis controlats formen part del contingut:
            no els toquem, però t’avisem que hi són i com treure’ls.
          </p>
        </details>
        <details className="tool-more" id="de-bon-principi">
          <summary>Com evitar-ho de bon principi</summary>
          <ul>
            <li>
              <strong>iPhone:</strong> en compartir una foto, toca «Opcions» a dalt de tot i
              desactiva «Ubicació». Per no desar-la mai: Configuració › Privacitat i seguretat ›
              Localització › Càmera › «Mai».
            </li>
            <li>
              <strong>Android:</strong> a l’aplicació de la càmera, obre la configuració i desactiva
              l’opció d’etiquetes o dades d’ubicació (el nom canvia segons el fabricant).
            </li>
            <li>
              <strong>Word:</strong> Fitxer › Informació › Comprova si hi ha problemes › Inspecciona
              el document, i elimina el que trobi a «Propietats del document i informació personal».
            </li>
            <li>
              <strong>LibreOffice:</strong> Eines › Opcions › LibreOffice › Seguretat › Opcions, i
              marca «Suprimeix la informació personal en desar».
            </li>
          </ul>
          <p>
            Les grans xarxes socials i la majoria d’aplicacions de missatgeria treuen la ubicació en
            publicar una foto, però el correu electrònic, els serveis d’emmagatzematge al núvol i
            l’enviament «com a fitxer» la deixen tal com és. A més, la xarxa que la treu per als
            altres l’ha rebuda igualment.
          </p>
        </details>
        <details className="tool-more" id="limits">
          <summary>Què no fa</summary>
          <ul>
            <li>
              No revisa vídeos ni àudios, ni formats menys habituals (RAW, TIFF, GIF). Admet JPEG,
              PNG, WebP, HEIC i AVIF, PDF, i documents de Word, Excel, PowerPoint i LibreOffice.
            </li>
            <li>
              No pot llegir el que un PDF desa comprimit dins la seva estructura interna, ni res
              d’un PDF xifrat. Quan passa, t’ho diu.
            </li>
            <li>
              No mira el contingut: una cara, una matrícula, un reflex o el nom d’un carrer a la
              foto diuen tant com les metadades, i això només ho pots revisar tu.
            </li>
            <li>
              Si un fitxer està malmès o té una estructura que no coneix, no el toca: t’ho diu i no
              n’ofereix cap còpia.
            </li>
          </ul>
        </details>
        <details className="tool-more" id="privadesa">
          <summary>Què surt del teu dispositiu</summary>
          <p>
            No en surt res: els fitxers es llegeixen i es netegen dins d’aquesta pestanya, sense cap petició al
            nostre servidor ni a cap altre. No es desa res: en tancar o recarregar la pàgina, la
            llista desapareix. L’enllaç al mapa d’una ubicació només obre OpenStreetMap si hi fas
            clic, i llavors és OpenStreetMap qui rep les coordenades. Ho detallem a la{' '}
            <Link href="/legal/privadesa">política de privadesa</Link>.
          </p>
        </details>
      </div>
    </div>
  )
}
