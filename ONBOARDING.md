# Prueba guiada para un técnico

Esta prueba permite comprobar la instalación sin publicar ni enviar un informe a un productor.

## 1. Instalar y conectar

Seguí los pasos de [README.md](README.md). En una conversación nueva, escribí:

> Comprobá mi conexión con Plataforma Perennia. Decime si `mis_capacidades` responde. No hagas cambios.

Resultado esperado: Claude confirma una respuesta real del conector o muestra un error concreto de conexión. Ver el nombre del conector en pantalla no prueba que haya iniciado sesión.

## 2. Identidad y nodo

Escribí:

> Soy [nombre]. Trabajo en el nodo [nodo]. Prepará un borrador de [Diagnóstico Inicial / Plan Abierto / Plan Cerrado] del establecimiento [nombre]. Decime qué logo usarías antes de generar el documento.

Resultado esperado: elige el PNG del nodo indicado y conserva sus colores. Si el nodo no está confirmado o no figura en la biblioteca, pregunta y no usa otro logo. Ningún informe debe llevar el logo de Perennia como reemplazo.

## 3. Plantilla personal

Adjuntá un informe anterior redactado por vos y escribí:

> Usá este informe sólo como referencia de estructura y estilo. No copies datos ni conclusiones de ese campo. Mostrame la ficha de plantilla que guardarías para mis próximos informes.

Resultado esperado: Claude separa formato de contenido, identifica técnico y tipo de informe, y entrega una ficha revisable. Si estás conforme, guardala junto con el modelo en **Files del Project**. Para comprobar la reutilización, abrí otra conversación dentro del mismo Project y pedí un nuevo borrador.

## 4. Datos y borrador

Elegí un caso al que tu cuenta tenga acceso y pedí un borrador. Si alguna lectura falla, la skill debe decir qué dato no pudo obtener y pedir el material faltante. Revisá identidad del campo, fechas, unidades, cifras, análisis, logo y preguntas pendientes. La prueba termina con un borrador: no lo publiques ni lo envíes desde este flujo.

## 5. Devolver observaciones

Anotá el tipo de informe, nodo, paso que falló y el mensaje exacto de error. Si el resultado difería de tu formato habitual, indicá qué sección, gráfico o tono debe cambiar. Evitá enviar por canales públicos datos de productores o credenciales.
