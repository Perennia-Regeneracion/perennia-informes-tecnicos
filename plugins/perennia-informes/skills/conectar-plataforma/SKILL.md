---
name: conectar-plataforma
description: Ayuda a un técnico externo a conectar su cuenta de Plataforma Perennia en Claude y comprueba la conexión antes de iniciar un informe.
---

# Conectar Plataforma Perennia

El plugin incluye la dirección del conector. El técnico inicia sesión con **su propia cuenta de Plataforma Perennia**. No necesita GitHub, tokens ni archivos de configuración.

1. En Claude, abrir **Plugins** (o **Customize → Plugins**, según la interfaz) e instalar `perennia-informes` desde el marketplace indicado en el manual de onboarding.
2. Buscar `conector-plataforma` entre los conectores del plugin y elegir **Connect**. Completar el inicio de sesión en el navegador.
3. En la conversación del informe, habilitar el conector si aparece desactivado.
4. Pedir al conector `mis_capacidades` con `{"modo":"resumen"}`. Informar al técnico si la llamada responde. No inferir acceso a un campo concreto sólo por ver el conector.

Si una llamada real devuelve un error de autenticación, pedir que vuelva a conectar su cuenta. Si responde que no puede acceder a un campo o a una herramienta, explicar el resultado y detener esa lectura; no intentar otras credenciales ni rutas alternativas. La instalación del plugin no modifica los accesos de Plataforma.
