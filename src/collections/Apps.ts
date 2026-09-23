import type { CollectionConfig } from 'payload'

import { isEditor, publishedOrEditor } from '@/lib/access'
import { evidencedFact, evidenceLevelOptions } from '@/fields/evidence'
import { slugField } from '@/fields/slug'
import { recalculateScores, recordScoreSnapshot } from '@/lib/scoring/hook'

/**
 * Fitxa d'una aplicació, plataforma o servei digital.
 *
 * És una col·lecció gran, agrupada per pestanyes. Amb unes quaranta afirmacions
 * per fitxa, trencar-la en deu col·leccions obligaria a saltar entre pantalles
 * per editar-ne una de sola.
 *
 * A fora hi viuen les entitats que es reutilitzen entre fitxes: fonts,
 * empreses, tipus de dada, finalitats, incidents, instantànies de polítiques i
 * historial de puntuacions.
 */
export const Apps: CollectionConfig = {
  slug: 'apps',
  labels: { singular: 'Aplicació', plural: 'Aplicacions' },
  admin: {
    group: 'Directori',
    useAsTitle: 'name',
    defaultColumns: ['name', 'company', 'scores', '_status', 'updatedAt'],
    description:
      'Cada fitxa és una anàlisi, no una descripció. Si una casella no es pot documentar, deixa-la en «Desconegut»: és una resposta vàlida.',
    preview: ({ slug }) => (typeof slug === 'string' ? `/aplicacions/${slug}` : null),
  },
  versions: {
    drafts: { autosave: false },
    maxPerDoc: 50,
  },
  access: {
    read: publishedOrEditor,
    create: isEditor,
    update: isEditor,
    delete: isEditor,
  },
  hooks: {
    beforeChange: [recalculateScores],
    afterChange: [recordScoreSnapshot],
  },
  fields: [
    slugField('name'),
    {
      name: 'logo',
      label: 'Logotip',
      type: 'upload',
      relationTo: 'media',
      admin: { position: 'sidebar' },
    },
    {
      name: 'brandColor',
      label: 'Color de marca',
      type: 'text',
      admin: {
        position: 'sidebar',
        description:
          'Color identificatiu del servei en hexadecimal (#1DB954). Serveix per a l’accent de la fitxa; si es deixa buit, la fitxa es veu amb els colors del lloc.',
      },
      validate: (value: unknown) =>
        !value || /^#[0-9a-fA-F]{6}$/.test(String(value))
          ? true
          : 'Ha de ser un color hexadecimal de sis dígits, com ara #1DB954.',
    },
    {
      name: 'serviceStatus',
      label: 'Estat del servei',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Actiu', value: 'active' },
        { label: 'Discontinuat', value: 'discontinued' },
        { label: 'Fusionat amb un altre servei', value: 'merged' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      type: 'tabs',
      tabs: [
        /* ─────────────────────────── General ─────────────────────────── */
        {
          label: 'General',
          description: 'Qui hi ha darrere del servei i què fa.',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'name', label: 'Nom', type: 'text', required: true, admin: { width: '60%' } },
                {
                  name: 'company',
                  label: 'Empresa responsable',
                  type: 'relationship',
                  relationTo: 'companies',
                  required: true,
                  index: true,
                  admin: { width: '40%' },
                },
              ],
            },
            {
              name: 'tagline',
              label: 'Descripció breu',
              type: 'text',
              localized: true,
              required: true,
              admin: { description: 'Una línia en català: què fa aquest servei.' },
            },
            {
              name: 'summary',
              label: 'Resum de l’anàlisi',
              type: 'textarea',
              localized: true,
              admin: {
                description:
                  'Dos o tres paràgrafs en català amb la conclusió editorial. Ha de poder llegir-se sense mirar cap puntuació.',
              },
            },
            {
              name: 'categories',
              label: 'Categories',
              type: 'relationship',
              relationTo: 'categories',
              hasMany: true,
              required: true,
              index: true,
              admin: {
                description:
                  'Determina amb quines aplicacions es compara i quines alternatives es poden suggerir.',
              },
            },
            {
              name: 'platforms',
              label: 'Plataformes',
              type: 'select',
              hasMany: true,
              options: [
                { label: 'iOS', value: 'ios' },
                { label: 'Android', value: 'android' },
                { label: 'Web', value: 'web' },
                { label: 'Windows', value: 'windows' },
                { label: 'macOS', value: 'macos' },
                { label: 'Linux', value: 'linux' },
                { label: 'Altres', value: 'other' },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'businessModel',
                  label: 'Model de negoci',
                  type: 'select',
                  index: true,
                  defaultValue: 'unknown',
                  admin: { width: '50%' },
                  options: [
                    { label: 'Publicitat', value: 'advertising' },
                    { label: 'Subscripció', value: 'subscription' },
                    { label: 'Freemium', value: 'freemium' },
                    { label: 'Pagament únic', value: 'paid' },
                    { label: 'Comerç o comissions', value: 'commerce' },
                    { label: 'Donacions o finançament sense ànim de lucre', value: 'donations' },
                    { label: 'Servei públic finançat amb impostos', value: 'public-service' },
                    { label: 'Desconegut', value: 'unknown' },
                  ],
                },
                {
                  name: 'jurisdiction',
                  label: 'Jurisdicció aplicable',
                  type: 'text',
                  admin: {
                    width: '50%',
                    description: 'Llei i tribunals que declaren les condicions per a persones usuàries de la UE.',
                  },
                },
              ],
            },
            {
              name: 'userBase',
              label: 'Volum de persones usuàries',
              type: 'text',
              admin: { description: 'Estimació amb any i origen. Exemple: «més de 2.000 milions (Meta, 2024)».' },
            },
            evidencedFact({
              name: 'accountRequired',
              label: 'Cal un compte per utilitzar-lo',
              description:
                'Un servei que funciona sense identificar-se dona un control que cap configuració posterior iguala.',
            }),
            evidencedFact({
              name: 'openSource',
              label: 'Codi obert',
              description:
                'Utilitza «Parcialment» quan només el client és obert i el servidor no. Serveix per saber si les afirmacions de seguretat es poden verificar.',
              extraFields: [
                { name: 'repositoryUrl', label: 'Repositori', type: 'text' },
                {
                  name: 'licence',
                  label: 'Llicència',
                  type: 'text',
                  admin: { description: 'GPL-3.0, MPL-2.0, AGPL…' },
                },
              ],
            }),
            /*
             * Serveis públics.
             *
             * Un servei que presta una administració no es pot mesurar amb la
             * mateixa vara que un de comercial: no té model de negoci, no fa
             * programes de recompenses i sovint no permet donar-se de baixa
             * perquè la llei l'obliga a conservar l'expedient. El que sí que ha
             * de fer és declarar la base jurídica, publicar el registre
             * d'activitats de tractament, conformar-se a l'Esquema Nacional de
             * Seguretat i oferir una via no digital. Aquest grup activa el bloc
             * d'indicadors públics del motor de puntuació.
             */
            {
              name: 'publicService',
              label: 'Servei públic',
              type: 'group',
              admin: {
                description:
                  'Només per a serveis prestats per una administració pública o per un encàrrec seu.',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'isPublicService',
                      label: 'És un servei públic',
                      type: 'checkbox',
                      index: true,
                      defaultValue: false,
                      admin: { width: '50%' },
                    },
                    {
                      name: 'administrationLevel',
                      label: 'Àmbit de l’administració',
                      type: 'select',
                      admin: { width: '50%' },
                      options: [
                        { label: 'Europea', value: 'european' },
                        { label: 'Estatal', value: 'state' },
                        { label: 'Autonòmica', value: 'regional' },
                        { label: 'Local', value: 'local' },
                        { label: 'Altres organismes públics', value: 'other' },
                      ],
                    },
                  ],
                },
                evidencedFact({
                  name: 'legalBasis',
                  label: 'Base jurídica declarada',
                  description:
                    'La norma que empara el tractament, citada article per article. «Parcialment» quan s’invoca l’interès públic sense concretar la norma.',
                  extraFields: [
                    { name: 'norm', label: 'Norma i article', type: 'text', localized: true },
                  ],
                }),
                evidencedFact({
                  name: 'processingRegistry',
                  label: 'Registre d’activitats de tractament públic',
                  description:
                    'Article 31 de la LOPDGDD. «Parcialment» si el registre existeix però no s’hi localitza l’activitat del servei.',
                  extraFields: [{ name: 'url', label: 'Enllaç al registre', type: 'text' }],
                }),
                evidencedFact({
                  name: 'dpia',
                  label: 'Avaluació d’impacte publicada',
                  extraFields: [{ name: 'url', label: 'Enllaç a l’avaluació', type: 'text' }],
                }),
                evidencedFact({
                  name: 'ensConformity',
                  label: 'Conformitat amb l’Esquema Nacional de Seguretat',
                  description:
                    'Declaració o certificació vigent. Marca la categoria del sistema si consta.',
                  extraFields: [
                    {
                      name: 'category',
                      label: 'Categoria del sistema',
                      type: 'select',
                      options: [
                        { label: 'Alta', value: 'high' },
                        { label: 'Mitjana', value: 'medium' },
                        { label: 'Bàsica', value: 'basic' },
                      ],
                    },
                    { name: 'url', label: 'Enllaç a la declaració', type: 'text' },
                  ],
                }),
                evidencedFact({
                  name: 'dpo',
                  label: 'Delegat de protecció de dades identificat',
                  extraFields: [{ name: 'contact', label: 'Contacte publicat', type: 'text' }],
                }),
                evidencedFact({
                  name: 'offlineAlternative',
                  label: 'Alternativa no digital',
                  description:
                    'Es pot fer el mateix tràmit presencialment, per telèfon o per correu. «Parcialment» si només una part.',
                }),
                evidencedFact({
                  name: 'accessibilityStatement',
                  label: 'Declaració d’accessibilitat',
                  description:
                    'Reial decret 1112/2018. «Parcialment» quan la declaració existeix però el servei s’hi declara parcialment conforme.',
                  extraFields: [{ name: 'url', label: 'Enllaç a la declaració', type: 'text' }],
                }),
                evidencedFact({
                  name: 'mandatoryRetention',
                  label: 'Conservació obligada per llei',
                  description:
                    'Quan és «Sí», els indicadors d’eliminació del compte queden fora del càlcul: no poder marxar no és una decisió del servei sinó un manament legal. Cal citar la norma al detall.',
                }),
              ],
            },
            /*
             * Disponibilitat en català.
             *
             * Va deliberadament FORA del càlcul de puntuacions. Que un servei
             * tingui interfície en català no el fa més respectuós amb la
             * privadesa, i barrejar les dues coses inflaria la nota d'empreses
             * que no ho mereixen i castigaria eines petites i molt bones que no
             * tenen prou gent per traduir-les. És una dimensió d'accés, no de
             * qualitat: informa la decisió de qui tria, sense contaminar la
             * mesura. Per la mateixa raó no entra a `EVIDENCED_FACTS` i no mou
             * les estadístiques de cobertura documental.
             *
             * La font primària és la mateixa fitxa de l'App Store, que publica
             * la llista d'idiomes d'interfície de cada versió. És verificable
             * per qualsevol persona i es pot tornar a consultar amb
             * `pnpm import-catalan`.
             */
            {
              name: 'catalan',
              label: 'Disponibilitat en català',
              type: 'group',
              admin: {
                description:
                  'Dimensió informativa: no entra al càlcul de cap puntuació ni de la confiança.',
              },
              fields: [
                evidencedFact({
                  name: 'interfaceAvailable',
                  label: 'Interfície en català',
                  description:
                    'Si el servei es pot fer servir amb la interfície en català. «Parcialment» quan només ho és una part (per exemple, l’aplicació sí i el web no).',
                }),
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'interfaceLanguages',
                      label: 'Idiomes d’interfície',
                      type: 'number',
                      index: true,
                      admin: {
                        width: '50%',
                        description:
                          'Quants idiomes declara la fitxa de la botiga. Dona context: no és el mateix no tenir català amb cinc idiomes que no tenir-lo amb seixanta.',
                      },
                    },
                    {
                      name: 'checkedAt',
                      label: 'Comprovat el',
                      type: 'date',
                      admin: {
                        width: '50%',
                        date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' },
                      },
                    },
                  ],
                },
                {
                  name: 'support',
                  label: 'Atenció i documentació en català',
                  type: 'select',
                  defaultValue: 'unknown',
                  options: [
                    { label: 'Sí, atenció i ajuda en català', value: 'yes' },
                    { label: 'Només l’ajuda, no l’atenció', value: 'help-only' },
                    { label: 'No', value: 'no' },
                    { label: 'Desconegut', value: 'unknown' },
                  ],
                  admin: {
                    description:
                      'La interfície és una cosa i poder-hi reclamar en català n’és una altra.',
                  },
                },
                {
                  name: 'note',
                  label: 'Matís',
                  type: 'textarea',
                  localized: true,
                },
              ],
            },
            {
              name: 'links',
              label: 'Enllaços oficials',
              type: 'group',
              admin: { description: 'Adreces que la persona lectora pot necessitar en aquest mateix moment.' },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'website', label: 'Lloc web', type: 'text', admin: { width: '50%' } },
                    { name: 'privacyPolicy', label: 'Política de privadesa', type: 'text', admin: { width: '50%' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'terms', label: 'Condicions del servei', type: 'text', admin: { width: '50%' } },
                    { name: 'privacyCenter', label: 'Centre de privadesa', type: 'text', admin: { width: '50%' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    { name: 'appStore', label: 'App Store', type: 'text', admin: { width: '50%' } },
                    { name: 'playStore', label: 'Google Play', type: 'text', admin: { width: '50%' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'deleteAccount',
                      label: 'Esborrar el compte',
                      type: 'text',
                      admin: {
                        width: '50%',
                        description:
                          'Si es deixa buit, la fitxa mostra l’adreça directa d’eliminació de la pestanya «Eliminació i drets».',
                      },
                    },
                    {
                      name: 'dataExport',
                      label: 'Descarregar les teves dades',
                      type: 'text',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'rightsRequest',
                      label: 'Exercir els drets RGPD',
                      type: 'text',
                      admin: { width: '50%', description: 'Formulari o adreça de contacte de protecció de dades.' },
                    },
                    {
                      name: 'adSettings',
                      label: 'Configuració de publicitat',
                      type: 'text',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'subprocessors',
                      label: 'Llista de subencarregats',
                      type: 'text',
                      admin: { width: '50%', description: 'Pàgina amb els tercers que tracten dades per compte del servei.' },
                    },
                    {
                      name: 'security',
                      label: 'Pàgina de seguretat',
                      type: 'text',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'transparencyReport',
                      label: 'Informe de transparència',
                      type: 'text',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'statusOrChangelog',
                      label: 'Historial de canvis de la política',
                      type: 'text',
                      admin: { width: '50%', description: 'Pàgina on el servei publica els canvis de les condicions o de la política.' },
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* ────────────────────── Dades i tractament ────────────────────── */
        {
          label: 'Dades i tractament',
          description:
            'La matriu de dades és el cor de la base de coneixement: és el que permet preguntar-li coses a tot el directori alhora.',
          fields: [
            {
              name: 'dataSummary',
              label: 'Resum del tractament',
              type: 'textarea',
              localized: true,
              admin: { description: 'Què recull aquest servei, explicat en llenguatge planer.' },
            },
            {
              name: 'dataCollection',
              label: 'Matriu de dades recollides',
              labels: { singular: 'Tipus de dada', plural: 'Tipus de dades' },
              type: 'array',
              admin: {
                initCollapsed: true,
                description:
                  'Una fila per tipus de dada documentat. No cal omplir-les totes: val més tenir-ne deu amb font que trenta inventades.',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'dataType',
                      label: 'Tipus de dada',
                      type: 'relationship',
                      relationTo: 'data-types',
                      required: true,
                      index: true,
                      admin: { width: '40%' },
                    },
                    {
                      name: 'status',
                      label: 'Es recull',
                      type: 'select',
                      required: true,
                      defaultValue: 'unknown',
                      index: true,
                      admin: { width: '30%' },
                      options: [
                        { label: 'Sí', value: 'yes' },
                        { label: 'Només si s’activa', value: 'optional' },
                        { label: 'No', value: 'no' },
                        { label: 'Desconegut', value: 'unknown' },
                      ],
                    },
                    {
                      name: 'linkedToIdentity',
                      label: 'Vinculada a la identitat',
                      type: 'select',
                      defaultValue: 'unknown',
                      admin: { width: '30%' },
                      options: [
                        { label: 'Sí', value: 'yes' },
                        { label: 'No', value: 'no' },
                        { label: 'Desconegut', value: 'unknown' },
                      ],
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'usedForTracking',
                      label: 'S’utilitza per seguir-te fora del servei',
                      type: 'select',
                      defaultValue: 'unknown',
                      admin: { width: '50%' },
                      options: [
                        { label: 'Sí', value: 'yes' },
                        { label: 'No', value: 'no' },
                        { label: 'Desconegut', value: 'unknown' },
                      ],
                    },
                    {
                      name: 'sharedWith',
                      label: 'Amb qui es comparteix',
                      type: 'select',
                      defaultValue: 'unknown',
                      admin: { width: '50%' },
                      options: [
                        { label: 'Amb ningú fora del servei', value: 'none' },
                        { label: 'Amb empreses del mateix grup', value: 'group' },
                        { label: 'Amb tercers', value: 'third-parties' },
                        { label: 'Amb intermediaris de dades', value: 'brokers' },
                        { label: 'Desconegut', value: 'unknown' },
                      ],
                    },
                  ],
                },
                {
                  name: 'purposes',
                  label: 'Finalitats',
                  type: 'relationship',
                  relationTo: 'processing-purposes',
                  hasMany: true,
                  index: true,
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'evidenceLevel',
                      label: 'Nivell d’evidència',
                      type: 'select',
                      options: evidenceLevelOptions,
                      defaultValue: 'unknown',
                      admin: { width: '50%' },
                    },
                    {
                      name: 'sources',
                      label: 'Fonts',
                      type: 'relationship',
                      relationTo: 'sources',
                      hasMany: true,
                      admin: { width: '50%' },
                    },
                  ],
                },
                { name: 'note', label: 'Matís', type: 'textarea', localized: true },
              ],
            },
            {
              name: 'tracking',
              label: 'Seguiment',
              type: 'group',
              fields: [
                evidencedFact({
                  name: 'crossAppTracking',
                  label: 'Seguiment entre aplicacions i webs',
                  description: 'Recull activitat de la persona fora d’aquest servei.',
                }),
                evidencedFact({
                  name: 'advertisingIdentifiers',
                  label: 'Ús d’identificadors publicitaris',
                  description: 'IDFA, AAID o identificadors propis amb finalitat publicitària.',
                }),
                evidencedFact({
                  name: 'thirdPartyTrackersPresent',
                  label: 'Rastrejadors de tercers integrats',
                  description:
                    'SDK d’altres empreses dins de l’aplicació. Marca «No» només si ho hem verificat, no si no ho hem mirat.',
                }),
                {
                  name: 'thirdPartyTrackers',
                  label: 'Rastrejadors documentats',
                  labels: { singular: 'Rastrejador', plural: 'Rastrejadors' },
                  type: 'array',
                  admin: { initCollapsed: true },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        { name: 'name', label: 'Nom', type: 'text', required: true, admin: { width: '50%' } },
                        {
                          name: 'company',
                          label: 'Empresa',
                          type: 'relationship',
                          relationTo: 'companies',
                          admin: { width: '50%' },
                        },
                      ],
                    },
                    { name: 'purpose', label: 'Finalitat', type: 'text', localized: true },
                    {
                      name: 'sources',
                      label: 'Fonts',
                      type: 'relationship',
                      relationTo: 'sources',
                      hasMany: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'dataUses',
              label: 'Usos de les dades',
              type: 'group',
              fields: [
                evidencedFact({
                  name: 'targetedAdvertising',
                  label: 'Publicitat personalitzada',
                  extraFields: [{ name: 'optOutUrl', label: 'Enllaç per desactivar-la', type: 'text' }],
                }),
                evidencedFact({
                  name: 'profiling',
                  label: 'Elaboració de perfils',
                  description: 'Inferència d’interessos, característiques o prediccions de comportament.',
                }),
                evidencedFact({
                  name: 'aiTraining',
                  label: 'Entrenament de models amb el contingut de les persones usuàries',
                  description:
                    'Marca «Parcialment» quan existeix un dret d’oposició realment exercible.',
                  extraFields: [
                    { name: 'optOutUrl', label: 'Enllaç per oposar-s’hi', type: 'text' },
                  ],
                }),
              ],
            },
            {
              name: 'sharing',
              label: 'Comunicació de dades',
              type: 'group',
              fields: [
                evidencedFact({ name: 'thirdPartySharing', label: 'Cessió a tercers' }),
                evidencedFact({
                  name: 'intraGroupSharing',
                  label: 'Compartició amb empreses del mateix grup',
                  description:
                    'Encara que no surtin de l’organització, concentren el perfil de la persona en un sol lloc.',
                }),
                evidencedFact({
                  name: 'dataBrokerSales',
                  label: 'Venda o cessió a intermediaris de dades',
                }),
                evidencedFact({
                  name: 'internationalTransfers',
                  label: 'Transferències internacionals fora de la UE',
                  extraFields: [
                    {
                      name: 'mechanism',
                      label: 'Mecanisme',
                      type: 'select',
                      options: [
                        { label: 'Decisió d’adequació (Data Privacy Framework)', value: 'adequacy' },
                        { label: 'Clàusules contractuals tipus', value: 'sccs' },
                        { label: 'Normes corporatives vinculants', value: 'bcrs' },
                        { label: 'Consentiment o excepció', value: 'derogation' },
                        { label: 'Sense transferències', value: 'none' },
                        { label: 'Desconegut', value: 'unknown' },
                      ],
                      defaultValue: 'unknown',
                    },
                  ],
                }),
              ],
            },
            {
              name: 'transparency',
              label: 'Transparència',
              type: 'group',
              fields: [
                {
                  name: 'policyClarity',
                  label: 'Claredat de la política de privadesa',
                  type: 'select',
                  defaultValue: 'unknown',
                  options: [
                    { label: 'Alta — diu dades i finalitats concretes', value: 'high' },
                    { label: 'Mitjana — categories àmplies però comprensibles', value: 'medium' },
                    { label: 'Baixa — genèrica, dispersa o remet a altres documents', value: 'low' },
                    { label: 'Desconeguda', value: 'unknown' },
                  ],
                },
                evidencedFact({
                  name: 'transparencyReport',
                  label: 'Informe de transparència',
                  extraFields: [{ name: 'url', label: 'Enllaç a l’informe', type: 'text' }],
                }),
              ],
            },
          ],
        },

        /* ────────────────── Retenció i eliminació ─────────────────────── */
        {
          label: 'Retenció i eliminació',
          description:
            'Què passa amb les dades quan la persona vol marxar. És l’apartat que més sovint contradiu el discurs comercial.',
          fields: [
            {
              name: 'retention',
              label: 'Conservació',
              type: 'group',
              fields: [
                evidencedFact({
                  name: 'definedPeriods',
                  label: 'Terminis de conservació concrets i publicats',
                  description: '«Mentre sigui necessari» no és un termini concret.',
                }),
                {
                  name: 'periods',
                  label: 'Terminis documentats',
                  labels: { singular: 'Termini', plural: 'Terminis' },
                  type: 'array',
                  admin: { initCollapsed: true },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'dataType',
                          label: 'Tipus de dada',
                          type: 'relationship',
                          relationTo: 'data-types',
                          admin: { width: '50%' },
                        },
                        {
                          name: 'period',
                          label: 'Termini',
                          type: 'text',
                          localized: true,
                          admin: { width: '50%', description: 'Exemple: «90 dies», «fins que s’elimini el compte».' },
                        },
                      ],
                    },
                    {
                      name: 'sources',
                      label: 'Fonts',
                      type: 'relationship',
                      relationTo: 'sources',
                      hasMany: true,
                    },
                  ],
                },
                evidencedFact({
                  name: 'dataAfterDeletion',
                  label: 'Conserva dades després d’eliminar el compte',
                  description:
                    'Còpies de seguretat, registres legals, contingut compartit amb altres persones, dades agregades.',
                }),
              ],
            },
            {
              name: 'accountDeletion',
              label: 'Eliminació del compte',
              type: 'group',
              fields: [
                evidencedFact({ name: 'possible', label: 'Es pot eliminar el compte' }),
                evidencedFact({
                  name: 'selfService',
                  label: 'Es pot fer sense contactar amb suport',
                }),
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'directUrl',
                      label: 'Enllaç directe',
                      type: 'text',
                      admin: { width: '60%', description: 'Adreça que porta al procés d’eliminació.' },
                    },
                    {
                      name: 'difficulty',
                      label: 'Dificultat',
                      type: 'select',
                      defaultValue: 'unknown',
                      index: true,
                      admin: { width: '40%' },
                      options: [
                        { label: 'Fàcil', value: 'easy' },
                        { label: 'Mitjana', value: 'medium' },
                        { label: 'Difícil', value: 'hard' },
                        { label: 'Impossible', value: 'impossible' },
                        { label: 'Desconeguda', value: 'unknown' },
                      ],
                    },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'waitingPeriodDays',
                      label: 'Dies fins a la supressió efectiva',
                      type: 'number',
                      admin: { width: '50%', description: 'Període de gràcia durant el qual el compte es pot recuperar.' },
                    },
                    {
                      name: 'requiresSupportContact',
                      label: 'Cal escriure a suport',
                      type: 'checkbox',
                      admin: { width: '50%' },
                    },
                  ],
                },
                {
                  name: 'steps',
                  label: 'Passos',
                  labels: { singular: 'Pas', plural: 'Passos' },
                  type: 'array',
                  admin: { initCollapsed: false, description: 'Instruccions verificades, en català, en ordre.' },
                  fields: [{ name: 'step', label: 'Pas', type: 'text', localized: true, required: true }],
                },
                {
                  name: 'obstacles',
                  label: 'Obstacles',
                  type: 'textarea',
                  localized: true,
                  admin: { description: 'Friccions reals: cal la contrasenya, cal l’app, cal esperar, cal cancel·lar subscripcions…' },
                },
                {
                  name: 'dataRetained',
                  label: 'Dades que es continuen conservant',
                  type: 'textarea',
                  localized: true,
                },
                {
                  name: 'sources',
                  label: 'Fonts del procés',
                  type: 'relationship',
                  relationTo: 'sources',
                  hasMany: true,
                },
              ],
            },
          ],
        },

        /* ─────────────────────── Drets i control ──────────────────────── */
        {
          label: 'Drets i control',
          fields: [
            {
              name: 'userRights',
              label: 'Drets',
              type: 'group',
              fields: [
                evidencedFact({
                  name: 'dataExport',
                  label: 'Exportació de les dades',
                  extraFields: [{ name: 'url', label: 'Enllaç a l’exportació', type: 'text' }],
                }),
                {
                  name: 'exportFormatQuality',
                  label: 'Format de l’exportació',
                  type: 'select',
                  defaultValue: 'unknown',
                  options: [
                    { label: 'Obert i llegible per màquina (JSON, CSV)', value: 'open' },
                    { label: 'Mixt (HTML més algun format obert)', value: 'mixed' },
                    { label: 'Propietari o poc reutilitzable', value: 'proprietary' },
                    { label: 'Desconegut', value: 'unknown' },
                  ],
                },
                evidencedFact({
                  name: 'rightsExercise',
                  label: 'Canal per exercir els drets RGPD',
                  description: 'Accés, rectificació, oposició, limitació i portabilitat.',
                  extraFields: [
                    { name: 'url', label: 'Enllaç o adreça', type: 'text' },
                    {
                      name: 'responseTimeDays',
                      label: 'Termini de resposta declarat (dies)',
                      type: 'number',
                    },
                  ],
                }),
              ],
            },
            {
              name: 'controls',
              label: 'Controls',
              type: 'group',
              fields: [
                evidencedFact({
                  name: 'adPersonalizationOptOut',
                  label: 'Es pot desactivar la publicitat personalitzada',
                  description: 'Marca «No aplica» si el servei no mostra publicitat.',
                  extraFields: [{ name: 'url', label: 'Enllaç al control', type: 'text' }],
                }),
                evidencedFact({
                  name: 'telemetryOptOut',
                  label: 'Es pot desactivar la telemetria i les dades d’ús',
                }),
                evidencedFact({
                  name: 'granularControls',
                  label: 'Controls granulars de privadesa',
                  description: 'Visibilitat, permisos, historial, activitat fora del servei.',
                }),
                {
                  name: 'defaultPosture',
                  label: 'Configuració per defecte',
                  type: 'select',
                  defaultValue: 'unknown',
                  options: [
                    { label: 'Protectora — cal activar el que exposa', value: 'protective' },
                    { label: 'Mixta', value: 'mixed' },
                    { label: 'Permissiva — cal desactivar el que exposa', value: 'permissive' },
                    { label: 'Desconeguda', value: 'unknown' },
                  ],
                },
                evidencedFact({
                  name: 'darkPatterns',
                  label: 'Patrons enganyosos',
                  description:
                    '«No» vol dir que ho hem comprovat i no n’hem trobat, no que no hi hàgim mirat.',
                }),
                {
                  name: 'darkPatternList',
                  label: 'Patrons documentats',
                  labels: { singular: 'Patró', plural: 'Patrons' },
                  type: 'array',
                  admin: { initCollapsed: true },
                  fields: [
                    {
                      type: 'row',
                      fields: [
                        {
                          name: 'type',
                          label: 'Tipus',
                          type: 'select',
                          admin: { width: '60%' },
                          options: [
                            { label: 'Consentiment desequilibrat', value: 'unbalanced-consent' },
                            { label: 'Camí de sortida amagat', value: 'hidden-exit' },
                            { label: 'Insistència repetida', value: 'nagging' },
                            { label: 'Llenguatge confús', value: 'confusing-language' },
                            { label: 'Opcions preseleccionades', value: 'preselected' },
                            { label: 'Culpabilització', value: 'confirmshaming' },
                            { label: 'Altres', value: 'other' },
                          ],
                        },
                        {
                          name: 'severity',
                          label: 'Gravetat',
                          type: 'select',
                          defaultValue: 'medium',
                          admin: { width: '40%' },
                          options: [
                            { label: 'Baixa', value: 'low' },
                            { label: 'Mitjana', value: 'medium' },
                            { label: 'Alta', value: 'high' },
                          ],
                        },
                      ],
                    },
                    { name: 'description', label: 'Descripció', type: 'textarea', localized: true },
                    {
                      name: 'sources',
                      label: 'Fonts',
                      type: 'relationship',
                      relationTo: 'sources',
                      hasMany: true,
                    },
                  ],
                },
              ],
            },
          ],
        },

        /* ────────────────────────── Seguretat ─────────────────────────── */
        {
          label: 'Seguretat',
          fields: [
            {
              name: 'security',
              label: 'Mesures de seguretat',
              type: 'group',
              fields: [
                evidencedFact({
                  name: 'e2ee',
                  label: 'Xifratge d’extrem a extrem',
                  description:
                    'Xifratge que impedeix al proveïdor llegir el contingut. Marca «No aplica» quan el servei no transporta contingut privat.',
                  extraFields: [
                    {
                      name: 'scope',
                      label: 'Abast',
                      type: 'select',
                      options: [
                        { label: 'Tot el contingut, per defecte', value: 'all-default' },
                        { label: 'Tot el contingut, però cal activar-ho', value: 'all-optin' },
                        { label: 'Part del contingut, per defecte', value: 'partial-default' },
                        { label: 'Part del contingut, i cal activar-ho', value: 'partial-optin' },
                        { label: 'Contingut sí, metadades no', value: 'metadata-excluded' },
                        { label: 'Cap', value: 'none' },
                      ],
                    },
                    { name: 'protocol', label: 'Protocol', type: 'text' },
                  ],
                }),
                evidencedFact({ name: 'transportEncryption', label: 'Xifratge en trànsit' }),
                evidencedFact({
                  name: 'atRestEncryption',
                  label: 'Xifratge en repòs',
                  description: 'Xifratge de les dades als servidors del proveïdor.',
                }),
                evidencedFact({
                  name: 'mfa',
                  label: 'Verificació en dos passos',
                  extraFields: [
                    {
                      name: 'methods',
                      label: 'Mètodes disponibles',
                      type: 'select',
                      hasMany: true,
                      options: [
                        { label: 'Passkeys', value: 'passkey' },
                        { label: 'Clau de seguretat física (FIDO2/U2F)', value: 'hardware-key' },
                        { label: 'Aplicació d’autenticació (TOTP)', value: 'totp' },
                        { label: 'Notificació a l’aplicació', value: 'app-push' },
                        { label: 'Correu electrònic', value: 'email' },
                        { label: 'SMS', value: 'sms' },
                      ],
                    },
                  ],
                }),
                evidencedFact({
                  name: 'independentAudits',
                  label: 'Auditories independents publicades',
                  extraFields: [{ name: 'url', label: 'Enllaç', type: 'text' }],
                }),
                evidencedFact({
                  name: 'bugBounty',
                  label: 'Programa de recompenses per errors',
                  extraFields: [{ name: 'url', label: 'Enllaç', type: 'text' }],
                }),
                evidencedFact({
                  name: 'vulnerabilityDisclosure',
                  label: 'Política de divulgació de vulnerabilitats',
                }),
              ],
            },
          ],
        },

        /* ────────────────────────── Alternatives ──────────────────────── */
        {
          label: 'Alternatives',
          description:
            'Només tenen sentit les alternatives que cobreixen raonablement la mateixa necessitat. Una recomanació que obliga a renunciar a la funció no és una alternativa.',
          fields: [
            {
              name: 'alternatives',
              label: 'Alternatives seleccionades per la redacció',
              labels: { singular: 'Alternativa', plural: 'Alternatives' },
              type: 'array',
              admin: { initCollapsed: false },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'app',
                      label: 'Aplicació',
                      type: 'relationship',
                      relationTo: 'apps',
                      required: true,
                      admin: { width: '50%' },
                    },
                    {
                      name: 'comparability',
                      label: 'Equivalència funcional',
                      type: 'select',
                      required: true,
                      defaultValue: 'partial',
                      admin: { width: '50%' },
                      options: [
                        { label: 'Equivalent — cobreix la mateixa necessitat', value: 'equivalent' },
                        { label: 'Parcial — cobreix la part principal', value: 'partial' },
                        { label: 'Complementària — resol una part concreta', value: 'complementary' },
                      ],
                    },
                  ],
                },
                {
                  name: 'rationale',
                  label: 'Per què és millor',
                  type: 'textarea',
                  localized: true,
                  required: true,
                },
                {
                  name: 'tradeOffs',
                  label: 'Què s’hi perd',
                  type: 'textarea',
                  localized: true,
                  admin: { description: 'Cap migració és gratuïta. Digues què deixa de funcionar.' },
                },
              ],
            },
          ],
        },

        /* ────────────────────── Puntuacions i revisió ─────────────────── */
        {
          label: 'Puntuacions i revisió',
          fields: [
            {
              name: 'scores',
              label: 'Puntuacions',
              type: 'group',
              admin: {
                description:
                  'Es recalculen automàticament en desar, a partir de la metodologia vigent. No s’editen a mà.',
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'privacy', label: 'Privadesa', type: 'number', index: true, admin: { readOnly: true, width: '20%' } },
                    { name: 'security', label: 'Seguretat', type: 'number', index: true, admin: { readOnly: true, width: '20%' } },
                    { name: 'agency', label: 'Control', type: 'number', index: true, admin: { readOnly: true, width: '20%' } },
                    { name: 'overall', label: 'Global', type: 'number', index: true, admin: { readOnly: true, width: '20%' } },
                    { name: 'confidence', label: 'Confiança', type: 'number', index: true, admin: { readOnly: true, width: '20%' } },
                  ],
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'provisional',
                      label: 'Provisional',
                      type: 'checkbox',
                      admin: { readOnly: true, width: '33%', description: 'La confiança encara és massa baixa per comparar aquesta fitxa amb altres.' },
                    },
                    {
                      name: 'methodologyVersion',
                      label: 'Versió de la metodologia',
                      type: 'text',
                      admin: { readOnly: true, width: '33%' },
                    },
                    {
                      name: 'computedAt',
                      label: 'Calculades el',
                      type: 'date',
                      admin: { readOnly: true, width: '34%', date: { displayFormat: 'dd/MM/yyyy HH:mm' } },
                    },
                  ],
                },
                {
                  name: 'coverage',
                  label: 'Cobertura dels indicadors',
                  type: 'number',
                  admin: { readOnly: true, description: 'Proporció d’indicadors aplicables que hem pogut documentar.' },
                },
                {
                  name: 'breakdown',
                  label: 'Detall per indicador',
                  type: 'json',
                  admin: {
                    readOnly: true,
                    description: 'Valor de cada indicador. És el que fa que la puntuació sigui explicable i reproduïble.',
                  },
                },
              ],
            },
            {
              name: 'review',
              label: 'Revisió editorial',
              type: 'group',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'researchStatus',
                      label: 'Estat de la recerca',
                      type: 'select',
                      defaultValue: 'initial',
                      index: true,
                      admin: { width: '50%' },
                      options: [
                        { label: 'Inicial — falten apartats', value: 'initial' },
                        { label: 'Documentada — apartats principals amb font', value: 'documented' },
                        { label: 'En profunditat — revisada i contrastada', value: 'in-depth' },
                      ],
                    },
                    {
                      name: 'lastReviewedAt',
                      label: 'Darrera revisió',
                      type: 'date',
                      index: true,
                      admin: { width: '50%', date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' } },
                    },
                  ],
                },
                {
                  name: 'incidentsReviewed',
                  label: 'Hem revisat l’historial d’incidents',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    description:
                      'Fins que no es marca, l’indicador d’incidents queda com a desconegut. No trobar bretxes no és el mateix que no haver-ne buscat.',
                  },
                },
                {
                  name: 'reviewedBy',
                  label: 'Revisat per',
                  type: 'relationship',
                  relationTo: 'users',
                },
                {
                  name: 'editorialNotes',
                  label: 'Notes internes',
                  type: 'textarea',
                  admin: { description: 'No es publiquen.' },
                },
                {
                  name: 'openQuestions',
                  label: 'Qüestions obertes',
                  labels: { singular: 'Qüestió', plural: 'Qüestions' },
                  type: 'array',
                  admin: { initCollapsed: true, description: 'Què falta per documentar d’aquesta fitxa.' },
                  fields: [{ name: 'question', label: 'Qüestió', type: 'text', required: true }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
