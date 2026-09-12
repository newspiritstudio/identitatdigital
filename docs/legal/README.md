# Paquet legal d'Identitat.digital

Índex del conjunt de documents legals del projecte: què cobreix cadascun, què
queda pendent i quines decisions s'han pres i per què.

**Versió 1.1 · 12 de setembre de 2026**
**Titular:** New Spirit Studio S.L. · NIF B75352872

---

## 1. Què hi ha i on

### Documents publicables, al lloc web

| Ruta | Fitxer | Cobreix |
| --- | --- | --- |
| `/legal` | `src/app/(frontend)/legal/page.tsx` | Índex del paquet, amb el resum en una línia. |
| `/legal/avis-legal` | `legal/avis-legal/page.tsx` | Art. 10 LSSICE: identificació del titular, dades registrals, contacte, administració, assegurança, enllaços, disponibilitat, llei i jurisdicció. |
| `/legal/privadesa` | `legal/privadesa/page.tsx` | Arts. 12, 13 i 14 RGPD i LOPDGDD: taula de tractaments, bases jurídiques, terminis, destinataris, transferències, drets i reclamació davant l'AEPD. Inclou l'explicació detallada del k-anonimat. |
| `/legal/galetes` | `legal/galetes/page.tsx` | Art. 22.2 LSSICE i Guia de galetes de l'AEPD: per què no hi ha bàner, l'única galeta del sistema i com comprovar-ho. |
| `/legal/condicions` | `legal/condicions/page.tsx` | Condicions d'ús, amb exempcions específiques per al generador de contrasenyes i per a la comprovació de filtracions. |
| `/legal/llicencia` | `legal/llicencia/page.tsx` | Llicència del contingut, dret sui generis, avís d'exclusió de materials de tercers i ús nominatiu de marques alienes. |
| `/legal/politica-editorial` | `legal/politica-editorial/page.tsx` | Mètode, jerarquia d'evidència, correccions i dret de rèplica de les empreses documentades. |
| `/legal/accessibilitat` | `legal/accessibilitat/page.tsx` | EN 301 549 i WCAG 2.2 AA. Estat **parcialment conforme**, mètode d'autoavaluació amb el comprovador propi, tres excepcions conegudes, calendari i canal d'avisos. |

Peces compartides: `legal/parts.tsx` (metadades de document, marca de pendent,
contenidor de taules, blocs de resum i d'avís) i `legal/legal.module.css`.
**No s'ha tocat `styles.css` ni cap fitxer fora de `src/app/(frontend)/legal/` i
`docs/legal/`.**

### Documents interns, en aquest directori

| Fitxer | Cobreix |
| --- | --- |
| `registre-activitats-tractament.md` | Art. 30 RGPD. Cinc tractaments en format de fitxa, taula d'encarregats i justificació de per què l'exempció de l'art. 30.5 no s'aplica. |
| `analisi-de-riscos.md` | Art. 35 RGPD. Aplicació un per un dels nou criteris del WP248 rev.01, ponderació de l'interès legítim, mesures de l'art. 32, riscos residuals i disparadors de revisió. |
| `procediment-violacions-seguretat.md` | Arts. 33 i 34 RGPD. Qui decideix, el còmput de les 72 hores, sis escenaris amb la decisió de notificar ja presa, el contingut de la notificació a l'AEPD, la comunicació a les persones afectades i la plantilla del registre de l'art. 33.5. |
| `politica-copies-de-seguretat.md` | Art. 32.1.b i 32.1.c. Què es copia i què no, RPO i RTO, xifratge amb clau pròpia, immutabilitat, calendari de proves de restauració i procediment pas a pas. |
| `README.md` | Aquest document. |

A més, `docs/governanca.md` **sí que és públic** i està enllaçat des de
`LICENSE-CONTENT`, des de `/legal` i des de `/legal/llicencia`: diu qui decideix
què, com es tracta un conflicte d'interessos i què passa amb les dades si el
projecte s'atura.

### Com s'hi arriba

El peu de pàgina de `src/app/(frontend)/layout.tsx` porta la navegació als set
documents més l'índex, dins d'un `<nav aria-label="Informació legal">`, i la
identificació del titular. Aquesta identificació ha de continuar sent permanent i
accessible des de qualsevol pàgina: és el que exigeix l'art. 10 LSSICE, i moure-la
a una pàgina interior trencaria el compliment.

---

## 2. Llista completa de `[PENDENT: …]`

Ordenats per urgència. Els marcats com a **bloquejant** s'han de resoldre abans
de posar el lloc en producció.

### Bloquejants abans de producció

| # | Pendent | On surt |
| --- | --- | --- |
| 1 | **Proveïdor d'allotjament i ubicació física dels servidors.** Si algun servei es presta fora de l'EEE, cal documentar la decisió d'adequació o la garantia de l'art. 46. | `/legal/privadesa` §3.1, §6, §7 · `registre-activitats` T-01, T-02 |
| 2 | **Contractes d'encarregat del tractament de l'art. 28** amb allotjament, base de dades i correu, signats abans d'obrir el lloc. | `/legal/privadesa` §6 · `registre-activitats` (taula d'encarregats) · `analisi-de-riscos` §6 |
| 3 | **Retenció real dels registres del servidor** configurada pel proveïdor, alineada amb el criteri propi de 30 dies. | `/legal/privadesa` §3.1 · `registre-activitats` T-01 |
| 4 | **Proveïdor de correu de `admin@newspirit.studio`** i ubicació del servei. | `/legal/privadesa` §3.3 · `registre-activitats` T-03 |
| 5 | **Dades registrals al Registre Mercantil de Barcelona**: tom, foli, full i inscripció. Obligatòries per l'art. 10.1.a LSSICE. | `/legal/avis-legal` |

