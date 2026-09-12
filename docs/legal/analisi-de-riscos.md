# Anàlisi de riscos i valoració de la necessitat d'una avaluació d'impacte

**Responsable:** New Spirit Studio S.L. · NIF B75352872
**Document intern.** Article 35 del Reglament (UE) 2016/679.
**Versió 1.0 · 12 de setembre de 2026**

---

## 1. Conclusió

**No cal fer una avaluació d'impacte relativa a la protecció de dades.**

Els tractaments del projecte no compleixen cap dels nou criteris de les
Directrius WP248 rev.01 del Grup de Treball de l'article 29, adoptades pel Comitè
Europeu de Protecció de Dades, ni figuren a la llista de tipus de tractament que
requereixen avaluació d'impacte publicada per l'Agència Espanyola de Protecció de
Dades en aplicació de l'article 35.4.

Aquest document deixa constància del raonament, perquè l'article 5.2 exigeix
poder demostrar el compliment i la decisió de **no** fer una avaluació d'impacte
també s'ha de poder justificar. La decisió es revisa amb els disparadors de
l'apartat 7.

## 2. Sobre el delegat de protecció de dades

**No se n'ha designat cap**, i tampoc no calia.

L'article 37.1 obliga en tres supòsits:

- **Autoritat o organisme públic.** No ho som.
- **Observació habitual i sistemàtica d'interessats a gran escala com a activitat
  principal.** No observem ningú. No hi ha analítica, ni galetes per a qui
  visita, ni identificadors persistents, ni empremtes de dispositiu, ni
  rastrejadors de tercers. La política de seguretat de contingut impedeix
  tècnicament al navegador connectar-se a cap servidor extern.
- **Tractament a gran escala de dades de l'article 9 o de l'article 10 com a
  activitat principal.** No en tractem.

L'article 34 de la Llei orgànica 3/2018 afegeix una llista d'entitats obligades
—entre altres, entitats de crèdit, asseguradores, prestadors de serveis de la
societat de la informació que elaborin perfils a gran escala, operadors de
comunicacions electròniques, centres sanitaris o educatius. New Spirit Studio
S.L. no encaixa en cap categoria. En concret, som prestadors de serveis de la
societat de la informació, però **no elaborem perfils de les persones usuàries a
gran escala**, que és la condició que activa aquell apartat.

S'ha designat un punt de contacte únic, `admin@newspirit.studio`, que arriba
directament als administradors mancomunats.

## 3. Aplicació dels nou criteris del WP248 rev.01

Les Directrius estableixen que un tractament que compleix **dos o més** criteris
requereix, en general, una avaluació d'impacte. Amb un de sol cal valorar-ho cas
per cas. Aquesta és l'aplicació, un per un, als tractaments del registre
d'activitats.

### Criteri 1 · Avaluació o puntuació, inclosa l'elaboració de perfils i la predicció

**No es compleix.**

El projecte puntua **empreses i serveis**, no persones. Les puntuacions de
privadesa, seguretat, control i confiança es calculen sobre el comportament
documentat d'una aplicació, i les empreses no són persones físiques: les seves
dades no són dades personals i el Reglament no hi entra.

L'excepció aparent és la calculadora d'exposició personal, que sí que produeix un
resultat sobre la situació de qui la fa servir. Ara bé, el càlcul passa
**íntegrament dins del navegador**, a partir de dades que ja són a la pàgina, i
ni la selecció ni el resultat arriben al nostre servidor. No hi ha tractament per
part nostra: el que fa una persona amb el seu propi dispositiu amb dades seves
queda fora de l'àmbit del Reglament per la via de l'article 2.2.c. No conservem
res, no ho creuem amb res i no en podem derivar cap decisió.

### Criteri 2 · Decisions automatitzades amb efecte jurídic o efecte significatiu similar

**No es compleix.**

No es pren cap decisió sobre cap persona. No hi ha concessió ni denegació de
res: no hi ha comptes, ni serveis a atorgar, ni preus, ni accés condicionat. Les
puntuacions publicades s'adrecen a empreses i no produeixen cap efecte jurídic
sobre cap persona física. L'article 22 no és aplicable.

