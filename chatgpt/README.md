# Informes Perennia para cuentas individuales de ChatGPT

El paquete en `plugins/perennia-informes/` reúne las tres skills de informes y una conexión MCP remota a Plataforma Perennia. Cada técnico autoriza **su propia cuenta** mediante OAuth. El paquete no contiene credenciales, informes de productores ni acceso compartido. El [contrato de acceso](ACCESS-SCOPE.md) exige que cada usuario vea sólo sus planes y grabaciones.

## Estado de publicación

El repositorio contiene la estructura del paquete para el **directorio público de plugins de ChatGPT y Codex**. Subirlo a GitHub o importar un marketplace no lo publica en ese directorio. El ZIP público **no se genera todavía**: el script exige que `https://plataforma2.perennia.com.ar/mcp-informes` esté desplegado y responda con OAuth. El MCP general `/mcp` tiene herramientas y permisos más amplios que los solicitados.

## Preparar la presentación

1. Implementar y probar el endpoint de sólo lectura según [ACCESS-SCOPE.md](ACCESS-SCOPE.md). Luego ejecutar `PUBLIC_KIT_ROOT=. node scripts/validate.mjs` y `bash scripts/package-chatgpt.sh` para generar el ZIP sin secretos.
2. En la organización de OpenAI que publicará como Perennia, completar la verificación de identidad y confirmar acceso **Apps Management Write**. Subir el ZIP en **Platform → Plugins → Upload new or existing plugin**, eligiendo **With MCP**.
3. Completar en `plugin.json` los enlaces públicos reales de **política de privacidad** y **términos de servicio**. Se dejaron sin declarar porque no encontramos páginas públicas verificables de Perennia; no se deben inventar textos legales ni apuntar a rutas que redirijan al login.
4. Conectar el MCP de informes en el portal, completar la verificación del dominio y autorizar una cuenta de prueba de Plataforma. El servidor OAuth general anuncia registro dinámico y PKCE S256, pero la conexión completa y la renovación de sesión del nuevo endpoint deben probarse en el portal.
5. Revisar herramientas descubiertas, permisos y datos que una cuenta de técnico puede leer. Preparar exactamente **cinco casos positivos y tres negativos**, una grabación de demostración y acceso de prueba para revisión. Cargar credenciales sólo en el formulario seguro del portal, nunca en el repositorio.
6. Resolver las observaciones automáticas y enviar a revisión. Tras la aprobación, publicar el plugin y probar instalación y borrador desde una cuenta individual de técnico distinta de la del publicador.

La [prueba guiada](ONBOARDING.md) cubre el último paso. La publicación pública está sujeta a la revisión de OpenAI y a las funciones disponibles en el plan de cada técnico.

## Uso por el técnico, después de publicar

1. Buscar **Informes Perennia** en Plugins, instalarlo y conectar Plataforma con su cuenta.
2. En un chat nuevo de Work, seleccionar el plugin y pedir: «Comprobá mi conexión con Plataforma Perennia. Decime si `mis_capacidades` responde. No hagas cambios».
3. Pedir un borrador indicando establecimiento, tipo de informe, servicio o campaña y nombre del técnico. Adjuntar observaciones, fotos y un informe modelo propio si corresponde.
4. Revisar cifras, fuentes, fechas, análisis, logo y preguntas pendientes antes de firmar o enviar. Este flujo entrega un **borrador**; no publica ni envía informes.

## Fuentes oficiales

- [Empaquetar plugins](https://developers.openai.com/plugins/build/plugins)
- [Subir y publicar plugins](https://developers.openai.com/plugins/deploy/submission)
- [Autenticación OAuth](https://developers.openai.com/plugins/build/auth)