### Pendents de verificació quan hi hagi codi nou

| # | Pendent | On surt |
| --- | --- | --- |
| 6 | **Proves manuals de teclat i de lector de pantalla** abans del 31 de desembre de 2026, i **avaluació segons WCAG-EM** al primer trimestre de 2027. L'autoavaluació amb el comprovador propi ja està feta i publicada. | `/legal/accessibilitat` §4 |

### Decisions de negoci: preses

| # | Decisió | Com ha quedat | On surt |
| --- | --- | --- | --- |
| 8 | Condició de microempresa | Confirmada: cap persona contractada, els dos administradors al RETA i un volum de negoci molt per sota dels 2 M€. L'art. 4.5 de la Directiva 2019/882 és invocable com a argument subsidiari, però **no s'invoca**: la declaració s'assumeix igualment. | `/legal/accessibilitat` §2.2 |
| 9 | Model de finançament | Autofinançament amb recursos propis de New Spirit Studio S.L. Sense publicitat, patrocini ni afiliació. Qualsevol ingrés extern futur es declararà amb organisme, import i any abans d'afectar cap fitxa. | `/legal/politica-editorial` §1 · `docs/governanca.md` §3 regla 6 |
| 10 | Coincidència amb clients de l'estudi | Cap de les 25 aplicacions del corpus, ni les empreses que les publiquen, ni les seves matrius, no són ni han estat clients. El procediment per quan canviï —declaració, abstenció i publicitat a la fitxa— és a la governança. | `/legal/politica-editorial` §1 · `docs/governanca.md` §3 |
| 11 | Periodicitat de revisió | Sis mesos per als serveis amb més de cent milions de persones usuàries declarades, dotze per a la resta, i revisió immediata quan canvia la font, hi ha resolució d'un regulador, s'exerceix rèplica o algú assenyala un error. | `/legal/politica-editorial` §4 |

### Pendents que depenen de la infraestructura

| # | Pendent | On surt |
| --- | --- | --- |
| 12 | **Clàusula d'avís en 24 hores** als contractes de l'article 28, perquè un avís tardà d'un encarregat no es mengi el termini de 72 hores. | `procediment-violacions-seguretat` §11 |
| 13 | **Destinació de les còpies de seguretat**: proveïdor diferent del d'allotjament i amb servidors a l'EEE. Depèn del pendent núm. 1. | `politica-copies-de-seguretat` §3 |

---

## 3. Decisions preses, i per què

### 3.1. Llicència del contingut: **CC BY-SA 4.0**, amb un permís addicional per a mitjans

**Què es llicencia.** Les fitxes redactades, les anàlisis i els incidents, el
text de la metodologia, les puntuacions calculades i el seu desglossament,
l'estructura de la base de dades, la selecció i disposició del conjunt, i el
catàleg de fonts amb els seus resums.

**Quins drets.** Dret d'autor sobre obra literària (art. 10 TRLPI), dret d'autor
sobre col·leccions i bases de dades originals per la selecció o disposició del
contingut (art. 12 TRLPI) i **dret sui generis del fabricant de bases de dades**
(Directiva 96/9/CE i arts. 133 i ss. TRLPI).

