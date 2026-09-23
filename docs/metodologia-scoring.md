# Metodologia de puntuació

Versió 1.1 · vigent des del 23 de setembre de 2026

Aquest document explica com Identitat.digital converteix una fitxa documentada
en quatre xifres. El càlcul viu al codi, a `src/lib/scoring/`, que és on ha de
viure perquè sigui reproduïble; aquí s'explica el raonament. La mateixa
metodologia es publica al CMS des del codi amb `pnpm seed`, de manera que la
versió publicada i la versió que calcula no poden divergir en silenci.

## Les quatre xifres

| Xifra | Què mesura |
| --- | --- |
| Privadesa | Quantes dades es recullen, com de sensibles són i què se'n fa |
| Seguretat | Com de ben protegides estan i quin historial d'incidents hi ha |
| Control | Fins a quin punt la persona usuària pot decidir, exportar i marxar |
| Confiança | Fins a quin punt hem pogut documentar l'anàlisi |

La puntuació global és una mitjana ponderada de les tres primeres: 45 % de
privadesa, 30 % de seguretat i 25 % de control. Si una dimensió no té cap
indicador puntuable, els pesos es renormalitzen entre les que en tenen, de
manera que un servei mai no es veu penalitzat perquè una dimensió no li apliqui.

La confiança no entra a la puntuació global. És una xifra sobre nosaltres, no
sobre el servei.

## La regla que ho governa tot

Cada afirmació d'una fitxa pot prendre cinc valors:

| Valor | Efecte a la puntuació | Efecte a la confiança |
| --- | --- | --- |
| Sí | Puntua | Suma cobertura |
| Parcialment | Puntua | Suma cobertura |
| No | Puntua | Suma cobertura |
| Desconegut | Cap | Resta cobertura |
| No aplica | Cap | Cap |

**Desconegut no vol dir dolent.** Un indicador sense documentar surt del
numerador i del denominador de la seva dimensió. No pot moure la puntuació en
cap direcció. Penalitzar el silenci seria inventar-se una acusació; premiar-lo
seria recompensar l'opacitat. El que baixa és la confiança.

**El que no aplica no compta.** Demanar xifratge d'extrem a extrem a un
navegador o eliminació de compte a un servei que no en demana distorsionaria la
comparació. Aquests indicadors queden fora tant de la puntuació com de la
confiança.

Hi ha un cas especial. L'indicador d'historial d'incidents només puntua si una
persona editora ha marcat la casella de revisió d'incidents de la fitxa. Sense
aquesta marca, l'absència d'incidents registrats significa «no ho hem mirat», no
«no n'hi ha».

## Com es calcula una dimensió

Cada dimensió és una mitjana ponderada dels seus indicadors coneguts i
aplicables, expressada de 0 a 100:

```
dimensió = 100 × Σ(valorᵢ × pesᵢ) / Σ(pesᵢ)
```

on el sumatori recorre només els indicadors amb valor conegut i aplicables. El
`valorᵢ` va de 0 a 1 i el `pesᵢ` és el de la taula d'indicadors.

La majoria d'indicadors deriven directament de l'estat d'una afirmació. Segons
si la resposta desitjable és afirmativa o negativa s'aplica una de les dues
polaritats:

| Estat | Bo si és «sí» | Bo si és «no» |
| --- | --- | --- |
| Sí | 1 | 0 |
| Parcialment | 0,6 | 0,4 |
| No | 0 | 1 |

La resta són indicadors calculats, que es descriuen més avall.

## Indicadors

### Privadesa (14 indicadors, 117 punts de pes)

| Indicador | Pes | Què mesura |
| --- | --- | --- |
| Minimització de dades | 14 | Volum i sensibilitat del que es recull |
| Sensibilitat de les dades | 8 | Presència de categories especials |
| Vinculació a la identitat | 8 | Quantes dades queden lligades a una persona |
| Publicitat dirigida | 13 | Si les dades alimenten publicitat personalitzada |
| Elaboració de perfils | 9 | Si es construeixen perfils de comportament |
| Seguiment entre aplicacions | 12 | Si el servei et segueix fora d'ell mateix |
| Rastrejadors de tercers | 6 | Presència de rastrejadors aliens |
| Cessió a tercers | 10 | Si les dades surten cap a altres empreses |
| Compartició dins del grup | 6 | Si circulen entre serveis del mateix conglomerat |
| Venda a intermediaris | 8 | Si acaben en mans d'intermediaris de dades |
| Entrenament de models | 6 | Si el contingut s'utilitza per entrenar models |
| Límits de retenció | 6 | Si hi ha terminis publicats |
| Dades després d'eliminar | 6 | Què queda quan te'n vas |
| Claredat de la política | 5 | Si el document es pot entendre |

