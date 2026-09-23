# Procediment de gestió de violacions de seguretat de dades personals

Articles 33 i 34 del Reglament (UE) 2016/679 i article 9 del Reial decret
311/2022 en el que és aplicable com a bona pràctica.

**Versió 1.0 · 12 de setembre de 2026**
**Responsable del tractament:** New Spirit Studio S.L. · NIF B75352872
**Document intern. No es publica.**

---

## 1. Per què existeix aquest document

L'obligació de l'article 33 és notificar a l'autoritat de control **dins de les
72 hores** des que es té coneixement d'una violació. Setanta-dues hores és poc
temps per decidir alhora què ha passat, si s'ha de notificar, a qui i amb quines
paraules. Un procediment escrit no fa la feina, però impedeix que el rellotge
corri mentre es discuteix qui decideix.

El projecte tracta poques dades personals i el risc global és baix. Això fa el
document més curt, no innecessari: **el termini de 72 hores no es redueix
proporcionalment a la mida de l'empresa.**

## 2. Què és una violació de seguretat

L'article 4.12 la defineix com tota violació de la seguretat que ocasioni la
destrucció, pèrdua o alteració accidental o il·lícita de dades personals, o la
comunicació o l'accés no autoritzats a aquestes dades. Són **tres tipus** i tots
tres compten:

| Tipus | Què és | Exemple realista en aquest projecte |
| --- | --- | --- |
| **Confidencialitat** | Algú que no havia d'accedir-hi hi accedeix. | Robatori de la contrasenya d'un compte de `/admin`. Exposició pública de la base de dades MongoDB. Filtració dels registres del servidor amb adreces IP. |
| **Integritat** | Les dades s'alteren sense autorització. | Modificació no autoritzada de fitxes publicades o de comptes editorials. |
| **Disponibilitat** | Es perden o queden inaccessibles. | Pèrdua de la base de dades sense còpia restaurable. Xifratge per programari de segrest. |

**Una pèrdua de disponibilitat també és una violació.** És l'error més comú:
creure que només compta si algú s'ha endut alguna cosa.

### Què NO és una violació en aquest projecte

- La caiguda del lloc públic sense afectació de dades personals. És una
  incidència de servei.
- La indisponibilitat de l'API de Have I Been Pwned. No hi tenim cap dada.
- La publicació d'una dada errònia en una fitxa. És una correcció editorial i es
  gestiona per la [metodologia](../../src/app/\(frontend\)/metodologia/page.tsx).

## 3. Qui decideix

No hi ha delegat de protecció de dades, i a l'[anàlisi de riscos](analisi-de-riscos.md)
consta per què no cal designar-ne cap. La responsabilitat és de
**l'òrgan d'administració**: els dos administradors mancomunats.

| Paper | Qui | Què fa |
| --- | --- | --- |
| **Recepció** | Qualsevol persona de l'equip | Obre l'incident. No filtra, no valora i no espera a estar segura. |
| **Coordinació** | L'administrador que rebi l'avís primer | Condueix el procediment i és qui mira el rellotge. |
| **Decisió de notificar** | Els dos administradors mancomunats | Decideixen conjuntament. Si un no és localitzable en un termini raonable, **es notifica igualment**: notificar de més no és sancionable; no notificar a temps, sí. |
| **Contacte únic** | `admin@newspirit.studio` | Canal d'entrada d'avisos externs, publicat a totes les pàgines legals. |

**Regla de desempat:** davant del dubte sobre si cal notificar, es notifica.
L'article 33.1 només eximeix quan és **improbable** que la violació comporti un
risc, i la càrrega d'acreditar aquesta improbabilitat és nostra.

## 4. El rellotge

El termini de 72 hores compta des del **coneixement**, no des de la certesa.

> Es té coneixement quan hi ha un **grau raonable de certesa** que s'ha produït
> un incident de seguretat que ha afectat dades personals. No cal saber l'abast,
> ni la causa, ni el nombre de persones afectades.

Conseqüència pràctica: **la investigació no atura el rellotge.** Si a les 72
hores encara no se sap tot, es fa una notificació inicial i es completa després,
que és el que l'article 33.4 permet expressament.

| Moment | Acció |
| --- | --- |
| **T+0** | Coneixement. S'obre l'entrada al registre de violacions amb la data i l'hora exactes. |
| **T+0 a T+4 h** | Contenció. |
| **T+4 a T+24 h** | Valoració del risc i decisió de notificar. |
| **Abans de T+72 h** | Notificació a l'AEPD, si escau. Si es passa de termini, **s'ha de notificar igualment**, amb la justificació de la demora que exigeix l'article 33.1. |
| **Sense dilació indeguda** | Comunicació a les persones afectades, si el risc és alt. |
| **T+30 dies** | Anàlisi de causa arrel i tancament. |

## 5. Fase 1 · Detecció i contenció

