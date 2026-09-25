/**
 * Autoritats de protecció de dades que poden actuar com a autoritat de control
 * principal (article 56 del RGPD).
 *
 * Abans era text lliure i la mateixa autoritat hi constava de cinc maneres
 * («AEPD», «Agencia Española de Protección de Datos (AEPD)»…). Ara es desa un
 * codi i el nom es mostra sempre igual. `none` vol dir que l'empresa no té
 * establiment principal a la UE; el matís, si cal, va a `supervisoryNote`.
 */
export const supervisoryAuthorities = [
  { value: 'aepd', label: 'Agencia Española de Protección de Datos (AEPD)', country: 'ES' },
  { value: 'apdcat', label: 'Autoritat Catalana de Protecció de Dades (APDCAT)', country: 'ES' },
  { value: 'avpd', label: 'Autoridad Vasca de Protección de Datos (AVPD)', country: 'ES' },
  { value: 'ctpda', label: 'Consejo de Transparencia y Protección de Datos de Andalucía', country: 'ES' },
  { value: 'dpc-ie', label: 'Data Protection Commission (DPC, Irlanda)', country: 'IE' },
  { value: 'ap-nl', label: 'Autoriteit Persoonsgegevens (Països Baixos)', country: 'NL' },
  { value: 'cnil', label: 'Commission nationale de l’informatique et des libertés (CNIL, França)', country: 'FR' },
  { value: 'bfdi', label: 'Bundesbeauftragte für den Datenschutz (BfDI, Alemanya)', country: 'DE' },
  { value: 'berlin', label: 'Berliner Beauftragte für Datenschutz und Informationsfreiheit (Alemanya)', country: 'DE' },
  { value: 'hamburg', label: 'Hamburgische Beauftragte für Datenschutz (Alemanya)', country: 'DE' },
  { value: 'ldi-nrw', label: 'Landesbeauftragte für Datenschutz Nordrhein-Westfalen (Alemanya)', country: 'DE' },
  { value: 'lfdi-bw', label: 'Landesbeauftragter für den Datenschutz Baden-Württemberg (Alemanya)', country: 'DE' },
  { value: 'uld-sh', label: 'Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (Alemanya)', country: 'DE' },
  { value: 'garante-it', label: 'Garante per la protezione dei dati personali (Itàlia)', country: 'IT' },
  { value: 'cnpd-pt', label: 'Comissão Nacional de Proteção de Dados (Portugal)', country: 'PT' },
  { value: 'cnpd-lu', label: 'Commission nationale pour la protection des données (Luxemburg)', country: 'LU' },
  { value: 'apd-be', label: 'Autorité de protection des données (Bèlgica)', country: 'BE' },
  { value: 'dsb-at', label: 'Datenschutzbehörde (Àustria)', country: 'AT' },
  { value: 'imy-se', label: 'Integritetsskyddsmyndigheten (IMY, Suècia)', country: 'SE' },
  { value: 'datatilsynet-dk', label: 'Datatilsynet (Dinamarca)', country: 'DK' },
  { value: 'datatilsynet-no', label: 'Datatilsynet (Noruega)', country: 'NO' },
  { value: 'tietosuoja-fi', label: 'Tietosuojavaltuutetun toimisto (Finlàndia)', country: 'FI' },
  { value: 'aki-ee', label: 'Andmekaitse Inspektsioon (Estònia)', country: 'EE' },
  { value: 'vdai-lt', label: 'Valstybinė duomenų apsaugos inspekcija (Lituània)', country: 'LT' },
  { value: 'uodo-pl', label: 'Urząd Ochrony Danych Osobowych (Polònia)', country: 'PL' },
  { value: 'uoou-cz', label: 'Úřad pro ochranu osobních údajů (República Txeca)', country: 'CZ' },
  { value: 'naih-hu', label: 'Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH, Hongria)', country: 'HU' },
  { value: 'ip-si', label: 'Informacijski pooblaščenec (Eslovènia)', country: 'SI' },
  { value: 'cpdp-bg', label: 'Комисия за защита на личните данни (Bulgària)', country: 'BG' },
  { value: 'cpdp-cy', label: 'Commissioner for Personal Data Protection (Xipre)', country: 'CY' },
  { value: 'idpc-mt', label: 'Information and Data Protection Commissioner (Malta)', country: 'MT' },
  { value: 'ico-gb', label: 'Information Commissioner’s Office (ICO, Regne Unit)', country: 'GB' },
  { value: 'none', label: 'Cap: no té establiment principal a la UE', country: null },
] as const

export type SupervisoryAuthority = (typeof supervisoryAuthorities)[number]['value']

export const supervisoryAuthorityOptions = supervisoryAuthorities.map(({ value, label }) => ({ value, label }))

const byValue = new Map<string, string>(supervisoryAuthorities.map(({ value, label }) => [value, label]))

/** Nom de l'autoritat a partir del codi. Un valor desconegut es retorna tal qual. */
export const supervisoryAuthorityName = (value: string | null | undefined): string | null =>
  value ? (byValue.get(value) ?? value) : null
