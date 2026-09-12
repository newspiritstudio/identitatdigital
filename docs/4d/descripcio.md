# Identitat.digital — descripció del projecte

**Entitat sol·licitant:** New Spirit Studio, S.L. · NIF B75352872 · Sabadell
**Repositori públic:** <https://github.com/newspiritstudio/identitatdigital>
**Llicències:** codi MIT · contingut CC BY-SA 4.0
**Data del document:** 12 de setembre de 2026

---

## El problema

Quan algú vol saber què fa realment una aplicació amb les seves dades, les
opcions són tres i cap no funciona en català.

La primera és llegir-se la política de privadesa. Són desenes de milers de
paraules escrites per advocats per a advocats, en anglès o en un castellà
traduït. Gairebé ningú no ho fa.

La segona és buscar-ho a internet, on hi ha articles antics, contingut
promocional pagat i comparatives d'afiliació, i cap manera de saber quin dia es
va comprovar res.

La tercera és confiar en un directori internacional. N'hi ha de bons, però estan
en anglès, cobreixen sobretot el mercat nord-americà, no incorporen les
resolucions de les autoritats europees ni de l'Agència Espanyola de Protecció de
Dades i no tracten la llengua com una dimensió rellevant.

El resultat és que una decisió que afecta drets fonamentals es pren sense
informació. Qui la pren en nom d'altres, com una escola que tria una aplicació
per a les aules o un ajuntament que obre un canal de missatgeria, no té cap
document en català al qual agafar-se.

## Què és Identitat.digital

Una base de coneixement pública i en català sobre què fan les aplicacions amb
les dades de les persones. És una base de dades verificada: cada afirmació porta
el seu estat, el seu nivell d'evidència, la data en què la vam comprovar i
l'enllaç al document que la sosté.

A dia d'avui conté 25 aplicacions documentades, 29 empreses i filials amb la
seva cadena de propietat, 101 fonts citades, 23 incidents i sancions
d'autoritats de control, 46 tipus de dada classificats per sensibilitat i 1.035
filtracions importades del catàleg de Have I Been Pwned i traduïdes al
vocabulari del projecte. Tot és consultable, i tot es pot descarregar.

### Regles del mètode

La primera és que cap afirmació rellevant no es publica sense font. No és una
declaració d'intencions sinó una restricció del model de dades: el camp
d'evidència és obligatori, i una fitxa amb una afirmació òrfena no es pot desar.

La segona és que desconegut no vol dir dolent. El que no hem pogut documentar es
marca com a desconegut i no mou la puntuació en cap direcció. El que baixa és el
grau de confiança de l'anàlisi, que es publica al costat de la nota. Una empresa
opaca no queda castigada per ser-ho; queda amb una anàlisi de confiança baixa.

La tercera és que tota puntuació és desmuntable. Cada xifra desa quins
indicadors hi entren, amb quin pes, amb quin valor i amb quina versió de
metodologia, de manera que qualsevol pot refer el càlcul o assenyalar en quin
indicador discrepa.

## Objectius

1. Que existeixi en català una font verificable sobre privadesa digital, amb el
   vocabulari fixat.
2. Que es pugui reutilitzar sense demanar permís. El conjunt sencer es publica en
   obert, en JSON i CSV, sota CC BY-SA 4.0, amb un compromís escrit de no
   degradar-lo i d'avisar amb 90 dies abans de trencar-ne el format.
3. Que serveixi per decidir. D'aquí surt el protocol de contractació per a
   escoles i ajuntaments: set passos, quatre clàusules mínimes de contracte
   d'encarregat del tractament i una fitxa generada per a cada aplicació, amb deu
   comprovacions i la seva base jurídica.
4. Que la disponibilitat en català quedi documentada. Cada fitxa desa si
   l'aplicació és en català, quants idiomes declara i quin dia es va comprovar,
   amb una font citable i repetible.

## On és la complexitat tècnica

**El model d'evidència.** El nucli del projecte és el tipus de camp que es
repeteix per tot el model de dades. Cada afirmació és una estructura amb estat
(sí, parcialment, no, desconegut, no aplica), nivell d'evidència (documentació
oficial, autoritat de control, anàlisi independent, premsa, valoració
editorial), detall en català, data de verificació i fonts enllaçades. No hi ha
cap camí per publicar una afirmació sense dir d'on surt.

**El motor de puntuació.** Quatre xifres de 0 a 100 (privadesa, seguretat,
control de la persona usuària i grau de confiança) calculades amb 38 indicadors
ponderats. Es recalcula abans de desar i desa una instantània després, de manera
que es pot reconstruir per què una nota va canviar i si va ser perquè l'empresa
va canviar o perquè vam canviar la manera de mesurar. La metodologia publicada es
genera des de les mateixes constants del codi, així que el document públic i el
motor de càlcul no poden divergir.

**L'anàlisi transversal.** Les preguntes que cap fitxa no pot respondre sola:
quines dades demana tothom, quins grups empresarials acaben concentrant
l'exposició un cop resolta la cadena de propietat, quins patrons foscos es
repeteixen, en quines jurisdiccions viuen les dades i com de fàcil és marxar. El
càlcul són funcions pures sobre el corpus sencer, amb proves pròpies.

**La traducció del vocabulari.** El catàleg de filtracions de Have I Been Pwned
arriba en anglès i amb categories pròpies. El projecte les fa correspondre als
seus tipus de dada, de manera que una filtració es llegeix amb les mateixes
paraules que una fitxa d'aplicació. És feina lenta i no existeix feta en català.

**Les eines que no envien res.** El generador de contrasenyes i de frases de pas
en català calcula l'entropia al navegador. La comprovació contra contrasenyes
filtrades fa servir k-anonimat: el navegador calcula el resum SHA-1 i n'envia
només els cinc primers caràcters hexadecimals, mai la contrasenya. La política de
seguretat de contingut del lloc és `connect-src 'self'`, de manera que cap pàgina
no pot connectar-se amb cap tercer.

## Què s'ha fet ja, sense finançament

El projecte ja funciona: model de dades complet, 25 fitxes documentades amb 101
fonts, motor de puntuació amb proves, anàlisi transversal, tres eines, nou
conjunts de dades oberts, protocol de contractació per a institucions, set
documents legals publicats, un document de governança amb regles de conflicte
d'interessos i un comprovador d'accessibilitat propi. Tot el codi i tot el
contingut són públics.

## Què faria possible el finançament

Passar de 25 a 100 aplicacions documentades és, sobretot, hores de lectura de
polítiques, de resolucions i de documentació tècnica. És la part que no es pot
automatitzar. El calendari adjunt detalla els lliurables.

## Independència

El projecte l'autofinança New Spirit Studio, S.L. amb recursos propis. No té
publicitat, ni enllaços d'afiliació, ni contingut patrocinat, ni cap pagament de
cap empresa documentada. Cap de les 25 aplicacions del corpus, ni les empreses
que les publiquen, ni les seves matrius, no són ni han estat clients nostres.
Les regles de conflicte d'interessos, la regla de desempat i la clàusula de
continuïtat de les dades si el projecte s'atura són públiques a
`docs/governanca.md`.
