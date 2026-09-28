/**
 * Genera les icones del lloc a partir de l'isotip (`src/brand/isotip.svg`).
 *
 *   node scripts/build-icons.mjs
 *
 * Els fitxers resultants es versionen; només cal tornar-lo a executar si
 * canvia l'isotip o els colors de marca.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const out = (file) => path.join(root, file)

// Colors de marca: el text (`--text`) i el fons clar del mode fosc.
const INK = '#002730'
const PAPER = '#f0f8ff'

const source = readFileSync(out('src/brand/isotip.svg'), 'utf8')
const paths = [...source.matchAll(/<path d="([^"]+)"\/>/g)].map((match) => match[1])
const W = 145.63
const H = 176.28

/** Isotip centrat en un quadrat de costat `size`, amb l'alçada `ratio` del costat. */
const mark = (size, ratio, fill) => {
  const scale = (size * ratio) / H
  const x = (size - W * scale) / 2
  const y = (size - H * scale) / 2
  return `<g transform="translate(${x} ${y}) scale(${scale})" fill="${fill}">${paths
    .map((d) => `<path d="${d}"/>`)
    .join('')}</g>`
}

/** Fons de marca amb l'isotip clar. `radius` en proporció del costat. */
const badge = (size, ratio, radius = 0) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">` +
  `<rect width="${size}" height="${size}" rx="${size * radius}" fill="${INK}"/>` +
  mark(size, ratio, PAPER) +
  `</svg>`

const png = (svg) => sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer()

/* Favicon vectorial: s'adapta al tema del navegador. */
const side = H
writeFileSync(
  out('src/app/icon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-(side - W) / 2} 0 ${side} ${side}">` +
    `<style>path{fill:${INK}}@media (prefers-color-scheme:dark){path{fill:${PAPER}}}</style>` +
    paths.map((d) => `<path d="${d}"/>`).join('') +
    `</svg>\n`,
)

/* favicon.ico amb tres mides, cadascuna com a PNG dins el contenidor ICO. */
const sizes = [16, 32, 48]
const images = await Promise.all(sizes.map((size) => png(badge(size, 0.78, 0.2))))
const header = Buffer.alloc(6 + 16 * sizes.length)
header.writeUInt16LE(0, 0)
header.writeUInt16LE(1, 2)
header.writeUInt16LE(sizes.length, 4)
let offset = header.length
sizes.forEach((size, index) => {
  const entry = 6 + 16 * index
  header.writeUInt8(size, entry)
  header.writeUInt8(size, entry + 1)
  header.writeUInt8(0, entry + 2)
  header.writeUInt8(0, entry + 3)
  header.writeUInt16LE(1, entry + 4)
  header.writeUInt16LE(32, entry + 6)
  header.writeUInt32LE(images[index].length, entry + 8)
  header.writeUInt32LE(offset, entry + 12)
  offset += images[index].length
})
writeFileSync(out('src/app/favicon.ico'), Buffer.concat([header, ...images]))

/* iOS retalla les cantonades pel seu compte: fons sencer. */
writeFileSync(out('src/app/apple-icon.png'), await png(badge(180, 0.66)))

/* Manifest: icones normals i «maskable», amb l'isotip dins la zona segura. */
writeFileSync(out('public/icons/icon-192.png'), await png(badge(192, 0.7, 0.2)))
writeFileSync(out('public/icons/icon-512.png'), await png(badge(512, 0.7, 0.2)))
writeFileSync(out('public/icons/icon-maskable-512.png'), await png(badge(512, 0.56)))

/* Imatge per a xarxes socials: l'isotip sobre el degradat clar del lloc. */
writeFileSync(
  out('src/app/opengraph-image.png'),
  await png(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">` +
      `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
      `<stop offset="0" stop-color="rgb(241,230,213)"/><stop offset=".48" stop-color="rgb(223,234,245)"/>` +
      `<stop offset="1" stop-color="rgb(223,230,189)"/></linearGradient></defs>` +
      `<rect width="1200" height="630" fill="url(#g)"/>` +
      `<g transform="translate(285 0)">${mark(630, 0.62, INK)}</g>` +
      `</svg>`,
  ),
)

console.log('Icones generades.')
