/**
 * Auditoria de diverses contrasenyes alhora, dins del navegador.
 *
 * Una contrasenya sola diu poc. El que fa mal de debò és la REPETICIÓ: si la
 * mateixa (o gairebé la mateixa) obre cinc serveis, una filtració en un d'ells
 * els obre tots cinc. Això només es veu comparant-les entre elles, i la
 * comparació es fa aquí, localment; a la xarxa només hi surten els cinc
 * caràcters de resum de cada una (vegeu `pwned.ts`).
 *
 * «Gairebé la mateixa» vol dir el que proven els atacs de diccionari amb
 * regles: canviar-ne el número del final, posar-hi una majúscula, fer les
 * substitucions de sempre (a→4, e→3, o→0…). Si passar d'una a l'altra és una
 * d'aquestes regles, a efectes pràctics són la mateixa.
 */

export interface AuditEntry {
  id: string
  /** Nom que hi ha posat la persona (el servei, per exemple). Pot ser buit. */
  label: string
  value: string
}

export type SimilarityKind = 'same' | 'variant'

export interface Similarity {
  a: string
  b: string
  kind: SimilarityKind
  reason: string
}

const LEET: Record<string, string> = {
  '0': 'o',
  '1': 'i',
  '3': 'e',
  '4': 'a',
  '5': 's',
  '7': 't',
  '8': 'b',
  '@': 'a',
  $: 's',
  '!': 'i',
  '|': 'i',
}

/**
 * L'«esquelet» d'una contrasenya: en minúscules, sense les xifres i els
 * símbols del principi i del final, i amb les substitucions típiques desfetes.
 * `Barcelona2023!` i `barcelona24` tenen el mateix esquelet: `barcelona`.
 */
export function skeleton(value: string): string {
  const core = value
    .normalize('NFC')
    .toLowerCase()
    .replace(/^[^\p{L}]+/u, '')
    .replace(/[^\p{L}]+$/u, '')
  let out = ''
  for (const ch of core) out += LEET[ch] ?? ch
  return out
}

/**
 * Distància d'edició (Levenshtein) amb sostre: deixa de calcular quan ja passa
 * de `max`, perquè aquí només importa saber si són a prop.
 */
export function editDistance(a: string, b: string, max = Number.POSITIVE_INFINITY): number {
  if (a === b) return 0
  const left = [...a]
  const right = [...b]
  if (Math.abs(left.length - right.length) > max) return max + 1
  let previous = Array.from({ length: right.length + 1 }, (_, index) => index)
  for (let i = 1; i <= left.length; i += 1) {
    const current = [i]
    let rowMin = i
    for (let j = 1; j <= right.length; j += 1) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1
      const value = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost)
      current.push(value)
      if (value < rowMin) rowMin = value
    }
    if (rowMin > max) return max + 1
    previous = current
  }
  return previous[right.length]
}

/** Esquelets massa curts coincideixen per casualitat i no diuen res. */
const MIN_SKELETON = 4
const MIN_EDIT_LENGTH = 8
const MAX_EDIT_DISTANCE = 2

/** Per què dues contrasenyes diferents compten com a variants, o `null`. */
export function variantReason(a: string, b: string): string | null {
  if (a === b) return null
  if (a.toLowerCase() === b.toLowerCase()) return 'Només canvien les majúscules.'
  const skeletonA = skeleton(a)
  const skeletonB = skeleton(b)
  if (skeletonA.length >= MIN_SKELETON && skeletonA === skeletonB) {
    return 'Tenen la mateixa base i només canvien xifres, símbols o substitucions típiques (a→4, e→3…).'
  }
  if (Math.min(a.length, b.length) >= MIN_EDIT_LENGTH) {
    const distance = editDistance(a.toLowerCase(), b.toLowerCase(), MAX_EDIT_DISTANCE)
    if (distance <= MAX_EDIT_DISTANCE) {
      return distance === 1
        ? 'Només es diferencien en un caràcter.'
        : 'Només es diferencien en dos caràcters.'
    }
  }
  const [shorter, longer] =
    skeletonA.length <= skeletonB.length ? [skeletonA, skeletonB] : [skeletonB, skeletonA]
  if (shorter.length >= 6 && longer.includes(shorter)) {
    return 'Una conté l’altra sencera, amb algun afegit.'
  }
  return null
}

/**
 * Totes les parelles repetides o variants. Les entrades buides s'ignoren. Amb
 * vint contrasenyes com a màxim són cent noranta comparacions: no cal res
 * més llest.
 */
export function findSimilarities(entries: readonly AuditEntry[]): Similarity[] {
  const filled = entries.filter((entry) => entry.value.length > 0)
  const out: Similarity[] = []
  for (let i = 0; i < filled.length; i += 1) {
    for (let j = i + 1; j < filled.length; j += 1) {
      const a = filled[i]
      const b = filled[j]
      if (a.value === b.value) {
        out.push({ a: a.id, b: b.id, kind: 'same', reason: 'És exactament la mateixa contrasenya.' })
        continue
      }
      const reason = variantReason(a.value, b.value)
      if (reason !== null) out.push({ a: a.id, b: b.id, kind: 'variant', reason })
    }
  }
  return out
}

/**
 * Agrupa les entrades connectades per repeticions o variants (components
 * connexos). Si A s'assembla a B i B a C, les tres són un sol problema: una
 * filtració de qualsevol dóna pistes de les altres.
 */
export function similarityGroups(entries: readonly AuditEntry[], pairs: readonly Similarity[]): string[][] {
  const parent = new Map<string, string>()
  const find = (id: string): string => {
    let root = id
    while (parent.get(root) !== undefined && parent.get(root) !== root) root = parent.get(root) as string
    parent.set(id, root)
    return root
  }
  for (const entry of entries) parent.set(entry.id, entry.id)
  for (const pair of pairs) {
    const rootA = find(pair.a)
    const rootB = find(pair.b)
    if (rootA !== rootB) parent.set(rootB, rootA)
  }
  const groups = new Map<string, string[]>()
  for (const entry of entries) {
    if (entry.value.length === 0) continue
    const root = find(entry.id)
    const list = groups.get(root)
    if (list) list.push(entry.id)
    else groups.set(root, [entry.id])
  }
  return [...groups.values()].filter((group) => group.length > 1)
}

/**
 * Executa `task` sobre cada element amb un màxim de `limit` alhora. Serveix
 * per no llançar vint peticions de cop contra el pont de HIBP.
 */
export async function mapWithLimit<T, R>(
  items: readonly T[],
  limit: number,
  task: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length)
  let next = 0
  const worker = async () => {
    while (next < items.length) {
      const index = next
      next += 1
      results[index] = await task(items[index], index)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return results
}
