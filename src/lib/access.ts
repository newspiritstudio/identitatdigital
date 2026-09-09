import type { Access, FieldAccess } from 'payload'

/**
 * El projecte és una base de coneixement pública amb una redacció petita:
 * qualsevol pot llegir el que està publicat, només l'equip pot escriure.
 */
export const isPublic: Access = () => true

export const isAdmin: Access = ({ req }) => req.user?.role === 'admin'

export const isEditor: Access = ({ req }) => Boolean(req.user)

export const isAdminOrSelf: Access = ({ req, id }) => {
  if (!req.user) return false
  if (req.user.role === 'admin') return true
  return req.user.id === id
}

export const isAdminField: FieldAccess = ({ req }) => req.user?.role === 'admin'

/**
 * Lectura pública restringida al contingut publicat. Els esborranys només els
 * veu qui ha iniciat sessió, de manera que una fitxa a mig documentar mai no
 * arriba al frontend.
 */
export const publishedOrEditor: Access = ({ req }) => {
  if (req.user) return true
  return {
    _status: { equals: 'published' },
  }
}