**Per què 4.0 i no 3.0.** És la raó tècnica decisiva. Les llicències Creative
Commons 4.0 llicencien expressament els drets sui generis a la seva secció 4 i
tracten l'exercici d'aquests drets sobre la totalitat o una part substancial com
si fos una adaptació. Les 3.0 no ho feien: el dret sui generis hi quedava en un
territori ambigu, resolt de manera diferent a cada port jurisdiccional. Per a un
projecte que és essencialment una base de dades verificada, publicar amb una 3.0
deixaria sense llicenciar precisament el dret més rellevant, i la gent podria
copiar el text d'una fitxa però tenir problemes per reutilitzar el conjunt.

**Per què BY-SA i no BY.** BY fa circular més ràpid, però permet que algú
incorpori el corpus verificat a un producte tancat i no torni res. La inversió
del projecte és en verificació, que és justament el material que una empresa
d'extracció de dades voldria incorporar sense contribuir-hi. BY-SA garanteix
reciprocitat sense tancar cap porta comercial.

**Per què no BY-NC.** Per dues raons independents:

1. **Deixaria fora els mitjans**, que són gairebé tots empreses comercials, i la
   Viquipèdia, que és BY-SA i no pot incorporar material no comercial. Això
   contradiu directament l'objectiu del projecte.
2. **Trencaria la compatibilitat amb Have I Been Pwned**, que és CC BY 4.0.
   Presentar un conjunt que incorpora material BY sota una etiqueta «no
   comercial» comunicaria a qui el rep una restricció que sobre aquell material
   no existeix, i li faria impossible saber què pot fer servir comercialment.
   Amb BY-SA això no passa: les condicions són més exigents però no anul·len cap
   llibertat, i incorporar material BY 4.0 en un conjunt BY-SA 4.0 és net sempre
   que se'n mantingui l'atribució.

A això s'hi suma que «no comercial» no té definició clara i que la incertesa
desanima justament els usos que es volen afavorir.

**El cost de BY-SA, i com es compensa.** La clàusula de compartir igual genera
fricció: un mitjà pot témer que reproduir una taula li «contamini» l'article. La
por sol ser infundada —la clàusula afecta les obres derivades, no la mera
inclusió en una col·lecció, i el dret de citació i el dret d'informació de premsa
operen al marge de qualsevol llicència—, però és real i frena usos desitjables.

Per això s'ha redactat un **permís addicional** concedit pel titular en paral·lel
a la llicència: els mitjans poden reproduir fitxes, taules, puntuacions i gràfics
dins de peces informatives sense que la clàusula de compartir igual els afecti
la peça sencera, amb quatre condicions —citar amb enllaç, indicar la data de
consulta, no modificar ni descontextualitzar les dades, i no suggerir cap
relació. No retalla res: qui prefereixi la llicència CC BY-SA 4.0 la té
igualment íntegra.

**Guany net:** ús comercial permès, compatibilitat amb HIBP i amb la Viquipèdia,
dret sui generis cobert, reciprocitat garantida i via ràpida per al periodisme.
**Pèrdua:** algun reutilitzador que hauria preferit tancar la seva obra derivada
no ho podrà fer, cosa que és precisament el que es vol.

**El codi continua sent MIT.** És una llicència diferent per a una cosa diferent
i cal no confondre-les: el programa és MIT, el que hi ha escrit a dins és CC
BY-SA 4.0.

### 3.2. Materials exclosos de la llicència

Cap d'aquests no és nostre per sublicenciar:

1. **Logotips, icones, noms i marques** de les aplicacions i empreses
   analitzades. Marques registrades de tercers, obtingudes de l'API pública de
   consulta de l'App Store. A més, les llicències Creative Commons diuen
   expressament que no concedeixen cap dret sobre marques.
2. **Citacions literals de polítiques de privadesa, condicions i resolucions.**
   Es publiquen a l'empara del dret de citació (art. 32.1 TRLPI i art. 5.3.d de
   la Directiva 2001/29/CE) i no es poden sublicenciar. Qui les reutilitzi ho fa
   sota el seu propi dret de citació.
