#!/usr/bin/env bash
# Desplegament d'identitat.digital al VPS agora-newspiritstudio.
#
#   scripts/deploy/vps.sh setup      directoris, xarxa i .env amb secrets nous (un sol cop)
#   scripts/deploy/vps.sh upload     puja el codi del commit actual (HEAD, no el directori de treball)
#   scripts/deploy/vps.sh up         construeix la imatge al VPS, arrenca la pila i la comprova
#   scripts/deploy/vps.sh deploy     upload + up
#   scripts/deploy/vps.sh rollback   torna al codi i a la imatge del desplegament anterior
#   scripts/deploy/vps.sh backup     còpia de la base de dades del VPS a /opt/identitatdigital/backups
#   scripts/deploy/vps.sh data       bolca la base de dades local i media/ al VPS (SUBSTITUEIX les del VPS)
#   scripts/deploy/vps.sh status | logs
#
# Primer desplegament:  setup → upload → data → up. `up` es nega a arrencar
# l'app amb la base de dades buida: Payload hi obriria el formulari de «primer
# usuari» a qualsevol visitant.
#
# El codi surt de `git archive HEAD`, no de la carpeta: els canvis sense commit
# no hi van mai, ni els d'una altra sessió a mig fer.
set -euo pipefail

HOST="${VPS_HOST:-canigo-vps}"
REMOTE=/opt/identitatdigital
LOCAL_DB="${LOCAL_DB:-identitatdigital}"
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
COMPOSE="docker compose -f deploy/docker-compose.vps.yml"
# Espai mínim per construir: dependències, build de Next i la imatge nova.
MIN_FREE_GB=4

ssh_vps() { ssh -o IdentitiesOnly=yes "$HOST" "$@"; }
compose() { ssh_vps "cd $REMOTE/app && $COMPOSE $*"; }

cmd_setup() {
  ssh_vps "REMOTE=$REMOTE bash -s" <<'EOF'
set -euo pipefail
mkdir -p "$REMOTE/app" "$REMOTE/media" "$REMOTE/backups"
chown 1001:1001 "$REMOTE/media"
chmod 700 "$REMOTE/backups"
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
  if [ -n "$(git -C "$ROOT" status --porcelain)" ]; then
    echo "Avís: hi ha canvis sense commit. No es pugen; es desplega $rev."
  fi
  git -C "$ROOT" archive --format=tar HEAD | ssh_vps "set -e
    rm -rf $REMOTE/app.new && mkdir -p $REMOTE/app.new
    tar -x -C $REMOTE/app.new
    echo $rev > $REMOTE/app.new/REVISION
    rm -rf $REMOTE/app.old && { [ -d $REMOTE/app ] && mv $REMOTE/app $REMOTE/app.old || true; }
    mv $REMOTE/app.new $REMOTE/app"
  echo "Codi pujat: $rev"
}

# Nombre de persones usuàries a la base de dades del VPS (engega el mongo si cal).
remote_user_count() {
  compose up -d --wait mongo >/dev/null
  ssh_vps "docker exec identitatdigital-mongo sh -c 'mongosh --quiet \
    -u \"\$MONGO_INITDB_ROOT_USERNAME\" -p \"\$MONGO_INITDB_ROOT_PASSWORD\" --authenticationDatabase admin \
    --eval \"db.getSiblingDB(\\\"identitatdigital\\\").users.countDocuments()\"'"
}

cmd_up() {
  local free users
  free=$(ssh_vps "df -BG --output=avail /var/lib/docker | tail -1 | tr -dc 0-9")
  if [ "$free" -lt "$MIN_FREE_GB" ]; then
    echo "Només queden ${free} GB lliures al VPS (en calen ${MIN_FREE_GB}). No construeixo." >&2
    exit 1
  fi

  users=$(remote_user_count)
  if [ "${users:-0}" -eq 0 ] && [ "${ALLOW_EMPTY_DB:-}" != 1 ]; then
    echo "La base de dades del VPS no té cap persona usuària: l'app obriria el formulari" >&2
    echo "de primer usuari a qualsevol. Fes abans 'vps.sh data' (o ALLOW_EMPTY_DB=1 si ho vols així)." >&2
    exit 1
  fi

  # La imatge que funciona ara es guarda amb una altra etiqueta per poder-hi tornar.
  ssh_vps "docker image inspect identitatdigital:local >/dev/null 2>&1 \
    && docker tag identitatdigital:local identitatdigital:previous || true"

  # `--wait` torna error si el contenidor no arriba a sa (healthcheck).
  if ! compose up -d --build --wait --wait-timeout 180; then
    echo "L'app no ha arrencat bé. Registres:" >&2
    compose logs --tail=60 app >&2 || true
    echo "Per tornar a la versió anterior: scripts/deploy/vps.sh rollback" >&2
    exit 1
  fi
  smoke_test
  ssh_vps "docker image prune -f >/dev/null"
  compose ps
  echo "Desplegat: $(ssh_vps "cat $REMOTE/app/REVISION")"
}

# El healthcheck només mira que el servidor respongui; això mira que llegeixi la base de dades.
smoke_test() {
  ssh_vps "docker exec identitatdigital node -e \"
    fetch('http://127.0.0.1:3000/aplicacions').then(async (r) => {
      const html = await r.text()
      if (!r.ok || !html.includes('/aplicacions/')) { console.error('Prova fallida: ' + r.status); process.exit(1) }
      console.log('Prova: /aplicacions respon ' + r.status + ' amb fitxes.')
    }).catch((e) => { console.error(e.message); process.exit(1) })\""
}

cmd_rollback() {
  ssh_vps "set -e
    docker image inspect identitatdigital:previous >/dev/null
    [ -d $REMOTE/app.old ]
    mv $REMOTE/app $REMOTE/app.failed && mv $REMOTE/app.old $REMOTE/app && rm -rf $REMOTE/app.failed
    docker tag identitatdigital:previous identitatdigital:local"
  compose up -d --no-build --wait --wait-timeout 180
  echo "Tornat a: $(ssh_vps "cat $REMOTE/app/REVISION")"
}

cmd_backup() {
  local file
  file="$REMOTE/backups/identitatdigital-$(date +%Y%m%d-%H%M%S).archive.gz"
  ssh_vps "set -euo pipefail
    docker exec identitatdigital-mongo sh -c 'mongodump --quiet --archive --gzip --db identitatdigital \
      -u \"\$MONGO_INITDB_ROOT_USERNAME\" -p \"\$MONGO_INITDB_ROOT_PASSWORD\" --authenticationDatabase admin' > $file
    chmod 600 $file
    # Es guarden les deu més recents.
    ls -1t $REMOTE/backups/identitatdigital-*.archive.gz | tail -n +11 | xargs -r rm --"
  echo "Còpia: $file"
}

cmd_data() {
  echo "Això SUBSTITUEIX la base de dades i media/ del VPS amb les locals."
  read -r -p "Escriu el domini (identitat.digital) per continuar: " ok
  [ "$ok" = identitat.digital ] || { echo "Cancel·lat."; exit 1; }

  compose up -d --wait mongo
  # Si ja hi havia dades, primer se'n fa còpia: es poden recuperar amb mongorestore.
  if [ "$(remote_user_count)" -gt 0 ]; then cmd_backup; fi

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
  deploy) cmd_upload && cmd_up ;;
  rollback) cmd_rollback ;;
  backup) cmd_backup ;;
  data) cmd_data ;;
  status) compose ps ;;
  logs) compose logs --tail=100 -f app ;;
  *) sed -n '2,19p' "$0"; exit 1 ;;
esac
