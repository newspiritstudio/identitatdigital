import type { CollectionConfig } from 'payload'

import { isAdmin, isAdminOrSelf } from '@/lib/access'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Persona usuària', plural: 'Persones usuàries' },
  admin: {
    group: 'Sistema',
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'role'],
  },
  auth: {
    tokenExpiration: 60 * 60 * 8,
    maxLoginAttempts: 5,
    lockTime: 10 * 60 * 1000,
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
    admin: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      label: 'Nom',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      label: 'Rol',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      index: true,
      options: [
        { label: 'Administració', value: 'admin' },
        { label: 'Redacció i anàlisi', value: 'editor' },
      ],
      access: {
        // Un editor no pot promocionar-se a si mateix.
        update: ({ req }) => req.user?.role === 'admin',
      },
    },
  ],
}
