/**
 * Vocabulari de les categories de dades de les filtracions.
 *
 * Have I Been Pwned i XposedOrNot publiquen les dades exposades en una
 * filtració amb el mateix vocabulari anglès (XposedOrNot el pren de HIBP, amb
 * alguna diferència de majúscules). Aquí hi ha la correspondència amb el
 * catàleg de tipus de dada del projecte, que la fan servir l'importador del
 * catàleg i les eines que consulten filtracions en directe.
 */

/**
 * Correspondència entre el vocabulari de HIBP i el del projecte.
 *
 * És explícita i cobreix totes les categories que el catàleg fa servir avui.
 * Un `null` no és un oblit: vol dir que s'ha mirat i que el projecte no té cap
 * tipus de dada equivalent, cosa que és una decisió de vocabulari i no de
 * l'importador. Aquestes categories acaben a `unmappedDataClasses` i es
 * llisten al final de l'execució, que és com es detecten els buits reals del
 * catàleg en comptes d'inventar-ne d'hipotètics.
 *
 * Les categories que HIBP afegeixi més endavant no seran ni aquí ni al
 * vocabulari: es tracten com a no mapades i es reporten a part, marcades com a
 * desconegudes, perquè algú decideixi on van.
 */
export const DATA_CLASS_MAP: Record<string, string | null> = {
  // Identificadors i contacte.
  'Email addresses': 'adreca-electronica',
  'Recovery email addresses': 'adreca-electronica',
  Names: 'nom-i-cognoms',
  'Display names': 'nom-i-cognoms',
  Nicknames: 'nom-i-cognoms',
  Usernames: 'identificador-de-compte',
  'Instant messenger identities': 'identificador-de-compte',
  'Social media profiles': 'identificador-de-compte',
  'User statuses': 'identificador-de-compte',
  'Phone numbers': 'numero-de-telefon',
  'Partial phone numbers': 'numero-de-telefon',
  'Physical addresses': 'adreca-postal',
  'Delivery instructions': 'adreca-postal',
  'Address book contacts': 'llista-de-contactes',
  'Social connections': 'xarxa-de-contactes',
  'Spoken languages': 'llengua',
  'Language preferences': 'llengua',

  // Dispositiu i xarxa. Els identificadors de maquinari (IMEI, MAC, número de
  // sèrie) van tots a «identificador de dispositiu» perquè fan la mateixa
  // funció: assenyalar un aparell concret de manera persistent.
  'IP addresses': 'adreca-ip',
  'MAC addresses': 'identificador-de-dispositiu',
  'IMEI numbers': 'identificador-de-dispositiu',
  'IMSI numbers': 'identificador-de-dispositiu',
  'Device serial numbers': 'identificador-de-dispositiu',
  'Device information': 'informacio-del-dispositiu',
  'Browser user agent details': 'informacio-del-dispositiu',
  'Time zones': 'informacio-del-dispositiu',
  'Telecommunications carrier': 'xarxa-i-connectivitat',
  'Cellular network names': 'xarxa-i-connectivitat',
  'Apps installed on devices': 'aplicacions-instal-lades',

  // Ubicació. HIBP distingeix la població del parell de coordenades, i el
  // projecte també: la diferència entre les dues és tota la sensibilitat.
  'Geographic locations': 'ubicacio-aproximada',
  'Latitude and longitude pairs': 'ubicacio-precisa',

  // Comportament.
  'Website activity': 'interaccions-i-us',
  'Device usage tracking data': 'interaccions-i-us',
  'Login histories': 'interaccions-i-us',
  'Profile statistics': 'interaccions-i-us',
  'Customer interactions': 'interaccions-i-us',
  'Browsing histories': 'historial-de-navegacio',

  // Contingut de la persona usuària. Els tiquets d'atenció i els registres de
  // servei són converses privades amb el servei, i per això entren aquí.
  'Private messages': 'contingut-de-missatges',
  'Email messages': 'contingut-de-missatges',
  'Chat logs': 'contingut-de-missatges',
  'SMS messages': 'contingut-de-missatges',
  'Support tickets': 'contingut-de-missatges',
  'Customer service records': 'contingut-de-missatges',
  'AI prompts': 'contingut-de-missatges',
  'Forum posts': 'publicacions-i-comentaris',
  Comments: 'publicacions-i-comentaris',
  Bios: 'publicacions-i-comentaris',
  'Personal descriptions': 'publicacions-i-comentaris',
  'Customer feedback': 'publicacions-i-comentaris',
  'Survey results': 'publicacions-i-comentaris',
  'Profile photos': 'fotografies-i-videos',
  Avatars: 'fotografies-i-videos',
  Photos: 'fotografies-i-videos',
  'Audio recordings': 'veu-i-audio',

  // Diners. «Dades de pagament» cobreix el mitjà de pagament i «historial de
  // compres» el rastre del que s'ha comprat; són coses diferents i revelen
  // coses diferents.
  'Partial credit card data': 'dades-de-pagament',
  'Credit cards': 'dades-de-pagament',
  'Credit card CVV': 'dades-de-pagament',
  'Bank account numbers': 'dades-de-pagament',
  'Payment methods': 'dades-de-pagament',
  'Financial transactions': 'dades-de-pagament',
  'Cryptocurrency wallet addresses': 'dades-de-pagament',
  Purchases: 'historial-de-compres',
  'Purchasing habits': 'historial-de-compres',
  'Payment histories': 'historial-de-compres',
  // Tot això només existeix perquè hi ha hagut una compra al darrere: el
  // programa de punts, el paquet que s'envia i la garantia que es reclama.
  'Loyalty program details': 'historial-de-compres',
  'Reward program balances': 'historial-de-compres',
  'Shipment tracking numbers': 'historial-de-compres',
  'Warranty claims': 'historial-de-compres',

  // Categories especials i salut. Els hàbits de consum (alcohol, tabac,
  // drogues, alimentació) s'hi inclouen perquè permeten deduir estat de salut,
  // que és el que els fa perillosos en una filtració.
  'Biometric data': 'dades-biometriques',
  'Personal health data': 'dades-de-salut',
  'HIV statuses': 'dades-de-salut',
  'Health insurance information': 'dades-de-salut',
  Disabilities: 'dades-de-salut',
  'Fitness levels': 'dades-de-salut',
  'Drinking habits': 'dades-de-salut',
  'Smoking habits': 'dades-de-salut',
  'Drug habits': 'dades-de-salut',
  'Eating habits': 'dades-de-salut',
  'Sexual orientations': 'orientacio-sexual',
  'Sexual fetishes': 'orientacio-sexual',
  Religions: 'conviccions-i-opinions',
  'Political views': 'conviccions-i-opinions',
  // Una donació diu a qui dónes suport, que és el mateix que dir què penses.
  'Political donations': 'conviccions-i-opinions',
  'Charitable donations': 'conviccions-i-opinions',

  // Credencials. La família «credentials» del vocabulari es va obrir arran de
  // la primera importació: les contrasenyes surten a dues de cada tres
  // filtracions i abans no tenien on anar. Es distingeix el que la persona
  // sap (contrasenya, PIN, pista, pregunta de recuperació) del que el servei
  // li lliura per no haver-l'hi de tornar a demanar (galetes de sessió,
  // testimonis, claus), perquè el risc no és el mateix: la primera es canvia
  // en un minut i sovint es reutilitza en vint serveis més.
  Passwords: 'contrasenya',
  'Historical passwords': 'contrasenya',
  'Password hints': 'contrasenya',
  'Password strengths': 'contrasenya',
  PINs: 'contrasenya',
  'Security questions and answers': 'pregunta-de-seguretat',
  // El cognom de soltera de la mare no és una dada familiar qualsevol: és la
  // pregunta de recuperació de tota la banca del segle passat.
  'Mothers maiden names': 'pregunta-de-seguretat',
  'Auth tokens': 'testimoni-d-autenticacio',
  'Encrypted keys': 'testimoni-d-autenticacio',
  'Mnemonic phrases': 'testimoni-d-autenticacio',

  // Atributs declarats al perfil.
  'Dates of birth': 'data-de-naixement',
  'Partial dates of birth': 'data-de-naixement',
  Ages: 'data-de-naixement',
  'Age groups': 'data-de-naixement',
  Genders: 'genere',
  // El tractament («Sr.», «Sra.») no és res més que el gènere dit de manera
  // educada, i en una filtració revela el mateix.
  Salutations: 'genere',

  // Identificació oficial: documents emesos per un estat, que són la matèria
  // primera de la suplantació d'identitat.
  'Government issued IDs': 'document-identificatiu-oficial',
  'Partial government issued IDs': 'document-identificatiu-oficial',
  'Passport numbers': 'document-identificatiu-oficial',
  'Social security numbers': 'document-identificatiu-oficial',
  "Driver's licenses": 'document-identificatiu-oficial',

  // Origen i ciutadania, categoria especial de l'article 9.
  Ethnicities: 'origen-etnic-o-nacionalitat',
  Races: 'origen-etnic-o-nacionalitat',
  Nationalities: 'origen-etnic-o-nacionalitat',
  'Citizenship statuses': 'origen-etnic-o-nacionalitat',
  'Places of birth': 'origen-etnic-o-nacionalitat',

  // Situació familiar, inclosos els noms de familiars: són dades de terceres
  // persones que no s'han registrat enlloc.
  'Marital statuses': 'situacio-familiar',
  'Relationship statuses': 'situacio-familiar',
  'Family structure': 'situacio-familiar',
  'Spouses names': 'situacio-familiar',
  "Family members' names": 'situacio-familiar',
  'Parenting plans': 'situacio-familiar',

  // Vida laboral i formativa.
  'Job titles': 'ocupacio-i-carrec',
  Occupations: 'ocupacio-i-carrec',
  Employers: 'ocupacio-i-carrec',
  'Company names': 'ocupacio-i-carrec',
  'Employment statuses': 'ocupacio-i-carrec',
  'Career levels': 'ocupacio-i-carrec',
  'Professional skills': 'ocupacio-i-carrec',
  'Years of professional experience': 'ocupacio-i-carrec',
  'Job applications': 'ocupacio-i-carrec',
  'Education levels': 'nivell-formatiu',
  'Academic records': 'nivell-formatiu',
  'School grades (class levels)': 'nivell-formatiu',

  // Situació econòmica, que és una cosa diferent del mitjà de pagament: no és
  // com pagues, és quant pots pagar i quant et fien.
  'Income levels': 'nivell-d-ingressos',
  Earnings: 'nivell-d-ingressos',
  'Account balances': 'nivell-d-ingressos',
  'Credit status information': 'nivell-d-ingressos',
  'Credit scores': 'nivell-d-ingressos',
  'Net worths': 'nivell-d-ingressos',
  'Socioeconomic levels': 'nivell-d-ingressos',
  'Loan information': 'nivell-d-ingressos',
  'Financial investments': 'nivell-d-ingressos',
  'Living costs': 'nivell-d-ingressos',
  'Utility bills': 'nivell-d-ingressos',
  'Home ownership statuses': 'nivell-d-ingressos',
  'Taxation records': 'nivell-d-ingressos',

  // El que continua sense equivalent. Són categories de cua llarga —cap no
  // arriba a deu filtracions— i totes descriuen coses que el projecte no
  // pregunta a cap fitxa: el cotxe que tens, els viatges que fas, el teu
  // aspecte o el teu signe del zodíac. Mentre ningú no les necessiti per
  // respondre una pregunta del directori, val més deixar-les fora del
  // vocabulari que inflar-lo amb tipus que no es faran servir mai.
  'Vehicle details': null,
  'Vehicle identification numbers (VINs)': null,
  'Vehicle registration plates': null,
  'Licence plates': null,
  'Car ownership statuses': null,
  'Travel habits': null,
  'Travel plans': null,
  'Flights taken': null,
  'Work habits': null,
  Appointments: null,
  'VIP statuses': null,
  'Buying preferences': null,
  'Personal interests': null,
  'Physical attributes': null,
  'Clothing sizes': null,
  'Tattoo status': null,
  'Beauty ratings': null,
  'Astrological signs': null,
  'IQ levels': null,
  'Deceased date': null,
  'Deceased statuses': null,
  'Homepage URLs': null,
  'User website URLs': null,

  // Variants amb què XposedOrNot anomena algunes categories de HIBP.
  'Credit card details': 'dades-de-pagament',
  'Government IDs': 'document-identificatiu-oficial',
  'Browser user agents': 'informacio-del-dispositiu',
  Nationality: 'origen-etnic-o-nacionalitat',
  'Vehicle registration numbers': null,
}

const LOWERCASE_MAP = new Map<string, string | null>(
  Object.entries(DATA_CLASS_MAP).map(([key, value]) => [key.toLocaleLowerCase('en'), value]),
)

/**
 * Tipus de dada del projecte per a una categoria de la font.
 *
 * `undefined` vol dir que la categoria no és al mapa (la font n'ha afegit una
 * de nova); `null`, que s'ha mirat i el projecte no en té d'equivalent. No es
 * poden confondre: el primer és un buit per revisar, el segon una decisió.
 */
export const dataClassToSlug = (dataClass: string): string | null | undefined => {
  const key = dataClass.trim().toLocaleLowerCase('en')
  return LOWERCASE_MAP.has(key) ? (LOWERCASE_MAP.get(key) ?? null) : undefined
}
