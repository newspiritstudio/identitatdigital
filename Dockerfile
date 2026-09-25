# syntax=docker/dockerfile:1
# ─────────────────────────────────────────────────────────────────────────────
# identitat.digital — Next + Payload en mode `standalone`. Es construeix al VPS
# (x86_64) amb deploy/docker-compose.vps.yml; mira scripts/deploy/vps.sh.
# ─────────────────────────────────────────────────────────────────────────────

FROM node:24-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install -g pnpm@11.22.0

# ── Dependències ─────────────────────────────────────────────────────────────
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN pnpm install --frozen-lockfile

# ── Build ────────────────────────────────────────────────────────────────────
FROM base AS builder

# Next insereix les NEXT_PUBLIC_* dins del JavaScript del client en compilar: ha
# de ser un argument de build. Com a variable del contenidor no faria res.
ARG NEXT_PUBLIC_APP_URL=https://identitat.digital

# src/lib/env.ts atura el build si falten aquestes variables. Les pàgines que
# llegeixen dades són `force-dynamic` i durant el build no es connecta ningú a
# la base de dades, així que n'hi ha prou amb valors de pega. Només viuen en
# aquesta etapa: la imatge final no les porta, i les reals arriben pel `.env`.
ENV NODE_ENV=production \
    NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL \
    APP_URL=$NEXT_PUBLIC_APP_URL \
    DATABASE_URI=mongodb://build.invalid/identitatdigital \
    PAYLOAD_SECRET=build-only-placeholder-never-used-at-runtime

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# `payload-types.ts` no es versiona. El `build` de package.json demana 8 GB de
# pila i el VPS en té 7,6 compartits amb Àgora: 3 GB hi caben amb el swap.
RUN pnpm generate:types \
 && NODE_OPTIONS="--no-deprecation --max-old-space-size=3072" pnpm exec next build

# ── Runtime ──────────────────────────────────────────────────────────────────
FROM node:24-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Payload desa les pujades a `media/` relatiu al directori de treball. Al VPS
# s'hi munta /opt/identitatdigital/media, que ha de ser de l'uid 1001.
RUN mkdir -p media .next/cache && chown nextjs:nodejs media .next/cache

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=40s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/legal').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

CMD ["node", "server.js"]
