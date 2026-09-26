/**
 * Valors tancats que el frontend mostra, amb la seva etiqueta en català.
 *
 * Les col·leccions de Payload les importen d'aquí com a `options`, de manera
 * que el backend i el web diuen el mateix. Abans les etiquetes només vivien a
 * la configuració de Payload i les fitxes publicaven el codi intern
 * («hidden-exit», «ongoing», «in-depth»).
 */
export type Option = { label: string; value: string }

export const labelOf = (options: readonly Option[]) => {
  const map = new Map(options.map(({ value, label }) => [value, label]))
  return (value: string | null | undefined): string | null => (value ? (map.get(value) ?? value) : null)
}

export const darkPatternTypeOptions: Option[] = [
  { label: 'Consentiment desequilibrat', value: 'unbalanced-consent' },
  { label: 'Camí de sortida amagat', value: 'hidden-exit' },
  { label: 'Insistència repetida', value: 'nagging' },
  { label: 'Llenguatge confús', value: 'confusing-language' },
  { label: 'Opcions preseleccionades', value: 'preselected' },
  { label: 'Culpabilització', value: 'confirmshaming' },
  { label: 'Altres', value: 'other' },
]

export const darkPatternSeverityOptions: Option[] = [
  { label: 'Baixa', value: 'low' },
  { label: 'Mitjana', value: 'medium' },
  { label: 'Alta', value: 'high' },
]

export const incidentSeverityOptions: Option[] = [...darkPatternSeverityOptions, { label: 'Crítica', value: 'critical' }]

export const regulatoryStatusOptions: Option[] = [
  { label: 'Ferma', value: 'final' },
  { label: 'Recorreguda', value: 'appealed' },
  { label: 'Anul·lada o reduïda', value: 'overturned' },
  { label: 'En tramitació', value: 'ongoing' },
]

export const researchStatusOptions: Option[] = [
  { label: 'Inicial (falten apartats)', value: 'initial' },
  { label: 'Documentada (apartats principals amb font)', value: 'documented' },
  { label: 'En profunditat (revisada i contrastada)', value: 'in-depth' },
]

export const darkPatternTypeLabel = labelOf(darkPatternTypeOptions)
export const severityLabel = labelOf(incidentSeverityOptions)
export const regulatoryStatusLabel = labelOf(regulatoryStatusOptions)
export const researchStatusLabel = labelOf(researchStatusOptions)

export const comparabilityOptions: Option[] = [
  { label: 'Cobreix la mateixa necessitat', value: 'equivalent' },
  { label: 'La cobreix parcialment', value: 'partial' },
  { label: 'És complementària', value: 'complementary' },
]

export const comparabilityLabel = labelOf(comparabilityOptions)
