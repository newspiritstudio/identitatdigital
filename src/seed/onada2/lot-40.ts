import type { SeedLot } from './types'

/**
 * Lot 40: administracions catalanes que comparteixen diverses fitxes del bloc
 * català (Generalitat, CCMA, transport i serveis municipals).
 *
 * No porta fitxes pròpies. Viu en un lot a part perquè els lots 41 a 45 es
 * documenten en paral·lel i tots hi poden apuntar sense crear-les dues vegades.
 */
export const lot: SeedLot = {
  companies: [
    {
      slug: 'generalitat-de-catalunya',
      name: 'Generalitat de Catalunya',
      legalName: 'Administració de la Generalitat de Catalunya',
      description:
        'Administració autonòmica de Catalunya. Els seus departaments i organismes publiquen aplicacions de salut, meteorologia, trànsit i tributs, i n’és també la titular dels mitjans públics i dels Ferrocarrils de la Generalitat per mitjà d’entitats pròpies.',
      headquartersCountry: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      website: 'https://web.gencat.cat/',
      productDomains: ['gencat.cat'],
    },
    {
      slug: 'ajuntament-de-barcelona',
      name: 'Ajuntament de Barcelona',
      legalName: 'Ajuntament de Barcelona',
      description:
        'Administració local de la ciutat de Barcelona. Publica aplicacions de serveis municipals directament o per mitjà d’empreses públiques com Barcelona de Serveis Municipals.',
      headquartersCountry: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      website: 'https://ajuntament.barcelona.cat/',
      productDomains: ['barcelona.cat', 'bcn.cat'],
    },
    {
      slug: 'area-metropolitana-de-barcelona',
      name: 'Àrea Metropolitana de Barcelona',
      legalName: 'Àrea Metropolitana de Barcelona',
      description:
        'Administració pública supramunicipal dels municipis de l’entorn de Barcelona, amb competències de transport públic, mobilitat, medi ambient i urbanisme. Transports Metropolitans de Barcelona en depèn.',
      headquartersCountry: 'ES',
      leadSupervisoryAuthority: 'apdcat',
      ownership: 'state',
      website: 'https://www.amb.cat/',
      productDomains: ['amb.cat'],
    },
  ],
  sources: [],
  apps: [],
  incidents: [],
  storeIds: {},
}
