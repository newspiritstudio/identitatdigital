# Identitat.digital — descripció del projecte

**Entitat sol·licitant:** New Spirit Studio, S.L. · NIF B75352872 · Sabadell
**Repositori públic:** <https://github.com/newspiritstudio/identitatdigital>
**Llicències:** codi MIT · contingut CC BY-SA 4.0
**Data del document:** 12 de setembre de 2026

---

## El problema

Quan algú vol saber què fa realment una aplicació amb les seves dades, les
opcions són tres i cap no funciona en català.

La primera és **llegir-se la política de privadesa**. Són desenes de milers de
paraules escrites per advocats per a advocats, redactades en anglès o en un
castellà traduït, i dissenyades perquè la conclusió no s'entengui. Ningú no ho
fa, i les empreses compten que ningú no ho farà.

La segona és **buscar-ho a internet**, on es troba una barreja d'articles
antics, contingut promocional pagat i comparatives d'afiliació. No hi ha manera
de saber quin dia es va comprovar cap de les afirmacions.

La tercera és **confiar en un directori internacional**. N'hi ha de bons, però
estan en anglès, cobreixen el mercat nord-americà, no incorporen les resolucions
de les autoritats europees ni de l'Agència Espanyola de Protecció de Dades i,
sobretot, no tracten la llengua com una dimensió que importi.

El resultat és que **una decisió que afecta drets fonamentals es pren a cegues**,
i que qui la pren en nom d'altres —una escola que tria una aplicació per a les
aules, un ajuntament que obre un canal de missatgeria, una família— no té cap
document en català al qual agafar-se.

## Què és Identitat.digital

Una base de coneixement pública i en català sobre què fan les aplicacions amb
les dades de les persones. No és una llista d'opinions: és **una base de dades
verificada** on cada afirmació porta el seu estat, el seu nivell d'evidència, la
data en què la vam comprovar i l'enllaç al document que la sosté.

A dia d'avui conté 25 aplicacions documentades, 29 empreses i filials amb la
seva cadena de propietat, 101 fonts citades, 23 incidents i sancions
d'autoritats de control, 46 tipus de dada classificats per sensibilitat i 1.035
filtracions importades del catàleg de Have I Been Pwned i traduïdes al
vocabulari del projecte. Tot és consultable, i tot es pot descarregar.

### Les tres regles que el fan diferent

**Cap afirmació important sense font.** No és una aspiració: és una restricció
del model de dades. El camp d'evidència és obligatori a totes les afirmacions
rellevants, de manera que tècnicament no es pot publicar una fitxa amb una
afirmació òrfena.

**Desconegut no vol dir dolent.** El que no hem pogut documentar es marca com a
desconegut i **no mou la puntuació en cap direcció**. El que baixa és el grau de
confiança de l'anàlisi, que es publica al costat de la nota. Una empresa opaca no
queda castigada per ser opaca; queda amb una anàlisi de confiança baixa, que és
exactament el que és. Aquesta distinció és el que separa una base de dades d'una
campanya.

**Tota puntuació és desmuntable.** Cada xifra desa el desglossament complet:
quins indicadors hi entren, amb quin pes, amb quin valor i amb quina versió de
metodologia. Qualsevol persona pot refer el càlcul o assenyalar exactament en
quin indicador discrepa.

## Objectius

1. **Que existeixi en català una font verificable sobre privadesa digital**, amb
   el vocabulari fixat, que ara mateix no existeix en cap llengua d'àmbit
   comparable.
2. **Que es pugui reutilitzar sense demanar permís.** El conjunt sencer es
   publica en obert, en JSON i CSV, sota CC BY-SA 4.0, amb un compromís escrit
   de no degradar-lo i d'avisar amb 90 dies abans de trencar-ne el format.
3. **Que serveixi per decidir, no només per llegir.** D'aquí surt el protocol de
   contractació per a escoles i ajuntaments: set passos, quatre clàusules
   mínimes de contracte d'encarregat del tractament i una fitxa generada per a
   cada aplicació, amb deu comprovacions i la seva base jurídica.