### Criteri 3 · Observació sistemàtica

**No es compleix, i de manera comprovable.**

No hi ha cap sistema d'analítica instal·lat, ni Google Analytics ni cap
alternativa. No hi ha galetes per a qui visita. No hi ha píxels, ni balises, ni
scripts de tercers, ni tipografies externes, ni contingut incrustat. La política
de seguretat de contingut fixa `connect-src 'self'`, de manera que el navegador
no pot obrir cap connexió a un domini extern encara que hi hagués codi que ho
intentés. La capçalera `Permissions-Policy` desactiva a més l'API
`browsing-topics`.

Els registres del servidor no són observació sistemàtica en el sentit del
criteri: no es reconstrueixen sessions, no es perfila ningú, no hi ha
identificador estable i no s'exploten estadísticament.

### Criteri 4 · Dades sensibles o de naturalesa altament personal

**No es compleix.**

No es tracten dades de l'article 9 ni de l'article 10.

El punt que mereix anàlisi és la comprovació de contrasenyes filtrades, perquè
una contrasenya sí que és una dada d'aquesta naturalesa. El disseny està fet
precisament per no arribar a tractar-la:

1. La contrasenya no surt del camp del formulari, que viu al navegador.
2. El resum SHA-1 es calcula al dispositiu.
3. Només se n'envien els **cinc primers caràcters hexadecimals** a una ruta del
   nostre servidor. Cinc caràcters hexadecimals identifiquen un prefix entre
   1.048.576 de possibles; cada prefix agrupa milers de contrasenyes diferents.
4. El servidor reenvia aquell prefix, i res més, a `api.pwnedpasswords.com`.
5. La comparació del resum sencer contra la llista rebuda es fa al navegador.

El prefix, aïllat, no permet identificar cap persona ni cap contrasenya. No és
una dada personal en el sentit de l'article 4.1 i no es desa ni es registra
enlloc. Ni nosaltres ni Have I Been Pwned rebem mai la contrasenya ni el resum
complet. El disseny amb intermediari hi afegeix una garantia més: Have I Been
Pwned no arriba a veure l'adreça IP de qui consulta.

L'única traça residual és que la petició HTTP arriba al nostre servidor i pot
deixar rastre als registres del T-01 en els mateixos termes que qualsevol altra
petició: adreça IP, data i ruta. Consta al registre d'activitats i a la política
de privadesa.

### Criteri 5 · Dades tractades a gran escala

**No es compleix.**

Els factors del WP248 són el nombre de persones afectades, el volum i la varietat
de dades, la durada i l'abast geogràfic. Aquí: els registres tècnics d'un lloc
de consulta, amb una única categoria de dada de connexió, conservats trenta dies;
i un equip editorial de poques persones. No hi ha cap base de dades de persones
usuàries, perquè no hi ha persones usuàries registrades.

### Criteri 6 · Creuament o combinació de conjunts de dades

**No es compleix.**

El projecte sí que creua conjunts de dades —fitxes, empreses, filtracions,
incidents, fonts—, però **cap d'aquests conjunts conté dades personals** de qui
visita el lloc. Són dades sobre empreses i sobre serveis. Els registres del
servidor no es creuen amb res ni amb ningú.

### Criteri 7 · Dades d'interessats vulnerables

**No es compleix.**

No hi ha relació de desequilibri amb ningú: no hi ha comptes, ni contracte, ni
relació laboral, ni relació assistencial. El lloc no s'adreça a menors i no en
recull dades, perquè no en recull de ningú. La relació amb l'equip editorial sí
que és laboral o de col·laboració, però el tractament es limita a les dades
mínimes d'autenticació i no comporta cap control de l'activitat de les persones
més enllà de l'autoria dels canvis editorials, que és inherent a la feina.

### Criteri 8 · Ús innovador o aplicació de noves solucions tecnològiques

**No es compleix, però mereix explicació.**

El k-anonimat és una tècnica poc habitual en llocs web generalistes, i es podria
argumentar que és un ús innovador. L'anàlisi és la contrària: el criteri del
WP248 apunta a tecnologies que **creen** riscos nous i desconeguts per als drets
—biometria, internet de les coses, intel·ligència artificial aplicada a decisions
sobre persones. Aquí la tècnica s'aplica exactament en la direcció oposada: és
una mesura de minimització que **evita** el tractament d'una dada sensible que
altres serveis equivalents sí que tracten. No introdueix cap risc nou; n'elimina
un de conegut.

