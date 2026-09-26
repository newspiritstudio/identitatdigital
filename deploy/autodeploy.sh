#!/usr/bin/env bash
# Desplegament automàtic des de GitHub Actions. S'executa AL VPS.
#
# La clau de l'Action només pot executar aquest script: a authorized_keys hi va
# amb `restrict,command="/opt/identitatdigital/bin/autodeploy"`. No obre cap
# shell ni cap túnel; l'únic que accepta és el codi (un tar de `git archive`
# per l'entrada estàndard) i la revisió (l'argument de l'ordre SSH).
#
# Fa el mateix que `scripts/deploy/vps.sh deploy` i, si l'app no arrenca,
# torna sola a la versió anterior. S'instal·la amb `vps.sh autodeploy-install`.
set -euo pipefail

REMOTE=/opt/identitatdigital
COMPOSE="docker compose -f deploy/docker-compose.vps.yml"
MIN_FREE_GB=4
MAX_TAR_BYTES=$((200 * 1024 * 1024))

# Un desplegament rere l'altre: si en arriben dos seguits, el segon espera.
exec 9>"$REMOTE/.autodeploy.lock"
flock 9

rev="${SSH_ORIGINAL_COMMAND:-}"
if ! [[ "$rev" =~ ^[0-9a-f]{7,40}$ ]]; then
  echo "Revisió no vàlida." >&2
  exit 2
fi

free=$(df -BG --output=avail /var/lib/docker | tail -1 | tr -dc 0-9)
if [ "$free" -lt "$MIN_FREE_GB" ]; then
  echo "Només queden ${free} GB lliures (en calen ${MIN_FREE_GB}). No construeixo." >&2
  exit 1
fi

rm -rf "$REMOTE/app.new" && mkdir -p "$REMOTE/app.new"
head -c "$MAX_TAR_BYTES" | tar -x --no-same-owner -C "$REMOTE/app.new"
echo "$rev" > "$REMOTE/app.new/REVISION"
[ -f "$REMOTE/app.new/deploy/docker-compose.vps.yml" ] || { echo "El tar no porta el projecte." >&2; exit 1; }

rm -rf "$REMOTE/app.old"
[ -d "$REMOTE/app" ] && mv "$REMOTE/app" "$REMOTE/app.old"
mv "$REMOTE/app.new" "$REMOTE/app"
docker image inspect identitatdigital:local >/dev/null 2>&1 \
  && docker tag identitatdigital:local identitatdigital:previous

cd "$REMOTE/app"
healthy() {
  $COMPOSE up -d --build --wait --wait-timeout 180 app \
    && docker exec identitatdigital node -e "
      fetch('http://127.0.0.1:3000/aplicacions').then(async (r) => {
        const html = await r.text()
        if (!r.ok || !html.includes('/aplicacions/')) process.exit(1)
      }).catch(() => process.exit(1))"
}

if healthy; then
  docker image prune -f >/dev/null
  echo "Desplegat: $rev"
  exit 0
fi

echo "L'app no ha arrencat bé amb $rev. Registres:" >&2
$COMPOSE logs --tail=60 app >&2 || true
if [ -d "$REMOTE/app.old" ] && docker image inspect identitatdigital:previous >/dev/null 2>&1; then
  mv "$REMOTE/app" "$REMOTE/app.failed"
  mv "$REMOTE/app.old" "$REMOTE/app"
  rm -rf "$REMOTE/app.failed"
  docker tag identitatdigital:previous identitatdigital:local
  cd "$REMOTE/app" && $COMPOSE up -d --no-build --wait --wait-timeout 180 app
  echo "Tornat a: $(cat "$REMOTE/app/REVISION")" >&2
fi
exit 1
