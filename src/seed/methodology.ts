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
  effectiveFrom: '2026-09-09',
  status: 'current' as const,
  summary: `Identitat.digital puntua cada servei en tres dimensions —privadesa, seguretat i control de la persona usuària— i n'obté una puntuació global ponderada (${Math.round(
    DIMENSION_WEIGHTS.privacy * 100,
  )} %, ${Math.round(DIMENSION_WEIGHTS.security * 100)} % i ${Math.round(
    DIMENSION_WEIGHTS.agency * 100,
  )} %). Cada dimensió és la mitjana ponderada d'un conjunt d'indicadors, i cada indicador prové d'una afirmació documentada amb fonts dins de la fitxa. A part hi ha una quarta xifra, el grau de confiança, que no mesura el servei sinó la nostra anàlisi: fins a quin punt hem pogut documentar allò que puntuem. Les quatre xifres es recalculen automàticament cada vegada que es desa una fitxa, i cada canvi queda registrat amb la data i el desglossament complet indicador per indicador.`,
  principles: [
    {
      title: 'Desconegut no vol dir dolent',
      body: "Quan no hem pogut documentar una pràctica, l'indicador surt del càlcul: no suma ni resta. Penalitzar el silenci equivaldria a inventar-nos una acusació, i premiar-lo equivaldria a recompensar l'opacitat. El que baixa és el grau de confiança.",
    },
    {
      title: 'Tota puntuació és desmuntable',
      body: "Cada fitxa desa el desglossament de tots els indicadors: quin valor ha pres, amb quin pes, amb quina evidència i si s'ha exclòs. Qualsevol persona ha de poder refer el càlcul a mà i arribar al mateix número, o assenyalar on discrepa.",
    },
    {
      title: 'Es mesura el que es pot documentar',
      body: 'Un indicador només puntua si hi ha una afirmació amb estat i fonts a la fitxa. No hi ha impressions, ni reputació, ni intuïcions sobre si una empresa «és de fiar».',
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
  })),
  unknownPolicy: `Cada afirmació d'una fitxa pot prendre cinc valors: sí, parcialment, no, desconegut i no aplica. «Desconegut» i «no aplica» treuen l'indicador del numerador i del denominador de la seva dimensió, de manera que no poden moure la puntuació en cap direcció. La diferència entre tots dos és el grau de confiança: «desconegut» hi compta com a cobertura no assolida, perquè és informació que hauríem de tenir i no tenim; «no aplica» en queda completament fora, perquè no hi ha res a saber.

Aquesta regla té una conseqüència volguda: un servei molt opac pot acabar amb una puntuació aparentment correcta i un grau de confiança baix. Per això, per sota de ${PROVISIONAL_CONFIDENCE_THRESHOLD} punts de confiança, la puntuació es marca com a provisional i s'ha de llegir com una anàlisi encara oberta, no com un veredicte.

Hi ha un cas addicional. L'indicador d'historial d'incidents només puntua si una persona editora ha marcat explícitament la casella de revisió d'incidents a la fitxa. Sense aquesta marca, l'absència d'incidents registrats significa «no ho hem mirat», no «no n'hi ha», i per tant l'indicador queda exclòs.`,
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
  changelog: `Primera versió publicada. Fixa les tres dimensions, els ${INDICATORS.length} indicadors, el tractament de la informació desconeguda i un sostre de volum de dades de ${DATA_VOLUME_CAP} punts de sensibilitat acumulada per normalitzar la minimització.`,
}
