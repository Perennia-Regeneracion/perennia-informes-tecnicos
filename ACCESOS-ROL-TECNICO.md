# Herramientas visibles con rol `tecnico` en el MCP habitual

**Fuente:** catálogo de `web/src/mcp/registry.ts` en la rama `preview` de Plataforma, revisado el 11 de noviembre de 2026. Es un inventario del código, no una prueba de OAuth ni de permisos sobre datos reales. El catálogo puede cambiar; para cada cuenta verificá `mis_capacidades` y `tools/list` después de conectar.

## Alcance

Una cuenta autenticada como `tecnico` ve normalmente **131 herramientas del catálogo** (50 consultas y 81 comandos), más **4 lecturas genéricas** y `mis_capacidades`: **136 herramientas**. El número no incluye capacidades condicionales. Que una herramienta aparezca no asegura que toda llamada sea autorizada: el canal, cada RPC y las políticas de base de datos pueden restringir recursos, hub, asignación o estado.

El rol también ve `consultar_sql` (SELECT/WITH, con grants y RLS del JWT del usuario). No hay una restricción global del conector que lo reduzca a planes y grabaciones asignados. El requisito de acceso A/B/C definido para informes sigue pendiente de una prueba con cuentas técnicas.

## Inventario por área

En las listas, **L** significa consulta y **E** significa comando que puede crear, editar, enviar o borrar datos cuando el backend lo autoriza.

### Agenda (1)

- **E:** `guardar_rendicion_servicio`.

### Documentos (26)

- **L:** `obtener_estado_documento`, `listar_arbol_documentos`, `listar_drive_documentos`, `listar_documentos`, `obtener_documento`, `obtener_version_documento`.

- **E:** `preparar_upload_documento_fuente`, `preparar_upload_documento_asset`, `crear_nodo_documentos`, `actualizar_nodo_documentos`, `mover_documento_nodo`, `gestionar_colaborador_nodo`, `importar_documento_drive`, `guardar_version_documento`, `crear_workspace_documento`, `guardar_workspace_documento`, `versionar_workspace_documento`, `descartar_workspace_documento`, `gestionar_colaborador_documento`, `crear_comentario_documento`, `responder_comentario_documento`, `marcar_comentario_atendido`, `resolver_comentario_documento`, `crear_enlace_version`, `revocar_enlace_version`, `retirar_documento`.

### Evaluaciones (3)

- **L:** `listar_servicios_para_evaluar`, `verificar_evaluacion_servicio`.

- **E:** `guardar_evaluacion_servicio`.

### Facturas y cobros (14)

- **L:** `consultar_carga_adjunto`, `listar_cargas_adjuntos`, `consultar_carga_comprobante`, `listar_cargas_comprobantes`, `leer_factura_pdf`, `cobro_buscar_factura`.

- **E:** `recuperar_carga_adjunto`, `cargar_factura_tecnico_propia`, `recuperar_carga_comprobante`, `cargar_factura_tecnico_adjunto`, `cobro_agregar_comprobante`, `cobro_finalizar`, `marcar_factura_cobrada`, `cargar_factura`.

### Gastos (1)

- **E:** `cargar_gasto`.

### Indicadores (1)

- **L:** `obtener_catalogo_snapshot`.

### Integraciones externas (11)

- **L:** `obtener_contexto_exportacion_pastor`, `listar_contextos_google_v2`, `obtener_referencia_drive`, `obtener_exportacion_pastor`, `listar_capacidades_integracion`.

- **E:** `admitir_exportacion_pastor`, `solicitar_validacion_destino`, `guardar_referencia_drive`, `desconectar_conexion_google`, `seleccionar_cuenta_pastor`, `aceptar_conexion_google`.

### Mapas GIS (1)

- **E:** `crear_capa_gis`.

### Mejoras internas (1)

- **E:** `registrar_mejora`.

### Memoria del asistente (2)

- **E:** `recordar`, `olvidar`.

### Notas de seguimiento (3)

- **L:** `listar_notas_seguimiento`.

- **E:** `crear_nota_seguimiento`, `actualizar_nota_seguimiento`.

### Personas, contactos y establecimientos (30)

- **L:** `previsualizar_fusion_personas`, `previsualizar_recuperacion_fusion_personas`, `listar_personas`, `buscar_personas`, `obtener_persona`, `listar_contrapartes`, `buscar_contrapartes`, `obtener_contraparte`, `listar_establecimientos`, `buscar_establecimientos`, `obtener_establecimiento`, `listar_establecimientos_usuario`, `listar_educadores_hub`, `buscar_establecimiento`, `buscar_contacto`.

- **E:** `confirmar_fusion_personas`, `confirmar_recuperacion_fusion_personas`, `crear_establecimiento`, `crear_contacto`, `crear_persona`, `actualizar_persona`, `crear_contraparte`, `actualizar_contraparte`, `vincular_persona_contraparte`, `actualizar_vinculo_persona_contraparte`, `desvincular_persona_contraparte`, `vincular_persona_establecimiento`, `vincular_contraparte_establecimiento`, `desvincular_contraparte_establecimiento`, `actualizar_establecimiento`.

### Presupuestos (7)

- **L:** `preparar_alertas_presupuesto`, `preparar_tarifa_presupuesto`, `precio_sugerido_linea`.

- **E:** `confirmar_presupuesto_tarifado`, `crear_presupuesto`, `anotar_presupuesto`, `cambiar_estado_presupuesto`.

### Reuniones, grabaciones y minutas (13)

- **L:** `buscar_evento`, `buscar_grabaciones`, `obtener_transcripcion_grabacion`, `obtener_hablantes_grabacion`, `previsualizar_destinatarios_minuta`.

- **E:** `crear_evento`, `guardar_minuta_evento`, `asignar_hablantes_grabacion`, `guardar_minuta_grabacion`, `subir_grabacion_audio`, `enviar_minuta_asistentes`, `actualizar_evento`, `cancelar_evento`.

### SQL (1)

- **L:** `consultar_sql`.

### Servicios y rendiciones (8)

- **L:** `obtener_correccion_participantes`, `listar_servicios_para_rendir`.

- **E:** `solicitar_correccion_participantes`, `rendir_movilidad`, `editar_movilidad`, `cancelar_movilidad`, `crear_servicio`, `agendar_servicio`.

### Tareas (8)

- **L:** `buscar_tarea`, `listar_mis_tareas`, `listar_tags_tarea`.

- **E:** `crear_tarea`, `actualizar_tarea`, `cambiar_estado_tarea`, `asignar_tarea`, `agregar_comentario_tarea`.

## Lecturas genéricas y capacidades

- **L:** `consultar_datos`, `contar_filas`, `describir_tabla`, `listar_tablas`.
- **L:** `mis_capacidades` informa la identidad y las capacidades visibles.

## Accesos condicionales

- Las herramientas de **contabilidad** se agregan si la cuenta tiene `acceso_contabilidad=true` y el hub tiene el módulo contable activo; el rol `tecnico` por sí solo no las habilita.
- Algunas herramientas de **soporte** pueden aparecer por autorización nominal del usuario, aparte del rol.
- La operación concreta puede requerir sesión real, confirmación, pertenencia a un hub, participación en un servicio o permisos sobre un documento.

## Comprobación pendiente

Probar con A responsable del establecimiento, B asignado al servicio y C del mismo hub sin asignación. A y B deben leer el plan y grabaciones correspondientes; C debe fallar tanto en listados como por ID y mediante `consultar_sql`. Repetir tras quitar una asignación. Hasta verificarlo, no afirmar que cada técnico sólo puede leer sus planes y grabaciones.
