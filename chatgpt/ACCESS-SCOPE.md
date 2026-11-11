# Acceso del plugin con el MCP habitual de Plataforma

Los plugins de Claude y ChatGPT usan `https://plataforma2.perennia.com.ar/mcp`. El servidor resuelve la identidad mediante OAuth y anuncia herramientas según el rol y otras capacidades. Ver el [inventario del rol `tecnico`](../ACCESOS-ROL-TECNICO.md).

El alcance actual del rol es más amplio que preparar informes: incluye `consultar_sql`, lecturas genéricas y comandos. Las skills orientan la tarea, pero no limitan lo que la cuenta puede pedirle al MCP. La autorización efectiva de cada dato y acción depende de las RPC, grants y RLS de Plataforma.

El requisito funcional previo era que A, responsable del establecimiento, y B, asignado al servicio, puedan leer el plan y sus grabaciones, mientras C, del mismo hub sin asignación, no pueda. Ese aislamiento **no está demostrado** por el catálogo de herramientas. Antes de afirmar que el rol `tecnico` tiene sólo acceso a sus planes y grabaciones, ejecutar la prueba A/B/C con usuarios y datos sintéticos, incluidos intentos por ID y `consultar_sql`. Si C puede leerlos, hay que ajustar los permisos en el backend del `/mcp` habitual.
