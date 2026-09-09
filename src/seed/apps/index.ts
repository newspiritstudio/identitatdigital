import type { AppSeed } from '../types'
import { alternativeApps } from './alternatius'
import { consumApps } from './consum'
import { googleApps } from './google'
import { metaApps } from './meta'
import { socialApps } from './social'

/**
 * Primera onada editorial: 25 fitxes documentades.
 *
 * La selecció busca cobrir totes les categories del directori i, alhora,
 * incloure serveis que il·lustrin casos difícils: un que xifra però pertany a
 * un grup publicitari, un que té fama de privat i no ho és per defecte, un que
 * no deixa donar-se de baixa sense atenció al client i un que va rebre la
 * sanció més alta del RGPD i la va veure anul·lada en apel·lació.
 */
export const apps: AppSeed[] = [
  ...metaApps,
  ...googleApps,
  ...socialApps,
  ...consumApps,
  ...alternativeApps,
]
