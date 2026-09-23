# Identitat.digital

Base de coneixement en català sobre privadesa digital. Documenta què fan
realment les aplicacions que fem servir cada dia: quines dades recullen, amb qui
les comparteixen, com les protegeixen, si te'n pots anar i què queda quan ho
fas.

Aquest repositori és la fase 1: el model de dades, el sistema de puntuació, les
primeres vint-i-cinc fitxes, l'anàlisi transversal del corpus i les eines. El
frontend és mínim i serveix per validar el contingut, no per ser el lloc web
final.

## Principis

- Cada dada d'una fitxa porta el seu estat, el seu nivell d'evidència i els
  enllaços que la sostenen. Una afirmació sense font no es publica.
- El que no hem pogut documentar queda marcat com a desconegut. No mou la
  puntuació en cap direcció; el que baixa és el grau de confiança.
- Cada puntuació desa el desglossament de com s'ha calculat, de manera que
  qualsevol pugui refer el càlcul o assenyalar on discrepa.
- Es conserva què deia una política, quan la vam consultar i per què s'ha mogut
  una nota.
- La informació sobre eliminació de comptes és nostra i està contrastada amb la
  documentació oficial vigent. No depenem de cap directori extern.

## Estat actual

| | |
| --- | --- |
| Aplicacions documentades | 215 |
| Empreses i filials | 222 |
| Fonts al catàleg | 868 |
| Incidents i sancions | 108 |
| Tipus de dada | 46 |
| Finalitats de tractament | 16 |
| Categories | 40 |
| Indicadors de puntuació | 38 |
| Filtracions importades de Have I Been Pwned | 1.035 |
| Conjunts de dades oberts publicats | 9 |
| Aplicacions amb la disponibilitat en català comprovada | 25 |

## Requisits

- Node.js 22.13 o superior
- pnpm 11
- MongoDB en execució local

## Posada en marxa

```bash
pnpm install
cp .env.example .env          # omple PAYLOAD_SECRET i SEED_ADMIN_PASSWORD
pnpm create-admin             # crea el compte administrador
pnpm seed                     # carrega tot el contingut editorial
pnpm import-logos             # baixa els logotips de l'App Store
pnpm dev
```

El lloc queda a `http://localhost:3000` i el panell d'administració a
`http://localhost:3000/admin`.

`PAYLOAD_SECRET` es genera amb `openssl rand -base64 48`.

## Ordres

| Ordre | Què fa |
| --- | --- |
| `pnpm dev` | Servidor de desenvolupament |
| `pnpm build` | Compilació de producció |
| `pnpm seed` | Càrrega idempotent del contingut editorial |
| `pnpm import-logos` | Baixa els logotips des de l'App Store |
| `pnpm import-breaches` | Importa el catàleg de filtracions de Have I Been Pwned |
| `pnpm import-catalan` | Comprova la disponibilitat en català a l'App Store |
| `pnpm build-wordlist` | Regenera la llista de paraules de les frases de pas |
| `pnpm rescore` | Recalcula totes les puntuacions |
| `pnpm create-admin` | Crea el compte administrador inicial |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | Comprovació de tipus |
| `pnpm test` | Proves del motor de puntuació |
| `pnpm check-a11y` | Comprovador d'accessibilitat propi sobre el lloc en marxa |
| `pnpm generate:types` | Regenera els tipus de Payload |

`pnpm seed` es pot executar tantes vegades com calgui: identifica cada document
pel seu `slug` i l'actualitza en lloc de duplicar-lo.

## Logotips

Les icones no viuen al repositori: es baixen de l'API de consulta pública de
l'App Store a partir de l'identificador de paquet de cada servei, que es desa a
`src/seed/store-ids.ts`. Cada fitxer que entra a la biblioteca porta escrit de
quina marca és, de quina fitxa de la botiga s'ha tret i quin dia.

```bash
pnpm import-logos                 # només les fitxes que no en tenen
FORCE_LOGOS=1 pnpm import-logos   # refà totes les icones
```

Són marques registrades de tercers i s'utilitzen únicament per identificar el
servei analitzat.

## Filtracions

