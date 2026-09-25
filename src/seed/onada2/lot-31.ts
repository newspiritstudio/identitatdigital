import { WAVE2_DATE, evidenceAt, sourceAt } from '../helpers'
import type { SeedLot } from './types'

const { f, unknown, na, row } = evidenceAt(WAVE2_DATE)
const s = sourceAt(WAVE2_DATE)

/**
 * Lot 31 de la segona onada: deu aplicacions de la categoria «Xarxes socials»
 * de l’App Store espanyol que no són les grans plataformes. Hi ha dos
 * localitzadors familiars i d’amics, dos mapes socials, un fabricant
 * d’adhesius, dos serveis de conèixer gent, un xat de jocs, el diari de
 * pel·lícules Letterboxd i WeChat.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'life360',
      name: 'Life360',
      legalName: 'Life360, Inc.',
      description:
        'Empresa nord-americana de localització familiar. Va comprar Tile i Jiobit, i combina subscripcions amb publicitat i amb la cessió de dades d’ubicació i de moviment a socis comercials.',
      headquartersCountry: 'US',
      leadSupervisoryAuthority: 'none',
      supervisoryNote: 'No en té: a la UE hi actua per mitjà del representant Osano International Compliance Services Limited (Dublín)',
      ownership: 'public',
      foundedYear: 2008,
      primaryRevenueModel: 'mixed',
      website: 'https://www.life360.com/',
      productDomains: ['life360.com', 'thetileapp.com', 'jiobit.com'],
      privacyContact: 'privacy@life360.com',
    },
    {
      slug: 'happeny-technology',
      name: 'Happeny Technology',
      legalName: 'HAPPENY TECHNOLOGY PTE. LTD.',
      description:
        'Societat de Singapur que publica Widgetable a l’App Store sota la marca «Widgetable, Inc.». La política de privadesa del servei no identifica cap responsable del tractament ni cap establiment a la Unió Europea.',
      headquartersCountry: 'SG',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://widgetable.net/',
      productDomains: ['widgetable.net'],
      privacyContact: 'service@widgetable.net',
    },
    {
      slug: 'naver-z',
      name: 'NAVER Z',
      legalName: 'NAVER Z Corporation',
      description:
        'Filial del grup coreà NAVER dedicada als serveis socials i d’avatars, com Zepeto i Sticker.ly. Sticker.ly li va arribar per mitjà de SNOW, l’altra filial de NAVER dedicada a les càmeres i els adhesius.',
      headquartersCountry: 'KR',
      ownership: 'subsidiary',
      parentGroup: 'NAVER',
      primaryRevenueModel: 'mixed',
      website: 'https://naverz-corp.com/',
      productDomains: ['sticker.ly', 'zepeto.me'],
      privacyContact: 'dl_stickerly_privacy@naverz-corp.com',
    },
    {
      slug: 'amo',
      name: 'amo',
      legalName: 'amo',
      description:
        'Empresa francesa fundada per antics treballadors d’Instagram. Fa aplicacions socials per a adolescents i joves, entre les quals Bump, un mapa d’ubicació en directe entre amics.',
      headquartersCountry: 'FR',
      euEstablishment: 'FR',
      leadSupervisoryAuthority: 'cnil',
      ownership: 'private',
      foundedYear: 2022,
      primaryRevenueModel: 'unknown',
      website: 'https://amo.co/',
      productDomains: ['amo.co'],
      privacyContact: 'privacy@amo.co',
    },
    {
      slug: 'corner-international',
      name: 'Corner International',
      legalName: 'Corner International, Inc.',
      description:
        'Empresa nord-americana de l’aplicació corner, un mapa per guardar i compartir llocs amb amics. La seva política de privadesa és un document breu allotjat a Notion i no s’ha actualitzat des del 2022.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'unknown',
      website: 'https://www.corner.inc/',
      productDomains: ['corner.inc', 'cornerapp.xyz'],
      privacyContact: 'hello@cornerapp.xyz',
    },
    {
      slug: 'tencent',
      name: 'Tencent',
      legalName: 'Tencent Holdings Limited',
      description:
        'Grup xinès de tecnologia i videojocs, propietari de Weixin i WeChat, de QQ i de participacions en bona part de la indústria del videojoc. La versió xinesa del missatger, Weixin, i la internacional, WeChat, comparteixen xarxa i es poden comunicar entre elles.',
      headquartersCountry: 'CN',
      ownership: 'public',
      foundedYear: 1998,
      primaryRevenueModel: 'mixed',
      website: 'https://www.tencent.com/',
      productDomains: ['wechat.com', 'qq.com', 'tencent.com'],
    },
    {
      slug: 'tencent-international-service-europe',
      name: 'Tencent International Service Europe',
      legalName: 'Tencent International Service Europe B.V.',
      parent: 'tencent',
      description:
        'Societat neerlandesa responsable del tractament de les dades de les persones usuàries de WeChat a l’Espai Econòmic Europeu, el Regne Unit i Suïssa. Fora d’aquests territoris, i llevat de la Xina continental, el responsable és WeChat International Pte. Ltd., de Singapur.',
      headquartersCountry: 'NL',
      euEstablishment: 'NL',
      leadSupervisoryAuthority: 'ap-nl',
      ownership: 'subsidiary',
      primaryRevenueModel: 'mixed',
      website: 'https://www.wechat.com/',
      productDomains: ['wechat.com'],
      privacyContact: 'dataprotection@wechat.com',
    },
    {
      slug: 'plato-team',
      name: 'Plato Team',
      legalName: 'Plato Team Inc.',
      description:
        'Empresa nord-americana de San José (Califòrnia) que fa Plato, una aplicació de jocs de taula i de xat en grup. Es finança amb compres dins l’aplicació.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://www.platoapp.com/',
      productDomains: ['platoapp.com', 'platoteam.com'],
      privacyContact: 'legal@platoteam.com',
    },
    {
      slug: 'letterboxd',
      name: 'Letterboxd',
      legalName: 'Letterboxd Limited',
      description:
        'Empresa d’Auckland (Nova Zelanda) que gestiona Letterboxd, el diari i la xarxa social de cinema. Es finança amb les subscripcions Pro i Patron i amb publicitat per a qui no paga.',
      headquartersCountry: 'NZ',
      leadSupervisoryAuthority: 'none',
      supervisoryNote: 'No en té: a la UE hi actua per mitjà del representant Osano International Compliance Services Limited (Dublín)',
      ownership: 'private',
      foundedYear: 2011,
      primaryRevenueModel: 'mixed',
      website: 'https://letterboxd.com/',
      productDomains: ['letterboxd.com'],
    },
    {
      slug: 'bumpy-inc',
      name: 'Bumpy Inc.',
      legalName: 'Bumpy Inc.',
      description:
        'Societat de Delaware que explota les aplicacions de cites Bumpy i Wonder. És la responsable del tractament per a les persones usuàries de fora de l’EEE, el Regne Unit i Suïssa.',
      headquartersCountry: 'US',
      ownership: 'private',
      primaryRevenueModel: 'freemium',
      website: 'https://bumpy.app/',
      productDomains: ['bumpy.app', 'wonder.dating'],
      privacyContact: 'legal@bumpy.app',
    },
    {
      slug: 'mv-bumpy-group',
      name: 'MV Bumpy Group',
      legalName: 'MV Bumpy Group Limited',
      parent: 'bumpy-inc',
      description:
        'Societat xipriota responsable del tractament de les dades de les persones usuàries de Bumpy i Wonder a l’EEE, el Regne Unit i Suïssa. Actua com a corresponsable amb Bumpy Inc. segons l’article 26 del RGPD.',
      headquartersCountry: 'CY',
      euEstablishment: 'CY',
      leadSupervisoryAuthority: 'cpdp-cy',
      ownership: 'subsidiary',
      primaryRevenueModel: 'freemium',
      website: 'https://bumpy.app/',
      productDomains: ['bumpy.app', 'wonder.dating'],
      privacyContact: 'legal@bumpy.app',
    },
  ],

  sources: [
    /* ── Life360 ── */
    s('life360-app-store', 'Life360: Buscar Familia, Amigos — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id384830320', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa declarada pel desenvolupador. Declara identificadors com a dades de rastreig i vincula a la identitat la ubicació exacta, la forma física, el correu, el nom, els identificadors, les dades d’ús i les de diagnòstic, amb finalitat de publicitat de tercers.',
    }),
    s('life360-privacy-policy', 'Life360 Privacy Policy', 'https://www.life360.com/privacy_policy/', 'Life360, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política de privadesa modificada el 26 d’agost del 2026. Descriu la cessió d’ubicació precisa i de dades de moviment a socis comercials perquè les monetitzin pel seu compte, la venda d’estadístiques agregades, el marc de transferències EU-US DPF, el representant a la UE i els controls «Your Privacy Choices» i «Trusted Partners».',
    }),
    s('life360-delete-account', 'Delete My Account — Life360 Help Center', 'https://support.life360.com/hc/en-us/articles/23053748967319-Delete-My-Account', 'Life360, Inc.', 'support-doc', 'primary', {
      summary:
        'Passos reals per eliminar el compte des de l’aplicació, amb confirmació per correu i captcha. Avisa que s’esborren l’historial i els esdeveniments de conducció i que la baixa no cancel·la la subscripció.',
    }),
    s('life360-security-txt', 'life360.com security.txt', 'https://www.life360.com/.well-known/security.txt', 'Life360, Inc.', 'technical-doc', 'primary', {
      summary:
        'Fitxer de divulgació de vulnerabilitats amb l’adreça responsibledisclosure@life360.com i un programa a HackerOne. El camp «Expires» és del 31 de desembre del 2022, o sigui que el fitxer fa anys que no s’actualitza.',
    }),

    /* ── WeChat ── */
    s('wechat-app-store', 'WeChat — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id414478124', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. Vincula a la identitat compres, ubicació, identificadors i dades d’ús per a publicitat de tercers, informació financera i dades d’ús per a anàlisi, i salut, contactes, contingut i diagnòstic per al funcionament. El proveïdor declarat és Tencent Technology (Shenzhen).',
    }),
    s('wechat-privacy-policy', 'WeChat Privacy Policy', 'https://www.wechat.com/en/privacy_policy.html', 'Tencent International Service Europe B.V.', 'privacy-policy', 'primary', {
      summary:
        'Política actualitzada el 6 d’agost del 2026, aplicable només als comptes que no són de la Xina continental. Identifica el responsable a l’EEE, situa els servidors a Singapur i Hong Kong, es basa en clàusules contractuals tipus per a les transferències —també cap a la Xina continental per la interoperabilitat amb Weixin— i diu que les converses no es conserven permanentment als servidors.',
    }),
    s('wechat-delete-account', 'How do I control my personal data? — WeChat Help Center', 'https://help.wechat.com/cgi-bin/micromsg-bin/oshelpcenter?opcode=2&lang=en&plat=ios&id=180323e2Ermm180323yqauAZ&Channel=helpcenter', 'Tencent', 'support-doc', 'primary', {
      summary:
        'Passos per cancel·lar el compte des de Jo > Configuració > Seguretat del compte > Centre de seguretat de WeChat, i per esborrar publicacions de Moments. Avisa que la cancel·lació és irreversible.',
    }),
    s('wechat-citizen-lab-2020', 'We Chat, They Watch: How International Users Unwittingly Build up WeChat’s Chinese Censorship Apparatus', 'https://citizenlab.ca/research/we-chat-they-watch/', 'The Citizen Lab (Universitat de Toronto)', 'academic', 'independent', {
      publishedAt: '2020-05-07',
      summary:
        'Experiments tècnics que mostren que els documents i les imatges enviats només entre comptes no xinesos també passen per un sistema d’anàlisi de continguts, i que serveixen per entrenar el sistema de censura política que WeChat aplica a la Xina.',
    }),

    /* ── Widgetable ── */
    s('widgetable-app-store', 'Widgetable: Besties & Parejas — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1641107226', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. Declara les dades d’ús com a dades de rastreig i vincula a la identitat l’identificador del dispositiu, les dades d’ús i de diagnòstic, la salut i la forma física i la ubicació exacta i aproximada. El proveïdor és HAPPENY TECHNOLOGY PTE. LTD., de Singapur.',
    }),
    s('widgetable-privacy-policy', 'Widgetable Privacy Policy', 'https://widgetable.net/privacy', 'Widgetable', 'privacy-policy', 'primary', {
      summary:
        'Política actualitzada el 2 d’agost del 2024. No identifica cap responsable del tractament, no esmenta el RGPD ni cap base jurídica, no dona terminis de conservació i remet qualsevol supressió a un correu electrònic. Cita Firebase i empreses de publicitat, i detalla els permisos de fotos, Bluetooth, ubicació i son.',
    }),

    /* ── Sticker.ly ── */
    s('sticker-ly-app-store', 'Sticker.ly - Sticker Maker — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1458740001', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. Declara identificadors, dades d’ús i diagnòstics com a dades de rastreig, i vincula a la identitat el correu, el nom, les fotos i els vídeos, l’historial de cerca i els identificadors. El proveïdor és NAVER Z Corporation.',
    }),
    s('sticker-ly-privacy-policy', 'Sticker.ly Privacy Policy', 'https://sticker.ly/privacy-policy', 'NAVER Z Corp.', 'privacy-policy', 'primary', {
      summary:
        'Política actualitzada el 16 d’abril del 2026. Reconeix l’extracció de trets facials per a les funcions d’IA, la recollida de GPS precís amb l’aplicació en segon pla per a publicitat i atribució, i una llista de categories de dades venudes o cedides els dotze mesos anteriors. Les transferències fora del país es justifiquen només amb el consentiment.',
    }),

    /* ── Bump ── */
    s('bump-app-store', 'Bump - mapa para amigos — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id6471519217', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. Declara identificadors com a dades de rastreig i vincula a la identitat la ubicació exacta, el nom, el telèfon, el contingut d’atenció a l’usuari, l’identificador d’usuari i la interacció amb el producte.',
    }),
    s('bump-privacy-policy', 'amo Privacy Policy', 'https://amo.co/privacy-policy/', 'amo', 'privacy-policy', 'primary', {
      summary:
        'Política de l’empresa francesa amo, responsable de Bump. Detalla les bases jurídiques del RGPD, les clàusules contractuals tipus i el Data Privacy Framework per a les transferències, el funcionament de la ubicació en directe i l’historial d’ubicació, i la supressió del compte per correu amb trenta dies de marge.',
    }),

    /* ── corner ── */
    s('corner-app-store', 'corner: curate & share places — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1668282277', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. No declara dades de rastreig. Vincula a la identitat les dades d’ús i de diagnòstic, els contactes —per a personalització del producte— i la informació de contacte, les fotos i l’identificador d’usuari.',
    }),
    s('corner-privacy-policy', 'Corner — Privacy Policy', 'https://cornerapp.notion.site/terms-privacy-f81535636843413aadf49e8b56275355', 'Corner International, Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política breu allotjada a Notion, actualitzada el 7 de desembre del 2022. Diu que la ubicació no s’emmagatzema ni es vincula a la identitat i que no es venen dades, però no esmenta el RGPD, ni bases jurídiques, ni terminis, ni transferències internacionals, i la supressió del compte es demana per correu.',
    }),

    /* ── Plato ── */
    s('plato-app-store', 'Plato: Juegos Multijugador — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1054747306', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. No declara dades de rastreig ni dades vinculades a la identitat: només dades de contacte, identificadors, dades d’ús i diagnòstics no vinculades.',
    }),
    s('plato-privacy-policy', 'Plato Privacy Policy', 'https://www.platoapp.com/privacy', 'Plato Team Inc.', 'privacy-policy', 'primary', {
      summary:
        'Política de Plato Team Inc. Declara el correu com a dada voluntària, cita Google Analytics i una pàgina pública de proveïdors, dona terminis concrets —missatges privats fins a trenta dies, dades de client sis anys— i fixa la supressió del compte per correu a hello@platoteam.com.',
    }),

    /* ── Letterboxd ── */
    s('letterboxd-app-store', 'Letterboxd — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1054271011', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. Declara identificadors i dades d’ús com a dades de rastreig; només vincula a la identitat l’identificador del dispositiu, i deixa com a no vinculades les dades de publicitat i els errors.',
    }),
    s('letterboxd-privacy-policy', 'Letterboxd Privacy Policy', 'https://letterboxd.com/legal/privacy-policy/', 'Letterboxd Limited', 'privacy-policy', 'primary', {
      publishedAt: '2026-08-01',
      summary:
        'Política actualitzada l’agost del 2026. Nomena els representants a la UE i al Regne Unit, explica la publicitat amb Playwire i la galleta Common ID accessible als socis publicitaris, i basa les transferències en decisions d’adequació i en les clàusules contractuals tipus del 2021.',
    }),
    s('letterboxd-faq', 'Frequent questions — Letterboxd', 'https://letterboxd.com/about/faq/', 'Letterboxd Limited', 'support-doc', 'primary', {
      summary:
        'Preguntes freqüents. Confirmen la verificació en dos passos amb codis TOTP —sense SMS, sense correu i sense codis de recuperació—, l’exportació completa del compte en un fitxer zip de CSV i que els comptes gratuïts veuen publicitat de tercers.',
    }),
    s('letterboxd-account-deactivation', 'Account deactivation — Letterboxd', 'https://letterboxd.com/about/account-deactivation/', 'Letterboxd Limited', 'support-doc', 'primary', {
      summary:
        'Explica la desactivació i la supressió permanent: la baixa definitiva es programa a noranta dies, es pot escurçar a trenta amb un enllaç que envien per correu i no es pot fer més ràpid.',
    }),
    s('letterboxd-security-notices', 'Security notices — Letterboxd', 'https://letterboxd.com/about/security-notices/', 'Letterboxd Limited', 'support-doc', 'primary', {
      summary:
        'Avís de seguretat del 15 de març del 2024 sobre l’accés no autoritzat a un compte del personal i a les dades exportables de menys de l’1 % de les persones membres.',
    }),

    /* ── Bumpy ── */
    s('bumpy-app-store', 'Bumpy: Encontrar Pareja & Chat — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id1455336523', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. Declara identificadors i dades d’ús com a dades de rastreig i vincula a la identitat la ubicació exacta, el contingut, els identificadors i les dades sensibles, tant per a personalització com per al funcionament de l’aplicació.',
    }),
    s('bumpy-privacy-policy', 'Bumpy & Wonder Privacy Policy', 'https://bumpy.app/privacy-policy', 'MV Bumpy Group Limited', 'privacy-policy', 'primary', {
      summary:
        'Política conjunta de Bumpy i de Wonder publicada el setembre del 2026. Declara la corresponsabilitat de l’article 26 entre Bumpy Inc. i MV Bumpy Group Limited, una taula completa de bases jurídiques i de terminis de conservació, el xifratge AES-256 en repòs i la visibilitat creuada entre les dues aplicacions activada per defecte.',
    }),

    /* ── Azar ── */
    s('azar-app-store', 'Azar - Chat & haz amigos — App Store (Privacidad de la app)', 'https://apps.apple.com/es/app/id972558973', 'Apple', 'app-store', 'primary', {
      language: 'es',
      summary:
        'Etiqueta de privadesa. Declara identificadors i dades d’ús com a dades de rastreig i vincula a la identitat compres, informació financera, ubicació, contacte, contingut, historial de cerca, identificadors i dades d’ús.',
    }),
    s('azar-privacy-policy', 'Azar Privacy Policy (2025-11-08)', 'https://help.azarlive.com/hc/en-us/articles/51966981469337-Privacy-Policy-2025-11-08', 'MTCH Technology Services Limited', 'privacy-policy', 'primary', {
      summary:
        'Política vigent el dia de la revisió. Identifica MTCH Technology Services Limited com a responsable a l’EEE, detalla la compartició dins de Match Group, les bases jurídiques, les transferències per adequació i clàusules tipus i uns terminis de conservació molt concrets després de tancar el compte.',
    }),
    s('azar-delete-account', 'How to delete my account? — Azar Help Center', 'https://help.azarlive.com/hc/en-us/articles/226899747-How-to-delete-my-account', 'Hyperconnect', 'support-doc', 'primary', {
      summary:
        'Passos per eliminar el compte des del perfil. El compte es pot restaurar durant noranta dies i, mentrestant, no es pot descarregar la còpia de les dades; la baixa no cancel·la la subscripció.',
    }),
    s('azar-data-request', 'How to request my personal data? — Azar Help Center', 'https://help.azarlive.com/hc/en-us/articles/28174182349209-How-to-request-my-personal-data', 'Hyperconnect', 'support-doc', 'primary', {
      summary:
        'Explica com demanar la còpia de les dades des de Configuració > Ajustos del compte > «Request My Azar Data»; arriba per correu en un fitxer zip protegit amb contrasenya.',
    }),
    s('azar-vulnerability-report', 'Reporting Security Vulnerabilities — Azar Help Center', 'https://help.azarlive.com/hc/en-us/articles/4407585822233-Reporting-Security-Vulnerabilities', 'Hyperconnect', 'support-doc', 'primary', {
      summary:
        'Canal per comunicar vulnerabilitats. Demana no fer-les públiques fins que estiguin resoltes i no esmenta cap recompensa econòmica.',
    }),
    s('azar-face-geometry', 'How Your Facial Geometry Data is Processed in Azar’s Effects — Azar Help Center', 'https://help.azarlive.com/hc/en-us/articles/30115987094425-How-Your-Facial-Geometry-Data-is-Processed-in-Azar-s-Effects', 'Hyperconnect', 'support-doc', 'primary', {
      summary:
        'Diu que les dades de geometria facial dels efectes es processen només al dispositiu, que l’empresa no en rep cap còpia i que es descarten immediatament quan es deixen de fer servir.',
    }),
  ],

  apps: [
    {
      slug: 'life360',
      name: 'Life360',
      company: 'life360',
      categories: ['mapes-i-navegacio', 'utilitats'],
      tagline: 'La política admet que cedeix la ubicació precisa a socis comercials perquè la monetitzin pel seu compte',
      summary:
        'Life360 comparteix en directe on són els membres d’una família i afegeix detecció d’accidents i informes de conducció. La mateixa política de privadesa reconeix que cedeix la geolocalització precisa i les dades de moviment a «socis comercials seleccionats» perquè les facin servir per a finalitats pròpies de monetització, i que ven estadístiques agregades a asseguradores, ajuntaments i cadenes de botigues. Tot plegat es pot desactivar, però ve activat de sèrie.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units, amb representant a la UE a Irlanda',
      userBase: 'Més de 80 milions de persones usuàries declarades per l’empresa',
      links: {
        website: 'https://www.life360.com/',
        privacyPolicy: 'https://www.life360.com/privacy_policy/',
        appStore: 'https://apps.apple.com/es/app/id384830320',
      },
      accountRequired: f('yes', 'official', ['life360-privacy-policy']),
      openSource: f('no', 'official', ['life360-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'On dorm cada membre de la família, a quina hora surt de casa, com condueix i a quines botigues entra. És el mapa complet de la vida quotidiana d’una llar, i una part surt de l’empresa cap a tercers que en fan negoci.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada', 'cessio-a-tercers'], sources: ['life360-app-store', 'life360-privacy-policy'], note: 'La política admet la cessió a socis comercials per a les seves pròpies finalitats de monetització, amb opció de desactivar-la.' }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-publicitaria'], sources: ['life360-app-store'] }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['life360-app-store'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['life360-app-store', 'life360-privacy-policy'], note: 'Se’n comparteix una versió xifrada amb funció resum amb els socis publicitaris.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['life360-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['life360-app-store', 'life360-privacy-policy'] }),
        row('dades-de-salut', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['life360-app-store'], note: 'L’etiqueta declara dades de forma física vinculades a la identitat i utilitzades per a publicitat de tercers.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['life360-app-store'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['life360-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['life360-app-store'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['life360-privacy-policy'], note: 'El xat del Cercle i el contingut que s’hi comparteix.' }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['life360-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['life360-app-store', 'life360-privacy-policy'], 'L’etiqueta declara identificadors per rastrejar i la política descriu publicitat dirigida fora del servei.'),
        advertisingIdentifiers: f('yes', 'official', ['life360-privacy-policy'], 'Identificadors publicitaris i de dispositiu, més una versió del correu xifrada amb funció resum.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['life360-privacy-policy'], 'Proveïdors d’analítica i de publicitat integrats al servei.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['life360-privacy-policy']),
        profiling: f('yes', 'official', ['life360-privacy-policy'], 'Informació derivada a partir de la ubicació i del comportament al volant.'),
        aiTraining: unknown('La política parla de recerca i desenvolupament, però no diu si les dades entrenen models.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['life360-privacy-policy'], 'Proveïdors, socis publicitaris i «socis comercials seleccionats» que reben ubicació precisa per a les seves pròpies finalitats.'),
        intraGroupSharing: f('yes', 'official', ['life360-privacy-policy'], 'Entre Life360 i Tile, que es presenten com a «Life360 Companies».'),
        dataBrokerSales: f('yes', 'official', ['life360-privacy-policy'], 'La política admet la cessió d’ubicació precisa i de dades de moviment a tercers per a monetització pròpia i la comercialització d’estadístiques agregades a asseguradores, administracions locals i cadenes de botigues.'),
        internationalTransfers: f('yes', 'official', ['life360-privacy-policy'], 'EU-US Data Privacy Framework i clàusules contractuals tipus.', { mechanism: 'adequacy' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència publicat.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['life360-privacy-policy'], 'La secció de conservació és genèrica: «mentre facis servir els productes o serveis» i pel temps necessari per a cada finalitat.'),
        dataAfterDeletion: unknown('La política no concreta què queda després de la baixa; la pàgina d’ajuda només diu que la supressió és irreversible.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['life360-delete-account']),
        selfService: f('yes', 'official', ['life360-delete-account']),
        directUrl: 'https://support.life360.com/hc/en-us/articles/23053748967319-Delete-My-Account',
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Cancel·la abans la subscripció: esborrar el compte o l’aplicació no la cancel·la.',
          'A l’aplicació, obre «Settings» i després «Account».',
          'Tria «Delete Account» i marca «Yes, I confirm the above».',
          'Toca «Continue» i després «Send email» perquè t’enviïn l’enllaç de confirmació.',
          'Obre el correu de Life360, segueix l’enllaç i resol el captcha per confirmar la baixa.',
        ],
        obstacles: 'Cal tenir una adreça de correu al compte i confirmar per correu; cada membre del Cercle ha de fer la baixa pel seu compte. S’esborren l’historial i els esdeveniments de conducció, i no es pot desfer.',
        sources: ['life360-delete-account'],
      },
      userRights: {
        dataExport: unknown('La política reconeix el dret a obtenir les dades en format estructurat, però no hem trobat cap eina d’autoservei d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['life360-privacy-policy'], 'Per correu a privacy@life360.com o des de la secció de privadesa de l’aplicació.', { url: 'mailto:privacy@life360.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['life360-privacy-policy'], 'L’enllaç «Your Privacy Choices» dins de la secció de privadesa de l’aplicació.'),
        telemetryOptOut: unknown('No hem trobat cap control específic per a l’analítica interna.'),
        granularControls: f('yes', 'official', ['life360-privacy-policy'], 'Controls separats per a socis publicitaris, «Trusted Partners», «Traffic & Retail Insights» i limitació de la ubicació compartida amb el Cercle.'),
        defaultPosture: 'permissive',
        darkPatterns: f('partial', 'editorial', [], 'La cessió d’ubicació precisa a socis comercials i les estadístiques agregades estan actives per defecte i només es desactiven des de menús secundaris de la secció de privadesa.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'high',
            description: 'La compartició d’ubicació precisa i de dades de moviment amb socis comercials per a les seves pròpies finalitats ve activada de sèrie i cal buscar «Your Privacy Choices» per desactivar-la.',
            sources: ['life360-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: unknown('La política parla de xifratge en trànsit i en repòs, però no de xifratge d’extrem a extrem del xat ni de la ubicació.'),
        transportEncryption: f('yes', 'official', ['life360-privacy-policy'], 'Mesures tècniques per protegir la confidencialitat durant la transmissió i l’emmagatzematge.'),
        atRestEncryption: f('yes', 'official', ['life360-privacy-policy']),
        mfa: unknown('No hem trobat documentació sobre verificació en dos passos.'),
        independentAudits: unknown(),
        bugBounty: f('yes', 'official', ['life360-security-txt'], 'Programa a HackerOne enllaçat des del security.txt, tot i que el fitxer té la data de caducitat vençuda des del 2022.', { url: 'https://hackerone.com/life360' }),
        vulnerabilityDisclosure: f('yes', 'official', ['life360-security-txt'], undefined, { url: 'https://www.life360.com/.well-known/security.txt' }),
      },
      alternatives: [
        {
          app: 'google-maps',
          comparability: 'partial',
          rationale: 'La compartició d’ubicació de Google Maps cobreix el cas d’ús bàsic de saber on és algú, sense cedir la ubicació precisa a socis comercials per a monetització.',
          tradeOffs: 'No té detecció d’accidents, informes de conducció ni avisos d’arribada i sortida de llocs.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'El web de Life360 bloqueja les peticions automatitzades; la política s’ha llegit a través d’un servei de lectura de pàgines i s’ha contrastat amb el centre d’ajuda.',
        openQuestions: [
          'Queda pendent documentar amb fonts les informacions periodístiques del 2021 sobre la venda de dades d’ubicació a intermediaris i el canvi de política posterior.',
          'Hi ha manera d’esborrar o exportar l’historial d’ubicació i de conducció sense donar de baixa el compte?',
        ],
      },
    },

    {
      slug: 'widgetable',
      name: 'Widgetable',
      company: 'happeny-technology',
      categories: ['utilitats', 'xarxes-socials'],
      tagline: 'Ginys per a la pantalla d’inici amb ubicació i son, i una política de privadesa que no esmenta el RGPD',
      summary:
        'Widgetable posa ginys compartits amb amics o parella a la pantalla d’inici: distància entre tots dos, mascotes virtuals, estat d’ànim i hores de son. Demana permís de fotos, Bluetooth, ubicació i salut. La política de privadesa és del 2024, no diu quina societat és responsable del tractament, no esmenta el RGPD ni cap base jurídica, no dona cap termini de conservació i remet qualsevol supressió a un correu electrònic.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Singapur, sense establiment declarat a la Unió Europea',
      links: {
        website: 'https://widgetable.net/',
        privacyPolicy: 'https://widgetable.net/privacy',
        appStore: 'https://apps.apple.com/es/app/id1641107226',
      },
      accountRequired: unknown('La política parla d’«usuaris registrats», però no diu si cal compte per fer servir els ginys.'),
      openSource: f('no', 'official', ['widgetable-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La distància amb una altra persona, les hores que dorm i la ubicació al llarg del dia. Són dades de parella i de son en mans d’una empresa que no diu ni qui és el responsable del tractament.',
      dataCollection: [
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['widgetable-app-store', 'widgetable-privacy-policy'], note: 'Per al giny del temps i per calcular la distància amb una altra persona.' }),
        row('ubicacio-aproximada', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['widgetable-app-store'] }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['widgetable-app-store', 'widgetable-privacy-policy'], note: 'Llegeix les dades de son; la política diu que no es comparteixen amb tercers.' }),
        row('fotografies-i-videos', 'optional', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['widgetable-privacy-policy'], note: 'Accés a l’àlbum per posar una foto de fons al giny.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['widgetable-app-store', 'widgetable-privacy-policy'], note: 'Firebase i altres eines d’estadística.' }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['widgetable-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['widgetable-app-store'], note: 'L’etiqueta declara les dades d’ús com a dades de rastreig.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['widgetable-app-store'] }),
        row('informacio-del-dispositiu', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['widgetable-privacy-policy'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['widgetable-app-store'], 'L’etiqueta declara les dades d’ús com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: unknown('La política parla d’identificadors del dispositiu, però no diu si fa servir l’identificador publicitari.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['widgetable-privacy-policy'], 'Cita Firebase per a estadístiques i empreses de publicitat que fan servir galetes i tecnologies similars.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['widgetable-privacy-policy'], 'La política esmenta publicitat personalitzada i empreses publicitàries amb tecnologies de seguiment.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['widgetable-privacy-policy'], 'Proveïdors d’estadística i socis publicitaris.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: f('no', 'official', ['widgetable-privacy-policy'], 'Diu que no ven ni intercanvia dades d’usuari, tot i que l’afirmació apareix a l’apartat de dades de salut.'),
        internationalTransfers: unknown('La política no diu on es tracten les dades ni amb quin mecanisme es transfereixen.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['widgetable-privacy-policy'], 'L’únic termini és «només el temps necessari» per a les dades de salut.'),
        dataAfterDeletion: f('partial', 'official', ['widgetable-privacy-policy'], 'Diu que la informació esborrada pot quedar a les còpies de seguretat i que es pot denegar la supressió per motius de seguretat o legals.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['widgetable-privacy-policy']),
        selfService: f('no', 'official', ['widgetable-privacy-policy'], 'La política només preveu demanar-ho per correu electrònic.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Escriu a service@widgetable.net demanant la supressió del compte i de les dades personals.',
          'Respon a les preguntes d’identificació que et facin per confirmar que el compte és teu.',
          'Un cop processada la petició, perds l’accés al compte i al servei.',
        ],
        obstacles: 'No hi ha cap opció documentada dins de l’aplicació i la política admet que poden denegar la petició.',
        dataRetained: 'La informació pot quedar a les còpies de seguretat i la que calgui per seguretat, compliment o reclamacions.',
        sources: ['widgetable-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta el dret de portabilitat ni cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['widgetable-privacy-policy'], 'L’únic canal és el correu service@widgetable.net; no s’hi enumeren els drets del RGPD.', { url: 'mailto:service@widgetable.net' }),
      },
      controls: {
        adPersonalizationOptOut: unknown('No hem trobat cap control documentat per desactivar la publicitat personalitzada.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['widgetable-privacy-policy'], 'Els permisos de fotos, Bluetooth, ubicació i salut es poden concedir o denegar per separat des del sistema operatiu.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: unknown('La política no esmenta cap xifratge d’extrem a extrem dels continguts compartits entre amics.'),
        transportEncryption: unknown(),
        atRestEncryption: f('partial', 'official', ['widgetable-privacy-policy'], 'Només parla de xifratge i d’emmagatzematge segur per a les dades de son.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hi ha cap programa de recompenses documentat ni fitxer security.txt.'),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        openQuestions: [
          'Quina societat és exactament la responsable del tractament i qui és el representant a la Unió Europea?',
          'Quins SDK publicitaris incorpora l’aplicació i amb qui comparteix l’identificador de dispositiu?',
          'Es pot eliminar el compte des de dins de l’aplicació?',
        ],
      },
    },

    {
      slug: 'sticker-ly',
      name: 'Sticker.ly',
      company: 'naver-z',
      categories: ['edicio-de-foto-i-video', 'xarxes-socials'],
      tagline: 'Extreu trets facials per a les funcions d’IA i enumera les dades que ha venut o cedit l’últim any',
      summary:
        'Sticker.ly fa paquets d’adhesius per a WhatsApp i Telegram a partir de fotos pròpies. La política reconeix que processa marques i trets facials —que en algunes jurisdiccions són dades biomètriques— per a les funcions d’IA, encara que els esborra un cop generat el resultat. També recull GPS precís amb l’aplicació en segon pla per a publicitat i atribució, i té un apartat que enumera les categories de dades venudes o cedides els dotze mesos anteriors. No esmenta el RGPD ni cap representant a la Unió Europea.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Corea del Sud, amb servidors als Estats Units',
      links: {
        website: 'https://sticker.ly/',
        privacyPolicy: 'https://sticker.ly/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id1458740001',
      },
      accountRequired: f('yes', 'official', ['sticker-ly-privacy-policy'], 'El registre es fa amb un compte d’una xarxa social, del qual es recullen l’identificador i la imatge de perfil.'),
      openSource: f('no', 'official', ['sticker-ly-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Cares, adhesius fets amb fotos pròpies o d’altres persones, cerques i ubicació precisa. Els adhesius que es pengen són públics i no es poden esborrar un cop tancat el compte.',
      dataCollection: [
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'entrenament-de-models-dia'], sources: ['sticker-ly-app-store', 'sticker-ly-privacy-policy'], note: 'Les fotos originals per a les funcions d’IA es processen a servidors propis i de proveïdors de núvol.' }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['sticker-ly-privacy-policy'], note: 'Marques i trets facials extrets per generar avatars i imatges; s’esborren immediatament després de generar el resultat i calen consentiment exprés.' }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['sticker-ly-app-store'] }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['sticker-ly-app-store'] }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['sticker-ly-app-store', 'sticker-ly-privacy-policy'] }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria', 'investigacio-i-estadistica'], sources: ['sticker-ly-privacy-policy'], note: 'Es pot recollir amb l’aplicació en segon pla i es comparteix amb tercers per a publicitat i atribució.' }),
        row('identificador-publicitari', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['sticker-ly-privacy-policy'], note: 'IDFA a iOS i AAID a Android.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus'], sources: ['sticker-ly-app-store'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['sticker-ly-app-store'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['sticker-ly-app-store'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['sticker-ly-app-store'] }),
        row('interessos-inferits', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'brokers', purposes: ['elaboracio-de-perfils', 'publicitat-personalitzada'], sources: ['sticker-ly-privacy-policy'], note: 'L’apartat de dades venudes o cedides inclou les inferències sobre preferències, comportament i aptituds.' }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['sticker-ly-app-store', 'sticker-ly-privacy-policy'], 'L’etiqueta declara identificadors, ús i diagnòstics com a dades de rastreig.'),
        advertisingIdentifiers: f('yes', 'official', ['sticker-ly-privacy-policy'], 'IDFA i AAID.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['sticker-ly-privacy-policy'], 'SDK de tercers que recullen ubicació i activitat per a publicitat, analítica i atribució.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['sticker-ly-privacy-policy']),
        profiling: f('yes', 'official', ['sticker-ly-privacy-policy'], 'Inferències sobre preferències, tendències psicològiques i comportament.'),
        aiTraining: f('partial', 'official', ['sticker-ly-privacy-policy'], 'Les fotos i els trets facials alimenten les funcions generatives, però la política diu que s’esborren just després de generar el resultat.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['sticker-ly-privacy-policy'], 'Xarxes publicitàries, proveïdors d’analítica i serveis de núvol que processen les dades biomètriques.'),
        intraGroupSharing: f('yes', 'official', ['sticker-ly-privacy-policy'], 'Amb filials i proveïdors de NAVER Z.'),
        dataBrokerSales: f('yes', 'official', ['sticker-ly-privacy-policy'], 'La política declara que els dotze mesos anteriors ha venut o cedit identificadors, activitat en línia, informació sensorial i inferències.'),
        internationalTransfers: f('yes', 'official', ['sticker-ly-privacy-policy'], 'Les dades es tracten als Estats Units i on tingui instal·lacions el grup; l’únic mecanisme invocat és el consentiment en fer servir l’aplicació.', { mechanism: 'derogation' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['sticker-ly-privacy-policy'], 'Hi ha terminis per a les dades biomètriques, els resultats d’IA, el perfil i les dades posteriors a la baixa.'),
        dataAfterDeletion: f('partial', 'official', ['sticker-ly-privacy-policy'], 'Catorze dies després d’eliminar el compte, però els adhesius que s’han publicat ja no es poden editar ni esborrar sense demanar-ho per correu.'),
        periods: [
          { dataType: 'dades-biometriques', period: 'S’esborren immediatament després de generar el resultat d’IA', sources: ['sticker-ly-privacy-policy'] },
          { dataType: 'fotografies-i-videos', period: 'Els resultats generats amb IA, fins a un any des de l’última interacció', sources: ['sticker-ly-privacy-policy'] },
          { dataType: 'identificador-de-compte', period: 'Fins a la supressió del compte, i catorze dies més', sources: ['sticker-ly-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['sticker-ly-privacy-policy']),
        selfService: f('yes', 'official', ['sticker-ly-privacy-policy'], 'Des de la secció de perfil de l’aplicació.'),
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Esborra abans els adhesius que no vulguis deixar publicats: a «My Page» > «My stickers», tria l’adhesiu i elimina’l.',
          'Des del perfil, obre la configuració del compte i tria l’opció d’eliminar el compte.',
          'Si després vols retirar contingut ja publicat, escriu a support@sticker.ly indicant quin és i per què; poden demanar-te que acreditis la identitat i poden denegar-ho.',
        ],
        obstacles: 'Un cop eliminat el compte ja no es poden editar ni esborrar els adhesius publicats. A l’apartat de preferències, la política encara recomana «esborrar l’aplicació» per donar de baixa el compte, cosa que no elimina res.',
        dataRetained: 'La informació es conserva catorze dies després de la baixa, i més enllà si ho exigeix la llei o hi ha deutes pendents.',
        sources: ['sticker-ly-privacy-policy'],
      },
      userRights: {
        dataExport: f('partial', 'official', ['sticker-ly-privacy-policy'], 'Es poden descarregar els resultats generats amb IA, però no hi ha exportació del compte sencer.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['sticker-ly-privacy-policy'], 'Consulta i correcció des del perfil, i la resta per correu; la política no enumera els drets del RGPD.', { url: 'mailto:dl_stickerly_privacy@naverz-corp.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['sticker-ly-privacy-policy'], 'Remet a la limitació del seguiment publicitari del sistema operatiu i a les iniciatives del sector; no hi ha cap control propi.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['sticker-ly-privacy-policy'], 'El consentiment exprés per a les funcions biomètriques és separat, però la resta de tractaments no es poden ajustar.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('Els adhesius es publiquen en un catàleg públic; no hi ha comunicacions privades que xifrar d’extrem a extrem.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat cap programa de recompenses propi de Sticker.ly.'),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és d’abast global i està redactada pensant en la llei de Califòrnia. Per a les persones usuàries europees no hi ha ni bases jurídiques, ni representant, ni mecanisme de transferència diferent del consentiment.',
        openQuestions: [
          'Qui és el representant de NAVER Z a la Unió Europea i quina autoritat de control hi és competent?',
          'A quins tercers concrets s’han venut o cedit els identificadors i les inferències que declara la política?',
        ],
      },
    },

    {
      slug: 'bump',
      name: 'Bump',
      company: 'amo',
      categories: ['mapes-i-navegacio', 'xarxes-socials'],
      tagline: 'Ubicació en directe entre amics, amb historial que només s’esborra quan es tanca el compte',
      summary:
        'Bump és el mapa d’amics de l’empresa francesa amo: mostra en temps real on és cadascú a les persones que has triat. La política és de les poques del lot escrites de debò per al RGPD, amb bases jurídiques, clàusules contractuals tipus i un delegat de protecció de dades. El punt feble és l’historial d’ubicació, que es conserva mentre facis servir el servei i només desapareix quan elimines el compte, i que la baixa s’ha de demanar per correu.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'França (Unió Europea)',
      links: {
        website: 'https://amo.co/',
        privacyPolicy: 'https://amo.co/privacy-policy/',
        appStore: 'https://apps.apple.com/es/app/id6471519217',
      },
      accountRequired: f('yes', 'official', ['bump-privacy-policy']),
      openSource: f('no', 'official', ['bump-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'On ets ara i on has estat, amb qui vas i quina és la teva agenda de contactes. És el rastre de moviments d’un públic majoritàriament adolescent.',
      dataCollection: [
        row('ubicacio-precisa', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bump-app-store', 'bump-privacy-policy'], note: 'GPS, xarxes sense fil, antenes i punts Wi-Fi; la comparteixen en directe les persones que tries com a amigues.' }),
        row('llista-de-contactes', 'optional', { linked: 'no', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bump-app-store', 'bump-privacy-policy'] }),
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bump-app-store', 'bump-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'yes', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['bump-app-store', 'bump-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['compliment-legal'], sources: ['bump-privacy-policy'], note: 'La política parla de l’any de naixement.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bump-privacy-policy'], note: 'Foto de perfil.' }),
        row('xarxa-de-contactes', 'yes', { linked: 'yes', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bump-privacy-policy'], note: 'Amistats i historial de comunicacions dins de l’aplicació.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'mesura-i-analisi-dus'], sources: ['bump-app-store'] }),
        row('xarxa-i-connectivitat', 'yes', { linked: 'unknown', tracking: 'unknown', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['bump-privacy-policy'], note: 'Inclou l’identificador BSSID de la xarxa Wi-Fi.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['bump-app-store', 'bump-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'unknown', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['bump-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['bump-app-store'], 'L’etiqueta declara identificadors com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: unknown('La política no concreta quins identificadors publicitaris fa servir.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['bump-privacy-policy'], 'Proveïdors d’analítica, de cartografia i de comunicacions.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política no descriu publicitat dirigida, tot i que l’etiqueta de l’App Store declara rastreig.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['bump-privacy-policy'], 'Allotjament, analítica, cartografia i ubicació, atenció a l’usuari i comunicacions.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown('La política no diu explícitament si ven dades.'),
        internationalTransfers: f('yes', 'official', ['bump-privacy-policy'], 'Data Privacy Framework per als proveïdors certificats i clàusules contractuals tipus per a la resta.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['bump-privacy-policy'], 'Diu que conserva les dades mentre calgui per prestar el servei i que les esborra després d’un període llarg d’inactivitat, però no dona cap xifra.'),
        dataAfterDeletion: f('partial', 'official', ['bump-privacy-policy'], 'Hi ha fins a trenta dies per restaurar el compte abans de la supressió definitiva.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bump-privacy-policy']),
        selfService: f('no', 'official', ['bump-privacy-policy'], 'Cal escriure a l’empresa o fer servir el xat d’assistència.'),
        difficulty: 'medium',
        waitingPeriodDays: 30,
        requiresSupportContact: true,
        steps: [
          'Escriu a love@amo.co o obre el xat d’assistència des de l’aplicació i demana la supressió del compte.',
          'Confirma la petició quan te la responguin.',
          'No tornis a entrar durant els trenta dies següents: durant aquest període el compte encara es pot restaurar.',
        ],
        obstacles: 'No hi ha cap botó documentat dins de l’aplicació i l’historial d’ubicació no es pot esborrar per separat: només desapareix amb el compte.',
        sources: ['bump-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['bump-privacy-policy'], 'Dret a obtenir les dades en un format estructurat i llegible per màquina, a petició.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bump-privacy-policy'], 'Per correu a dpo@amo.co o a privacy@amo.co.', { url: 'mailto:dpo@amo.co' }),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: unknown(),
        granularControls: f('yes', 'official', ['bump-privacy-policy'], 'Es tria quines amistats veuen la ubicació en directe; la resta de persones només veuen un perfil limitat.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: unknown('La política no esmenta xifratge d’extrem a extrem de la ubicació ni dels missatges.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hi ha ni programa de recompenses ni fitxer security.txt.'),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        {
          app: 'google-maps',
          comparability: 'partial',
          rationale: 'La compartició d’ubicació de Google Maps permet ensenyar on ets a qui triïs, amb durada limitada i sense historial visible per als altres.',
          tradeOffs: 'No té el mapa social d’amics ni les notificacions d’arribada que són el sentit de Bump.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        openQuestions: [
          'Quant de temps es guarda exactament l’historial d’ubicació i es pot esborrar sense donar de baixa el compte?',
          'Per què l’etiqueta de l’App Store declara identificadors per rastrejar si la política no descriu publicitat dirigida?',
        ],
      },
    },

    {
      slug: 'corner',
      name: 'corner',
      company: 'corner-international',
      categories: ['mapes-i-navegacio', 'xarxes-socials'],
      tagline: 'Mapa de llocs guardats amb una política de privadesa de fa tres anys que no parla del RGPD',
      summary:
        'corner serveix per guardar restaurants, bars i botigues en un mapa i compartir-los amb amics. La política diu una cosa interessant —que la ubicació actual no s’emmagatzema ni es vincula a la identitat— però és un document breu de desembre del 2022, sense bases jurídiques, sense terminis, sense transferències internacionals i sense cap via d’exercir drets que no sigui un correu electrònic. L’etiqueta de l’App Store indica que els contactes es fan servir per personalitzar el producte.',
      platforms: ['ios'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units, sense establiment declarat a la Unió Europea',
      links: {
        website: 'https://www.corner.inc/',
        privacyPolicy: 'https://cornerapp.notion.site/terms-privacy-f81535636843413aadf49e8b56275355',
        appStore: 'https://apps.apple.com/es/app/id1668282277',
      },
      accountRequired: f('yes', 'official', ['corner-privacy-policy']),
      openSource: f('no', 'official', ['corner-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'La llista de llocs que t’agraden, les notes que hi poses i l’agenda de contactes. Un mapa de gustos i de rutines que, si es creua amb el de les amistats, dibuixa una vida social sencera.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['corner-app-store', 'corner-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['corner-app-store', 'corner-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['corner-privacy-policy'] }),
        row('adreca-postal', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['corner-privacy-policy'] }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['personalitzacio-de-continguts'], sources: ['corner-app-store'], note: 'L’etiqueta els situa a «personalització del producte».' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['corner-app-store', 'corner-privacy-policy'], note: 'Foto de perfil i imatges dels llocs guardats.' }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['corner-privacy-policy'], note: 'Llocs, notes i etiquetes desades al perfil.' }),
        row('ubicacio-precisa', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['corner-privacy-policy'], note: 'La política diu que la ubicació actual no s’emmagatzema ni es vincula a la identitat.' }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['corner-app-store'] }),
        row('identificador-de-dispositiu', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['mesura-i-analisi-dus'], sources: ['corner-privacy-policy'] }),
        row('adreca-ip', 'yes', { linked: 'unknown', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['corner-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['corner-app-store', 'corner-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['corner-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['corner-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown(),
        thirdPartyTrackersPresent: f('yes', 'official', ['corner-privacy-policy'], 'Eines d’analítica, de monitoratge de rendiment i de proves.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política no esmenta publicitat dirigida.'),
        profiling: f('partial', 'official', ['corner-privacy-policy'], 'Personalització de l’experiència i de les comunicacions a partir dels interessos.'),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['corner-privacy-policy'], 'Categories de proveïdors: allotjament, autenticació, analítica, comunicacions i monitoratge, sense noms concrets.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: f('no', 'official', ['corner-privacy-policy'], '«We do not sell, rent, license, or lease your data to third parties.»'),
        internationalTransfers: unknown('La política no esmenta on es tracten les dades ni amb quin mecanisme es transfereixen fora de la UE.'),
      },
      transparency: {
        policyClarity: 'low',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('no', 'official', ['corner-privacy-policy'], 'Només diu que conserva les dades mentre hi hagi compte i el que exigeixin les obligacions legals.'),
        dataAfterDeletion: f('partial', 'official', ['corner-privacy-policy'], 'Pot conservar informació per prevenir el frau, resoldre incidències, donar suport a investigacions i complir la llei.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['corner-privacy-policy']),
        selfService: f('no', 'official', ['corner-privacy-policy'], 'Cal demanar-ho per correu.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Escriu a hello@cornerapp.xyz demanant la revisió, el canvi o la supressió del compte.',
          'Espera que desactivin o eliminin el compte de les bases de dades actives.',
        ],
        obstacles: 'No hi ha cap opció d’autoservei documentada i la política admet que part de la informació es conserva després.',
        sources: ['corner-privacy-policy'],
      },
      userRights: {
        dataExport: unknown('La política no esmenta cap dret de portabilitat ni cap eina d’exportació.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('partial', 'official', ['corner-privacy-policy'], 'L’únic canal és hello@cornerapp.xyz i l’apartat de drets només preveu el cas de Califòrnia.', { url: 'mailto:hello@cornerapp.xyz' }),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: unknown(),
        granularControls: unknown('La política no descriu cap control de privadesa dins de l’aplicació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: unknown(),
        transportEncryption: unknown(),
        atRestEncryption: f('partial', 'official', ['corner-privacy-policy'], 'Parla de mesures tècniques de seguretat, sense concretar-ne cap.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hi ha ni programa de recompenses ni fitxer security.txt.'),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'initial',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La política és una pàgina de Notion sense versionar; la data d’actualització que hi consta és del 7 de desembre del 2022.',
        openQuestions: [
          'Hi ha alguna opció d’eliminar el compte dins de l’aplicació?',
          'Quins proveïdors concrets reben les dades i on es tracten?',
        ],
      },
    },

    {
      slug: 'wechat',
      name: 'WeChat',
      company: 'tencent-international-service-europe',
      categories: ['missatgeria', 'xarxes-socials'],
      tagline: 'Els fitxers que s’envien entre comptes no xinesos també passen per l’anàlisi de continguts',
      summary:
        'WeChat és la versió internacional de Weixin i funciona com a missatgeria, xarxa social i mitjà de pagament. La política diu que les converses no es conserven permanentment als servidors, però no hi ha xifratge d’extrem a extrem: el Citizen Lab va demostrar el 2020 que els documents i les imatges intercanviats només entre comptes no xinesos s’analitzen i serveixen per entrenar el sistema de censura política que WeChat aplica a la Xina. Per a l’EEE, el responsable és una societat neerlandesa.',
      platforms: ['ios', 'android', 'windows', 'macos', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Països Baixos per a l’EEE; servidors a Singapur i Hong Kong',
      userBase: 'Més de mil milions de comptes actius a Weixin i WeChat',
      links: {
        website: 'https://www.wechat.com/',
        privacyPolicy: 'https://www.wechat.com/en/privacy_policy.html',
        appStore: 'https://apps.apple.com/es/app/id414478124',
      },
      accountRequired: f('yes', 'official', ['wechat-privacy-policy'], 'Cal un número de telèfon i un àlies.'),
      openSource: f('no', 'official', ['wechat-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Qui ets, amb qui parles, què publiques i què pagues, amb els fitxers que envies passant per un sistema d’anàlisi de continguts. És la porta d’entrada digital a la Xina i, alhora, una infraestructura de vigilància documentada.',
      dataCollection: [
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['wechat-privacy-policy'] }),
        row('identificador-de-compte', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['wechat-app-store', 'wechat-privacy-policy'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['wechat-privacy-policy', 'wechat-citizen-lab-2020'], note: 'La política diu que no es conserven permanentment als servidors, però el Citizen Lab va documentar l’anàlisi de fitxers i imatges en trànsit.' }),
        row('fitxers-i-documents', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['wechat-citizen-lab-2020'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['wechat-app-store', 'wechat-citizen-lab-2020'] }),
        row('llista-de-contactes', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['wechat-app-store'] }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['wechat-app-store', 'wechat-privacy-policy'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['wechat-app-store'], note: 'L’etiqueta declara informació financera vinculada a la identitat i utilitzada per a anàlisi.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['prestacio-del-servei', 'publicitat-personalitzada'], sources: ['wechat-app-store'] }),
        row('dades-de-salut', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['wechat-app-store'], note: 'L’etiqueta declara dades de salut per al funcionament de l’aplicació, com el comptador de passos.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'publicitat-personalitzada'], sources: ['wechat-app-store'] }),
        row('adreca-ip', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['wechat-privacy-policy'] }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['wechat-app-store'] }),
        row('metadades-de-comunicacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['wechat-privacy-policy'], note: 'Les dades d’inici de sessió es conserven fins a noranta dies.' }),
        row('dades-de-diagnostic', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['millora-del-producte'], sources: ['wechat-app-store'] }),
      ],
      tracking: {
        crossAppTracking: unknown('L’etiqueta de l’App Store declara publicitat de tercers, però no hem pogut confirmar la secció de dades utilitzades per rastrejar.'),
        advertisingIdentifiers: unknown(),
        thirdPartyTrackersPresent: f('yes', 'official', ['wechat-app-store'], 'L’etiqueta declara una categoria de publicitat de tercers amb compres, ubicació, identificadors i ús.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['wechat-app-store', 'wechat-delete-account'], 'L’etiqueta declara publicitat de tercers i el centre d’ajuda explica com desactivar els anuncis personalitzats.'),
        profiling: unknown(),
        aiTraining: f('partial', 'independent', ['wechat-citizen-lab-2020'], 'El Citizen Lab va documentar que els fitxers i les imatges de comptes no xinesos serveixen per entrenar el sistema de classificació de continguts censurables.'),
      },
      sharing: {
        thirdPartySharing: f('partial', 'official', ['wechat-privacy-policy'], 'La política diu que només comparteix dades amb tercers quan cal per prestar el servei o quan ho exigeix una autoritat.'),
        intraGroupSharing: f('yes', 'official', ['wechat-privacy-policy'], 'Quan una persona usuària de WeChat interactua amb una de Weixin, la informació necessària es comparteix amb Weixin i queda subjecta a les seves normes, que són les de la Xina continental.'),
        dataBrokerSales: unknown(),
        internationalTransfers: f('yes', 'official', ['wechat-privacy-policy'], 'Cap a Hong Kong, Malàisia, Singapur i la Xina continental. No hi ha decisió d’adequació: s’invoquen les clàusules contractuals tipus de l’article 46.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown('No hem trobat cap informe de transparència de WeChat per a les persones usuàries internacionals.'),
      },
      retention: {
        definedPeriods: f('partial', 'official', ['wechat-privacy-policy'], 'Hi ha terminis per a alguns tipus de dades, com les d’inici de sessió o les de les notificacions, però no per a tot.'),
        dataAfterDeletion: f('partial', 'official', ['wechat-privacy-policy', 'wechat-delete-account'], 'Després de cancel·lar el compte es conserven dades de registre agregades per prevenir el correu brossa i per seguretat dels sistemes.'),
        periods: [
          { dataType: 'metadades-de-comunicacio', period: 'Dades d’inici de sessió, fins a 90 dies', sources: ['wechat-privacy-policy'] },
          { dataType: 'identificador-de-dispositiu', period: 'Dades de les notificacions, fins a 3 mesos després de la baixa', sources: ['wechat-privacy-policy'] },
          { dataType: 'veu-i-audio', period: 'Les dades de veu de WeChat Out s’esborren en acabar la trucada', sources: ['wechat-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['wechat-delete-account']),
        selfService: f('yes', 'official', ['wechat-delete-account']),
        difficulty: 'medium',
        requiresSupportContact: false,
        steps: [
          'Buida el saldo de WeChat Pay i deixa d’administrar comptes oficials o miniprogrames: amb saldo positiu o amb administracions actives no es pot tancar el compte.',
          'A l’aplicació, ves a «Jo» > «Configuració» > «Seguretat del compte».',
          'Obre el «Centre de seguretat de WeChat» i tria «Cancel·lació del compte».',
          'Confirma: l’acció és irreversible i esborra el compte i les dades associades.',
        ],
        obstacles: 'No es pot tancar el compte si hi ha saldo a WeChat Pay o si s’administra un compte oficial o un miniprograma. Els missatges ja descarregats continuen als dispositius de les altres persones.',
        dataRetained: 'Dades de registre agregades per prevenir el correu brossa i per a la seguretat dels sistemes.',
        sources: ['wechat-privacy-policy', 'wechat-delete-account'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['wechat-privacy-policy'], 'Per mitjà del formulari de sol·licituds de drets del centre d’assistència.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['wechat-privacy-policy'], 'Formulari de sol·licituds i delegat de protecció de dades a dataprotection@wechat.com.', { url: 'mailto:dataprotection@wechat.com' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['wechat-delete-account'], 'El centre d’ajuda documenta els controls de màrqueting i de publicitat personalitzada.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['wechat-delete-account'], 'Es poden esborrar publicacions de Moments i retirar un missatge fins a dos minuts després d’enviar-lo.'),
        defaultPosture: 'permissive',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: f('no', 'independent', ['wechat-citizen-lab-2020', 'wechat-privacy-policy'], 'Les converses passen pels servidors i el Citizen Lab va documentar l’anàlisi de continguts de comptes internacionals. La política només parla de xifratge en trànsit i en repòs.', {
          scope: 'none',
        }),
        transportEncryption: f('yes', 'official', ['wechat-privacy-policy'], 'Mesures tècniques de xifratge durant la transmissió i l’emmagatzematge.'),
        atRestEncryption: f('yes', 'official', ['wechat-privacy-policy']),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hem pogut verificar quin programa de recompenses de Tencent cobreix WeChat.'),
        vulnerabilityDisclosure: unknown(),
      },
      alternatives: [
        {
          app: 'signal',
          comparability: 'partial',
          rationale: 'Cobreix la missatgeria i les trucades amb xifratge d’extrem a extrem per defecte i sense anàlisi de continguts.',
          tradeOffs: 'No serveix per parlar amb persones de la Xina continental ni té pagaments, miniprogrames ni comptes oficials.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        editorialNotes:
          'Aquesta fitxa descriu WeChat, la versió per a números de fora de la Xina continental. Weixin, la versió xinesa, es regeix per unes altres normes i no és objecte d’aquesta fitxa.',
        openQuestions: [
          'Quines dades exactes declara l’App Store a l’apartat «Datos utilizados para rastrearte»?',
          'Tencent publica algun informe de transparència sobre les peticions d’autoritats que afectin les persones usuàries de WeChat a Europa?',
        ],
      },
    },

    {
      slug: 'plato',
      name: 'Plato',
      company: 'plato-team',
      categories: ['comunitats-i-forums', 'missatgeria'],
      tagline: 'L’etiqueta no vincula cap dada a la identitat, però la baixa s’ha de demanar per correu',
      summary:
        'Plato combina una trentena de jocs de taula amb xats de grup. És de les poques fitxes del lot on l’etiqueta de l’App Store no declara cap dada de rastreig ni cap dada vinculada a la identitat, i on el correu electrònic és explícitament voluntari. La política dona terminis concrets —els missatges privats s’esborren quan arriben, com a molt trenta dies—, però per tancar el compte cal escriure a l’empresa i el text admet que potser no podran esborrar-ho tot.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Estats Units, sense establiment declarat a la Unió Europea',
      links: {
        website: 'https://www.platoapp.com/',
        privacyPolicy: 'https://www.platoapp.com/privacy',
        appStore: 'https://apps.apple.com/es/app/id1054747306',
      },
      accountRequired: f('yes', 'official', ['plato-privacy-policy'], 'Cal registrar-se amb el dispositiu; el correu és voluntari.'),
      openSource: f('no', 'official', ['plato-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Amb qui jugues, de què parles als grups i des de quin dispositiu. La ubicació és només la que es dedueix de l’adreça IP, i l’empresa presumeix de no demanar dades que no li calen.',
      dataCollection: [
        row('identificador-de-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['plato-app-store', 'plato-privacy-policy'], note: 'El registre es fa amb el dispositiu.' }),
        row('adreca-electronica', 'optional', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['plato-app-store', 'plato-privacy-policy'], note: '«Entirely voluntary»: no cal per jugar.' }),
        row('contingut-de-missatges', 'yes', { linked: 'unknown', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['plato-privacy-policy'], note: 'Els missatges privats es conserven fins que el destinatari els rep, com a màxim trenta dies.' }),
        row('dades-de-pagament', 'optional', { linked: 'unknown', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['plato-privacy-policy'], note: 'Nom, adreça i número de targeta, processats per tercers autoritzats.' }),
        row('adreca-ip', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau', 'mesura-i-analisi-dus'], sources: ['plato-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'no', tracking: 'no', shared: 'unknown', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['plato-privacy-policy'], note: 'Deduïda de l’adreça IP; no fa servir el GPS.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['plato-app-store', 'plato-privacy-policy'], note: 'Google Analytics.' }),
        row('informacio-del-dispositiu', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['plato-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['plato-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('no', 'official', ['plato-app-store'], 'L’etiqueta de l’App Store no declara cap dada utilitzada per rastrejar.'),
        advertisingIdentifiers: unknown(),
        thirdPartyTrackersPresent: f('yes', 'official', ['plato-privacy-policy'], 'Google Analytics i la llista de proveïdors publicada a platoapp.com/serviceproviders.'),
      },
      dataUses: {
        targetedAdvertising: unknown('La política només parla de comunicacions comercials pròpies, no de publicitat dirigida.'),
        profiling: unknown(),
        aiTraining: unknown(),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['plato-privacy-policy'], 'Processadors de pagament, analítica i la resta de proveïdors llistats públicament.'),
        intraGroupSharing: unknown(),
        dataBrokerSales: unknown('La política no diu explícitament que no vengui dades.'),
        internationalTransfers: f('yes', 'official', ['plato-privacy-policy'], 'El servei s’allotja als Estats Units; la política invoca el consentiment en enviar la informació i esmenta mecanismes reconeguts per la Comissió Europea.', { mechanism: 'derogation' }),
      },
      transparency: {
        policyClarity: 'medium',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['plato-privacy-policy'], 'Missatges privats fins a trenta dies, dades de client sis anys per obligacions fiscals.'),
        dataAfterDeletion: f('partial', 'official', ['plato-privacy-policy'], 'La política admet que «potser no serà possible esborrar completament» tota la informació personal.'),
        periods: [
          { dataType: 'contingut-de-missatges', period: 'Fins que el destinatari el rep, amb un màxim de 30 dies', sources: ['plato-privacy-policy'] },
          { dataType: 'dades-de-pagament', period: '6 anys després d’acabar la relació, per obligacions fiscals', sources: ['plato-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['plato-privacy-policy']),
        selfService: f('no', 'official', ['plato-privacy-policy'], 'Cal escriure a hello@platoteam.com; esborrar l’aplicació no dona de baixa el compte.'),
        difficulty: 'hard',
        requiresSupportContact: true,
        steps: [
          'Escriu a hello@platoteam.com demanant explícitament la supressió del compte.',
          'Espera la confirmació abans de desinstal·lar l’aplicació: si només l’esborres, l’empresa no sap que vols donar-te de baixa.',
        ],
        obstacles: 'No hi ha cap opció documentada dins de l’aplicació i la política avisa que potser no podran esborrar-ho tot.',
        dataRetained: 'Dades de transaccions durant sis anys i informació anonimitzada per a la prevenció del frau.',
        sources: ['plato-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['plato-privacy-policy'], 'Dret de portabilitat en un format llegible per màquina, a petició per correu.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['plato-privacy-policy'], 'Per correu a legal@platoteam.com.', { url: 'mailto:legal@platoteam.com' }),
      },
      controls: {
        adPersonalizationOptOut: unknown(),
        telemetryOptOut: unknown(),
        granularControls: unknown('La política no descriu controls de privadesa dins de l’aplicació.'),
        defaultPosture: 'unknown',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: unknown('La política no esmenta xifratge d’extrem a extrem dels xats.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown(),
        vulnerabilityDisclosure: unknown(),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        openQuestions: [
          'Com es modera el xat i quines dades es conserven de les persones menors de divuit anys?',
          'Es pot donar de baixa el compte des de la mateixa aplicació?',
        ],
      },
    },

    {
      slug: 'letterboxd',
      name: 'Letterboxd',
      company: 'letterboxd',
      categories: ['xarxes-socials', 'comunitats-i-forums'],
      tagline: 'Exportació completa en CSV i 2FA, a canvi de publicitat amb un identificador comú si no pagues',
      summary:
        'Letterboxd és el diari de pel·lícules i la xarxa social de cinema. És la fitxa més equilibrada del lot: exportació sencera del compte en un zip de CSV —amb el contingut esborrat inclòs—, verificació en dos passos amb codis TOTP, representants a la UE i al Regne Unit i clàusules contractuals tipus. A canvi, els comptes gratuïts veuen publicitat servida amb Playwire i una galeta «Common ID» que desa un identificador únic accessible als socis publicitaris.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Nova Zelanda, amb representants a Irlanda i al Regne Unit',
      links: {
        website: 'https://letterboxd.com/',
        privacyPolicy: 'https://letterboxd.com/legal/privacy-policy/',
        appStore: 'https://apps.apple.com/es/app/id1054271011',
      },
      accountRequired: f('yes', 'official', ['letterboxd-privacy-policy'], 'Cal compte per portar el diari; el catàleg de pel·lícules es pot consultar sense registrar-s’hi.'),
      openSource: f('no', 'official', ['letterboxd-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Què has vist, quan, com ho has puntuat i què n’has escrit. El diari de pel·lícules és un retrat afinat de gustos, hàbits i estats d’ànim, i per defecte és públic.',
      dataCollection: [
        row('nom-i-cognoms', 'optional', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei'], sources: ['letterboxd-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'atencio-a-lusuari'], sources: ['letterboxd-privacy-policy'] }),
        row('contrasenya', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['letterboxd-privacy-policy'] }),
        row('publicacions-i-comentaris', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['letterboxd-privacy-policy'], note: 'Ressenyes, llistes i comentaris, públics per defecte.' }),
        row('historial-de-visualitzacio', 'yes', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['letterboxd-privacy-policy'], note: 'El diari de pel·lícules vistes, amb dates i puntuacions.' }),
        row('fotografies-i-videos', 'optional', { linked: 'yes', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['letterboxd-privacy-policy'], note: 'Avatar i imatges de fons.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['letterboxd-privacy-policy'], note: 'Les processen Paddle, Apple, Google i Stripe; Letterboxd no desa les dades completes de la targeta.' }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['letterboxd-privacy-policy'] }),
        row('ubicacio-aproximada', 'yes', { linked: 'yes', tracking: 'no', shared: 'unknown', purposes: ['prestacio-del-servei', 'seguretat-i-prevencio-del-frau'], sources: ['letterboxd-privacy-policy'], note: 'Deduïda de l’adreça IP.' }),
        row('identificador-de-dispositiu', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['letterboxd-app-store', 'letterboxd-privacy-policy'] }),
        row('galetes-i-identificadors-web', 'yes', { linked: 'unknown', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['letterboxd-privacy-policy'], note: 'La galeta «Common ID» desa un identificador únic al domini propi que els socis publicitaris poden llegir.' }),
        row('interaccions-i-us', 'yes', { linked: 'no', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'publicitat-personalitzada'], sources: ['letterboxd-app-store', 'letterboxd-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['letterboxd-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['letterboxd-app-store'], 'L’etiqueta declara identificadors i dades d’ús com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['letterboxd-app-store', 'letterboxd-privacy-policy'], 'Identificador del dispositiu i galeta Common ID al web.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['letterboxd-privacy-policy'], 'Playwire per a la publicitat, més Vimeo, Zendesk i Cloudflare.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['letterboxd-privacy-policy', 'letterboxd-faq'], 'Només per als comptes gratuïts: les subscripcions Pro i Patron treuen la publicitat.'),
        profiling: f('partial', 'official', ['letterboxd-privacy-policy'], 'Personalització de continguts i de campanyes de màrqueting.'),
        aiTraining: unknown('La política no esmenta l’entrenament de models amb les ressenyes.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['letterboxd-privacy-policy'], 'Playwire, Vimeo, Zendesk, Cloudflare i les passarel·les de pagament.'),
        intraGroupSharing: f('partial', 'official', ['letterboxd-privacy-policy'], 'Entre les societats del grup a Nova Zelanda i als Estats Units.'),
        dataBrokerSales: unknown('La política no parla de venda de dades a intermediaris.'),
        internationalTransfers: f('yes', 'official', ['letterboxd-privacy-policy'], 'Decisions d’adequació i clàusules contractuals tipus de la Comissió Europea del 4 de juny del 2021.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown('No hi ha informe de transparència, però sí una pàgina pública d’avisos de seguretat.'),
      },
      retention: {
        definedPeriods: f('no', 'official', ['letterboxd-privacy-policy'], 'La conservació es descriu per finalitat, sense terminis concrets.'),
        dataAfterDeletion: f('partial', 'official', ['letterboxd-privacy-policy', 'letterboxd-account-deactivation'], 'La supressió permanent es programa a noranta dies —trenta com a mínim— i la política preveu conservar dades per motius legals després de la baixa.'),
      },
      accountDeletion: {
        possible: f('yes', 'official', ['letterboxd-account-deactivation']),
        selfService: f('yes', 'official', ['letterboxd-account-deactivation']),
        directUrl: 'https://letterboxd.com/about/account-deactivation/',
        difficulty: 'medium',
        waitingPeriodDays: 30,
        requiresSupportContact: false,
        steps: [
          'Exporta abans el compte des de la pàgina de configuració del web si vols conservar el diari i les ressenyes.',
          'Des de la configuració del web o de l’aplicació d’iOS o Android, tria desactivar el compte i escriu la contrasenya.',
          'Durant el procés, marca l’opció de supressió permanent de totes les dades associades.',
          'Obre el segon correu que t’enviaran i fes servir l’enllaç per reduir el termini de noranta a trenta dies.',
          'No reactivis el compte durant aquest període: l’enllaç de reactivació que has rebut anul·laria la baixa.',
        ],
        obstacles: 'La desactivació simple no esborra res i allibera el nom d’usuari perquè el prengui una altra persona. La supressió definitiva no es pot fer en menys de trenta dies.',
        sources: ['letterboxd-account-deactivation', 'letterboxd-faq'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['letterboxd-faq'], 'Opció d’exportació a la configuració del web: un fitxer zip amb els CSV de tot el compte, incloent-hi el contingut esborrat.'),
        exportFormatQuality: 'open',
        rightsExercise: f('yes', 'official', ['letterboxd-privacy-policy'], 'Accés, rectificació i supressió des de la pàgina de configuració; la resta de drets, per correu.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['letterboxd-faq', 'letterboxd-privacy-policy'], 'La manera documentada de no veure publicitat és pagar la subscripció Pro o Patron.'),
        telemetryOptOut: unknown(),
        granularControls: f('yes', 'official', ['letterboxd-faq'], 'Cada entrada del diari té mode de privadesa: pública, només per a les amistats properes o només per a tu, i es pot fixar un valor per defecte.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: na('És una xarxa social de contingut públic; no hi ha comunicacions privades que xifrar d’extrem a extrem.'),
        transportEncryption: f('yes', 'official', ['letterboxd-privacy-policy']),
        atRestEncryption: unknown(),
        mfa: f('partial', 'official', ['letterboxd-faq'], 'Verificació en dos passos amb codis TOTP. No admet SMS ni correu i no dona codis de recuperació.', { methods: ['totp'] }),
        independentAudits: unknown(),
        bugBounty: unknown('No hem trobat ni programa de recompenses ni fitxer security.txt.'),
        vulnerabilityDisclosure: f('partial', 'official', ['letterboxd-security-notices'], 'Hi ha una pàgina pública d’avisos de seguretat amb un contacte de l’equip de seguretat, però no una política de divulgació.'),
      },
      alternatives: [
        {
          app: 'filmaffinity',
          comparability: 'partial',
          rationale: 'Cobreix la fitxa de pel·lícules, les puntuacions i les crítiques en castellà, amb un ús de dades més convencional.',
          tradeOffs: 'No té el diari de visionats ni la xarxa social de llistes i seguidors que és el nucli de Letterboxd.',
        },
      ],
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: true,
        openQuestions: ['Quant de temps es conserven les dades de publicitat i les galetes Common ID?'],
      },
    },

    {
      slug: 'bumpy',
      name: 'Bumpy',
      company: 'mv-bumpy-group',
      categories: ['cites'],
      tagline: 'Comparteix els perfils amb l’aplicació germana per a homes gais, activat per defecte',
      summary:
        'Bumpy és una aplicació de cites internacionals amb una política de privadesa inusualment detallada: corresponsabilitat de l’article 26 entre una societat de Delaware i una de Xipre, taula completa de bases jurídiques i de terminis i xifratge AES-256 en repòs. El problema és una altra cosa: si dius que busques una parella del mateix sexe, el teu perfil també es mostra a Wonder, l’aplicació germana per a homes gais. Ve activat per defecte i només es desactiva enviant un correu.',
      platforms: ['ios', 'android', 'web'],
      businessModel: 'freemium',
      jurisdiction: 'Xipre (Unió Europea) i Estats Units',
      links: {
        website: 'https://bumpy.app/',
        privacyPolicy: 'https://bumpy.app/privacy-policy',
        appStore: 'https://apps.apple.com/es/app/id1455336523',
      },
      accountRequired: f('yes', 'official', ['bumpy-privacy-policy']),
      openSource: f('no', 'official', ['bumpy-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Qui t’agrada, quina cara tens i on ets. Entre les dades que recull hi ha orientació sexual, conviccions religioses, origen ètnic i plantilles de geometria facial: categories especials de l’article 9 del RGPD.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'] }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['bumpy-privacy-policy'] }),
        row('adreca-electronica', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bumpy-privacy-policy'] }),
        row('numero-de-telefon', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bumpy-privacy-policy'] }),
        row('orientacio-sexual', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'personalitzacio-de-continguts'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'], note: 'La preferència de gènere que busques fa que el perfil es mostri també a Wonder, l’aplicació germana per a homes gais, per defecte.' }),
        row('conviccions-i-opinions', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bumpy-privacy-policy'], note: 'Religió o creences filosòfiques, amb consentiment exprés.' }),
        row('origen-etnic-o-nacionalitat', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bumpy-privacy-policy'] }),
        row('dades-biometriques', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['seguretat-i-prevencio-del-frau'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'], note: 'Plantilles de geometria facial generades a la verificació de la foto; el resum de la cara de qui és expulsat es guarda fins a sis anys.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['compliment-legal', 'seguretat-i-prevencio-del-frau'], sources: ['bumpy-privacy-policy'], note: 'S’esborra com a molt tard 72 hores després de la verificació.' }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['bumpy-privacy-policy'], note: 'Xats, trucades de veu i vídeo; es tradueixen i es moderen amb eines d’intel·ligència artificial.' }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'], note: 'Per defecte només ubicació aproximada per IP; el GPS només si actives la verificació d’ubicació o el mapa.' }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'] }),
        row('identificador-publicitari', 'optional', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'], note: 'Només amb consentiment: a l’EEE l’analítica i el màrqueting estan desactivats per defecte.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'millora-del-producte'], sources: ['bumpy-app-store', 'bumpy-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['bumpy-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['bumpy-app-store'], 'L’etiqueta declara identificadors i dades d’ús com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['bumpy-privacy-policy'], 'Identificadors publicitaris, només amb consentiment.'),
        thirdPartyTrackersPresent: f('partial', 'official', ['bumpy-privacy-policy'], 'Els SDK d’analítica i de màrqueting estan desactivats per defecte a l’EEE, el Regne Unit i Suïssa.'),
      },
      dataUses: {
        targetedAdvertising: f('partial', 'official', ['bumpy-privacy-policy'], 'Només amb consentiment previ a l’EEE.'),
        profiling: f('yes', 'official', ['bumpy-privacy-policy'], 'Recomanacions i emparellaments, també entre Bumpy i Wonder.'),
        aiTraining: f('partial', 'official', ['bumpy-privacy-policy'], 'Fa servir eines d’IA per traduir els missatges i per moderar continguts; no diu que entreni models propis amb les converses.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['bumpy-privacy-policy'], 'Allotjament, pagaments, verificació d’identitat i d’edat, antifrau, traducció i IA, cartografia i atenció a l’usuari, amb contracte d’encarregat.'),
        intraGroupSharing: f('yes', 'official', ['bumpy-privacy-policy'], 'Bumpy i Wonder comparteixen infraestructura i, en el cas descrit, la visibilitat dels perfils.'),
        dataBrokerSales: f('no', 'official', ['bumpy-privacy-policy'], '«We do not sell personal data for money», ni tampoc dades sensibles ni identificadors biomètrics per a publicitat.'),
        internationalTransfers: f('yes', 'official', ['bumpy-privacy-policy'], 'Clàusules contractuals tipus 2021/914, Data Privacy Framework quan el destinatari hi està certificat i, excepcionalment, l’article 49.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['bumpy-privacy-policy'], 'Taula completa de terminis per a cada tipus de dada.'),
        dataAfterDeletion: f('partial', 'official', ['bumpy-privacy-policy'], 'Vint-i-vuit dies de supressió suau, i després queden les dades de transaccions, els registres de consentiment i les proves de les expulsions.'),
        periods: [
          { dataType: 'document-identificatiu-oficial', period: 'Fins a 72 hores després de la verificació', sources: ['bumpy-privacy-policy'] },
          { dataType: 'ubicacio-precisa', period: '24-48 hores a la cua de supressió després de tancar el compte', sources: ['bumpy-privacy-policy'] },
          { dataType: 'dades-biometriques', period: 'El resum facial de les persones expulsades, fins a 6 anys', sources: ['bumpy-privacy-policy'] },
          { dataType: 'historial-de-compres', period: 'Fins a 10 anys per obligacions fiscals', sources: ['bumpy-privacy-policy'] },
          { dataType: 'adreca-ip', period: 'Registres de servidor i de seguretat, fins a 12 mesos', sources: ['bumpy-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['bumpy-privacy-policy']),
        selfService: unknown('La política descriu la supressió suau i els terminis, però no documenta el camí dins de l’aplicació.'),
        difficulty: 'unknown',
        waitingPeriodDays: 28,
        dataRetained: 'Transaccions fins a deu anys, registres de consentiment i de l’exclusió voluntària de la visibilitat creuada fins a sis anys, i proves de les expulsions fins a sis anys.',
        obstacles: 'El compte queda vint-i-vuit dies en supressió suau abans d’esborrar-se, i les còpies dels perfils que ja s’han enviat a altres persones no es poden recuperar.',
        sources: ['bumpy-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['bumpy-privacy-policy'], 'Dret de portabilitat en format estructurat i llegible per màquina, a petició a legal@bumpy.app.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['bumpy-privacy-policy'], 'Per correu a legal@bumpy.app o des de «Contact us» a la configuració, amb resposta en un mes.', { url: 'mailto:legal@bumpy.app' }),
      },
      controls: {
        adPersonalizationOptOut: f('yes', 'official', ['bumpy-privacy-policy'], 'Interruptors separats al registre per al màrqueting i per a l’analítica i la publicitat, desactivats per defecte a l’EEE.'),
        telemetryOptOut: f('yes', 'official', ['bumpy-privacy-policy'], 'L’analítica no essencial requereix consentiment.'),
        granularControls: f('partial', 'official', ['bumpy-privacy-policy'], 'El consentiment és granular camp a camp per a les dades sensibles, però la visibilitat creuada amb Wonder no té interruptor: s’ha de demanar per correu.'),
        defaultPosture: 'mixed',
        darkPatterns: f('partial', 'official', ['bumpy-privacy-policy'], 'La visibilitat creuada amb l’aplicació per a homes gais ve activada per defecte i l’única sortida és escriure un correu.'),
        darkPatternList: [
          {
            type: 'preselected',
            severity: 'high',
            description:
              'Si la preferència de gènere indica que busques una parella del mateix sexe, el perfil es mostra també a Wonder sense demanar-ho. La política ho reconeix i diu que l’exclusió voluntària és provisional fins que hi hagi un flux de consentiment dins de l’aplicació.',
            sources: ['bumpy-privacy-policy'],
          },
          {
            type: 'hidden-exit',
            severity: 'medium',
            description: 'Per desactivar aquesta visibilitat creuada cal enviar un correu a support@bumpy.app: no hi ha cap opció a la configuració.',
            sources: ['bumpy-privacy-policy'],
          },
        ],
      },
      security: {
        e2ee: f('no', 'official', ['bumpy-privacy-policy'], 'Els missatges es tradueixen i es moderen amb eines automàtiques, i el xifratge que es documenta és en trànsit i en repòs.', {
          scope: 'none',
        }),
        transportEncryption: f('yes', 'official', ['bumpy-privacy-policy'], 'TLS.'),
        atRestEncryption: f('yes', 'official', ['bumpy-privacy-policy'], 'AES-256.'),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: unknown('No hi ha ni programa de recompenses ni fitxer security.txt.'),
        vulnerabilityDisclosure: f('partial', 'official', ['bumpy-privacy-policy'], 'La política demana comunicar els problemes de seguretat a support@bumpy.app i descriu un procés de notificació de bretxes en 72 hores a l’autoritat xipriota.'),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'El web de Bumpy es genera al navegador; la política s’ha llegit del mòdul JavaScript que la conté, no d’una pàgina servida com a HTML.',
        openQuestions: [
          'Quin és el camí exacte per eliminar el compte des de l’aplicació?',
          'Quin tractament fa Bumpy de la preferència de gènere per no considerar-la una dada d’orientació sexual, tal com sosté la política?',
        ],
      },
    },

    {
      slug: 'azar',
      name: 'Azar',
      company: 'mtch-technology-services',
      categories: ['xarxes-socials', 'cites'],
      tagline: 'Videoxat amb desconeguts dins de Match Group, amb terminis de conservació molt detallats',
      summary:
        'Azar posa en contacte gent d’arreu del món en un videoxat aleatori. El va crear la coreana Hyperconnect, que Match Group va comprar el 2021, i per això a l’Espai Econòmic Europeu el responsable del tractament és la mateixa societat irlandesa que hi ha darrere de Tinder. Això vol dir compartició de dades amb la resta del grup per a seguretat, recomanacions i publicitat. La política dona terminis de conservació molt concrets i la geometria facial dels efectes es processa només al dispositiu.',
      platforms: ['ios', 'android'],
      businessModel: 'freemium',
      jurisdiction: 'Irlanda (Unió Europea) per a l’EEE; Corea del Sud per a la resta',
      links: {
        website: 'https://azarlive.com/',
        privacyPolicy: 'https://azarlive.com/policy',
        appStore: 'https://apps.apple.com/es/app/id972558973',
      },
      accountRequired: f('yes', 'official', ['azar-privacy-policy'], 'Cal compte i tenir divuit anys o més.'),
      openSource: f('no', 'official', ['azar-app-store'], undefined, { licence: 'Privativa' }),
      dataSummary:
        'Cara, veu i conversa amb desconeguts, més la ubicació i les inferències que el servei en treu. Tot va a parar a una infraestructura compartida amb la resta d’aplicacions de Match Group.',
      dataCollection: [
        row('nom-i-cognoms', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['azar-app-store', 'azar-privacy-policy'], note: 'Àlies, gènere i data de naixement al crear el compte.' }),
        row('data-de-naixement', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'compliment-legal'], sources: ['azar-privacy-policy'] }),
        row('adreca-electronica', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['azar-app-store', 'azar-privacy-policy'] }),
        row('numero-de-telefon', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['azar-privacy-policy'] }),
        row('orientacio-sexual', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['azar-privacy-policy'], note: 'La política avisa que part de les dades del perfil poden ser sensibles en alguns països, com l’orientació sexual, i que es tracten amb consentiment.' }),
        row('veu-i-audio', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['azar-app-store', 'azar-privacy-policy'] }),
        row('fotografies-i-videos', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['azar-app-store', 'azar-privacy-policy'], note: 'Fotos, vídeos i emissions en directe.' }),
        row('dades-biometriques', 'optional', { linked: 'no', tracking: 'no', shared: 'none', purposes: ['prestacio-del-servei'], sources: ['azar-privacy-policy', 'azar-face-geometry'], note: 'La geometria facial dels efectes es processa al dispositiu i es descarta en deixar de fer-los servir.' }),
        row('document-identificatiu-oficial', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['seguretat-i-prevencio-del-frau', 'compliment-legal'], sources: ['azar-privacy-policy'] }),
        row('contingut-de-missatges', 'yes', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei', 'moderacio-de-continguts'], sources: ['azar-app-store', 'azar-privacy-policy'] }),
        row('ubicacio-precisa', 'optional', { linked: 'yes', tracking: 'no', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['azar-app-store', 'azar-privacy-policy'], note: 'Latitud i longitud, amb permís del dispositiu.' }),
        row('historial-de-cerca', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['azar-app-store'] }),
        row('dades-de-pagament', 'optional', { linked: 'yes', tracking: 'no', shared: 'third-parties', purposes: ['prestacio-del-servei'], sources: ['azar-app-store', 'azar-privacy-policy'] }),
        row('historial-de-compres', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['prestacio-del-servei'], sources: ['azar-app-store'] }),
        row('identificador-publicitari', 'yes', { linked: 'yes', tracking: 'yes', shared: 'third-parties', purposes: ['publicitat-personalitzada', 'mesura-publicitaria'], sources: ['azar-app-store', 'azar-privacy-policy'], note: 'Els socis publicitaris converteixen el correu, el telèfon o l’identificador publicitari en un identificador propi.' }),
        row('interessos-inferits', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['elaboracio-de-perfils', 'recomanacions-algoritmiques', 'publicitat-personalitzada'], sources: ['azar-privacy-policy'], note: 'La política parla d’«insights and inferences» sobre preferències, característiques i actituds.' }),
        row('interaccions-i-us', 'yes', { linked: 'yes', tracking: 'yes', shared: 'group', purposes: ['mesura-i-analisi-dus', 'recomanacions-algoritmiques'], sources: ['azar-app-store', 'azar-privacy-policy'] }),
        row('dades-de-diagnostic', 'yes', { linked: 'no', tracking: 'no', shared: 'third-parties', purposes: ['millora-del-producte'], sources: ['azar-app-store'] }),
      ],
      tracking: {
        crossAppTracking: f('yes', 'official', ['azar-app-store'], 'L’etiqueta declara identificadors i dades d’ús com a dades utilitzades per rastrejar.'),
        advertisingIdentifiers: f('yes', 'official', ['azar-privacy-policy'], 'Identificadors publicitaris i identificadors associats a galetes o tecnologies similars.'),
        thirdPartyTrackersPresent: f('yes', 'official', ['azar-privacy-policy'], 'Socis publicitaris que recullen dades amb galetes i SDK dins del servei.'),
      },
      dataUses: {
        targetedAdvertising: f('yes', 'official', ['azar-privacy-policy']),
        profiling: f('yes', 'official', ['azar-privacy-policy'], 'Inferències sobre preferències i comportament, també per als sistemes de recomanació compartits de Match Group.'),
        aiTraining: f('partial', 'official', ['azar-privacy-policy'], 'Desenvolupa i millora eines amb aprenentatge automàtic per a la seguretat i el producte, i pot conservar dades anonimitzades per fer-ho.'),
      },
      sharing: {
        thirdPartySharing: f('yes', 'official', ['azar-privacy-policy'], 'Proveïdors, socis de seguretat, socis publicitaris i autoritats.'),
        intraGroupSharing: f('yes', 'official', ['azar-privacy-policy'], 'Amb la resta de Match Group per detectar males conductes, per als sistemes de recomanació, per a publicitat segmentada i per a funcions entre plataformes.'),
        dataBrokerSales: unknown('Per a l’EEE la política no parla de venda; la secció de «sale or sharing» és només per als Estats Units.'),
        internationalTransfers: f('yes', 'official', ['azar-privacy-policy'], 'Decisions d’adequació i clàusules contractuals tipus de la Comissió Europea.', { mechanism: 'sccs' }),
      },
      transparency: {
        policyClarity: 'high',
        transparencyReport: unknown(),
      },
      retention: {
        definedPeriods: f('yes', 'official', ['azar-privacy-policy'], 'Finestra de seguretat de tres mesos, transaccions deu anys, registres de trànsit un any, consentiments cinc anys.'),
        dataAfterDeletion: f('partial', 'official', ['azar-privacy-policy', 'azar-delete-account'], 'El compte es pot restaurar durant noranta dies; després queden les dades amb termini legal i les de seguretat.'),
        periods: [
          { dataType: 'identificador-de-compte', period: '3 mesos de finestra de seguretat després de tancar el compte', sources: ['azar-privacy-policy'] },
          { dataType: 'historial-de-compres', period: '10 anys per obligacions fiscals i comptables', sources: ['azar-privacy-policy'] },
          { dataType: 'metadades-de-comunicacio', period: 'Registres de trànsit, 1 any', sources: ['azar-privacy-policy'] },
        ],
      },
      accountDeletion: {
        possible: f('yes', 'official', ['azar-delete-account']),
        selfService: f('yes', 'official', ['azar-delete-account'], 'Des de l’aplicació i des del web.'),
        directUrl: 'https://help.azarlive.com/hc/en-us/articles/226899747-How-to-delete-my-account',
        difficulty: 'medium',
        waitingPeriodDays: 90,
        requiresSupportContact: false,
        steps: [
          'Demana abans la còpia de les dades si la vols: un cop esborrat el compte ja no es pot descarregar.',
          'Cancel·la la subscripció activa: la baixa del compte no la cancel·la.',
          'Al perfil, obre la icona de configuració i tria «Manage Account».',
          'Toca «Delete Account» i confirma-ho a la finestra emergent.',
          'No tornis a entrar durant noranta dies: si ho fas, el compte es restaura.',
        ],
        obstacles: 'Desinstal·lar l’aplicació no dona de baixa el compte, i durant els noranta dies de gràcia les dades encara hi són.',
        dataRetained: 'Tres mesos de finestra de seguretat, dades de transaccions deu anys, registres de trànsit un any i dades per impedir que torni a obrir compte qui ha estat expulsat.',
        sources: ['azar-delete-account', 'azar-privacy-policy'],
      },
      userRights: {
        dataExport: f('yes', 'official', ['azar-data-request'], 'Des de Configuració > Ajustos del compte > «Request My Azar Data»; arriba per correu en un zip protegit amb contrasenya.'),
        exportFormatQuality: 'unknown',
        rightsExercise: f('yes', 'official', ['azar-privacy-policy'], 'Formulari en línia i delegat de protecció de dades a MTCH Technology Services Limited, Dublín.'),
      },
      controls: {
        adPersonalizationOptOut: f('partial', 'official', ['azar-privacy-policy'], 'Hi ha controls a la configuració per oposar-se a certs tractaments, però l’opció explícita de no compartir per a publicitat es descriu per als Estats Units.'),
        telemetryOptOut: unknown(),
        granularControls: f('partial', 'official', ['azar-privacy-policy'], 'El consentiment per a dades sensibles i els permisos del dispositiu es poden retirar; la compartició dins de Match Group no té interruptor.'),
        defaultPosture: 'mixed',
        darkPatterns: unknown(),
      },
      security: {
        e2ee: unknown('La política no diu si les trucades de vídeo van xifrades d’extrem a extrem, i la moderació de continguts fa pensar que no.'),
        transportEncryption: unknown(),
        atRestEncryption: unknown(),
        mfa: unknown(),
        independentAudits: unknown(),
        bugBounty: f('no', 'official', ['azar-vulnerability-report'], 'La pàgina de comunicació de vulnerabilitats no ofereix cap recompensa econòmica.'),
        vulnerabilityDisclosure: f('yes', 'official', ['azar-vulnerability-report'], undefined, { url: 'https://help.azarlive.com/hc/en-us/articles/4407585822233-Reporting-Security-Vulnerabilities' }),
      },
      review: {
        researchStatus: 'documented',
        lastReviewedAt: WAVE2_DATE,
        incidentsReviewed: false,
        editorialNotes:
          'La versió de la política vigent el dia de la revisió és la del 8 de novembre del 2025; n’hi ha una de posterior amb data del 29 de setembre del 2026 que encara no havia entrat en vigor.',
        openQuestions: [
          'Com es modera exactament el videoxat en directe i quant de temps es conserven els fragments revisats?',
          'Hi ha sancions o expedients d’autoritats de protecció de dades contra Hyperconnect per l’ús de les imatges de les persones usuàries?',
        ],
      },
    },
  ],

  incidents: [
    {
      slug: 'wechat-citizen-lab-vigilancia-2020',
      title: 'El Citizen Lab documenta l’anàlisi de continguts de comptes internacionals de WeChat',
      type: 'misuse',
      severity: 'high',
      apps: ['wechat'],
      company: 'tencent',
      occurredAt: '2020-05-07',
      disclosedAt: '2020-05-07',
      description:
        'Els experiments del Citizen Lab van mostrar que els documents i les imatges enviats només entre comptes registrats fora de la Xina també passen per un sistema d’anàlisi que busca contingut políticament sensible a la Xina. Els fitxers detectats serveixen per entrenar i ampliar el sistema de censura que WeChat aplica als comptes xinesos. Les respostes de Tencent a les peticions d’accés no van aclarir com es feien servir aquestes dades.',
      affectedPeople: 'Persones usuàries de WeChat amb comptes registrats fora de la Xina continental.',
      sources: ['wechat-citizen-lab-2020'],
    },
    {
      slug: 'letterboxd-acces-compte-intern-2024',
      title: 'Accés no autoritzat a un compte del personal de Letterboxd',
      type: 'breach',
      severity: 'medium',
      apps: ['letterboxd'],
      company: 'letterboxd',
      occurredAt: '2024-02-15',
      disclosedAt: '2024-03-15',
      description:
        'Letterboxd va detectar activitat sospitosa en un compte del seu personal i el va bloquejar. Durant aquesta finestra, algú va poder fer servir l’eina interna que exporta la informació d’una persona membre. Les dades afectades incloïen l’adreça electrònica, les llistes privades, la llista de pendents si era privada i el contingut esborrat. No es va entrar a cap compte, no es van modificar dades i no es van veure contrasenyes ni informació financera. L’empresa va reconèixer que no podia determinar quins comptes havien estat consultats.',
      affectedPeople: 'Bastant menys de l’1 % dels comptes, segons l’empresa.',
      sources: ['letterboxd-security-notices'],
    },
  ],

  storeIds: {
    life360: 'com.life360.safetymap',
    widgetable: 'com.widgetable.theme',
    'sticker-ly': 'com.snowcorp.stickerly',
    bump: 'co.amo.ios.location',
    corner: 'inc.corner.Corner.App',
    wechat: 'com.tencent.xin',
    plato: 'com.platoapp.Plato',
    letterboxd: 'com.letterboxd.LetterboxdApp',
    bumpy: 'com.super-smash.bumpy',
    azar: 'com.hpcnt.azar',
  },
}
