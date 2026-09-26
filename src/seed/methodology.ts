import {
  CONFIDENCE_WEIGHTS,
  DATA_VOLUME_CAP,
  DIMENSION_LABELS,
  DIMENSION_WEIGHTS,
  DIMENSIONS,
  INDICATORS,
  METHODOLOGY_VERSION,
  PROVISIONAL_CONFIDENCE_THRESHOLD,
} from '@/lib/scoring/methodology'

/**
 * Publicació de la metodologia al CMS.
 *
 * Les dimensions i els indicadors es deriven del codi, no es reescriuen: si un
 * pes canvia al motor de càlcul i no es publica una versió nova, la següent
 * càrrega ho farà evident. Els textos explicatius sí que són editorials.
 */
export const methodologyDoc = {
  version: METHODOLOGY_VERSION,
  effectiveFrom: '2026-09-23',
  status: 'current' as const,
  summary: `Identitat.digital puntua cada servei en tres dimensions (privadesa, seguretat i control de la persona usuària) i n'obté una puntuació global ponderada (${Math.round(
    DIMENSION_WEIGHTS.privacy * 100,
  )} %, ${Math.round(DIMENSION_WEIGHTS.security * 100)} % i ${Math.round(
    DIMENSION_WEIGHTS.agency * 100,
  )} %). Cada dimensió és la mitjana ponderada d'un conjunt d'indicadors, i cada indicador prové d'una afirmació documentada amb fonts dins de la fitxa. A part hi ha una quarta xifra, el grau de confiança, que mesura la nostra anàlisi i no el servei: indica fins a quin punt hem pogut documentar allò que puntuem. Les quatre xifres es recalculen automàticament cada vegada que es desa una fitxa, i cada canvi queda registrat amb la data i el desglossament complet indicador per indicador.`,
  principles: [
    {
      title: 'Desconegut no vol dir dolent',
      body: "Quan no hem pogut documentar una pràctica, l'indicador surt del càlcul i no suma ni resta. Penalitzar el silenci seria fer una acusació sense proves, i premiar-lo seria recompensar l'opacitat. El que baixa és el grau de confiança.",
    },
    {
      title: 'Tota puntuació es pot refer',
      body: "Cada fitxa desa el desglossament de tots els indicadors: quin valor ha pres, amb quin pes, amb quina evidència i si s'ha exclòs. Qualsevol persona pot refer el càlcul a mà i arribar al mateix número, o assenyalar on discrepa.",
    },
    {
      title: 'Es mesura el que es pot documentar',
      body: 'Un indicador només puntua si hi ha una afirmació amb estat i fonts a la fitxa. No compten les impressions, la reputació ni les intuïcions sobre si una empresa «és de fiar».',
    },
    {
      title: 'El que no aplica no compta',
      body: "Demanar xifratge d'extrem a extrem a un navegador, o eliminació de compte a un servei que no en demana, distorsionaria la comparació. Aquests indicadors es marquen com a no aplicables i queden fora tant de la puntuació com del grau de confiança.",
    },
    {
      title: 'Comparem dins de la mateixa necessitat',
      body: "Les puntuacions són comparables entre serveis que cobreixen la mateixa necessitat funcional. Un gestor de correu i una xarxa social poden tenir la mateixa xifra i no voler dir el mateix, perquè la selecció d'indicadors aplicables no és idèntica.",
    },
    {
      title: 'Un servei públic no es mesura com un de comercial',
      body: "Una administració no té model de negoci, no fa programes de recompenses per errors i sovint no permet donar-se de baixa perquè una llei l'obliga a conservar l'expedient. Mesurar-la amb els mateixos criteris que el sector privat la penalitzaria per complir la norma. Per això les fitxes marcades com a servei públic canvien de bloc d'indicadors: en surten el programa de recompenses i l'informe de transparència, i hi entren la base jurídica declarada, el registre d'activitats de tractament, l'avaluació d'impacte, la conformitat amb l'Esquema Nacional de Seguretat, el delegat de protecció de dades, l'alternativa no digital i la declaració d'accessibilitat. Quan la conservació de les dades és una obligació legal documentada, els indicadors d'eliminació del compte també queden fora. El que no canvia és la minimització: un manament legal empara el tractament, però no eximeix de ser proporcionat.",
    },
    {
      title: 'Una versió per cada canvi de regles',
      body: "Si es modifica un pes, s'afegeix un indicador o se'n canvia el càlcul, es publica una versió nova de la metodologia. Les puntuacions antigues conserven la versió amb què es van calcular i continuen sent explicables.",
    },
  ],
  dimensions: DIMENSIONS.map((key) => ({
    key,
    label: DIMENSION_LABELS[key],
    weight: DIMENSION_WEIGHTS[key],
  })),
  indicators: INDICATORS.map((indicator) => ({
    key: indicator.key,
    dimension: indicator.dimension,
    weight: indicator.weight,
    label: indicator.label,
    description: indicator.description,
    scope: indicator.scope ?? 'all',
  })),
  unknownPolicy: `Cada afirmació d'una fitxa pot prendre cinc valors: sí, parcialment, no, desconegut i no aplica. «Desconegut» i «no aplica» treuen l'indicador del numerador i del denominador de la seva dimensió, de manera que no poden moure la puntuació en cap direcció. La diferència entre tots dos és el grau de confiança: «desconegut» hi compta com a cobertura no assolida, perquè és informació que hauríem de tenir i no tenim; «no aplica» en queda completament fora, perquè no hi ha res a saber.

Amb aquesta regla, un servei molt opac pot acabar amb una puntuació aparentment correcta i un grau de confiança baix. Per això, per sota de ${PROVISIONAL_CONFIDENCE_THRESHOLD} punts de confiança, la puntuació es marca com a provisional i s'ha de llegir com una anàlisi encara oberta.

Hi ha un cas addicional. L'indicador d'historial d'incidents només puntua si una persona editora ha marcat explícitament la casella de revisió d'incidents a la fitxa. Sense aquesta marca, l'absència d'incidents registrats vol dir que no s'ha revisat, i per tant l'indicador queda exclòs.`,
  confidenceFormula: `El grau de confiança és una mitjana ponderada de tres factors, expressada de 0 a 100:

Cobertura (${Math.round(
    CONFIDENCE_WEIGHTS.coverage * 100,
  )} %): proporció d'indicadors aplicables que tenen resposta documentada. És el factor dominant perquè és el que millor descriu si l'anàlisi està acabada.

Qualitat de les fonts (${Math.round(
    CONFIDENCE_WEIGHTS.quality * 100,
  )} %): mitjana del nivell d'evidència dels indicadors que puntuen. La documentació oficial de l'empresa i les resolucions d'autoritats de control valen 1; les anàlisis tècniques independents, 0,9; la premsa, 0,7; la interpretació editorial pròpia, 0,45.

Actualitat (${Math.round(
    CONFIDENCE_WEIGHTS.recency * 100,
  )} %): antiguitat de les verificacions. Una fitxa verificada fa menys de sis mesos manté el factor íntegre i decau progressivament fins als dos anys, quan es considera que la informació ja no és fiable sense tornar-la a comprovar.

El grau de confiança no valora el servei. Un servei excel·lent pot tenir una confiança baixa si encara no l'hem documentat prou, i un servei pèssim pot tenir-la molt alta si la seva mala pràctica està perfectament acreditada.`,
  changelog: `Versió 1.1. Incorpora el bloc d'indicadors de serveis públics: base jurídica declarada, registre d'activitats de tractament, avaluació d'impacte, conformitat amb l'Esquema Nacional de Seguretat, delegat de protecció de dades, alternativa no digital i declaració d'accessibilitat. A les fitxes marcades com a servei públic, aquests indicadors substitueixen el programa de recompenses i l'informe de transparència, i els indicadors d'eliminació del compte queden fora del càlcul quan la conservació està obligada per llei. Cap pes de les dimensions ni dels indicadors comuns no s'ha modificat, de manera que les puntuacions dels serveis comercials no varien.

Versió 1.0. Primera versió publicada. Fixa les tres dimensions, els indicadors comuns, el tractament de la informació desconeguda i un sostre de volum de dades de ${DATA_VOLUME_CAP} punts de sensibilitat acumulada per normalitzar la minimització. El catàleg actual té ${INDICATORS.length} indicadors.`,
}
