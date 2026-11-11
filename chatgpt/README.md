# Informes Perennia en ChatGPT de escritorio

El paquete `plugins/perennia-informes/` reúne las skills de Diagnóstico Inicial, Plan Abierto y Plan Cerrado con un conector MCP remoto a Plataforma Perennia. Cada técnico debe autorizar su propia cuenta mediante OAuth. El paquete no contiene credenciales ni informes de productores.

La distribución prevista es **manual y local**, desde el repositorio público. No requiere publicar el plugin en el directorio oficial de OpenAI. La app de ChatGPT para escritorio puede cargar el marketplace local de `.agents/plugins/marketplace.json`; seguí la [guía común de instalación y prueba](../INSTALACION-LOCAL.md).

## Estado de la conexión

El conector usa `https://plataforma2.perennia.com.ar/mcp-informes`. Ese endpoint todavía debe implementarse y probarse según el [contrato de acceso](ACCESS-SCOPE.md). El MCP general `/mcp` expone más herramientas y datos que los autorizados para técnicos. La presencia de una skill en la app no demuestra que el conector funcione ni que sus permisos sean correctos.

Después de instalar y autenticar, probá `mis_capacidades` en una conversación nueva y seguí [ONBOARDING.md](ONBOARDING.md). No uses datos reales hasta que la prueba de aislamiento A/B/C haya pasado.
