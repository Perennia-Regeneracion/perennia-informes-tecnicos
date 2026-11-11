# Informes Perennia en ChatGPT

El paquete `plugins/perennia-informes/` reúne las skills de Diagnóstico Inicial, Plan Abierto y Plan Cerrado con un conector MCP remoto a Plataforma Perennia. Cada técnico debe autorizar su propia cuenta mediante OAuth. El paquete no contiene credenciales ni informes de productores.

La distribución prevista es **manual**, desde el repositorio público. No requiere publicar el plugin en el directorio oficial de OpenAI. En ChatGPT web, el técnico puede cargar el [ZIP del plugin](perennia-informes-chatgpt-0.1.3.zip) desde **Complementos → Agregar → Cargar archivo del complemento**, si su cuenta permite esa opción. ChatGPT de escritorio también puede cargar el marketplace local de `.agents/plugins/marketplace.json`. Seguí la [guía común con capturas](../INSTALACION-LOCAL.md).

## Estado de la conexión

El conector usa el MCP habitual de Plataforma: `https://plataforma2.perennia.com.ar/mcp`. El rol `tecnico` anuncia lecturas y comandos; el [catálogo actual](../ACCESOS-ROL-TECNICO.md) documenta el alcance observado en el código. La presencia de una skill en la app no demuestra que OAuth y permisos funcionen para una cuenta concreta.

Después de instalar y autenticar, probá `mis_capacidades` en una conversación nueva y seguí [ONBOARDING.md](ONBOARDING.md). Usá los datos a los que tu cuenta ya accede habitualmente en Plataforma.