El catàleg públic de filtracions de [Have I Been Pwned](https://haveibeenpwned.com)
s'importa a la col·lecció `breaches` i es pot consultar a `/filtracions`.

```bash
pnpm import-breaches
```

Una filtració no és un incident i no mou cap puntuació: és evidència d'un tercer
i només els incidents escrits editorialment entren al càlcul. El que hi afegim és
la traducció. Les categories de dades de HIBP, en anglès i amb vocabulari propi,
queden mapades als nostres tipus de dada, de manera que una filtració es llegeix
amb les mateixes paraules que una fitxa d'aplicació.

El lligam entre una filtració i una empresa es dedueix del domini. Com que HIBP
indexa el domini del **servei** (`snapchat.com`) i el directori desa el domini
**corporatiu** (`snap.com`), les empreses porten un camp `productDomains` amb els
dominis amb què la gent es troba els seus productes. Quan dues societats del
mateix grup encaixen igual de bé amb una filtració, es deixa sense lligar: quina
societat en respon és una qüestió jurídica i no la pot resoldre una comparació de
cadenes.

Les dades de HIBP són CC BY 4.0 i es publiquen amb l'atribució i l'enllaç que la
llicència exigeix.

## Anàlisi transversal

A `/analisi` hi ha les preguntes que no es poden respondre mirant una fitxa sola:
quines dades demana tothom, quins grups empresarials concentren més exposició,
quins patrons foscos es repeteixen, en quines jurisdiccions viuen les dades, com
de fàcil és marxar i quina qualitat d'evidència sosté cada conclusió. El càlcul
viu a `src/lib/analysis/` i es fa sobre el corpus complet, amb proves pròpies.

## Eines

A `/eines` hi ha tres eines. Totes calculen al navegador i cap no desa res:

- **Contrasenyes** (`/eines/contrasenyes`): generador de contrasenyes i de frases
  de pas en català amb entropia real, i comprovació contra les contrasenyes
  filtrades. La comprovació fa servir el **k-anonimat**: el navegador calcula el
  resum SHA-1 de la contrasenya i només n'envia els cinc primers caràcters
  hexadecimals, mai la contrasenya.
- **Exposició personal** (`/eines/exposicio`): quines dades teves circulen, quantes
  empreses hi accedeixen i quins grups n'acumulen més, a partir de les aplicacions
  que triïs.
- **Comparador** (`/eines/comparador`): dues o tres aplicacions de la mateixa
  categoria, indicador per indicador.

A `/eines/gestors` hi ha els vuit criteris per triar un gestor de contrasenyes.
No hi ha taula comparativa perquè encara no hem documentat cap gestor amb
l'exigència que demanem a les fitxes d'aplicacions.

La política de seguretat de contingut del lloc és `connect-src 'self'`, de manera
que cap pàgina pot parlar amb cap tercer encara que ho volgués. Per això la
consulta de contrasenyes filtrades passa per una ruta pròpia que actua de pont.

## Dades obertes

Tot el corpus es publica en obert a `/dades`, en nou conjunts (aplicacions,
recollida de dades, indicadors, empreses, tipus de dada, incidents, filtracions,
patrons foscos i fonts), cadascun en JSON i en CSV:

```
/dades/index.json          manifest amb tots els conjunts i les seves columnes
/dades/aplicacions.json    un conjunt en JSON
/dades/aplicacions.csv     el mateix conjunt en CSV
```

Les respostes porten `Access-Control-Allow-Origin: *`, de manera que es poden
llegir des de qualsevol lloc sense passar per cap servidor intermedi. El CSV
segueix l'RFC 4180, amb marca d'ordre de bytes perquè l'Excel l'obri bé en
català, i les llistes dins d'una cel·la separades per `|`.

A l'exportació, un camp buit vol dir buit: no s'omple cap desconegut amb un
zero, un fals o la paraula «desconegut». El
diccionari complet de columnes és a la mateixa pàgina `/dades` i el codi a
`src/lib/opendata/`.

## Institucions

A `/institucions` hi ha el protocol de set passos per a escoles i ajuntaments que
han de decidir si una aplicació pot entrar a l'aula o al lloc de treball, les
quatre clàusules mínimes d'un contracte d'encarregat del tractament i una **fitxa
de contractació generada per a cada aplicació documentada**.

Cada fitxa passa deu comprovacions amb la seva base jurídica (categories
especials, transferències internacionals, publicitat, entrenament de models,
compartició, seguretat, sortida, patrons foscos, incidents i català) i marca cada
una com a aturada, revisió, correcta o desconeguda. Es generen des del corpus,
així que cap empresa no rep un tracte diferent. El càlcul és a
`src/lib/procurement.ts`.

## Disponibilitat en català

Cada fitxa desa si la interfície està disponible en català, quants idiomes
declara la botiga i quin dia ho vam comprovar. La font és l'API de consulta
pública de l'App Store, que publica la llista de codis d'idioma de cada
aplicació, i per tant és citable i repetible:

```bash
pnpm import-catalan
```

L'anàlisi conjunta és a `/analisi/catala`. Aquesta dimensió no entra al càlcul
de cap puntuació ni del grau de confiança, i queda fora de la llista
d'indicadors: una aplicació que no és en català pot ser bona en privadesa.

## Documentació legal

Els set documents públics són a `/legal` i el codi que els genera a
`src/app/(frontend)/legal/`. La documentació interna que no es publica (registre
d'activitats de tractament de l'article 30 i anàlisi de riscos) és a
`docs/legal/`, amb un índex que explica cada decisió i el que queda pendent.

## Model de dades

El contingut està normalitzat en col·leccions relacionades, no en una taula
plana d'aplicacions.

**Apps** és la fitxa d'un servei. Conté la identificació, la matriu de dades
recollides, el seguiment, els usos, la compartició, la retenció, l'eliminació de
compte, els drets, els controls i la seguretat. Té esborranys i versions.

**Companies** modela les empreses amb una relació a si mateixa, de manera que un
conglomerat és un arbre: Meta Platforms conté Meta Platforms Ireland i WhatsApp
Ireland; Alphabet conté Google i Google Ireland. Això permet respondre preguntes
sobre concentració de dades i sumar sancions per grup.

**Sources** és el catàleg d'evidència. Cada font desa el títol i l'idioma
originals, l'editor, el tipus, la fiabilitat, la data de publicació i la data de
consulta.

**DataTypes** classifica les dades per família i sensibilitat d'1 a 5, i marca
les categories especials de l'article 9 del RGPD.

**ProcessingPurposes** classifica les finalitats pel seu impacte sobre la
privadesa, des de necessària fins a molt intrusiva.

**Categories** agrupa els serveis per necessitat funcional. És el que fa possible
comparar alternatives amb sentit: una alternativa només ho és si cobreix
raonablement la mateixa necessitat.

**Incidents** viu fora de la fitxa perquè una sanció sovint afecta diverses
aplicacions del mateix grup alhora. Cada sanció desa el seu estat: ferma,
recorreguda, anul·lada o en tramitació.

**PolicySnapshots** desa què deia un document en una data concreta.

**ScoreSnapshots** desa cada canvi de puntuació amb la data i la versió de
metodologia que la va produir.

**Breaches** desa el catàleg de filtracions importat de Have I Been Pwned, amb la
correspondència als tipus de dada del projecte i el lligam editorial a l'empresa.

**ScoringMethodologies** publica la metodologia vigent. Es genera des de les
constants del codi, de manera que el document públic i el motor de càlcul no
poden divergir en silenci.

### Afirmacions amb evidència

El camp que es repeteix per tot el model és el mateix arreu: un estat
(sí, parcialment, no, desconegut, no aplica), un nivell d'evidència
(documentació oficial, autoritat de control, anàlisi independent, premsa,
interpretació editorial), un detall en català, la data de verificació i les
fonts. La fàbrica de camps és `evidencedFact()`, a `src/fields/evidence.ts`.

## Puntuació

Quatre xifres de 0 a 100: privadesa, seguretat, control de la persona usuària i
grau de confiança. La global pondera les tres primeres al 45 %, 30 % i 25 %.

El càlcul és a `src/lib/scoring/`. S'executa en un hook abans de desar i genera
una instantània després. La documentació completa, amb tots els indicadors, els
pesos i les fórmules, és a **[docs/metodologia-scoring.md](docs/metodologia-scoring.md)**.

## Idiomes

El contingut editorial és íntegrament en català. La configuració de Payload ja
declara `ca` per defecte amb `es` i `en` disponibles, de manera que afegir un
idioma no exigeix refer el CMS. No hi ha traduccions automàtiques ni de mostra:
els camps localitzats en altres idiomes són buits fins que algú els escrigui.

Les fonts conserven sempre el títol i l'idioma originals. El resum és en català;
la citació literal, en l'idioma en què es va publicar.

## Estructura

```
src/
  collections/       Col·leccions de Payload
  fields/            Camps reutilitzables (evidència, slug)
  lib/
    access.ts        Control d'accés
    env.ts           Lectura i validació de variables d'entorn
    scoring/         Motor de puntuació i metodologia
    analysis/        Anàlisi transversal del corpus
    opendata/        Conjunts de dades oberts i serialitzador CSV
    procurement.ts   Fitxes de contractació per a institucions
    passwords/       Entropia, frases de pas i k-anonimat
  seed/              Contingut editorial com a dades tipades
  app/
    (frontend)/      Lloc públic mínim
      analisi/       Anàlisi transversal
      dades/         Dades obertes: diccionari i descàrregues
      eines/         Eines pràctiques i pont de k-anonimat
      filtracions/   Catàleg de filtracions
      institucions/  Protocol i fitxes de contractació
      legal/         Documents legals públics
    (payload)/       Panell d'administració
scripts/             Càrrega, recàlcul, importacions i comprovació d'accessibilitat
tests/               Proves de puntuació, anàlisi i contrasenyes
docs/                Metodologia, arquitectura, governança i documentació legal
```

El contingut editorial viu al repositori com a TypeScript tipat, de manera que
es pot revisar en una petició de canvis com qualsevol altre text.

## Llicència

El codi és MIT i el contingut és CC BY-SA 4.0: una llicència per al programa i
una altra per al que hi ha escrit a dins.

El contingut editorial, les puntuacions, el seu desglossament i la selecció i
disposició del conjunt es publiquen sota **Creative Commons
Reconeixement-CompartirIgual 4.0 Internacional**. És la versió 4.0 perquè és
l'única que llicencia expressament el dret *sui generis* del fabricant de bases
de dades, que aquí és el dret que més importa.

En queden exclosos, perquè no són nostres per sublicenciar: els logotips i les
marques de les empreses analitzades, les citacions literals de polítiques i
resolucions, publicades a l'empara del dret de citació, el catàleg de Have I
Been Pwned, que conserva la seva CC BY 4.0, i la llista de paraules en català.

La llista completa i exacta d'aquestes exclusions, amb la base jurídica de cada
una, és al fitxer **[NOTICE](NOTICE)**, que forma part de les condicions tant de
[LICENSE](LICENSE) com de [LICENSE-CONTENT](LICENSE-CONTENT).

El detall complet és a **[/legal/llicencia](src/app/(frontend)/legal/llicencia/page.tsx)**
i el raonament de cada decisió a **[docs/legal/README.md](docs/legal/README.md)**.

## Governança

Qui decideix què es publica, què passa quan hi ha un conflicte d'interessos i què
passa amb les dades si el projecte s'atura és a
**[docs/governanca.md](docs/governanca.md)**. Inclou la regla de desempat (davant
el dubte preval l'opció que publica més informació o que corregeix a favor de
l'empresa afectada), la prohibició de cobrar de cap empresa analitzada i el
compromís de mantenir les exportacions obertes.

## Accessibilitat

El lloc es comprova amb un verificador propi sense dependències que recorre totes
les pàgines públiques i aplica tretze famílies de comprovacions, cadascuna citant
el criteri de les WCAG 2.2 AA que la justifica:

```bash
pnpm start        # en un terminal
pnpm check-a11y   # en un altre
```

L'última execució dona 78 pàgines i cap incidència. Cal llegir-ho amb mesura:
una eina automàtica detecta entre un quart i un terç de les barreres reals. La
declaració pública, amb les excepcions conegudes i el calendari de proves
manuals, és a `/legal/accessibilitat`.