### Com pot arribar l'avís

1. Observació directa de l'equip.
2. Avís d'un proveïdor: allotjament, base de dades o correu.
3. Avís extern a `admin@newspirit.studio`, inclosa una comunicació
   d'investigació de seguretat.
4. Alerta automàtica del proveïdor o del repositori.

### Contenció, per ordre

1. **No destruir evidència.** Abans de reinstal·lar, reiniciar o esborrar res,
   conservar-ne còpia: registres, imatges de disc, bolcat de la base de dades.
   Restaurar primer i preguntar després deixa l'anàlisi sense material.
2. **Tallar l'accés.** Segons el cas: revocar sessions del panell, canviar
   contrasenyes i la clau `PAYLOAD_SECRET`, revocar credencials de la base de
   dades, retirar el lloc de producció.
3. **Aïllar.** Si hi ha sospita de compromís del servidor, no reutilitzar-lo:
   desplegar de nou des del repositori en una màquina neta.
4. **Deixar constància escrita de cada pas amb la seva hora.** Aquesta és la
   part que després sosté la responsabilitat proactiva de l'article 5.2.

## 6. Fase 2 · Valoració del risc

Es valora el risc **per als drets i les llibertats de les persones físiques**, no
per al projecte. Un incident que ens fa molt de mal i no en fa cap a ningú altre
no és notificable; un que ens és indiferent i exposa terceres persones, sí.

Criteris, seguint les Directrius 9/2022 del Comitè Europeu de Protecció de Dades:

| Factor | Pregunta | Agreuja |
| --- | --- | --- |
| **Tipus de violació** | Confidencialitat, integritat o disponibilitat? | La de confidencialitat, quan les dades s'han pogut copiar. |
| **Naturalesa de les dades** | Quines dades hi ha? | Categories especials de l'article 9, dades de menors, dades financeres, credencials. |
| **Volum** | Quantes persones? | Molts registres, o pocs però identificables. |
| **Facilitat d'identificació** | Es pot arribar a una persona concreta? | Dades directament identificatives. Xifratge robust i clau no compromesa ho redueix gairebé a zero. |
| **Gravetat de les conseqüències** | Què li pot passar a qui n'és víctima? | Suplantació, frau, pèrdua de control, dany reputacional. |
| **Característiques de les persones** | Són vulnerables? | Menors, persones en situació de risc. |
| **Reversibilitat** | Es pot desfer? | Publicació en obert, que no es pot desfer. |

### Escenaris valorats per endavant

Cada escenari porta la seva decisió preparada, perquè el dia que passi no s'hagi
de pensar des de zero.

| Escenari | Dades afectades | Notificació a l'AEPD | Comunicació a les persones |
| --- | --- | --- | --- |
| **Compromís d'un compte de `/admin`** | Nom, correu, rol i resum de contrasenya de fins a un grapat de persones editores. | **Sí.** Són credencials, encara que siguin poques persones. | **Sí**, a les persones editores afectades. Són poques i localitzables de seguida. |
| **Exposició de la base de dades** | El mateix, més tot el contingut editorial, que no és personal. | **Sí.** | **Sí**, a les persones editores. |
| **Filtració dels registres del servidor** | Adreces IP, marques de temps i rutes de qui visita el lloc. | **Cas a cas.** Una IP és dada personal, però no hi ha identificació directa ni cap altra dada associada. Risc baix. | Probablement **no**: no podem identificar ni contactar aquestes persones, i és el supòsit de l'article 34.3.c, en què la comunicació pública substitueix la individual. |
| **Pèrdua de la base de dades sense còpia restaurable** | Disponibilitat de comptes editorials i historial. | **Sí**, si afecta dades personals. | Segons l'impacte. |
| **Alteració no autoritzada de contingut publicat** | Integritat del contingut; dades personals de tercers només si la manipulació n'afegeix. | Segons el cas. | S'emet **correcció pública** en tot cas, per política editorial. |
| **Correu enviat amb destinataris visibles a l'ordre `Per a`** | Adreces de correu de terceres persones. | Segons volum i context. | **Sí**, disculpa i avís a qui hi surti. |

**El que no és notificable en aquest projecte:** una contrasenya escrita a
l'eina de comprovació. No arriba mai al servidor; només hi arriben cinc
caràcters hexadecimals del resum SHA-1, que corresponen a milers de contrasenyes
diferents i no identifiquen ningú.

## 7. Fase 3 · Notificació a l'autoritat de control

**On:** Seu electrònica de l'Agència Espanyola de Protecció de Dades, formulari
de notificació de violacions de seguretat, amb certificat digital de la societat.

L'autoritat competent és l'AEPD perquè l'únic establiment és a Catalunya i no hi
ha tractament transfronterer. L'Autoritat Catalana de Protecció de Dades té
competència sobre el sector públic català i no hi entra.

**Contingut mínim, article 33.3:**

