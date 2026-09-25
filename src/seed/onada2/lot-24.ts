import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 24 de la segona onada: vuit serveis de salut (tres grups hospitalaris,
 * dues asseguradores, un servei de prevenció laboral, la recepta privada
 * electrònica i una aplicació d’embaràs) i dues aplicacions de lectura.
 *
 * El fil comú és que gairebé totes tracten dades de l’article 9 del RGPD
 * —salut— amb documentació pensada per al web corporatiu i no per a
 * l’aplicació. Les etiquetes de l’App Store i les polítiques sovint no
 * coincideixen, i això queda anotat a cada fitxa.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'fresenius-se',
      name: 'Fresenius',
      legalName: 'Fresenius SE & Co. KGaA',
      description:
        'Grup sanitari alemany present a l’hospitalització, la diàlisi i els productes mèdics. A Espanya controla Quirónsalud, el grup hospitalari privat més gran del país, i Quirónprevención.',
      headquartersCountry: 'DE',
      euEstablishment: 'DE',
      ownership: 'public',
      foundedYear: 1912,
      primaryRevenueModel: 'mixed',
      website: 'https://www.fresenius.com/',
      productDomains: ['fresenius.com', 'helios-gesundheit.de'],
    },
    {
      slug: 'idcq-hospitales-y-sanidad',
      name: 'Quirónsalud',
      legalName: 'IDCQ Hospitales y Sanidad, S.L.U.',
      parent: 'fresenius-se',
      description:
        'Societat titular de la major part dels hospitals i centres mèdics del grup Quirónsalud a Espanya i responsable del tractament de les credencials del Portal del Paciente. El desenvolupador de l’aplicació a l’App Store encara hi consta com a «idcsalud», el nom anterior del grup.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.quironsalud.com/',
      productDomains: ['quironsalud.com', 'quironsalud.es'],
      privacyContact: 'DPO@quironsalud.es',
    },
    {
      slug: 'quiron-prevencion',
      name: 'Quirónprevención',
      legalName: 'Quirón Prevención, S.L.U.',
      parent: 'fresenius-se',
      description:
        'Servei de prevenció de riscos laborals del grup Quirónsalud, nascut de la integració de diversos serveis de prevenció, entre els quals el de Fraternidad-Muprespa. Fa la vigilància de la salut de milions de persones treballadores per encàrrec de les seves empreses.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.quironprevencion.com/',
      productDomains: ['quironprevencion.com'],
      privacyContact: 'dpo@quironprevencion.com',
    },
    {
      slug: 'docplanner',
      name: 'Docplanner',
      legalName: 'Docplanner S.L.',
      description:
        'Grup europeu de programari i directoris mèdics amb seu a Barcelona i Varsòvia. Opera Doctoralia al sud d’Europa i Llatinoamèrica i ZnanyLekarz a Polònia, amb una base de dades de professionals sanitaris i opinions de pacients compartida entre marques.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 2012,
      primaryRevenueModel: 'subscription',
      website: 'https://www.docplanner.com/',
      productDomains: ['doctoralia.es', 'doctoralia.com', 'znanylekarz.pl', 'docplanner.com'],
      privacyContact: 'dpdes@docplanner.com',
    },
    {
      slug: 'doctoralia-internet',
      name: 'Doctoralia Internet',
      legalName: 'Doctoralia Internet, S.L.',
      parent: 'docplanner',
      description:
        'Societat espanyola del grup Docplanner responsable de Doctoralia a Espanya. Actua com a corresponsable del tractament amb la polonesa ZnanyLekarz sp. z o.o. per als tractaments centralitzats del grup.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      primaryRevenueModel: 'subscription',
      website: 'https://www.doctoralia.es/',
      productDomains: ['doctoralia.es'],
      privacyContact: 'dpdes@docplanner.com',
    },
    {
      slug: 'bupa',
      name: 'Bupa',
      legalName: 'The British United Provident Association Limited',
      description:
        'Grup britànic d’assegurances i serveis de salut sense accionistes: és una societat limitada per garantia que reinverteix els beneficis. Sanitas és la seva filial espanyola.',
      headquartersCountry: 'GB',
      ownership: 'private',
      foundedYear: 1947,
      primaryRevenueModel: 'subscription',
      website: 'https://www.bupa.com/',
      productDomains: ['bupa.com'],
    },
    {
      slug: 'sanitas',
      name: 'Sanitas',
      legalName: 'Sanitas, S.A. de Seguros',
      parent: 'bupa',
      description:
        'Asseguradora de salut espanyola del grup Bupa. A més de l’assegurança explota hospitals i centres dentals propis, de manera que la mateixa organització és pagadora i prestadora de l’assistència.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'subsidiary',
      foundedYear: 1954,
      primaryRevenueModel: 'subscription',
      website: 'https://www.sanitas.es/',
      productDomains: ['sanitas.es'],
      privacyContact: 'dpo@sanitas.es',
    },
    {
      slug: 'vithas-sanidad',
      name: 'Vithas',
      legalName: 'Vithas Sanidad, S.L.U.',
      description:
        'Grup hospitalari privat espanyol amb una vintena d’hospitals i una xarxa de centres ambulatoris. Té la seu social a Madrid i el domicili històric a Granada.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'mixed',
      website: 'https://www.vithas.es/',
      productDomains: ['vithas.es'],
      privacyContact: 'proteccion.datos@vithas.es',
    },
    {
      slug: 'digital-prescription-services',
      name: 'Digital Prescription Services',
      legalName: 'Digital Prescription Services, S.A.',
      description:
        'Societat madrilenya que opera REMPe, el sistema de recepta mèdica privada electrònica reconegut pels col·legis professionals de metges i farmacèutics. Connecta la prescripció del professional amb la dispensació a la farmàcia.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'unknown',
      website: 'https://rempe.es/',
      productDomains: ['rempe.es', 'rxdps.com'],
      privacyContact: 'dpd@rxdps.com',
    },
    {
      slug: 'koninklijke-philips',
      name: 'Philips',
      legalName: 'Koninklijke Philips N.V.',
      description:
        'Multinacional neerlandesa de tecnologia sanitària i productes de consum. La divisió de cura personal i maternitat publica les aplicacions Pregnancy+, Baby+ i Nutrition+.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'public',
      foundedYear: 1891,
      primaryRevenueModel: 'mixed',
      website: 'https://www.philips.com/',
      productDomains: ['philips.com', 'philips-digital.com'],
    },
    {
      slug: 'philips-consumer-lifestyle',
      name: 'Philips Consumer Lifestyle',
      legalName: 'Philips Consumer Lifestyle B.V.',
      parent: 'koninklijke-philips',
      description:
        'Societat neerlandesa responsable del tractament de les dades de les aplicacions de consum de Philips, entre elles Pregnancy+ («Embarazo+»). A l’App Store l’editora és Philips Digital UK Limited.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.philips.com/',
      productDomains: ['philips-digital.com'],
    },
    {
      slug: 'asisa',
      name: 'ASISA',
      legalName: 'ASISA, Asistencia Sanitaria Interprovincial de Seguros, S.A.U.',
      description:
        'Asseguradora de salut espanyola propietat de Lavinia, una cooperativa de metges. Amb el grup hospitalari HLA completa la cadena entre l’assegurança i l’assistència.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      foundedYear: 1971,
      primaryRevenueModel: 'subscription',
      website: 'https://www.asisa.es/',
      productDomains: ['asisa.es', 'hlahospitales.com'],
      privacyContact: 'DPO@grupoasisa.com',
    },
    {
      slug: 'nexten-labs',
      name: 'Nexten Labs',
      legalName: 'Nexten Labs Limited',
      description:
        'Editora de NovelBite, una aplicació de novel·les per capítols. No publica el domicili social ni cap identificació fiscal a la política de privadesa; l’únic contacte és una adreça de correu d’Outlook.',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://novel-bite.com/',
      productDomains: ['novel-bite.com'],
      privacyContact: 'novelbite@outlook.com',
    },
    {
      slug: 'adria-matz',
      name: 'Adrian Martinez Moreno',
      description:
        'Desenvolupador independent, autor de SlowRead. Publica l’aplicació a títol personal i n’explica el tractament de dades en una pàgina de Google Sites.',
      headquartersCountry: 'ES',
      euEstablishment: 'ES',
      leadSupervisoryAuthority: 'aepd',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://sites.google.com/view/sup-slowread',
      privacyContact: 'hello@adriamatz.com',
    },
  ],

  sources: [
    /* ───────────────────────── Quirónsalud ───────────────────────── */
    s('quironsalud-privacy-policy', 'Política de protección de datos', 'https://www.quironsalud.com/es/politica-proteccion-datos', 'Grupo Quirónsalud', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de privadesa dels centres sanitaris del grup. En traiem els responsables del tractament, les finalitats, les bases jurídiques, els terminis de conservació de la història clínica i les cessions a asseguradores.',
    }),
    s('quironsalud-portal-paciente', 'Condiciones de acceso y uso para usuarios del Portal del Paciente', 'https://www.quironsalud.es/idcsalud-client/cm/portal-paciente/condiciones', 'Grupo Quirónsalud', 'privacy-policy', 'primary', {
      language: 'es',
      publishedAt: '2026-02-01',
      summary:
        'Política específica del Portal del Paciente i de l’aplicació. És la font del perfilat per a bàners, de la geolocalització en segon pla, de la sincronització amb les aplicacions de salut del telèfon i dels terminis de les credencials.',
    }),
    s('quironsalud-app-store', 'Quirónsalud — Privacidad de la app', 'https://apps.apple.com/es/app/id983560647', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada per l’editora i descripció de l’aplicació. Serveix per a la matriu de dades i per comprovar que no es declara cap seguiment entre aplicacions.',
    }),
    s('quironsalud-security-txt', 'security.txt de quironsalud.com', 'https://www.quironsalud.com/.well-known/security.txt', 'Grupo Quirónsalud', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer de contacte de seguretat del domini. Redirigeix el report de vulnerabilitats al programa de Fresenius a HackerOne i al formulari corporatiu del grup alemany.',
    }),

    /* ───────────────────────── Doctoralia ───────────────────────── */
    s('doctoralia-privacy-policy', 'Política de privacidad de Doctoralia', 'https://www.doctoralia.es/privacidad', 'Doctoralia Internet, S.L.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del grup Docplanner per a Espanya. En traiem la corresponsabilitat amb ZnanyLekarz, els terminis de conservació, les transferències als Estats Units i el tracte que rep el perfil públic quan se’n demana l’eliminació.',
    }),
    s('doctoralia-app-store', 'Doctoralia - España — Privacidad de la app', 'https://apps.apple.com/es/app/id1444682103', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació. Només hi consten dades no vinculades amb la identitat, cosa que contrasta amb el que descriu la política.',
    }),
    s('doctoralia-security-txt', 'security.txt de doctoralia.es', 'https://www.doctoralia.es/.well-known/security.txt', 'Docplanner', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Fitxer de contacte de seguretat: una única adreça de correu del grup per reportar vulnerabilitats, sense política ni recompenses publicades.',
    }),

    /* ───────────────────────── MiSalud OHS ───────────────────────── */
    s('misalud-ohs-app-store', 'MiSalud OHS — Privacidad de la app', 'https://apps.apple.com/es/app/id1084430965', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa i descripció de l’aplicació. La descripció confirma la integració amb Apple Health i la lectura dels resultats dels reconeixements mèdics; l’etiqueta declara dades d’ús per rastrejar.',
    }),
    s('quironprevencion-privacy-policy', 'Política de privacidad de Quirónprevención', 'https://www.quironprevencion.com/es/politica-privacidad', 'Quirón Prevención, S.L.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política enllaçada des de la fitxa de l’App Store. Identifica el responsable, però només descriu els formularis del lloc web: no explica el tractament de les dades de salut de l’aplicació.',
    }),

    /* ───────────────────────── Mi Sanitas ───────────────────────── */
    s('mi-sanitas-app-store', 'Mi Sanitas — Privacidad de la app', 'https://apps.apple.com/es/app/id1079001524', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa i descripció. Declara dades de salut, financeres, sensibles i de contingut vinculades a la identitat, identificadors usats per rastrejar, i l’ús d’HealthKit i de la càmera, el micròfon i la ubicació.',
    }),
    s('sanitas-privacy-policy', 'Política de privacidad de Sanitas', 'https://www.sanitas.es/sanitas/seguros/es/politica-privacidad/index.html', 'Sanitas, S.A. de Seguros', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política enllaçada des de l’App Store. Cobreix el lloc web i la cotització d’assegurances, amb terminis concrets, però no descriu l’aplicació Mi Sanitas ni les dades de salut que hi circulen.',
    }),

    /* ───────────────────────── Vithas ───────────────────────── */
    s('vithas-privacy-policy', 'Política de privacidad de Vithas', 'https://www.vithas.es/politica-de-privacidad/', 'Vithas Sanidad, S.L.U.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del grup hospitalari. Identifica el responsable i el delegat de protecció de dades, i declara la compartició dins del grup Vithas i les garanties de les transferències internacionals.',
    }),
    s('vithas-app-store', 'Vithas — Privacidad de la app', 'https://apps.apple.com/es/app/id1489707682', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: dades de contacte i identificadors vinculats amb la identitat, i dades d’ús i diagnòstics sense vincular. No declara cap seguiment.',
    }),

    /* ───────────────────────── REMPe ───────────────────────── */
    s('rempe-privacy-policy', 'Política de privacidad — REMPe Ciudadano', 'https://resources.rempe.es/pages/citizen/privacy-policies.html', 'Digital Prescription Services, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política enllaçada des de la fitxa de l’App Store. Identifica el responsable i el canal de drets, però descriu el tractament en termes de registre d’usuari, sense detallar les dades de prescripció.',
    }),
    s('rempe-web-privacy-policy', 'Política de privacidad de rempe.es', 'https://rempe.es/politica-privacidad/', 'Digital Prescription Services, S.A.', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del lloc web de REMPe. Hi consten el NIF del responsable, la no-cessió a tercers com a regla general i els terminis de conservació lligats a l’alta com a usuari.',
    }),
    s('rempe-app-store', 'REMPe Pacientes — Privacidad de la app', 'https://apps.apple.com/es/app/id1632200425', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: només dades de contacte i diagnòstics, vinculats amb la identitat, i cap seguiment declarat.',
    }),

    /* ───────────────────────── Embarazo+ ───────────────────────── */
    s('embarazo-plus-privacy-policy', 'Pregnancy+ app privacy notice', 'https://www.philips.com/a-w/pregnancy-plus-app.html?locale=es&country=ES', 'Philips Consumer Lifestyle B.V.', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Avís de privadesa específic de l’aplicació. Identifica el responsable neerlandès, enumera les dades d’embaràs i de salut que es recullen i reconeix l’ús de Google Ad Manager i Ad Exchange per a la publicitat.',
    }),
    s('embarazo-plus-app-store', 'Embarazo + — Privacidad de la app', 'https://apps.apple.com/es/app/id505864483', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: identificadors usats per rastrejar, i ubicació, contacte, identificadors, ús, dades sensibles i diagnòstics vinculats amb la identitat.',
    }),
    s('philips-vulnerability-disclosure', 'Philips Coordinated Vulnerability Disclosure', 'https://www.philips.com/a-w/security/coordinated-vulnerability-disclosure.html', 'Koninklijke Philips N.V.', 'technical-doc', 'primary', {
      language: 'en',
      summary:
        'Política de divulgació coordinada de vulnerabilitats de Philips: canal xifrat amb PGP, acusament de rebuda en dos dies hàbils i reconeixement públic, però sense recompenses econòmiques.',
    }),

    /* ───────────────────────── ASISA ───────────────────────── */
    s('asisa-privacy-policy', 'Política de protección de datos de ASISA', 'https://www.asisa.es/politica-de-proteccion-de-datos', 'ASISA', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política de l’asseguradora. Identifica el responsable i el delegat de protecció de dades, enumera els destinataris (proveïdors sanitaris, reasseguradores, Europ Assistance, Teladoc Health) i les condicions de les transferències fora de l’EEE.',
    }),
    s('asisa-app-store', 'ASISA — Privacidad de la app', 'https://apps.apple.com/es/app/id444680982', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa de l’aplicació: declara la ubicació com a dada usada per rastrejar entre aplicacions i llocs web d’altres empreses, i historial de navegació sense vincular.',
    }),

    /* ───────────────────────── NovelBite ───────────────────────── */
    s('novelbite-privacy-policy', 'NovelBite Privacy Policy', 'https://novel-bite.com/en/privacy-policy', 'NovelBite', 'privacy-policy', 'primary', {
      language: 'en',
      summary:
        'Política de privadesa de l’aplicació. Reconeix la recollida d’identificadors publicitaris (IDFA i GAID), de geolocalització i de dades de navegació, les transferències internacionals amb clàusules contractuals tipus i el termini de 30 dies per esborrar el compte.',
    }),
    s('novelbite-app-store', 'NovelBite — Privacidad de la app', 'https://apps.apple.com/es/app/id6762946357', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificadors usats per rastrejar i identificadors vinculats amb la identitat. Serveix per contrastar-la amb el que declara la política.',
    }),

    /* ───────────────────────── SlowRead ───────────────────────── */
    s('slowread-privacy-policy', 'Política de privacidad de SlowRead', 'https://sites.google.com/view/privacy-policy-slowread/', 'Adrian Martinez Moreno', 'privacy-policy', 'primary', {
      language: 'es',
      summary:
        'Política del desenvolupador. Detalla què es guarda al dispositiu i què al núvol (Firebase), els proveïdors que fa servir (RevenueCat, PostHog, Google Books, Open Library, NeoDB) i el compromís de no compartir dades amb anunciants.',
    }),
    s('slowread-app-store', 'SlowRead — Privacidad de la app', 'https://apps.apple.com/es/app/id6763293288', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa: identificadors usats per rastrejar i compres, contacte, contingut, identificadors i dades d’ús vinculats amb la identitat. Contrasta amb el que diu la política.',
    }),
  ],

  apps: [
    /* ═══════════════════════════ Quirónsalud ═══════════════════════════ */
    {
      slug: 'quironsalud',
      name: 'Quirónsalud',
      company: 'idcq-hospitales-y-sanidad',
      categories: ['salut-i-assistencia-sanitaria'],
      tagline: 'La història clínica de tot el grup en una aplicació que també demana la ubicació en segon pla',
      summary:
        'L’aplicació és la porta del Portal del Paciente: ensenya en un sol lloc la història clínica repartida per tots els hospitals i centres del grup Quirónsalud. La política específica del portal reconeix dues coses que rarament es veuen escrites: que es fa perfilat dels usuaris per mostrar bàners de promoció de la salut i que, si s’hi consent, la ubicació es recull en segon pla «incluso cuando no se utilice el servicio». A canvi, els terminis de conservació estan detallats fins al minut i el dret d’accés a la història clínica queda cobert pel mateix portal.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      userBase: 'Pacients de més de 130 hospitals i centres del grup a Espanya',
      links: {
        website: 'https://www.quironsalud.com/',
        privacyPolicy: 'https://www.quironsalud.com/es/politica-proteccion-datos',
        privacyCenter: 'https://www.quironsalud.es/idcsalud-client/cm/portal-paciente/condiciones',
        appStore: 'https://apps.apple.com/es/app/id983560647',
      },
      accountRequired: f('yes', 'official', ['quironsalud-portal-paciente'], 'Cal registrar-se al Portal del Paciente; les credencials són gestionades per IDCQ Hospitales y Sanidad, S.L.U.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font ni cap llicència lliure; és programari privatiu distribuït només per les botigues d’aplicacions.', {
        licence: 'Privativa',
      }),
      dataSummary:
        'Una història clínica completa és el conjunt de dades més revelador que una persona pot tenir en un telèfon: diagnòstics, proves d’imatge, medicació i el calendari de visites. L’aplicació hi suma la ubicació dins de l’hospital i, si se sincronitza, l’activitat física i el son del rellotge o del telèfon.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['quironsalud-portal-paciente'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['quironsalud-portal-paciente'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['quironsalud-privacy-policy'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['quironsalud-privacy-policy'], note: 'Les dades identificatives del pacient són necessàries per lligar la història clínica de centres diferents.' }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'investigacio-i-estadistica'], sources: ['quironsalud-privacy-policy', 'quironsalud-portal-paciente'], note: 'La política admet el tractament amb fins d’investigació científica i de docència, amb anonimització o pseudonimització prèvia.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['quironsalud-portal-paciente'], note: 'Amb consentiment explícit: GPS, Bluetooth i Wi-Fi, i «en segundo plano en el dispositivo, incluso cuando no se utilice el servicio».' }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['quironsalud-portal-paciente'] }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['quironsalud-portal-paciente'], note: 'El portal té un espai on la persona pot pujar informació per compartir-la amb els centres.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['quironsalud-app-store'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['elaboracio-de-perfils', 'personalitzacio-de-continguts'], sources: ['quironsalud-portal-paciente'], note: 'La política parla literalment de «perfilado de los usuarios» per mostrar bàners i notificacions de promoció de la salut.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['quironsalud-app-store'] }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['quironsalud-privacy-policy'], note: 'Les dades transaccionals es comuniquen a l’asseguradora o mútua que ha de pagar l’assistència.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['quironsalud-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['quironsalud-app-store']),
        thirdPartyTrackersPresent: unknown('Les polítiques no enumeren els components de tercers incrustats a l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['quironsalud-portal-paciente', 'quironsalud-privacy-policy'], 'No hi ha publicitat de tercers, però sí promoció comercial del grup amb consentiment i bàners personalitzats dins del portal.'),
        profiling: f('yes', 'official', ['quironsalud-portal-paciente'], 'Perfilat dels usuaris per mostrar bàners i notificacions, amb el consentiment del registre o l’interès legítim com a base.'),
        aiTraining: unknown('La política preveu transcriure i anonimitzar consultes gravades, però no diu si el resultat s’utilitza per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['quironsalud-privacy-policy'], 'Asseguradores i mútues per validar el pagament, proveïdors de material sanitari i ambulàncies, i encarregats del tractament informàtics.'),
        intraGroupSharing: f('yes', 'official', ['quironsalud-privacy-policy', 'quironsalud-portal-paciente'], 'Les dades del pacient són visibles per la resta de centres del grup sobre la base de l’interès legítim.'),
        dataBrokerSales: f('no', 'official', ['quironsalud-privacy-policy'], 'La política limita les comunicacions als supòsits legals i als destinataris que enumera; no preveu cap venda de dades.'),
        internationalTransfers: f('yes', 'official', ['quironsalud-privacy-policy'], 'Alguns tractaments mèdics i d’investigació poden comportar transferències, sempre amb clàusules contractuals tipus o decisió d’adequació.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['quironsalud-privacy-policy', 'quironsalud-portal-paciente'], 'És una de les polítiques més detallades del lot: terminis concrets per a cada finalitat.'),
        dataAfterDeletion: f('yes', 'official', ['quironsalud-portal-paciente', 'quironsalud-privacy-policy'], 'Donar-se de baixa del portal fa perdre l’accés, però la història clínica es conserva als centres pel termini legal.'),
        periods: [
          { dataType: 'dades-de-salut', period: 'Mínim 5 anys des de l’alta de cada procés assistencial, i fins als 15 anys de prescripció legal', sources: ['quironsalud-privacy-policy'] },
          { dataType: 'veu-i-audio', period: 'Gravació de la consulta: màxim 4 hores fins a la transcripció; la transcripció, 14 dies', sources: ['quironsalud-privacy-policy'] },
          { period: 'Gravació de trucades: 6 mesos', sources: ['quironsalud-privacy-policy'] },
          { period: 'Imatges de videovigilància: 30 dies', sources: ['quironsalud-privacy-policy'] },
          { period: 'Registres d’accés a la informació del portal: 5 anys', sources: ['quironsalud-portal-paciente'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['quironsalud-portal-paciente']),
        selfService: f('partial', 'official', ['quironsalud-portal-paciente'], 'La política reconeix la baixa del portal i la supressió de les credencials, però el camí documentat passa pel formulari de contacte del portal, no per un botó dins de l’aplicació.'),
        directUrl: 'https://www.quironsalud.com/es/portal-paciente/contactar',
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Entra al Portal del Paciente amb les teves credencials.',
          'Obre el formulari de contacte del portal a https://www.quironsalud.com/es/portal-paciente/contactar.',
          'Demana la baixa com a usuari del portal o la supressió de les dades de les credencials.',
          'Si vols exercir drets sobre la història clínica, adreça’t al Servicio de Atención al Paciente del centre o escriu a DPO@quironsalud.es.',
        ],
        obstacles:
          'Cal distingir dues coses que la política sí que separa però que no són evidents per a qui fa servir l’aplicació: donar-se de baixa del portal no esborra la història clínica, que té un termini de conservació legal propi.',
        dataRetained: 'La història clínica als centres sanitaris i els registres d’accés al portal, durant els terminis legals.',
        sources: ['quironsalud-portal-paciente', 'quironsalud-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['quironsalud-portal-paciente'], 'El portal permet consultar, guardar, imprimir i descarregar tot l’historial, encara que estigui repartit en diversos centres.', {
          url: 'https://www.quironsalud.com/es/portal-paciente',
        }),
        exportFormatQuality: 'mixed',
        rightsExercise: f('yes', 'official', ['quironsalud-privacy-policy'], 'Formulari descarregable, atenció presencial al centre i delegat de protecció de dades amb adreça pròpia.', {
          url: 'mailto:DPO@quironsalud.es',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['quironsalud-privacy-policy'], 'Les comunicacions comercials depenen d’un consentiment addicional revocable, però el perfilat per a bàners dins del portal s’empara també en l’interès legítim.'),
        telemetryOptOut: unknown('No consta cap control per desactivar la recollida de dades d’ús i de diagnòstic.'),
        granularControls: f('partial', 'official', ['quironsalud-portal-paciente'], 'Hi ha preferències per decidir amb quins centres es comparteix la informació pujada i consentiments separats per a la geolocalització i la sincronització amb les aplicacions de salut.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de poder llegir la història clínica per mostrar-la; el xifratge d’extrem a extrem no és aplicable a aquest model.'),
        transportEncryption: f('yes', 'editorial', [], 'El portal i l’aplicació només es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge de les dades en repòs.'),
        mfa: unknown('No consta si el portal ofereix un segon factor; el Face ID o el Touch ID de l’aplicació només desbloquegen el dispositiu.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: f('yes', 'official', ['quironsalud-security-txt'], 'El security.txt del domini remet al programa de Fresenius a HackerOne, tot i que el fitxer té la data de caducitat vençuda.', {
          url: 'https://hackerone.com/fresenius',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['quironsalud-security-txt']),
      },
      alternatives: [
        {
          app: 'salud-andalucia',
          comparability: 'partial',
          rationale: 'Per a qui s’atén per la sanitat pública, l’aplicació autonòmica cobreix cita, recepta i informes sense perfilat comercial.',
          tradeOffs: 'Només val per a la població atesa pel Servicio Andaluz de Salud i no mostra l’activitat als centres privats.',
        },
        {
          app: 'tarjeta-sanitaria',
          comparability: 'partial',
          rationale: 'Dona accés a la targeta i a part de la informació clínica pública sense crear un compte comercial.',
          tradeOffs: 'No substitueix l’accés a la història clínica d’un grup privat.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La troballa d’aquesta fitxa és la distància entre l’etiqueta de l’App Store i la política: l’etiqueta classifica les dades de salut com a «no vinculades amb la teva identitat», cosa difícil de sostenir en una aplicació que mostra la història clínica nominativa. La política del Portal del Paciente, en canvi, és molt més precisa que la mitjana del sector.',
        openQuestions: [
          'Per què l’etiqueta de l’App Store declara les dades de salut com a no vinculades amb la identitat?',
          'Ofereix el Portal del Paciente un segon factor d’autenticació?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ Doctoralia ═══════════════════════════ */
    {
      slug: 'doctoralia',
      name: 'Doctoralia',
      company: 'doctoralia-internet',
      categories: ['salut-i-assistencia-sanitaria'],
      tagline: 'Reservar visita deixa un rastre de sis anys i una opinió que pot reaparèixer',
      summary:
        'Doctoralia és el directori mèdic i el motor de reserva de visites més gran d’Espanya, i pertany al grup Docplanner, que el gestiona conjuntament amb la seva germana polonesa ZnanyLekarz. La combinació de cerques d’especialistes, visites reservades i opinions publicades és un historial mèdic indirecte. La política reconeix que les dades es conserven la vida del compte més sis anys i que, si es demana l’eliminació, el perfil deixa de ser públic però es manté internament.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      userBase: 'Desenes de milions de visites mensuals al grup Docplanner',
      links: {
        website: 'https://www.doctoralia.es/',
        privacyPolicy: 'https://www.doctoralia.es/privacidad',
        appStore: 'https://apps.apple.com/es/app/id1444682103',
      },
      accountRequired: f('partial', 'official', ['doctoralia-privacy-policy'], 'Es pot consultar el directori sense compte, però per reservar visita o publicar una opinió cal identificar-se.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'Qui consultes i quan hi vas diu quina malaltia tens sense que calgui escriure-la. Doctoralia acumula aquesta seqüència durant anys i hi afegeix les opinions signades, que són públiques i poden tornar a aparèixer si el professional es torna a donar d’alta.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['doctoralia-privacy-policy'], note: 'Es comunica al professional o al centre per gestionar la cita.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['doctoralia-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['doctoralia-privacy-policy'] }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['doctoralia-privacy-policy'], note: 'L’especialitat reservada i el motiu de la consulta revelen informació de salut encara que no s’etiqueti com a tal.' }),
        row('publicacions-i-comentaris', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['doctoralia-privacy-policy'], note: 'Les opinions són públiques i poden tornar a publicar-se si el professional crea un perfil nou.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['doctoralia-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['doctoralia-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['doctoralia-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['doctoralia-app-store'], note: 'L’etiqueta de l’App Store classifica els identificadors com a no vinculats amb la identitat.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['doctoralia-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['millora-del-producte'], sources: ['doctoralia-app-store'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['doctoralia-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['doctoralia-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar entre aplicacions i llocs web d’altres empreses.'),
        advertisingIdentifiers: f('no', 'official', ['doctoralia-app-store']),
        thirdPartyTrackersPresent: f('yes', 'official', ['doctoralia-privacy-policy'], 'La política reconeix l’ús de galetes i tecnologies similars i de proveïdors d’autenticació externs com Google i Apple.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['doctoralia-privacy-policy'], 'La política descriu publicitat «sin realizar perfiles de usuarios», emparada en l’interès legítim.'),
        profiling: f('partial', 'official', ['doctoralia-privacy-policy'], 'Hi ha anàlisi automatitzada per classificar oportunitats comercials amb els professionals, però la política afirma que no produeix efectes jurídics sobre les persones.'),
        aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['doctoralia-privacy-policy'], 'Professionals i centres per gestionar la reserva, proveïdors d’allotjament, pagaments i suport, i possibles adquirents en cas de fusió.'),
        intraGroupSharing: f('yes', 'official', ['doctoralia-privacy-policy'], 'Corresponsabilitat amb ZnanyLekarz sp. z o.o. per als tractaments centralitzats del grup Docplanner.'),
        dataBrokerSales: f('no', 'official', ['doctoralia-privacy-policy'], 'No hi figura cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['doctoralia-privacy-policy'], 'Transferències als Estats Units, el Regne Unit i Austràlia, amb clàusules contractuals tipus o el marc de privadesa UE-EUA.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hem trobat cap informe de transparència del grup Docplanner.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['doctoralia-privacy-policy'], 'La política dona terminis numèrics per a cada categoria de tractament.'),
        dataAfterDeletion: f('yes', 'official', ['doctoralia-privacy-policy'], 'Després d’eliminar el perfil públic, les dades es mantenen internament fins a completar la vida del compte més sis anys.'),
        periods: [
          { period: 'Dades del compte: la vida útil del compte més 6 anys', sources: ['doctoralia-privacy-policy'] },
          { period: 'Visitants del web: 1 any', sources: ['doctoralia-privacy-policy'] },
          { period: 'Prospecció comercial: 3 anys des de l’últim contacte', sources: ['doctoralia-privacy-policy'] },
          { period: 'Gravacions: 3 anys', sources: ['doctoralia-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['doctoralia-privacy-policy']),
        selfService: unknown('No hem pogut verificar si hi ha un botó d’eliminació dins de l’aplicació: les pàgines d’ajuda del servei no responien durant la revisió.'),
        difficulty: 'medium',
        requiresSupportContact: true,
        steps: [
          'Escriu a contacto-es@doctoralia.es o a dpdes@docplanner.com invocant el dret de supressió de l’article 17 del RGPD.',
          'Indica l’adreça electrònica del compte i si vols que es retiri també el perfil públic.',
          'El grup es compromet a respondre en el termini màxim d’un mes.',
        ],
        obstacles:
          'La supressió no és completa: la política diu que el perfil deixa de ser públic però es conserva internament, i que les opinions poden tornar a publicar-se si es crea un perfil nou.',
        dataRetained: 'Dades del compte durant sis anys després de la vida útil i opinions publicades.',
        sources: ['doctoralia-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['doctoralia-privacy-policy'], 'La política reconeix el dret a rebre les dades en un format estructurat, però no descriu cap eina d’autoservei.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['doctoralia-privacy-policy'], 'Adreça de contacte del país i delegat de protecció de dades del grup, amb un mes de termini de resposta.', {
          url: 'mailto:dpdes@docplanner.com',
          responseTimeDays: 30,
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['doctoralia-privacy-policy'], 'Com que la publicitat es declara no personalitzada, l’única palanca és oposar-se al màrqueting basat en interès legítim o retirar el consentiment.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica dins de l’aplicació.'),
        granularControls: f('partial', 'official', ['doctoralia-privacy-policy'], 'Hi ha consentiments separats per a màrqueting i galetes, però no un panell de privadesa per finalitat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de poder llegir les reserves i les opinions per prestar el servei.'),
        transportEncryption: f('yes', 'editorial', [], 'El lloc i l’aplicació es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No consta si el compte de pacient admet un segon factor.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: f('partial', 'official', ['doctoralia-security-txt'], 'Hi ha un security.txt amb una adreça per reportar vulnerabilitats, però cap política publicada ni programa de recompenses.', {
          url: 'mailto:bugreporting@docplanner.com',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['doctoralia-security-txt']),
      },
      alternatives: [
        {
          app: 'booksy',
          comparability: 'complementary',
          rationale: 'Per a serveis de benestar i estètica que no impliquen dades de salut, una plataforma de reserves genèrica evita crear un historial mèdic indirecte.',
          tradeOffs: 'No serveix per a consultes mèdiques ni per accedir al quadre mèdic d’una asseguradora.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política del grup és clara i detallada, però parla sobretot dels professionals subscriptors. El que interessa més a qui fa servir l’aplicació —que la seqüència d’especialistes consultats és de fet informació de salut— no s’hi tracta de manera explícita.',
        openQuestions: [
          'Es pot eliminar el compte de pacient des de dins de l’aplicació?',
          'Quin és exactament l’abast de la retenció interna del perfil després de demanar-ne l’eliminació?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ MiSalud OHS ═══════════════════════════ */
    {
      slug: 'misalud-ohs',
      name: 'MiSalud OHS',
      company: 'quiron-prevencion',
      categories: ['salut-i-assistencia-sanitaria', 'benestar-i-activitat-fisica'],
      tagline: 'Els resultats del reconeixement mèdic laboral, amb una política que només parla del web',
      summary:
        'MiSalud OHS és l’aplicació amb què Quirónprevención ensenya a les persones treballadores el resultat del seu reconeixement mèdic laboral i el seu històric de paràmetres de salut, i que llegeix i escriu a l’Apple Health. La política enllaçada des de la fitxa de l’App Store, però, descriu només els formularis del lloc web corporatiu: no hi ha cap document públic que expliqui què passa amb les dades de salut que hi ha dins de l’aplicació. Això fa que la fitxa quedi amb molts apartats desconeguts.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      userBase: 'Persones treballadores d’empreses que tenen contractada la vigilància de la salut amb Quirónprevención',
      links: {
        website: 'https://www.quironprevencion.com/',
        privacyPolicy: 'https://www.quironprevencion.com/es/politica-privacidad',
        appStore: 'https://apps.apple.com/es/app/id1084430965',
      },
      accountRequired: f('yes', 'official', ['misalud-ohs-app-store'], 'L’aplicació mostra el resultat dels reconeixements d’una persona concreta, de manera que cal identificar-s’hi.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'La vigilància de la salut laboral és un dels pocs contextos on un tercer —l’empresa— és qui encarrega l’examen mèdic. Que el resultat, l’històric de paràmetres i les dades d’Apple Health acabin en una aplicació de l’empresa proveïdora fa especialment important saber qui hi té accés, i això no consta enlloc.',
      dataCollection: [
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', level: 'official', purposes: ['prestacio-del-servei'], sources: ['misalud-ohs-app-store'], note: 'La descripció oficial parla de visualitzar els resultats dels reconeixements mèdics i l’històric de paràmetres de salut, i de sincronitzar activitat cardíaca i entrenaments amb l’Apple Health.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', level: 'official', purposes: ['prestacio-del-servei'], sources: ['misalud-ohs-app-store'] }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', level: 'official', purposes: ['prestacio-del-servei'], sources: ['misalud-ohs-app-store'], note: 'L’aplicació permet emmagatzemar informes mèdics i proves d’imatge.' }),
        row('ubicacio-aproximada', 'optional', { linked: 'unknown', tracking: 'no', shared: 'unknown', level: 'official', purposes: ['prestacio-del-servei'], sources: ['misalud-ohs-app-store'], note: 'Per buscar el centre més proper on demanar cita.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'unknown', level: 'official', purposes: ['mesura-i-analisi-dus'], sources: ['misalud-ohs-app-store'], note: 'És l’única categoria que l’etiqueta declara com a utilitzada per rastrejar.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', level: 'official', purposes: ['millora-del-producte'], sources: ['misalud-ohs-app-store'] }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', level: 'official', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['misalud-ohs-app-store'], note: 'Face ID i Touch ID s’integren per desbloquejar l’aplicació; la comprovació la fa el sistema operatiu, no l’aplicació.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['misalud-ohs-app-store'], 'L’etiqueta declara les dades d’ús com a utilitzades per rastrejar entre aplicacions i llocs web d’altres empreses, cosa inesperada en un servei de vigilància de la salut.'),
        advertisingIdentifiers: unknown('L’etiqueta no declara cap identificador publicitari, però tampoc explica amb quina tècnica es fa el seguiment.'),
        thirdPartyTrackersPresent: unknown('No consta cap llista de components de tercers.'),
      },
      dataUses: {
        targetedAdvertising: unknown('No consta si les dades d’ús declarades com a rastreig alimenten publicitat.'),
        profiling: unknown('La política publicada no descriu cap perfilat, però tampoc cobreix l’aplicació.'),
        aiTraining: unknown('No consta.'),
      },
      sharing: {
        thirdPartySharing: unknown('La política publicada no enumera els destinataris de les dades de l’aplicació. La qüestió clau —què veu l’empresa ocupadora— queda sense resposta pública.'),
        intraGroupSharing: unknown('No consta si les dades es comparteixen amb la resta del grup Quirónsalud.'),
        dataBrokerSales: unknown('No consta.'),
        internationalTransfers: unknown('La política publicada no tracta les transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['quironprevencion-privacy-policy'], 'La política només dona terminis genèrics («el tiempo mínimo necesario») per als formularis del web, i cap per a les dades de salut de l’aplicació.'),
        dataAfterDeletion: unknown('No consta què es conserva si es deixa de fer servir l’aplicació.'),
      },
      accountDeletion: {
        possible: unknown('No hem trobat cap document que descrigui com donar de baixa el compte de l’aplicació.'),
        selfService: unknown('No consta.'),
        difficulty: 'unknown',
        steps: [
          'Escriu al delegat de protecció de dades a dpo@quironprevencion.com invocant el dret de supressió de l’article 17 del RGPD.',
        ],
        obstacles:
          'La vigilància de la salut laboral té terminis de conservació imposats per la normativa de prevenció de riscos, de manera que la supressió del compte de l’aplicació no equival a esborrar l’historial mèdic laboral.',
        sources: ['quironprevencion-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('No consta cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['quironprevencion-privacy-policy'], 'Hi ha un delegat de protecció de dades amb adreça pròpia.', {
          url: 'mailto:dpo@quironprevencion.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No consta.'),
        telemetryOptOut: unknown('No consta cap control per desactivar les dades d’ús que l’etiqueta declara com a rastreig.'),
        granularControls: unknown('No consta cap panell de privadesa.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de poder llegir els resultats del reconeixement per mostrar-los.'),
        transportEncryption: f('yes', 'editorial', [], 'Els serveis del grup es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('No consta.'),
        mfa: f('partial', 'official', ['misalud-ohs-app-store'], 'La descripció oficial esmenta la integració amb Face ID i Touch ID, que bloqueja l’aplicació però no és un segon factor del compte.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('La política de seguretat del grup Quirónsalud no cobreix explícitament aquest domini.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal de divulgació de vulnerabilitats propi de quironprevencion.com.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La fitxa queda deliberadament plena de desconeguts. El problema documentat és precisament aquest: una aplicació que ensenya resultats de reconeixements mèdics i llegeix l’Apple Health enllaça com a política de privadesa un document que només parla dels formularis del web corporatiu.',
        openQuestions: [
          'Quin document regeix el tractament de les dades de salut dins de l’aplicació MiSalud OHS?',
          'Què pot veure l’empresa ocupadora del contingut que hi ha a l’aplicació?',
          'Per què l’etiqueta de l’App Store declara dades d’ús utilitzades per rastrejar en un servei de vigilància de la salut?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ Mi Sanitas ═══════════════════════════ */
    {
      slug: 'mi-sanitas',
      name: 'Mi Sanitas',
      company: 'sanitas',
      categories: ['salut-i-assistencia-sanitaria', 'banca-i-finances'],
      tagline: 'L’etiqueta declara dades sensibles i identificadors de rastreig; la política enllaçada parla de cotitzar una assegurança',
      summary:
        'Mi Sanitas concentra el quadre mèdic, les cites, els informes, les receptes, els reemborsaments i els rebuts de l’assegurança, i hi afegeix serveis de medicina digital com la videoconsulta, l’avaluador de símptomes i la mesura de constants vitals. La descripció oficial confirma que fa servir HealthKit, la càmera, el micròfon i la ubicació. La política enllaçada des de l’App Store, en canvi, està escrita per al web de contractació: no esmenta l’aplicació, ni HealthKit, ni les dades de salut.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      userBase: 'Clients de l’assegurança de salut de Sanitas a Espanya',
      links: {
        website: 'https://www.sanitas.es/',
        privacyPolicy: 'https://www.sanitas.es/sanitas/seguros/es/politica-privacidad/index.html',
        appStore: 'https://apps.apple.com/es/app/id1079001524',
      },
      accountRequired: f('yes', 'official', ['mi-sanitas-app-store'], 'L’aplicació és per a clients amb pòlissa; cal identificar-se per veure’n les gestions.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'És la combinació més àmplia del lot: dades clíniques, dades econòmiques de la pòlissa i dades de sensors del telèfon. Els informes mèdics, els copagaments i les constants vitals junts descriuen tant l’estat de salut com el cost que té per a l’asseguradora.',
      dataCollection: [
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-sanitas-app-store'], note: 'L’etiqueta declara «Salud y forma física» vinculada amb la identitat; la descripció confirma l’ús d’HealthKit i de l’avaluador de símptomes.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['mi-sanitas-app-store'], note: 'Reemborsaments, rebuts i copagaments.' }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['sanitas-privacy-policy', 'mi-sanitas-app-store'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['sanitas-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['sanitas-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['sanitas-privacy-policy'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-sanitas-app-store'], note: 'La càmera i la galeria serveixen per adjuntar documents; el micròfon, per a la videoconsulta.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['mi-sanitas-app-store'], note: 'L’etiqueta declara identificadors com a dades utilitzades per rastrejar.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['sanitas-privacy-policy', 'mi-sanitas-app-store'], note: 'La política del web esmenta l’identificador de publicitat entre les dades de navegació.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['mi-sanitas-app-store'], note: 'Per mostrar els metges i els centres més propers.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['mesura-i-analisi-dus'], sources: ['mi-sanitas-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['sanitas-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['mi-sanitas-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar entre aplicacions i llocs web d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['sanitas-privacy-policy'], 'La política enumera l’identificador de publicitat entre les dades de navegació que es tracten.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['sanitas-privacy-policy'], 'La política descriu galetes i tecnologies similars de tercers subjectes a consentiment.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['sanitas-privacy-policy'], 'Les comunicacions comercials depenen del consentiment exprés, però la política admet el tractament de l’identificador de publicitat.'),
        profiling: unknown('La política no descriu cap elaboració de perfils ni decisions automatitzades.'),
        aiTraining: unknown('La política no diu si les dades alimenten els serveis de medicina digital basats en models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['sanitas-privacy-policy'], 'Encarregats del tractament que presten serveis i administracions públiques quan ho exigeix la llei.'),
        intraGroupSharing: f('yes', 'official', ['sanitas-privacy-policy'], 'Les dades es poden comunicar a altres entitats del grup Sanitas amb finalitats administratives.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
        internationalTransfers: f('partial', 'official', ['sanitas-privacy-policy'], 'La política admet destinataris dins o fora de l’Espai Econòmic Europeu i remet el detall a una pàgina separada, sense concretar el mecanisme al document principal.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència del grup.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['sanitas-privacy-policy'], 'Hi ha terminis concrets per a la cotització (10 dies) i per a les comunicacions comercials, però cap per a les dades clíniques de l’aplicació.'),
        dataAfterDeletion: unknown('La política no descriu què es conserva quan s’abandona l’aplicació o es dona de baixa la pòlissa.'),
        periods: [
          { period: 'Dades de cotització d’una assegurança: 10 dies', sources: ['sanitas-privacy-policy'] },
          { period: 'Comunicacions comercials: fins a la retirada del consentiment', sources: ['sanitas-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['sanitas-privacy-policy'], 'El dret de supressió es reconeix a la política, sense cap eina d’autoservei documentada.'),
        selfService: unknown('No hem trobat cap pàgina que descrigui l’eliminació del compte de Mi Sanitas des de l’aplicació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a lopd@sanitas.es o a dpo@sanitas.es indicant que vols exercir el dret de supressió.',
          'Especifica si vols donar de baixa només l’accés a Mi Sanitas o tot el tractament associat a la pòlissa.',
        ],
        obstacles:
          'La baixa de l’aplicació no es pot separar fàcilment de la relació contractual: mentre hi ha pòlissa, l’asseguradora manté una base jurídica pròpia per tractar les dades.',
        dataRetained: 'Dades contractuals i de facturació durant els terminis legals.',
        sources: ['sanitas-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['sanitas-privacy-policy'], 'El dret de portabilitat es reconeix, però no hi ha cap eina d’exportació descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['sanitas-privacy-policy'], 'Dues adreces publicades: lopd@sanitas.es per a l’exercici de drets i dpo@sanitas.es per al delegat de protecció de dades.', {
          url: 'mailto:dpo@sanitas.es',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['sanitas-privacy-policy'], 'El consentiment per a comunicacions comercials i per a galetes es pot retirar, però no hi ha cap control equivalent dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica de l’aplicació.'),
        granularControls: f('partial', 'official', ['mi-sanitas-app-store'], 'L’aplicació demana permisos separats per a calendari, ubicació, fotos, càmera, micròfon i HealthKit, que es poden revocar des del sistema operatiu.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: unknown('No consta si la videoconsulta utilitza xifratge d’extrem a extrem.'),
        transportEncryption: f('yes', 'editorial', [], 'Els serveis de Sanitas es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('No consta informació pública sobre el xifratge en repòs.'),
        mfa: unknown('No consta si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories de seguretat independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni security.txt al domini.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'salud-andalucia',
          comparability: 'partial',
          rationale: 'Per a les gestions clíniques bàsiques, els serveis públics autonòmics no declaren identificadors utilitzats per rastrejar.',
          tradeOffs: 'No gestionen la pòlissa privada, els reemborsaments ni el quadre mèdic.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La troballa més rellevant és el desajust documental: l’etiqueta de l’App Store declara dades de salut, financeres i sensibles vinculades amb la identitat i identificadors usats per rastrejar, mentre que el document que la fitxa enllaça com a política de privadesa és el del web de contractació i no esmenta ni l’aplicació ni cap d’aquestes dades.',
        openQuestions: [
          'Quin document regula el tractament de les dades clíniques dins de Mi Sanitas?',
          'Què són les «dades sensibles» que declara l’etiqueta de l’App Store?',
          'Amb quin mecanisme es fan les transferències fora de l’Espai Econòmic Europeu?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ Vithas ═══════════════════════════ */
    {
      slug: 'vithas',
      name: 'Vithas',
      company: 'vithas-sanidad',
      categories: ['salut-i-assistencia-sanitaria'],
      tagline: 'L’etiqueta més sòbria del lot, amb una política escrita per al web i no per a l’aplicació',
      summary:
        'L’aplicació del grup hospitalari Vithas serveix per demanar cita, consultar l’historial i comunicar-se amb els centres. L’etiqueta de l’App Store és de les més contingudes que hem vist en aquest lot: dades de contacte i identificadors vinculats amb la identitat, dades d’ús i diagnòstics sense vincular, i cap seguiment. La política pública, en canvi, està pensada per als formularis del lloc web i no descriu el tractament de la informació clínica que mostra l’aplicació.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      userBase: 'Pacients de la xarxa d’hospitals i centres Vithas a Espanya',
      links: {
        website: 'https://www.vithas.es/',
        privacyPolicy: 'https://www.vithas.es/politica-de-privacidad/',
        appStore: 'https://apps.apple.com/es/app/id1489707682',
      },
      accountRequired: f('yes', 'official', ['vithas-app-store'], 'L’etiqueta declara dades de contacte i identificadors vinculats amb la identitat, propis d’un servei amb registre.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'Encara que l’etiqueta sigui breu, saber en quin hospital i amb quina especialitat es demana cita continua sent informació de salut. La manca d’una política específica impedeix saber quant de temps es conserva aquesta informació i qui hi accedeix dins del grup.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vithas-app-store', 'vithas-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vithas-app-store', 'vithas-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vithas-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['vithas-app-store'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], level: 'editorial', note: 'L’etiqueta no declara dades de salut, però una aplicació de cites i historial hospitalari en tracta per força. Ho anotem com a lectura editorial, no com a declaració oficial.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['mesura-i-analisi-dus'], sources: ['vithas-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['vithas-app-store'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['vithas-privacy-policy'], note: 'La política descriu galetes subjectes a consentiment exprés al lloc web.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['vithas-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['vithas-app-store']),
        thirdPartyTrackersPresent: f('partial', 'official', ['vithas-privacy-policy'], 'La política reconeix galetes i proveïdors de màrqueting al lloc web, sense dir si també hi ha components dins de l’aplicació.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política esmenta proveïdors de màrqueting, però no descriu publicitat personalitzada dins de l’aplicació.'),
        profiling: unknown('No consta cap elaboració de perfils.'),
        aiTraining: unknown('No consta.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['vithas-privacy-policy'], 'Autoritats competents quan la llei ho exigeix, i proveïdors de tecnologia, màrqueting i consultoria sota supervisió de Vithas.'),
        intraGroupSharing: f('yes', 'official', ['vithas-privacy-policy'], 'Compartició amb les entitats que formen el grup Vithas per a la gestió administrativa.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
        internationalTransfers: f('partial', 'official', ['vithas-privacy-policy'], 'La política diu que, si n’hi ha, s’empararan en decisions d’adequació de la Comissió Europea o en altres garanties del RGPD.', {
          mechanism: 'adequacy',
        }),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['vithas-privacy-policy'], 'La política només diu que les dades es conserven «mentre sigui necessari» per gestionar la sol·licitud o la cita, sense cap termini numèric.'),
        dataAfterDeletion: unknown('No consta què es conserva després de donar-se de baixa.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['vithas-privacy-policy'], 'El dret de supressió es reconeix a la política i s’exerceix davant del delegat de protecció de dades.'),
        selfService: unknown('No hem trobat cap pàgina que descrigui l’eliminació del compte des de dins de l’aplicació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a proteccion.datos@vithas.es invocant el dret de supressió de l’article 17 del RGPD.',
          'Si ets pacient d’un centre concret, adreça-t’hi també per als drets sobre la història clínica.',
        ],
        obstacles: 'La història clínica hospitalària té un termini de conservació legal propi que la supressió del compte no afecta.',
        sources: ['vithas-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['vithas-privacy-policy'], 'La portabilitat es reconeix entre els drets, però no hi ha cap eina d’autoservei descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['vithas-privacy-policy'], 'Adreça electrònica del delegat de protecció de dades i adreça postal publicades.', {
          url: 'mailto:proteccion.datos@vithas.es',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No consta cap control de publicitat dins de l’aplicació.'),
        telemetryOptOut: unknown('No consta cap control per desactivar les dades d’ús i de diagnòstic.'),
        granularControls: unknown('No consta cap panell de privadesa dins de l’aplicació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de poder llegir les cites i els informes per mostrar-los.'),
        transportEncryption: f('yes', 'editorial', [], 'Els serveis de Vithas es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('No consta.'),
        mfa: unknown('No consta si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hi ha cap security.txt al domini ni cap programa de recompenses documentat.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'quironsalud',
          comparability: 'partial',
          rationale: 'Un altre grup hospitalari privat amb una política del portal del pacient molt més detallada, útil com a punt de comparació.',
          tradeOffs: 'Només serveix si t’atens en centres del grup Quirónsalud, i hi ha perfilat per a bàners.',
        },
      ],
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'L’etiqueta de privadesa és sòbria i creïble per a una aplicació de cites, però la manca d’un document que cobreixi l’aplicació deixa sense resposta les preguntes centrals: terminis, accessos dins del grup i seguretat.',
        openQuestions: [
          'Hi ha una política de privadesa específica de l’aplicació o del portal del pacient de Vithas?',
          'Quin tractament rep la informació clínica que es consulta des de l’aplicació?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ REMPe Pacientes ═══════════════════════════ */
    {
      slug: 'rempe-pacientes',
      name: 'REMPe Pacientes',
      company: 'digital-prescription-services',
      categories: ['salut-i-assistencia-sanitaria'],
      tagline: 'La recepta privada electrònica, amb una política que parla de registres i no de medicaments',
      summary:
        'REMPe és el sistema de recepta mèdica privada electrònica que connecta la prescripció del metge amb la dispensació a la farmàcia, i aquesta és l’aplicació per a pacients. La medicació prescrita és de les dades més sensibles que existeixen. La política pública és breu: identifica bé el responsable —Digital Prescription Services, S.A.— i el canal de drets, afirma que no se cedeixen dades a tercers com a regla general, però descriu el tractament en termes de registre d’usuari i no detalla què passa amb les prescripcions.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      userBase: 'Pacients amb receptes privades electròniques emeses per professionals adherits a REMPe',
      links: {
        website: 'https://rempe.es/',
        privacyPolicy: 'https://resources.rempe.es/pages/citizen/privacy-policies.html',
        appStore: 'https://apps.apple.com/es/app/id1632200425',
      },
      accountRequired: f('yes', 'official', ['rempe-web-privacy-policy'], 'El tractament descrit es basa en el consentiment explícit atorgat en registrar-se com a usuari.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'La llista de medicaments prescrits a una persona permet deduir-ne els diagnòstics amb molta precisió: tractaments crònics, salut mental, fertilitat o VIH. Per això importa tant que la política no digui durant quant de temps es conserva la prescripció ni qui hi té accés a banda de la farmàcia que dispensa.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['rempe-app-store', 'rempe-privacy-policy'], note: 'L’etiqueta declara dades de contacte vinculades amb la identitat.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['rempe-app-store', 'rempe-web-privacy-policy'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['rempe-web-privacy-policy'], note: 'El sistema gestiona «prescripciones y dispensaciones de los medicamentos»; la medicació és una dada de salut de l’article 9 del RGPD.' }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], level: 'editorial', note: 'La dispensació a la farmàcia exigeix identificar el pacient; la política no ho detalla, ho anotem com a lectura editorial.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['millora-del-producte'], sources: ['rempe-app-store'], note: 'L’etiqueta declara diagnòstics tècnics vinculats amb la identitat, cosa poc habitual.' }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['rempe-app-store'], 'L’etiqueta no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: f('no', 'official', ['rempe-app-store']),
        thirdPartyTrackersPresent: unknown('La política no enumera components de tercers.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['rempe-web-privacy-policy'], 'La política no preveu cap tractament publicitari.'),
        profiling: unknown('No consta cap elaboració de perfils.'),
        aiTraining: unknown('No consta.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['rempe-web-privacy-policy'], 'La regla declarada és que «no se cederán datos a terceros, salvo autorización previa, obligación legal o que sea estrictamente necesario para cumplir con el fin»; la dispensació a la farmàcia entra en aquest últim supòsit.'),
        intraGroupSharing: unknown('No consta cap estructura de grup.'),
        dataBrokerSales: f('no', 'official', ['rempe-web-privacy-policy'], 'La política no preveu cap venda de dades.'),
        internationalTransfers: unknown('La política no tracta les transferències internacionals.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['rempe-web-privacy-policy'], 'Es conserven «mientras permanezca de alta como Usuario o durante el tiempo estipulado por la legislación vigente», sense cap termini numèric per a les prescripcions.'),
        dataAfterDeletion: unknown('No consta què es conserva després de donar-se de baixa.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['rempe-web-privacy-policy'], 'El dret de supressió es reconeix i s’exerceix davant del delegat de protecció de dades.'),
        selfService: unknown('La política no descriu cap procediment de baixa des de dins de l’aplicació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a dpd@rxdps.com invocant el dret de supressió de l’article 17 del RGPD.',
          'Com a alternativa, envia la sol·licitud per correu postal a Calle Velázquez, 27, 1a planta, 28001 Madrid.',
        ],
        obstacles:
          'Les receptes dispensades formen part de la traçabilitat del medicament i tenen terminis de conservació regulats, de manera que la baixa de l’usuari no les esborra.',
        dataRetained: 'Les prescripcions i dispensacions, durant el temps que estableixi la legislació sanitària.',
        sources: ['rempe-web-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('No consta cap eina d’exportació ni menció explícita de la portabilitat.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['rempe-web-privacy-policy'], 'Delegat de protecció de dades amb adreça electrònica i postal publicades.', {
          url: 'mailto:dpd@rxdps.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: na('El servei no fa publicitat personalitzada segons la seva política.'),
        telemetryOptOut: unknown('No consta cap control sobre els diagnòstics tècnics que declara l’etiqueta.'),
        granularControls: unknown('No consta cap panell de privadesa.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('La farmàcia ha de poder llegir la prescripció per dispensar-la.'),
        transportEncryption: f('yes', 'editorial', [], 'Els serveis de REMPe es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('No consta.'),
        mfa: unknown('No consta si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni security.txt.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal públic de divulgació de vulnerabilitats.'),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La base jurídica declarada és el consentiment del registre, quan un sistema de recepta electrònica reconegut pels col·legis professionals sembla més aviat un tractament necessari per a l’assistència sanitària. El desajust mereix una revisió amb documentació addicional.',
        openQuestions: [
          'Quant de temps es conserven les prescripcions i les dispensacions?',
          'Quina base jurídica empara realment el tractament de la medicació, més enllà del consentiment del registre?',
          'Quines mesures de seguretat protegeixen un repositori nacional de receptes privades?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ Embarazo+ ═══════════════════════════ */
    {
      slug: 'embarazo-plus',
      name: 'Embarazo +',
      company: 'philips-consumer-lifestyle',
      categories: ['salut-i-assistencia-sanitaria', 'benestar-i-activitat-fisica'],
      tagline: 'Un diari d’embaràs que alimenta Google Ad Manager',
      summary:
        'Embarazo+ (Pregnancy+) acompanya l’embaràs setmana a setmana i en guarda la data prevista de part, el pes, les visites mèdiques, les contraccions i els moviments del bebè; també contempla registrar la pèrdua de l’embaràs. És l’única aplicació del lot que reconeix explícitament que fa servir Google Ad Manager i Ad Exchange per mostrar publicitat, i l’etiqueta de l’App Store declara identificadors utilitzats per rastrejar. La responsable és neerlandesa, Philips Consumer Lifestyle B.V., tot i que a la botiga hi consta l’editora britànica.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Països Baixos',
      userBase: 'Desenes de milions de descàrregues acumulades a escala mundial',
      links: {
        website: 'https://www.philips.com/',
        privacyPolicy: 'https://www.philips.com/a-w/pregnancy-plus-app.html?locale=es&country=ES',
        appStore: 'https://apps.apple.com/es/app/id505864483',
      },
      accountRequired: f('partial', 'official', ['embarazo-plus-privacy-policy'], 'Es pot fer servir sense compte, però la sincronització al núvol i la recuperació de les dades exigeixen registrar-s’hi, també amb Facebook, Google o Apple.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'L’embaràs és una de les etapes que més interessen al mercat publicitari, perquè marca un canvi complet de patró de consum. Aquí les dades que el delaten —setmana de gestació, pes, sexe del bebè, visites— conviuen en la mateixa aplicació amb un sistema d’anuncis de Google.',
      dataCollection: [
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['embarazo-plus-privacy-policy', 'embarazo-plus-app-store'], note: 'Data prevista de part, setmana d’embaràs, pes, contraccions, moviments del bebè i, si escau, la pèrdua de l’embaràs.' }),
        row('data-de-naixement', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['embarazo-plus-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['embarazo-plus-privacy-policy', 'embarazo-plus-app-store'] }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['embarazo-plus-privacy-policy'], note: 'Fotografies del perfil i imatges pujades, com ara ecografies.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['embarazo-plus-app-store', 'embarazo-plus-privacy-policy'], note: 'L’etiqueta declara identificadors utilitzats per rastrejar; la política reconeix Google Ad Manager i Ad Exchange.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['embarazo-plus-app-store'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['personalitzacio-de-continguts', 'publicitat-personalitzada'], sources: ['embarazo-plus-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['embarazo-plus-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['embarazo-plus-app-store'] }),
        row('situacio-familiar', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['embarazo-plus-privacy-policy'], note: 'El servei gira sobre una situació familiar concreta i en registra el desenllaç.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['embarazo-plus-app-store'], 'L’etiqueta declara identificadors utilitzats per rastrejar entre aplicacions i llocs web d’altres empreses.'),
        advertisingIdentifiers: f('yes', 'official', ['embarazo-plus-app-store', 'embarazo-plus-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['embarazo-plus-privacy-policy'], 'Google Ad Manager i Ad Exchange, i els proveïdors d’inici de sessió de Facebook, Google i Apple.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['embarazo-plus-privacy-policy'], 'Anuncis personalitzats amb Google Ad Manager i Ad Exchange, subjectes a consentiment explícit segons la política.'),
        profiling: f('yes', 'official', ['embarazo-plus-privacy-policy'], 'El contingut es personalitza segons l’etapa de l’embaràs i les dades introduïdes.'),
        aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['embarazo-plus-privacy-policy'], 'Socis de màrqueting quan la persona hi consent explícitament, i la plataforma publicitària de Google.'),
        intraGroupSharing: f('partial', 'official', ['embarazo-plus-privacy-policy'], 'El tractament el fa Philips Consumer Lifestyle B.V. dins del grup Philips; la política no en detalla els fluxos interns.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades a intermediaris.'),
        internationalTransfers: f('partial', 'official', ['embarazo-plus-privacy-policy'], 'La política adverteix que iniciar sessió amb Facebook, Google o Apple pot implicar tractaments en països que «may not provide adequate protection», sense concretar el mecanisme.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència referit a aquestes aplicacions.'),
      },
      retention: {
        definedPeriods: unknown('La política no dona terminis de conservació concrets.'),
        dataAfterDeletion: f('partial', 'official', ['embarazo-plus-privacy-policy'], 'La política diu que en eliminar el compte s’esborren les dades associades, sense concretar excepcions ni terminis.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['embarazo-plus-privacy-policy'], '«You can choose to delete your account, and all data associated therewith at any time».'),
        selfService: f('yes', 'official', ['embarazo-plus-privacy-policy'], 'La política presenta l’eliminació com una opció que la persona pot triar en qualsevol moment des de l’aplicació.'),
        difficulty: 'easy',
        steps: [
          'Obre l’aplicació i entra a la configuració del compte.',
          'Tria l’opció d’eliminar el compte i confirma-la.',
          'Si no la trobes, escriu al canal de contacte de Philips per a aquestes aplicacions demanant la supressió.',
        ],
        dataRetained: 'La política no detalla què es conserva per obligació legal.',
        sources: ['embarazo-plus-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no descriu cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['embarazo-plus-privacy-policy'], 'Es reconeixen els drets d’accés, rectificació i supressió, però el canal específic per a la UE no queda clarament identificat a l’avís de l’aplicació.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['embarazo-plus-privacy-policy'], 'La publicitat personalitzada depèn del consentiment explícit, i les comunicacions promocionals es poden cancel·lar; no hi ha un control documentat per desactivar la publicitat no personalitzada.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
        granularControls: f('partial', 'official', ['embarazo-plus-privacy-policy'], 'Hi ha consentiments separats per a la publicitat i per a la compartició amb socis de màrqueting.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de poder llegir el diari d’embaràs per sincronitzar-lo entre dispositius.'),
        transportEncryption: f('yes', 'editorial', [], 'Els serveis de Philips es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('L’avís de l’aplicació no descriu el xifratge en repòs.'),
        mfa: unknown('No consta si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades d’aquesta aplicació.'),
        bugBounty: f('partial', 'official', ['philips-vulnerability-disclosure'], 'Philips té un programa de divulgació coordinada amb acusament de rebuda en dos dies hàbils i un «Hall of Honors», però sense recompenses econòmiques.', {
          url: 'https://www.philips.com/a-w/security/coordinated-vulnerability-disclosure.html',
        }),
        vulnerabilityDisclosure: f('yes', 'official', ['philips-vulnerability-disclosure'], 'Canal xifrat amb PGP i política publicada.'),
      },
      alternatives: [
        {
          app: 'flo',
          comparability: 'partial',
          rationale: 'Cobreix el seguiment del cicle i de l’embaràs i ofereix un mode anònim, útil per a qui vulgui reduir la identificació.',
          tradeOffs: 'Té un historial propi de controvèrsies sobre compartició de dades que cal revisar a la seva fitxa.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'És l’única fitxa del lot on el model de negoci publicitari està escrit en clar a la política. La combinació de dades de gestació amb l’ecosistema d’anuncis de Google és el que fa que aquesta aplicació mereixi una lectura atenta abans d’introduir-hi res.',
        openQuestions: [
          'Quins terminis de conservació s’apliquen a les dades d’embaràs?',
          'Amb quin mecanisme s’emparen les transferències fora de l’Espai Econòmic Europeu?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ ASISA ═══════════════════════════ */
    {
      slug: 'asisa',
      name: 'ASISA',
      company: 'asisa',
      categories: ['salut-i-assistencia-sanitaria', 'banca-i-finances'],
      tagline: 'L’única aplicació de salut del lot que declara la ubicació com a dada per rastrejar-te',
      summary:
        'L’aplicació de l’asseguradora ASISA dona accés a l’àrea privada de la pòlissa, al quadre mèdic i a les autoritzacions. El que la distingeix és l’etiqueta de l’App Store: declara la ubicació com a dada utilitzada per rastrejar entre aplicacions i llocs web d’altres empreses, i hi afegeix historial de navegació sense vincular. La política de l’asseguradora és completa pel que fa a destinataris —hi enumera reasseguradores, xarxes assistencials, Europ Assistance i Teladoc Health— però no explica aquest rastreig.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'subscription',
      jurisdiction: 'Espanya',
      userBase: 'Assegurats d’ASISA a Espanya',
      links: {
        website: 'https://www.asisa.es/',
        privacyPolicy: 'https://www.asisa.es/politica-de-proteccion-de-datos',
        appStore: 'https://apps.apple.com/es/app/id444680982',
      },
      accountRequired: f('yes', 'official', ['asisa-privacy-policy'], 'La política descriu l’accés a l’àrea privada com un dels tractaments; l’aplicació és per a persones assegurades.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'Una asseguradora de salut acumula alhora l’historial d’ús assistencial i la informació econòmica de la pòlissa. Que a sobre l’aplicació declari la ubicació com a dada de rastreig converteix un tràmit administratiu en una font de senyals comercials.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['asisa-privacy-policy', 'asisa-app-store'] }),
        row('document-identificatiu-oficial', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['asisa-privacy-policy'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['asisa-privacy-policy'], note: 'La política preveu la comunicació a proveïdors sanitaris, reasseguradores i empreses de vigilància de la salut.' }),
        row('dades-de-pagament', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['asisa-privacy-policy'], note: 'Gestió del pagament de primes.' }),
        row('ubicacio-precisa', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['asisa-app-store'], note: 'L’etiqueta la declara com a dada utilitzada per rastrejar; és l’única categoria d’aquest tipus a la fitxa.' }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['asisa-app-store'], note: 'L’etiqueta declara contingut de l’usuari vinculat amb la identitat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['asisa-app-store'] }),
        row('historial-de-navegacio', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['asisa-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['asisa-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['asisa-app-store'] }),
        row('contingut-de-missatges', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['atencio-a-lusuari'], sources: ['asisa-privacy-policy'], note: 'La política inclou el tractament de les interaccions amb el xatbot.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['asisa-app-store'], 'L’etiqueta declara la ubicació com a dada utilitzada per rastrejar entre aplicacions i llocs web propietat d’altres empreses.'),
        advertisingIdentifiers: unknown('L’etiqueta no declara identificadors publicitaris, però tampoc explica amb quina tècnica es fa el rastreig de la ubicació.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['asisa-app-store'], 'El rastreig declarat implica components de tercers, però ni l’etiqueta ni la política els enumeren.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['asisa-privacy-policy', 'asisa-app-store'], 'La política esmenta activitats promocionals, i l’etiqueta declara rastreig; no hi ha cap descripció pública que lligui les dues coses.'),
        profiling: unknown('La política no descriu cap elaboració de perfils.'),
        aiTraining: unknown('La política esmenta un xatbot, però no diu si les converses entrenen models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['asisa-privacy-policy'], 'Proveïdors sanitaris, reasseguradores, xarxes assistencials, empreses de vigilància de la salut, administracions públiques i socis com Europ Assistance i Teladoc Health.'),
        intraGroupSharing: f('yes', 'official', ['asisa-privacy-policy'], 'Compartició amb les empreses del grup ASISA.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades.'),
        internationalTransfers: f('partial', 'official', ['asisa-privacy-policy'], 'Només quan són contractualment necessàries o amb consentiment explícit, complint els requisits del RGPD; no es concreta el mecanisme.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['asisa-privacy-policy'], 'Es descriu el bloqueig de les dades després de la fi del contracte durant els terminis de responsabilitat legal, sense xifres concretes.'),
        dataAfterDeletion: f('partial', 'official', ['asisa-privacy-policy'], 'Les dades queden bloquejades, no esborrades, mentre puguin derivar-se responsabilitats legals.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['asisa-privacy-policy'], 'El dret de supressió es reconeix i s’exerceix davant del delegat de protecció de dades.'),
        selfService: unknown('No hem trobat cap pàgina que descrigui l’eliminació del compte des de l’aplicació.'),
        difficulty: 'unknown',
        requiresSupportContact: true,
        steps: [
          'Escriu a DPO@grupoasisa.com invocant el dret de supressió de l’article 17 del RGPD.',
          'Indica si la sol·licitud afecta només l’accés a l’àrea privada o tot el tractament.',
        ],
        obstacles: 'Mentre hi hagi pòlissa, l’asseguradora manté bases jurídiques pròpies i les dades queden bloquejades en comptes d’esborrades.',
        dataRetained: 'Dades contractuals i assistencials bloquejades durant els terminis de prescripció.',
        sources: ['asisa-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['asisa-privacy-policy'], 'La portabilitat es reconeix entre els drets, sense cap eina d’autoservei descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['asisa-privacy-policy'], 'Delegat de protecció de dades amb adreça publicada i menció expressa del dret a reclamar davant de l’AEPD.', {
          url: 'mailto:DPO@grupoasisa.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hem trobat cap control documentat per desactivar el rastreig de la ubicació que declara l’etiqueta.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
        granularControls: f('partial', 'editorial', [], 'El permís de ubicació es pot denegar des del sistema operatiu, que és l’única palanca efectiva documentada.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei ha de poder llegir les autoritzacions i els documents per tramitar-los.'),
        transportEncryption: f('yes', 'editorial', [], 'Els serveis d’ASISA es publiquen sobre HTTPS, comprovat en consultar-ne les pàgines.'),
        atRestEncryption: unknown('No consta.'),
        mfa: unknown('No consta si l’àrea privada admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni security.txt al domini.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'mi-sanitas',
          comparability: 'equivalent',
          rationale: 'És l’aplicació equivalent d’una altra asseguradora de salut, útil per comparar declaracions de privadesa.',
          tradeOffs: 'També declara identificadors utilitzats per rastrejar i té una política que no cobreix l’aplicació.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La troballa és la declaració de la ubicació com a dada de rastreig en una aplicació d’assegurança de salut. La política, que és força completa pel que fa a destinataris, no diu res d’aquest tractament: és exactament el tipus de contradicció que l’etiqueta de l’App Store permet detectar.',
        openQuestions: [
          'Quin component fa el rastreig de la ubicació declarat a l’App Store i amb quina finalitat?',
          'Hi ha alguna manera de desactivar-lo des de dins de l’aplicació?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ NovelBite ═══════════════════════════ */
    {
      slug: 'novelbite',
      name: 'NovelBite',
      company: 'nexten-labs',
      categories: ['llibres-i-lectura'],
      tagline: 'Novel·les per capítols d’una editora que no publica ni domicili ni identificació fiscal',
      summary:
        'NovelBite ofereix novel·les per capítols amb un model de micropagaments. La política de privadesa és raonablement detallada —reconeix la recollida d’identificadors publicitaris IDFA i GAID, la geolocalització, les clàusules contractuals tipus per a les transferències i un termini de 30 dies per esborrar el compte— però no identifica el responsable del tractament: no hi ha ni raó social completa, ni domicili, ni identificació fiscal, i l’únic contacte és una adreça d’Outlook. Per a un servei adreçat a la Unió Europea, això és un problema de compliment abans que de privadesa.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Desconeguda',
      userBase: 'Aplicació recent, entre les més descarregades de la categoria de llibres a Espanya',
      links: {
        website: 'https://novel-bite.com/',
        privacyPolicy: 'https://novel-bite.com/en/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id6762946357',
      },
      accountRequired: f('partial', 'official', ['novelbite-privacy-policy'], 'La política descriu informació de compte i de perfil i dades de pagament; la lectura inicial pot no exigir registre.'),
      openSource: f('no', 'editorial', [], 'No consta cap publicació del codi font; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'Què llegeixes i fins on arribes en cada capítol és un indicador d’interessos molt fi, i aquí s’acompanya d’identificadors publicitaris i de geolocalització. Sense saber qui és el responsable ni on és establert, exercir-hi qualsevol dret és difícil.',
      dataCollection: [
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['novelbite-privacy-policy', 'novelbite-app-store'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['novelbite-privacy-policy'] }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['novelbite-privacy-policy', 'novelbite-app-store'], note: 'La política esmenta explícitament l’IDFA d’iOS i el GAID d’Android.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada'], sources: ['novelbite-privacy-policy'], note: 'La política inclou la geolocalització entre les dades recollides automàticament.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['recomanacions-algoritmiques', 'personalitzacio-de-continguts'], sources: ['novelbite-privacy-policy'], note: 'Dades d’ús i de navegació dins de l’aplicació: quines novel·les es llegeixen i fins on.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['novelbite-privacy-policy'], note: 'Es processen amb Stripe, Apple Pay i Google Pay.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'seguretat-i-prevencio-del-frau'], sources: ['novelbite-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['novelbite-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['novelbite-app-store', 'novelbite-privacy-policy'], 'L’etiqueta declara identificadors utilitzats per rastrejar i la política reconeix la recollida d’IDFA i GAID.'),
        advertisingIdentifiers: f('yes', 'official', ['novelbite-privacy-policy']),
        thirdPartyTrackersPresent: f('yes', 'official', ['novelbite-privacy-policy'], 'Google Analytics entre els proveïdors enumerats, a més de Stripe, AWS, Cloudflare i Zendesk.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['novelbite-privacy-policy'], 'La política inclou la publicitat entre les finalitats i recull identificadors publicitaris per a aquest ús.'),
        profiling: f('yes', 'official', ['novelbite-privacy-policy'], 'La personalització de continguts i les recomanacions són finalitats declarades.'),
        aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['novelbite-privacy-policy'], 'Processadors de pagament (Stripe, Apple Pay, Google Pay) i proveïdors com AWS, Cloudflare, Google Analytics i Zendesk.'),
        intraGroupSharing: unknown('No consta cap estructura de grup.'),
        dataBrokerSales: unknown('La política no esmenta cap venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['novelbite-privacy-policy'], 'Transferències fora del país de residència, amb clàusules contractuals tipus de la UE per a l’Espai Econòmic Europeu.', {
          mechanism: 'sccs',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència.'),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['novelbite-privacy-policy'], 'La política dona terminis numèrics tant per al compte com per a les dades recollides automàticament.'),
        dataAfterDeletion: f('partial', 'official', ['novelbite-privacy-policy'], 'Les dades s’esborren dins dels 30 dies següents a l’eliminació del compte, amb excepcions legals no detallades.'),
        periods: [
          { period: 'Dades del compte: esborrades dins dels 30 dies posteriors a l’eliminació', sources: ['novelbite-privacy-policy'] },
          { period: 'Dades recollides automàticament: 12 mesos des de l’últim ús', sources: ['novelbite-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['novelbite-privacy-policy']),
        selfService: unknown('La política reconeix el dret a l’eliminació, però no descriu si hi ha un botó dins de l’aplicació.'),
        difficulty: 'medium',
        waitingPeriodDays: 30,
        requiresSupportContact: true,
        steps: [
          'Busca l’opció d’eliminar el compte a la configuració de l’aplicació.',
          'Si no hi és, escriu a novelbite@outlook.com amb l’assumpte «Privacy Rights Request» demanant la supressió.',
          'Les dades s’han d’esborrar dins dels 30 dies següents.',
        ],
        obstacles:
          'L’única via de contacte és una adreça de correu gratuïta, sense cap responsable identificat ni cap representant a la Unió Europea a qui reclamar.',
        sources: ['novelbite-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['novelbite-privacy-policy'], 'La portabilitat consta entre els drets reconeguts, sense eina d’autoservei descrita.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['novelbite-privacy-policy'], 'Hi ha una adreça de correu per a les sol·licituds, però no un delegat de protecció de dades ni un representant a la UE identificats.', {
          url: 'mailto:novelbite@outlook.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['novelbite-privacy-policy'], 'La política reconeix la retirada del consentiment, però l’única palanca efectiva documentada és denegar el permís de seguiment del sistema operatiu.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica.'),
        granularControls: unknown('No consta cap panell de privadesa dins de l’aplicació.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment ni el model de micropagaments dins de l’aplicació.'),
      },
      security: {
        e2ee: na('El servei distribueix contingut editorial, no comunicacions privades.'),
        transportEncryption: f('yes', 'editorial', [], 'El lloc del servei es publica sobre HTTPS i la política esmenta Cloudflare com a proveïdor.'),
        atRestEncryption: unknown('La política no descriu el xifratge en repòs.'),
        mfa: unknown('No consta si el compte admet un segon factor.'),
        independentAudits: unknown('No consten auditories independents publicades.'),
        bugBounty: unknown('No hem trobat cap programa de recompenses ni canal de seguretat.'),
        vulnerabilityDisclosure: unknown('No hem trobat cap canal públic de divulgació de vulnerabilitats.'),
      },
      alternatives: [
        {
          app: 'slowread',
          comparability: 'partial',
          rationale: 'Per a qui només vol portar el registre del que llegeix, una aplicació sense publicitat ni identificadors de rastreig.',
          tradeOffs: 'No distribueix continguts: és un seguiment de lectures, no un catàleg de novel·les.',
        },
        {
          app: 'storytel',
          comparability: 'partial',
          rationale: 'Catàleg de lectura per subscripció d’una empresa europea identificable.',
          tradeOffs: 'És de pagament i no té el format de novel·la per capítols.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és més completa que la mitjana d’aquest tipus d’aplicacions, però l’absència d’un responsable identificat la buida de bona part del seu valor: sense raó social, domicili ni representant a la UE, els drets que s’hi reconeixen són difícils d’exercir.',
        openQuestions: [
          'Qui és exactament Nexten Labs Limited i on està establerta?',
          'Té un representant a la Unió Europea segons l’article 27 del RGPD?',
          'Amb quines xarxes publicitàries es comparteixen l’IDFA i el GAID?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },

    /* ═══════════════════════════ SlowRead ═══════════════════════════ */
    {
      slug: 'slowread',
      name: 'SlowRead',
      company: 'adria-matz',
      categories: ['llibres-i-lectura'],
      tagline: 'Un registre de lectures que guarda al dispositiu el que no cal enviar enlloc',
      summary:
        'SlowRead és una estanteria digital feta per un desenvolupador independent: hi anotes els llibres que llegeixes, l’estat de lectura, les etiquetes i les notes. La política explica amb detall què es queda al dispositiu i què puja al núvol, i afirma que no es venen ni es comparteixen dades personals amb anunciants. Hi ha un desajust que convé conèixer: l’etiqueta de l’App Store sí que declara identificadors utilitzats per rastrejar, i la política no ho explica.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Espanya',
      userBase: 'Aplicació independent recent',
      links: {
        website: 'https://sites.google.com/view/sup-slowread',
        privacyPolicy: 'https://sites.google.com/view/privacy-policy-slowread/',
        appStore: 'https://apps.apple.com/es/app/id6763293288',
      },
      accountRequired: f('no', 'official', ['slowread-privacy-policy'], 'Les dades es poden guardar només al dispositiu; el compte amb Apple o Google és opcional i serveix per sincronitzar.'),
      openSource: f('no', 'editorial', [], 'No consta cap repositori públic; és programari privatiu.', { licence: 'Privativa' }),
      dataSummary:
        'La llista de llibres d’una persona diu molt dels seus interessos i conviccions. Aquí, si no es crea compte, aquesta llista no surt del telèfon; si es crea, va a Firebase.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['slowread-privacy-policy'], note: 'Només si s’inicia sessió amb Apple o Google.' }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['slowread-privacy-policy'] }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['slowread-privacy-policy'], note: 'Els llibres afegits, l’estat de lectura, les biblioteques i les etiquetes; al dispositiu si no hi ha compte.' }),
        row('historial-de-cerca', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['slowread-privacy-policy'], note: 'Les consultes de títol o autor es resolen contra Google Books, Open Library i NeoDB.' }),
        row('fitxers-i-documents', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['slowread-privacy-policy'], note: 'Les notes personals sobre cada llibre.' }),
        row('historial-de-compres', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['slowread-app-store', 'slowread-privacy-policy'], note: 'La subscripció es gestiona amb RevenueCat sobre les compres de l’App Store.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['slowread-privacy-policy'], note: 'Analítica amb PostHog.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['slowread-app-store'], note: 'L’etiqueta de l’App Store declara identificadors utilitzats per rastrejar, cosa que la política no explica.' }),
      ],
      tracking: {
        crossAppTracking: f('partial', 'official', ['slowread-app-store', 'slowread-privacy-policy'], 'L’etiqueta declara identificadors utilitzats per rastrejar, mentre que la política afirma que no es comparteixen dades personals amb anunciants. Les dues afirmacions no encaixen.'),
        advertisingIdentifiers: unknown('La política no esmenta cap identificador publicitari.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['slowread-privacy-policy'], 'PostHog per a l’analítica, Firebase per a l’autenticació i RevenueCat per a les subscripcions.'),
      },
      dataUses: {
        targetedAdvertising: f('no', 'official', ['slowread-privacy-policy'], '«No vendemos, alquilamos ni compartimos datos personales con anunciantes».'),
        profiling: f('no', 'official', ['slowread-privacy-policy'], 'La política no descriu cap elaboració de perfils comercials.'),
        aiTraining: unknown('La política no diu si les dades s’utilitzen per entrenar models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['slowread-privacy-policy'], 'Google i Firebase per a l’autenticació i l’emmagatzematge, RevenueCat, PostHog, i Google Books, Open Library i NeoDB per a les metadades.'),
        intraGroupSharing: na('És una aplicació d’un desenvolupador individual, sense grup empresarial.'),
        dataBrokerSales: f('no', 'official', ['slowread-privacy-policy'], 'La política ho descarta explícitament.'),
        internationalTransfers: f('partial', 'editorial', [], 'L’ús de Firebase, RevenueCat i PostHog implica tractaments fora de la Unió Europea, però la política no ho explicita ni n’indica el mecanisme.', {
          mechanism: 'unknown',
        }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: na('Un desenvolupador individual no publica informes de transparència sobre peticions d’autoritats.'),
      },
      retention: {
        definedPeriods: unknown('La política no dona terminis de conservació.'),
        dataAfterDeletion: unknown('La política no detalla què es conserva després d’eliminar el compte.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['slowread-privacy-policy']),
        selfService: f('yes', 'official', ['slowread-privacy-policy'], 'La política diu que el compte es pot eliminar des de dins de l’aplicació, o bé per correu electrònic.'),
        difficulty: 'easy',
        steps: [
          'Obre la configuració de l’aplicació i tria l’opció d’eliminar el compte.',
          'Com a alternativa, escriu a hello@adriamatz.com demanant-ne la supressió.',
          'Si no havies creat cap compte, n’hi ha prou de desinstal·lar l’aplicació: les dades eren al dispositiu.',
        ],
        sources: ['slowread-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no descriu cap eina d’exportació de la biblioteca.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['slowread-privacy-policy'], 'Hi ha una adreça de correu de contacte directa amb el desenvolupador, sense un procediment formal descrit.', {
          url: 'mailto:hello@adriamatz.com',
        }),
      },
      controls: {
        adPersonalizationOptOut: na('El servei declara que no fa publicitat.'),
        telemetryOptOut: unknown('No consta cap control per desactivar l’analítica de PostHog.'),
        granularControls: f('partial', 'official', ['slowread-privacy-policy'], 'La palanca principal és estructural: no crear compte manté la biblioteca al dispositiu.'),
        defaultPosture: 'protective',
        darkPatterns: unknown('No hem pogut revisar els fluxos de consentiment dins de l’aplicació.'),
      },
      security: {
        e2ee: unknown('La política diu que les dades del compte es guarden «de manera segura» a Firebase, sense descriure el model de xifratge.'),
        transportEncryption: f('yes', 'editorial', [], 'Els serveis que fa servir (Firebase, RevenueCat, PostHog) operen sobre HTTPS.'),
        atRestEncryption: unknown('La política no ho detalla més enllà de dir que Firebase ho fa de manera segura.'),
        mfa: unknown('L’autenticació delega en Apple i Google; no consta si s’hereten els seus factors.'),
        independentAudits: unknown('No consten auditories independents.'),
        bugBounty: unknown('No hi ha cap programa de recompenses, cosa esperable en una aplicació independent.'),
        vulnerabilityDisclosure: f('partial', 'official', ['slowread-privacy-policy'], 'L’únic canal és l’adreça de contacte del desenvolupador.'),
      },
      alternatives: [
        {
          app: 'goodreads',
          comparability: 'equivalent',
          rationale: 'És el registre de lectures més estès i té una comunitat molt gran.',
          tradeOffs: 'Pertany a Amazon i integra la biblioteca en un ecosistema comercial molt més ampli.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'És l’aplicació amb la postura per defecte més protectora del lot: sense compte, la biblioteca no surt del telèfon. La contradicció entre l’etiqueta de l’App Store, que declara rastreig, i la política, que el descarta, és l’única cosa que impedeix donar-la per resolta.',
        openQuestions: [
          'Per què l’etiqueta de l’App Store declara identificadors utilitzats per rastrejar si la política diu que no es comparteixen dades amb anunciants?',
          'Quins terminis de conservació s’apliquen a les dades sincronitzades a Firebase?',
          'Queda pendent la cerca sistemàtica d’incidents i sancions: les eines de cerca no eren disponibles durant aquesta revisió.',
        ],
      },
    },
  ],

  incidents: [],

  storeIds: {
    quironsalud: 'com.divisait.quironsalud',
    doctoralia: 'es.doctoralia',
    'misalud-ohs': 'com.fraternidad-prevencion.MiSalud',
    'mi-sanitas': 'com.sanitas.misanitas',
    vithas: 'es.vithas.app.ios',
    'rempe-pacientes': 'dps.citizen.app',
    'embarazo-plus': 'com.HP.PregnancyiPhonelite',
    asisa: 'com.Babel.Asisa',
    novelbite: 'com.novelbite.novel',
    slowread: 'com.adriamatz.SlowRead',
  },
}
