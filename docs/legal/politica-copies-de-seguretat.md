# Política de còpies de seguretat i continuïtat

Article 32.1.b i 32.1.c del Reglament (UE) 2016/679: capacitat de garantir la
confidencialitat, la integritat, la disponibilitat i la resiliència permanents
dels sistemes, i capacitat de restaurar la disponibilitat i l'accés a les dades
de manera ràpida en cas d'incident.

**Versió 1.0 · 12 de setembre de 2026**
**Responsable del tractament:** New Spirit Studio S.L. · NIF B75352872
**Document intern. No es publica.**

---

## 1. Què s'ha de protegir, i què no

La primera decisió d'una política de còpies és **no copiar-ho tot**. Cada còpia
d'una dada personal és una superfície d'atac més, i l'article 5.1.c obliga a la
minimització també aquí.

| Actiu | Conté dades personals | Es copia | Per què |
| --- | --- | --- | --- |
| **Codi de l'aplicació** | No | No cal còpia pròpia | Viu a Git amb historial complet i rèplica remota a GitHub. El repositori **és** la còpia. |
| **Contingut editorial** (`src/seed/`) | No | No cal còpia pròpia | És codi TypeScript tipat al repositori. Aquesta decisió d'arquitectura fa que el contingut sigui reconstruïble des de zero amb `pnpm seed`. |
| **Base de dades MongoDB** | **Sí**: comptes editorials | **Sí** | És l'únic lloc on hi ha dades que no es poden regenerar: comptes, historial de versions, instantànies de puntuació i de polítiques. |
| **Biblioteca multimèdia** (`/media`) | No | **Sí** | Logotips de tercers. Regenerables amb `pnpm import-logos`, però la còpia evita dependre d'una API externa el dia de la restauració. |
| **Variables d'entorn i secrets** | No, però són l'accés a tot | **Sí, i a part** | Mai dins de la còpia de dades. Vegeu l'apartat 6. |
| **Registres del servidor** | **Sí**: adreces IP | **No** | Copiar-los allargaria de fet la retenció de 30 dies i contradiria el que diu la política de privadesa. La seva pèrdua no és un problema de continuïtat. |

**El punt clau d'aquesta taula:** el projecte és reconstruïble gairebé sencer des
del repositori. Això redueix dràsticament el que cal copiar i, per tant, el que
cal protegir. És una propietat del disseny, no una casualitat, i s'ha de
conservar: qualsevol funció futura que desi contingut originat pels visitants
canviaria aquesta anàlisi i obligaria a revisar aquest document abans de
desplegar-la.

## 2. Objectius de recuperació

| Paràmetre | Valor | Raó |
| --- | --- | --- |
| **RPO** — pèrdua màxima de dades tolerable | **24 hores** | En un dia, el pitjor cas és perdre les edicions d'una jornada. El contingut publicat és regenerable des del repositori; el que es perdria és l'historial de versions d'aquell dia. |
| **RTO** — temps màxim de restauració | **8 hores** | El lloc és informatiu i no presta cap servei crític. Vuit hores és assumible i és el que permet una restauració manual sense automatismes que ningú no manté. |
| **Retenció** | **30 diàries + 8 setmanals + 6 mensuals** | Les diàries cobreixen l'error recent. Les setmanals i mensuals cobreixen la corrupció silenciosa o el segrest amb retard, que és el cas en què totes les còpies recents ja estan contaminades. |

La retenció de les còpies **no pot allargar de fet cap termini de conservació
declarat**. Com que no es copien els registres del servidor, el criteri de 30
dies de la política de privadesa es manté. Quan s'esborra un compte editorial,
desapareix de les còpies com a molt tard en 6 mesos, i això s'ha de dir a la
persona que exerceixi la supressió: l'article 17 no obliga a reescriure les
còpies, però sí a informar del termini real.

## 3. Com es fan

### Base de dades

Bolcat lògic amb `mongodump`, un cop al dia, **xifrat abans de sortir de la
màquina**.

Es tria bolcat lògic i no còpia del sistema de fitxers per dues raons: és
independent de la versió i del proveïdor, cosa que evita quedar atrapats amb qui
allotja avui; i es pot restaurar en una màquina local per provar-lo sense muntar
res.

### Xifratge

**Xifratge en repòs amb clau pròpia, sempre, i abans de pujar res.** No s'accepta
com a suficient el xifratge que ofereix el proveïdor: si la clau la té ell,
protegeix del robatori del disc físic, no d'un accés indegut al compte.

- Algorisme: AES-256 en mode autenticat, o `age` amb clau asimètrica.
- La clau **no viu al mateix lloc que les còpies** i no és cap secret de
  l'aplicació.
- Sense la clau, la còpia és inintel·ligible. Aquest és el requisit que permet
  invocar l'article 34.3.a si un dia una còpia es perd.

### Destinació

`[PENDENT: destinació de les còpies, que ha de ser un proveïdor amb servidors a l'EEE i diferent del proveïdor d'allotjament. Depèn del pendent núm. 1 del paquet legal.]`

