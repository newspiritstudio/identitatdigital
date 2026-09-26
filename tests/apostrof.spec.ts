import { describe, expect, it } from 'vitest'

import { de } from '@/lib/apostrof'

describe('de()', () => {
  it('apostrofa davant de vocal i de h muda', () => {
    expect(de('Instagram')).toBe('d’Instagram')
    expect(de('eBay')).toBe('d’eBay')
    expect(de('Habitissimo')).toBe('d’Habitissimo')
  })

  it('no apostrofa davant de consonant ni de i o u semivocals', () => {
    expect(de('Netflix')).toBe('de Netflix')
    expect(de('WhatsApp')).toBe('de WhatsApp')
    expect(de('Yahoo')).toBe('de Yahoo')
    expect(de('Huawei')).toBe('de Huawei')
  })
})
