import { NextResponse, type NextRequest } from 'next/server'

/**
 * Política de seguretat de contingut del web públic.
 *
 * Cada resposta porta un `nonce` nou i només s'executen els scripts que el
 * porten (i els que aquests carreguen, per `'strict-dynamic'`): un script
 * injectat a la pàgina no s'executa encara que el text arribi a l'HTML. Next
 * llegeix el `nonce` de la capçalera de la petició i l'aplica als seus propis
 * scripts; el de l'inici del tema el llegeix el layout d'`x-nonce`.
 *
 * Els estils conserven `'unsafe-inline'`: React els escriu com a atribut
 * `style` i un `nonce` no hi val. Un estil injectat no executa codi.
 *
 * El panell i l'API no passen per aquí: tenen la seva política a
 * `next.config.mjs`, perquè l'editor necessita `eval`.
 */

const isDev = process.env.NODE_ENV !== 'production'

/*
 * L'eina de credencials consulta XposedOrNot directament des del navegador,
 * perquè l'adreça electrònica no passi pel nostre servidor. L'excepció val
 * només per a aquesta pàgina.
 */
const EXTRA_CONNECT: Record<string, string[]> = {
  '/eines/credencials': ['https://api.xposedornot.com'],
}

const policy = (nonce: string, pathname: string): string =>
  [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${isDev ? " 'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: blob: https:",
    ["connect-src 'self'", ...(EXTRA_CONNECT[pathname] ?? [])].join(' '),
    "manifest-src 'self'",
    "media-src 'self'",
    "worker-src 'self' blob:",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    ...(isDev ? [] : ['upgrade-insecure-requests']),
  ].join('; ')

export function proxy(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID())
  const csp = policy(nonce, request.nextUrl.pathname)

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', csp)

  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('X-Frame-Options', 'DENY')
  return response
}

export const config = {
  matcher: [
    {
      /*
       * Fora: el panell i l'API (política pròpia), els recursos estàtics i
       * les icones i fitxers que no són documents HTML.
       */
      source:
        '/((?!admin|api|_next/static|_next/image|favicon\\.ico|icon|apple-icon|manifest\\.webmanifest|robots\\.txt|sitemap\\.xml|\\.well-known).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