4. **Que la llengua sigui una dimensió documentada i no una queixa.** Cada fitxa
   desa si l'aplicació és en català, quants idiomes declara i quin dia es va
   comprovar, amb una font citable i repetible.

## Complexitat: on és la feina de debò

**El model d'evidència.** El nucli tècnic no és el lloc web: és el tipus de camp
que es repeteix per tot el model. Cada afirmació és una estructura amb estat
—sí, parcialment, no, desconegut, no aplica—, nivell d'evidència —documentació
oficial, autoritat de control, anàlisi independent, premsa, valoració
editorial—, detall en català, data de verificació i fonts enllaçades. Aquesta
decisió obliga tota la resta del sistema a ser honest, perquè no hi ha cap camí
per publicar una afirmació sense dir d'on surt.

**El motor de puntuació.** Quatre xifres de 0 a 100 —privadesa, seguretat,
control de la persona usuària i grau de confiança— calculades amb 38 indicadors
ponderats. Es recalcula abans de desar i desa una instantània després, de manera
que es pot reconstruir per què una nota va canviar i si va ser perquè l'empresa
va canviar o perquè vam canviar nosaltres la manera de mesurar. La metodologia
publicada es genera des de les mateixes constants del codi: el document públic i
el motor de càlcul no poden divergir en silenci.

**L'anàlisi transversal.** Les preguntes que cap fitxa no pot respondre sola:
quines dades demana tothom, quins grups empresarials acaben concentrant
l'exposició un cop resolta la cadena de propietat, quins patrons foscos es
repeteixen, en quines jurisdiccions viuen les dades i com de fàcil és marxar.
Tot el càlcul és de funcions pures sobre el corpus sencer, amb proves pròpies:
mateixes dades, mateix resultat, sempre.

**La traducció del vocabulari.** El catàleg de filtracions de Have I Been Pwned
arriba en anglès i amb categories pròpies. El projecte les fa correspondre als
seus tipus de dada, de manera que una filtració es llegeix amb les mateixes
paraules que una fitxa d'aplicació. És una feina invisible i és exactament la que
no existeix enlloc més en català.

**Les eines que no envien res.** El generador de contrasenyes i de frases de pas
en català calcula l'entropia real al navegador. La comprovació contra
contrasenyes filtrades fa servir **k-anonimat**: el navegador calcula el resum
SHA-1 i n'envia només els cinc primers caràcters hexadecimals, mai la
contrasenya. La política de seguretat de contingut del lloc és `connect-src
'self'`, de manera que cap pàgina no pot parlar amb cap tercer ni que ho volgués.

## Què s'ha fet ja, sense finançament

El projecte no arriba a la convocatòria com una idea. Ja funciona: model de
dades complet, 25 fitxes documentades amb 101 fonts, motor de puntuació amb
proves, anàlisi transversal, tres eines pràctiques, nou conjunts de dades
oberts, protocol de contractació per a institucions, set documents legals
publicats, un document de governança amb regles de conflicte d'interessos que
ens incomoden a nosaltres i un comprovador d'accessibilitat propi. Tot el codi i
tot el contingut són públics.

## Què faria possible el finançament

Escalar de 25 a **100 aplicacions documentades** és, sobretot, hores de lectura
de polítiques, de resolucions i de documentació tècnica. És la part que no es pot
automatitzar i és la que decideix si el projecte és una demostració o una font
que la gent pot fer servir. El calendari adjunt detalla els lliurables.

## Independència

El projecte l'autofinança New Spirit Studio, S.L. amb recursos propis. No té
publicitat, ni enllaços d'afiliació, ni contingut patrocinat, ni cap pagament de
cap empresa documentada. Cap de les 25 aplicacions del corpus, ni les empreses
que les publiquen, ni les seves matrius, no són ni han estat clients nostres.
Les regles de conflicte d'interessos, la regla de desempat i la clàusula de
continuïtat de les dades si el projecte s'atura són públiques a
`docs/governanca.md`.
