import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

/**
 * Lot 25 de la segona onada: sanitat i música.
 *
 * Vuit aplicacions mèdiques —quatre de serveis públics de salut, dues de
 * grups hospitalaris privats, una d'una asseguradora i una de sala d'espera
 * virtual— i dues de música. El fil que les uneix és què declara l'etiqueta
 * de privadesa de l'App Store quan hi ha dades de salut pel mig: a
 * EspaiSalut, a Mi Salud Digital CLM i a Vera Health l'etiqueta declara
 * menys del que descriu la política del servei, mentre que Sergas Móbil és
 * de les poques aplicacions públiques espanyoles que admet «dades usades per
 * rastrejar-te».
 */
const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

const appStore = (id: string) => `https://apps.apple.com/es/app/id${id}`

export const lot: SeedLot = {
  companies: [
    {
      slug: 'ib-salut',
      name: 'IB-Salut',
      legalName: 'Servei de Salut de les Illes Balears',
      description:
        'Ens públic de la Conselleria de Salut i Consum del Govern de les Illes Balears que gestiona l’atenció primària i hospitalària de l’arxipèlag. És el responsable del tractament de les dades de la seu electrònica i de l’aplicació EspaiSalut.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      website: 'https://www.ibsalut.es/',
      productDomains: ['ibsalut.es', 'espaisalut.ibsalut.es'],
    },
    {
      slug: 'sescam',
      name: 'SESCAM',
      legalName: 'Servicio de Salud de Castilla-La Mancha',
      description:
        'Organisme autònom de la Conselleria de Sanitat de Castella-la Manxa que presta l’assistència sanitària pública de la comunitat. És el responsable del tractament dels sistemes d’informació en línia, tant del web com de l’aplicació Mi Salud Digital.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      website: 'https://sanidad.castillalamancha.es/',
      productDomains: ['sescam.castillalamancha.es', 'sanidad.castillalamancha.es'],
      privacyContact: 'dpd@sescam.jccm.es',
    },
    {
      slug: 'sergas',
      name: 'Sergas',
      legalName: 'Servizo Galego de Saúde',
      description:
        'Servei públic de salut de Galícia, integrat a la Conselleria de Sanidade de la Xunta. És el responsable del tractament de l’aplicació Sergas Móbil, que fa de porta d’entrada a la resta de serveis electrònics sanitaris gallecs.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'state',
      website: 'https://www.sergas.gal/',
      productDomains: ['sergas.gal', 'sergas.es'],
    },
    {
      slug: 'hm-hospitales',
      name: 'HM Hospitales',
      legalName: 'Profesionales de la Medicina y de la Empresa, S.A.',
      description:
        'Grup hospitalari privat espanyol amb seu a Madrid que explota una trentena d’hospitals, policlínics i centres integrals a Madrid, Galícia, Catalunya, Andalusia, Castella i Lleó i Castella-la Manxa. La política de privadesa identifica com a responsables la matriu i una vintena de societats vinculades, que comparteixen les dades dels pacients per interès legítim.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://www.hmhospitales.com/',
      productDomains: ['hmhospitales.com'],
    },
    {
      slug: 'hospimar-2000',
      name: 'IMED Hospitales',
      legalName: 'Hospimar 2000, S.L.',
      description:
        'Grup hospitalari privat del País Valencià i Múrcia, amb seu a l’Alfàs del Pi (Alacant). Hospimar 2000 és la societat de serveis del grup; cada hospital té una societat titular pròpia que és responsable del tractament de les dades dels seus pacients.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'commerce',
      website: 'https://www.imedhospitales.com/',
      productDomains: ['imedhospitales.com'],
      privacyContact: 'delegadoprotecciondatos@imedhospitales.com',
    },
    {
      slug: 'dkv-seguros',
      name: 'DKV Seguros',
      legalName: 'DKV Seguros y Reaseguros, S.A.E.',
      description:
        'Asseguradora de salut amb seu a Saragossa, que forma part del grup europeu ERGO i que ha iniciat l’evolució de la marca cap a ERGO a Espanya. DKV Servicios és la societat del grup que gestiona els serveis de salut digital, com la teleconsulta i la recepta electrònica.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      parentGroup: 'ERGO',
      primaryRevenueModel: 'subscription',
      website: 'https://dkv.es/',
      productDomains: ['dkv.es', 'dkvseguros.com'],
      privacyContact: 'dpogrupodkv@dkvseguros.es',
    },
    {
      slug: 'mysphera',
      name: 'Mysphera',
      legalName: 'Mysphera, S.L.',
      description:
        'Empresa tecnològica de Paterna (València) que ven als hospitals sistemes de localització en temps real de pacients i d’equipament, amb polseres identificadores. La seva aplicació de sala d’espera virtual avisa els familiars de l’estat del pacient durant una operació o a urgències.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'subscription',
      website: 'https://www.mysphera.com/',
      productDomains: ['mysphera.com'],
      privacyContact: 'gdpr@mysphera.com',
    },
    {
      slug: 'veracity-health',
      name: 'Vera Health',
      legalName: 'Veracity-Health Inc.',
      description:
        'Empresa emergent nord-americana constituïda a Delaware i amb adreça a San Francisco, que ofereix un motor de respostes clíniques amb intel·ligència artificial adreçat a professionals sanitaris. No declara cap establiment a la Unió Europea: els serveis s’allotgen als Estats Units.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.verahealth.ai/',
      productDomains: ['verahealth.ai'],
      privacyContact: 'privacy@verahealth.ai',
    },
    {
      slug: 'suno',
      name: 'Suno',
      legalName: 'Suno, Inc.',
      description:
        'Empresa nord-americana de Cambridge (Massachusetts), fundada el 2022, que fa un generador de cançons amb intel·ligència artificial a partir d’indicacions escrites, d’àudio gravat o de fotografies. Es finança amb un model gratuït de crèdits diaris i dues subscripcions de pagament.',
      headquartersCountry: 'US',
      ownership: 'private',
      foundedYear: 2022,
      primaryRevenueModel: 'freemium',
      website: 'https://suno.com/',
      productDomains: ['suno.com', 'suno.ai'],
      privacyContact: 'privacy@suno.com',
    },
    {
      slug: 'apple',
      name: 'Apple',
      legalName: 'Apple Inc.',
      description:
        'Fabricant nord-americà de dispositius, sistemes operatius i serveis en línia. Va comprar Shazam el 2018 i n’explota el servei d’identificació de cançons, que manté una política de privadesa pròpia dins del marc de la política general d’Apple.',
      headquartersCountry: 'US',
      ownership: 'public',
      foundedYear: 1976,
      primaryRevenueModel: 'hardware',
      website: 'https://www.apple.com/',
      productDomains: ['apple.com', 'icloud.com', 'shazam.com'],
    },
  ],
  sources: [
    s('espaisalut-app-store', 'EspaiSalut a l’App Store', appStore('6759250070'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: adreça postal, adreça electrònica, identificador d’usuari i identificador del dispositiu vinculats a la identitat, i dades d’errors sense vincular. No declara dades de salut ni rastreig.',
    }),
    s('espaisalut-privacy-policy', 'Política de privacidad — IB-SALUT', 'https://ibsalut.es/es/politica-de-privacidad', 'Servei de Salut de les Illes Balears', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa de la seu electrònica de l’IB-Salut: finalitats (cites, història clínica, medicació, targeta sanitària), remissió al registre d’activitats de tractament per a les bases jurídiques, absència de decisions automatitzades i canals per exercir els drets.',
    }),
    s('espaisalut-app-description', 'EspaiSalut: funcionalitats de l’aplicació', appStore('6759250070'), 'IB-Salut', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Descripció oficial de l’aplicació a la fitxa de l’App Store: targeta sanitària, cites, història clínica i medicació, amb accés autenticat mitjançant Cl@ve o sistemes equivalents.',
    }),
    s('mi-salud-digital-clm-app-store', 'Mi Salud Digital CLM a l’App Store', appStore('824742584'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: el SESCAM declara que no es recull cap dada, tot i que l’aplicació dona accés a la carpeta de salut i permet identificar-se amb el codi de la targeta sanitària.',
    }),
    s('mi-salud-digital-clm-privacy-policy', 'Política de Privacidad — Servicio de Salud de Castilla-La Mancha', 'https://sanidad.castillalamancha.es/content/politica-de-privacidad', 'SESCAM', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política aplicable al web i a l’aplicació mòbil del SESCAM: base jurídica d’obligació legal, missió d’interès públic i exercici de poders públics; cap cessió a tercers llevat d’obligació legal o consentiment; llistat públic dels tractaments i contacte del delegat de protecció de dades.',
    }),
    s('sergas-mobil-app-store', 'Sergas Móbil a l’App Store', appStore('1154478913'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: declara dades d’interacció, altres dades d’ús i dades d’errors com a «dades usades per rastrejar-te», el telèfon vinculat a la identitat i la ubicació, les fotografies i els errors sense vincular.',
    }),
    s('sergas-mobil-privacy-policy', 'Política de privacidade da aplicación Sergas Móbil', 'https://www.sergas.gal/A-nosa-organizacion/Sergas-Mobil-politica-de-privacidade', 'Servizo Galego de Saúde', 'privacy-policy', 'primary', {
      language: 'other',
      summary:
        'Política específica de l’aplicació, en gallec: tres nivells d’identificació, dades identificatives i de salut tractades, permisos que demana cada sistema operatiu —inclòs el de rastreig a iOS per generar estadístiques de navegació—, base d’interès públic, absència de cessions i avaluació d’impacte feta.',
    }),
    s('espaisalut-rat', 'Registro de actividades de tratamiento (RAT) de la Dirección General del Servicio de Salud de las Islas Baleares', 'https://www.ibsalut.es/es/servicio-de-salud/proteccion-de-datos-personales/534-registro-de-actividades-de-tratamiento/3946-registro-de-actividades-de-tratamiento-del-servicio-de-salud-de-las-islas-baleares', 'Servei de Salut de les Illes Balears', 'privacy-center', 'primary', {
      language: 'es',
      summary:
        'Registre d’activitats de tractament de la Direcció General de l’IB-Salut, publicat per unitats: inclou els tractaments «Historia Clínica» i «Historia de clínica compartida», amb la Llei 14/1986 general de sanitat i la Llei 41/2002 com a referències normatives. No hi consta cap activitat identificada com a EspaiSalut.',
    }),
    s('espaisalut-dpd', 'Delegado de protección de datos — IB-SALUT', 'https://www.ibsalut.es/es/servicio-de-salud/organizacion/organos-de-direccion/direccion-general/delegado-de-proteccion-de-datos', 'Servei de Salut de les Illes Balears', 'privacy-center', 'primary', {
      language: 'es',
      summary:
        'Fitxa del delegat de protecció de dades de l’IB-Salut: nom, adreça postal del Servei de Protecció de Dades (c/ de la Reina Esclarmunda, 9, Palma) i telèfon. No hi publica cap adreça electrònica ni formulari.',
    }),
    s('espaisalut-accessibilitat', 'Accesibilidad — IB-SALUT', 'https://ibsalut.es/es/accesibilidad', 'Servei de Salut de les Illes Balears', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Declaració d’accessibilitat conforme al Reial decret 1112/2018, feta el 19 d’octubre de 2021 i revisada el 26 d’octubre del mateix any: cobreix el web www.ibsalut.es i el Portal del Pacient, que declara que «aún no son conformes», i no esmenta l’aplicació mòbil.',
    }),
    s('espaisalut-seguretat-informacio', 'Seguridad de la información — IB-SALUT', 'https://ibsalut.es/es/profesionales/e-salud-tecnologias-de-la-informacion-y-la-comunicacion/seguridad-de-la-informacion', 'Servei de Salut de les Illes Balears', 'technical-doc', 'primary', {
      language: 'es',
      summary:
        'Pàgina de seguretat de la informació de l’IB-Salut: certificació de conformitat amb l’Esquema Nacional de Seguretat (Reial decret 311/2022) dels sistemes que donen suport als serveis de l’Oficina de Seguretat, sense cap menció de la categoria ni dels sistemes assistencials.',
    }),
    s('espaisalut-cita-previa', 'Cita previa IB-SALUT', 'https://www.ibsalut.es/es/info-ciudadania/cita-previa-ibsalut', 'Servei de Salut de les Illes Balears', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Canals per demanar cita d’atenció primària: el portal i l’aplicació EspaiSalut, el telèfon INFOSALUT CONNECTA 971 220 000 —de dilluns a dissabte de 7 a 21 h i diumenges i festius de 8 a 21 h— i el mateix centre de salut.',
    }),
    s('mi-salud-digital-clm-rat', 'Historia Clínica del SESCAM — Registro de actividades de tratamiento de Castilla-La Mancha', 'https://rat.castillalamancha.es/info/1154', 'Junta de Comunidades de Castilla-La Mancha', 'privacy-center', 'primary', {
      language: 'es',
      summary:
        'Fitxa del tractament «Historia Clínica del SESCAM» al registre públic d’activitats de tractament de Castella-la Manxa, amb la Direcció General d’Assistència Sanitària com a responsable i una conservació remesa a la normativa d’arxius, sense termini concret.',
    }),
    s('mi-salud-digital-clm-accessibilitat', 'Accesibilidad — Portal de la Junta de Comunidades de Castilla-La Mancha', 'https://www.castillalamancha.es/accesibilidad', 'Junta de Comunidades de Castilla-La Mancha', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Declaració d’accessibilitat del portal autonòmic, feta el 14 de març de 2026 i revisada el 16 d’abril: es declara «parcialmente conforme» amb el Reial decret 1112/2018 i acota l’abast a www.castillalamancha.es, sense esmentar cap aplicació mòbil.',
    }),
    s('mi-salud-digital-clm-cita-previa', 'Cita previa — Sanidad de Castilla-La Mancha', 'https://sanidad.castillalamancha.es/ciudadanos/cita-previa', 'SESCAM', 'support-doc', 'primary', {
      language: 'es',
      summary:
        'Pàgina oficial de cita prèvia del SESCAM: només hi consten el web i l’aplicació mòbil com a canals per demanar cita; els telèfons dels centres s’ofereixen al cercador de centres, no com a via de cita.',
    }),
    s('sergas-mobil-rexistro-actividades', 'Rexistro de actividades de tratamento — Xunta de Galicia', 'https://www.xunta.gal/rexistro-de-actividades', 'Xunta de Galicia', 'privacy-center', 'primary', {
      language: 'other',
      summary:
        'Registre d’activitats de tractament de la Xunta, organitzat per conselleries: la Conselleria de Sanidade hi té una entrada única amb el document de les seves activitats, sense desglossar-hi cap sistema ni aplicació concreta.',
    }),
    s('sergas-mobil-delegados-proteccion-datos', 'Delegados/as de protección de datos — Xunta de Galicia', 'https://www.xunta.gal/delegados-de-proteccion-de-datos', 'Xunta de Galicia', 'privacy-center', 'primary', {
      language: 'other',
      summary:
        'Pàgina de la Xunta que explica que hi ha un delegat de protecció de dades per àmbit sectorial, amb un per conselleria, i que hi remet per un formulari de contacte sense publicar-ne l’adreça electrònica ni la postal.',
    }),
    s('hm-hospitales-app-store', 'HM Hospitales a l’App Store', appStore('1260901154'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: dades de salut, ubicació exacta i aproximada, adreça postal, adreça electrònica, nom, telèfon i identificador d’usuari, tots vinculats a la identitat i per a la funcionalitat de l’app. No declara rastreig.',
    }),
    s('hm-hospitales-privacy-policy', 'Política de privacidad — HM Hospitales', 'https://www.hmhospitales.com/politica-de-privacidad/', 'HM Hospitales', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del grup: finalitats i bases jurídiques una per una, perfil sanitari i perfil comercial, ús d’intel·ligència artificial de suport al diagnòstic, terminis de conservació per finalitat, llistat de la vintena de societats del grup amb què es comparteixen les dades i formulari per exercir els drets.',
    }),
    s('imed-hospitales-app-store', 'IMED Hospitales a l’App Store', appStore('920775562'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: nom, adreça electrònica, telèfon, identificador d’usuari i dades d’interacció vinculats a la identitat, amb el nom declarat també per a analítica i per a personalització del producte. No declara dades de salut ni rastreig.',
    }),
    s('imed-hospitales-privacy-policy', 'Política de Protección de datos de carácter personal — IMED Hospitales', 'https://www.imedhospitales.com/es/pagina/politica-privacidad-imed-pacientes/', 'IMED Hospitales', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del grup IMED: societat responsable segons el centre, finalitats del portal del pacient, cessió a les empreses del grup per elaborar perfils amb procediments automatitzats, conservació mínima de cinc anys de la història clínica i exercici dels drets des del portal.',
    }),
    s('activa-dkv-privacy-policy', 'App Activa DKV: Términos y Condiciones Generales de Uso y Política de Privacidad', 'https://dkv.es/aviso-legal/politica-de-privacidad-dkv-activa', 'DKV Seguros', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Document conjunt de condicions i política de privadesa de l’aplicació: dades d’identificació, contacte, localització, imatge, veu i dades mèdiques; mercadotecnia directa i segmentació de perfils per interès legítim; xifratge de les receptes electròniques; cancel·lació del compte només per correu al delegat de protecció de dades.',
    }),
    s('activa-dkv-app-store', 'Activa DKV a l’App Store', appStore('6443825826'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: declara la interacció amb el producte com a dada usada per rastrejar; adreça postal, adreça electrònica, telèfon, fotografies, identificadors i ús vinculats a la identitat, i ubicació exacta i aproximada sense vincular. No declara dades de salut.',
    }),
    s('activa-dkv-group', 'Grupo ERGO — DKV', 'https://dkv.es/corporativo/grupo-ergo', 'DKV Seguros', 'other', 'primary', {
      language: 'es',
      summary: 'Pàgina corporativa on DKV confirma que forma part del grup assegurador ERGO i que evoluciona cap a aquesta marca a Espanya.',
    }),
    s('virtual-waiting-room-privacy-policy', 'APP Virtual Waiting Room Privacy Policy', 'https://www.mysphera.com/mysphera-app-politica-de-privacidad/', 'Mysphera', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política de l’aplicació: l’única dada tractada és l’identificador d’instància de Firebase Cloud Messaging, que Google esborra 180 dies després de desinstal·lar l’app; cal la càmera per llegir el codi QR de l’hospital i no hi ha cessions a tercers.',
    }),
    s('virtual-waiting-room-app-store', 'Virtual Waiting Room a l’App Store', appStore('1497714153'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa i descripció de l’aplicació: Mysphera declara que no es recull cap dada i explica que cal un codi d’accés lliurat per l’hospital.',
    }),
    s('vera-health-privacy-policy', 'Vera Health™ Privacy Policy', 'https://www.verahealth.ai/privacy', 'Veracity-Health Inc.', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-07-15',
      summary:
        'Política de Veracity-Health: categories de dades i destinataris (proveïdors, socis publicitaris i d’analítica), bases jurídiques del RGPD, allotjament als Estats Units amb clàusules contractuals tipus, compromís de no entrenar els models amb dades personals i drets exercibles per correu.',
    }),
    s('vera-health-app-store', 'Vera Health a l’App Store', appStore('6744374898'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: Veracity-Health declara que no es recull cap dada, tot i que la política parla d’adreça electrònica, identificadors de dispositiu, geolocalització per IP i dades compartides amb socis publicitaris.',
    }),
    s('suno-privacy-notice', 'Suno Privacy Notice', 'https://suno.com/privacy', 'Suno, Inc.', 'privacy-policy', 'primary', {
      language: 'en',
      publishedAt: '2026-06-23',
      summary:
        'Avís de privadesa de Suno: contingut, indicacions i converses recollits; ús per entrenar i millorar els models per interès legítim; galetes de publicitat i de mesura; allotjament als Estats Units; supressió del compte només per correu i retenció de les dades biomètriques fins a tres anys.',
    }),
    s('suno-app-store', 'Suno a l’App Store', appStore('6480136315'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: declara fotografies o vídeos i l’identificador del dispositiu com a dades usades per rastrejar, i àudio, contingut, historial de cerca, identificadors i ús vinculats a la identitat per a publicitat, analítica i personalització.',
    }),
    s('suno-help-accounts', 'Suno Knowledge Base: Accounts & Billing', 'https://help.suno.com/en/categories/550209-accounts-billing', 'Suno, Inc.', 'support-doc', 'primary', {
      language: 'en',
      summary:
        'Centre d’ajuda de Suno: gestió del compte, dels crèdits i de la subscripció des de suno.com/account. No hi ha cap article que expliqui com eliminar el compte.',
    }),
    s('shazam-privacy', 'Shazam & Privacy', 'https://www.shazam.com/privacy', 'Apple', 'privacy-center', 'primary', {
      language: 'en',
      summary:
        'Pàgina de privadesa de Shazam: sense compte les dades queden lligades a un Shazam ID no identificatiu; explica què es recull, que es comparteix informació agregada i desidentificada amb socis, i els portals per descarregar les dades o eliminar el compte en 30 dies.',
    }),
    s('shazam-app-store', 'Shazam a l’App Store', appStore('284993459'), 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: historial de compres, ubicació aproximada, identificadors, ús i diagnòstics vinculats a la identitat per a analítica, personalització i funcionalitat; ubicació exacta i historial de cerca sense vincular. No declara rastreig.',
    }),
    s('apple-privacy-policy', 'Política de privacidad de Apple', 'https://www.apple.com/es/legal/privacy/es/', 'Apple', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política general d’Apple: Apple Distribution International Limited és la responsable per a l’Espai Econòmic Europeu, remet a la política pròpia de Shazam, afirma que no ven ni «comparteix» dades personals i explica com desactivar els anuncis personalitzats.',
    }),
    s('apple-security-txt', 'security.txt d’Apple', 'https://www.apple.com/.well-known/security.txt', 'Apple', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer security.txt publicat per Apple, amb el contacte security.apple.com, els agraïments de seguretat i l’enllaç a les directrius del programa de recompenses Apple Security Bounty.',
    }),
    s('apple-transparency-report', 'Apple Transparency Report', 'https://www.apple.com/legal/transparency/', 'Apple', 'transparency-report', 'primary', {
      language: 'en',
      summary: 'Informes semestrals d’Apple sobre les peticions de dades de governs i d’autoritats, per país i per tipus de petició.',
    }),
  ],
  apps: [
    {
      slug: 'espaisalut',
      name: 'EspaiSalut',
      company: 'ib-salut',
      categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
      tagline: 'Dona accés a la història clínica i a la medicació, però l’etiqueta de l’App Store no declara cap dada de salut',
      summary:
        'EspaiSalut és l’aplicació oficial del Servei de Salut de les Illes Balears: targeta sanitària, cites d’atenció primària, informes, resultats de proves, al·lèrgies i full de medicació. L’accés a les dades clíniques es fa amb Cl@ve o un sistema equivalent, de manera que no hi ha cap contrasenya pròpia. L’etiqueta de privadesa només declara adreça postal, correu i identificadors, sense esmentar les dades de salut que l’aplicació mostra. No hi ha cap política de privadesa específica de l’aplicació: cal anar a la de la seu electrònica, que remet el detall de cada tractament al registre d’activitats.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya (UE); servei públic de la comunitat autònoma de les Illes Balears',
      links: {
        website: 'https://www.ibsalut.es/',
        privacyPolicy: 'https://ibsalut.es/es/politica-de-privacidad',
        appStore: appStore('6759250070'),
      },
      accountRequired: f('partial', 'official', ['espaisalut-app-description'], 'Algunes consultes generals són obertes, però l’accés a la informació personal i a les dades clíniques exigeix autenticar-se amb Cl@ve o un sistema equivalent.'),
      openSource: f('no', 'official', ['espaisalut-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'regional',
        legalBasis: f('partial', 'official', ['espaisalut-privacy-policy', 'espaisalut-rat'], 'La política de privadesa només invoca el Reglament (UE) 2016/679 i la Llei orgànica 3/2018 i remet la base jurídica de cada tractament al registre d’activitats. El registre sí que cita normes sectorials, però sense article: la Llei 14/1986 general de sanitat i la Llei 41/2002 d’autonomia del pacient.', { norm: 'Llei 14/1986, general de sanitat, i Llei 41/2002, d’autonomia del pacient (citades al RAT sense article)' }),
        processingRegistry: f('partial', 'official', ['espaisalut-rat'], 'L’IB-Salut publica el registre d’activitats de tractament per unitats —direcció general, hospitals, gerències i SAMU 061— i el de la direcció general inclou els tractaments «Historia Clínica» i «Historia de clínica compartida», però no hi ha cap activitat identificable com a EspaiSalut.', { url: 'https://www.ibsalut.es/es/servicio-de-salud/proteccion-de-datos-personales/534-registro-de-actividades-de-tratamiento' }),
        dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades d’EspaiSalut ni de la història de salut electrònica.'),
        ensConformity: f('partial', 'official', ['espaisalut-seguretat-informacio', 'espaisalut-privacy-policy'], 'L’IB-Salut publica una certificació de conformitat amb el Reial decret 311/2022, però només dels sistemes que donen suport als serveis de l’Oficina de Seguretat, no dels sistemes assistencials ni de l’aplicació, i no en declara la categoria.'),
        dpo: f('partial', 'official', ['espaisalut-dpd'], 'L’IB-Salut identifica el delegat de protecció de dades amb nom, adreça postal del Servei de Protecció de Dades i telèfon, però no en publica cap adreça electrònica ni cap formulari de contacte.', { contact: 'Servei de Protecció de Dades, c/ de la Reina Esclarmunda, 9, 07003 Palma — tel. 971 175 600' }),
        offlineAlternative: f('yes', 'official', ['espaisalut-cita-previa'], 'Les cites d’atenció primària es poden demanar pel telèfon INFOSALUT CONNECTA 971 220 000 o directament al centre de salut, sense passar per l’aplicació.'),
        accessibilityStatement: f('partial', 'official', ['espaisalut-accessibilitat'], 'Hi ha declaració d’accessibilitat conforme al Reial decret 1112/2018, però és de l’octubre del 2021, declara que el web i el Portal del Pacient «aún no son conformes» i no cobreix l’aplicació mòbil.', { url: 'https://ibsalut.es/es/accesibilidad' }),
        mandatoryRetention: f('yes', 'official', ['boe-llei-41-2002', 'espaisalut-rat'], 'L’aplicació dona accés a la història clínica, i l’article 17.1 de la Llei 41/2002 obliga els centres sanitaris a conservar la documentació clínica com a mínim cinc anys des de l’alta de cada procés assistencial. El registre d’activitats de l’IB-Salut cita la mateixa llei com a referència normativa dels tractaments de la història clínica.'),
      },
      dataSummary:
        'Reunides, les dades diuen quines malalties té una persona, quins medicaments pren, quines al·lèrgies té registrades i quan i on visita el metge. L’IB-Salut ja les té com a servei sanitari; el que hi afegeix l’aplicació és un canal mòbil i els identificadors del dispositiu.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['espaisalut-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['espaisalut-app-store'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['espaisalut-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['espaisalut-app-store'], note: 'L’etiqueta el declara com a identificador d’usuari; a la pràctica és la identitat de Cl@ve i el número de la targeta sanitària.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['espaisalut-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['espaisalut-app-description'], note: 'La targeta sanitària i l’autenticació amb Cl@ve es basen en el DNI o el NIE.' }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['espaisalut-privacy-policy', 'espaisalut-app-description'], note: 'Informes, resultats de proves diagnòstiques, al·lèrgies i full de medicació. L’etiqueta de l’App Store no declara cap dada de salut.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['espaisalut-app-store'], note: 'Dades d’errors, no vinculades a la identitat.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['espaisalut-app-store'], 'L’etiqueta de l’App Store no declara cap dada usada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['espaisalut-app-store'], 'L’etiqueta no declara cap identificador publicitari; sí l’identificador del dispositiu, per a la funcionalitat de l’aplicació.'),
        thirdPartyTrackersPresent: unknown('No hem pogut comprovar quins components de tercers incorpora l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['espaisalut-privacy-policy', 'espaisalut-app-store'], 'És un servei públic sanitari: ni la política ni l’etiqueta preveuen cap ús publicitari.'),
        profiling: f('no', 'official', ['espaisalut-privacy-policy'], 'La política afirma que el Servei de Salut no pren decisions automatitzades ni elabora perfils amb les dades facilitades.'),
        aiTraining: unknown('La política no diu res sobre l’ús de les dades per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['espaisalut-privacy-policy'], 'La política no llista destinataris: remet les possibles comunicacions a la fitxa de cada tractament publicada a la seu electrònica.'),
        intraGroupSharing: na('L’IB-Salut és un ens públic autonòmic sense grup empresarial.'),
        dataBrokerSales: f('no', 'editorial', ['espaisalut-privacy-policy'], 'Com a administració pública, no pot vendre dades personals; la política no preveu cap cessió amb finalitat comercial.'),
        internationalTransfers: f('partial', 'official', ['espaisalut-privacy-policy'], 'La política diu que les possibles transferències internacionals estan identificades a cada tractament publicat a la seu electrònica, sense concretar-ne cap.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades; el portal de transparència de l’IB-Salut no en publica cap d’aquest tipus.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['espaisalut-privacy-policy'], 'La política només diu que les dades es conserven «mentre resultin adequades, pertinents i limitades» i segons les obligacions legals, sense cap termini concret.'),
        dataAfterDeletion: unknown('La política no explica què passa amb les dades quan es deixa de fer servir el servei.'),
      },
      accountDeletion: {
        possible: na('No hi ha un compte propi de l’aplicació: s’hi entra amb Cl@ve o amb un sistema d’identificació equivalent, i les dades són les de la història clínica del servei públic de salut.'),
        selfService: na('No hi ha cap opció de baixa dins de l’aplicació.'),
        difficulty: 'unknown',
        steps: [
          'Desinstal·la l’aplicació: no hi ha cap compte propi que es pugui tancar.',
          'Si vols exercir els drets de supressió, limitació o oposició, escriu a l’IB-Salut (c/ del Carme, 18, 07003 Palma) o fes servir el Registre Electrònic Comú de l’Administració General de l’Estat.',
          'Tingues en compte que la història clínica no es pot esborrar: la llei obliga a conservar-la.',
        ],
        obstacles: 'Els drets s’exerceixen pels canals administratius, no des de l’aplicació, i la resposta pot trigar fins a un mes, prorrogable dos mesos més.',
        dataRetained: 'La història clínica i la resta de dades assistencials, que es conserven per obligació legal.',
        sources: ['espaisalut-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['espaisalut-privacy-policy'], 'La política reconeix el dret a la portabilitat en format estructurat i de lectura mecànica, però només per sol·licitud i «en determinades circumstàncies».'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['espaisalut-privacy-policy'], 'Per correu postal a l’IB-Salut o pel Registre Electrònic Comú, amb resposta en un mes prorrogable.', { url: 'https://rec.redsara.es/registro/action/are/acceso.do' }),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat ni personalització publicitària al servei.'),
        telemetryOptOut: unknown('No consta si es poden desactivar les dades d’errors que declara l’etiqueta.'),
        granularControls: unknown('No hem pogut comprovar quins controls de privadesa ofereix l’aplicació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('És un servei de consulta de dades sanitàries davant del mateix responsable; no hi ha comunicacions entre persones usuàries que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['espaisalut-privacy-policy'], 'La política garanteix que tota transmissió de dades personals per xarxes de telecomunicacions es fa per un canal segur.'),
        atRestEncryption: unknown('La política parla de les mesures de l’Esquema Nacional de Seguretat, però no concreta el xifratge en repòs.'),
        mfa: f('partial', 'official', ['espaisalut-app-description'], 'L’accés a les dades clíniques es fa amb Cl@ve o un sistema equivalent, com el certificat digital, que porta les seves pròpies garanties d’identificació.'),
        independentAudits: f('partial', 'official', ['espaisalut-privacy-policy'], 'La política invoca l’Esquema Nacional de Seguretat, que comporta auditories periòdiques, però no en publica cap resultat.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini ibsalut.es no serveix cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'tarjeta-sanitaria',
          comparability: 'partial',
          rationale: 'També permet portar la targeta sanitària al mòbil sense obrir un compte comercial.',
          tradeOffs: 'No dona accés a la història clínica ni a les cites de les Illes Balears.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'No hi ha cap política de privadesa específica de l’aplicació: la fitxa de l’App Store enllaça la política general del web de l’IB-Salut i hem fet servir la de la seu electrònica, que és la que descriu els tractaments d’EspaiSalut. El buscador de resolucions de l’AEPD no ens ha respost durant la consulta i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Per què l’etiqueta de l’App Store no declara cap dada de salut si l’aplicació mostra informes, al·lèrgies i medicació?',
          'Quins encarregats del tractament hi ha darrere de l’aplicació i on s’allotgen les dades?',
          'Hi ha cap resolució de l’AEPD contra l’IB-Salut relacionada amb els serveis digitals?',
        ],
      },
    },
    {
      slug: 'mi-salud-digital-clm',
      name: 'Mi Salud Digital CLM',
      company: 'sescam',
      categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
      tagline: 'Ensenya la carpeta de salut i la medicació, però declara a l’App Store que no recull cap dada',
      summary:
        'L’aplicació del Servei de Salut de Castella-la Manxa serveix per demanar, canviar o anul·lar cites, consultar la llista d’espera, buscar farmàcies de guàrdia i veure la carpeta de salut amb al·lèrgies, vacunes i medicació. Per a segons quins tràmits n’hi ha prou amb el codi d’identificació personal imprès a la targeta sanitària; per a d’altres cal DNI electrònic, certificat o Cl@ve. L’etiqueta de privadesa de l’App Store afirma que no es recull cap dada, una afirmació difícil de sostenir per a una aplicació que mostra la història clínica. La política de privadesa és la general del SESCAM, sense cap apartat propi per a l’app.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya (UE); servei públic de la comunitat autònoma de Castella-la Manxa',
      links: {
        website: 'https://sanidad.castillalamancha.es/',
        privacyPolicy: 'https://sanidad.castillalamancha.es/content/politica-de-privacidad',
        appStore: appStore('824742584'),
      },
      accountRequired: f('partial', 'official', ['mi-salud-digital-clm-app-store'], 'Buscar farmàcies no demana identificació; les cites i la carpeta de salut sí, amb el codi d’identificació personal de la targeta sanitària, el DNI electrònic, el certificat digital, Cl@ve o un usuari propi de Mi Salud Digital.'),
      openSource: f('no', 'official', ['mi-salud-digital-clm-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'regional',
        legalBasis: f('partial', 'official', ['mi-salud-digital-clm-privacy-policy'], 'La política invoca el compliment d’una obligació legal, la missió d’interès públic i l’exercici de poders públics, i concreta que les dades sanitàries es tracten pels fins de les lletres g), h) i i) de l’article 9.2 del Reglament (UE) 2016/679; com a norma sectorial només cita la Llei 8/2000 d’ordenació sanitària de Castella-la Manxa, sense article.', { norm: 'Article 9.2 g), h) i i) del RGPD; Llei 8/2000, d’ordenació sanitària de Castella-la Manxa' }),
        processingRegistry: f('yes', 'official', ['mi-salud-digital-clm-privacy-policy', 'mi-salud-digital-clm-rat'], 'La política enllaça un a un més de cinquanta tractaments del registre públic de Castella-la Manxa, entre els quals «Historia Clínica del SESCAM», que és el que sosté la carpeta de salut de l’aplicació.', { url: 'https://rat.castillalamancha.es/info/1154' }),
        dpia: unknown('No hem trobat publicada cap avaluació d’impacte relativa a la protecció de dades de l’aplicació ni de la carpeta de salut.'),
        ensConformity: f('partial', 'official', ['mi-salud-digital-clm-privacy-policy'], 'La política diu que les mesures de seguretat implantades es corresponen amb l’annex II del Reial decret 311/2022, però no publica cap declaració ni certificació de conformitat ni la categoria del sistema.'),
        dpo: f('yes', 'official', ['mi-salud-digital-clm-privacy-policy'], 'La política identifica el delegat de protecció de dades del SESCAM amb adreça electrònica i adreça postal al Comitè Tècnic de Seguretat de la Informació de la Secretaria General, a Toledo.', { contact: 'dpd@sescam.jccm.es' }),
        offlineAlternative: f('partial', 'official', ['mi-salud-digital-clm-cita-previa'], 'La pàgina oficial de cita prèvia només ofereix el web i l’aplicació com a canals per demanar cita; els telèfons dels centres hi apareixen al cercador de centres, però no s’hi declaren com a via per citar-se.'),
        accessibilityStatement: f('partial', 'official', ['mi-salud-digital-clm-accessibilitat'], 'La declaració d’accessibilitat a què remet el web sanitari és la del portal autonòmic, que es declara «parcialment conforme» amb el Reial decret 1112/2018 i acota l’abast a www.castillalamancha.es, sense esmentar cap aplicació mòbil.', { url: 'https://www.castillalamancha.es/accesibilidad' }),
        mandatoryRetention: f('yes', 'official', ['boe-llei-41-2002', 'mi-salud-digital-clm-privacy-policy'], 'L’aplicació dona accés a la història clínica del SESCAM, i l’article 17.1 de la Llei 41/2002 obliga a conservar la documentació clínica com a mínim cinc anys des de l’alta de cada procés assistencial: es pot esborrar l’usuari propi de Mi Salud Digital, però no l’expedient clínic.'),
      },
      dataSummary:
        'La carpeta de salut mostra al·lèrgies, vacunes, medicació dispensada i informes clínics: el conjunt dibuixa l’estat de salut d’una persona i el seu calendari de visites. Que el codi de la targeta sanitària serveixi per identificar-se fa que una dada impresa en una targeta física obri part d’aquesta informació.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mi-salud-digital-clm-privacy-policy'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['mi-salud-digital-clm-app-store'], note: 'Codi d’identificació personal de la targeta sanitària, DNI electrònic, certificat digital o Cl@ve.' }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['mi-salud-digital-clm-app-store'], note: 'Per rebre l’SMS de recordatori de la cita.' }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mi-salud-digital-clm-app-store', 'mi-salud-digital-clm-privacy-policy'], note: 'Al·lèrgies, vacunes, medicació i informes clínics de la carpeta de salut. L’etiqueta de l’App Store no declara cap dada.' }),
        row('historial-de-compres', 'no', { linked: 'no', tracking: 'no', shared: 'none', purposes: [], sources: ['mi-salud-digital-clm-app-store'], note: 'L’aplicació és gratuïta i no té compres ni subscripcions.' }),
        row('ubicacio-aproximada', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['mi-salud-digital-clm-app-store'], level: 'editorial', note: 'La cerca de farmàcies pròximes al domicili suggereix un ús de la ubicació, però l’etiqueta no en declara cap i no ho hem pogut confirmar.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['mi-salud-digital-clm-app-store'], 'L’etiqueta declara que no es recull cap dada, de manera que tampoc no n’hi ha cap per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['mi-salud-digital-clm-app-store'], 'L’etiqueta no declara cap identificador.'),
        thirdPartyTrackersPresent: unknown('No hem pogut comprovar quins components de tercers incorpora l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['mi-salud-digital-clm-privacy-policy'], 'La política del SESCAM no preveu cap tractament publicitari.'),
        profiling: unknown('La política no diu res sobre l’elaboració de perfils ni sobre decisions automatitzades.'),
        aiTraining: unknown('La política no parla de cap ús de les dades per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['mi-salud-digital-clm-privacy-policy'], 'La política diu que no se cedeixen dades a tercers llevat d’obligació legal o consentiment, però sí que hi accedeixen els prestadors de serveis que actuen com a encarregats del tractament.'),
        intraGroupSharing: na('El SESCAM és un organisme públic autonòmic sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['mi-salud-digital-clm-privacy-policy'], 'La política descarta qualsevol cessió que no vingui d’una obligació legal o del consentiment de la persona interessada.'),
        internationalTransfers: unknown('La política no esmenta les transferències internacionals de dades.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['mi-salud-digital-clm-privacy-policy'], 'La política remet els terminis a la fitxa de cada tractament publicada al web; el resum general no en concreta cap.'),
        dataAfterDeletion: unknown('La política no explica què es conserva quan es deixa de fer servir el servei.'),
      },
      accountDeletion: {
        possible: f('partial', 'official', ['mi-salud-digital-clm-app-store', 'mi-salud-digital-clm-privacy-policy'], 'Es pot demanar la supressió de l’usuari propi de Mi Salud Digital com a exercici del dret de supressió, però la història clínica i la targeta sanitària es conserven per obligació legal.'),
        selfService: unknown('No hem pogut comprovar si l’aplicació permet donar de baixa l’usuari de Mi Salud Digital sense passar pel procediment administratiu.'),
        difficulty: 'unknown',
        steps: [
          'Desinstal·la l’aplicació si només vols deixar de fer-la servir: la identificació amb la targeta sanitària no crea cap compte comercial.',
          'Per exercir els drets d’accés, rectificació, supressió, limitació o oposició, escriu a datospersonales@sescam.jccm.es o al delegat de protecció de dades (dpd@sescam.jccm.es).',
          'Recorda que la història clínica no es pot esborrar: la conserva el servei públic de salut per obligació legal.',
        ],
        obstacles: 'No hi ha cap pàgina d’ajuda que expliqui com donar de baixa l’usuari de Mi Salud Digital; tot passa pel canal de protecció de dades.',
        dataRetained: 'La història clínica i les dades de la targeta sanitària.',
        sources: ['mi-salud-digital-clm-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política enumera els drets d’accés, rectificació, supressió, limitació i oposició, però no esmenta la portabilitat ni cap eina de descàrrega.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['mi-salud-digital-clm-privacy-policy'], 'Per correu electrònic a datospersonales@sescam.jccm.es o al delegat de protecció de dades, amb adreça postal a Toledo.', { url: 'mailto:dpd@sescam.jccm.es' }),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat al servei.'),
        telemetryOptOut: unknown('L’etiqueta no declara dades de diagnòstic i no hem trobat cap ajust de telemetria.'),
        granularControls: f('partial', 'official', ['mi-salud-digital-clm-app-store'], 'Es pot triar si es vol rebre un SMS de recordatori i si la cita s’afegeix al calendari; la resta de dades depenen del nivell d’identificació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('No hi ha comunicacions entre persones usuàries que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('La política no concreta les mesures tècniques del canal.'),
        atRestEncryption: unknown('La política no concreta el xifratge en repòs.'),
        mfa: f('partial', 'official', ['mi-salud-digital-clm-app-store'], 'Per a alguns tràmits n’hi ha prou amb el codi imprès a la targeta sanitària; per als més sensibles cal DNI electrònic, certificat digital o Cl@ve.'),
        independentAudits: unknown('No hem trobat cap auditoria publicada.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini sanidad.castillalamancha.es no serveix cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'salud-responde',
          comparability: 'partial',
          rationale: 'També és una aplicació pública autonòmica per gestionar cites i consultar dades sanitàries, en aquest cas a Andalusia.',
          tradeOffs: 'Només serveix per a qui té targeta sanitària andalusa.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política enllaçada des de l’App Store és la general del SESCAM, que cobreix el web i l’aplicació però remet el detall de cada tractament a fitxes separades que no hem revisat una per una. La contradicció principal és que l’etiqueta declari que no es recull cap dada quan l’aplicació mostra la carpeta de salut. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Per què l’etiqueta de l’App Store diu que no es recull cap dada?',
          'Quin nivell d’identificació cal per veure la carpeta de salut i què es pot fer només amb el codi imprès a la targeta?',
          'Es pot donar de baixa l’usuari de Mi Salud Digital des de l’aplicació?',
        ],
      },
    },
    {
      slug: 'sergas-mobil',
      name: 'Sergas Móbil',
      company: 'sergas',
      categories: ['salut-i-assistencia-sanitaria', 'administracio-publica'],
      tagline: 'Una aplicació pública de salut que demana permís de rastreig a iOS per fer estadístiques de navegació',
      summary:
        'Sergas Móbil és el punt d’entrada als serveis electrònics del Servizo Galego de Saúde: targeta sanitària virtual, cites, videoconsulta, torn d’espera al centre i trucada al 061 amb coordenades GPS. La política de privadesa és de les més detallades que hem llegit en una aplicació pública espanyola: enumera els permisos de cada sistema operatiu, els nivells d’identificació i les garanties aplicades, i diu que s’ha fet una avaluació d’impacte. Alhora, és de les poques aplicacions públiques que declaren a l’App Store dades usades per rastrejar-te, perquè a iOS demana el permís de rastreig per generar estadístiques d’hàbits de navegació.',
      platforms: ['ios', 'android'],
      businessModel: 'public-service',
      jurisdiction: 'Espanya (UE); servei públic de la comunitat autònoma de Galícia',
      userBase: 'Més de 1.600 valoracions a l’App Store espanyol, amb una nota mitjana d’1,9 sobre 5.',
      links: {
        website: 'https://www.sergas.gal/A-nosa-organizacion/Aplicacion-mobil-Sergas-Mobil',
        privacyPolicy: 'https://www.sergas.gal/A-nosa-organizacion/Sergas-Mobil-politica-de-privacidade',
        appStore: appStore('1154478913'),
      },
      accountRequired: f('yes', 'official', ['sergas-mobil-privacy-policy'], 'Cal registrar-s’hi amb un dels tres nivells d’identificació: el codi CIP de la targeta sanitària, un codi numèric enviat per SMS o Chave365 o certificat digital.'),
      openSource: f('no', 'official', ['sergas-mobil-app-store'], undefined, { licence: 'Privativa' }),
      publicService: {
        isPublicService: true,
        administrationLevel: 'regional',
        legalBasis: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'La política invoca la missió d’interès públic i cita la Llei 8/2008 de salut de Galícia com a norma sectorial, però sense concretar-ne cap article ni lligar cada funcionalitat a una base jurídica.', { norm: 'Llei 8/2008, do 10 de xullo, de saúde de Galicia (citada sense article)' }),
        processingRegistry: f('partial', 'official', ['sergas-mobil-rexistro-actividades', 'sergas-mobil-privacy-policy'], 'La Xunta publica el registre d’activitats de tractament per conselleries i la de Sanidade hi té una entrada, però el document no desglossa cap activitat identificable com a Sergas Móbil; la política de l’aplicació no hi enllaça directament.', { url: 'https://www.xunta.gal/rexistro-de-actividades' }),
        dpia: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'La política declara que el compliment del principi de responsabilitat proactiva s’ha documentat en una avaluació d’impacte relativa a la protecció de dades, que s’actualitzarà a mesura que evolucioni el sistema, però no en publica el document ni cap resum.'),
        ensConformity: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'La política diu que als tractaments s’hi apliquen les mesures que corresponguin segons l’Esquema Nacional de Seguretat, però encara el cita pel Reial decret 3/2010, derogat pel Reial decret 311/2022, i no publica cap declaració de conformitat ni la categoria del sistema.'),
        dpo: f('partial', 'official', ['sergas-mobil-privacy-policy', 'sergas-mobil-delegados-proteccion-datos'], 'La política remet al directori de delegats de protecció de dades de la Xunta, que confirma que n’hi ha un per conselleria però només n’ofereix un formulari de contacte, sense adreça electrònica ni postal publicades.', { contact: 'https://www.xunta.gal/delegados-de-proteccion-de-datos' }),
        offlineAlternative: unknown('No hem pogut llegir cap pàgina oficial del Sergas que enumeri els canals no digitals per demanar cita o fer els tràmits que ofereix l’aplicació: les pàgines de cita prèvia i d’accessibilitat de sergas.gal es generen amb JavaScript i no n’hem obtingut el contingut.'),
        accessibilityStatement: unknown('La pàgina d’accessibilitat de sergas.gal no ens ha retornat cap text: no hem pogut comprovar si hi ha declaració conforme al Reial decret 1112/2018 ni si cobreix l’aplicació.'),
        mandatoryRetention: f('yes', 'official', ['boe-llei-41-2002', 'sergas-mobil-privacy-policy'], 'L’aplicació dona accés a la carpeta de salut del pacient, i l’article 17.1 de la Llei 41/2002 obliga a conservar la documentació clínica com a mínim cinc anys des de l’alta de cada procés assistencial: la supressió que es demana per la seu electrònica de la Xunta pot afectar el compte de l’aplicació, però no l’expedient clínic.'),
      },
      dataSummary:
        'Les dades diuen qui és la persona, quines cites té, quines videoconsultes fa i on és quan truca al 061 o quan arriba al centre sanitari. L’ús del Bluetooth i de la Wi-Fi per guiar per dins dels hospitals hi afegeix un rastre de moviment dins de l’edifici.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sergas-mobil-privacy-policy'], note: 'Nom, cognoms, data de naixement i lloc de residència, per confirmar la identitat.' }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['sergas-mobil-privacy-policy'], note: 'DNI o NIE, codi CIP de la targeta sanitària i número de la Seguretat Social.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sergas-mobil-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['sergas-mobil-privacy-policy', 'sergas-mobil-app-store'], note: 'Per enviar les notificacions per SMS i per al nivell mitjà d’identificació.' }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['sergas-mobil-privacy-policy'], note: 'Dades de les cites, de les videoconsultes, de la carpeta de salut i de l’eina de teleassistència. L’etiqueta de l’App Store no declara dades de salut.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sergas-mobil-privacy-policy', 'sergas-mobil-app-store'], note: 'Per obtenir el torn quan s’arriba al centre, per la realitat augmentada dins dels edificis i per enviar la ubicació al servei d’emergències quan es truca al 061.' }),
        row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['sergas-mobil-app-store', 'sergas-mobil-privacy-policy'], note: 'També per localitzar centres, farmàcies i desfibril·ladors propers.' }),
        row('fotografies-i-videos', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sergas-mobil-app-store', 'sergas-mobil-privacy-policy'], note: 'Accés a la galeria per associar fotos als pacients i per pujar o descarregar documents.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sergas-mobil-privacy-policy'], note: 'Micròfon i càmera per a les videoconsultes amb el metge.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'investigacio-i-estadistica'], sources: ['sergas-mobil-app-store', 'sergas-mobil-privacy-policy'], note: 'L’etiqueta declara la interacció amb el producte i altres dades d’ús com a dades usades per rastrejar; la política diu que a iOS es demana el permís de rastreig per generar estadístiques d’hàbits de navegació.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['sergas-mobil-app-store'], note: 'Les dades d’errors també consten entre les dades usades per rastrejar.' }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['sergas-mobil-privacy-policy'], note: 'Estat de la Wi-Fi i Bluetooth, per localitzar la persona dins dels centres i guiar-la.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['sergas-mobil-app-store', 'sergas-mobil-privacy-policy'], 'L’etiqueta declara dades d’ús i d’errors com a dades usades per rastrejar-te, i la política admet que a iOS es demana el permís de rastreig per generar estadístiques de navegació.'),
        advertisingIdentifiers: unknown('La política no diu quin identificador es fa servir per a aquestes estadístiques ni si s’hi llegeix l’identificador publicitari del dispositiu.'),
        thirdPartyTrackersPresent: unknown('La política no identifica cap eina d’analítica concreta ni cap encarregat del tractament.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['sergas-mobil-privacy-policy'], 'La política només preveu el tractament necessari per al funcionament de l’aplicació i per a estadístiques; no hi ha publicitat.'),
        profiling: f('no', 'official', ['sergas-mobil-privacy-policy'], 'La política reconeix el dret a no ser objecte de decisions automatitzades i no descriu cap elaboració de perfils.'),
        aiTraining: unknown('La política no parla d’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['sergas-mobil-privacy-policy'], 'La política diu que no estan previstes comunicacions ni cessions de dades, tret de la ubicació que s’envia al servei d’emergències quan es truca al 061.'),
        intraGroupSharing: na('El Sergas és un servei públic autonòmic sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['sergas-mobil-privacy-policy'], 'No hi ha cap cessió prevista, i menys encara amb finalitat comercial.'),
        internationalTransfers: unknown('La política no esmenta transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['sergas-mobil-privacy-policy'], 'La política diu que les dades es conserven «el temps necessari per a cada funcionalitat» i després se suprimeixen, s’anonimitzen o es bloquegen, sense cap termini concret.'),
        dataAfterDeletion: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'Preveu la conversió en anònim o el bloqueig de les dades segons la normativa vigent, sense concretar què queda ni durant quant de temps.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['sergas-mobil-privacy-policy'], 'El dret de supressió s’exerceix pel procediment PR004A de la seu electrònica de la Xunta; la política subratlla que desinstal·lar l’aplicació no comporta cap conseqüència negativa.'),
        selfService: f('no', 'official', ['sergas-mobil-privacy-policy'], 'La supressió es tramita per la seu electrònica de la Xunta, no des de l’aplicació.'),
        directUrl: 'https://www.xunta.gal/exercicio-de-dereitos',
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Desactiva des de l’aplicació les funcionalitats que no vulguis: la política diu que es poden activar i desactivar per separat.',
          'Desinstal·la l’aplicació del telèfon.',
          'Per suprimir les dades, presenta el procediment PR004A a la seu electrònica de la Xunta de Galicia o en qualsevol registre administratiu.',
          'La història clínica i les dades assistencials continuaran al sistema sanitari públic: no es poden esborrar.',
        ],
        obstacles: 'Cal passar per un procediment administratiu amb identificació electrònica; no hi ha cap botó de baixa dins de l’app.',
        dataRetained: 'Les dades de la història clínica i de l’activitat assistencial, que gestiona el Sergas al marge de l’aplicació.',
        sources: ['sergas-mobil-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'La política reconeix la portabilitat en format estructurat i de lectura mecànica, però només per sol·licitud administrativa.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['sergas-mobil-privacy-policy'], 'Pel procediment PR004A de la seu electrònica de la Xunta o pels registres administratius, amb el contacte del delegat de protecció de dades publicat.', { url: 'https://www.xunta.gal/exercicio-de-dereitos' }),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat al servei.'),
        telemetryOptOut: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'A iOS el permís de rastreig es pot denegar des del sistema, i la política explica com revocar cada permís, tot i advertir que pot afectar el funcionament.'),
        granularControls: f('yes', 'official', ['sergas-mobil-privacy-policy'], 'Cada funcionalitat es pot activar i desactivar de manera independent, i la política detalla com revocar els permisos a Android i a iOS.'),
        defaultPosture: 'mixed',
        darkPatterns: f('no', 'editorial', ['sergas-mobil-privacy-policy'], 'La política recomana triar l’opció «només quan l’aplicació està en ús» per als permisos i insisteix que no fer servir l’app no té cap conseqüència negativa. No hem revisat les pantalles reals de consentiment.'),
      },
      security: {
        e2ee: unknown('La política parla de xifratge de dades personals i de pseudònims, però no diu si les videoconsultes van xifrades d’extrem a extrem.'),
        transportEncryption: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'La política diu que s’apliquen mesures de xifratge i les de l’Esquema Nacional de Seguretat, sense concretar el protocol de transport.'),
        atRestEncryption: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'Esmenta el xifratge de dades personals i l’ús de pseudònims entre les mesures aplicades, sense més detall.'),
        mfa: f('yes', 'official', ['sergas-mobil-privacy-policy'], 'Hi ha tres nivells d’identificació; el més alt es fa amb Chave365 o amb certificat digital, i l’app llegeix el DNI electrònic per NFC.', { methods: ['sms'] }),
        independentAudits: f('partial', 'official', ['sergas-mobil-privacy-policy'], 'La política diu que s’ha documentat una avaluació d’impacte en protecció de dades i que s’apliquen les mesures de l’Esquema Nacional de Seguretat, però no publica ni l’avaluació ni cap auditoria.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini sergas.gal no ens ha servit cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'salud-andalucia',
          comparability: 'partial',
          rationale: 'És l’equivalent andalús: cites, targeta sanitària i dades clíniques del servei públic de salut.',
          tradeOffs: 'Només funciona per a qui té targeta sanitària andalusa.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política de l’aplicació és en gallec i la classifiquem amb l’idioma «other», perquè la taxonomia de fonts no el preveu. El punt més destacable és la coincidència entre el permís de rastreig que la política admet demanar a iOS i les dades que l’etiqueta declara com a usades per rastrejar: cap altra aplicació pública del lot ho fa. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Quina eina d’analítica hi ha darrere de les «estadístiques d’hàbits de navegació» i amb quin identificador funciona?',
          'Les videoconsultes van xifrades d’extrem a extrem?',
          'Es publicarà l’avaluació d’impacte en protecció de dades que esmenta la política?',
        ],
      },
    },
    {
      slug: 'hm-hospitales',
      name: 'HM Hospitales',
      company: 'hm-hospitales',
      categories: ['salut-i-assistencia-sanitaria'],
      tagline: 'El portal del pacient comparteix la història clínica amb una vintena de societats del grup per interès legítim',
      summary:
        'L’aplicació d’HM Hospitales és el portal del pacient del grup: cites, història clínica i gestió de familiars associats. L’etiqueta de l’App Store és, de les del lot, la que declara les dades més sensibles: salut, ubicació exacta, adreça postal, correu, nom i telèfon, tots vinculats a la identitat. La política de privadesa és del grup sencer i llista una vintena de societats que comparteixen les dades dels pacients «per interès legítim, per mantenir una gestió integral i centralitzada». També hi consta que el grup fa servir eines d’intel·ligència artificial com a suport al diagnòstic, amb la decisió mèdica final sempre en mans del facultatiu.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya (UE)',
      links: {
        website: 'https://www.hmhospitales.com/',
        privacyPolicy: 'https://www.hmhospitales.com/politica-de-privacidad/',
        appStore: appStore('1260901154'),
      },
      accountRequired: f('yes', 'official', ['hm-hospitales-app-store', 'hm-hospitales-privacy-policy'], 'Cal registrar-se com a Usuari HM per accedir a les cites i a la història clínica.'),
      openSource: f('no', 'official', ['hm-hospitales-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El conjunt uneix la identitat, el contacte, la ubicació i la història clínica sencera d’una persona i dels familiars que hi associï. La política hi afegeix un perfil sanitari per enviar informació assistencial i, amb consentiment, un perfil comercial per oferir serveis del grup.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compartir-dins-del-grup'], sources: ['hm-hospitales-app-store', 'hm-hospitales-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['hm-hospitales-app-store', 'hm-hospitales-privacy-policy'], note: 'També per als recordatoris de cita i, amb consentiment, per a la informació comercial.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['hm-hospitales-app-store', 'hm-hospitales-privacy-policy'], note: 'La política preveu recordatoris per SMS i per missatgeria instantània.' }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hm-hospitales-app-store'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal', 'compartir-dins-del-grup'], sources: ['hm-hospitales-app-store', 'hm-hospitales-privacy-policy'], note: 'Història clínica completa: alta, seguiment i evolució. L’etiqueta la declara com a dada de salut vinculada a la identitat.' }),
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hm-hospitales-app-store'], note: 'L’etiqueta la declara per a la funcionalitat de l’app; la política no explica per a què.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['hm-hospitales-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['hm-hospitales-app-store'] }),
        row('interessos-inferits', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['hm-hospitales-privacy-policy'], note: 'La política preveu elaborar un perfil sanitari per a les comunicacions assistencials i, amb consentiment, un perfil comercial per enviar informació de productes i serveis del grup.' }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'millora-del-producte'], sources: ['hm-hospitales-privacy-policy'], note: 'La política avisa que les trucades telefòniques es poden gravar per millorar la qualitat.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['hm-hospitales-app-store'], 'L’etiqueta de l’App Store no declara cap dada usada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['hm-hospitales-app-store'], 'L’etiqueta no declara cap identificador de dispositiu ni publicitari.'),
        thirdPartyTrackersPresent: unknown('La política no identifica cap eina d’analítica dins de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['hm-hospitales-privacy-policy'], 'La política preveu enviar informació comercial personalitzada, amb un perfil elaborat a partir de les dades facilitades, però sempre amb consentiment i limitada als serveis del grup i del sector sanitari.'),
        profiling: f('yes', 'official', ['hm-hospitales-privacy-policy'], 'Elabora un perfil sanitari per als recordatoris i la informació assistencial i, amb consentiment, un perfil comercial. Afirma que no pren decisions exclusivament automatitzades.'),
        aiTraining: f('partial', 'official', ['hm-hospitales-privacy-policy'], 'La política diu que el grup fa servir eines d’intel·ligència artificial com a suport al diagnòstic i per optimitzar processos, amb base en l’execució del contracte i l’interès legítim, però no diu si les dades dels pacients serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['hm-hospitales-privacy-policy'], 'Companyies asseguradores, laboratoris i serveis mèdics externs, ambulàncies, proveïdors de material sanitari, empreses de formació i administracions públiques.'),
        intraGroupSharing: f('yes', 'official', ['hm-hospitales-privacy-policy'], 'La política llista prop de trenta societats del grup i diu que les dades es comparteixen «per interès legítim, per mantenir una gestió integral i centralitzada».'),
        dataBrokerSales: unknown('La política no diu explícitament que no vengui dades personals.'),
        internationalTransfers: f('partial', 'official', ['hm-hospitales-privacy-policy'], 'Només les preveu quan l’entitat asseguradora és fora de l’Espai Econòmic Europeu, i diu que es fan «amb garanties adequades» sense concretar el mecanisme.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['hm-hospitales-privacy-policy'], 'La política dona una taula de terminis per finalitat, però gairebé tots remeten a «mentre no prescriguin les possibles accions legals». Només concreta un any per a les candidatures d’ocupació i un mes per a la videovigilància.'),
        dataAfterDeletion: unknown('La política no explica què es conserva després d’exercir el dret de supressió.'),
        periods: [
          { dataType: 'fotografies-i-videos', period: 'Un mes per a les imatges de videovigilància, tret que calgui conservar-les per acreditar fets', sources: ['hm-hospitales-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['hm-hospitales-privacy-policy'], 'Es pot exercir el dret de supressió, però la història clínica es conserva per obligació legal sanitària.'),
        selfService: f('no', 'official', ['hm-hospitales-privacy-policy'], 'Cal descarregar un formulari i enviar-lo per correu postal o electrònic, o bé anar a l’Atenció al Pacient d’un centre.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Descarrega el formulari de sol·licitud d’exercici de drets que enllaça la política de privadesa.',
          'Envia’l a HM Hospitales 1989, S.A., Plaza del Conde del Valle de Suchil 2, 28015 Madrid, o al correu de protecció de dades que hi consta.',
          'També es pot presentar presencialment a l’Atenció al Pacient de qualsevol centre del grup.',
          'Si hi ha dubtes sobre la identitat, el grup pot demanar documentació addicional.',
        ],
        obstacles: 'No hi ha cap opció de baixa dins de l’aplicació ni del portal: tot passa per un formulari en paper o per correu, i la història clínica no es pot esborrar.',
        dataRetained: 'La història clínica i la documentació assistencial, durant els terminis que fixa la normativa sanitària.',
        sources: ['hm-hospitales-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['hm-hospitales-privacy-policy'], 'Reconeix la portabilitat en format estructurat i de lectura mecànica, però només per als tractaments automatitzats basats en el consentiment o el contracte i sempre per sol·licitud.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['hm-hospitales-privacy-policy'], 'Amb formulari descarregable, per correu postal o electrònic, o presencialment a l’Atenció al Pacient.', { url: 'https://www.hmhospitales.com/politica-de-privacidad/' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['hm-hospitales-privacy-policy'], 'La informació comercial i el butlletí es basen en el consentiment, que es pot retirar en qualsevol moment, i es pot exercir el dret d’oposició a la mercadotecnia directa i a l’elaboració de perfils.'),
        telemetryOptOut: unknown('L’etiqueta no declara dades de diagnòstic i la política no parla de telemetria de l’aplicació.'),
        granularControls: unknown('No hem pogut comprovar quins controls ofereix el portal del pacient.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar els fluxos de registre i de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: unknown('La política no parla de xifratge d’extrem a extrem.'),
        transportEncryption: unknown('La política només parla de mesures tècniques i organitzatives en termes generals.'),
        atRestEncryption: unknown('La política no concreta el xifratge en repòs.'),
        mfa: unknown('No hem pogut comprovar si el portal del pacient admet la verificació en dos passos.'),
        independentAudits: unknown('La política esmenta auditors de comptes com a destinataris, però no cap auditoria de seguretat o de protecció de dades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini hmhospitales.com no serveix cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'quironsalud',
          comparability: 'equivalent',
          rationale: 'És el portal del pacient d’un altre grup hospitalari privat espanyol, amb cites i informes clínics.',
          tradeOffs: 'Només serveix si et tractes en un centre d’aquell grup, i el grup també és gran i centralitza dades.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política de privadesa és del grup sencer i no distingeix el tractament de l’aplicació del de la resta de canals; hem atribuït a l’app el que descriu per a l’Usuari HM i el portal del pacient. L’etiqueta de l’App Store declara ubicació exacta i aproximada que la política no justifica enlloc. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Per a què demana l’aplicació la ubicació exacta?',
          'Les dades dels pacients s’han fet servir mai per entrenar les eines d’intel·ligència artificial de suport al diagnòstic?',
          'Hi ha cap manera d’eliminar el compte d’Usuari HM sense presentar el formulari en paper?',
        ],
      },
    },
    {
      slug: 'imed-hospitales',
      name: 'IMED Hospitales',
      company: 'hospimar-2000',
      categories: ['salut-i-assistencia-sanitaria'],
      tagline: 'La política admet cedir dades a les empreses del grup «amb la finalitat d’elaborar perfils» amb procediments automatitzats',
      summary:
        'L’aplicació d’IMED Hospitales és el portal del pacient d’un grup hospitalari del País Valencià i Múrcia: cites, gestió del compte i consultes. L’etiqueta de l’App Store declara nom, correu, telèfon, identificador d’usuari i interacció, i és notable que el nom aparegui també sota «analítica» i «personalització del producte». La política ho explica: el grup gestiona les dades dels pacients de manera centralitzada i les cedeix a les empreses del grup per elaborar perfils amb procediments automatitzats d’anàlisi, per oferir informació comercial i plans de salut personalitzats. La història clínica es conserva com a mínim cinc anys des de l’alta de cada procés assistencial.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'commerce',
      jurisdiction: 'Espanya (UE)',
      links: {
        website: 'https://www.imedhospitales.com/',
        privacyPolicy: 'https://www.imedhospitales.com/es/pagina/politica-privacidad-imed-pacientes/',
        appStore: appStore('920775562'),
      },
      accountRequired: f('yes', 'official', ['imed-hospitales-privacy-policy', 'imed-hospitales-app-store'], 'Cal registrar-se al Portal del Pacient per gestionar cites i consultes.'),
      openSource: f('no', 'official', ['imed-hospitales-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les dades van des de la identitat i el contacte fins a la història clínica, passant per dades socioeconòmiques i d’assegurances i per les preferències de serveis. El que les fa singulars és que la política preveu creuar-les entre les empreses del grup per anticipar necessitats i oferir serveis.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['imed-hospitales-app-store', 'imed-hospitales-privacy-policy'], note: 'L’etiqueta declara el nom també per a analítica i per a personalització del producte.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['imed-hospitales-app-store', 'imed-hospitales-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['imed-hospitales-app-store', 'imed-hospitales-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['imed-hospitales-privacy-policy'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['imed-hospitales-privacy-policy'], note: 'La política inclou el document d’identitat entre les dades identificatives tractades.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['imed-hospitales-app-store'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal', 'investigacio-i-estadistica'], sources: ['imed-hospitales-privacy-policy'], note: 'Dades de salut, genètiques i biomètriques integrades a la història clínica. L’etiqueta de l’App Store no declara cap dada de salut.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['imed-hospitales-privacy-policy'], note: 'Dades econòmiques, financeres i d’assegurances, compartides amb entitats de cobraments i pagaments i amb l’asseguradora.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada', 'compartir-dins-del-grup'], sources: ['imed-hospitales-privacy-policy'], note: 'La política parla de «dades de preferències» i d’anàlisi dels interessos i necessitats del pacient amb procediments automatitzats.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['imed-hospitales-app-store', 'imed-hospitales-privacy-policy'] }),
        row('veu-i-audio', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['atencio-a-lusuari', 'millora-del-producte'], sources: ['imed-hospitales-privacy-policy'], note: 'Les trucades al centre d’atenció telefònica es poden gravar per control de qualitat, formació i resolució d’incidències.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['imed-hospitales-app-store'], note: 'Dades d’errors i altres dades de diagnòstic, no vinculades a la identitat.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['imed-hospitales-app-store'], 'L’etiqueta de l’App Store no declara cap dada usada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['imed-hospitales-app-store'], 'L’etiqueta no declara cap identificador de dispositiu ni publicitari.'),
        thirdPartyTrackersPresent: unknown('El web del grup carrega Google Tag Manager, però no hem pogut comprovar quins components incorpora l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'La política preveu enviar publicitat de productes i serveis propis, per interès legítim quan la persona es registra al Portal del Pacient i amb consentiment en la resta de casos i per a la publicitat de tercers.'),
        profiling: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'Cedeix dades a les empreses del grup «amb la finalitat d’elaborar perfils» i fa servir procediments automatitzats d’anàlisi per reconèixer els interessos i les necessitats del pacient.'),
        aiTraining: unknown('La política no parla d’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'Asseguradores, laboratoris i serveis mèdics externs, entitats de cobraments i pagaments, centres assistencials triats pel pacient i administracions públiques.'),
        intraGroupSharing: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'Cessió a les empreses del grup per al disseny i la millora del model assistencial, per a la investigació científica i per elaborar perfils.'),
        dataBrokerSales: unknown('La política no diu explícitament que no vengui dades personals.'),
        internationalTransfers: unknown('La política no esmenta transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'La història clínica es conserva com a mínim cinc anys des de l’alta de cada procés assistencial, o més si ho exigeix la normativa autonòmica; després es bloqueja fins que prescriguin les accions possibles.'),
        dataAfterDeletion: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'Un cop suprimides, les dades queden bloquejades i només són accessibles per a jutges, el ministeri fiscal o les administracions competents durant el termini de prescripció.'),
        periods: [
          { dataType: 'dades-de-salut', period: 'Mínim cinc anys des de l’alta de cada procés assistencial', sources: ['imed-hospitales-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['imed-hospitales-privacy-policy'], 'Es pot exercir el dret de supressió, però la història clínica es conserva cinc anys com a mínim i després queda bloquejada.'),
        selfService: f('partial', 'official', ['imed-hospitales-privacy-policy'], 'La política diu que qui té compte al Portal del Pacient pot exercir els drets «de forma personal», sense sol·licitud; qui no en té ha d’enviar un formulari amb còpia del DNI.'),
        difficulty: 'medium',
        steps: [
          'Si tens compte al Portal del Pacient, entra-hi i gestiona-hi les teves dades: la política diu que els drets s’hi poden exercir directament.',
          'Si no en tens, omple el formulari d’exercici de drets del web i adjunta-hi una còpia del DNI o d’una identificació vàlida.',
          'Envia la sol·licitud per un mitjà que permeti acreditar-ne l’enviament i la recepció, o escriu al delegat de protecció de dades.',
          'La història clínica continuarà al grup: només es bloquejarà quan passin els terminis legals.',
        ],
        obstacles: 'Si no es té compte, cal enviar una còpia del document d’identitat. La política no explica què vol dir exactament exercir els drets «de forma personal» des del portal.',
        dataRetained: 'La història clínica i la documentació assistencial, com a mínim cinc anys, i després bloquejades.',
        sources: ['imed-hospitales-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'La política reconeix el dret a rebre les dades en format electrònic i a transmetre-les on es vulgui.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'Des del Portal del Pacient o amb formulari i còpia del DNI, amb el delegat de protecció de dades com a contacte.', { url: 'mailto:delegadoprotecciondatos@imedhospitales.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['imed-hospitales-privacy-policy'], 'Es pot oposar en qualsevol moment a rebre comunicacions per mitjans electrònics i retirar els consentiments donats.'),
        telemetryOptOut: unknown('La política no parla de telemetria de l’aplicació.'),
        granularControls: unknown('No hem pogut comprovar quins controls ofereix el Portal del Pacient.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut revisar els fluxos de registre i de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: unknown('La política no parla de xifratge d’extrem a extrem.'),
        transportEncryption: unknown('La política no concreta les mesures tècniques.'),
        atRestEncryption: unknown('La política no concreta el xifratge en repòs.'),
        mfa: unknown('No hem pogut comprovar si el Portal del Pacient admet la verificació en dos passos.'),
        independentAudits: unknown('No hem trobat cap auditoria publicada.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini imedhospitales.com no serveix cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'vithas',
          comparability: 'equivalent',
          rationale: 'És el portal del pacient d’un altre grup hospitalari privat espanyol, amb les mateixes funcions de cites i informes.',
          tradeOffs: 'Només serveix si et tractes en un centre d’aquell grup.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és del grup i cobreix web, portal del pacient i aplicació sense distingir-los; hem atribuït a l’app el que descriu per al Portal del Pacient i el servei de cites en línia. La frase sobre la cessió al grup «amb la finalitat d’elaborar perfils» és literal de la política. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Quines empreses formen exactament el grup a efectes de la cessió per elaborar perfils?',
          'Què es pot fer des del Portal del Pacient quan la política diu que els drets s’hi exerceixen «de forma personal»?',
          'L’aplicació incorpora algun component d’analítica de tercers?',
        ],
      },
    },
    {
      slug: 'activa-dkv',
      name: 'Activa DKV',
      company: 'dkv-seguros',
      categories: ['salut-i-assistencia-sanitaria', 'banca-i-finances'],
      tagline: 'Una asseguradora que tracta dades mèdiques i declara la interacció amb l’app com a dada per rastrejar-te',
      summary:
        'Activa DKV és l’aplicació amb què els clients de l’asseguradora gestionen la pòlissa de salut: autoritzacions, reemborsaments, quadre mèdic i, si tenen l’app QC+, teleconsulta, biografia de salut i recepta electrònica. La política reconeix que tracta dades d’identificació, contacte, localització, imatge, veu —incloses les de les videotrucades— i dades mèdiques, i que les fa servir també per a mercadotecnia directa i per segmentar perfils, amb base en l’interès legítim. L’etiqueta de l’App Store declara la interacció amb el producte com a dada usada per rastrejar-te. El compte només es pot cancel·lar escrivint al delegat de protecció de dades del grup.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya (UE)',
      links: {
        website: 'https://dkv.es/gestiones',
        privacyPolicy: 'https://dkv.es/aviso-legal/politica-de-privacidad-dkv-activa',
        terms: 'https://dkv.es/aviso-legal/politica-de-privacidad-dkv-activa',
        appStore: appStore('6443825826'),
      },
      accountRequired: f('yes', 'official', ['activa-dkv-privacy-policy'], 'Cal descarregar l’aplicació, registrar-s’hi, ser major d’edat i confirmar el registre amb un enllaç enviat per correu.'),
      openSource: f('no', 'official', ['activa-dkv-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El conjunt uneix la pòlissa i els pagaments amb símptomes descrits, fotografies i vídeos de lesions, informes, resultats de proves, activitat física i l’historial de consultes. La política diu que el contingut dels xats es guarda xifrat i per temps indefinit tret que es demani esborrar-lo.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['activa-dkv-app-store', 'activa-dkv-privacy-policy'], note: 'També per a les comunicacions comercials de DKV i d’altres companyies del grup.' }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-app-store', 'activa-dkv-privacy-policy'] }),
        row('adreca-postal', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-app-store'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['activa-dkv-privacy-policy'], note: 'Símptomes, informes mèdics, resultats de proves, activitat física i receptes electròniques. L’etiqueta de l’App Store no declara cap dada de salut.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-app-store', 'activa-dkv-privacy-policy'], note: 'Fotografies i vídeos que s’envien als professionals sanitaris per descriure símptomes.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-privacy-policy'], note: 'Imatge i veu recollides a les videoconferències i trucades. La política diu que no se’n registra el contingut, només data, hora i especialitat.' }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['activa-dkv-privacy-policy'], note: 'Els xats de consulta es conserven xifrats, accessibles per a la persona usuària i el professional, per temps indefinit tret que se’n demani el esborrat.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-app-store'], note: 'L’etiqueta la declara sense vincular; la cerca del quadre mèdic i de l’oficina més propera en justificaria l’ús.' }),
        row('ubicacio-aproximada', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-app-store'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-privacy-policy'], note: 'Mètodes de pagament, condicions particulars i gestió de reemborsaments.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['activa-dkv-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['activa-dkv-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['mesura-i-analisi-dus', 'elaboracio-de-perfils'], sources: ['activa-dkv-app-store', 'activa-dkv-privacy-policy'], note: 'L’etiqueta declara la interacció amb el producte com a dada usada per rastrejar, i la política preveu «segmentació i anàlisi de perfils en base a l’ús i altres variables».' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['activa-dkv-app-store'], note: 'Dades d’errors i de rendiment, no vinculades a la identitat.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['activa-dkv-app-store'], 'L’etiqueta declara la interacció amb el producte com a dada que es pot fer servir per rastrejar-te en apps i webs d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta declara l’identificador del dispositiu per a la funcionalitat de l’app, però no diu si es fa servir l’identificador publicitari.'),
        thirdPartyTrackersPresent: unknown('La política no identifica cap component d’analítica dins de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['activa-dkv-privacy-policy'], 'La política preveu tractar les dades «amb fins de mercadotecnia directa» per informar de productes i serveis propis i de tercers relacionats, amb base en l’interès legítim.'),
        profiling: f('yes', 'official', ['activa-dkv-privacy-policy'], 'Preveu «segmentació i anàlisi de perfils en base a l’ús i altres variables» per millorar la usabilitat i incorporar funcionalitats noves.'),
        aiTraining: unknown('La política no parla d’entrenament de models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['activa-dkv-privacy-policy'], 'La xarxa homologada de professionals sanitaris i una xarxa de voluntaris mèdics acreditats hi accedeixen com a encarregats, i la política autoritza facilitar dades a tercers per gestionar els serveis i informar de productes.'),
        intraGroupSharing: f('yes', 'official', ['activa-dkv-privacy-policy', 'activa-dkv-group'], 'DKV forma part del grup assegurador europeu ERGO. Cal donar d’alta l’usuari també a DKV Servicios, i es poden rebre comunicacions d’altres companyies del grup DKV. La política precisa que DKV Servicios no comparteix amb DKV Seguros la informació de QC+.'),
        dataBrokerSales: unknown('La política no diu explícitament que no vengui dades personals.'),
        internationalTransfers: unknown('La política no esmenta transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['activa-dkv-privacy-policy'], 'La informació mèdica es conserva segons la Llei 41/2002 i el contingut dels xats «per temps indefinit tret que la persona usuària en demani l’esborrat»; no hi ha cap altre termini concret.'),
        dataAfterDeletion: f('partial', 'official', ['activa-dkv-privacy-policy'], 'Cancel·lar el compte faculta DKV per esborrar els continguts afegits i bloquejar l’accés a les consultes anteriors, però la documentació clínica es conserva segons la normativa sanitària.'),
        periods: [
          { dataType: 'contingut-de-missatges', period: 'Indefinit, tret que la persona usuària demani que s’esborri', sources: ['activa-dkv-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['activa-dkv-privacy-policy'], 'La política preveu cancel·lar el compte i suprimir les dades del servei.'),
        selfService: f('no', 'official', ['activa-dkv-privacy-policy'], 'La cancel·lació es demana per correu electrònic al delegat de protecció de dades del grup; no hi ha cap botó dins de l’app.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Si vols conservar els informes i resultats guardats a QC+, descarrega’ls abans.',
          'Escriu a dpogrupodkv@dkvseguros.es demanant la cancel·lació del compte d’usuari.',
          'Per suprimir les dades cal, a més, un escrit signat amb nom, cognoms i NIF adreçat a DKV Seguros (Torre DKV, Avda. María Zambrano 31, 50018 Saragossa), amb la referència «Protecció de Dades».',
          'Tingues en compte que cancel·lar el compte bloqueja l’accés a les consultes anteriors i que, si tens serveis de salut subscrits, deixaràs de poder-hi accedir.',
        ],
        obstacles: 'No hi ha autoservei: la baixa es demana per correu i la supressió, per escrit signat amb identificació. La pòlissa i la documentació clínica no s’esborren.',
        dataRetained: 'La informació mèdica generada per l’ús de l’aplicació, conservada segons la Llei 41/2002, i les dades associades a la pòlissa.',
        sources: ['activa-dkv-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['activa-dkv-privacy-policy'], 'La política reconeix la portabilitat, però només per escrit i amb identificació; no hi ha cap eina de descàrrega.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['activa-dkv-privacy-policy'], 'Per escrit a DKV Seguros a Saragossa, identificant-se amb nom, cognoms i NIF, o per correu al delegat de protecció de dades del grup.', { url: 'mailto:dpogrupodkv@dkvseguros.es' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['activa-dkv-privacy-policy'], 'Es pot exercir el dret d’oposició a la mercadotecnia directa, però la política la basa en l’interès legítim i no descriu cap interruptor dins de l’aplicació.'),
        telemetryOptOut: unknown('La política no parla de cap manera de desactivar l’analítica d’ús.'),
        granularControls: f('partial', 'official', ['activa-dkv-privacy-policy'], 'Cada aplicació integrada, com QC+, demana la seva acceptació i els seus consentiments concrets en el primer accés.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'official', ['activa-dkv-privacy-policy'], 'Per registrar-se cal acceptar en bloc les condicions, la política de privadesa i la de galetes, i la política afirma que acceptar-la autoritza a facilitar dades a tercers per informar de productes i promocions.'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'medium',
            description: 'L’acceptació conjunta de les condicions i de la política inclou l’autorització a comunicar dades a tercers amb finalitat informativa i promocional.',
            sources: ['activa-dkv-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'official', ['activa-dkv-privacy-policy'], 'Els xats es conserven xifrats i accessibles per a la persona usuària i el professional, però és DKV qui els custodia i qui els pot esborrar a petició: no és xifratge d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['activa-dkv-privacy-policy'], 'La política diu que les dades personals es xifren quan es transmeten per xarxes públiques o sense fil, i que els protocols de comunicació amb el sistema de recepta electrònica van xifrats segons l’article 8 del Reial decret 1718/2010.'),
        atRestEncryption: f('partial', 'official', ['activa-dkv-privacy-policy'], 'Només consta el xifratge del contingut de les consultes per xat; per a la resta, la política parla de mesures en termes generals.'),
        mfa: unknown('La política no parla de verificació en dos passos.'),
        independentAudits: f('partial', 'official', ['activa-dkv-privacy-policy'], 'La política diu que la xarxa de professionals està auditada i que s’ha provat el nivell de resiliència del sistema, però no publica cap informe.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini dkv.es no serveix cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'mi-sanitas',
          comparability: 'equivalent',
          rationale: 'És l’aplicació equivalent d’una altra asseguradora de salut espanyola, amb pòlissa, quadre mèdic i teleconsulta.',
          tradeOffs: 'També és una asseguradora que tracta dades de salut amb finalitats comercials; només serveix si hi tens la pòlissa.',
        },
        {
          app: 'adeslas',
          comparability: 'equivalent',
          rationale: 'Mateixa funció per als clients d’SegurCaixa Adeslas.',
          tradeOffs: 'Només serveix per a qui hi tingui contractada l’assegurança.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'El document que enllaça l’App Store barreja les condicions d’ús i la política de privadesa en una sola pàgina, i bona part del tractament de dades de salut s’explica remetent a l’aplicació QC+, amb condicions pròpies que no hem revisat. Classifiquem la fitxa també a banca i finances perquè el responsable és una asseguradora. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Per què l’etiqueta de l’App Store no declara cap dada de salut si l’aplicació gestiona informes, símptomes i receptes?',
          'Quina eina fa servir DKV per mesurar la interacció amb el producte i per què la declara com a rastreig?',
          'Què diu exactament la política de privadesa de QC+, on es guarda la biografia de salut?',
        ],
      },
    },
    {
      slug: 'virtual-waiting-room',
      name: 'Virtual Waiting Room',
      company: 'mysphera',
      categories: ['salut-i-assistencia-sanitaria'],
      tagline: 'Avisa la família de com va l’operació sense demanar cap dada: només un identificador temporal de Firebase',
      summary:
        'La sala d’espera virtual de Mysphera avisa els familiars de l’estat d’un pacient durant una operació o a urgències, a partir de la polsera de localització que li posa l’hospital. Per fer-la servir cal un codi d’accés que dona l’hospital i escanejar-lo amb la càmera. La política diu que l’aplicació no desa cap dada identificativa del telèfon: l’única dada tractada és l’identificador d’instància de Firebase Cloud Messaging, que serveix per enviar les notificacions i que Google esborra 180 dies després de desinstal·lar l’app. L’etiqueta de l’App Store ho confirma: no es recull cap dada.',
      platforms: ['ios', 'android'],
      jurisdiction: 'Espanya (UE)',
      userBase: 'Més de 4.600 valoracions a l’App Store espanyol, amb una nota mitjana de 4,8 sobre 5.',
      links: {
        website: 'https://www.mysphera.com/',
        privacyPolicy: 'https://www.mysphera.com/mysphera-app-politica-de-privacidad/',
        appStore: appStore('1497714153'),
      },
      accountRequired: f('no', 'official', ['virtual-waiting-room-privacy-policy', 'virtual-waiting-room-app-store'], 'No hi ha registre: cal un codi d’accés que lliura l’hospital i que es llegeix amb la càmera en forma de codi QR.'),
      openSource: f('no', 'official', ['virtual-waiting-room-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que revela l’aplicació no són dades del familiar sinó del pacient: que és en un quiròfan o a urgències i en quina fase del procés es troba. Mysphera diu que aquesta informació la gestiona l’hospital i que a l’app només hi arriba una notificació lligada a un identificador d’instància.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['virtual-waiting-room-privacy-policy'], note: 'Identificador d’instància de Firebase Cloud Messaging, gestionat per Google com a encarregat del tractament. És l’única categoria de dades que la política declara.' }),
        row('dades-de-salut', 'no', { linked: 'no', tracking: 'no', shared: 'none', purposes: [], sources: ['virtual-waiting-room-privacy-policy', 'virtual-waiting-room-app-store'], note: 'La política diu que la solució no desa cap dada identificativa del telèfon ni cap altra dada personal; l’estat del pacient el gestiona l’hospital.' }),
        row('fotografies-i-videos', 'no', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['virtual-waiting-room-privacy-policy'], note: 'Cal el permís de càmera per llegir el codi QR de l’hospital, però la política no declara que se’n desin imatges.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['virtual-waiting-room-app-store'], 'L’etiqueta declara que no es recull cap dada.'),
        advertisingIdentifiers: f('no', 'official', ['virtual-waiting-room-privacy-policy'], 'L’única dada declarada és l’identificador d’instància de Firebase, que no és l’identificador publicitari del dispositiu.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['virtual-waiting-room-privacy-policy'], 'Hi ha un sol component de tercers: Firebase Cloud Messaging, de Google, com a encarregat del tractament per enviar les notificacions.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['virtual-waiting-room-privacy-policy'], 'L’única finalitat declarada és notificar l’estat del pacient i els missatges del personal sanitari.'),
        profiling: f('no', 'official', ['virtual-waiting-room-privacy-policy'], 'La política no descriu cap elaboració de perfils.'),
        aiTraining: f('no', 'official', ['virtual-waiting-room-privacy-policy'], 'La política no preveu cap ús de les dades més enllà de l’enviament de notificacions.'),
      },
      sharing: {
        thirdPartySharing: f('no', 'official', ['virtual-waiting-room-privacy-policy'], 'La política diu que les dades no es comuniquen a tercers, llevat dels casos previstos per la llei; Google hi intervé com a encarregat del tractament.'),
        intraGroupSharing: na('Mysphera és una empresa independent sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['virtual-waiting-room-privacy-policy'], 'No hi ha cap cessió prevista.'),
        internationalTransfers: f('partial', 'official', ['virtual-waiting-room-privacy-policy'], 'La política remet a les condicions de tractament i seguretat de Firebase, que diu que compleixen el RGPD, però no concreta on s’allotgen els identificadors ni amb quin mecanisme.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència; per la mida de l’empresa i la naturalesa del servei, seria inusual que n’hi hagués.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['virtual-waiting-room-privacy-policy'], 'Firebase esborra l’identificador d’instància dins dels 180 dies posteriors a desinstal·lar l’aplicació.'),
        dataAfterDeletion: f('no', 'official', ['virtual-waiting-room-privacy-policy'], 'Un cop esborrat l’identificador d’instància no queda cap dada, perquè no se’n tracta cap altra.'),
        periods: [
          { dataType: 'identificador-de-dispositiu', period: '180 dies des de la desinstal·lació de l’aplicació', sources: ['virtual-waiting-room-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: na('No hi ha compte: l’accés es fa amb un codi que dona l’hospital.'),
        selfService: f('yes', 'official', ['virtual-waiting-room-privacy-policy'], 'Desinstal·lar l’aplicació posa en marxa l’esborrat de l’identificador d’instància, que Firebase elimina en un màxim de 180 dies.'),
        difficulty: 'easy',
        steps: [
          'Desinstal·la l’aplicació del telèfon.',
          'Firebase esborrarà l’identificador d’instància dins dels 180 dies següents.',
          'Si vols exercir els drets abans, escriu a gdpr@mysphera.com o envia un escrit amb còpia del DNI a Ronda Auguste i Louis Lumière 23, nau 13, Paterna (València).',
        ],
        dataRetained: 'Cap, un cop esborrat l’identificador d’instància.',
        sources: ['virtual-waiting-room-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['virtual-waiting-room-privacy-policy'], 'La política enumera els drets d’accés, rectificació, supressió i limitació, però no la portabilitat, i no hi ha cap eina de descàrrega: tampoc hi hauria gaire cosa a descarregar.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['virtual-waiting-room-privacy-policy'], 'Per correu a gdpr@mysphera.com o per escrit a Paterna, però sempre amb fotocòpia del DNI o d’una altra identificació vàlida.', { url: 'mailto:gdpr@mysphera.com' }),
      },
      controls: {
        adPersonalizationOptOut: na('No hi ha publicitat ni personalització publicitària.'),
        telemetryOptOut: na('L’aplicació no declara recollir dades de diagnòstic ni d’ús.'),
        granularControls: f('partial', 'official', ['virtual-waiting-room-privacy-policy'], 'Els únics permisos són la càmera per llegir el codi QR i les notificacions, i es poden revocar des del sistema.'),
        defaultPosture: 'protective',
        darkPatterns: f('no', 'editorial', ['virtual-waiting-room-privacy-policy'], 'No hi ha registre, ni consentiments encadenats, ni publicitat: no hem detectat cap patró enganyós, tot i que no hem revisat les pantalles de l’aplicació.'),
      },
      security: {
        e2ee: na('L’aplicació només rep notificacions d’estat; no hi ha conversa entre persones usuàries que pugui anar xifrada d’extrem a extrem.'),
        transportEncryption: unknown('La política no concreta el protocol de transport; remet a les condicions de seguretat de Firebase.'),
        atRestEncryption: unknown('La política no parla de xifratge en repòs.'),
        mfa: na('No hi ha compte ni contrasenya: l’accés es fa amb el codi que lliura l’hospital.'),
        independentAudits: unknown('No hem trobat cap auditoria publicada.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini mysphera.com no serveix cap fitxer security.txt.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'És l’aplicació més sòbria del lot: una sola categoria de dades, un sol encarregat del tractament i un termini de conservació concret. El risc real no és a l’app sinó al sistema de localització de l’hospital, que Mysphera ven a part i que queda fora de la política que hem llegit. El web de Mysphera sí que fa servir galetes de mercadotecnia, però això no afecta l’aplicació. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Qui és el responsable del tractament de les dades de localització del pacient: l’hospital o Mysphera?',
          'On s’allotgen els identificadors d’instància de Firebase i amb quin mecanisme de transferència?',
          'Què conté exactament el missatge que envia el personal sanitari als familiars?',
        ],
      },
    },
    {
      slug: 'vera-health',
      name: 'Vera Health',
      company: 'veracity-health',
      categories: ['salut-i-assistencia-sanitaria', 'assistents-d-ia'],
      tagline: 'Es promociona com a «conforme amb el RGPD» i declara a l’App Store que no recull cap dada, però la política parla de socis publicitaris',
      summary:
        'Vera Health és un motor de respostes clíniques amb intel·ligència artificial adreçat a professionals sanitaris, que cita les fonts de cada resposta. L’etiqueta de l’App Store diu que no es recull cap dada; la política de privadesa, en canvi, enumera nom i correu, historial d’ús, identificador de dispositiu, adreça IP, geolocalització per IP i les entrades i sortides de la IA, i diu que algunes d’aquestes categories es comparteixen amb socis publicitaris i d’analítica. L’empresa és de Delaware i allotja el servei als Estats Units. A favor seu, la política afirma que no fa servir les dades personals per entrenar els seus models.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units; responsable sense establiment declarat a la Unió Europea',
      userBase: 'Més de 250.000 professionals sanitaris, segons la mateixa empresa a la fitxa de l’App Store.',
      links: {
        website: 'https://www.verahealth.ai/',
        privacyPolicy: 'https://www.verahealth.ai/privacy',
        appStore: appStore('6744374898'),
      },
      accountRequired: f('yes', 'official', ['vera-health-privacy-policy'], 'La política descriu la creació i la gestió d’un compte com una de les finalitats principals, i el servei s’adreça a professionals sanitaris verificats.'),
      openSource: f('no', 'official', ['vera-health-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'El que revelen les dades no és la salut de qui fa servir l’app sinó la seva pràctica clínica: quines preguntes fa, sobre quines patologies i amb quina freqüència. La política reconeix que agrega i desidentifica aquesta activitat —inclosos els textos d’entrada i de sortida— i que en comparteix conclusions amb socis i organitzacions de recerca.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['vera-health-privacy-policy'], note: 'L’etiqueta de l’App Store no declara cap dada.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['vera-health-privacy-policy'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['vera-health-privacy-policy'], note: 'La política declara que les dades de dispositiu i IP es comparteixen amb proveïdors, socis publicitaris i socis d’analítica.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['vera-health-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'mesura-publicitaria'], sources: ['vera-health-privacy-policy'], note: 'Geolocalització deduïda de l’adreça IP, compartida també amb socis publicitaris i d’analítica.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'investigacio-i-estadistica'], sources: ['vera-health-privacy-policy'], note: 'Historial d’ús dels productes i perfils de consum; la política parla d’agregar-ho per compartir conclusions amb socis i organitzacions de recerca.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['vera-health-privacy-policy'], note: 'Les entrades i sortides de les consultes a la IA, que la política tracta com una categoria pròpia.' }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['vera-health-privacy-policy'], note: 'La política remet a un avís de galetes separat i reconeix eines de seguiment i publicitat.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['vera-health-app-store'], 'L’etiqueta de l’App Store no declara cap dada, ni tan sols per rastrejar. La política, però, descriu compartició amb socis publicitaris.'),
        advertisingIdentifiers: unknown('La política parla d’identificadors de dispositiu, però no aclareix si es fa servir l’identificador publicitari d’iOS.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['vera-health-privacy-policy'], 'La política identifica categories de destinataris de «socis publicitaris» i «socis d’analítica», i remet a un avís de galetes propi.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['vera-health-privacy-policy'], 'La política preveu mostrar publicitat basada en interessos o dirigida, amb base jurídica de consentiment.'),
        profiling: f('partial', 'official', ['vera-health-privacy-policy'], 'Esmenta «perfils de consum» entre les dades comercials recollides i la personalització del servei, però no descriu cap decisió automatitzada.'),
        aiTraining: f('no', 'official', ['vera-health-privacy-policy'], 'La política afirma explícitament: «No fem servir les teves dades personals per entrenar els nostres sistemes d’IA».'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['vera-health-privacy-policy'], 'Proveïdors d’allotjament, seguretat i suport, socis publicitaris, socis d’analítica i les parts que la persona usuària autoritzi.'),
        intraGroupSharing: f('partial', 'official', ['vera-health-privacy-policy'], 'Preveu comunicar dades a filials i en operacions corporatives com fusions o vendes, sense concretar quines societats hi ha al grup.'),
        dataBrokerSales: unknown('La política no diu explícitament que no vengui dades personals; sí que preveu compartir conclusions agregades amb socis comercials i organitzacions de recerca.'),
        internationalTransfers: f('yes', 'official', ['vera-health-privacy-policy'], 'El servei s’allotja als Estats Units i la política diu que les transferències fora de l’Espai Econòmic Europeu es fan per decisió d’adequació o per clàusules contractuals tipus.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['vera-health-privacy-policy'], 'La política diu que conserva les dades «tant de temps com calgui» per prestar el servei o per finalitats de negoci, sense cap termini concret.'),
        dataAfterDeletion: f('partial', 'official', ['vera-health-privacy-policy'], 'Pot conservar dades per complir obligacions legals o resoldre disputes, i manté indefinidament la informació agregada o desidentificada.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['vera-health-privacy-policy'], 'La política reconeix el dret de supressió i explica com demanar-lo.'),
        selfService: f('no', 'official', ['vera-health-privacy-policy'], 'Cal enviar un correu amb l’assumpte «User Rights Request»; no hi ha cap botó d’eliminació descrit.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        waitingPeriodDays: 30,
        steps: [
          'Escriu a privacy@verahealth.ai amb l’assumpte «User Rights Request».',
          'Inclou-hi el nom complet, l’adreça electrònica del compte i la informació que calgui per verificar la identitat.',
          'Vera Health confirma la recepció i respon en el termini d’un mes, prorrogable si cal.',
          'Les dades agregades o desidentificades es poden conservar igualment.',
        ],
        obstacles: 'No hi ha autoservei i l’empresa pot demanar informació addicional per verificar la identitat. Si el compte l’ha creat un hospital o una empresa, determinats canvis els ha de demanar aquesta organització.',
        dataRetained: 'Dades necessàries per complir obligacions legals o resoldre disputes i tota la informació agregada o desidentificada.',
        sources: ['vera-health-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['vera-health-privacy-policy'], 'Reconeix la portabilitat en format estructurat i de lectura mecànica, però només per sol·licitud per correu i advertint que pot limitar la informació per protegir drets propis.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['vera-health-privacy-policy'], 'Per correu a privacy@verahealth.ai, amb resposta en un mes i possibilitat de designar un representant.', { url: 'mailto:privacy@verahealth.ai' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['vera-health-privacy-policy'], 'La publicitat dirigida es basa en el consentiment i l’avís de galetes permet acceptar-les o rebutjar-les, però la política no descriu cap ajust dins de l’aplicació.'),
        telemetryOptOut: unknown('La política no descriu cap manera de desactivar l’analítica d’ús.'),
        granularControls: unknown('No hem pogut comprovar quins controls ofereix l’aplicació.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar les pantalles de registre i de consentiment de l’aplicació.'),
      },
      security: {
        e2ee: na('És un servei de consulta documental amb un model d’IA; no hi ha comunicació entre persones usuàries que pugui anar xifrada d’extrem a extrem.'),
        transportEncryption: unknown('La política parla de mesures «físiques, tècniques, organitzatives i administratives» sense concretar-ne cap.'),
        atRestEncryption: f('partial', 'official', ['vera-health-privacy-policy'], 'L’apartat de minimització esmenta el xifratge, el control d’accés i la pseudonimització per a les dades que es fan servir per entrenar, sense concretar la resta.'),
        mfa: unknown('La política no parla de verificació en dos passos.'),
        independentAudits: unknown('No hem trobat cap auditoria ni certificació publicada.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini verahealth.ai no serveix cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'claude',
          comparability: 'partial',
          rationale: 'També és un assistent conversacional que pot ajudar a buscar i resumir literatura, amb una política de privadesa molt més detallada i un responsable amb establiment a la Unió Europea.',
          tradeOffs: 'No està especialitzat en medicina basada en l’evidència ni cita automàticament les guies clíniques.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La contradicció principal és entre l’etiqueta de l’App Store, que declara que no es recull cap dada, i la política de privadesa, que descriu categories de dades i destinataris publicitaris. La fitxa de l’App Store presenta l’aplicació com a «conforme amb el RGPD», però la política no identifica cap establiment ni cap representant a la Unió Europea, com exigeix l’article 27 del RGPD. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Per què l’etiqueta de l’App Store diu que no es recull cap dada?',
          'Qui és el representant de Veracity-Health a la Unió Europea?',
          'Quins són els socis publicitaris i d’analítica amb qui es comparteixen l’IP i l’identificador de dispositiu?',
        ],
      },
    },
    {
      slug: 'suno',
      name: 'Suno',
      company: 'suno',
      categories: ['musica-i-audio', 'assistents-d-ia'],
      tagline: 'Les cançons i les indicacions que hi escrius serveixen per entrenar els models, per interès legítim',
      summary:
        'Suno genera cançons senceres a partir d’una descripció escrita, d’un àudio gravat amb el telèfon o d’una fotografia. L’avís de privadesa diu que el contingut, les indicacions i les converses del xat de creació es fan servir per «entrenar i millorar els models» amb base en l’interès legítim, sense cap opció de negar-s’hi que hi consti. L’etiqueta de l’App Store declara fotografies, vídeos i l’identificador del dispositiu com a dades usades per rastrejar-te, i l’àudio i el contingut de l’usuari com a dades vinculades a la identitat que també serveixen per a publicitat i màrqueting. L’empresa és nord-americana, allotja les dades als Estats Units i només permet eliminar el compte enviant un correu.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units; responsable sense establiment declarat a la Unió Europea',
      userBase: 'Més de 26.000 valoracions a l’App Store espanyol, amb una nota mitjana de 4,9 sobre 5.',
      links: {
        website: 'https://suno.com/',
        privacyPolicy: 'https://suno.com/privacy',
        terms: 'https://suno.com/terms-of-service',
        appStore: appStore('6480136315'),
      },
      accountRequired: f('yes', 'official', ['suno-help-accounts', 'suno-privacy-notice'], 'Cal crear un compte per generar cançons; també es pot entrar amb un compte d’Apple, de Google, de Discord o de Microsoft.'),
      openSource: f('no', 'official', ['suno-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Les indicacions que s’escriuen a un generador de cançons revelen gustos, estats d’ànim, persones estimades i, sovint, la veu de qui el fa servir. Suno ho ajunta amb l’historial de cerca, els «m’agrada», els comentaris i l’activitat d’ús, i en pot fer perfils de preferències i personalització.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['suno-app-store', 'suno-privacy-notice'], note: 'L’etiqueta declara nom, correu i telèfon també per a «publicitat o màrqueting del desenvolupador».' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'mesura-i-analisi-dus'], sources: ['suno-app-store', 'suno-privacy-notice'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['suno-app-store'] }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia', 'publicitat-personalitzada'], sources: ['suno-app-store', 'suno-privacy-notice'], note: 'Les gravacions que es pugen per convertir en cançó. L’etiqueta declara les dades d’àudio per a funcionalitat, analítica, personalització i publicitat.' }),
        row('fotografies-i-videos', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['suno-app-store'], note: 'L’etiqueta les declara com a dades usades per rastrejar-te.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-publicitaria', 'mesura-i-analisi-dus'], sources: ['suno-app-store', 'suno-privacy-notice'], note: 'També declarat com a dada usada per rastrejar-te.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['suno-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts', 'recomanacions-algoritmiques'], sources: ['suno-app-store', 'suno-privacy-notice'], note: 'La política parla dels termes de cerca més freqüents i de les col·leccions creades.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'personalitzacio-de-continguts'], sources: ['suno-app-store', 'suno-privacy-notice'], note: 'La política avisa que el seguiment s’aplica a tot l’ús del servei, tant pel web com per l’aplicació.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['suno-privacy-notice'], note: 'Els «m’agrada», els comentaris i les cançons compartides amb altres persones.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['elaboracio-de-perfils', 'personalitzacio-de-continguts'], sources: ['suno-privacy-notice'], note: 'La política diu que genera «perfils de preferències i personalització» que reflecteixen els gustos i les tendències creatives, visibles i desactivables des de la funció corresponent.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['suno-privacy-notice'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['suno-privacy-notice', 'suno-help-accounts'], note: 'Les dades de targeta les recull directament Stripe; la política diu que Suno no les emmagatzema.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['suno-app-store'], note: 'Dades d’errors i de rendiment, no vinculades a la identitat.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['suno-privacy-notice'], note: 'La política fixa un màxim de tres anys de conservació «si tractem informació biomètrica», sense dir en quins casos ho fa.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['suno-app-store'], 'L’etiqueta declara fotografies o vídeos i l’identificador del dispositiu com a dades que es poden fer servir per rastrejar-te en apps i webs d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['suno-app-store'], 'L’etiqueta declara l’identificador del dispositiu tant entre les dades de rastreig com per a publicitat i analítica.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['suno-privacy-notice'], 'L’avís parla de galetes, píxels, balises web i SDK de tercers per a analítica i publicitat, i esmenta Google Analytics.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['suno-privacy-notice', 'suno-app-store'], 'Hi ha galetes de segmentació i publicitat, i l’etiqueta declara contacte, contingut, identificadors i ús per a «publicitat o màrqueting del desenvolupador».'),
        profiling: f('yes', 'official', ['suno-privacy-notice'], 'Genera perfils de preferències i personalització a partir de l’activitat i del contingut, que es poden veure, editar i desactivar.'),
        aiTraining: f('yes', 'official', ['suno-privacy-notice'], 'Fa servir l’activitat, les aportacions, les converses del xat de creació i altres continguts per «entrenar i millorar els models que fan funcionar els serveis», amb base en l’interès legítim.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['suno-privacy-notice'], 'Proveïdors d’allotjament i d’infraestructura, serveis d’IA i d’aprenentatge automàtic, proveïdors de publicitat, màrqueting i analítica, i altres persones usuàries quan es comparteix contingut.'),
        intraGroupSharing: f('yes', 'official', ['suno-privacy-notice'], 'L’avís es fa en nom de Suno, Inc. «i les nostres filials i societats dependents», sense concretar-les.'),
        dataBrokerSales: f('no', 'official', ['suno-privacy-notice'], 'L’avís afirma en negreta que no ven informació a tercers i que no la «ven» ni la «comparteix» en el sentit de les lleis de privadesa dels estats nord-americans.'),
        internationalTransfers: f('yes', 'official', ['suno-privacy-notice'], 'Les dades de l’Espai Econòmic Europeu es transfereixen i es tracten als Estats Units; l’avís diu que les transferències posteriors es fan a països amb decisió d’adequació o amb garanties adequades, sense concretar-les.', { mechanism: 'unknown' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions de dades.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['suno-privacy-notice'], 'L’únic termini concret és el de les dades biomètriques: un màxim de tres anys des de l’última interacció. La resta es conserva «tant de temps com sigui raonablement necessari».'),
        dataAfterDeletion: f('partial', 'official', ['suno-privacy-notice'], 'Avisa que potser no podrà esborrar-ho tot: conserva el que calgui per mantenir el compte, per complir contractes o obligacions legals, i tot el que s’hagi desidentificat, anonimitzat o agregat.'),
        periods: [
          { dataType: 'dades-biometriques', period: 'Màxim tres anys des de l’última interacció', sources: ['suno-privacy-notice'] },
        ],
      },
      accountDeletion: {
        possible: f('partial', 'official', ['suno-privacy-notice'], 'Es pot demanar la supressió, però l’avís enumera diverses excepcions i adverteix que potser no s’esborrarà tota la informació.'),
        selfService: f('no', 'official', ['suno-privacy-notice', 'suno-help-accounts'], 'La supressió es demana per correu a privacy@suno.com; el centre d’ajuda no té cap article que expliqui com eliminar el compte.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Descarrega les cançons que vulguis conservar: les subscripcions de pagament permeten baixar fitxers WAV des del web.',
          'Si tens una subscripció activa, cancel·la-la a suno.com/account abans de res.',
          'Escriu a privacy@suno.com demanant la supressió de la informació associada al compte.',
          'Suno diu que hi respondrà «en un termini raonable», sense concretar-lo, i que pot conservar part de la informació.',
        ],
        obstacles: 'No hi ha cap botó d’eliminació ni cap article d’ajuda: tot passa per un correu, i l’avís reserva excepcions àmplies per no esborrar-ho tot.',
        dataRetained: 'La informació necessària per mantenir el compte o complir contractes i obligacions legals, i tota la informació desidentificada, anonimitzada o agregada.',
        sources: ['suno-privacy-notice', 'suno-help-accounts'],
      },
      userRights: {
        dataExport: unknown('L’avís reconeix els drets de les persones residents a l’Espai Econòmic Europeu, però no descriu cap eina d’exportació de les dades ni del contingut generat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['suno-privacy-notice'], 'Tot s’exerceix per correu a privacy@suno.com; no hi ha cap formulari ni cap panell de privadesa.', { url: 'mailto:privacy@suno.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['suno-privacy-notice'], 'Es pot cancel·lar la subscripció als correus de màrqueting i canviar la configuració de galetes del navegador, però l’avís diu expressament que el web no respon als senyals «Do Not Track» ni a les preferències d’exclusió.'),
        telemetryOptOut: f('no', 'official', ['suno-privacy-notice'], 'L’avís no ofereix cap manera de desactivar la recollida d’activitat dins del servei, que s’aplica tant al web com a l’aplicació.'),
        granularControls: f('partial', 'official', ['suno-privacy-notice'], 'El perfil de personalització es pot veure, editar i desactivar des de la funció corresponent, i les cançons són d’enllaç privat per defecte.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'official', ['suno-privacy-notice'], 'L’avís afirma que fer servir el servei i permetre les galetes equival a consentir-les, i que el web no atén els senyals d’exclusió del navegador.'),
        darkPatternList: [
          {
            type: 'unbalanced-consent',
            severity: 'medium',
            description: 'Fer servir el servei es presenta com a consentiment a les galetes d’analítica i de publicitat, i el web ignora deliberadament els senyals «Do Not Track» i les preferències d’exclusió.',
            sources: ['suno-privacy-notice'],
          },
        ],
      },
      security: {
        e2ee: na('És un servei de generació de contingut al núvol: el servidor ha de poder llegir les indicacions i l’àudio per generar la cançó.'),
        transportEncryption: f('no', 'official', ['suno-privacy-notice'], 'L’avís adverteix que la informació enviada electrònicament «pot no ser segura mentre viatja» i no afirma xifrar el trànsit.'),
        atRestEncryption: unknown('L’avís parla de «mesures de seguretat raonables des del punt de vista comercial» sense concretar-les.'),
        mfa: unknown('No hem trobat cap documentació sobre la verificació en dos passos; el registre es pot fer amb comptes d’Apple, Google, Discord o Microsoft, que sí que en tenen.'),
        independentAudits: unknown('No hem trobat cap auditoria ni certificació publicada.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses per a vulnerabilitats.'),
        vulnerabilityDisclosure: unknown('El domini suno.com no serveix cap fitxer security.txt.'),
      },
      alternatives: [
        {
          app: 'spotify',
          comparability: 'complementary',
          rationale: 'Si el que vols és escoltar música i no generar-ne, un servei de catàleg evita haver de cedir la teva veu i les teves indicacions per entrenar models.',
          tradeOffs: 'No permet crear cançons noves, i també fa un perfil detallat dels teus gustos.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'L’avís de privadesa és el mateix per al web, l’aplicació i els conjunts de dades de Suno, i hi conviuen un llenguatge de producte empresarial i un de consum. No hem trobat cap establiment ni cap representant a la Unió Europea, tot i que el servei es ven a Espanya amb IVA. No hem tractat els litigis de drets d’autor contra Suno perquè no són incidents de privadesa. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca de sancions ni de filtracions.',
        openQuestions: [
          'Es pot oposar una persona a l’ús de les seves cançons i indicacions per entrenar els models, si la base és l’interès legítim?',
          'En quins casos tracta Suno dades biomètriques, si l’avís hi fixa un termini de conservació?',
          'Qui és el representant de Suno, Inc. a la Unió Europea?',
        ],
      },
    },
    {
      slug: 'shazam',
      name: 'Shazam',
      company: 'apple',
      categories: ['musica-i-audio', 'descobriment-visual'],
      tagline: 'Es pot fer servir sense compte: sense identificar-te, el que escoltes queda lligat a un Shazam ID i no a tu',
      summary:
        'Shazam identifica la cançó que sona al voltant o dins d’una altra aplicació. És d’Apple des del 2018 i manté una política de privadesa pròpia: si es fa servir sense compte, les identificacions queden lligades a un «Shazam ID» que la companyia descriu com a no identificatiu; amb compte, queden lligades al correu o al compte d’Apple. L’etiqueta de l’App Store no declara cap dada per rastrejar, però sí historial de compres, ubicació aproximada, identificadors i ús vinculats a la identitat per a analítica i personalització. El portal de dades permet descarregar o eliminar el compte en trenta dies, i Apple publica informe de transparència, security.txt i programa de recompenses.',
      platforms: ['ios', 'android', 'web', 'macos'],
      jurisdiction: 'Irlanda (UE) per a l’Espai Econòmic Europeu; grup amb seu als Estats Units',
      userBase: 'Més de 300 milions de persones usuàries mensuals, segons la descripció oficial de l’aplicació.',
      links: {
        website: 'https://www.shazam.com/',
        privacyPolicy: 'https://www.apple.com/es/legal/privacy/es/',
        privacyCenter: 'https://www.shazam.com/privacy',
        appStore: appStore('284993459'),
      },
      accountRequired: f('no', 'official', ['shazam-privacy'], 'Shazam funciona sense compte: llavors les dades només queden associades a un Shazam ID que la companyia qualifica de no identificatiu personalment.'),
      openSource: f('no', 'official', ['shazam-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'L’historial de cançons identificades és un diari del que has escoltat, quan i on: música, però també vídeos de xarxes socials, anuncis i programes de televisió. Shazam el fa servir per recomanar i, agregat i desidentificat amb la ciutat i el país, el comparteix amb socis del sector musical.',
      dataCollection: [
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['shazam-privacy'], note: 'Només si es crea un compte; també es pot entrar amb el compte d’Apple o amb un servei de tercers.' }),
        row('identificador-de-compte', 'yes', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['shazam-app-store', 'shazam-privacy'], note: 'Sense compte, el Shazam ID; amb compte, les credencials o el compte d’Apple.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['personalitzacio-de-continguts'], sources: ['shazam-app-store'], note: 'L’etiqueta el declara vinculat a la identitat per a la personalització del producte.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'recomanacions-algoritmiques'], sources: ['shazam-privacy'], note: 'L’historial de cançons identificades, que serveix per mostrar les descobertes i per recomanar música.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shazam-app-store'], note: 'L’etiqueta el declara sense vincular a la identitat.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['shazam-app-store', 'shazam-privacy'], note: 'Shazam diu que pot aproximar la ubicació per oferir les llistes de tendències, i que comparteix amb socis la ciutat i el país de cada identificació de manera agregada.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['shazam-app-store', 'shazam-privacy'], note: 'Només amb permís: serveix per mostrar on vas descobrir cada cançó. L’etiqueta la declara sense vincular a la identitat.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus', 'personalitzacio-de-continguts'], sources: ['shazam-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte', 'seguretat-i-prevencio-del-frau'], sources: ['shazam-app-store', 'shazam-privacy'], note: 'Pàgines vistes, botons premuts, model del dispositiu, versió del sistema i adreça IP, també per detectar fraus o usos indeguts.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['shazam-privacy'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'millora-del-producte'], sources: ['shazam-privacy'], note: 'Marca, model i versió del sistema operatiu.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['shazam-app-store'], note: 'L’etiqueta declara dades de rendiment i altres dades de diagnòstic, una part vinculades a la identitat.' }),
        row('veu-i-audio', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['shazam-privacy'], level: 'editorial', note: 'El micròfon és imprescindible per identificar la cançó, però ni l’etiqueta ni la pàgina de privadesa declaren que es desin dades d’àudio: la tecnologia funciona amb una empremta digital del so.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['shazam-app-store'], 'L’etiqueta de l’App Store no declara cap dada usada per rastrejar-te.'),
        advertisingIdentifiers: f('no', 'official', ['shazam-app-store', 'apple-privacy-policy'], 'L’etiqueta no declara cap identificador publicitari, i la política d’Apple diu que la seva plataforma publicitària no rastreja ni enllaça dades recollides per tercers.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['shazam-privacy'], 'Shazam esmenta proveïdors de serveis que actuen en nom seu, però no identifica cap SDK d’analítica de tercers dins de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['apple-privacy-policy', 'shazam-app-store'], 'L’etiqueta declara dades d’interacció sense vincular per a «publicitat o màrqueting del desenvolupador»; la plataforma publicitària d’Apple personalitza anuncis a l’App Store, Apple News i Borsa, i es pot desactivar des dels ajustos.'),
        profiling: f('yes', 'official', ['shazam-privacy'], 'Les recomanacions de cançons i de llistes es fan a partir de l’historial d’identificacions, i les notificacions es personalitzen segons l’activitat a Shazam.'),
        aiTraining: unknown('Ni la pàgina de Shazam ni la política d’Apple diuen si les dades serveixen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['shazam-privacy'], 'Comparteix informació agregada i desidentificada amb socis, incloses les cançons identificades i la ciutat i el país de cada identificació, a més de proveïdors de serveis i de peticions legals vàlides.'),
        intraGroupSharing: f('yes', 'official', ['apple-privacy-policy'], 'Les dades de les persones de l’Espai Econòmic Europeu les controla Apple Distribution International Limited, a Irlanda, i les poden tractar Apple Inc. i altres filials en nom seu.'),
        dataBrokerSales: f('no', 'official', ['apple-privacy-policy'], 'La política d’Apple afirma que no ven dades personals —inclosa la definició de venda de Califòrnia i Nevada— ni les «comparteix» en el sentit de la llei californiana.'),
        internationalTransfers: f('yes', 'official', ['apple-privacy-policy'], 'Les dades recollides a l’Espai Econòmic Europeu es poden transferir a Apple Inc. als Estats Units, segons la política, que remet a les clàusules contractuals tipus d’Apple.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: f('yes', 'official', ['apple-transparency-report'], 'Apple publica informes semestrals de peticions de dades de governs i autoritats, desglossats per país i per tipus de petició.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['shazam-privacy'], 'L’únic termini concret és el de la baixa: l’esborrat del compte es completa en trenta dies. No hi ha terminis per a l’historial d’identificacions ni per a les dades d’ús.'),
        dataAfterDeletion: f('yes', 'official', ['shazam-privacy'], 'Shazam avisa que pot conservar dades que s’hagin desidentificat i que ja no estiguin associades a la persona.'),
        periods: [
          { dataType: 'identificador-de-compte', period: 'Esborrat complet en un màxim de trenta dies des de la sol·licitud', sources: ['shazam-privacy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['shazam-privacy'], 'Hi ha un portal específic per demanar l’eliminació del compte i de les dades associades.'),
        selfService: f('yes', 'official', ['shazam-privacy'], 'Es fa des del portal de gestió de dades de Shazam, autenticant-se amb les credencials del compte.'),
        directUrl: 'https://www.shazam.com/privacy',
        difficulty: 'easy',
        waitingPeriodDays: 30,
        steps: [
          'Si vols conservar les teves descobertes, demana abans la descàrrega de les dades des del mateix portal: arriben per correu en un màxim de trenta dies.',
          'Tanca la sessió a tots els dispositius o, en dispositius d’Apple, desactiva la sincronització amb iCloud.',
          'Entra al portal de gestió de dades de Shazam i tria l’opció d’eliminar el compte, autenticant-te amb les teves credencials.',
          'L’esborrat es completa en un màxim de trenta dies. Si fas servir Shazam amb iCloud, s’esborraran les cançons d’iCloud, però no el compte d’Apple.',
        ],
        dataRetained: 'Dades desidentificades que ja no estiguin associades a la persona.',
        sources: ['shazam-privacy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['shazam-privacy'], 'Hi ha un portal per demanar la descàrrega de les dades de Shazam, que arriben per correu en un màxim de trenta dies.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['shazam-privacy', 'apple-privacy-policy'], 'Des del portal de gestió de dades de Shazam i, per a la resta de dades del compte d’Apple, des del portal de dades i privadesa d’Apple.', { url: 'https://privacy.apple.com/' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['apple-privacy-policy'], 'Els anuncis personalitzats de la plataforma d’Apple es poden desactivar a Ajustos > Privadesa i seguretat > Publicitat d’Apple, i el permís de rastreig d’apps de tercers també es pot denegar.'),
        telemetryOptOut: unknown('Ni la pàgina de Shazam ni la política d’Apple expliquen si es pot desactivar l’enviament de dades d’ús de l’aplicació.'),
        granularControls: f('partial', 'official', ['shazam-privacy'], 'Es pot fer servir Shazam sense compte, i el permís d’ubicació és opcional; la resta de la recollida no es pot ajustar.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem revisat les pantalles de l’aplicació, i la pàgina de privadesa no descriu cap flux de consentiment.'),
      },
      security: {
        e2ee: na('Shazam no transporta comunicacions entre persones usuàries que puguin anar xifrades d’extrem a extrem.'),
        transportEncryption: unknown('Ni la pàgina de Shazam ni la política d’Apple concreten el xifratge del trànsit de l’aplicació.'),
        atRestEncryption: unknown('No hem trobat cap document que concreti el xifratge en repòs de les dades de Shazam.'),
        mfa: f('partial', 'official', ['shazam-privacy'], 'Shazam no descriu cap segon factor propi, però es pot entrar amb el compte d’Apple o amb un altre servei de tercers, que sí que en tenen.'),
        independentAudits: unknown('No hem trobat cap auditoria pública específica de Shazam.'),
        bugBounty: f('yes', 'official', ['apple-security-txt'], 'El security.txt d’Apple enllaça les directrius del programa de recompenses Apple Security Bounty.'),
        vulnerabilityDisclosure: f('yes', 'official', ['apple-security-txt'], 'Apple publica un fitxer security.txt amb el contacte security.apple.com i els agraïments de seguretat.'),
      },
      alternatives: [
        {
          app: 'youtube-music',
          comparability: 'partial',
          rationale: 'També identifica cançons tararejant-les o cantant-les des del cercador de Google, sense obrir una aplicació específica.',
          tradeOffs: 'El resultat queda associat al compte de Google, que en fa un ús molt més ampli.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'Shazam té una pàgina de privadesa pròpia, curta i clara, però el document jurídic aplicable és la política general d’Apple, que hi remet expressament. Bona part del detall —terminis, bases jurídiques, encarregats— no és en cap dels dos llocs. Hem marcat les dades d’àudio com a editorials: el micròfon és imprescindible, però cap font declara que es desin gravacions. El buscador de resolucions de l’AEPD no ens ha respost i no hem pogut completar la cerca d’incidents.',
        openQuestions: [
          'Quant de temps conserva Shazam l’historial d’identificacions de qui el fa servir sense compte?',
          'Què inclou exactament la informació agregada que es comparteix amb els socis del sector musical?',
          'Es pot desactivar l’enviament de dades d’ús des de l’aplicació?',
        ],
      },
    },
  ],
  incidents: [],
  storeIds: {
    espaisalut: 'es.ibsalut.espaisalut.app',
    'vera-health': 'io.vera.app',
    'hm-hospitales': 'com.grupotrc.HMHospitales',
    'mi-salud-digital-clm': 'es.sescam.app',
    'sergas-mobil': 'es.sergas.appbox',
    'imed-hospitales': 'com.intecsal.IMEDAPP',
    'activa-dkv': 'com.dkv.appdkv',
    'virtual-waiting-room': 'com.mysphera.VirtualWaitingRoom',
    suno: 'ai.suno.ios',
    shazam: 'com.shazam.Shazam',
  },
}
