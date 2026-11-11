# Perfil de informe del técnico y logo del nodo

Esta guía se aplica a cada informe. El repositorio público contiene el procedimiento; los informes modelo, perfiles personales y logos aportados por técnicos viven en el espacio privado del técnico o en una biblioteca privada que éste pueda consultar. No incluyas informes de productores ni datos personales en el plugin público.

## Identificar antes de maquetar

1. Intentá identificar al técnico por su nombre explícito, la cuenta conectada o el registro del servicio. Un nombre mencionado en una grabación o transcripción es una pista, no una prueba de identidad ni de autoría. Si hay más de un candidato o la fuente no lo confirma, preguntá quién firma.
2. Determiná el nodo por un dato explícito del perfil, del servicio o del técnico. Si sólo hay una deducción por nombre o audio, preguntá: “¿De qué nodo es este informe?”. No elijas un logo por parecido de nombres.
3. Buscá el nodo por identificador o alias en `assets/nodos/catalogo.json` de esta skill y abrí el PNG indicado. Si hay variantes o el nombre no coincide con seguridad, confirmá cuál usar. Si falta, pedí el archivo del logo y continuá con el contenido; dejá la portada sin logo hasta recibirlo. **Nunca uses el logo de Perennia como sustituto.**
4. Insertá el PNG original en su color real. Conservá su proporción y transparencia; no le apliques filtros CSS, tintes, recoloreado ni lo conviertas a otro formato. En PDF o HTML autocontenido, incrustá esos mismos bytes PNG. Para un logo oscuro o negro sobre transparencia, usá un fondo claro que permita leerlo.

## Plantilla habitual

1. Buscá primero un perfil de informe del técnico y del tipo de servicio (DI, Plan Abierto o Plan Cerrado). El perfil indica estructura, orden de secciones, tono, gráficos, portada, firma y logo de nodo. Un perfil de otro técnico no se hereda automáticamente.
2. Si no hay perfil, pedí un informe modelo propio del técnico o usá la estructura base de esta skill. Del modelo extraé sólo decisiones de **forma**: títulos, orden, estilo de tablas y gráficos, voz y firma. No copies nombres de campos, cifras, observaciones ni recomendaciones.
3. Antes de guardar un perfil nuevo o cambiar uno existente, mostrá una ficha resumida con técnico, tipo de informe, nodo, logo elegido, decisiones de formato y fuente modelo. Pedí al técnico que confirme esas preferencias. El informe actual puede continuar aunque no quiera guardar el perfil.
4. Si el entorno permite guardar archivos, entregá la ficha como `perfil-informe-<tecnico>-<tipo>.json` y el logo por separado. Para reutilizarla en futuras conversaciones de Claude, el técnico debe agregar esos archivos a **Files del mismo Project**; en ChatGPT, a las **fuentes del mismo Proyecto**. No afirmes que un adjunto de este chat quedó guardado para futuros chats. Si existe una herramienta autorizada de biblioteca privada, verificá su destino y resultado antes de decir que se guardó.
5. En un informe posterior, aplicá el perfil más reciente de ese técnico y tipo. Si el técnico pide un cambio puntual, aplicalo al informe actual; preguntá si quiere actualizar el perfil sólo cuando parezca una preferencia duradera. Conservá la versión anterior hasta confirmar la nueva.

## Comprobación final

Verificá que la portada y el pie tengan el mismo técnico y nodo que el servicio confirmado; que se use el archivo real del logo del nodo; y que no haya logos, firmas, nombres, números o fotos heredados del informe modelo. Si no se pudo identificar el nodo, entregá el borrador sin logo y dejá esa decisión pendiente.
