---
name: informe-plan-abierto
description: Redacta o revisa un informe de Plan Abierto a partir de una versión cerrada accesible en Plataforma Perennia y las decisiones del técnico.
---

# Informe de Plan Abierto

El informe explica qué se planificó para un establecimiento y por qué. Antes de redactarlo, confirmá el establecimiento, servicio, campaña y **versión cerrada** del plan. Un plan todavía abierto es un borrador de trabajo: pedí que el técnico seleccione una versión cerrada; no cierres ni reabras planes desde esta skill.

Antes de maquetar, seguí [perfil y nodo](references/perfil-y-nodo.md): recuperá la plantilla habitual del técnico, identificá su nodo y usá sólo el logo real de ese nodo. Si faltan, preguntá o entregá el borrador sin logo. El perfil personal se guarda en el espacio privado del técnico, no en este plugin.

## Datos

1. Usá `listar_planes_asignados` para identificar el servicio, establecimiento y campaña; después leé el contexto con `obtener_establecimiento_asignado`.
2. Elegí la versión cerrada y publicada entre las que devuelve el conector. Si hay varios cierres, mostrá versión, horizonte y fecha, y pedí al técnico que elija. Guardá el identificador del cierre como evidencia de trabajo, sin exigir que lo copie el usuario.
3. Leé ese cierre con `obtener_plan_asignado`. Conservá unidad, período y origen de cada cifra. Un valor nulo significa “sin calcular”; no lo conviertas en cero ni lo reemplaces con un cálculo propio. No mezcles cierres.
4. Pedí al técnico los objetivos, las decisiones de manejo, los acuerdos con el productor y las observaciones que no estén accesibles. Distinguilos de los resultados calculados.

Si una vista o dato no está disponible para esa cuenta, explicá la limitación y trabajá con el material que aporte el técnico. Nunca uses credenciales de otra persona ni supongas que una respuesta vacía significa que el dato no existe.

## Borrador

Incluí: portada e identificación del cierre; resumen de decisiones; contexto y objetivos; situación de partida; estrategia de pastoreo; cambios previstos por ambiente o rodeo; agua e infraestructura; calendario y puntos de seguimiento; riesgos y supuestos; conclusiones y próximos pasos. Añadí tablas o mapa sólo si hay datos verificados que los respalden.

Escribí para el productor: primero la decisión y después el dato que la explica. Atribuí lo que proviene del técnico y señalá preguntas abiertas fuera del documento. Una recomendación no debe aparecer si no se puede relacionar con un hecho del campo.

## Entrega

Entregá un borrador para revisión en el chat o como archivo descargable. Si se pide HTML, que sea autocontenido y legible en pantalla e impresión. PDF sólo si la superficie puede generarlo y el técnico lo solicita. Informá versión y fecha del cierre usado, fuentes leídas y límites. Redactar no autoriza publicar, compartir ni enviar el informe.