La resta de la pila —Next.js, Payload, MongoDB— és tecnologia convencional i
madura.

### Criteri 9 · Impedir l'exercici d'un dret o l'ús d'un servei o contracte

**No es compleix.**

L'accés al lloc és lliure, gratuït i incondicional. No hi ha res que es pugui
denegar a ningú a partir de cap dada.

### Recompte

| Criteri | Es compleix |
| --- | --- |
| 1 · Avaluació o puntuació | No |
| 2 · Decisions automatitzades | No |
| 3 · Observació sistemàtica | No |
| 4 · Dades sensibles | No |
| 5 · Gran escala | No |
| 6 · Creuament de conjunts | No |
| 7 · Interessats vulnerables | No |
| 8 · Ús innovador | No |
| 9 · Impediment d'un dret o servei | No |

**Zero criteris de nou.** El llindar orientatiu de dos no s'assoleix ni de lluny.

## 3 bis · Llistes de l'Agència Espanyola de Protecció de Dades

L'article 35.4 obliga les autoritats de control a publicar la llista de
tractaments que requereixen avaluació d'impacte. La llista de l'Agència Espanyola
de Protecció de Dades recull, entre d'altres, els tractaments amb perfilat o
valoració de persones, els que impliquen observació sistemàtica, els de dades
sensibles o de naturalesa altament personal, els de gran escala, els que
utilitzen dades biomètriques o genètiques, els que impliquen transferències fora
de l'Espai Econòmic Europeu sense garanties, els d'interessats vulnerables i els
que impedeixen l'exercici de drets. També exigeix avaluació quan concorren dos o
més criteris.

Cap tractament del registre d'activitats hi encaixa.

En sentit contrari, l'article 35.5 permet publicar una llista de tractaments que
**no** requereixen avaluació, i la gestió de personal propi i les activitats
administratives internes de baixa escala hi solen figurar. Els tractaments T-02,
T-03 i T-05 hi encaixen amb naturalitat.

## 4. Ponderació de l'interès legítim (article 6.1.f)

Dos tractaments es basen en l'interès legítim i necessiten la ponderació del
considerant 47.

### T-01 · Registres del servidor

**Interès perseguit.** Mantenir el servei disponible, detectar atacs i
diagnosticar errades. És un interès legítim reconegut expressament pel
considerant 49, que cita la seguretat de la xarxa i de la informació.

**Necessitat.** No hi ha manera de servir una pàgina web sense processar l'adreça
IP de qui la demana, perquè és el destí de la resposta. Registrar-la
temporalment és el mínim necessari per poder identificar un patró d'abús. No hi
ha cap alternativa menys invasiva que permeti el mateix resultat.

**Equilibri.** L'impacte és molt baix: no hi ha identificació de cap persona, no
hi ha perfilat, no hi ha creuament, no hi ha explotació estadística, no hi ha
cessió a tercers amb finalitat comercial i la conservació és curta. Una persona
que visita un lloc web espera raonablement que el servidor registri la petició;
aquesta és, de fet, l'expectativa estàndard. Les garanties addicionals són el
termini de trenta dies, la restricció d'accés i l'absència de qualsevol ús
secundari.

**Resultat.** L'interès legítim preval. Hi ha dret d'oposició per motius de la
situació particular, tot i que a la pràctica no hi ha manera de vincular una
petició a una persona per atendre-la de manera selectiva; ho direm així si arriba
el cas.

### T-04 · Publicació editorial

**Interès perseguit.** La llibertat d'informació de l'article 20.1.d de la
Constitució, en l'àmbit del tractament de dades personals per part de serveis
digitals utilitzats per milions de persones.

**Necessitat.** No es pot documentar una sanció sense identificar-ne els
protagonistes quan la font oficial ja els identifica. La dada s'utilitza
exclusivament en la mesura necessària per entendre el fet.

