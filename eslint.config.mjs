import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    /*
     * Amb `version: 'detect'`, eslint-plugin-react crida una API que ESLint 10
     * ja no té i falla abans de revisar res. Declarar-la evita la detecció.
     */
    settings: { react: { version: '19.3' } },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
    },
  },
  // El paquet d'archify és codi de tercers instal·lat com a skill: no és nostre
  // i no s'ha de revisar amb les regles d'aquest projecte.
  globalIgnores(['.next/**', 'src/app/(payload)/admin/importMap.js', '.claude/skills/**']),
])