3. **El catàleg de filtracions de Have I Been Pwned**, que conserva la seva CC BY
   4.0 amb atribució i enllaç a haveibeenpwned.com. El que sí que és nostre i sí
   que és CC BY-SA és el lligam editorial: a quina empresa i a quines aplicacions
   correspon cada filtració i quins tipus de dada del nostre vocabulari hi van
   quedar exposats.
4. **La llista de paraules en català derivada del diccionari de Softcatalà.**
   Confirmat: el projecte *catalan-dict-tools* es distribueix amb **llicència dual
   GNU GPL v2 o posterior i GNU LGPL v2.1 o posterior**. És el cas més restrictiu
   dels quatre que s'havien previst, perquè és una llicència de programari i la
   compatibilitat entre llicències Creative Commons no hi serveix de res. S'hi
   aplica la solució prevista: la llista viu aïllada a
   `src/lib/passwords/wordlist.ca.ts`, s'exerceix l'opció de la **LGPL v2.1 o
   posterior** —la menys restrictiva de les dues que ofereix la font—, el fitxer
   porta la seva procedència escrita a `WORDLIST_META`, el generador
   `scripts/build-wordlist.ts` és públic al mateix repositori, cosa que satisfà
   l'exigència de la LGPL que la forma editable sigui accessible, i la llista
   queda expressament exclosa de la CC BY-SA. No contamina la resta perquè és un
   fitxer de dades independent, no un component enllaçat.
5. **La marca «Identitat.digital», «New Spirit Studio» i la identitat visual.**
6. **El contingut de tercers enllaçat.**

### 3.3. Ús nominatiu de marques alienes

Identificar un producte pel seu nom i pel seu logotip per parlar-ne no infringeix
la marca. El fonament és **l'art. 37 de la Llei 17/2001** per a les marques
espanyoles i **l'art. 14 del Reglament (UE) 2017/1001** per a les de la Unió:
tots dos estableixen que el titular no pot prohibir l'ús del signe fet per
identificar o referir-se a productes o serveis com a propis del titular,
especialment quan és necessari per indicar-ne la destinació.

La condició és que l'ús sigui conforme a les pràctiques lleials. El document
públic ho desglossa en quatre exigències amb el seu compliment: no suggerir
vincle comercial —es diu expressament i no s'accepta publicitat de cap empresa
documentada—, no aprofitar-se del renom —icones en miniatura, amb funció
identificativa—, no denigrar —tota afirmació negativa amb estat, nivell
d'evidència i fonts, i el que és desconegut no penalitza— i no usar-la a títol de
marca pròpia.

S'hi afegeix, com a reforç, la llibertat d'informació de l'art. 20.1.d CE, i el
compliment voluntari dels requisits de comparació de l'art. 10 de la Llei 3/1991
de competència deslleial, tot i que aquesta llei difícilment hi entra perquè el
projecte no competeix amb les empreses documentades.

### 3.4. Declaració d'accessibilitat: **voluntària**, i assumida igualment

Analitzades les tres normes possibles:

- **RD 1112/2018** (transposa la Directiva 2016/2102): àmbit **sector públic** i
  entitats privades amb finançament públic o funcions públiques. No aplica a un
  projecte privat sense finançament públic. És la norma que crearia l'obligació
  formal de declarar, i no hi arriba.
- **Directiva (UE) 2019/882 i Llei 11/2023**: sí que arriben al sector privat,
  però només a la llista tancada de productes i serveis del seu art. 2.
  Identitat.digital **no és comerç electrònic**, que la Directiva defineix com
  els serveis prestats a distància amb vista a la celebració d'un contracte amb
  una persona consumidora. Aquí no es contracta res, no es ven res, no s'obre cap
  compte i no hi ha cap pagament. Queda fora de l'àmbit. Subsidiàriament, l'art.
  4.5 exclou les microempreses que presten serveis (pendent núm. 11).
- **RDLeg 1/2013**: imposa un principi general de no-discriminació i
  accessibilitat universal i el deure d'ajustos raonables, que **sí que obliga**
  com a criteri de conducta, però sense conformitat tècnica concreta ni
  obligació de publicar cap declaració per a un lloc privat.

**Conclusió: cap norma obliga aquest lloc a publicar una declaració
d'accessibilitat.** S'assumeix igualment perquè l'accessibilitat és condició del
dret a la informació i perquè declarar-ho obliga a complir-ho.

