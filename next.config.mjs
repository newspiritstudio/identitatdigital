import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: (process.env.MEDIA_REMOTE_HOSTS ?? '')
      .split(',')
      .map((hostname) => hostname.trim())
      .filter(Boolean)
      .map((hostname) => ({ protocol: 'https', hostname })),
  },
  // No cal anunciar el framework a cada resposta.
  poweredByHeader: false,
  async headers() {
    const shared = [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value: [
          'accelerometer=()',
          'autoplay=()',
          'bluetooth=()',
          'browsing-topics=()',
          'camera=()',
          'display-capture=()',
          'encrypted-media=()',
          'fullscreen=(self)',
          'geolocation=()',
          'gyroscope=()',
          'hid=()',
          'idle-detection=()',
          'magnetometer=()',
          'microphone=()',
          'midi=()',
          'payment=()',
          'publickey-credentials-get=()',
          'screen-wake-lock=()',
          'serial=()',
          'usb=()',
          'xr-spatial-tracking=()',
        ].join(', '),
      },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
      { key: 'Origin-Agent-Cluster', value: '?1' },
      { key: 'X-DNS-Prefetch-Control', value: 'off' },
      { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
      // El filtre XSS antic dels navegadors creava vulnerabilitats; s'apaga.
      { key: 'X-XSS-Protection', value: '0' },
    ]

    /*
     * Política del panell i de l'API. El web públic té la seva, amb `nonce`, a
     * `src/proxy.ts`; si totes dues arribessin a la mateixa resposta, el
     * navegador aplicaria les dues alhora.
     */
    const adminCsp = [
      "default-src 'self'",
      // El panell de Payload i l'editor Lexical necessiten `eval`.
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data:",
      "img-src 'self' data: blob: https:",
      "connect-src 'self'",
      "manifest-src 'self'",
      "worker-src 'self' blob:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
    ].join('; ')

    return [
      { source: '/:path*', headers: shared },
      {
        source: '/admin/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: adminCsp },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      { source: '/api/:path*', headers: [{ key: 'Content-Security-Policy', value: adminCsp }] },
      {
        // Dades obertes: s'han de poder llegir des de qualsevol origen.
        source: '/dades/:path*',
        headers: [{ key: 'Cross-Origin-Resource-Policy', value: 'cross-origin' }],
      },
    ]
  },
}

/*
 * Les eines es van reorganitzar: la calculadora d'exposició és ara el
 * diagnòstic, i contrasenyes i gestors són una sola eina de credencials. Les
 * adreces antigues continuen funcionant.
 */
nextConfig.redirects = async () => [
  // La portada és el directori. Temporal, perquè la portada pot canviar.
  { source: '/', destination: '/aplicacions', permanent: false },
  { source: '/eines/exposicio', destination: '/eines/diagnostic', permanent: true },
  { source: '/eines/contrasenyes', destination: '/eines/credencials', permanent: true },
  { source: '/eines/gestors', destination: '/eines/credencials#gestors', permanent: true },
]

const config = withPayload(nextConfig, { devBundleServerPackages: false })

/*
 * `withPayload` demana a tot el lloc la preferència de tema del sistema amb
 * `Critical-CH`, que obliga Chrome a repetir la primera petició de cada visita.
 * Només la fa servir el panell: al web públic se'n treu.
 */
const payloadHeaders = config.headers
config.headers = async () =>
  (await payloadHeaders()).map((rule) =>
    rule.source === '/:path*' && rule.headers.some((header) => header.key === 'Critical-CH')
      ? { ...rule, source: '/admin/:path*' }
      : rule,
  )

export default config