Dues condicions no negociables:

1. **Proveïdor diferent del d'allotjament.** Una còpia al mateix compte que el
   servidor no protegeix del compromís d'aquell compte, que és exactament
   l'escenari en què es necessita.
2. **Servidors a l'EEE.** Si no n'hi ha, cal documentar la decisió d'adequació o
   la garantia de l'article 46, i incorporar-ho al registre d'activitats i a la
   política de privadesa **abans** d'enviar-hi la primera còpia.

### Immutabilitat

L'emmagatzematge ha de tenir **retenció immutable** durant la finestra de
retenció: escriptura una vegada, esborrat impossible fins que venci. És la
diferència entre tenir còpies i tenir-ne de servibles el dia d'un programari de
segrest, perquè el primer que fa un atacant amb accés és esborrar les còpies.

## 4. Prova de restauració

**Una còpia no provada no és una còpia.** És la part que es descuida sempre i és
l'única que acredita el 32.1.c.

| Periodicitat | Prova | Criteri |
| --- | --- | --- |
| **Mensual** | Restauració del darrer bolcat en un MongoDB local i arrencada de l'aplicació contra aquella base. | El panell obre, hi ha el nombre esperat de documents a cada col·lecció i una fitxa concreta es veu sencera. |
| **Semestral** | Restauració completa a partir de zero: repositori, dependències, variables d'entorn, base de dades i mitjans. | Es cronometra. Si supera el RTO de 8 hores, el RTO és fals i s'ha de corregir el procediment, no el número. |
| **Anual** | Prova encreuada amb la prova de taula del [procediment de violacions](procediment-violacions-seguretat.md), apartat 12. | Es fa sobre l'escenari de pèrdua de la base de dades. |

Cada prova es registra amb data, qui l'ha feta, durada i resultat a
`docs/legal/registre-proves-restauracio.md`, creat amb la primera entrada.

## 5. Procediment de restauració

Ordre pensat perquè el pugui seguir qui no l'hagi escrit:

1. **Decidir què s'ha perdut.** Si és només contingut, no cal restaurar: es
   redesplega des del repositori i s'executa `pnpm seed`, que és idempotent.
2. **Aixecar una màquina neta.** Si hi ha sospita de compromís, mai la mateixa.
3. **Desplegar el codi** des de l'etiqueta o el commit coneguts com a bons.
4. **Restaurar les variables d'entorn** des del magatzem de secrets. Si el
   compromís hi pot haver arribat, **girar-les totes**: `PAYLOAD_SECRET`,
   credencials de la base de dades i credencials de les còpies.
5. **Restaurar la base de dades:** desxifrar el bolcat i aplicar `mongorestore`.
6. **Restaurar els mitjans**, o regenerar-los amb `pnpm import-logos`.
7. **Comprovar** abans d'obrir al públic: recompte de documents per col·lecció,
   una fitxa completa, l'accés al panell i les capçaleres de seguretat.
8. **Recalcular les puntuacions** amb `pnpm rescore` si hi ha cap dubte sobre la
   integritat de les instantànies.
9. **Documentar-ho** al registre de violacions si la pèrdua de disponibilitat
   n'era una, cosa que l'article 4.12 fa que sigui el cas gairebé sempre.

## 6. Secrets

Els secrets **no van mai dins de la còpia de dades**. Una còpia que porti a dins
la clau que la desxifra és una còpia en clar amb un pas intermedi.

- Custòdia en un gestor de secrets o en un magatzem xifrat separat.
- Còpia de recuperació fora de línia, custodiada pels dos administradors, perquè
  cap dels dos sigui un punt únic de fallada.
- Rotació immediata davant de qualsevol sospita i, en tot cas, en cada canvi de
  proveïdor o de persona amb accés.

## 7. Continuïtat

El projecte no té compromisos de disponibilitat amb ningú, i les condicions d'ús
ho diuen expressament. Tot i així:

- **Fallada del proveïdor d'allotjament:** desplegament a un altre proveïdor des
  del repositori. La còpia de la base de dades ha de ser prou portàtil per no
  dependre de cap servei gestionat concret, que és per què es fa bolcat lògic.
- **Fallada de l'API de Have I Been Pwned:** degradació neta. La ruta retorna un
  error explícit que diu que la comprovació **no** s'ha fet, i la interfície no
  presenta mai un «no s'ha pogut comprovar» com si fos un «està bé». La resta del
  lloc no en depèn.
- **Indisponibilitat d'una persona de l'equip:** els dos administradors tenen
  accés complet, credencials i còpia de recuperació dels secrets.

## 8. Revisió

Es revisa aquest document un cop l'any, i immediatament quan:

- Es contracta o es canvia el proveïdor d'allotjament, de base de dades o de
  còpies.
- Apareix un tractament nou que desa dades que no es poden regenerar des del
  repositori.
- Una prova de restauració falla o supera el RTO.
- Es produeix una violació de seguretat que afecti la disponibilitat.
