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
  async headers() {
    const shared = [
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
      },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
    ]

    const csp = ({ allowEval = false, connect = [] } = {}) =>
      [
        "default-src 'self'",
        `script-src 'self' 'unsafe-inline'${allowEval ? " 'unsafe-eval'" : ''}`,
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self' data:",
        "img-src 'self' data: blob: https:",
        ["connect-src 'self'", ...connect].join(' '),
        "worker-src 'self' blob:",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'self'",
      ].join('; ')

    return [
      {
        source: '/:path*',
        headers: [
          ...shared,
          {
            key: 'Content-Security-Policy',
            value: csp({ allowEval: process.env.NODE_ENV !== 'production' }),
          },
        ],
      },
      {
        // L'eina de credencials consulta XposedOrNot directament des del
        // navegador, perquè l'adreça electrònica no passi pel nostre servidor.
        // L'excepció val només per a aquesta pàgina.
        source: '/eines/credencials',
        headers: [
          ...shared,
          {
            key: 'Content-Security-Policy',
            value: csp({
              allowEval: process.env.NODE_ENV !== 'production',
              connect: ['https://api.xposedornot.com'],
            }),
          },
        ],
      },
      {
        // El panell de Payload i l'editor Lexical necessiten `eval`. L'excepció
        // es queda aquí i no debilita el web públic.
        source: '/admin/:path*',
        headers: [
          ...shared,
          { key: 'Content-Security-Policy', value: csp({ allowEval: true }) },
        ],
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
  { source: '/eines/exposicio', destination: '/eines/diagnostic', permanent: true },
  { source: '/eines/contrasenyes', destination: '/eines/credencials', permanent: true },
  { source: '/eines/gestors', destination: '/eines/credencials#gestors', permanent: true },
]

export default withPayload(nextConfig, { devBundleServerPackages: false })
