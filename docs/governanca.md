# Governança del projecte

**Versió 1.0 — 12 de setembre de 2026**

Aquest document diu **qui decideix què** a Identitat.digital, **què passa quan
qui decideix té un conflicte d'interessos** i **què passa si el projecte
s'acaba**. És la peça que la [política editorial](https://identitat.digital/legal/politica-editorial)
pressuposa: allà s'explica com es fa una fitxa; aquí, qui pot fer-la.

El projecte publica notes sobre empreses identificades pel seu nom. Ho fa una
empresa que ven serveis digitals. Aquesta combinació només és defensable si les
regles són públiques i incòmodes per a nosaltres mateixos. Per això aquest
document existeix i per això és al repositori i no només al peu de pàgina.

---

## 1. Qui hi ha

**Entitat responsable.** New Spirit Studio, S.L., NIF B75352872, carrer del
Sol, 62, 08201 Sabadell. Dos administradors solidaris.

**Consell editorial.** Els dos administradors solidaris i, a partir de la
primera incorporació externa, un mínim d'un membre sense vincle econòmic amb
l'entitat. El consell és l'òrgan que:

- aprova canvis de **metodologia** (que impliquen versió nova i recàlcul),
- resol les **rèpliques** d'empreses documentades que no s'hagin pogut
  resoldre per la via ordinària,
- aprova l'**entrada de noves categories** d'aplicacions al corpus,
- decideix sobre **conflictes d'interessos** segons la secció 3.

**Qualsevol persona.** Pot proposar correccions, obrir incidències al
repositori i reutilitzar el conjunt de dades sencer. No cal permís per a res
d'això.

---

## 2. Com es decideix

| Decisió                                        | Qui               | Com queda registrada                                    |
| ---------------------------------------------- | ----------------- | ------------------------------------------------------- |
| Corregir una dada d'una fitxa                  | Qui edita         | Historial del repositori i data de verificació del camp |
| Afegir una fitxa nova                          | Qui edita         | Repositori                                              |
| Ampliar vocabulari (tipus de dada, finalitats) | Qui edita         | Repositori; és neutral per a la puntuació               |
| **Canviar pesos o indicadors**                 | Consell editorial | Versió nova de metodologia + recàlcul + nota pública    |
| **Retirar una fitxa**                          | Consell editorial | Nota pública amb el motiu                               |
| Resoldre una rèplica contestada                | Consell editorial | Registre de correccions                                 |
| Canviar aquest document                        | Consell editorial | Versió nova + historial                                 |

**Regla de desempat.** Amb dos membres i desacord, preval l'opció que
**publica més informació** o que **corregeix a favor de l'empresa afectada**.
No hi ha cap escenari en què l'empat serveixi per callar.

**Cap decisió sobre una fitxa concreta no és mai unipersonal quan hi ha un
conflicte d'interessos declarat.** Vegeu la secció següent.

---

## 3. Conflictes d'interessos

Aquest és el punt feble del projecte i s'ha de tractar com a tal.

New Spirit Studio, S.L. presta serveis digitals a clients, alguns dels quals
són administracions públiques i empreses. És perfectament possible que una
empresa analitzada, la seva matriu o un competidor directe seu sigui, hagi
estat o vulgui ser client nostre.

**Regles:**

1. **Declaració abans d'editar.** Qui edita una fitxa ha de declarar al consell
   si l'empresa analitzada, el seu grup o un competidor directe seu manté o ha
   mantingut relació comercial amb l'entitat en els darrers **24 mesos**.
2. **Abstenció.** Si n'hi ha, aquesta persona no fixa el valor dels indicadors
   d'aquella fitxa. Els fixa un altre membre del consell, a partir de les
   mateixes fonts públiques.
3. **Publicitat.** Quan una fitxa hagi estat afectada per una abstenció, la
   fitxa ho diu. No és una nota a peu de pàgina interna: és informació que el
   lector necessita per calibrar el que llegeix.
4. **Prohibició de pagament.** No s'accepta cap pagament, patrocini, permuta,
   accés privilegiat ni acord de qualsevol mena d'una empresa analitzada o del
   seu grup a canvi de modificar, avançar, retardar, destacar o retirar una
   fitxa. Ni tan sols per «revisar-la abans». La via per respondre és el dret
   de rèplica, que és gratuït, públic i igual per a tothom.
5. **Ni publicitat ni afiliació.** El lloc no té publicitat, ni enllaços
   d'afiliació, ni comissions per recomanació. Si algun dia recomanés una
   alternativa concreta, ho faria sense cobrar-ne res, i el criteri seria
   públic.
6. **Model de finançament declarat.** El projecte l'autofinança New Spirit
   Studio, S.L. amb recursos propis. Qualsevol ingrés extern futur —un ajut
   públic, una subvenció, una donació— es declara a la política editorial amb
   l'organisme, l'import i l'any **abans** que aquests diners afectin cap
   fitxa. Un finançament que condicioni quines empreses s'analitzen o què se'n
   diu no s'accepta, vingui d'on vingui.

**Declaració vigent a la data d'aquesta versió:** cap de les vint-i-cinc
aplicacions del corpus inicial, ni les empreses que les publiquen, ni les seves
matrius, no són ni han estat clients de New Spirit Studio, S.L. Si això canvia,
canvia aquesta línia i s'aplica la regla 2.

---

## 4. Compromís de permanència de les dades

El conjunt de dades és, i continuarà sent, **CC BY-SA 4.0**. Això és
irrevocable per als continguts ja publicats: una llicència Creative Commons
concedida no es pot retirar, i no pretenem trobar-hi la lletra petita.

A més, l'entitat es compromet a:

- **Mantenir les exportacions obertes** (JSON i CSV, a `/dades`) accessibles
  sense registre, sense clau i sense límit d'ús.
- **No degradar-les**: cap versió futura no publicarà menys camps que els que
  ja s'han publicat, llevat que un camp desaparegui del model sencer.
- **Avisar amb 90 dies** abans de qualsevol canvi que trenqui el format de les
  exportacions.

**Clàusula de continuïtat.** Si el projecte s'atura, si l'entitat es dissol o
si es transmet a un tercer, el compromís és dipositar la darrera versió
completa del conjunt de dades i del codi en un repositori públic d'accés lliure
allotjat fora de la infraestructura pròpia, amb les mateixes llicències. Un
projecte que demana transparència a les altres empreses no pot desaparèixer
enduent-se les dades.

---

## 5. Com participar-hi

- **Correccions i dades noves:** incidència al repositori públic, o el
  formulari de correccions del lloc. S'hi aplica la política editorial.
- **Rèpliques d'empreses documentades:** la via de la política editorial, amb
  els terminis que hi consten.
- **Reutilització:** no cal avisar. Només atribuir i compartir igual, tal com
  diu `LICENSE-CONTENT`.

---

## 6. Revisió

Aquest document es revisa un cop l'any i sempre que s'incorpori un membre nou
al consell, que aparegui un conflicte d'interessos nou o que canviï la forma
jurídica de l'entitat. Les versions anteriors queden a l'historial del
repositori.
