#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PUBLIC_KIT_ROOT="$root" node "$root/scripts/validate.mjs"

output="${1:-$root/chatgpt/perennia-informes-chatgpt.zip}"
mkdir -p "$(dirname "$output")"
rm -f "$output"
(
  cd "$root/chatgpt/plugins/perennia-informes"
  zip -q -r "$output" plugin.json mcp.json assets skills
)
echo "Paquete ChatGPT: $output"