### Seguretat (10 indicadors, 108 punts de pes)

| Indicador | Pes | Què mesura |
| --- | --- | --- |
| Xifratge d'extrem a extrem | 24 | Si el proveïdor pot llegir el contingut |
| Xifratge en trànsit | 10 | Protecció de la connexió |
| Xifratge en repòs | 9 | Protecció a l'emmagatzematge |
| Verificació en dos passos | 16 | Qualitat dels mètodes disponibles |
| Auditories independents | 10 | Si algú extern ho ha comprovat |
| Programa de recompenses | 7 | Canal actiu per a qui troba errors |
| Divulgació de vulnerabilitats | 4 | Política pública de comunicació |
| Codi obert | 8 | Si es pot verificar el que fa |
| Informe de transparència | 6 | Publicació de peticions d'autoritats |
| Historial d'incidents | 14 | Bretxes i sancions documentades |

### Control de la persona usuària (14 indicadors, 104 punts de pes)

| Indicador | Pes | Què mesura |
| --- | --- | --- |
| Es pot eliminar el compte | 12 | Si existeix la sortida |
| Eliminació autoservei | 9 | Si es pot fer sense demanar permís |
| Enllaç directe | 4 | Si el camí és localitzable |
| Dificultat | 9 | Quants obstacles hi ha |
| Temps d'espera | 4 | Dies fins que és efectiva |
| Exportació de dades | 12 | Si te'n pots endur el que és teu |
| Formats d'exportació | 4 | Si són oberts o captius |
| Desactivar la publicitat | 9 | Control sobre la personalització |
| Desactivar la telemetria | 6 | Control sobre la recollida tècnica |
| Controls detallats | 10 | Granularitat de la configuració |
| Privadesa per defecte | 7 | Quina postura ve de sèrie |
| Exercici de drets | 5 | Canal per exercir els drets del RGPD |
| Patrons enganyosos | 9 | Disseny que empeny contra els teus interessos |
| No cal compte | 4 | Si es pot fer servir sense registrar-se |

## Serveis públics

Una administració no té model de negoci, no fa programes de recompenses per
errors i sovint no et deixa donar-te de baixa perquè una llei l'obliga a
conservar l'expedient. Mesurar-la amb els indicadors del sector privat la
penalitzaria precisament per complir la norma: La Meva Salut perdia punts per no
poder esborrar una història clínica que la Llei 21/2000 mana guardar quinze
anys.

Les fitxes marcades com a **servei públic** canvien de bloc d'indicadors.

**En surten** (els substitueix el bloc públic):

| Indicador | Per què |
| --- | --- |
| Programa de recompenses | El substitueix la conformitat amb l'ENS |
| Informe de transparència | El substitueix el registre d'activitats de tractament |

**Hi entren:**

| Indicador | Dimensió | Pes | Què mesura |
| --- | --- | --- | --- |
| Base jurídica declarada | Privadesa | 10 | Norma que empara el tractament, citada article per article |
| Registre d'activitats de tractament | Privadesa | 6 | Publicació que exigeix l'article 31 de la LOPDGDD |
| Avaluació d'impacte | Privadesa | 6 | AIPD accessible quan el tractament l'exigeix |
| Conformitat amb l'ENS | Seguretat | 12 | Declaració o certificació vigent i categoria del sistema |
| Delegat de protecció de dades | Control | 5 | Contacte directe publicat |
| Alternativa no digital | Control | 8 | Es pot fer el tràmit sense l'aplicació |
| Declaració d'accessibilitat | Control | 5 | Reial decret 1112/2018, amb grau de conformitat |

A més, quan la fitxa documenta amb font que **la conservació és una obligació
legal**, els cinc indicadors d'eliminació del compte i el de dades retingudes
després d'esborrar queden fora del càlcul: no poder marxar deixa de ser una
decisió del servei.

El que **no** canvia és la minimització. Una llei empara el tractament, però no
eximeix de ser proporcionat: recollir més dades de les necessàries continua
puntuant igual de malament, tingui o no cobertura legal.

## Indicadors calculats

Set indicadors no deriven d'una sola afirmació.

