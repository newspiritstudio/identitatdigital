import Link from 'next/link'
import type { Metadata } from 'next'

import { loadCorpus } from '@/lib/analysis'
import { buildProcurementSheet } from '@/lib/procurement'

import { getClient } from '../lib'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Escoles i ajuntaments',
  description:
    'Protocol per decidir quines eines digitals adopta un centre educatiu o un ajuntament, amb una fitxa de contractació per a cada aplicació del directori.',
}

const CA = new Intl.NumberFormat('ca-ES')

/**
 * Protocol institucional: el mateix corpus, reordenat com el necessita una
 * escola o un ajuntament que ha de justificar per escrit una eina que farà
 * servir molta gent.
 */
export default async function InstitutionsPage() {
  const payload = await getClient()
  const corpus = await loadCorpus(payload)
  const sheets = corpus.apps
    .map((app) => buildProcurementSheet(corpus, app))
    .sort((a, b) => b.stops - a.stops || a.name.localeCompare(b.name, 'ca'))

  const withStops = sheets.filter((sheet) => sheet.stops > 0).length

  return (
    <div className="content-wrapper">
      <h1>Escoles i ajuntaments</h1>
      <p className="lede">
        Quan una escola obre un grup de missatgeria amb les famílies o un ajuntament trasllada un
        servei a una plataforma, decideix el tractament de dades de milers de persones que no han
        triat res. Gairebé sempre es fa sense expedient, perquè l’eina és gratuïta i tothom la fa
        servir. Aquesta secció posa la informació que ja hi ha al directori en l’ordre en què la
        necessita qui ha de signar.
      </p>

      <h2>El problema</h2>
      <p>
        Fer servir una eina gratuïta és signar un contracte. Quan una entitat pública hi posa dades
        de les quals respon, passa a ser responsable del tractament i la plataforma passa a ser
        encarregada. Que no hi hagi factura no treu cap de les obligacions de l’article 28 del
        Reglament general de protecció de dades.
      </p>
      <p>
        Moltes entitats tenen un encarregat del tractament amb qui no han signat res,
        del qual no coneixen els subencarregats i del qual no saben com recuperarien les dades si
        volguessin marxar.
      </p>

      <h2>El protocol, en set passes</h2>
      <ol>
        <li>
          <strong>Escriviu la necessitat abans que el nom.</strong> «Cal comunicar-se amb les
          famílies» no és «cal un grup de WhatsApp». Amb la necessitat escrita en termes funcionals
          es poden comparar alternatives; si la primera línia de l’expedient ja porta una marca, la
          comparació ja no es farà.
        </li>
        <li>
          <strong>Mireu la fitxa de contractació.</strong> A sota n’hi ha una per a cada aplicació
          del directori, amb els deu punts que la normativa obliga a valorar, què en sabem i quin
          precepte fa rellevant cadascun.
        </li>
        <li>
          <strong>Decidiu si cal avaluació d’impacte.</strong> Si l’eina tracta categories especials
          de dades o dades de menors a gran escala, la resposta és que sí, i s’ha de fer abans de
          desplegar-la.
        </li>
        <li>
          <strong>Demaneu el contracte d’encarregat per escrit.</strong> Amb la llista de
          subencarregats, la ubicació de les dades, el mecanisme de les transferències
          internacionals i el procediment de retorn i supressió en acabar.
        </li>
        <li>
          <strong>Comproveu que hi ha sortida.</strong> Format d’exportació, termini i cost. Triar una
          eina de la qual no es pot sortir és una decisió irreversible, i una decisió irreversible
          necessita més justificació.
        </li>
        <li>
          <strong>No traslladeu el cost a les famílies.</strong> Si la solució obliga cada família a
          obrir un compte en una plataforma comercial, el tractament continua existint, però
          l’entitat el trasllada a qui té menys capacitat de negociar-lo. Ha d’existir sempre una via
          alternativa que no obligui a registrar-se enlloc.
        </li>
        <li>
          <strong>Deixeu-ho escrit i poseu-hi data de revisió.</strong> Les condicions de les
          plataformes canvien sense avisar, i sense una data de revisió a l’expedient la decisió no es
          torna a mirar.
        </li>
      </ol>

      <h2>Quatre clàusules que haurien de ser-hi sempre</h2>
      <ul>
        <li>
          <strong>Prohibició d’ús per a publicitat i per a elaboració de perfils.</strong> Les dades
          que l’entitat aporta no poden alimentar cap sistema publicitari ni cap perfil comercial.
        </li>
        <li>
          <strong>Exclusió expressa de l’entrenament de models.</strong> El contingut de l’entitat
          queda fora de qualsevol entrenament, propi o de tercers. Feu-ho constar encara que avui el
          proveïdor no entreni res, perquè les condicions canvien.
        </li>
        <li>
          <strong>Notificació de violacions de seguretat en 24 hores.</strong> L’entitat té 72 hores
          per notificar a l’autoritat, i no pot complir-les si el proveïdor l’avisa el dia 4.
        </li>
        <li>
          <strong>Retorn de dades en format obert i supressió certificada.</strong> Amb termini i
          format concrets, no «a determinar».
        </li>
      </ul>

      <h2>Les fitxes de contractació</h2>
      <p>
        Una per aplicació, generades del mateix corpus que la resta del lloc.{' '}
        {CA.format(withStops)} de les {CA.format(sheets.length)} fitxes tenen algun punt marcat com a
        atenció. Una alerta no diu que l’eina sigui il·legal; diu que l’expedient ha de resoldre
        aquell punt abans de signar.
      </p>
      <ul className="grid">
        {sheets.map((sheet) => (
          <li className="card" key={sheet.slug}>
            <h3>
              <Link href={`/institucions/${sheet.slug}`}>{sheet.name}</Link>
            </h3>
            <p className="meta">
              {sheet.companyName ?? 'Empresa no documentada'}.{' '}
              {sheet.stops > 0
                ? `${CA.format(sheet.stops)} ${sheet.stops === 1 ? 'punt d’atenció' : 'punts d’atenció'}`
                : 'Cap punt d’atenció'}
              , {CA.format(sheet.checks)} a comprovar, {CA.format(sheet.unknowns)} sense comprovar.
            </p>
          </li>
        ))}
      </ul>

      <h2>Abast</h2>
      <p>
        Aquesta secció serveix per preparar l’expedient: recull els punts que s’han de valorar, el
        que en sabem i d’on ho hem tret. No és un dictamen jurídic, no substitueix l’avaluació
        d’impacte quan cal fer-la i no recomana contractar ni deixar de contractar cap eina. La decisió i la responsabilitat són de l’òrgan
        de contractació. Tot el que hi ha a sota es pot descarregar sencer a la pàgina de{' '}
        <Link href="/dades">dades obertes</Link> i es pot refer amb el{' '}
        <Link href="/metodologia">mètode publicat</Link>.
      </p>
    </div>
  )
}
