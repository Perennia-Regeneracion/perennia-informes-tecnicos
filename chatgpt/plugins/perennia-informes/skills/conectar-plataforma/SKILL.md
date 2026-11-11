---
name: conectar-plataforma
description: Guía a un técnico para conectar su propia cuenta de Plataforma Perennia en ChatGPT y verifica una lectura real antes de preparar un informe.
---

# Conectar Plataforma Perennia en ChatGPT

Este plugin contiene las instrucciones de informes. La conexión a Plataforma se configura por separado como app MCP de ChatGPT; instalar el plugin no concede acceso a datos.

1. Pedí al técnico que seleccione la app **conector-plataforma** en el mensaje del informe y que complete la autorización OAuth con su propia cuenta. Si la app no está disponible, indicá que el administrador debe configurarla según `chatgpt/README.md` del repositorio público.
2. Buscá la herramienta `mis_capacidades` de esa app y llamala con `{"modo":"resumen"}`. Confirmá conexión sólo si la llamada responde. Ver el nombre de la app no prueba que haya sesión iniciada.
3. Para un campo concreto, comprobá el acceso con una lectura autorizada antes de afirmar que sus datos están disponibles.

Si hay error de autenticación, pedí reconectar la cuenta. Si falta acceso al campo o a una herramienta, explicá el resultado y seguí únicamente con material que el técnico aporte. No uses otras credenciales ni busques rutas alternativas.