**Equilibri.** Les persones que hi apareixen ho fan per la seva funció
professional o pública, no per la seva vida privada; la dada ja és pública en una
font oficial; la informació té interès públic evident; i hi ha garanties
reforçades: verificació prèvia, fonts citades, estat i nivell d'evidència a cada
afirmació, procediment de correcció amb terminis i dret de rèplica amb publicació
de la posició contrària. No es publiquen dades de categories especials, ni de
menors, ni res que no consti a una font citada.

**Resultat.** L'interès legítim preval, amb el marc de conciliació de l'article
85 del Reglament i la doctrina constitucional sobre interès públic, veracitat
entesa com a diligència, i absència d'expressions vexatòries.

## 5. Mesures tècniques i organitzatives (article 32)

Totes són verificables al codi o a les capçaleres de resposta del servidor.

### Transport i capçaleres

| Mesura | Valor | Què protegeix |
| --- | --- | --- |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Força HTTPS durant dos anys, inclosos els subdominis, amb sol·licitud d'inclusió a la llista de precàrrega dels navegadors. Elimina la finestra del primer accés en clar. |
| `Content-Security-Policy` | `default-src 'self'`, `connect-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'self'`, `worker-src 'self' blob:`, `font-src 'self' data:`, `img-src 'self' data: blob: https:` | Redueix la superfície d'injecció de codi i **impedeix tècnicament la connexió a servidors de tercers**. És la mesura que fa comprovable l'absència de rastrejadors. |
| `X-Content-Type-Options` | `nosniff` | Evita la interpretació errònia del tipus de contingut. |
| `X-Frame-Options` | `SAMEORIGIN` | Evita el segrest de clics des d'un altre lloc. |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | En sortir cap a un altre lloc no se li envia la ruta exacta que s'estava llegint, només l'origen. En un lloc sobre privadesa, això no és menor. |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), browsing-topics=()` | Desactiva funcions sensibles i, expressament, l'API de publicitat basada en interessos de Chrome. |
| `Cross-Origin-Opener-Policy` | `same-origin` | Aïlla el context de navegació. |

El panell d'administració té una política de seguretat de contingut pròpia que
admet `'unsafe-eval'`, perquè l'editor de text enriquit ho necessita. L'excepció
està confinada a `/admin/*` i no debilita el web públic.

### Aplicació i dades

- Contrasenyes del panell desades com a resum criptogràfic amb sal, mai en clar.
- Sessió de 8 hores. Bloqueig de 10 minuts després de 5 intents fallits.
- Separació de rols: una persona editora no pot promocionar-se a administradora,
  perquè el camp de rol té control d'accés propi.
- Els esborranys no arriben mai al web públic: el control d'accés públic filtra
  per estat publicat.
- L'API GraphQL està desactivada per defecte i el seu entorn de proves està
  desactivat en producció.
- L'aplicació es nega a arrencar si falta una variable crítica, si la clau de
  signatura té menys de 32 caràcters o si en producció l'adreça del lloc no fa
  servir HTTPS.
- Les pàgines públiques es generen al servidor i el navegador no executa cap codi
  de tercers.
- La biblioteca multimèdia només accepta una llista tancada de tipus de fitxer.

### Organitzatives

- **Procediment escrit de gestió de violacions de seguretat**, a
  [`procediment-violacions-seguretat.md`](procediment-violacions-seguretat.md):
  qui decideix, el còmput de les 72 hores i sis escenaris amb la decisió de
  notificar ja presa. Es prova un cop l'any amb un simulacre.
- **Política de còpies de seguretat i continuïtat**, a
  [`politica-copies-de-seguretat.md`](politica-copies-de-seguretat.md): què es
  copia i què deliberadament no, xifratge amb clau pròpia abans de sortir de la
  màquina, retenció immutable i calendari de proves de restauració.
- Equip reduït amb comptes nominals. No hi ha comptes compartits.
- El contingut editorial viu al repositori com a codi revisable, de manera que
  tot canvi queda traçat amb el seu autor i la seva data.
- Punt de contacte únic per a privadesa, seguretat, accessibilitat i
  rectificacions.
- Pòlissa de responsabilitat civil professional Zurich 00000165177759, amb
  garantia específica de protecció de dades de 100.000 €.

