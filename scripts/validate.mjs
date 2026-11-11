#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
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
if (mcp.mcpServers["conector-plataforma"].url !== "https://plataforma2.perennia.com.ar/mcp-informes") fail("El plugin de Claude debe usar el MCP acotado a informes");

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
console.log("Kit Claude: cuatro skills, un conector y manifiestos válidos.");

const chatgptRoot = join(root, "chatgpt");
const chatgptPlugin = join(chatgptRoot, "plugins/perennia-informes");
const localMarketplace = JSON.parse(readFileSync(join(root, ".agents/plugins/marketplace.json"), "utf8"));
if (localMarketplace.name !== "perennia-informes-local" || localMarketplace.plugins?.length !== 1) fail("Marketplace local de ChatGPT inválido");
if (localMarketplace.plugins[0].name !== manifest.name || localMarketplace.plugins[0].source?.path !== "./chatgpt/plugins/perennia-informes") fail("Origen local de ChatGPT desalineado");
const chatgptManifest = JSON.parse(readFileSync(join(chatgptPlugin, "plugin.json"), "utf8"));
const chatgptMcp = JSON.parse(readFileSync(join(chatgptPlugin, "mcp.json"), "utf8"));
const chatgptSkills = readdirSync(join(chatgptPlugin, "skills")).sort();
if (JSON.stringify(chatgptSkills) !== JSON.stringify(expectedSkills)) fail("Skills de ChatGPT incompletas");
if (chatgptManifest.name !== manifest.name || chatgptManifest.version !== manifest.version) fail("Identidad de ChatGPT desalineada");
if (chatgptManifest.$schema !== "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json") fail("Plugin ChatGPT sin schema portable");
if (chatgptManifest.extensions?.["com.openai"]?.onboardingSkill !== "./skills/conectar-plataforma/SKILL.md") fail("Onboarding de ChatGPT sin declarar");
if (existsSync(join(chatgptPlugin, ".mcp.json")) || existsSync(join(chatgptPlugin, ".app.json"))) fail("Configuración local o app ajena en el paquete público");
if (chatgptMcp.$schema !== "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json") fail("MCP ChatGPT sin schema portable");
const chatgptServer = chatgptMcp.mcpServers?.["conector-plataforma"];
if (Object.keys(chatgptMcp.mcpServers ?? {}).length !== 1 || chatgptServer?.type !== "streamable-http" || chatgptServer?.url !== "https://plataforma2.perennia.com.ar/mcp-informes") fail("El plugin público debe usar el MCP acotado a informes");
if (chatgptServer.extensions?.["com.openai"]?.auth?.client?.mode !== "dcr" || chatgptServer.extensions?.["com.openai"]?.auth?.type !== "oauth") fail("OAuth del paquete ChatGPT inválido");
const chatgptInterface = chatgptManifest.extensions?.["com.openai"]?.interface;
for (const field of ["displayName", "shortDescription", "longDescription", "developerName", "category", "websiteURL", "supportURL", "composerIcon", "logo"]) {
  if (!chatgptInterface?.[field]) fail(`Falta metadata pública ChatGPT: ${field}`);
}
for (const field of ["composerIcon", "logo"]) {
  if (!existsSync(join(chatgptPlugin, chatgptInterface[field]))) fail(`Falta asset público ChatGPT: ${field}`);
}

function compareTrees(source, target, relative = "") {
  const sourceEntries = readdirSync(source).sort();
  const targetEntries = readdirSync(target).sort();
  if (JSON.stringify(sourceEntries) !== JSON.stringify(targetEntries)) fail(`Kit de ChatGPT desalineado: ${relative || source}`);
  for (const name of sourceEntries) {
    const next = join(relative, name);
    const from = join(source, name);
    const to = join(target, name);
    if (statSync(from).isDirectory()) {
      if (!statSync(to).isDirectory()) fail(`Kit de ChatGPT desalineado: ${next}`);
      compareTrees(from, to, next);
    } else if (!readFileSync(from).equals(readFileSync(to))) {
      fail(`Kit de ChatGPT desalineado: ${next}`);
    }
  }
}
for (const skill of expectedSkills.filter((name) => name.startsWith("informe-"))) {
  compareTrees(join(plugin, "skills", skill), join(chatgptPlugin, "skills", skill), skill);
}
console.log("Kit ChatGPT local: OAuth y tres skills de informes alineadas.");
