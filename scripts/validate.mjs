#!/usr/bin/env node
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = process.env.PUBLIC_KIT_ROOT ? resolve(process.env.PUBLIC_KIT_ROOT) : dirname(fileURLToPath(import.meta.url));
const plugin = join(root, "plugins/perennia-informes");
const marketplace = JSON.parse(readFileSync(join(root, ".claude-plugin/marketplace.json"), "utf8"));
const manifest = JSON.parse(readFileSync(join(plugin, ".claude-plugin/plugin.json"), "utf8"));
const mcp = JSON.parse(readFileSync(join(plugin, ".mcp.json"), "utf8"));
const expectedSkills = ["conectar-plataforma", "informe-di", "informe-plan-abierto", "informe-plan-cerrado"];
const actualSkills = readdirSync(join(plugin, "skills")).sort();
const fail = (message) => { throw new Error(message); };

if (marketplace.plugins?.length !== 1 || marketplace.plugins[0].source !== "./plugins/perennia-informes") fail("Marketplace inválido");
if (marketplace.plugins[0].name !== manifest.name || marketplace.plugins[0].version !== manifest.version) fail("Identidad o versión desalineada");
if (JSON.stringify(actualSkills) !== JSON.stringify(expectedSkills)) fail(`Skills inesperadas: ${actualSkills.join(", ")}`);
if (Object.keys(mcp.mcpServers ?? {}).join() !== "conector-plataforma") fail("El kit debe declarar sólo Conector Plataforma");
if (mcp.mcpServers["conector-plataforma"].url !== "https://plataforma2.perennia.com.ar/mcp") fail("URL del conector inesperada");

for (const skill of expectedSkills) {
  const content = readFileSync(join(plugin, "skills", skill, "SKILL.md"), "utf8");
  if (!content.startsWith(`---\nname: ${skill}\n`)) fail(`Frontmatter inválido: ${skill}`);
  if (!/\ndescription: .+\n/.test(content)) fail(`Falta description: ${skill}`);
  if (/\b(cerebro|pere-brain|mcp__cerebro|perennia-regeneracion\/backoffice)\b/i.test(content)) fail(`Referencia interna en ${skill}`);
}
for (const skill of expectedSkills.filter((name) => name.startsWith("informe-"))) {
  const dir = join(plugin, "skills", skill, "assets/nodos");
  const catalog = JSON.parse(readFileSync(join(dir, "catalogo.json"), "utf8"));
  const entries = catalog.nodos ?? [];
  if (entries.length !== 7) fail(`Cantidad de logos inesperada: ${skill}`);
  for (const node of entries) {
    if (!/^[a-z0-9-]+\.png$/.test(node.logo_archivo)) fail(`Nombre de logo inválido: ${skill}`);
    const png = readFileSync(join(dir, node.logo_archivo));
    if (!png.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) fail(`Logo no es PNG: ${skill}/${node.logo_archivo}`);
  }
}
console.log("Kit público: cuatro skills, un conector y manifiestos válidos.");