## 6. Riscos residuals identificats

| Risc | Valoració | Mitigació prevista |
| --- | --- | --- |
| La política de seguretat de contingut admet `'unsafe-inline'` per a scripts i estils, cosa que en redueix l'eficàcia davant d'injeccions de codi. | Mitjà en impacte, baix en probabilitat: el lloc públic no accepta cap entrada de text de qui el visita i no hi ha sessions de persones usuàries per segrestar. | Substituir-ho per valors únics per petició quan el lloc tingui el disseny definitiu. |
| `img-src` admet qualsevol origen HTTPS. | Baix. Permetria carregar una imatge externa que filtrés l'adreça IP de qui visita cap a un tercer. Avui totes les imatges són locals. | Restringir `img-src` a `'self' data:` i als amfitrions concrets que calguin. |
| Dependència d'un tercer per a la comprovació de contrasenyes. | Baix per a la privadesa —no hi viatja cap dada personal—, mitjà per a la disponibilitat. | Gestió d'errors visible a la interfície i avís exprés a les condicions d'ús. |
| Terminis reals de conservació dels registres no controlats directament. | Per determinar. | `[PENDENT: contractar i configurar l'allotjament amb una retenció de registres alineada amb el criteri de 30 dies]` |
| Absència de contractes d'encarregat signats. | Alt si es posa en producció sense resoldre'l. | `[PENDENT: signar els contractes de l'article 28 amb tots els proveïdors abans de la posada en producció]` |
| Destinació de les còpies de seguretat no contractada. | Mitjà, per a la disponibilitat i la integritat de l'article 32.1.b. L'estratègia ja està definida a [`politica-copies-de-seguretat.md`](politica-copies-de-seguretat.md); el que falta és el proveïdor. | `[PENDENT: contractar una destinació de còpies amb servidors a l'EEE i diferent del proveïdor d'allotjament]` |
| Avís tardà d'un encarregat del tractament davant d'una violació a casa seva. | Mitjà. L'article 33.2 diu «sense dilació indeguda» sense fixar termini, i un avís a les 60 hores deixa 12 hores per decidir i notificar. | `[PENDENT: exigir una clàusula d'avís en 24 hores a cada contracte de l'article 28]` |
| Emmagatzematge local de la tria a la calculadora d'exposició. | Baix. No surt del dispositiu, no identifica ningú i s'esborra amb un botó de la mateixa pàgina. El risc real és de confidencialitat en un dispositiu compartit, on una altra persona podria veure quines aplicacions s'han marcat. | Documentat a la política de privadesa i a la de galetes, amb la clau exacta i la manera d'esborrar-ho. Es revisa si algun dia s'hi desa res més que la selecció. |

## 7. Disparadors de revisió

Aquesta anàlisi es refà, i es reobre la valoració de l'article 35, si es dona
qualsevol d'aquests supòsits:

1. S'obren comptes per a persones visitants, amb registre o inici de sessió.
2. S'afegeix qualsevol formulari, butlletí, comentaris o funció de participació.
3. S'instal·la analítica de qualsevol mena, inclosa la que es presenti com a
   respectuosa amb la privadesa.
4. Alguna eina passa a desar al servidor el que la persona hi introdueix, o a
   recordar-ho entre sessions amb un identificador.
5. Es publiquen dades que permetin construir un perfil d'una persona física.
6. S'incorpora publicitat, patrocini o qualsevol model que impliqui compartir
   dades amb tercers.
7. Es tracten dades de categories especials de l'article 9 o dades de menors.
8. Canvia el proveïdor d'allotjament o s'hi afegeix un encarregat nou.
9. Es produeix una violació de seguretat.
10. L'Agència Espanyola de Protecció de Dades actualitza les seves llistes de
    l'article 35.4 o 35.5 de manera que afecti aquests tractaments.

## 8. Aprovació

Anàlisi elaborada i aprovada pels administradors mancomunats de New Spirit Studio
S.L., **Marc Celeiro Escribà** i **Roger Bach Gómez**, el 12 de setembre de 2026.

Revisió mínima anual, o immediata en produir-se qualsevol dels disparadors de
l'apartat 7.
