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

    const csp = ({ allowEval = false } = {}) =>
      [
        "default-src 'self'",
        `script-src 'self' 'unsafe-inline'${allowEval ? " 'unsafe-eval'" : ''}`,
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self' data:",
        "img-src 'self' data: blob: https:",
        "connect-src 'self'",
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

export default withPayload(nextConfig, { devBundleServerPackages: false })