**Minimització de dades.** Se sumen les sensibilitats (d'1 a 5) de tots els
tipus de dada recollits, comptant a la meitat els que només es recullen si
s'activen. La suma es normalitza contra un sostre de 34 punts, calibrat perquè
les grans plataformes publicitàries s'hi acostin i un servei de missatgeria
xifrada quedi molt per sota. El valor de l'indicador és `1 − suma / 34`, acotat
entre 0 i 1.

**Sensibilitat de les dades.** Proporció de dades recollides amb sensibilitat 4
o 5 sobre el total. Com més alta, pitjor.

**Vinculació a la identitat.** Proporció de dades recollides que queden lligades
a una identitat concreta.

**Xifratge d'extrem a extrem.** No és un sí o un no: es puntua l'abast declarat.
Tot el contingut per defecte val 1; tot el contingut però cal activar-ho, 0,7;
contingut sí i metadades no, 0,85; part del contingut per defecte, 0,55; part
del contingut i cal activar-ho, 0,35; cap, 0.

**Verificació en dos passos.** Es puntua el millor mètode disponible: claus
d'accés o clau física, 1; aplicació d'autenticació, 0,85; notificació a
l'aplicació, 0,7; correu electrònic, 0,5; només SMS, 0,4.

**Historial d'incidents.** Es parteix d'1 i es resta una penalització per cada
incident: 0,05 si és de gravetat baixa, 0,12 si és mitjana, 0,25 si és alta i
0,4 si és crítica. Cada penalització es multiplica per un factor temporal: 1 si
l'incident té menys de dos anys, 0,6 si en té menys de cinc, 0,25 si en té més.
Les sancions anul·lades en apel·lació es registren però no penalitzen.

**Temps d'espera per eliminar.** Cap espera val 1; fins a set dies, 0,85; fins a
trenta, 0,6; més de trenta, 0,3.

## El grau de confiança

```
confiança = 100 × (0,55 × cobertura + 0,30 × qualitat + 0,15 × actualitat)
```

**Cobertura** és la proporció d'indicadors aplicables amb resposta documentada.
És el factor dominant perquè és el que millor descriu si l'anàlisi està
acabada.

**Qualitat** és la mitjana del nivell d'evidència dels indicadors que puntuen:

| Nivell | Valor |
| --- | --- |
| Documentació oficial | 1 |
| Resolució d'una autoritat de control | 1 |
| Anàlisi tècnica independent | 0,9 |
| Premsa | 0,7 |
| Interpretació editorial pròpia | 0,45 |
| Sense evidència | 0 |

**Actualitat** decau amb l'antiguitat de les verificacions: íntegra fins als sis
mesos i decreixent fins als dos anys, quan es considera que la informació ja no
és fiable sense tornar-la a comprovar.

Per sota de 50 punts de confiança la puntuació es marca com a **provisional**.
No diem que el servei sigui bo o dolent: diem que encara no en sabem prou.

## Traçabilitat

Cada fitxa desa, dins del camp `scores.breakdown`, el desglossament complet de
tots els indicadors: quin valor ha pres, amb quin pes, amb quin nivell
d'evidència i si s'ha exclòs i per què. Qualsevol persona pot refer el càlcul a
mà i arribar al mateix número, o assenyalar on discrepa.

Cada canvi de puntuació genera una instantània a la col·lecció d'historials de
puntuació, amb la data i la versió de metodologia utilitzada. Això permet
respondre preguntes com «quan va baixar la puntuació de seguretat d'aquest
servei i què va canviar aquell dia».

## Quan canvia la metodologia

Si es modifica un pes, s'afegeix un indicador o se'n canvia el càlcul, es
publica una **versió nova**. Les puntuacions antigues conserven la versió amb
què es van calcular i continuen sent explicables. Després d'un canvi cal
executar `pnpm rescore` perquè les fitxes es tornin a calcular.

## Què no mesura

- **La qualitat del servei.** Un servei pot ser excel·lent i puntuar malament.
- **La intenció de l'empresa.** Es mesuren pràctiques documentades, no motius.
- **El risc individual.** Depèn de qui ets i de què fas, i això el directori no
  ho sap.
- **La comparació entre necessitats diferents.** Les puntuacions són comparables
  entre serveis que cobreixen la mateixa necessitat funcional. Un gestor de
  correu i una xarxa social poden tenir la mateixa xifra sense voler dir el
  mateix, perquè la selecció d'indicadors aplicables no és idèntica.
