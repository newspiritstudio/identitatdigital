# Registre d'activitats de tractament

**Responsable:** New Spirit Studio S.L. · NIF B75352872
**Document intern.** Article 30 del Reglament (UE) 2016/679.
**Versió 1.0 · 12 de setembre de 2026**

---

## Per què existeix aquest document

L'article 30.5 del Reglament eximeix del registre les empreses de menys de 250
persones treballadores, però l'exempció decau quan el tractament **no és
ocasional**, quan pot comportar un risc per als drets i les llibertats, o quan
inclou categories especials de dades.

Els registres del servidor i els comptes del panell són tractaments continuats,
no ocasionals. Per tant **l'exempció no s'aplica** i el registre és obligatori.

Aquest document és el registre com a responsable del tractament. No hi ha
registre com a encarregat, perquè el projecte no tracta dades per compte de
ningú.

## Dades identificatives del responsable

| | |
| --- | --- |
| Responsable | New Spirit Studio S.L. |
| NIF | B75352872 |
| Domicili | Carrer del Sol, 62, 08201 Sabadell (Barcelona) |
| Correu | admin@newspirit.studio |
| Telèfon | 611 54 62 16 |
| Representants legals | Marc Celeiro Escribà i Roger Bach Gómez, administradors mancomunats |
| Delegat de protecció de dades | No designat. Vegeu la justificació a `analisi-de-riscos.md`, apartat 2. |
| Grup de societats | No en forma part. |
| Assegurança de responsabilitat civil | Zurich, pòlissa 00000165177759, amb garantia específica de protecció de dades de 100.000 € |

## Índex de tractaments

| Codi | Tractament | Base jurídica | Risc |
| --- | --- | --- | --- |
| T-01 | Registres tècnics del servidor web | Interès legítim, art. 6.1.f | Baix |
| T-02 | Gestió de comptes del panell editorial | Art. 6.1.b i 6.1.f | Baix |
| T-03 | Atenció de comunicacions rebudes per correu | Art. 6.1.f i 6.1.c | Baix |
| T-04 | Publicació editorial d'informació d'interès públic | Art. 6.1.f amb art. 85 | Mitjà |
| T-05 | Exercici de drets de les persones interessades | Art. 6.1.c | Baix |

**Tractaments que no existeixen i que convé fer constar expressament**, perquè
l'absència és tan rellevant com la presència: no hi ha analítica web, ni
galetes per a qui visita, ni publicitat, ni perfilat, ni videovigilància, ni
cessions comercials, ni base de dades de persones usuàries del lloc públic, ni
butlletí, ni formularis, ni comentaris.

---

## T-01 · Registres tècnics del servidor web

