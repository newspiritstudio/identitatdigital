import 'dotenv/config'

/**
 * Comprovació automàtica d'accessibilitat del lloc publicat.
 *
 * QUÈ ÉS. Un rastrejador que demana cada pàgina pública al servidor, en llegeix
 * l'HTML que s'envia al navegador i hi busca les barreres que es poden detectar
 * sense obrir un navegador: text alternatiu absent, capçaleres de taula sense
 * abast, camps de formulari sense etiqueta, enllaços sense text, identificadors
 * repetits, salts de nivell a les capçaleres i tabulació forçada.
 *
 * QUÈ NO ÉS. Una avaluació de conformitat. Les eines automàtiques detecten
 * entre un quart i un terç dels problemes reals; la resta —ordre de lectura,
 * sentit del text alternatiu, claredat dels missatges d'error, si el focus es
 * veu de debò sobre el fons que hi ha— només es troba mirant-s'ho una persona.
 * Que això passi net vol dir que no hi ha els errors que una màquina sap
 * trobar, ni un sol pas més enllà.
 *
 * PER QUÈ ÉS NOSTRE I NO UNA EINA DE TERCERS. Perquè així és part del
 * repositori, es pot llegir, es pot discutir i s'executa sense enviar el lloc a
 * cap servei extern. Cada comprovació porta escrit el criteri de les WCAG 2.2
 * que la justifica, de manera que el resultat es pugui contrastar amb la norma
 * i no amb la nostra paraula.
 *
 *   pnpm check-a11y                    # contra http://localhost:3000
 *   BASE=https://identitat.digital pnpm check-a11y
 */

const BASE = process.env.BASE ?? 'http://localhost:3000'

type Issue = {
  url: string
  rule: string
  criterion: string
  detail: string
}

/* ─────────────────────────── tokenització mínima ─────────────────────────── */

type Tag = {
  name: string
  attrs: Record<string, string>
  closing: boolean
  selfClosing: boolean
  /** Posició del final de l'etiqueta dins del document, per llegir-ne el text. */
  end: number
  start: number
}

const ATTR = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g

/**
 * Extreu les etiquetes del document. No construeix cap arbre: per a tot el que
 * comprovem aquí n'hi ha prou amb la seqüència d'etiquetes i, quan cal, el text
 * que hi ha entre una d'obertura i la seva de tancament.
 */
const tokenize = (html: string): Tag[] => {
  const tags: Tag[] = []
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g
  let match: RegExpExecArray | null
  while ((match = re.exec(html)) !== null) {
    const attrs: Record<string, string> = {}
    ATTR.lastIndex = 0
    let attrMatch: RegExpExecArray | null
    while ((attrMatch = ATTR.exec(match[3] ?? '')) !== null) {
      attrs[attrMatch[1]!.toLowerCase()] = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? ''
    }
    tags.push({
      name: match[2]!.toLowerCase(),
      attrs,
      closing: match[1] === '/',
      selfClosing: (match[3] ?? '').trimEnd().endsWith('/'),
      start: match.index,
      end: match.index + match[0].length,
    })
  }
  return tags
}

