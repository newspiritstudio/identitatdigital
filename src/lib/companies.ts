/**
 * Valors tancats de la col·lecció `companies` amb la seva etiqueta en català.
 *
 * Els comparteixen el backend i el frontend: la fitxa pública mostrava el
 * codi intern («subsidiary», «commerce») perquè les etiquetes només vivien a
 * la configuració de Payload.
 */
export const ownershipOptions = [
  { label: 'Cotitzada en borsa', value: 'public' },
  { label: 'Privada', value: 'private' },
  { label: 'Filial d’un grup', value: 'subsidiary' },
  { label: 'Fundació o entitat sense ànim de lucre', value: 'nonprofit' },
  { label: 'Cooperativa o comunitat', value: 'community' },
  { label: 'Administració o organisme públic', value: 'state' },
  { label: 'Desconeguda', value: 'unknown' },
]

export const revenueModelOptions = [
  { label: 'Publicitat', value: 'advertising' },
  { label: 'Subscripcions', value: 'subscription' },
  { label: 'Model mixt (gratuït i de pagament)', value: 'freemium' },
  { label: 'Diverses fonts combinades', value: 'mixed' },
  { label: 'Venda de productes o comissions', value: 'commerce' },
  { label: 'Serveis al núvol i empresa', value: 'cloud' },
  { label: 'Maquinari', value: 'hardware' },
  { label: 'Donacions i finançament públic', value: 'donations' },
  { label: 'Desconeguda', value: 'unknown' },
]

const labelOf = (options: { label: string; value: string }[]) => {
  const map = new Map(options.map(({ value, label }) => [value, label]))
  return (value: string | null | undefined): string | null => (value ? (map.get(value) ?? value) : null)
}

export const ownershipLabel = labelOf(ownershipOptions)
export const revenueModelLabel = labelOf(revenueModelOptions)

/** Titularitats que una matriu converteix en «filial». Les públiques i les sense ànim de lucre es mantenen. */
export const OWNERSHIPS_IMPLYING_SUBSIDIARY = ['public', 'private', 'unknown']
