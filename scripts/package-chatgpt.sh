#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLIC_KIT_ROOT="$root" node "$root/scripts/validate.mjs"

version="$(node -e 'process.stdout.write(require(process.argv[1]).version)' "$root/chatgpt/plugins/perennia-informes/plugin.json")"
output="${1:-$root/chatgpt/perennia-informes-chatgpt-${version}.zip}"
rm -f "$output"
endpoint="https://plataforma2.perennia.com.ar/mcp"
status="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 10 -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  --data '{}' "$endpoint")"
if [ "$status" != "401" ]; then
  echo "El MCP habitual de Plataforma no devolvió el desafío OAuth esperado (HTTP $status). No se genera el ZIP." >&2
  exit 1
fi

mkdir -p "$(dirname "$output")"
(
  cd "$root/chatgpt/plugins/perennia-informes"
  zip -q -r "$output" plugin.json mcp.json assets skills
)
echo "Paquete ChatGPT: $output"
