import type { Exposure } from './compute'
import { EFFORT_LABELS, SIGNAL_LABELS, TIER_LABELS, type AppRisk, type BreachSummary, type Plan } from './plan'

/**
 * Informe del diagnòstic en Markdown.
 *
 * Es genera al navegador i es desa amb un enllaç de descàrrega local (`blob:`):
 * no passa per cap servidor. És text pla a posta, perquè es pugui llegir en
 * qualsevol lloc, guardar en un gestor de notes o imprimir, i perquè qualsevol
 * pugui comprovar què conté abans de compartir-lo.
 */

const plain = new Intl.NumberFormat('ca-ES')

const origin = (): string =>
  typeof window === 'undefined' ? 'https://identitat.digital' : window.location.origin

export const buildReport = ({
  exposure,
  plan,
  risks,
  breaches,
  done,
  date,
}: {
  exposure: Exposure
  plan: Plan
  risks: AppRisk[]
  breaches: BreachSummary
  done: string[]
  date: Date
}): string => {
  const doneSet = new Set(done)
  const base = origin()
  const lines: string[] = []
  const collected = exposure.dataTypes.filter((type) => type.collectedBy > 0)

  lines.push(`# Diagnòstic d’identitat digital`)
  lines.push('')
  lines.push(
    `Generat el ${date.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' })} a ${base}/eines/diagnostic, amb les fitxes publicades en aquell moment. Aquest fitxer s’ha creat dins del teu navegador i no s’ha enviat enlloc.`,
  )
  lines.push('')
  lines.push(`## Serveis (${exposure.selected})`)
  lines.push('')
  for (const app of exposure.apps) {
    lines.push(
      `- ${app.name} (${app.company.name})${app.overall !== null ? ` · puntuació ${app.overall}/100` : ''} · ${base}/aplicacions/${app.slug}`,
    )
  }
  lines.push('')
  lines.push('## Resum')
  lines.push('')
  lines.push(`- Tipus de dada que recullen entre tots: ${collected.length}`)
  lines.push(`- Empreses amb nom que hi tenen accés: ${exposure.namedCompanies}`)
  lines.push(
    `- Serveis que acaben en un grup compartit amb un altre dels teus: ${exposure.appsInSharedGroups} de ${exposure.selected}`,
  )
  lines.push(
    `- Filtracions conegudes dels teus serveis: ${breaches.items.length}${breaches.withPasswords > 0 ? ` (${breaches.withPasswords} amb contrasenyes)` : ''}`,
  )
  lines.push(`- Caselles de les fitxes encara no documentades: ${exposure.unknowns.share} %`)
  lines.push('')

  lines.push('## Pla d’acció')
  lines.push('')
  const completed = plan.actions.filter((action) => doneSet.has(action.id)).length
  lines.push(`${completed} de ${plan.actions.length} accions fetes.`)
  for (const tier of ['now', 'soon', 'later'] as const) {
    const actions = plan.actions.filter((action) => action.tier === tier)
    if (actions.length === 0) continue
    lines.push('')
    lines.push(`### ${TIER_LABELS[tier]}`)
    lines.push('')
    for (const action of actions) {
      lines.push(`- [${doneSet.has(action.id) ? 'x' : ' '}] **${action.title}** (prioritat ${action.priority}, ${EFFORT_LABELS[action.effort]})`)
      lines.push(`  ${action.benefit}`)
      for (const step of action.steps) lines.push(`  - ${step}`)
      for (const caution of action.cautions) lines.push(`  - Atenció: ${caution}`)
      if (action.url) lines.push(`  - Enllaç: ${action.url}`)
      else if (action.internalHref) lines.push(`  - Enllaç: ${base}${action.internalHref}`)
    }
  }
  lines.push('')

  lines.push('## Mapa de risc')
  lines.push('')
  for (const risk of risks) {
    const on = risk.signals.filter((signal) => signal.state === 'on')
    lines.push(
      `- ${risk.app.name}: ${risk.count} de ${risk.signals.length} senyals${on.length > 0 ? `. Encesos: ${on.map((signal) => `${SIGNAL_LABELS[signal.key].toLocaleLowerCase('ca')} (${signal.text})`).join('; ')}` : ''}`,
    )
  }
  lines.push('')

  if (breaches.items.length > 0) {
    lines.push('## Filtracions dels teus serveis')
    lines.push('')
    for (const { breach, apps } of breaches.items) {
      lines.push(
        `- ${breach.title}${breach.date ? ` (${breach.date.slice(0, 4)})` : ''}: ${breach.pwnCount !== null ? `${plain.format(breach.pwnCount)} comptes` : 'comptes no publicats'}${breach.passwords ? ', amb contrasenyes' : ''}. Servei: ${apps.map(({ app }) => app.name).join(', ')}`,
      )
    }
    lines.push('')
    lines.push('Font: Have I Been Pwned (CC BY 4.0).')
    lines.push('')
  }

  lines.push('## Dades que circulen')
  lines.push('')
  for (const type of collected) {
    lines.push(
      `- ${type.name}${type.special ? ' (article 9 del RGPD)' : ''}: la recullen ${type.collectedBy} de ${exposure.selected}; vinculada a la identitat a ${type.linked}; serveix per seguir-te a ${type.tracking}`,
    )
  }
  lines.push('')

  lines.push('## Grups empresarials')
  lines.push('')
  for (const group of exposure.groups) {
    lines.push(
      `- ${group.company.name}: ${group.apps.map((app) => app.name).join(', ')} · ${group.dataTypes} tipus de dada`,
    )
  }
  lines.push('')
  lines.push(
    'Les xifres són recomptes de fets documentats a les fitxes. El que no hi consta no compta com a negatiu: un buit a la fitxa no vol dir que el servei no ho faci.',
  )
  lines.push('')
  return lines.join('\n')
}
