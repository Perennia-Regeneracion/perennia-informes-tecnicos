# Perennia Informes — kit para técnicos

Plugin de Claude para preparar informes de Diagnóstico Inicial, Plan Abierto y Plan Cerrado con la cuenta del técnico en Plataforma Perennia. Incluye una biblioteca de logos de siete nodos. Cada logo se usa como PNG original, sin cambiar sus colores.

También hay un [paquete para ChatGPT web](chatgpt/README.md), con instrucciones para conectar Plataforma y una prueba guiada.

## Instalación en Claude

1. Abrí **Plugins** (en algunas cuentas, **Customize → Plugins**).
2. Elegí **Add → Add marketplace → Add from a repository** e ingresá `Perennia-Regeneracion/perennia-informes-tecnicos`.
3. En ese marketplace, agregá el plugin **perennia-informes**.
4. Abrí **Conectores** dentro del plugin. En `conector-plataforma`, pulsá **Conectar**. Claude mostrará la URL de Plataforma; pulsá **Continuar**, dejá **Iniciar sesión ahora** y **Registrar automáticamente**, y pulsá **Agregar**.
5. El conector quedará como **Sin conexión**. Pulsá **Conectar** otra vez. Se abrirá Plataforma: iniciá sesión con tu propia cuenta y revisá la pantalla **Autorizar acceso**. Si estás de acuerdo con el acceso que muestra, pulsá **Autorizar**.
6. Abrí una conversación nueva, activá el conector si aparece desactivado y pedí: **«Comprobá mi conexión con Plataforma y ayudame a preparar un informe»**.

No necesitás instalar programas, descargar el repositorio ni configurar tokens. La instalación del plugin no modifica tus accesos a datos. El inicio de sesión y la autorización OAuth son pasos necesarios para que Claude use el conector con tu cuenta.

## Tu primer informe

Indicá establecimiento, tipo de informe, servicio o campaña y tu nombre. La skill buscará el nodo correspondiente; si no lo puede confirmar, te preguntará. También podés adjuntar un informe tuyo anterior para que aprenda el formato que usás. Revisá el borrador antes de firmarlo o enviarlo.

Para reutilizar tu formato entre conversaciones, guardá la ficha de perfil que genera la skill y tu informe modelo en **Files del mismo Project de Claude**. Un adjunto puesto sólo en una conversación no queda disponible automáticamente en las demás.

Guía de prueba: [ONBOARDING.md](ONBOARDING.md).

## Contenido

- `conectar-plataforma`: inicio de sesión y prueba de conexión.
- `informe-di`, `informe-plan-abierto`, `informe-plan-cerrado`: lectura, entrevista, borrador y revisión.
- Logos de Quebracho, Alianzas en Bio Regeneración, Sinergia Regenera, Recuperando Pampas, RegeNOA, Witru y Campo Vivo.

El plugin no contiene Cerebro, informes reales de productores ni credenciales. Los logos pertenecen a sus respectivos nodos y se incluyen para preparar informes del nodo correspondiente.
