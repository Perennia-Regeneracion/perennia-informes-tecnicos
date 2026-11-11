---
name: conectar-plataforma
description: Guía a un técnico para conectar su propia cuenta de Plataforma Perennia en ChatGPT y verifica una lectura real antes de preparar un informe.
---

# Conectar Plataforma Perennia en ChatGPT

Este plugin incluye la conexión MCP a Plataforma. Instalarlo no concede acceso a datos: cada técnico debe autorizar su propia cuenta de Plataforma.

1. Pedí al técnico que instale **Informes Perennia** desde el directorio de plugins y complete la autorización OAuth de **conector-plataforma** con su propia cuenta. Si la conexión no aparece, indicá que el plugin todavía no está publicado o que su cuenta no tiene acceso.
2. Buscá la herramienta `mis_capacidades` del conector y llamala con `{"modo":"resumen"}`. Confirmá conexión sólo si la llamada responde. Ver el nombre del conector no prueba que haya sesión iniciada.
3. Para un campo concreto, comprobá el acceso con una lectura autorizada antes de afirmar que sus datos están disponibles.

Si hay error de autenticación, pedí reconectar la cuenta. Si falta acceso al campo o a una herramienta, explicá el resultado y seguí únicamente con material que el técnico aporte. No uses otras credenciales ni busques rutas alternativas.
