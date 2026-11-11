# Acceso del plugin con el MCP habitual de Plataforma

Los plugins de Claude y ChatGPT usan `https://plataforma2.perennia.com.ar/mcp`. El servidor resuelve la identidad mediante OAuth y anuncia herramientas según el rol y otras capacidades. Ver el [inventario del rol `tecnico`](../ACCESOS-ROL-TECNICO.md).

El alcance actual del rol es más amplio que preparar informes: incluye `consultar_sql`, lecturas genéricas y comandos. Las skills orientan la tarea, pero no limitan lo que la cuenta puede pedirle al MCP. La autorización efectiva de cada dato y acción depende de las RPC, grants y RLS de Plataforma.

Para esta entrega rigen los permisos ya definidos internamente en Plataforma para el rol `tecnico`. No se agrega una regla especial por asignación de establecimiento o servicio. El técnico debe iniciar sesión con su usuario individual; `mis_capacidades` y una lectura real permiten comprobar qué identidad y datos recibe esa cuenta.
