# Contrato del MCP público de informes

Destino del plugin: `https://plataforma2.perennia.com.ar/mcp-informes`. Este endpoint debe existir y pasar una prueba con dos técnicos antes de subir el ZIP al directorio público. El MCP general `/mcp` no sirve para este paquete: anuncia herramientas de escritura y `consultar_sql` permite lecturas más amplias que los planes asignados.

## Autoridad

- Autenticar cada llamada con el OAuth del usuario de Plataforma; derivar `id_educador` del JWT validado en el servidor. No aceptar un ID de técnico enviado por el cliente como autoridad.
- Un plan es visible para el técnico responsable del establecimiento y para cada técnico asignado al servicio que lo origina, aunque sean personas distintas. La pertenencia al mismo hub, la autoría de una transcripción o la mención en una grabación no amplían este permiso. Regla funcional: Plataforma FCH-555 v2.
- Una grabación es visible sólo si pertenece al usuario o está anclada a un servicio o establecimiento asignado a él. La misma regla debe aplicarse a la lista, el detalle, la transcripción y cualquier URL de archivo.
- Sin asignación verificable, responder `RESOURCE_NOT_FOUND` o `AUTHZ`; nunca devolver datos parciales, incluso si el usuario conoce el ID.
- Aplicar el filtro en las consultas/funciones de base de datos y volver a comprobarlo en cada lectura. Las instrucciones de la skill y el filtrado en ChatGPT no son una barrera de autorización.

## Herramientas permitidas

El endpoint debe anunciar únicamente herramientas de lectura necesarias para informes, por ejemplo:

1. `mis_capacidades`: identidad y lista de herramientas de este endpoint, sin el catálogo del MCP general.
2. `listar_planes_asignados`: sólo planes DI/PA/PC del técnico, con identificador, servicio, establecimiento, campaña, versión y estado.
3. `obtener_plan_asignado`: datos publicados del plan solicitado y sus tablas/indicadores asociados, tras verificar asignación.
4. `obtener_establecimiento_asignado`: contexto del campo necesario para el informe, tras verificar asignación.
5. `buscar_grabaciones_propias`: metadatos de grabaciones del técnico o ancladas a sus servicios/campos.
6. `obtener_transcripcion_grabacion_propia`: transcripción de una grabación visible, con la misma verificación.

No anunciar `consultar_sql`, lecturas genéricas de tablas ni acciones de escritura. Marcar cada herramienta con `readOnlyHint: true` y justificar la anotación en la revisión de OpenAI.

## Prueba mínima de autorización

Crear tres usuarios técnicos A, B y C del mismo hub: A responsable del establecimiento, B asignado al servicio y C sin ninguna de esas asignaciones. A y B deben listar y leer el plan del servicio; C no debe verlo ni obtenerlo por ID. Quitar la responsabilidad de A y comprobar que pierde acceso en la siguiente lectura, mientras B lo conserva. Probar además planes y grabaciones exclusivos de A y B, con rechazo cruzado por ID. Comprobar una grabación sin ancla, otra anclada a un servicio asignado y una anclada a un servicio ajeno. Verificar que el listado de herramientas del MCP no incluye escritura ni SQL genérico.