| Camp | Contingut |
| --- | --- |
| **Finalitat** | Mantenir el servei disponible, detectar i mitigar atacs i abusos, i diagnosticar errades de funcionament. |
| **Categories de persones interessades** | Qualsevol persona que visiti el lloc. No s'identifica ningú i no hi ha manera de vincular una petició a una persona concreta amb els mitjans de què disposem. |
| **Categories de dades** | Adreça IP, data i hora, mètode i ruta HTTP, codi de resposta, mida de la resposta, agent d'usuari i, si n'hi ha, referent. Dades identificatives i de connexió. Cap categoria especial de l'article 9. |
| **Base jurídica** | Interès legítim, article 6.1.f. Interès: seguretat i disponibilitat del servei. La ponderació és a `analisi-de-riscos.md`, apartat 4. |
| **Origen** | Directament del protocol HTTP, sense intervenció de la persona interessada. |
| **Destinataris** | Proveïdor d'allotjament, com a encarregat del tractament. Autoritats judicials, policials o de control, si ho requereixen legítimament. |
| **Transferències internacionals** | `[PENDENT: ubicació física dels servidors del proveïdor d'allotjament. Si n'hi ha fora de l'EEE, documentar la decisió d'adequació o la garantia de l'article 46]` |
| **Termini de supressió** | Criteri propi: 30 dies. Els registres necessaris per documentar un incident de seguretat es conserven el temps estrictament necessari per resoldre'l i, si escau, per acreditar-lo. `[PENDENT: retenció real configurada pel proveïdor d'allotjament]` |
| **Mesures de seguretat** | Accés als registres limitat a les persones administradores. Xifratge en trànsit obligatori amb HSTS. No hi ha explotació estadística ni creuament amb cap altra font. |
| **Encarregats** | `[PENDENT: identitat del proveïdor d'allotjament i referència del contracte de l'article 28]` |
| **Observacions** | Les peticions a la ruta de comprovació de contrasenyes filtrades entren en aquest registre com qualsevol altra petició. El prefix de cinc caràcters que transporten **no** es registra ni es desa enlloc. |

---

## T-02 · Gestió de comptes del panell editorial

| Camp | Contingut |
| --- | --- |
| **Finalitat** | Autenticar l'equip editorial, controlar-ne els permisos i mantenir la traçabilitat de qui crea i modifica cada contingut publicat. |
| **Categories de persones interessades** | Persones que integren l'equip editorial i d'administració. No hi ha registre obert: els comptes els crea l'administració. |
| **Categories de dades** | Nom, adreça de correu electrònic, rol, resum criptogràfic de la contrasenya amb sal, marques temporals d'inici de sessió, comptador d'intents fallits i marca de bloqueig. Cap categoria especial. |
| **Base jurídica** | Article 6.1.b, execució de la relació contractual o de col·laboració. Article 6.1.f per a les dades de seguretat d'accés i la traçabilitat de l'edició. |
| **Origen** | De la mateixa persona interessada i de l'administració que crea el compte. |
| **Destinataris** | Proveïdors d'allotjament i de base de dades, com a encarregats. |
| **Transferències internacionals** | `[PENDENT: ubicació de la base de dades MongoDB en producció]` |
| **Termini de supressió** | El compte es desactiva en acabar la relació. Les dades identificatives es conserven mentre puguin derivar-se responsabilitats. L'autoria dels canvis històrics es conserva indefinidament perquè és el que fa auditable el contingut publicat; es pot pseudonimitzar a petició de la persona interessada. |
| **Mesures de seguretat** | Contrasenya desada com a resum amb sal, mai en clar. Sessió de 8 hores. Bloqueig de 10 minuts després de 5 intents fallits. Rols separats: una persona editora no es pot promocionar a administradora. Accés exclusiu per HTTPS amb HSTS. |
| **Encarregats** | `[PENDENT: proveïdor d'allotjament i proveïdor de base de dades, amb els contractes de l'article 28]` |

---

## T-03 · Atenció de comunicacions rebudes per correu

| Camp | Contingut |
| --- | --- |
| **Finalitat** | Respondre a qui ens escriu: consultes, avisos d'errors, propostes de correcció, comunicacions d'empreses documentades, avisos de barreres d'accessibilitat i comunicacions de vulnerabilitats. |
| **Categories de persones interessades** | Qualsevol persona que ens escrigui, incloent-hi representants d'empreses documentades. |
| **Categories de dades** | Adreça de correu, nom si la persona el facilita, càrrec i empresa si els indica, i el contingut del missatge i dels adjunts. |
| **Base jurídica** | Article 6.1.f, interès legítim a atendre qui ens contacta. Article 6.1.c quan el que es demana és l'exercici d'un dret o una rectificació, cas en què es tramita com a T-05. |
| **Origen** | De la mateixa persona interessada. |
| **Destinataris** | Proveïdor de correu electrònic, com a encarregat. |
| **Transferències internacionals** | `[PENDENT: proveïdor de correu de admin@newspirit.studio i ubicació del servei]` |
| **Termini de supressió** | El necessari per respondre i, després, per acreditar que s'ha respost. Els fils relacionats amb rectificacions editorials es conserven mentre la fitxa afectada estigui publicada, perquè formen part de la traçabilitat editorial. La resta s'esborra quan deixa de tenir sentit conservar-la. |
| **Mesures de seguretat** | Accés limitat a les persones administradores. Transport xifrat. No s'incorpora cap adreça a cap llista de difusió. |
| **Encarregats** | `[PENDENT: proveïdor de correu, amb el contracte de l'article 28]` |
| **Observacions** | No hi ha cap formulari al lloc. Tota la correspondència arriba des del client de correu de la persona que escriu. |

---

## T-04 · Publicació editorial d'informació d'interès públic

| Camp | Contingut |
| --- | --- |
| **Finalitat** | Publicar informació documentada sobre el comportament d'empreses i serveis digitals en matèria de privadesa, seguretat i control de les dades. |
| **Categories de persones interessades** | Persones físiques que apareixen en fonts públiques en relació amb els fets documentats: qui ha exercit una reclamació que ha originat una resolució, qui ocupava un càrrec directiu en el moment dels fets, o qui signa una anàlisi independent citada. **No es documenten persones en la seva esfera privada.** |
| **Categories de dades** | Nom i cognoms, càrrec o funció, i la seva relació amb el fet documentat, sempre tal com consten a la font pública citada. **Cap dada de categoria especial de l'article 9, cap dada de menors i cap dada de l'article 10 fora del que consti en una resolució pública.** |
| **Base jurídica** | Article 6.1.f, interès legítim en l'exercici de la llibertat d'informació de l'article 20.1.d de la Constitució, en el marc de conciliació de l'article 85 del Reglament. |
| **Origen** | Article 14: fonts accessibles al públic, identificades i enllaçades a cada fitxa. Resolucions d'autoritats de control, sentències, documentació oficial de les empreses, anàlisis independents i premsa. |
| **Destinataris** | El públic en general, en tractar-se d'una publicació. Reutilitzadors del contingut sota llicència CC BY-SA 4.0. |
| **Transferències internacionals** | La publicació és accessible mundialment. Això no és una transferència en el sentit del capítol V: és una difusió, pròpia de qualsevol publicació. |
| **Termini de supressió** | Mentre la informació conservi interès públic i documental. Les fitxes superades no s'esborren: es marquen i es conserva l'historial. Es revisa a petició de la persona interessada, ponderant el seu dret contra l'interès públic. |
| **Mesures de seguretat** | Verificació prèvia amb fonts citades. Registre d'estat, nivell d'evidència i data a cada afirmació. Revisió per una segona persona en les afirmacions de major impacte. Procediment públic de correcció i de rèplica. |
| **Observacions** | Aquest és l'únic tractament del projecte amb risc rellevant per a drets, i per això és el que rep més garanties procedimentals. El desenvolupament és a la política editorial publicada. |

---

## T-05 · Exercici de drets de les persones interessades

| Camp | Contingut |
| --- | --- |
| **Finalitat** | Tramitar i acreditar la resposta a les sol·licituds d'accés, rectificació, supressió, limitació, oposició i portabilitat. |
| **Categories de persones interessades** | Qualsevol persona que exerceixi un dret, incloent-hi visitants, persones editores i persones esmentades al contingut editorial. |
| **Categories de dades** | Identificació de la persona sol·licitant, contingut de la sol·licitud, documentació acreditativa quan calgui demanar-la, i resposta donada. |
| **Base jurídica** | Article 6.1.c, compliment d'una obligació legal derivada dels articles 12 a 22 del Reglament i de la Llei orgànica 3/2018. |
| **Origen** | De la mateixa persona interessada. |
| **Destinataris** | Agència Espanyola de Protecció de Dades, si hi ha reclamació. Proveïdor de correu, com a encarregat. |
| **Transferències internacionals** | Cap. |
| **Termini de supressió** | Tres anys des de la resolució, que és el termini de prescripció de les infraccions greus de l'article 73 de la Llei orgànica 3/2018. La documentació identificativa que s'hagi hagut de demanar s'esborra tan aviat com s'ha verificat la identitat. |
| **Mesures de seguretat** | Accés restringit a les persones administradores. Només es demana documentació identificativa quan hi ha dubtes raonables, d'acord amb l'article 12.6. |
| **Termini de resposta** | Un mes, prorrogable dos mesos més amb comunicació motivada dins del primer mes. |

---

## Encarregats del tractament

`[PENDENT: completar aquesta taula quan es decideixi la infraestructura de producció. Cada fila necessita el contracte de l'article 28 signat abans de posar el lloc en producció.]`

| Encarregat | Servei | Tractaments afectats | Ubicació | Contracte art. 28 |
| --- | --- | --- | --- | --- |
| `[PENDENT]` | Allotjament de l'aplicació | T-01, T-02 | `[PENDENT]` | `[PENDENT]` |
| `[PENDENT]` | Base de dades MongoDB | T-02, T-04 | `[PENDENT]` | `[PENDENT]` |
| `[PENDENT]` | Correu electrònic | T-03, T-05 | `[PENDENT]` | `[PENDENT]` |

**Have I Been Pwned no és encarregat del tractament.** El servidor li reenvia un
prefix de cinc caràcters hexadecimals del resum SHA-1 d'una contrasenya. Aquest
prefix correspon a milers de valors possibles, no permet identificar cap persona
i no és una dada personal en el sentit de l'article 4.1. No hi ha, doncs, cap
comunicació de dades personals ni cap transferència internacional a documentar.

**Apple no és encarregat del tractament.** La consulta a l'API pública de l'App
Store per obtenir els logotips la fa un script executat per l'equip, no el
navegador de qui visita el lloc, i no hi intervé cap dada personal.

## Mesures de seguretat generals (article 32)

Documentades en detall a `analisi-de-riscos.md`, apartat 5. En resum: HTTPS
obligatori amb HSTS de dos anys i precàrrega; política de seguretat de contingut
restringida a l'origen propi amb `connect-src 'self'`; `X-Content-Type-Options`,
`X-Frame-Options`, `Referrer-Policy` i `Cross-Origin-Opener-Policy`;
`Permissions-Policy` que desactiva càmera, micròfon, geolocalització i l'API
`browsing-topics`; contrasenyes com a resum amb sal; sessions de 8 hores;
bloqueig per intents fallits; esborranys no accessibles al públic; API GraphQL
desactivada per defecte; validació d'entorn que impedeix arrencar amb
configuració insegura.

## Manteniment del registre

Aquest registre s'actualitza **abans** d'activar qualsevol funcionalitat nova que
impliqui tractar dades, i com a mínim un cop l'any. Qualsevol de les novetats
següents obliga a revisar-lo i a reobrir l'anàlisi de l'article 35: comptes per a
persones visitants, formularis, butlletí, comentaris, analítica, publicitat,
emmagatzematge al servidor de les dades introduïdes a les eines, o qualsevol
tractament de dades de categories especials.

**Signat pels administradors mancomunats:** Marc Celeiro Escribà i Roger Bach
Gómez.