La declaració es publica amb estat **«parcialment conforme»** (versió 1.0),
després de corregir les mancances que recollia l'esborrany anterior i de fer una
**autoavaluació** en dos passos: revisió manual del codi font i execució del
comprovador propi `scripts/check-accessibility.ts` contra el lloc publicat. El
comprovador recorre totes les pàgines públiques i aplica tretze famílies de
comprovacions, cadascuna citant el criteri de les WCAG 2.2 que la justifica.
L'última execució dona **78 pàgines i cap incidència**.

Aquesta xifra es publica amb el seu límit escrit al costat: vol dir que no hi ha
els errors que una eina automàtica detecta, i res més. Les eines automàtiques
troben entre un quart i un terç de les barreres reals, i per això l'estat és
«parcialment conforme» i no «conforme». Les tres excepcions conegudes —contingut
de tercers enllaçat, taules amples que exigeixen desplaçament horitzontal i el
panell d'administració de Payload, que no és nostre— consten a la declaració amb
el criteri que incompleixen. El calendari té dates: proves manuals de teclat i de
lector de pantalla abans del 31 de desembre de 2026 i avaluació WCAG-EM al primer
trimestre de 2027.

Signar una conformitat total sense avaluació externa seria una afirmació sense
suport.

### 3.5. Galetes: cap bàner, i el fonament

L'art. 22.2 LSSICE exigeix consentiment per emmagatzemar o recuperar informació a
l'equip terminal, amb excepció del que és estrictament necessari per prestar un
servei expressament sol·licitat. Aquí el raonament ni tan sols arriba a
l'excepció: **no hi ha cap galeta per a qui visita**, ni emmagatzematge local, ni
de sessió, ni IndexedDB, ni empremtes.

L'única galeta del sistema és la de sessió del gestor de continguts, que només
existeix quan algú de l'equip editorial inicia sessió a `/admin`. És una galeta
d'autenticació i cau dins l'excepció.

Es documenta amb la seva taula i s'explica com comprovar-ho en trenta segons amb
les eines del navegador. Un bàner que no demana consentiment per a res no informa
de res, i aquesta mena de decoració és part del problema que el projecte
documenta.

### 3.5 bis. L'emmagatzematge local de la calculadora d'exposició

Revisades les tres eines contra el codi publicat, **l'única escriptura al
dispositiu de tot el lloc** és la de la calculadora d'exposició, que desa la
llista d'aplicacions marcades a `localStorage` amb la clau
`identitat.exposicio.seleccio`. No hi ha res més: ni emmagatzematge de sessió, ni
IndexedDB, ni cap identificador.

**No necessita consentiment.** L'art. 22.2 LSSICE exigeix consentiment tret que
l'emmagatzematge sigui estrictament necessari per prestar un servei expressament
sol·licitat. Aquí la informació la genera qui fa servir l'eina, existeix perquè
l'eina serveixi per a alguna cosa entre visites, no surt del dispositiu, no
identifica ningú i s'esborra amb un botó de la mateixa pàgina.

Tot i això, s'ha documentat amb la clau exacta, la durada i la manera d'esborrar
la dada a `/legal/galetes`, `/legal/privadesa` §4.3 i `/legal/condicions` §4.3.
El criteri aplicat no és el mínim legal sinó el que el projecte exigeix a les
fitxes que analitza.

El comparador **no desa res al dispositiu**: posa la selecció a l'adreça de la
pàgina perquè l'enllaç es pugui compartir, i això es diu expressament perquè qui
el comparteixi sàpiga què comparteix.

### 3.6. Registre de l'art. 30: obligatori, i per què

L'exempció de l'art. 30.5 per a empreses de menys de 250 persones decau quan el
tractament no és ocasional. Els registres del servidor i els comptes del panell
són continuats. Per tant el registre és obligatori i s'ha redactat.

### 3.7. Avaluació d'impacte de l'art. 35: **no cal**

Zero dels nou criteris del WP248 rev.01 es compleixen, contra un llindar
orientatiu de dos. Els quatre que podrien semblar discutibles es tracten
expressament:

- **Puntuació:** es puntuen empreses, no persones. La calculadora d'exposició
  personal calcula al navegador, amb dades que ja són a la pàgina, i el resultat
  no arriba mai al servidor.
- **Dades sensibles:** la contrasenya no surt del dispositiu. Només se n'envien
  cinc caràcters hexadecimals del resum SHA-1, un prefix entre més d'un milió
  possibles que agrupa milers de contrasenyes diferents. No es desa ni es
  registra.
