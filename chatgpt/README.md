# Informes Perennia en ChatGPT

Este directorio contiene un plugin de **skills** para ChatGPT web. La app MCP de Plataforma se conecta por separado; el plugin no contiene credenciales ni da acceso a campos por sí mismo.

## Configuración por el administrador

1. En ChatGPT, crear una conexión a un servidor MCP personalizado llamada **conector-plataforma**. Endpoint: `https://plataforma2.perennia.com.ar/mcp`. Elegir **OAuth**. ChatGPT debe descubrir el servidor y solicitar el inicio de sesión de una cuenta de Plataforma. No usar una cuenta compartida para los técnicos.
2. Probar con una cuenta autorizada: ejecutar `mis_capacidades` en modo `resumen`, buscar un establecimiento de prueba al que esa cuenta tenga acceso y hacer una lectura. Revisar las herramientas y habilitar sólo las acciones de lectura necesarias para informes. No dar por probada la conexión por la mera aparición del servidor en la lista.
3. Publicar o compartir esa conexión con los técnicos según los controles del workspace. Cada técnico debe autorizarla con **su propia cuenta de Plataforma**.
4. En **Admin Console → Plugins → Add → Import marketplace**, usar `https://github.com/Perennia-Regeneracion/perennia-informes-tecnicos` como Source, `chatgpt` como Path y la rama `main` (o dejar Branch vacío). Revisar el resultado de importación y permitir la instalación de **Informes Perennia**.

El marketplace de ChatGPT se mantiene separado del de Claude. No contiene `.mcp.json`, porque ChatGPT web puede marcar como **Desktop only** un plugin importado que declara MCP directamente, incluso con URL HTTPS. La conexión externa se gestiona en el workspace. Esta versión no vincula automáticamente la app al plugin: el técnico debe seleccionar **Informes Perennia** y **conector-plataforma** en el mensaje que necesite datos.

Si se quiere una única instalación que incluya la app, primero hay que registrar y aprobar la app en el workspace y agregar su ID real mediante `.app.json` al plugin de ChatGPT. Ese ID depende de la conexión creada y no se inventa en este repositorio público.

## Uso por el técnico

1. Instalar **Informes Perennia** desde Plugins y conectar **conector-plataforma** con su cuenta.
2. En un chat nuevo de Work, seleccionar el plugin y la app. Pedir: «Comprobá mi conexión con Plataforma Perennia. Decime si `mis_capacidades` responde. No hagas cambios».
3. Pedir un borrador indicando nombre del establecimiento, tipo de informe, servicio o campaña y nombre del técnico. Adjuntar observaciones, fotos y un informe modelo propio si corresponde.
4. Revisar cifras, fuentes, fechas, análisis, logo y preguntas pendientes antes de firmar o enviar. El flujo entrega un **borrador**; no publica ni envía informes.

Ver [ONBOARDING.md](ONBOARDING.md) para la prueba completa. La disponibilidad de conexiones MCP, importación de marketplaces y controles de publicación depende del plan y de la configuración de cada workspace.

## Fuentes oficiales

- [Importar marketplaces desde GitHub](https://help.openai.com/en/articles/20001504-importing-and-syncing-plugin-marketplaces-from-github)
- [Conectar servidores MCP personalizados](https://help.openai.com/en/articles/12584461-connecting-custom-mcp-servers-in-chatgpt)
- [Autenticación OAuth de plugins](https://developers.openai.com/plugins/build/auth)
