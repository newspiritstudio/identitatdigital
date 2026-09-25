'use client'

import Link from 'next/link'

import { planStore, selectionStore, useLocalStore } from '@/lib/tools/localStore'
import { useHydrated } from '@/lib/tools/useCopy'

/**
 * On ho vas deixar. Llegeix només el que el diagnòstic ja ha desat en aquest
 * dispositiu i no ho envia enlloc; si no hi ha res, no diu res.
 */
export default function ToolsStatus() {
  const hydrated = useHydrated()
  const [selection] = useLocalStore(selectionStore)
  const [plan] = useLocalStore(planStore)

  if (!hydrated || selection.length === 0) return null

  return (
    <p className="tools-status" role="status">
      Tens un diagnòstic començat en aquest dispositiu: {selection.length}{' '}
      {selection.length === 1 ? 'servei triat' : 'serveis triats'}
      {plan.done.length > 0
        ? ` i ${plan.done.length} ${plan.done.length === 1 ? 'acció feta' : 'accions fetes'}`
        : ''}
      . <Link href="/eines/diagnostic#pla">Continua on ho vas deixar</Link>
    </p>
  )
}