- **Observació sistemàtica:** no hi ha analítica, ni galetes, ni identificadors.
  I `connect-src 'self'` ho impedeix tècnicament.
- **Ús innovador:** el k-anonimat és una mesura de minimització que **evita** un
  tractament sensible que altres serveis equivalents sí que fan. No crea cap risc
  nou; n'elimina un de conegut.

També s'ha comprovat contra les llistes de l'AEPD dels arts. 35.4 i 35.5. La
decisió es revisa amb els deu disparadors de l'apartat 7 del document.

### 3.8. Delegat de protecció de dades: **no cal designar-ne cap**

No som autoritat pública, no observem ningú de manera habitual i sistemàtica a
gran escala —ho impedeix l'arquitectura— i no tractem dades dels arts. 9 o 10. No
encaixem en cap categoria de l'art. 34 LOPDGDD: en concret, som prestadors de
serveis de la societat de la informació però **no elaborem perfils a gran
escala**, que és la condició que activaria aquell apartat. S'ha designat un punt
de contacte únic.

### 3.9. Repositori públic, `NOTICE` i dades obertes

El repositori és **públic** des del 12 de setembre de 2026. Ho havia de ser: el
lloc afirma en cinc llocs diferents que el codi és obert i comprovable, i
mantenir-lo tancat convertia aquestes cinc afirmacions en el mateix tipus de
promesa no verificable que el projecte retreu a les empreses que documenta. Abans
d'obrir-lo es va escombrar l'historial sencer buscant secrets —`PAYLOAD_SECRET`,
cadenes de connexió amb credencials, claus d'API i capçaleres de clau privada— i
només hi ha `.env.example`.

Les exclusions de llicència de l'apartat 3.2 no viuen només a `/legal/llicencia`:
són al fitxer **`NOTICE`** de l'arrel, que enumera cada material exclòs amb la
seva base jurídica i que **forma part de les condicions** tant de `LICENSE`
(codi, MIT) com de `LICENSE-CONTENT` (contingut, CC BY-SA 4.0). Qui reutilitzi el
conjunt l'ha de conservar; és la manera que l'exclusió viatgi amb les dades i no
es quedi en una pàgina web que ningú no copia.

El conjunt de dades es publica en obert a `/dades`, en nou fitxers JSON i CSV amb
`Access-Control-Allow-Origin: *`. Això tanca el pendent núm. 7 de la versió
anterior i, sobretot, canvia la naturalesa de la restricció d'extraccions
massives de `/legal/condicions` §5: ja no es demana moderació sense oferir
alternativa, sinó que s'ofereix la via bona. La contrapartida assumida és el
compromís de permanència de `docs/governanca.md` §4: no degradar els camps
publicats i avisar amb 90 dies abans de trencar el format.

### 3.10. Estil

Els documents estan escrits en frases curtes i veu activa, amb l'explicació abans
de la cita normativa. Cada document porta versió i data. Cada afirmació tècnica
és comprovable al codi o a les capçaleres HTTP. Les debilitats conegudes (la
política de seguretat de contingut amb `'unsafe-inline'`, la traça residual de la
comprovació de contrasenyes als registres) consten als documents.

---

## 4. Manteniment

- **Cada document porta versió i data** al capdamunt. Cal actualitzar-les amb
  cada canvi substantiu.
- **La política de privadesa s'actualitza abans**, no després, d'activar
  qualsevol funció que impliqui tractar dades noves.
- **El registre d'activitats i l'anàlisi de riscos** es revisen com a mínim un
  cop l'any, i immediatament amb qualsevol dels disparadors de l'apartat 7 de
  `analisi-de-riscos.md`.
- **La governança es revisa un cop l'any** i sempre que canviï el consell
  editorial, aparegui un conflicte d'interessos nou o canviï el model de
  finançament. Si canvia, canvia també la declaració de l'apartat 1 de
  `/legal/politica-editorial`.
- **L'accessibilitat es torna a comprovar amb `pnpm check-a11y`** a cada canvi
  substancial del lloc, i com a mínim un cop l'any. Un resultat nou obliga a
  revisar `/legal/accessibilitat`.
- **Els documents publicables i el codi han de dir el mateix.** Aquesta és la
  premissa de tot el paquet: qualsevol canvi al codi que afecti la privadesa o la
  seguretat obliga a revisar `/legal/privadesa`, `/legal/galetes` i
  `analisi-de-riscos.md`.
