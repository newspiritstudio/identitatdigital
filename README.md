# Identitat.digital

Base de coneixement en català sobre privadesa digital. Documenta què fan
realment les aplicacions que fem servir cada dia: quines dades recullen, amb qui
les comparteixen, com les protegeixen, si te'n pots anar i què queda quan ho
fas.

Aquest repositori és la **fase 1**: el model de dades, el sistema de puntuació i
les primeres vint-i-cinc fitxes documentades. El frontend és deliberadament
mínim; serveix per validar el contingut, no per ser el lloc web final.

## Principis

**Cap afirmació important sense font.** Cada dada d'una fitxa porta el seu
estat, el seu nivell d'evidència i els enllaços que la sostenen. Una afirmació
sense font no es publica.

**Desconegut no vol dir dolent.** El que no hem pogut documentar queda marcat
com a desconegut, no com a negatiu. No mou la puntuació en cap direcció: el que
baixa és el grau de confiança de l'anàlisi.

**Tota puntuació és desmuntable.** Cada xifra desa el desglossament complet de
com s'ha calculat. Qualsevol persona pot refer el càlcul o assenyalar on
discrepa.

**Historicitat.** Es pot saber què deia una política, quan la vam consultar, què
ha canviat i per què s'ha mogut una puntuació.

**Independència.** La informació sobre eliminació de comptes viu estructurada
dins del projecte i contrastada amb la documentació oficial vigent. No depenem
de cap directori extern.

## Estat actual

| | |
| --- | --- |
| Aplicacions documentades | 25 |
| Empreses i filials | 29 |
| Fonts al catàleg | 101 |
| Incidents i sancions | 23 |
| Tipus de dada | 34 |
| Finalitats de tractament | 16 |
| Categories | 14 |
| Indicadors de puntuació | 38 |

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
| `pnpm rescore` | Recalcula totes les puntuacions |
| `pnpm create-admin` | Crea el compte administrador inicial |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | Comprovació de tipus |
| `pnpm test` | Proves del motor de puntuació |
| `pnpm generate:types` | Regenera els tipus de Payload |

`pnpm seed` es pot executar tantes vegades com calgui: identifica cada document
pel seu `slug` i l'actualitza en lloc de duplicar-lo.

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
  seed/              Contingut editorial com a dades tipades
  app/
    (frontend)/      Lloc públic mínim
    (payload)/       Panell d'administració
scripts/             Càrrega, recàlcul i creació d'administrador
tests/               Proves del motor de puntuació
docs/                Documentació de la metodologia
```

El contingut editorial viu al repositori com a TypeScript tipat, no com a un
abocament de base de dades. Es pot llegir, revisar i discutir en una petició de
canvis com qualsevol altre text.

## Llicència

MIT per al codi. El contingut editorial i les puntuacions són obra pròpia
d'Identitat.digital.
