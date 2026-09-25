#!/usr/bin/env bash
# Desplegament d'identitat.digital al VPS agora-newspiritstudio.
#
#   scripts/deploy/vps.sh setup    directoris, xarxa i .env amb secrets nous (un sol cop)
#   scripts/deploy/vps.sh upload   puja el codi del commit actual (HEAD, no el directori de treball)
#   scripts/deploy/vps.sh up       construeix la imatge al VPS i arrenca la pila
#   scripts/deploy/vps.sh data     bolca la base de dades local i media/ al VPS (SUBSTITUEIX les del VPS)
#   scripts/deploy/vps.sh deploy   upload + up
#   scripts/deploy/vps.sh status | logs
#
# El codi surt de `git archive HEAD`, no de la carpeta: els canvis sense commit
# no hi van mai, ni els d'una altra sessió a mig fer.
set -euo pipefail

HOST="${VPS_HOST:-canigo-vps}"
REMOTE=/opt/identitatdigital
LOCAL_DB="${LOCAL_DB:-identitatdigital}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

ssh_vps() { ssh -o IdentitiesOnly=yes "$HOST" "$@"; }
compose() { ssh_vps "cd $REMOTE/app && docker compose -f deploy/docker-compose.vps.yml $*"; }

cmd_setup() {
  ssh_vps "REMOTE=$REMOTE bash -s" <<'EOF'
set -euo pipefail
mkdir -p "$REMOTE/app" "$REMOTE/media"
chown 1001:1001 "$REMOTE/media"
docker network inspect identitatdigital-net >/dev/null 2>&1 \
  || docker network create --driver bridge --opt com.docker.network.driver.mtu=1400 identitatdigital-net
if [ -e "$REMOTE/.env" ]; then
  echo "$REMOTE/.env ja existeix: no el toco."
else
  # Els secrets es generen al servidor i no en surten. Hex perquè la
  # contrasenya vagi dins la URI sense escapar res.
  pw=$(openssl rand -hex 24)
  umask 077
  cat > "$REMOTE/.env" <<ENV
MONGO_INITDB_ROOT_USERNAME=identitatdigital
MONGO_INITDB_ROOT_PASSWORD=$pw
DATABASE_URI=mongodb://identitatdigital:$pw@mongo:27017/identitatdigital?authSource=admin
PAYLOAD_SECRET=$(openssl rand -base64 48 | tr -d '\n')
APP_URL=https://identitat.digital
NEXT_PUBLIC_APP_URL=https://identitat.digital
ENABLE_GRAPHQL=
MONGODB_MAX_POOL_SIZE=10
MEDIA_REMOTE_HOSTS=
ENV
  echo "Creat $REMOTE/.env (0600)."
fi
EOF
}

cmd_upload() {
  local rev
  rev=$(git -C "$ROOT" rev-parse --short HEAD)
  git -C "$ROOT" archive --format=tar HEAD | ssh_vps "set -e
    rm -rf $REMOTE/app.new && mkdir -p $REMOTE/app.new
    tar -x -C $REMOTE/app.new
    echo $rev > $REMOTE/app.new/REVISION
    rm -rf $REMOTE/app.old && { [ -d $REMOTE/app ] && mv $REMOTE/app $REMOTE/app.old || true; }
    mv $REMOTE/app.new $REMOTE/app"
  echo "Codi pujat: $rev"
}

cmd_up() {
  compose up -d --build
  compose ps
}

cmd_data() {
  read -r -p "Substitueix la base de dades i media/ del VPS amb les locals. Continuar? [s/N] " ok
  [ "$ok" = s ] || exit 1
  # --drop per col·lecció: el que hi hagi al VPS d'aquestes col·leccions es perd.
  mongodump --quiet --db "$LOCAL_DB" --archive --gzip \
    | ssh_vps "docker exec -i identitatdigital-mongo sh -c 'mongorestore --quiet --drop --archive --gzip \
        --nsInclude=\"$LOCAL_DB.*\" --nsFrom=\"$LOCAL_DB.*\" --nsTo=\"identitatdigital.*\" \
        -u \"\$MONGO_INITDB_ROOT_USERNAME\" -p \"\$MONGO_INITDB_ROOT_PASSWORD\" --authenticationDatabase admin'"
  rsync -az --delete -e "ssh -o IdentitiesOnly=yes" "$ROOT/media/" "$HOST:$REMOTE/media/"
  ssh_vps "chown -R 1001:1001 $REMOTE/media"
  echo "Dades i media/ restaurades."
}

case "${1:-}" in
  setup) cmd_setup ;;
  upload) cmd_upload ;;
  up) cmd_up ;;
  data) cmd_data ;;
  deploy) cmd_upload && cmd_up ;;
  status) compose ps ;;
  logs) compose logs --tail=100 -f app ;;
  *) sed -n '2,12p' "$0"; exit 1 ;;
esac
