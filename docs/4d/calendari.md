# Calendari i lliurables

Cada lliurable és comprovable sense creure's res: o és una URL pública, o és un
fitxer descarregable, o és una etiqueta al repositori. La columna «Com es
comprova» diu exactament com.

El calendari arrenca el novembre de 2026, després de la presentació del 29
d'octubre, i es tanca al setembre de 2027.

## Fase 1 — Novembre i desembre de 2026: el corpus creix

- **50 aplicacions documentades** (des de les 25 actuals), amb les 25 noves
  triades per cobrir les categories on ara no hi ha alternativa documentada:
  missatgeria, videoconferència d'aula, gestió escolar i banca.
  *Com es comprova:* recompte a `/aplicacions` i files noves a
  `/dades/aplicacions.csv`.
- **Fonts al catàleg per damunt de 200**, cadascuna amb data de consulta i, quan
  n'hi hagi, còpia arxivada.
  *Com es comprova:* `/dades/fonts.csv`.
- **Disponibilitat en català comprovada de les 50**, amb la data de comprovació
  visible a cada fitxa.
  *Com es comprova:* columna `catala_comprovat_el` a `/dades/aplicacions.csv`.

## Fase 2 — Gener a març de 2027: detecció de canvis

- **Vigilància automàtica de les polítiques**: comprovació periòdica de cada
  document citat, amb detecció de canvis i instantània del text anterior.
  *Com es comprova:* una pàgina pública de canvis detectats, amb la data i el
  document afectat.
- **Avís de fitxa desactualitzada** visible a la fitxa quan la política de
  referència hagi canviat després de la darrera verificació. La fitxa ho ha de
  dir abans que ho trobi el lector.
  *Com es comprova:* qualsevol fitxa afectada.
- **Avaluació d'accessibilitat amb metodologia WCAG-EM** i publicació del
  resultat, substituint l'autoavaluació actual.
  *Com es comprova:* `/legal/accessibilitat`, versió 2.0.

## Fase 3 — Abril a juny de 2027: les institucions

- **75 aplicacions documentades.**
- **Guia de contractació descarregable en PDF** per a escoles i ajuntaments,
  derivada del protocol de `/institucions`, amb les quatre clàusules mínimes del
  contracte d'encarregat del tractament redactades per copiar i enganxar.
  *Com es comprova:* el PDF, enllaçat des de `/institucions`.
- **Fitxa de contractació per a cada aplicació documentada**, amb les deu
  comprovacions i la seva base jurídica, generada des del corpus i per tant
  igual per a totes les empreses.
  *Com es comprova:* `/institucions/<aplicació>` per a qualsevol de les 75.
- **Dues sessions de formació** amb centres educatius o administracions locals,
  amb el material publicat sota la mateixa llicència.
  *Com es comprova:* el material publicat i la data de cada sessió.

## Fase 4 — Juliol a setembre de 2027: tancament

- **100 aplicacions documentades.**
- **Informe anual de l'estat de la privadesa de les aplicacions en català**,
  publicat al lloc i descarregable, amb les dades que el sostenen exportades en
  obert perquè qualsevol pugui refer-ne els gràfics.
  *Com es comprova:* l'informe i el conjunt de dades de la mateixa data.
- **Versió 2.0 de la metodologia** si els indicadors han canviat, amb recàlcul
  complet i les instantànies anteriors conservades.
  *Com es comprova:* `/metodologia` i les instantànies de puntuació.
- **Memòria final del projecte**, amb què s'ha fet, què no s'ha fet i per què.
  *Com es comprova:* publicada al repositori.

## Compromisos que no depenen del calendari

- **Tot el que es produeixi és obert** des del dia que existeix, no al final.
- **Les exportacions no es degraden**: cap versió futura no publicarà menys
  camps que els que ja s'han publicat.
- **Si el projecte s'atura**, el conjunt de dades i el codi es dipositen en un
  repositori públic extern amb les mateixes llicències.