/** Text visible entre una etiqueta d'obertura i la seva de tancament. */
const textBetween = (html: string, tags: Tag[], index: number): string => {
  const open = tags[index]!
  let depth = 1
  for (let i = index + 1; i < tags.length; i += 1) {
    const tag = tags[i]!
    if (tag.name !== open.name) continue
    depth += tag.closing ? -1 : 1
    if (depth === 0) {
      return html
        .slice(open.end, tag.start)
        .replace(/<[^>]*>/g, ' ')
        .replace(/<!--.*?-->/g, ' ')
        .replace(/&[a-z]+;|&#\d+;/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    }
  }
  return ''
}

/* ──────────────────────────── les comprovacions ─────────────────────────── */

const FORM_CONTROLS = new Set(['input', 'select', 'textarea'])
const NO_LABEL_NEEDED = new Set(['hidden', 'submit', 'reset', 'button', 'image'])

const audit = (url: string, html: string): Issue[] => {
  const issues: Issue[] = []
  const tags = tokenize(html)
  const add = (rule: string, criterion: string, detail: string) =>
    issues.push({ url, rule, criterion, detail })

  /* Idioma del document. */
  const htmlTag = tags.find((tag) => tag.name === 'html' && !tag.closing)
  if (htmlTag === undefined || (htmlTag.attrs.lang ?? '').length === 0) {
    add('idioma', '3.1.1 Idioma de la pàgina (A)', 'L’element <html> no declara cap idioma.')
  }

  /* Text alternatiu. Un `alt` buit és vàlid i vol dir «decorativa»; el que no
   * pot faltar és l'atribut. */
  for (const tag of tags) {
    if (tag.name !== 'img' || tag.closing) continue
    if (!('alt' in tag.attrs)) {
      add(
        'text-alternatiu',
        '1.1.1 Contingut no textual (A)',
        `Imatge sense atribut alt: ${tag.attrs.src ?? 'sense src'}`,
      )
    }
  }

  /* Abast de les capçaleres de taula i títol de la taula. */
  let openTables = 0
  const tablesWithCaption = new Set<number>()
  tags.forEach((tag, index) => {
    if (tag.name === 'table' && !tag.closing) openTables += 1
    if (tag.name === 'caption' && !tag.closing) tablesWithCaption.add(openTables)
    if (tag.name === 'th' && !tag.closing && (tag.attrs.scope ?? '').length === 0) {
      add(
        'abast-capcalera',
        '1.3.1 Informació i relacions (A)',
        `Capçalera de taula sense scope: «${textBetween(html, tags, index).slice(0, 40)}»`,
      )
    }
  })
  for (let i = 1; i <= openTables; i += 1) {
    if (!tablesWithCaption.has(i)) {
      add(
        'titol-de-taula',
        '1.3.1 Informació i relacions (A)',
        `La taula ${i} de la pàgina no té <caption>.`,
      )
    }
  }

  /* Identificadors repetits. Trenquen `for`, `aria-labelledby` i els àncores. */
  const seen = new Map<string, number>()
  for (const tag of tags) {
    const id = tag.attrs.id
    if (tag.closing || id === undefined || id.length === 0) continue
    seen.set(id, (seen.get(id) ?? 0) + 1)
  }
  for (const [id, count] of seen) {
    if (count > 1) {
      add('identificador-repetit', '4.1.1 Anàlisi sintàctica', `L’identificador «${id}» surt ${count} vegades.`)
    }
  }

  /* Enllaços i botons sense nom accessible. */
  tags.forEach((tag, index) => {
    if (tag.closing) return
    if (tag.name !== 'a' && tag.name !== 'button') return
    if (tag.name === 'a' && tag.attrs.href === undefined) return
    if ((tag.attrs['aria-hidden'] ?? '') === 'true') return
    const name =
      tag.attrs['aria-label'] ??
      tag.attrs['aria-labelledby'] ??
      tag.attrs.title ??
      textBetween(html, tags, index)
    if (name.trim().length === 0) {
      add(
        tag.name === 'a' ? 'enllac-sense-text' : 'boto-sense-nom',
        tag.name === 'a' ? '2.4.4 Finalitat de l’enllaç (A)' : '4.1.2 Nom, funció, valor (A)',
        `<${tag.name}> sense nom accessible: ${tag.attrs.href ?? tag.attrs.class ?? ''}`,
      )
    }
  })

  /*
   * Camps de formulari sense etiqueta.
   *
   * Es compten les dues formes vàlides d'etiquetar: l'explícita, amb `for` que
   * apunta a l'`id` del camp, i la implícita, amb el camp escrit a dins de
   * l'element `<label>`. Totes dues són correctes i cap eina no pot exigir-ne
   * una en concret sense inventar-se la norma.
   */
  const labelledIds = new Set<string>()
  for (const tag of tags) {
    if (tag.name === 'label' && !tag.closing && (tag.attrs.for ?? '').length > 0) {
      labelledIds.add(tag.attrs.for!)
    }
  }
  const inImplicitLabel = new Set<number>()
  let labelDepth = 0
  tags.forEach((tag, index) => {
    if (tag.name === 'label') {
      if (tag.closing) labelDepth = Math.max(0, labelDepth - 1)
      else if (!tag.selfClosing) labelDepth += 1
      return
    }
    if (labelDepth > 0) inImplicitLabel.add(index)
  })
  tags.forEach((tag, index) => {
    if (tag.closing || !FORM_CONTROLS.has(tag.name)) return
    const type = (tag.attrs.type ?? 'text').toLowerCase()
    if (tag.name === 'input' && NO_LABEL_NEEDED.has(type)) return
    const id = tag.attrs.id ?? ''
    const named =
      labelledIds.has(id) ||
      inImplicitLabel.has(index) ||
      (tag.attrs['aria-label'] ?? '').length > 0 ||
      (tag.attrs['aria-labelledby'] ?? '').length > 0
    if (!named) {
      add(
        'camp-sense-etiqueta',
        '3.3.2 Etiquetes o instruccions (A) i 4.1.2 Nom, funció, valor (A)',
        `<${tag.name}${type === 'text' ? '' : ` type="${type}"`}> sense etiqueta associada${id ? ` (id «${id}»)` : ''}.`,
      )
    }
  })

  /* Ordre de les capçaleres i h1 únic. */
  const headings = tags
    .filter((tag) => !tag.closing && /^h[1-6]$/.test(tag.name))
    .map((tag) => Number(tag.name.slice(1)))
  const h1 = headings.filter((level) => level === 1).length
  if (h1 === 0) add('sense-h1', '2.4.6 Encapçalaments i etiquetes (AA)', 'La pàgina no té cap <h1>.')
  if (h1 > 1) add('h1-repetit', '2.4.6 Encapçalaments i etiquetes (AA)', `La pàgina té ${h1} elements <h1>.`)
  for (let i = 1; i < headings.length; i += 1) {
    if (headings[i]! - headings[i - 1]! > 1) {
      add(
        'salt-de-nivell',
        '1.3.1 Informació i relacions (A)',
        `Salt de h${headings[i - 1]} a h${headings[i]}.`,
      )
    }
  }

  /* Enllaç de salt al contingut. */
  const firstAnchor = tags.find((tag) => tag.name === 'a' && !tag.closing && tag.attrs.href !== undefined)
  if (firstAnchor === undefined || !(firstAnchor.attrs.href ?? '').startsWith('#')) {
    add(
      'sense-salt',
      '2.4.1 Evitar blocs (A)',
      'El primer enllaç de la pàgina no és un salt al contingut.',
    )
  }

  /* Tabulació forçada. */
  for (const tag of tags) {
    const value = Number(tag.attrs.tabindex)
    if (!tag.closing && Number.isFinite(value) && value > 0) {
      add(
        'tabindex-positiu',
        '2.4.3 Ordre del focus (A)',
        `<${tag.name}> amb tabindex="${tag.attrs.tabindex}": trenca l’ordre natural de tabulació.`,
      )
    }
  }

  /* Marcs sense títol. */
  for (const tag of tags) {
    if (tag.name === 'iframe' && !tag.closing && (tag.attrs.title ?? '').length === 0) {
      add('marc-sense-titol', '4.1.2 Nom, funció, valor (A)', 'Un <iframe> no té atribut title.')
    }
  }

  /* Pestanya nova sense avís. */
  tags.forEach((tag, index) => {
    if (tag.name !== 'a' || tag.closing || tag.attrs.target !== '_blank') return
    const inner = html.slice(tag.end, Math.min(html.length, tag.end + 600))
    const label = (tag.attrs['aria-label'] ?? '') + inner
    if (!/pestanya nova|finestra nova/i.test(label)) {
      add(
        'pestanya-nova',
        '3.2.5 Canvis a petició (AAA)',
        `Enllaç que obre pestanya nova sense avisar-ne: ${tag.attrs.href ?? ''}`,
      )
    }
    void index
  })

  return issues
}

/* ──────────────────────────────── rastreig ──────────────────────────────── */

const INTERNAL = /href="(\/[^"#?]*)"/g

const crawl = async (): Promise<Map<string, string>> => {
  const pages = new Map<string, string>()
  const queue = ['/']
  const seen = new Set(queue)

  // Sostre de seguretat, no de mostreig: ha de quedar molt per damunt del
  // nombre de pàgines del lloc perquè no n'hi hagi cap que quedi sense mirar
  // sense que ningú se n'adoni.
  while (queue.length > 0 && pages.size < 500) {
    const path = queue.shift()!
    const response = await fetch(`${BASE}${path}`, { headers: { Accept: 'text/html' } })
    const type = response.headers.get('content-type') ?? ''
    if (!response.ok || !type.includes('text/html')) continue
    const html = await response.text()
    pages.set(path, html)

    INTERNAL.lastIndex = 0
    let match: RegExpExecArray | null
    while ((match = INTERNAL.exec(html)) !== null) {
      const next = match[1]!
      // El panell d'administració és de tercers i no l'avaluem aquí.
      if (next.startsWith('/admin') || next.startsWith('/api')) continue
      // Les descàrregues de dades no són pàgines.
      if (/\.(json|csv)$/.test(next)) continue
      if (seen.has(next)) continue
      seen.add(next)
      queue.push(next)
    }
  }

  return pages
}

const pages = await crawl()
if (pages.size === 0) {
  console.error(`No s’ha pogut llegir cap pàgina de ${BASE}. És engegat el servidor?`)
  process.exit(1)
}

const issues: Issue[] = []
for (const [path, html] of pages) issues.push(...audit(path, html))

const byRule = new Map<string, Issue[]>()
for (const issue of issues) {
  const list = byRule.get(issue.rule) ?? []
  list.push(issue)
  byRule.set(issue.rule, list)
}

console.log(`\nPàgines analitzades: ${pages.size}`)
console.log(`Incidències: ${issues.length}\n`)

for (const [rule, list] of [...byRule].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`── ${rule} (${list.length}) — ${list[0]!.criterion}`)
  for (const issue of list.slice(0, 8)) console.log(`   ${issue.url}: ${issue.detail}`)
  if (list.length > 8) console.log(`   … i ${list.length - 8} més`)
  console.log()
}

if (issues.length === 0) {
  console.log('Cap incidència de les que una màquina sap trobar. La resta s’ha de mirar a mà.')
}

process.exit(issues.length === 0 ? 0 : 1)