1. Naturalesa de la violació, amb categories i nombre aproximat de persones i de
   registres afectats.
2. Nom i dades de contacte del punt de contacte: `admin@newspirit.studio`.
3. Conseqüències probables.
4. Mesures adoptades o proposades, incloses les de mitigació.

Si no es té tot, es notifica el que se sap i s'indica expressament que la
informació es completarà. Si es passa de 72 hores, s'hi afegeix la justificació
de la demora.

## 8. Fase 4 · Comunicació a les persones afectades

Exigible per l'article 34.1 quan el risc és **alt**. Sense dilació indeguda, en
llenguatge clar i senzill, i **directament** a cada persona: no val amagar-ho en
una actualització de la política de privadesa.

Contingut: què ha passat, quines dades seves hi ha, què pot passar-li, què hem
fet, què li recomanem fer i on preguntar.

Excepcions de l'article 34.3, que s'han de poder acreditar:

- **(a)** Les dades eren inintel·ligibles, per exemple xifrades amb una clau no
  compromesa.
- **(b)** S'han pres mesures posteriors que fan que el risc alt ja no es pugui
  materialitzar.
- **(c)** La comunicació individual exigiria un esforç desproporcionat. Aleshores
  es fa una **comunicació pública**, i en aquest projecte el lloc de fer-la és
  una pàgina pròpia enllaçada des de la portada, no una nota al peu.

## 9. Registre de violacions

L'article 33.5 obliga a documentar **totes** les violacions, també les que no es
notifiquen. Si l'AEPD demana per què no es va notificar una, la resposta és
aquest registre; no tenir-lo és, per si sol, un incompliment.

**Ubicació:** `docs/legal/registre-violacions.md`, creat amb la primera entrada.
Mentre no n'hi hagi cap, el registre és buit i aquest apartat n'és la plantilla.

| Camp | Contingut |
| --- | --- |
| Identificador | `VS-AAAA-NN` |
| Data i hora del fet | Coneguda o estimada, i s'hi diu quina de les dues |
| Data i hora del coneixement | Inici del còmput de les 72 hores |
| Com s'ha detectat | |
| Tipus | Confidencialitat, integritat o disponibilitat |
| Tractaments afectats | Referència a `registre-activitats-tractament.md` |
| Categories i nombre de persones | |
| Categories i nombre de registres | |
| Conseqüències probables | |
| Mesures de contenció | Amb hora |
| Valoració del risc | Baix, mitjà o alt, amb el raonament |
| Decisió de notificar a l'AEPD | Sí o no, **amb la motivació sempre**, també quan és que no |
| Data de notificació i referència | |
| Decisió de comunicar a les persones | Sí o no, amb la motivació |
| Causa arrel | |
| Mesures correctores i termini | |
| Tancament | Data i qui el signa |

**Conservació:** cinc anys des del tancament, que cobreix el termini de
prescripció de les infraccions molt greus de l'article 74 de la Llei orgànica
3/2018.

## 10. Fase 5 · Causa arrel i millora

Dins dels 30 dies següents al tancament de la contenció:

1. Escriure la causa arrel sense atribuir-la a una persona. Si la causa real és
   un procediment que permetia l'error, dir-ho així.
2. Definir mesures correctores amb responsable i data.
3. Revisar si cal actualitzar l'[anàlisi de riscos](analisi-de-riscos.md), el
   [registre d'activitats](registre-activitats-tractament.md) o la
   [política de privadesa](../../src/app/\(frontend\)/legal/privadesa/page.tsx).
4. Si la violació afecta el que diuen les pàgines legals, **es corregeixen abans
   de tancar l'incident**.

## 11. Proveïdors

Quan la violació passa a casa d'un encarregat del tractament, l'article 33.2
l'obliga a avisar-nos **sense dilació indeguda**, i la responsabilitat de
notificar a l'AEPD continua sent nostra.

Per tant, cada contracte de l'article 28 ha d'incloure un termini màxim d'avís
prou curt perquè ens quedi marge dins de les 72 hores. **Vint-i-quatre hores és
el llindar que s'exigirà**, i és un criteri de selecció de proveïdor, no una
clàusula d'estil.

`[PENDENT: incorporar la clàusula d'avís en 24 hores als contractes de l'article 28 amb allotjament, base de dades i correu]`

## 12. Prova del procediment

Un procediment que no s'ha provat mai és una declaració d'intencions. **Un cop
l'any**, i sempre després d'un canvi d'infraestructura, es fa una prova de taula:
s'agafa un dels escenaris de l'apartat 6, es recorre el procediment sencer sobre
paper i es mesura quant s'hi triga. Si la prova revela que 72 hores no basten amb
els mitjans actuals, el que s'ha de canviar són els mitjans.

La prova es registra a `docs/legal/registre-violacions.md` amb la marca
«simulacre», ben separada de les entrades reals.
