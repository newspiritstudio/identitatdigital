import { CATALAN_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(CATALAN_DATE)
const s = sourceAt(CATALAN_DATE)

/**
 * Lot 43 del bloc català: les aplicacions del transport públic de l’àrea de
 * Barcelona. TMB, la T-mobilitat de l’ATM, FGC, Rodalies (Renfe), AMB
 * Mobilitat i el TRAM. Totes, llevat del TRAM, són serveis públics i porten el
 * bloc d’indicadors d’administració. Les matrius (Generalitat, AMB) viuen al
 * lot 40 i Renfe Viajeros al lot 38.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'transports-metropolitans-de-barcelona',
      name: 'Transports Metropolitans de Barcelona',
      legalName: 'Ferrocarril Metropolità de Barcelona, S.A. i Transports de Barcelona, S.A.',
      parent: 'area-metropolitana-de-barcelona',
      description:
        'Nom comercial de les dues empreses públiques que exploten el metro (Ferrocarril Metropolità de Barcelona, S.A.) i els autobusos (Transports de Barcelona, S.A.) de Barcelona per compte de l’Àrea Metropolitana de Barcelona. Les dades de la TMB App les tracten com a corresponsables aquestes dues societats, Projectes i Serveis de Mobilitat, S.A., Transports Metropolitans de Barcelona, S.L. i la Fundació TMB.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      website: 'https://www.tmb.cat/',
      productDomains: ['tmb.cat'],
      privacyContact: 'dpd@tmb.cat',
    },
    {
      slug: 'autoritat-del-transport-metropolita',
      name: 'Autoritat del Transport Metropolità',
      legalName:
        'Autoritat del Transport Metropolità, Consorci per a la Coordinació del Sistema Metropolità del Transport Públic de l’Àrea de Barcelona',
      parent: 'generalitat-de-catalunya',
      description:
        'Consorci interadministratiu creat el 1997 que coordina el transport públic de l’àrea de Barcelona i n’és el titular del sistema tarifari integrat i de la T-mobilitat. La Generalitat de Catalunya en té el 51 % i les administracions locals (Ajuntament de Barcelona, Àrea Metropolitana de Barcelona i AMTU) el 49 %; l’Administració General de l’Estat hi és com a observadora.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      foundedYear: 1997,
      website: 'https://www.atm.cat/',
      productDomains: ['atm.cat', 't-mobilitat.cat'],
      privacyContact: 'dpd@atm.cat',
    },
    {
      slug: 'ferrocarrils-de-la-generalitat-de-catalunya',
      name: 'Ferrocarrils de la Generalitat de Catalunya',
      legalName: 'Ferrocarrils de la Generalitat de Catalunya',
      parent: 'generalitat-de-catalunya',
      description:
        'Empresa pública de la Generalitat creada el 1979 que explota les línies de ferrocarril Barcelona-Vallès, Llobregat-Anoia i Lleida-La Pobla de Segur, a més de funiculars, cremalleres i estacions de muntanya per mitjà de societats del grup.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      foundedYear: 1979,
      website: 'https://www.fgc.cat/',
      productDomains: ['fgc.cat', 'turismefgc.cat'],
      privacyContact: 'dpd@fgc.cat',
    },
    {
      slug: 'amb-informacio-i-serveis',
      name: 'AMB Informació i Serveis',
      legalName: 'AMB Informació i Serveis, S.A.',
      parent: 'area-metropolitana-de-barcelona',
      description:
        'Societat anònima metropolitana constituïda el 1986 com a òrgan de gestió directa de l’Àrea Metropolitana de Barcelona. Presta serveis d’informació de mobilitat i transport públic i desenvolupa l’aplicació AMB Mobilitat.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      foundedYear: 1986,
      website: 'https://www.amb.cat/s/web/mobilitat/gestio-i-organitzacio/amb-informacio.html',
      productDomains: ['ambmobilitat.cat', 'ambinformacio.cat'],
      privacyContact: 'dpd@ambinformacio.cat',
    },
    {
      slug: 'tramvia-metropolita',
      name: 'TRAM',
      legalName: 'Tramvia Metropolità, S.A. i Tramvia Metropolità del Besòs, S.A.',
      description:
        'Societats concessionàries privades del Trambaix i el Trambesòs, adjudicats per l’Autoritat del Transport Metropolità fins al 2032. L’accionista principal és Globalvia, amb més del 40 %, seguit de Moventia i Alstom, amb participacions menors de Transdev, TMB, FGC, Comsa i FCC. L’operació la fan dues unions temporals d’empreses, Trambaix UTE i Trambesòs UTE, integrades per Transdev i Marfina, que figuren com a venedor de l’aplicació a l’App Store.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      supervisoryNote: 'La política de privadesa de TRAM remet les reclamacions a l’Autoritat Catalana de Protecció de Dades.',
      ownership: 'private',
      foundedYear: 2000,
      primaryRevenueModel: 'unknown',
      website: 'https://tram.cat/',
      productDomains: ['tram.cat', 'trambcn.com'],
      privacyContact: 'dpo@tram.cat',
    },
  ],

  sources: [
    /* ── TMB ── */
    s('tmb-app-store', 'TMB App (Metro Bus Barcelona) a l’App Store', 'https://apps.apple.com/es/app/id387847254', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de la TMB App: cap dada per rastrejar; l’adreça de correu vinculada a la identitat per a la funcionalitat de l’app, i la ubicació aproximada, la interacció amb el producte i les dades d’errors com a dades no vinculades. No declara dades de pagament ni historial de compres.',
    }),
    s('tmb-politica-privadesa', 'Política de privacidad de TMB', 'https://www.tmb.cat/es/politica-de-privacidad', 'Transports Metropolitans de Barcelona', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política comuna dels cinc corresponsables del grup TMB (article 26 del RGPD). Inclou la TMB App entre les aplicacions cobertes, remet finalitats i bases jurídiques al registre d’activitats, diu que amb caràcter general no hi ha transferències internacionals, limita les cessions a les obligacions legals, dona el contacte del delegat de protecció de dades i cita l’APDCAT.',
    }),
    s('tmb-politica-galetes', 'Política de cookies de TMB', 'https://www.tmb.cat/es/politica-de-cookies', 'Transports Metropolitans de Barcelona', 'privacy-policy', 'primary', {
      language: 'es',
      summary: 'Política de galetes del web. Afirma que «las aplicaciones de TMB son nativas y no instalan cookies» i que els webs de TMB no tenen espais publicitaris.',
    }),
    s('tmb-app-faq', 'Centro de ayuda TMB App — Preguntas frecuentes', 'https://www.tmb.cat/es/barcelona/tmb-app-t-mobilitat/centro-ayuda-tmb-app/faq', 'Transports Metropolitans de Barcelona', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Preguntes freqüents de l’app. El compte TMB no cal per a la majoria de funcions però sí per a la T-mobilitat i les compres; registre amb correu i contrasenya o amb Facebook, Google, AMB o Apple; pagament amb Visa, Mastercard, Apple Pay, Google Pay o Bizum i opció de desar la targeta; la ubicació «solo se utiliza en tiempo real»; preferències de comunicacions comercials al menú personal; l’app encara s’està adaptant al Reial decret 1112/2018.',
    }),
    s('tmb-registre-tractament', 'Registro de actividades de tratamiento de datos personales de TMB', 'https://www.tmb.cat/es/registro-actividades-tratamiento-datos-personales', 'Transports Metropolitans de Barcelona', 'privacy-center', 'primary', {
      language: 'es',
      summary:
        'Registre d’activitats de TMB com a responsable. Hi consten, entre d’altres, el registre al web i a les apps (consentiment, tres anys), la venda de bitllets (contracte, deu anys per l’article 121-20 del Codi civil de Catalunya), les campanyes comercials (consentiment), la videovigilància (un mes) i un assistent virtual amb IA; per a elMeuBus preveu transferències als Estats Units.',
    }),
    s('tmb-certificacions', 'Certifications — TMB', 'https://www.tmb.cat/en/get-to-know-tmb/quality-and-environment/certifications', 'Transports Metropolitans de Barcelona', 'support-doc', 'primary', {
      language: 'en',
      summary: 'Llista de certificacions de TMB: ISO 9001, UNE-EN 13816, ISO 14001, ISO 50001 i ISO 45001. No n’hi ha cap de seguretat de la informació ni de l’Esquema Nacional de Seguretat.',
    }),
    s('tmb-accessibilitat', 'Declaración de accesibilidad de TMB', 'https://www.tmb.cat/es/accesibilidad', 'Transports Metropolitans de Barcelona', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Declaració provisional d’accessibilitat del web tmb.cat, pendent d’una auditoria externa en curs a 7 d’octubre de 2025. No cobreix l’aplicació mòbil.',
    }),
    s('tmb-genbeta-maquines', 'Hay 700 máquinas de venta de tickets del metro de Barcelona que no se actualizan, así que las van a retirar', 'https://www.genbeta.com/a-fondo/hay-700-maquinas-venta-tickets-metro-barcelona-que-no-se-actualizan-asi-que-van-a-retirar-ciberataques', 'Genbeta', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2025-08-14',
      summary: 'TMB retirarà unes 700 màquines de venda de bitllets del metro perquè el sistema operatiu ja no rep actualitzacions; només en substituirà una part.',
    }),
    s('tmb-metropoli-bretxa-2025', 'TMB investiga una brecha de seguridad que afectaría a la información personal de trabajadores', 'https://metropoliabierta.elespanol.com/el-pulso-de-la-ciudad/20250211/tmb-investiga-una-brecha-de-seguridad-que-afectaria-la-informacion-personal-trabajadores/923407725_0.html', 'Metrópoli Abierta', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2025-02-11',
      summary: 'TMB va detectar el 23 de gener de 2025 una carpeta de la intranet oberta per error amb informes mèdics, denúncies d’assetjament i altres documents d’empleats, i ho va comunicar a l’APDCAT, a l’Oficina Antifrau i als Mossos.',
    }),
    s('tmb-beteve-expedient-apdcat', 'Protecció de Dades obre un expedient sancionador a TMB per exposar dades confidencials', 'https://beteve.cat/societat/proteccio-dades-obre-expedient-sancionador-tmb-exposar-dades-confidencials/', 'betevé', 'press', 'secondary', {
      language: 'ca',
      summary:
        'Uns 9.000 treballadors podien consultar documents confidencials de companys a la intranet (contractes, diagnòstics mèdics, atestats, sentències). L’APDCAT hi veu almenys cinc infraccions greus i una de molt greu, entre les quals no notificar la bretxa i no analitzar els riscos després de la migració al núvol del 2021.',
    }),
    s('tmb-viaempresa-expedient-apdcat', 'L’APDCAT obre un expedient sancionador a TMB per la presumpta exposició de dades dels seus treballadors', 'https://www.viaempresa.cat/economia/apdcat-obre-expedient-sancionador-tmb-presumpta-exposicio-dades-seus-treballadors_2227840_102.html', 'VIA Empresa', 'press', 'secondary', {
      language: 'ca',
      publishedAt: '2025-12-29',
      summary: 'L’APDCAT obre un procediment sancionador contra TMB per fets del 2022 al 2025: una carpeta de Microsoft Teams amb dades d’empleats configurada com a pública. TMB anuncia al·legacions.',
    }),
    s('tmb-beteve-multa-antifrau', 'Multa al responsable de l’assessoria jurídica de TMB per exposar dades confidencials', 'https://beteve.cat/societat/multa-responsable-assessoria-juridica-tmb-dades-confidencials/', 'betevé', 'press', 'secondary', {
      language: 'ca',
      publishedAt: '2026-09-01',
      summary: 'L’Oficina Antifrau de Catalunya multa amb 60.000 euros el director de l’assessoria jurídica de TMB per haver exposat la identitat de persones alertadores arran de la bretxa de la intranet. L’afectat anuncia recurs.',
    }),

    /* ── T-mobilitat ── */
    s('tmobilitat-app-store', 'T-mobilitat a l’App Store', 'https://apps.apple.com/es/app/id1586790838', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Fitxa de l’app de l’ATM. L’etiqueta de privadesa diu «No se recopilan datos», mentre la descripció convida a donar-se d’alta i registrar les dades. Enllaça la pàgina de protecció de dades de la T-mobilitat.',
    }),
    s('tmobilitat-proteccio-dades', 'Protecció de dades — T-mobilitat', 'https://t-mobilitat.cat/web/t-mobilitat/proteccio-de-dades', 'Autoritat del Transport Metropolità', 'privacy-policy', 'primary', {
      language: 'ca',
      summary:
        'Política de la T-mobilitat. Responsable: l’ATM (NIF P5890049I), amb delegat de protecció de dades. Bases de l’article 6.1 a, b, c i e del RGPD; finalitats d’alta, adquisició de títols, gestió de l’app, comunicacions i estadística; conservació remesa al registre d’activitats; destinataris públics; transferències internacionals «no previstes» llevat del butlletí, el núvol de Google o Microsoft i galetes de tercers, amb clàusules contractuals tipus.',
    }),
    s('tmobilitat-condicions', 'Condicions d’utilització de la T-mobilitat (versió 02.2024)', 'https://t-mobilitat.cat/documents/54021/0/02.2024_Condicions+d%E2%80%99utilitzaci%C3%B3+T-mobilitat.pdf/fb0501b7-ca5d-ac39-e936-c3cd4f09c89b?t=1709116783119', 'Autoritat del Transport Metropolità', 'terms', 'primary', {
      language: 'ca',
      publishedAt: '2024-02-01',
      summary:
        'Condicions del sistema. Validar amb el mòbil exigeix l’alta i un telèfon amb NFC; el suport de cartró és anònim i transferible i la targeta de PVC personalitzada va lligada al document d’identitat. L’article 12 regula la baixa: presencial al Centre d’Atenció i Informació o a l’àrea privada del web si no hi ha suports vinculats, irreversible i amb conservació de les dades associades a penalitzacions fins que prescriguin.',
    }),
    s('tmobilitat-rat', 'Registre d’activitats de tractament de la T-mobilitat', 'https://t-mobilitat.cat/documents/54021/0/20250525_RAT+T-mobilitat.rev_DEF+%288%29.xlsx/5cd2b9e6-9461-01cb-48ec-60fdd377b7a1?t=1761117162225', 'Autoritat del Transport Metropolità', 'privacy-center', 'primary', {
      language: 'ca',
      publishedAt: '2025-05-23',
      summary:
        'Full de càlcul amb catorze activitats. «Alta app» recull nom, document d’identitat, data de naixement, adreça, correu i telèfon; «Ús T-mobilitat» recull la data, l’hora i el lloc de cada validació (operador i zona) i els comunica als operadors, a administracions i a forces de seguretat. Totes les activitats diuen que no hi ha transferències internacionals.',
    }),
    s('tmobilitat-cartera-iphone', 'La T-mobilitat ja permet validar al transport públic amb dispositius iPhone', 'https://www.atm.cat/en/w/ndp_la-t-mobilitat-ja-permet-validar-al-transport-p%C3%BAblic-amb-dispositius-iphone', 'Autoritat del Transport Metropolità', 'support-doc', 'primary', {
      language: 'ca',
      publishedAt: '2024-12-20',
      summary: 'Des del 20 de desembre de 2024 es pot validar amb l’iPhone per mitjà de l’app Cartera T-mobilitat, que s’ha de vincular a l’app T-mobilitat, a la TMB App o a la de FGC.',
    }),
    s('atm-seguretat-informacio', 'Seguretat de la informació — ATM', 'https://www.atm.cat/es/seguretat-de-la-informacio', 'Autoritat del Transport Metropolità', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Política de seguretat de la informació de l’ATM, aprovada el 28 d’octubre de 2025 i basada en l’Esquema Nacional de Seguretat i la ISO 27001, amb un comitè de ciberseguretat i protecció de dades. No publica cap certificat de conformitat.',
    }),
    s('atm-accessibilitat', 'Declaració d’accessibilitat — ATM', 'https://www.atm.cat/accessibilitat', 'Autoritat del Transport Metropolità', 'support-doc', 'primary', {
      language: 'ca',
      publishedAt: '2024-03-12',
      summary: 'Declaració d’accessibilitat del web atm.cat, «parcialment conforme». No cobreix l’aplicació T-mobilitat.',
    }),
    s('atm-organitzacio', 'Organització — Transparència ATM', 'https://www.atm.cat/en/atm/transparencia/organitzacio', 'Autoritat del Transport Metropolità', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Consorci interadministratiu voluntari creat el 1997, amb la Generalitat (51 %) i les administracions locals (49 %): Ajuntament de Barcelona, AMB i AMTU.',
    }),
    s('tmobilitat-cronica-ciberseguretat', 'El transporte público de Barcelona blinda la T-mobilitat contra ciberataques', 'https://cronicaglobal.elespanol.com/business/20241211/el-transporte-publico-de-barcelona-t-mobilitat-ciberataques/907409293_0.html', 'Crónica Global', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2024-12-11',
      summary: 'L’ATM contracta per 546.502 euros una oficina de ciberseguretat per al sistema T-mobilitat.',
    }),
    s('apdcat-ps-57-2024', 'Resolució del procediment sancionador PS 57/2024, referent a l’Autoritat del Transport Metropolità', 'https://seu.apdcat.cat/ca/documentPublic/download/7504', 'Autoritat Catalana de Protecció de Dades', 'regulator', 'authority', {
      language: 'ca',
      publishedAt: '2024-12-09',
      summary:
        'Un treballador d’un punt d’atenció T-mobilitat de Renfe a Sants va pujar la sol·licitud d’alta d’una persona a l’àrea privada d’una altra, amb nom, signatura, data de naixement, correu, document d’identitat i telèfon. L’APDCAT declara dues infraccions de l’ATM (articles 5.1.f i 28 del RGPD, per no tenir contracte d’encarregat amb Renfe Viajeros) i li requereix mesures correctores.',
    }),
    s('tmobilitat-beteve-web-2021', 'El web de la T-mobilitat deixa al descobert dades personals d’usuaris', 'https://beteve.cat/mobilitat/web-t-mobilitat-deixa-descobert-dades-personals-usuaris/', 'betevé', 'press', 'secondary', {
      language: 'ca',
      publishedAt: '2021-10-05',
      summary: 'Un entorn de proves del web de la T-mobilitat, amb el panell d’administració accessible amb credencials per defecte, exposava dades de prop de 2.000 persones registrades.',
    }),
    s('tmobilitat-totbarcelona-2021', 'La T-mobilitat reconeix un «error operatiu» que exposa dades d’usuaris', 'https://www.totbarcelona.cat/mobilitat/tmobilitat-error-operatiu-exposa-dades-usuaris-148491/', 'TOT Barcelona', 'press', 'secondary', {
      language: 'ca',
      publishedAt: '2021-10-05',
      summary: 'L’ATM qualifica l’exposició d’«error operatiu» amb «dades no sensibles».',
    }),
    s('tmobilitat-directa-2018', 'La T-mobilitat no es mou', 'https://directa.cat/la-t-mobilitat-no-es-mou/', 'La Directa', 'press', 'secondary', {
      language: 'ca',
      publishedAt: '2018-11-17',
      summary: 'Crítiques a la traçabilitat dels desplaçaments i a l’accés de les empreses del consorci SOC Mobilitat (CaixaBank, Fujitsu, Indra, Marfina) a les dades de viatge; l’ATM defensa que en manté el control i la propietat.',
    }),

    /* ── FGC ── */
    s('fgc-app-store', 'FGC: horario, zonas, tarifas a l’App Store', 'https://apps.apple.com/es/app/id481225824', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: dades de contacte utilitzades per rastrejar en apps i webs d’altres empreses; correu, fotos o vídeos i identificador d’usuari vinculats a la identitat; nom, correus o missatges, ubicació precisa i aproximada, interacció i diagnòstics com a dades no vinculades.',
    }),
    s('fgc-politica-privadesa', 'Política de privacitat — FGC', 'https://www.fgc.cat/politica-de-privacitat/', 'Ferrocarrils de la Generalitat de Catalunya', 'privacy-policy', 'primary', {
      language: 'ca',
      summary: 'Política general d’FGC. Identifica el responsable, la delegada de protecció de dades, les vies d’exercici de drets (correu, correu postal i tràmit en línia) i l’APDCAT.',
    }),
    s('fgc-termes-usuaris', 'Termes i condicions FGC persones usuàries', 'https://www.fgc.cat/termes-i-condicions-fgc-persones-usuaries/', 'Ferrocarrils de la Generalitat de Catalunya', 'terms', 'primary', {
      language: 'ca',
      summary:
        'Condicions aplicables a l’app. Registre basat en el consentiment, amb comunicacions comercials només si es marca la casella; dades de qualificació d’hàbits i interessos opcionals; ús de l’adreça IP, la SIM, la wifi o la latitud i longitud; cap cessió llevat d’obligació legal; baixa del compte des de l’app en tancar la sessió; conservació fins a la baixa i els terminis legals.',
    }),
    s('fgc-rat', 'Registre d’activitats de tractament — Portal de transparència FGC', 'https://transparencia.fgc.cat/ca/informacio-publica/normativa-i-informacio-interes-public/registre-activitats-tractament-i-proteccio-de-dades/registre-d2019activitats-de-tractament', 'Ferrocarrils de la Generalitat de Catalunya', 'privacy-center', 'primary', {
      language: 'ca',
      publishedAt: '2026-04-28',
      summary: 'Registre en .docx i .xlsx. Hi ha l’activitat «Servei d’alertes» (consentiment; adreça, telèfon i nom; fins a la revocació) i «Aplicatius mòbils (FGC Turisme)», però cap activitat per a l’app de transport.',
    }),
    s('fgc-accessibilitat', 'Accessibilitat — FGC', 'https://www.fgc.cat/accessibilitat/', 'Ferrocarrils de la Generalitat de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Declaració d’accessibilitat del web fgc.cat, parcialment conforme i revisada el 5 de juliol de 2022. No esmenta l’aplicació.',
    }),
    s('fgc-centres-atencio', 'Centres d’atenció al client — FGC', 'https://www.fgc.cat/atencio-al-client/centres-presencials/', 'Ferrocarrils de la Generalitat de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Adreces dels centres d’atenció presencial d’FGC per fer consultes sense passar per canals digitals.',
    }),
    s('apdcat-ip-14-2021', 'Resolució d’arxivament de les actuacions d’informació prèvia IP 14/2021, referent a Ferrocarrils de la Generalitat de Catalunya', 'https://seu.apdcat.cat/ca/documentPublic/download/3247', 'Autoritat Catalana de Protecció de Dades', 'regulator', 'authority', {
      language: 'ca',
      summary: 'Arxivament d’una denúncia contra FGC. FGC hi acredita una anàlisi de riscos feta per S2 Grupo el juny del 2018 dins del pla d’adequació a l’Esquema Nacional de Seguretat i una política de seguretat de la informació des del 2008.',
    }),

    /* ── Rodalies ── */
    s('rodalies-app-store', 'Rodalies a l’App Store', 'https://apps.apple.com/es/app/id6788656454', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Fitxa de l’app nova de Renfe Viajeros (juliol de 2026). L’etiqueta declara els diagnòstics com a dades utilitzades per rastrejar i la ubicació precisa i les dades d’errors com a no vinculades. Avisa que l’app pot fer servir la ubicació en segon pla. Enllaça la política de l’app Cercanías.',
    }),
    s('rodalies-politica-privadesa', 'Política de privacidad App Cercanías', 'https://www.renfe.com/es/es/ayuda/informacion-legal-viajeros/privacidad-cookies/privacidad-apps/politica-de-privacidad-app-cercanias', 'Renfe Viajeros, S.M.E., S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-07-13',
      summary:
        'Política que l’App Store enllaça per a Rodalies. Bases per finalitat (contracte, interès legítim, obligació legal per a les asseguradores segons el Reial decret 1575/1989 i consentiment per a les comunicacions comercials amb perfilació); Adobe Analytics com a encarregat; l’assistent virtual no perfila ni entrena models d’IA; permisos d’ubicació, micròfon, biometria i notificacions; conservació pel «tiempo estrictamente necesario».',
    }),
    s('rodalies-gencat-app', 'Nova app de Rodalies', 'https://rodalies.gencat.cat/ca/atencio_al_client/app_rodalies/index.html', 'Rodalies de Catalunya', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Anuncia la nova app de Renfe amb la identitat visual de Rodalies de Catalunya, publicada l’agost de 2026, i la retirada de l’app antiga el 15 de setembre de 2026.',
    }),
    s('rodalies-accessibilitat-cercanias', 'Declaración de accesibilidad de la app Cercanías', 'https://www.renfe.com/es/es/ayuda/informacion-legal-viajeros/accesibilidad-web/accesibilidad-app-cercanias', 'Renfe Viajeros, S.M.E., S.A.', 'support-doc', 'primary', {
      language: 'es',
      summary: 'Declaració de l’app Cercanías, parcialment conforme, preparada el 13 de novembre de 2024 amb avaluació de CTIC. No esmenta l’app Rodalies.',
    }),
    s('rodalies-empresa-mixta-2026', 'Nueva etapa para Rodalies: arranca la empresa mixta Renfe-Generalitat', 'https://www.thenewbarcelonapost.com/nueva-etapa-rodalies-arranca-empresa-mixta-renfe-generalitat/', 'The New Barcelona Post', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2026-01-20',
      summary: 'Es constitueix Rodalies de Catalunya, S.M.E., S.A., amb el 50,1 % de Renfe i el 49,9 % de la Generalitat; operarà el servei a partir del 2027, quan tingui la llicència i el certificat de seguretat.',
    }),
    s('renfe-credential-stuffing-2019', 'Atacantes están intentando entrar en cuentas de Renfe: cambia tus contraseñas', 'https://www.elespanol.com/omicrono/software/20190318/atacantes-intentando-entrar-cuentas-renfe-cambia-contrasenas/384212810_0.html', 'El Español', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2019-03-18',
      summary: 'Intents massius d’accés als comptes de renfe.com amb contrasenyes filtrades d’altres serveis. Renfe va demanar canviar-les i va dir que les dades de pagament no s’havien vist afectades.',
    }),

    /* ── AMB Mobilitat ── */
    s('ambmob-app-store', 'AMB Mobilitat (Picmi) a l’App Store', 'https://apps.apple.com/es/app/id588690805', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: cap dada per rastrejar ni vinculada; interacció amb el producte i dades d’errors no vinculades, per a analítica. L’enllaç de privadesa porta a l’avís legal genèric de l’AMB.',
    }),
    s('amb-avis-legal', 'Aviso legal — Àrea Metropolitana de Barcelona', 'http://www.amb.cat/es/web/amb/avis-legal', 'Àrea Metropolitana de Barcelona', 'terms', 'primary', {
      language: 'es',
      summary: 'Avís legal genèric del web de l’AMB, que l’App Store enllaça com a política de privadesa de l’app.',
    }),
    s('amb-politica-privacitat', 'Política de privacitat — AMB', 'https://www.amb.cat/web/amb/politica-de-privacitat', 'Àrea Metropolitana de Barcelona', 'privacy-policy', 'primary', {
      language: 'ca',
      summary:
        'Política comuna de l’AMB i els seus ens, amb AMB Informació i Serveis com a responsable segons el servei. Base: execució del servei o consentiment i competències de l’ens; «en cap cas» decisions automatitzades; proveïdors dins de l’Espai Econòmic Europeu; drets per escrit amb document d’identitat o per instància genèrica; delegat de protecció de dades i APDCAT.',
    }),
    s('ambinfo-rat', 'Registre de tractaments d’AMB Informació i Serveis', 'https://docs.amb.cat/alfresco/api/-default-/public/alfresco/versions/1/nodes/8a18e7c6-0daf-4fc4-b45d-1a108cb676eb/content/AMB_Informacio%20Registre%20de%20Tractaments.pdf?attachment=false&mimeType=application/pdf&sizeInBytes=70272', 'AMB Informació i Serveis', 'privacy-center', 'primary', {
      language: 'ca',
      summary: 'Registre propi de la societat, amb delegat de protecció de dades. Només hi figuren tractaments interns (personal, videovigilància); els de mobilitat els atribueix a l’AMB.',
    }),
    s('amb-rat', 'Registre d’activitats de tractament de l’AMB', 'https://docs.amb.cat/alfresco/api/-default-/public/alfresco/versions/1/nodes/d2729df1-5af5-4cf1-ad3a-e18fbafd027e/content/AMB_Registre%20activitats%20tractament.pdf?attachment=false&mimeType=application/pdf&sizeInBytes=168951', 'Àrea Metropolitana de Barcelona', 'privacy-center', 'primary', {
      language: 'ca',
      summary: 'Registre de l’AMB, amb la delegació de protecció de dades externalitzada. No conté cap activitat específica de l’app AMB Mobilitat.',
    }),
    s('ambmob-picmi-taxi-condicions', 'Condicions generals d’ús de Picmi Taxi (v1.3)', 'https://docs.amb.cat/alfresco/api/-default-/public/alfresco/versions/1/nodes/9fd4ff85-d607-4f3b-a818-6e482bf009c0/content/Condicions%20Generals%20Usuaris%20Picmi_CAT_20.04.23.pdf?attachment=false&mimeType=application/pdf&sizeInBytes=633932', 'Institut Metropolità del Taxi', 'terms', 'primary', {
      language: 'ca',
      publishedAt: '2023-04-20',
      summary:
        'Condicions del servei de petició de taxi integrat a l’app. Registre amb correu validat i contrasenya; es tracten el nom, el correu i la ubicació en el moment de la petició, amb l’Institut Metropolità del Taxi com a responsable i el consentiment com a base; el taxista rep la ubicació però no les dades identificatives; el pagament es fa al taxista; les dades es conserven després de la baixa el temps que fixi la llei.',
    }),
    s('ambinfo-ens-certificat', 'Certificat de conformitat amb l’Esquema Nacional de Seguretat — AMB Informació i Serveis', 'https://docs.amb.cat/alfresco/api/-default-/public/alfresco/versions/1/nodes/674184b0-2384-4776-90ec-4e74cbc484df/content/ENS%20CAT%20-%20AMB%20INFORMACI%C3%93%20I%20SERVEIS%20(%20MEDIA%20INI)_signed.pdf?attachment=false&mimeType=application/pdf&sizeInBytes=374238', 'Applus+', 'audit', 'independent', {
      language: 'ca',
      publishedAt: '2025-04-30',
      summary: 'Certificat ENS-0820/25 de categoria mitjana, vigent fins al 30 d’abril de 2027, per als «sistemes d’informació que donen suport als serveis de mobilitat i transport públic», allotjats a AWS (regió Europa) i ASAC.',
    }),
    s('ambinfo-qui-som', 'AMB Informació i Serveis — Mobilitat AMB', 'https://www.amb.cat/s/web/mobilitat/gestio-i-organitzacio/amb-informacio.html', 'Àrea Metropolitana de Barcelona', 'support-doc', 'primary', {
      language: 'ca',
      summary: 'Societat anònima metropolitana constituïda el 21 de maig de 1986 com a òrgan de gestió directa de l’AMB; entre les seves activitats hi ha l’aplicatiu AMB Mobilitat i el telèfon d’informació 010 metropolità.',
    }),

    /* ── TRAM ── */
    s('tram-app-store', 'TRAM Barcelona a l’App Store', 'https://apps.apple.com/es/app/id1053996621', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary: 'Etiqueta de privadesa: «El desarrollador no recopila ningún dato en esta app». El venedor és la UTE Detren, Marfina i Trambaix. L’enllaç de privadesa (tram.cat/es/privacidad) retorna un error 404.',
    }),
    s('tram-privacitat', 'Política de privacidad — TRAM', 'https://tram.cat/privacidad', 'TRAM', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política conjunta de Tramvia Metropolità i Tramvia Metropolità del Besòs, amb les UTE operadores com a encarregades. L’apartat de l’app declara la ubicació i les notificacions per consentiment i l’anàlisi d’ús per interès legítim, feta per Google Inc. com a empresa «adherida a la decisión Privacy Shield», sense termini de conservació. Remet les reclamacions a l’APDCAT.',
    }),
    s('tram-qui-som', 'Quiénes somos — TRAM', 'https://tram.cat/es/quien-somos', 'TRAM', 'support-doc', 'primary', {
      language: 'es',
      summary: 'TRAM agrupa les dues societats concessionàries i les dues UTE operadores; les concessions les va atorgar l’Autoritat del Transport Metropolità fins al 2032.',
    }),
    s('tram-accionistes-elnacional', 'Alstom asume la presidencia del tranvía de Barcelona', 'https://www.elnacional.cat/oneconomia/es/empresas/alstom-presidencia-tranvia-barcelona-miquel-marti-cifras-record_1429816_102.html', 'El Nacional', 'press', 'secondary', {
      language: 'es',
      publishedAt: '2025-06-06',
      summary: 'Globalvia és el primer accionista del TRAM, amb més del 40 %, seguit de Moventia (20 %) i Alstom (17 %); també hi participen Transdev, TMB, FGC, Comsa i FCC.',
    }),
    s('tjue-schrems-ii', 'The Court of Justice invalidates Decision 2016/1250 on the adequacy of the protection provided by the EU-US Data Protection Shield', 'https://curia.europa.eu/jcms/upload/docs/application/pdf/2020-07/cp200091en.pdf', 'Tribunal de Justícia de la Unió Europea', 'regulator', 'authority', {
      language: 'en',
      publishedAt: '2020-07-16',
      summary: 'Comunicat de premsa de la sentència C-311/18 (Schrems II), que invalida l’Escut de Privadesa UE-EUA com a base per a les transferències internacionals.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ TMB App ═══════════════════════════ */
    {
      slug: 'tmb-app',
      name: 'TMB App (Metro Bus Barcelona)',
      company: 'transports-metropolitans-de-barcelona',
      categories: ['mobilitat-i-transport', 'mapes-i-navegacio'],
      tagline: 'L’app del metro i el bus funciona sense compte, però l’etiqueta no declara la targeta desada ni l’historial de compres',
      summary:
        'La TMB App planifica trajectes, mostra el temps d’arribada dels autobusos i ven i recarrega títols de la T-mobilitat. Sense compte es poden fer servir gairebé totes les funcions d’informació; comprar exigeix el compte TMB, que es pot crear amb Facebook, Google, Apple o l’AMB. L’etiqueta de l’App Store només declara el correu com a dada vinculada, tot i que l’app permet desar la targeta i guarda l’historial de compres. TMB publica un registre d’activitats amb terminis concrets i un delegat de protecció de dades, però no cap certificació de l’Esquema Nacional de Seguretat, i té obert un expedient sancionador de l’APDCAT per una bretxa que va exposar dades del seu personal.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      brandColor: '#E4002B',
      links: {
        website: 'https://www.tmb.cat/',
        privacyPolicy: 'https://www.tmb.cat/es/politica-de-privacidad',
        privacyCenter: 'https://www.tmb.cat/es/registro-actividades-tratamiento-datos-personales',
        appStore: 'https://apps.apple.com/es/app/id387847254',
      },
      accountRequired: f('partial', 'official', ['tmb-app-faq'], 'No cal compte per a la «gran majoria» de funcions de cerca i planificació; sí per operar amb la T-mobilitat, comprar títols, desar favorits al núvol i rebre alertes.'),
      openSource: f('no', 'official', ['tmb-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'local',
        legalBasis: f('partial', 'official', ['tmb-app-faq', 'tmb-registre-tractament'], 'La clàusula del registre declara «ejecución del contrato y consentimiento», i el registre d’activitats assigna a cada tractament una lletra de l’article 6.1 del RGPD (consentiment per al compte, contracte per a la venda de bitllets, interès legítim per als avisos). No s’hi cita cap norma que atribueixi a TMB la competència sobre el tractament.'),
        processingRegistry: f('yes', 'official', ['tmb-registre-tractament'], 'Registre publicat al web, amb finalitat, base jurídica, categories de dades i termini de conservació per activitat. N’hi ha un altre per als tractaments en què TMB actua com a encarregada.', { url: 'https://www.tmb.cat/es/registro-actividades-tratamiento-datos-personales' }),
        dpia: unknown('No hem trobat cap avaluació d’impacte publicada sobre la TMB App ni sobre la venda de títols.'),
        ensConformity: f('no', 'official', ['tmb-certificacions'], 'La pàgina de certificacions de TMB enumera ISO 9001, UNE-EN 13816, ISO 14001, ISO 50001 i ISO 45001, però cap de seguretat de la informació ni cap declaració o certificació de l’Esquema Nacional de Seguretat.'),
        dpo: f('yes', 'official', ['tmb-politica-privadesa'], 'Delegat de protecció de dades amb correu propi, que diu respondre en un «plazo prudencial de dos meses».', { contact: 'dpd@tmb.cat' }),
        offlineAlternative: f('yes', 'official', ['tmb-app-faq', 'tmb-genbeta-maquines'], 'Els títols es poden comprar a les màquines de venda i als Punts TMB, on també es demanen les factures que l’app encara no emet. TMB ha anunciat la retirada d’unes 700 màquines antigues, de les quals només en substituirà una part.'),
        accessibilityStatement: f('partial', 'official', ['tmb-accessibilitat', 'tmb-app-faq'], 'El web té una declaració provisional pendent d’auditoria externa. De l’app, les preguntes freqüents només diuen que TMB «está trabajando» per fer-la accessible d’acord amb el Reial decret 1112/2018; no hi ha declaració amb grau de conformitat.', { url: 'https://www.tmb.cat/es/accesibilidad' }),
        mandatoryRetention: f('no', 'official', ['tmb-registre-tractament'], 'El registre fixa deu anys per als justificants de venda (article 121-20 del Codi civil de Catalunya), però cap norma impedeix tancar el compte TMB.'),
      },
      dataSummary:
        'Sense compte, l’app només fa servir la ubicació en temps real per trobar parades i no la desa, segons TMB. Amb compte, el correu, la targeta desada i l’historial de compres de títols queden lligats a la persona, i el compte TMB es vincula al de la T-mobilitat de l’ATM.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['tmb-app-store', 'tmb-app-faq'], note: 'Clau del compte TMB; la clàusula de registre preveu també la prospecció comercial amb consentiment.' }),
        row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tmb-app-faq'], note: 'Llevat que s’entri amb Facebook, Google, Apple o el compte de l’AMB.' }),
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['tmb-app-faq'], note: 'El compte TMB es vincula al compte T-mobilitat de l’ATM.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tmb-app-faq'], note: 'Es pot desar la targeta per a compres futures; l’etiqueta de l’App Store no ho declara.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['tmb-app-faq', 'tmb-registre-tractament'], note: 'L’historial de compra dins de l’app; el registre fixa deu anys de conservació per a la venda de bitllets.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['tmb-app-store', 'tmb-app-faq'], note: 'Les preguntes freqüents parlen de GPS i Bluetooth i diuen que l’app no emmagatzema ni rastreja la ubicació.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['tmb-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['tmb-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['tmb-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown('Ni la política ni les preguntes freqüents esmenten identificadors publicitaris.'),
        thirdPartyTrackersPresent: unknown('La política de galetes diu que les apps «no instalan cookies», però no enumera els SDK d’analítica de l’app.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['tmb-app-faq', 'tmb-politica-galetes'], 'El registre inclou la «prospección comercial» amb consentiment i el compte rep comunicacions de promocions, configurables al menú personal. La política de galetes diu que les apps de TMB «no instalan cookies» i que els webs no tenen espais publicitaris.'),
        profiling: unknown('La política reconeix el dret a no ser objecte de decisions automatitzades, però no diu si se’n prenen.'),
        aiTraining: unknown('El registre esmenta un assistent virtual amb IA, però no diu si les converses serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['tmb-politica-privadesa', 'tmb-app-faq'], 'La política limita les cessions a les obligacions legals. Donar-se d’alta a la T-mobilitat des de l’app crea un compte a la base de dades de l’ATM.'),
        intraGroupSharing: f('yes', 'official', ['tmb-politica-privadesa'], 'Cinc entitats del grup TMB en són corresponsables per acord de l’article 26 del RGPD.'),
        dataBrokerSales: f('no', 'official', ['tmb-politica-privadesa'], 'La política només preveu comunicacions per obligació legal.'),
        internationalTransfers: f('no', 'official', ['tmb-politica-privadesa', 'tmb-registre-tractament'], 'Amb caràcter general «no están previstas». El registre en preveu als Estats Units per a elMeuBus, que és un altre servei.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['tmb-registre-tractament'], 'El registre fixa terminis per activitat: tres anys per al compte i les comunicacions, deu anys per a la venda de bitllets i un mes per a la videovigilància.'),
        dataAfterDeletion: f('partial', 'official', ['tmb-politica-privadesa'], 'Un cop acabada la finalitat, les dades es bloquegen fins que prescriuen les responsabilitats.'),
        periods: [
          { dataType: 'adreca-electronica', period: 'Tres anys després d’acabar la finalitat', sources: ['tmb-registre-tractament'] },
          { dataType: 'historial-de-compres', period: 'Deu anys (article 121-20 del Codi civil de Catalunya)', sources: ['tmb-registre-tractament'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['tmb-politica-privadesa', 'tmb-app-faq'], 'El dret de supressió es reconeix, i l’àrea personal del web inclou un diàleg per eliminar el compte d’usuari.'),
        selfService: f('partial', 'official', ['tmb-app-faq'], 'El web de TMB conté l’opció «eliminar tu cuenta de usuario», però les preguntes freqüents de l’app no expliquen com fer-ho des del telèfon.'),
        difficulty: 'unknown',
        steps: [
          'Inicia sessió a l’àrea personal de tmb.cat i busca l’opció d’eliminar el compte.',
          'Si no la trobes, escriu a dpd@tmb.cat demanant la supressió del compte TMB.',
          'El compte T-mobilitat vinculat és de l’ATM i s’ha de tancar a part.',
        ],
        dataRetained: 'Els justificants de compra es conserven deu anys.',
        sources: ['tmb-app-faq', 'tmb-politica-privadesa', 'tmb-registre-tractament'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['tmb-politica-privadesa'], 'La portabilitat figura entre els drets, però s’ha de demanar al delegat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['tmb-politica-privadesa'], 'Per correu al delegat de protecció de dades, amb reclamació a l’APDCAT.', { url: 'mailto:dpd@tmb.cat' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['tmb-app-faq'], 'Les comunicacions comercials es gestionen a «Preferencias de comunicación» del menú personal.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['tmb-app-faq'], 'Ubicació, Bluetooth, càmera i notificacions es demanen per separat, i les preferències de comunicació es poden ajustar.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de transport sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown('El formulari d’accés només demana una contrasenya de vuit caràcters com a mínim; no hem trobat cap segon factor.'),
        independentAudits: unknown('Les certificacions publicades són de qualitat, medi ambient, energia i salut laboral, no de seguretat.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('tmb.cat respon amb un error 403 a /.well-known/security.txt.'),
      },
      alternatives: [
        { app: 'citymapper', comparability: 'partial', rationale: 'Planifica trajectes amb metro i bus de Barcelona sense compte TMB.', tradeOffs: 'No ven títols ni recarrega la T-mobilitat.' },
        { app: 'moovit', comparability: 'partial', rationale: 'Horaris i arribades en temps real del transport públic de Barcelona.', tradeOffs: 'Model publicitari, amb més dades compartides amb tercers.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’expedient sancionador de l’APDCAT (desembre del 2025) i la multa de l’Oficina Antifrau (setembre del 2026) tracten dades del personal de TMB, no de les persones usuàries de l’app; per això l’incident es lliga a l’empresa i no a la fitxa. L’etiqueta de l’App Store omet la targeta desada i l’historial de compres, que l’app sí tracta.',
        openQuestions: [
          'Quins SDK d’analítica integra l’app?',
          'Es pot eliminar el compte TMB des de la mateixa app?',
          'Com s’ha resolt l’expedient sancionador de l’APDCAT contra TMB?',
        ],
      },
    },

    /* ═══════════════════════════ T-mobilitat ═══════════════════════════ */
    {
      slug: 't-mobilitat',
      name: 'T-mobilitat',
      company: 'autoritat-del-transport-metropolita',
      categories: ['mobilitat-i-transport', 'administracio-publica'],
      tagline: 'L’app del bitllet únic diu que no recull cap dada, però l’alta demana el DNI i cada validació queda registrada',
      summary:
        'L’app de l’ATM gestiona el compte T-mobilitat: alta, recàrrega de títols i, a Android, validació amb NFC; a l’iPhone la validació passa per l’app germana Cartera T-mobilitat. L’etiqueta de l’App Store diu «No se recopilan datos», però el mateix registre d’activitats de l’ATM detalla que l’alta recull nom, document d’identitat, data de naixement, adreça, correu i telèfon, i que cada validació deixa data, hora, operador i zona, que es comuniquen als operadors i a les forces de seguretat. El 2024 l’APDCAT va declarar dues infraccions de l’ATM per una sol·licitud d’alta pujada al compte d’una altra persona.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://t-mobilitat.cat/',
        privacyPolicy: 'https://t-mobilitat.cat/web/t-mobilitat/proteccio-de-dades',
        terms: 'https://t-mobilitat.cat/documents/54021/0/02.2024_Condicions+d%E2%80%99utilitzaci%C3%B3+T-mobilitat.pdf/fb0501b7-ca5d-ac39-e936-c3cd4f09c89b?t=1709116783119',
        privacyCenter: 'https://t-mobilitat.cat/documents/54021/0/20250525_RAT+T-mobilitat.rev_DEF+%288%29.xlsx/5cd2b9e6-9461-01cb-48ec-60fdd377b7a1?t=1761117162225',
        appStore: 'https://apps.apple.com/es/app/id1586790838',
        security: 'https://www.atm.cat/es/seguretat-de-la-informacio',
        rightsRequest: 'https://web.gencat.cat/ca/tramits/tramits-temes/Peticio-generica?moda=1',
      },
      accountRequired: f('yes', 'official', ['tmobilitat-condicions', 'tmobilitat-app-store'], 'Per recarregar i validar amb el mòbil cal donar-se d’alta i registrar les dades. Viatjar sense compte és possible, però amb el suport de cartró anònim, no amb l’app.'),
      openSource: f('no', 'official', ['tmobilitat-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'other',
        legalBasis: f('partial', 'official', ['tmobilitat-proteccio-dades', 'tmobilitat-rat', 'atm-organitzacio'], 'L’ATM és un consorci de la Generalitat (51 %) i les administracions locals (49 %). La política invoca les lletres a, b, c i e de l’article 6.1 del RGPD i la LOPDGDD, i el registre hi afegeix l’article 8 de la LOPDGDD, la Llei 26/2010 i la Llei 39/2015. No cita la norma que atribueix a l’ATM la gestió del sistema tarifari ni concreta quina base empara el registre de validacions.'),
        processingRegistry: f('yes', 'official', ['tmobilitat-rat'], 'Registre específic de la T-mobilitat, en full de càlcul, actualitzat el 23 de maig de 2025, amb catorze activitats. Contradiu la política en un punt: diu que no hi ha transferències internacionals, mentre la política n’admet per al butlletí i el núvol.', { url: 'https://t-mobilitat.cat/documents/54021/0/20250525_RAT+T-mobilitat.rev_DEF+%288%29.xlsx/5cd2b9e6-9461-01cb-48ec-60fdd377b7a1?t=1761117162225' }),
        dpia: unknown('No hem trobat cap avaluació d’impacte publicada, tot i que el sistema registra desplaçaments de persones identificades a gran escala.'),
        ensConformity: f('partial', 'official', ['atm-seguretat-informacio', 'tmobilitat-cronica-ciberseguretat'], 'L’ATM té una política de seguretat de la informació basada en l’ENS i la ISO 27001, aprovada l’octubre de 2025, i va contractar una oficina de ciberseguretat per a la T-mobilitat el 2024. No publica cap declaració ni certificat de conformitat, ni la categoria del sistema.'),
        dpo: f('yes', 'official', ['tmobilitat-proteccio-dades', 'tmobilitat-rat'], 'Delegada de protecció de dades amb correu publicat.', { contact: 'dpd@atm.cat' }),
        offlineAlternative: f('yes', 'official', ['tmobilitat-condicions'], 'La T-mobilitat existeix en suport de cartró anònim i transferible i en targeta de PVC, que es poden fer servir sense l’app.'),
        accessibilityStatement: f('partial', 'official', ['atm-accessibilitat', 'tmobilitat-app-store'], 'L’ATM té una declaració per al web atm.cat, «parcialment conforme», però no per a l’app, i la fitxa de l’App Store no declara cap prestació d’accessibilitat.', { url: 'https://www.atm.cat/accessibilitat' }),
        mandatoryRetention: f('no', 'official', ['tmobilitat-condicions'], 'Les condicions permeten donar-se de baixa. Només es conserven les dades bàsiques associades a penalitzacions fins que prescriuen.'),
      },
      dataSummary:
        'Un títol personalitzat lliga el nom i el document d’identitat amb cada validació: data, hora, operador i zona. Aquestes dades mostren els desplaçaments habituals d’una persona, i l’ATM les comunica als operadors de transport, a altres administracions i a les forces de seguretat.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['tmobilitat-rat'], note: 'Activitat «Alta app» del registre; l’etiqueta de l’App Store no declara cap dada.' }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['tmobilitat-rat', 'tmobilitat-condicions'], note: 'DNI, NIE o passaport, al qual van lligats els suports personalitzats.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tmobilitat-rat'], note: 'Determina l’accés a títols per edat, com la T-16.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tmobilitat-rat'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['tmobilitat-rat', 'tmobilitat-proteccio-dades'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tmobilitat-rat'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tmobilitat-rat', 'tmobilitat-cartera-iphone'], note: 'El compte es pot vincular a la TMB App, a l’app d’FGC i a Cartera T-mobilitat.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'investigacio-i-estadistica', 'compliment-legal'], sources: ['tmobilitat-rat', 'tmobilitat-directa-2018'], note: 'Cada validació registra data, hora i lloc (operador i zona) i es comunica als operadors, a administracions i a forces de seguretat. La traçabilitat dels desplaçaments ja va ser objecte de crítica el 2018.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tmobilitat-rat', 'tmobilitat-condicions'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tmobilitat-condicions', 'tmobilitat-proteccio-dades'], note: 'Les condicions preveuen el pagament amb targeta o amb el mòbil; la política inclou dades econòmiques.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['tmobilitat-app-store'], 'L’etiqueta no declara cap dada, ni per rastrejar ni de cap altre tipus.'),
        advertisingIdentifiers: unknown('La documentació no esmenta identificadors publicitaris.'),
        thirdPartyTrackersPresent: unknown('La política parla de galetes de tercers al web, però no dels SDK de l’app.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política preveu comunicacions i un butlletí, però no diu si són comercials ni si es personalitzen.'),
        profiling: unknown('La política no esmenta perfils ni decisions automatitzades.'),
        aiTraining: unknown('La documentació no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['tmobilitat-rat', 'tmobilitat-proteccio-dades'], 'Les dades d’ús es comuniquen als operadors de transport, a altres administracions i a les forces i cossos de seguretat.'),
        intraGroupSharing: unknown('L’ATM actua d’encarregada de l’AMB i d’FGC per a alguns tractaments, però no hem trobat quines dades de la T-mobilitat circulen entre els consorciats.'),
        dataBrokerSales: f('no', 'official', ['tmobilitat-proteccio-dades'], 'Els destinataris declarats són només organismes públics i forces de seguretat.'),
        internationalTransfers: f('partial', 'official', ['tmobilitat-proteccio-dades', 'tmobilitat-rat'], 'La política admet transferències amb clàusules contractuals tipus per al butlletí (Mailchimp, Campaign Monitor, Active Campaign), per al núvol de Google o Microsoft i per a galetes de tercers; el registre diu que no n’hi ha cap.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['tmobilitat-proteccio-dades', 'tmobilitat-rat'], 'La política remet els terminis al registre, però per a les dades de validació no hem trobat cap termini en dies o anys.'),
        dataAfterDeletion: f('partial', 'official', ['tmobilitat-condicions'], 'La baixa és irreversible, però les dades bàsiques associades a penalitzacions es conserven fins que prescriuen.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['tmobilitat-condicions'], 'L’article 12 de les condicions regula la baixa del compte.'),
        selfService: f('partial', 'official', ['tmobilitat-condicions'], 'Es pot fer a l’àrea privada del web només si no hi ha suports ni persones vinculades; si n’hi ha, cal anar al Centre d’Atenció i Informació amb el document d’identitat.'),
        difficulty: 'medium',
        steps: [
          'Desvincula els suports i les persones associades al compte.',
          'Entra a l’àrea privada de t-mobilitat.cat i demana la baixa, o bé ves al Centre d’Atenció i Informació amb el document d’identitat.',
        ],
        obstacles: 'Amb suports vinculats, la baixa només es pot fer presencialment.',
        dataRetained: 'Dades bàsiques associades a penalitzacions, fins que prescriuen.',
        sources: ['tmobilitat-condicions'],
      },
      userRights: {
        dataExport: unknown('La política enumera els drets amb formularis, però no hem pogut comprovar com s’exerceix la portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['tmobilitat-proteccio-dades'], 'Formularis per a cada dret, que s’envien per la Petició Genèrica de la Generalitat o per correu postal; delegada de protecció de dades i APDCAT.', { url: 'https://web.gencat.cat/ca/tramits/tramits-temes/Peticio-generica?moda=1' }),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: unknown(),
        granularControls: unknown('No hem pogut verificar quins permisos demana l’app ni si hi ha preferències de privadesa.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de gestió de títols de transport, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown('No hem trobat cap auditoria o certificació independent publicada del sistema T-mobilitat.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('Ni t-mobilitat.cat ni atm.cat publiquen un fitxer security.txt; l’ATM dona l’adreça cdc@atm.cat del comitè de ciberseguretat.'),
      },
      alternatives: [
        { app: 'tmb-app', comparability: 'partial', rationale: 'Permet donar-se d’alta i recarregar la T-mobilitat des del compte TMB.', tradeOffs: 'El compte T-mobilitat de l’ATM es crea igualment, i s’hi afegeixen les dades del compte TMB.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’etiqueta «No se recopilan datos» és incompatible amb el registre d’activitats de la mateixa ATM. No hem pogut instal·lar l’app per comprovar-ne els permisos. La fitxa de l’App Store no cobreix l’app Cartera T-mobilitat, que és la que valida a l’iPhone.',
        openQuestions: [
          'Quant de temps es conserven les validacions lligades a un títol personalitzat?',
          'Hi ha una avaluació d’impacte del sistema T-mobilitat?',
          'Quin accés tenen a les dades les empreses privades que van desenvolupar el sistema?',
        ],
      },
    },

    /* ═══════════════════════════ FGC ═══════════════════════════ */
    {
      slug: 'fgc',
      name: 'FGC: horario, zonas, tarifas',
      company: 'ferrocarrils-de-la-generalitat-de-catalunya',
      categories: ['mobilitat-i-transport'],
      tagline: 'L’app pública d’horaris declara dades de contacte per rastrejar en apps d’altres empreses',
      summary:
        'L’app d’FGC ofereix horaris, zones, tarifes i alertes de servei, i un compte opcional per desar trajectes i rebre avisos. De les apps de transport públic de l’àrea de Barcelona, és l’única que declara a l’App Store dades utilitzades per rastrejar en apps i webs d’altres empreses (les de contacte), mentre les condicions diuen que les dades no es cedeixen a tercers. El compte s’esborra des de la mateixa app. El registre d’activitats d’FGC és públic però no té cap entrada per a aquesta app.',
      platforms: ['ios', 'android'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.fgc.cat/',
        privacyPolicy: 'https://www.fgc.cat/politica-de-privacitat/',
        terms: 'https://www.fgc.cat/termes-i-condicions-fgc-persones-usuaries/',
        privacyCenter: 'https://transparencia.fgc.cat/ca/informacio-publica/normativa-i-informacio-interes-public/registre-activitats-tractament-i-proteccio-de-dades/registre-d2019activitats-de-tractament',
        appStore: 'https://apps.apple.com/es/app/id481225824',
        rightsRequest: 'https://tramits.fgc.cat/Ciutadania/DetallTramit.aspx?IdTramit=4',
      },
      accountRequired: f('no', 'official', ['fgc-termes-usuaris', 'fgc-app-store'], 'Els horaris i les tarifes es consulten sense compte; el registre només cal per desar trajectes, veure’n l’historial i activar alertes.'),
      openSource: f('no', 'official', ['fgc-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'regional',
        legalBasis: f('partial', 'official', ['fgc-termes-usuaris', 'fgc-rat'], 'Les condicions i el registre fonamenten el compte i les alertes en el consentiment, sense citar cap norma ni cap competència d’FGC.'),
        processingRegistry: f('partial', 'official', ['fgc-rat'], 'FGC publica el registre, actualitzat el 28 d’abril de 2026, amb l’activitat «Servei d’alertes»; però no hi ha cap activitat per al compte de l’app de transport, i els destinataris i les transferències hi són en blanc.', { url: 'https://transparencia.fgc.cat/ca/informacio-publica/normativa-i-informacio-interes-public/registre-activitats-tractament-i-proteccio-de-dades/registre-d2019activitats-de-tractament' }),
        dpia: unknown('No hem trobat cap avaluació d’impacte publicada.'),
        ensConformity: f('partial', 'regulator', ['apdcat-ip-14-2021'], 'L’única evidència és el que FGC va declarar a l’APDCAT el 2021: una anàlisi de riscos del 2018 dins d’un pla d’adequació a l’ENS. No publica cap declaració ni certificat de conformitat.'),
        dpo: f('yes', 'official', ['fgc-politica-privadesa'], 'Delegada de protecció de dades amb nom i correu publicats.', { contact: 'dpd@fgc.cat' }),
        offlineAlternative: f('yes', 'official', ['fgc-centres-atencio'], 'La informació i les consultes es poden fer als centres d’atenció presencial, i els horaris són als canals no digitals de l’empresa.'),
        accessibilityStatement: f('partial', 'official', ['fgc-accessibilitat', 'fgc-app-store'], 'Hi ha una declaració del web fgc.cat, parcialment conforme i revisada el 2022, però no de l’app, i la fitxa de l’App Store no declara prestacions d’accessibilitat.', { url: 'https://www.fgc.cat/accessibilitat/' }),
        mandatoryRetention: f('no', 'official', ['fgc-termes-usuaris'], 'El compte s’esborra des de l’app i les dades es conserven fins a la baixa, amb els terminis legals posteriors.'),
      },
      dataSummary:
        'Amb compte, el correu, les fotos i l’identificador d’usuari queden vinculats a la persona. Les condicions permeten a FGC fer servir l’adreça IP, la SIM, la wifi o la latitud i longitud, i afegir-hi dades opcionals sobre hàbits i interessos.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['fgc-app-store', 'fgc-termes-usuaris'], note: 'L’etiqueta declara les «dades de contacte» com a utilitzades per rastrejar, sense concretar quines.' }),
        row('nom-i-cognoms', 'optional', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['fgc-app-store', 'fgc-rat'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fgc-rat', 'fgc-termes-usuaris'], note: 'Per a les alertes per SMS.' }),
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['fgc-app-store'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['fgc-app-store'] }),
        row('contingut-de-missatges', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['fgc-app-store'] }),
        row('historial-de-cerca', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fgc-app-store'], note: 'L’historial de trajectes consultats dels últims sis mesos.' }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils'], sources: ['fgc-termes-usuaris'], note: '«Dades de qualificació» sobre hàbits i interessos, opcionals.' }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fgc-app-store', 'fgc-termes-usuaris'], note: 'Per trobar l’estació més propera.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fgc-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['fgc-termes-usuaris'], note: 'Juntament amb dades de la SIM i de la connexió wifi.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['fgc-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'prestacio-del-servei'], sources: ['fgc-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['fgc-app-store'], 'L’etiqueta declara que les dades de contacte poden servir per rastrejar en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('La documentació no esmenta identificadors publicitaris.'),
        thirdPartyTrackersPresent: unknown('El rastreig declarat implica algun tercer, però ni les condicions ni la política n’identifiquen cap.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['fgc-termes-usuaris'], 'El registre implica rebre informació «informativa i comercial»; les comunicacions comercials, només si es marca la casella.'),
        profiling: f('partial', 'official', ['fgc-termes-usuaris'], 'Les condicions preveuen dades opcionals de qualificació sobre hàbits i interessos.'),
        aiTraining: unknown('La documentació no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['fgc-termes-usuaris', 'fgc-app-store'], 'Les condicions diuen que les dades no es cedeixen a tercers llevat d’obligació legal, amb proveïdors com a encarregats; l’etiqueta de l’App Store, en canvi, declara dades de contacte per rastrejar en apps d’altres empreses.'),
        intraGroupSharing: unknown('La política cita altres societats del grup FGC com a responsables, però no si reben dades de l’app.'),
        dataBrokerSales: unknown('La documentació no en diu res.'),
        internationalTransfers: unknown('Ni les condicions ni el registre en diuen res.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['fgc-termes-usuaris', 'fgc-rat'], 'Fins a la baixa del compte o la revocació del consentiment, i després els terminis legals, sense xifres.'),
        dataAfterDeletion: f('partial', 'official', ['fgc-termes-usuaris'], 'Es conserven els terminis que fixa la llei.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['fgc-termes-usuaris'], 'Les condicions descriuen la baixa des de l’app i per correu.'),
        selfService: f('yes', 'official', ['fgc-termes-usuaris'], 'Des de l’app: «prement el botó de tancar la sessió i posteriorment el botó d’eliminar compte del popup emergent».'),
        difficulty: 'easy',
        steps: ['A l’app, prem el botó de tancar la sessió.', 'A la finestra emergent, prem «eliminar compte».'],
        sources: ['fgc-termes-usuaris'],
      },
      userRights: {
        dataExport: unknown('No hem pogut comprovar com s’exerceix la portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['fgc-politica-privadesa'], 'Per correu postal, per correu electrònic a la delegada o per un tràmit en línia, amb reclamació a l’APDCAT.', { url: 'https://tramits.fgc.cat/Ciutadania/DetallTramit.aspx?IdTramit=4' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['fgc-termes-usuaris'], 'Les comunicacions comercials requereixen marcar una casella.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['fgc-termes-usuaris'], 'El servei d’alertes no s’activa per defecte i les dades de qualificació són opcionals.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’informació de transport, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown('No hem trobat cap auditoria de seguretat publicada.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('fgc.cat respon amb un error 404 a /.well-known/security.txt.'),
      },
      alternatives: [
        { app: 'google-maps', comparability: 'partial', rationale: 'Mostra els horaris d’FGC i planifica trajectes sense compte d’FGC.', tradeOffs: 'Google vincula la ubicació i les cerques al compte si hi has iniciat sessió.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El bundle (com.iboomobile) apunta que l’app la va desenvolupar un tercer, però no ho hem pogut confirmar amb cap font. No hem trobat cap resolució sancionadora de l’APDCAT contra FGC; la IP 14/2021 és un arxivament sense relació amb l’app.',
        openQuestions: [
          'Quin SDK o tercer rep les dades de contacte que l’etiqueta declara per rastrejar?',
          'Per què el registre d’activitats no té cap entrada per a l’app de transport?',
        ],
      },
    },

    /* ═══════════════════════════ Rodalies ═══════════════════════════ */
    {
      slug: 'rodalies',
      name: 'Rodalies',
      company: 'renfe-viajeros',
      categories: ['mobilitat-i-transport'],
      tagline: 'La nova app de Rodalies declara diagnòstics per rastrejar i remet a la política de privadesa de Cercanías',
      summary:
        'Renfe va publicar l’estiu del 2026 una app nova de Rodalies, amb la identitat visual de la Generalitat, que substitueix l’antiga. Mostra horaris en temps real, ven bitllets amb el compte de Renfe i té un cercador amb IA. L’etiqueta declara els diagnòstics com a dades per rastrejar i la ubicació precisa, fins i tot en segon pla; la política enllaçada és la de l’app Cercanías, que afirma no fer servir tecnologies de seguiment. El responsable continua sent Renfe Viajeros, tot i que ja s’ha constituït l’empresa mixta Rodalies de Catalunya.',
      platforms: ['ios', 'android'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://rodalies.gencat.cat/',
        privacyPolicy: 'https://www.renfe.com/es/es/ayuda/informacion-legal-viajeros/privacidad-cookies/privacidad-apps/politica-de-privacidad-app-cercanias',
        appStore: 'https://apps.apple.com/es/app/id6788656454',
        security: 'https://www.renfe.com/es/es/ayuda/informacion-legal-viajeros/certificaciones-ciberseguridad',
      },
      accountRequired: f('partial', 'official', ['rodalies-politica-privadesa', 'rodalies-gencat-app'], 'Els horaris i el temps real són oberts; comprar bitllets i les funcions personalitzades demanen el compte de Renfe.'),
      openSource: f('no', 'official', ['rodalies-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'state',
        legalBasis: f('partial', 'official', ['rodalies-politica-privadesa'], 'La política assigna una base a cada finalitat (contracte, interès legítim, obligació legal i consentiment) i cita el Reial decret 1575/1989 per a la cessió a les asseguradores, però no la norma que empara la resta de tractaments.'),
        processingRegistry: unknown('No hem trobat cap activitat del registre de Renfe Viajeros que correspongui a l’app de Rodalies.'),
        dpia: unknown('No hem trobat cap avaluació d’impacte publicada.'),
        ensConformity: f('yes', 'official', ['renfe-certificaciones-ciberseguridad'], 'El grup Renfe declara la conformitat amb l’Esquema Nacional de Seguretat i la ISO 27001, sense publicar-ne la categoria, l’abast ni l’entitat certificadora.'),
        dpo: f('yes', 'official', ['rodalies-politica-privadesa'], 'Delegat de protecció de dades del grup Renfe amb correu publicat.', { contact: 'dpd@renfe.es' }),
        offlineAlternative: f('yes', 'official', ['renfe-condiciones-venta'], 'El bitllet es pot comprar a les estacions i oficines de venda sense compte ni aplicació.'),
        accessibilityStatement: f('no', 'official', ['rodalies-accessibilitat-cercanias', 'rodalies-app-store'], 'Renfe té una declaració per a l’app Cercanías, però no per a l’app Rodalies, i la fitxa de l’App Store no declara prestacions d’accessibilitat.'),
        mandatoryRetention: f('no', 'official', ['rodalies-politica-privadesa'], 'La política conserva les dades el temps necessari «o hasta que solicites su supresión»; cap norma impedeix tancar el compte.'),
      },
      dataSummary:
        'Sense compte, l’app tracta la ubicació precisa, també en segon pla, i dades de diagnòstic que l’etiqueta declara com a utilitzades per rastrejar. Amb compte, la identitat, els mitjans de pagament i les compres queden lligats al compte de Renfe.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['rodalies-app-store', 'rodalies-politica-privadesa'], note: 'La fitxa avisa que l’app pot fer servir la ubicació encara que no estigui oberta.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['rodalies-politica-privadesa'], note: 'Ciutat o país a partir de l’adreça IP anonimitzada, per a Adobe Analytics.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['rodalies-app-store'], note: 'L’etiqueta els declara com a dades utilitzades per rastrejar.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['rodalies-politica-privadesa'], note: 'Clics i seleccions, amb Adobe Analytics com a encarregat; l’etiqueta no ho declara.' }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['rodalies-politica-privadesa'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['rodalies-politica-privadesa'] }),
        row('identificador-de-compte', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['rodalies-politica-privadesa'], note: 'És el compte general de Renfe.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['rodalies-politica-privadesa'], note: 'Es comuniquen a bancs i passarel·les de pagament.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['rodalies-politica-privadesa'], note: 'Les dades del viatge es cedeixen a les asseguradores per l’assegurança obligatòria de viatgers.' }),
        row('historial-de-cerca', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['rodalies-politica-privadesa', 'rodalies-app-store'], note: 'Les consultes al cercador amb IA; Renfe diu que no es perfilen ni entrenen models.' }),
        row('veu-i-audio', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['rodalies-politica-privadesa'], note: 'Permís de micròfon per a la locució de veu.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['rodalies-app-store', 'rodalies-politica-privadesa'], 'L’etiqueta declara els diagnòstics com a dades per rastrejar, mentre la política afirma que no fa servir tecnologies «con fines publicitarios, de seguimiento individual o elaboración de perfiles».'),
        advertisingIdentifiers: unknown('La política no esmenta identificadors publicitaris.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['rodalies-politica-privadesa'], 'Adobe Analytics, com a encarregat del tractament.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['rodalies-politica-privadesa'], 'Comunicacions comercials amb ofertes personalitzades, basades en el consentiment; no publicitat de tercers.'),
        profiling: f('partial', 'official', ['rodalies-politica-privadesa'], 'Hi ha perfilació per a ofertes personalitzades, només amb consentiment.'),
        aiTraining: f('no', 'official', ['rodalies-politica-privadesa'], 'Les dades de l’assistent virtual no es fan servir «para entrenar» models d’IA.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['rodalies-politica-privadesa', 'rodalies-empresa-mixta-2026'], 'Autoritats, asseguradores, bancs i passarel·les de pagament i encarregats del tractament. La nova empresa mixta Rodalies de Catalunya (Renfe i Generalitat) no operarà el servei fins al 2027 i no figura entre els destinataris.'),
        intraGroupSharing: unknown('La política de Cercanías que enllaça l’app no descriu comunicacions dins del grup Renfe.'),
        dataBrokerSales: f('no', 'official', ['rodalies-politica-privadesa'], 'La llista de destinataris no inclou venda de dades.'),
        internationalTransfers: unknown('La política no en diu res.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['rodalies-politica-privadesa'], 'Només «el tiempo estrictamente necesario» o fins a la supressió, sense xifres.'),
        dataAfterDeletion: unknown('La política no ho concreta.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['rodalies-politica-privadesa'], 'La política preveu la baixa a la plataforma i el dret de supressió.'),
        selfService: unknown('No hem trobat cap opció d’esborrar el compte dins de l’app.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu a derechos.viajeros@renfe.es demanant la supressió del compte de Renfe.',
          'Si no reps resposta, adreça’t al delegat de protecció de dades a dpd@renfe.es.',
        ],
        obstacles: 'El compte és el mateix de renfe.com i de l’app de Renfe: esborrar-lo afecta tots els canals.',
        sources: ['rodalies-politica-privadesa'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['rodalies-politica-privadesa'], 'La portabilitat es reconeix, però s’exerceix per correu electrònic.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['rodalies-politica-privadesa'], 'Adreça específica per exercir drets i delegat de protecció de dades, amb reclamació a l’AEPD.', { url: 'mailto:derechos.viajeros@renfe.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['rodalies-politica-privadesa'], 'Les comunicacions comercials amb perfilació depenen d’un consentiment revocable.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['rodalies-politica-privadesa'], 'Ubicació, micròfon, biometria i notificacions es demanen per separat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació de transport sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: f('partial', 'official', ['rodalies-politica-privadesa'], 'La política esmenta l’autenticació reforçada (2FA) i l’accés biomètric, sense detallar el mètode ni si és obligatòria.'),
        independentAudits: f('partial', 'official', ['renfe-certificaciones-ciberseguridad'], 'Renfe declara la ISO 27001 i l’ENS sense publicar-ne l’abast ni l’entitat certificadora.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('Ni renfe.com ni rodalies.gencat.cat publiquen un fitxer security.txt vàlid.'),
      },
      alternatives: [
        { app: 'renfe', comparability: 'partial', rationale: 'L’app general de Renfe ven els mateixos bitllets amb el mateix compte.', tradeOffs: 'Menys centrada en Rodalies i també de Renfe Viajeros.' },
        { app: 'google-maps', comparability: 'partial', rationale: 'Horaris de Rodalies i planificació sense compte de Renfe.', tradeOffs: 'No ven bitllets.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'L’app antiga «Rodalies de Catalunya» ja no és a l’App Store. Hi ha ressenyes que diuen que l’inici de sessió amb el compte de Renfe falla i que l’app nova no permet subscriure’s a les incidències de les línies. No hem trobat sancions de l’AEPD contra Renfe Viajeros; la del 2012 (PS/00166/2012) va ser contra Renfe Operadora per les càmeres d’estacions de Sevilla i no s’ha incorporat.',
        openQuestions: [
          'Quan passarà la titularitat de l’app a Rodalies de Catalunya, i canviarà el responsable del tractament?',
          'Per què l’etiqueta declara els diagnòstics com a dades per rastrejar?',
        ],
      },
    },

    /* ═══════════════════════════ AMB Mobilitat ═══════════════════════════ */
    {
      slug: 'amb-mobilitat',
      name: 'AMB Mobilitat (Picmi)',
      company: 'amb-informacio-i-serveis',
      categories: ['mobilitat-i-transport', 'mapes-i-navegacio'],
      tagline: 'L’app metropolitana de mobilitat té un certificat ENS, però enllaça un avís legal genèric com a política',
      summary:
        'AMB Mobilitat, l’antiga Picmi, planifica trajectes amb el transport públic metropolità i permet demanar un taxi. L’etiqueta només declara l’ús i els errors com a dades no vinculades, però el servei de taxi exigeix un compte amb nom, correu i ubicació, que tracta l’Institut Metropolità del Taxi. No té una política de privadesa pròpia: l’App Store enllaça l’avís legal genèric de l’AMB. Els sistemes que la sostenen tenen un certificat de l’Esquema Nacional de Seguretat de categoria mitjana.',
      platforms: ['ios', 'android'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://www.amb.cat/s/web/mobilitat/gestio-i-organitzacio/amb-informacio.html',
        privacyPolicy: 'https://www.amb.cat/web/amb/politica-de-privacitat',
        terms: 'https://docs.amb.cat/alfresco/api/-default-/public/alfresco/versions/1/nodes/9fd4ff85-d607-4f3b-a818-6e482bf009c0/content/Condicions%20Generals%20Usuaris%20Picmi_CAT_20.04.23.pdf?attachment=false&mimeType=application/pdf&sizeInBytes=633932',
        appStore: 'https://apps.apple.com/es/app/id588690805',
      },
      accountRequired: f('partial', 'official', ['ambmob-picmi-taxi-condicions'], 'La planificació de trajectes no demana compte; el servei de taxi, sí (correu validat i contrasenya).'),
      openSource: f('no', 'official', ['ambmob-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'local',
        legalBasis: f('partial', 'official', ['amb-politica-privacitat', 'ambmob-picmi-taxi-condicions', 'amb-avis-legal'], 'L’App Store enllaça l’avís legal genèric de l’AMB, no una política de l’app. La política de l’AMB es basa en l’execució del servei o el consentiment i les competències de cada ens; per al taxi, el consentiment i les competències de l’Institut Metropolità del Taxi. No cita cap norma concreta.'),
        processingRegistry: f('partial', 'official', ['ambinfo-rat', 'amb-rat'], 'AMB Informació i l’AMB publiquen els seus registres, però cap no conté una activitat per a l’app: el d’AMB Informació només té tractaments interns i atribueix els de mobilitat a l’AMB.'),
        dpia: unknown('No hem trobat cap avaluació d’impacte publicada.'),
        ensConformity: f('yes', 'independent', ['ambinfo-ens-certificat'], 'Certificat ENS-0820/25 emès per Applus+ el 30 d’abril de 2025 i vigent fins al 30 d’abril de 2027, de categoria mitjana, per als sistemes que donen suport als serveis de mobilitat i transport públic.', { category: 'medium', url: 'https://docs.amb.cat/alfresco/api/-default-/public/alfresco/versions/1/nodes/674184b0-2384-4776-90ec-4e74cbc484df/content/ENS%20CAT%20-%20AMB%20INFORMACI%C3%93%20I%20SERVEIS%20(%20MEDIA%20INI)_signed.pdf?attachment=false&mimeType=application/pdf&sizeInBytes=374238' }),
        dpo: f('yes', 'official', ['amb-politica-privacitat', 'ambinfo-rat'], 'L’AMB i AMB Informació tenen delegat de protecció de dades amb correu publicat.', { contact: 'dpd@amb.cat' }),
        offlineAlternative: f('yes', 'official', ['ambinfo-qui-som'], 'La mateixa informació de mobilitat es pot obtenir pel telèfon 010 metropolità i pel web.'),
        accessibilityStatement: unknown('No hem trobat cap declaració d’accessibilitat de l’app, i la fitxa de l’App Store no en declara prestacions.'),
        mandatoryRetention: f('no', 'official', ['ambmob-picmi-taxi-condicions'], 'Després de la baixa, les dades es conserven el temps que fixi la llei, però res no impedeix donar-se de baixa.'),
      },
      dataSummary:
        'Per consultar el transport, l’app declara només dades d’ús i d’errors no vinculades. Demanar un taxi afegeix el nom, el correu i la ubicació exacta del moment, que es comunica al taxista.',
      dataCollection: [
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['ambmob-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['ambmob-app-store'] }),
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['ambmob-picmi-taxi-condicions'], note: 'Només per al servei de taxi, amb l’Institut Metropolità del Taxi com a responsable; l’etiqueta no ho declara.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['ambmob-picmi-taxi-condicions'] }),
        row('contrasenya', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['ambmob-picmi-taxi-condicions'] }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['ambmob-picmi-taxi-condicions'], note: 'La ubicació en el moment de demanar el taxi, que rep el taxista sense les dades identificatives.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['ambmob-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown(),
        thirdPartyTrackersPresent: unknown('No hem trobat quin servei d’analítica fa servir l’app.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La documentació no en diu res.'),
        profiling: f('no', 'official', ['amb-politica-privacitat'], '«En cap cas es duran a terme decisions automatitzades».'),
        aiTraining: unknown('La documentació no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['ambmob-picmi-taxi-condicions'], 'La ubicació de la petició de taxi es comunica al taxista, que només veu el codi de reserva.'),
        intraGroupSharing: f('yes', 'official', ['ambmob-picmi-taxi-condicions', 'ambinfo-rat'], 'Les dades del taxi les tracta l’Institut Metropolità del Taxi, i AMB Informació atribueix a l’AMB els tractaments de mobilitat.'),
        dataBrokerSales: unknown('La documentació no en diu res.'),
        internationalTransfers: f('no', 'official', ['amb-politica-privacitat', 'ambinfo-ens-certificat'], 'La política diu que tots els proveïdors són dins de l’Espai Econòmic Europeu, i el certificat ENS situa el centre de dades a la regió europea d’AWS.', { mechanism: 'none' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: unknown('Ni la política de l’AMB ni les condicions del taxi fixen terminis concrets.'),
        dataAfterDeletion: f('partial', 'official', ['ambmob-picmi-taxi-condicions'], 'Després de la baixa, les dades es conserven «per obligació legal» durant el temps màxim que fixi la legislació.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['amb-politica-privacitat', 'ambmob-picmi-taxi-condicions'], 'Es reconeixen la baixa i el dret de supressió.'),
        selfService: unknown('No hem trobat com s’esborra el compte des de l’app.'),
        difficulty: 'unknown',
        steps: ['Adreça una sol·licitud per escrit, amb còpia del document d’identitat, als Serveis Jurídics de l’AMB o per instància genèrica, o escriu a dpd@amb.cat.'],
        sources: ['amb-politica-privacitat'],
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['amb-politica-privacitat'], 'Per escrit amb document d’identitat o per instància genèrica, amb delegat de protecció de dades i APDCAT.', { url: 'mailto:dpd@amb.cat' }),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: unknown(),
        granularControls: unknown(),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’informació de transport, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: f('yes', 'independent', ['ambinfo-ens-certificat'], 'Auditoria de certificació ENS d’Applus+, amb acreditació, vigent fins al 2027.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('Ni amb.cat ni ambmobilitat.cat publiquen un fitxer security.txt.'),
      },
      alternatives: [
        { app: 'tmb-app', comparability: 'partial', rationale: 'Planificació del metro i el bus de Barcelona, també sense compte.', tradeOffs: 'No inclou la petició de taxi.' },
        { app: 'citymapper', comparability: 'partial', rationale: 'Planificador de transport públic sense compte.', tradeOffs: 'Empresa privada nord-americana.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'El bundle (com.Cetramsa) és l’únic rastre del nom antic de l’empresa; no l’hem trobat en cap font oficial. L’etiqueta de l’App Store no declara les dades del servei de taxi, que són de l’Institut Metropolità del Taxi. No hem trobat incidents.',
        openQuestions: ['Per què l’app no té una política de privadesa pròpia?', 'Com s’esborra el compte del servei de taxi?'],
      },
    },

    /* ═══════════════════════════ TRAM Barcelona ═══════════════════════════ */
    {
      slug: 'tram-barcelona',
      name: 'TRAM Barcelona',
      company: 'tramvia-metropolita',
      categories: ['mobilitat-i-transport'],
      tagline: 'L’app del tramvia diu que no recull dades, però la seva política envia l’ús a Google sota un acord anul·lat el 2020',
      summary:
        'L’app del Trambaix i el Trambesòs mostra horaris, parades properes i incidències. L’etiqueta de l’App Store diu que no recull cap dada, i l’enllaç de privadesa que hi figura porta a una pàgina inexistent. La política vigent, a tram.cat, admet la ubicació, les notificacions i una anàlisi estadística d’ús feta per Google Inc. als Estats Units, que empara en l’Escut de Privadesa, anul·lat pel Tribunal de Justícia de la UE el juliol del 2020. L’operen concessionàries privades del tramvia, per concessió de l’ATM.',
      platforms: ['ios', 'android'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya',
      links: {
        website: 'https://tram.cat/',
        privacyPolicy: 'https://tram.cat/privacidad',
        appStore: 'https://apps.apple.com/es/app/id1053996621',
      },
      accountRequired: f('no', 'editorial', ['tram-app-store'], 'La descripció de l’app no esmenta cap compte: horaris, parades i avisos són oberts, i les queixes i objectes perduts es fan per formulari.'),
      openSource: f('no', 'official', ['tram-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’app demana la ubicació per trobar la parada més propera i envia l’ús de l’app a Google per a estadístiques. L’etiqueta de l’App Store no declara res d’això.',
      dataCollection: [
        row('ubicacio-precisa', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['tram-privacitat'], note: 'Amb consentiment, per a les parades properes; l’etiqueta de l’App Store diu que no es recull cap dada.' }),
        row('interaccions-i-us', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['tram-privacitat'], note: 'Anàlisi estadística feta per Google Inc. per interès legítim.' }),
        row('contingut-de-missatges', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari'], sources: ['tram-app-store'], note: 'Formularis de queixes i d’objectes perduts.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['tram-app-store'], 'L’etiqueta no declara cap dada, tampoc per rastrejar.'),
        advertisingIdentifiers: unknown(),
        thirdPartyTrackersPresent: f('yes', 'official', ['tram-privacitat'], 'La política atribueix l’anàlisi estadística de l’app a Google Inc.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política no en diu res.'),
        profiling: unknown('La política no en diu res.'),
        aiTraining: unknown('La política no en diu res.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['tram-privacitat'], 'Google Inc. per a les estadístiques d’ús i les dues UTE operadores com a encarregades.'),
        intraGroupSharing: f('yes', 'official', ['tram-privacitat', 'tram-qui-som', 'tram-accionistes-elnacional'], 'Les dues societats concessionàries són corresponsables i les UTE Trambaix i Trambesòs hi actuen d’encarregades. La política no preveu cap comunicació als accionistes de les concessionàries (Globalvia, Moventia, Alstom i altres).'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['tram-privacitat', 'tjue-schrems-ii'], 'Les estadístiques d’ús van a Google Inc. als Estats Units, i la política empara la transferència en l’Escut de Privadesa, que el TJUE va invalidar el 16 de juliol de 2020 (C-311/18). No esmenta el marc de privadesa de dades UE-EUA vigent.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['tram-privacitat'], 'L’apartat de l’app deixa el termini de conservació en blanc («-»), tot i que en fixa per a altres tractaments (quatre anys per a la venda de títols, un mes per a la videovigilància).'),
        dataAfterDeletion: unknown(),
      },
      accountDeletion: {
        possible: unknown('No hem pogut verificar si l’app té compte d’usuari.'),
        selfService: unknown(),
        difficulty: 'unknown',
      },
      userRights: {
        dataExport: unknown(),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['tram-privacitat'], 'Per correu postal o electrònic a les societats (dpo@tram.cat) o a les UTE (dpd@trambcn.com), amb reclamació a l’APDCAT.', { url: 'mailto:dpo@tram.cat' }),
      },
      controls: {
        adPersonalizationOptOut: na('La política no descriu cap publicitat ni comunicació comercial des de l’app.'),
        telemetryOptOut: unknown('L’anàlisi d’ús es basa en l’interès legítim; no hem trobat com oposar-s’hi.'),
        granularControls: f('partial', 'official', ['tram-privacitat'], 'La ubicació i les notificacions depenen del consentiment.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una aplicació d’informació de transport, sense comunicacions privades entre persones.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown('No hem trobat cap auditoria de seguretat publicada.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses.'),
        vulnerabilityDisclosure: unknown('tram.cat no publica cap fitxer security.txt.'),
      },
      alternatives: [
        { app: 'tmb-app', comparability: 'partial', rationale: 'Inclou el tramvia en la planificació de trajectes de l’àrea de Barcelona.', tradeOffs: 'Pensada per al metro i el bus; sense avisos específics del TRAM.' },
        { app: 'google-maps', comparability: 'partial', rationale: 'Horaris del tramvia i planificació.', tradeOffs: 'Google vincula la ubicació al compte si hi has iniciat sessió.' },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: CATALAN_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'No hem incorporat el bloc de servei públic: tot i que el TRAM és transport públic, l’app la publiquen concessionàries privades, que no estan sotmeses a l’ENS ni a l’obligació de publicar el registre d’activitats. L’enllaç de privadesa de l’App Store (tram.cat/es/privacidad) retorna un error 404; la política vigent és a tram.cat/privacidad. No hem trobat incidents.',
        openQuestions: [
          'Quin SDK de Google fa servir l’app per a les estadístiques, i amb quin mecanisme de transferència?',
          'Per què l’etiqueta de l’App Store diu que no es recull cap dada?',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'tmb-intranet-dades-treballadors-2025',
      title: 'Expedient sancionador de l’APDCAT a TMB per exposar dades confidencials del personal a la intranet',
      type: 'leak',
      severity: 'high',
      company: 'transports-metropolitans-de-barcelona',
      occurredAt: '2025-01-23',
      disclosedAt: '2025-02-11',
      description:
        'El 23 de gener de 2025 TMB va detectar que una carpeta de Microsoft Teams amb dades personals i confidencials d’empleats estava configurada com a pública: informes mèdics, denúncies d’assetjament, atestats, sentències i acords d’acomiadament, accessibles per a uns 9.000 treballadors. La va tancar i ho va comunicar a l’APDCAT, a l’Oficina Antifrau i als Mossos. El desembre del 2025 l’APDCAT va obrir un procediment sancionador per fets del 2022 al 2025, amb almenys cinc infraccions greus i una de molt greu, entre les quals no haver notificat la bretxa i no haver analitzat els riscos després de migrar al núvol el 2021. El setembre del 2026 l’Oficina Antifrau va multar amb 60.000 euros el director de l’assessoria jurídica per haver exposat la identitat de persones alertadores. Afecta el personal, no les persones usuàries de les apps.',
      affectedPeople: 'Uns 9.000 treballadors de TMB i familiars seus.',
      regulatory: {
        authority: 'Autoritat Catalana de Protecció de Dades',
        status: 'ongoing',
      },
      sources: ['tmb-metropoli-bretxa-2025', 'tmb-viaempresa-expedient-apdcat', 'tmb-beteve-expedient-apdcat', 'tmb-beteve-multa-antifrau'],
    },
    {
      slug: 'atm-apdcat-ps-57-2024',
      title: 'L’APDCAT declara dues infraccions de l’ATM per una sol·licitud d’alta de la T-mobilitat pujada al compte d’una altra persona',
      type: 'regulatory-order',
      severity: 'low',
      apps: ['t-mobilitat'],
      company: 'autoritat-del-transport-metropolita',
      occurredAt: '2022-11-28',
      disclosedAt: '2024-12-09',
      description:
        'Un treballador d’un punt d’atenció T-mobilitat de Renfe a l’estació de Sants va pujar la sol·licitud d’alta d’una persona a l’àrea privada del web d’una altra, que hi va poder veure el nom, la signatura, la data de naixement, el correu, el document d’identitat i el telèfon. L’APDCAT va declarar que l’ATM havia vulnerat el principi de confidencialitat i que no tenia formalitzat el contracte d’encarregat del tractament amb Renfe Viajeros, i li va requerir mesures correctores. Com a administració pública, l’ATM no pot ser multada.',
      affectedPeople: 'Una persona usuària.',
      regulatory: {
        authority: 'Autoritat Catalana de Protecció de Dades',
        legalBasis: 'Articles 5.1.f i 28 del RGPD',
        status: 'final',
      },
      sources: ['apdcat-ps-57-2024'],
    },
    {
      slug: 'tmobilitat-exposicio-web-proves-2021',
      title: 'Un entorn de proves del web de la T-mobilitat exposa dades de prop de 2.000 persones',
      type: 'leak',
      severity: 'medium',
      apps: ['t-mobilitat'],
      company: 'autoritat-del-transport-metropolita',
      occurredAt: '2021-10-05',
      disclosedAt: '2021-10-05',
      description:
        'Pocs dies després del llançament públic de la T-mobilitat, un desenvolupador va detectar que un entorn de proves del web tenia el panell d’administració accessible amb credencials per defecte i deixava veure dades personals de prop de 2.000 persones registrades. L’ATM ho va qualificar d’«error operatiu» i va dir que les dades no eren sensibles.',
      affectedPeople: 'Prop de 2.000 persones registrades.',
      sources: ['tmobilitat-beteve-web-2021', 'tmobilitat-totbarcelona-2021'],
    },
    {
      slug: 'renfe-credential-stuffing-2019',
      title: 'Intents massius d’accés als comptes de Renfe amb contrasenyes filtrades',
      type: 'other',
      severity: 'low',
      company: 'renfe-viajeros',
      occurredAt: '2019-03-18',
      disclosedAt: '2019-03-18',
      description:
        'El març del 2019 atacants van provar d’entrar als comptes de renfe.com amb combinacions d’usuari i contrasenya filtrades en altres serveis. Renfe va demanar a les persones usuàries que canviessin la contrasenya i va dir que les dades de pagament no s’havien vist afectades. És el mateix compte que avui fan servir l’app de Renfe i la de Rodalies.',
      sources: ['renfe-credential-stuffing-2019'],
    },
  ],

  storeIds: {
    'tmb-app': 'com.tmb.TMBVirtual',
    't-mobilitat': 'cat.atm.tmobilitat',
    fgc: 'com.iboomobile.FGC2',
    rodalies: 'com.renfe.renferodalies',
    'amb-mobilitat': 'com.Cetramsa.Temps-bus',
    'tram-barcelona': 'com.trambcn.tramapp',
  },
}
