# Instalar Informes Perennia en una cuenta individual

Cada técnico usa su propia cuenta de Claude o ChatGPT y se autentica con su usuario de Plataforma Perennia. El repositorio contiene instrucciones y la dirección del conector; no contiene credenciales ni informes reales.

**Estado actual:** los plugins apuntan al MCP habitual de Plataforma (`https://plataforma2.perennia.com.ar/mcp`). La instalación de archivos está validada; falta comprobar OAuth y acceso efectivo con cuentas técnicas en Claude y ChatGPT. Revisá [el catálogo del rol técnico](ACCESOS-ROL-TECNICO.md).

## 1. Obtener el repositorio

Con Git instalado, cloná una copia en una carpeta que puedas conservar:

```bash
git clone https://github.com/Perennia-Regeneracion/perennia-informes-tecnicos.git
```

Para actualizar más adelante, ejecutá `git pull` dentro de esa carpeta y refrescá el plugin en la aplicación. La instalación debe tomar la versión de `main`, no una rama de trabajo.

## 2. Claude

### Claude chat o Desktop

En **Plugins → Add marketplace → Add from a repository**, ingresá `Perennia-Regeneracion/perennia-informes-tecnicos`. Instalá **perennia-informes** y conectá `conector-plataforma` con tu usuario de Plataforma. La aplicación obtiene el marketplace desde GitHub: el clon local sirve como copia para inspeccionar los archivos, pero Claude chat no lee directamente esa carpeta.

### Claude Code, si se usa localmente

Desde una terminal, reemplazá `<carpeta-del-repo>` por la ruta donde clonaste el proyecto:

```bash
claude plugin validate <carpeta-del-repo>
claude plugin marketplace add <carpeta-del-repo>
claude plugin install perennia-informes@perennia-informes
claude plugin details perennia-informes
```

El detalle debe mostrar las cuatro skills y `conector-plataforma`. En Claude chat o Claude Code, completá el inicio de sesión OAuth cuando el conector lo solicite.

## 3. ChatGPT en la computadora

Usá la **app de ChatGPT para escritorio** con acceso a Plugins y ejecución local. El navegador web por sí solo no carga un marketplace desde una carpeta de tu PC. Instalá Codex CLI si no está disponible y registrá el clon como marketplace local:

```bash
codex plugin marketplace add <carpeta-del-repo>
codex plugin marketplace list
```

Reiniciá la app de ChatGPT. En **Plugins**, elegí el origen **Informes Perennia (local)**, instalá **perennia-informes** y conectá Plataforma con tu propio usuario. El paquete que corresponde a ChatGPT está en `chatgpt/plugins/perennia-informes/`; su `mcp.json` incluye OAuth. Si el origen local no aparece, verificá que abriste el mismo host local en el que registraste el marketplace y reiniciá la app.

## 4. Prueba antes de entregar a un técnico

La instalación se considera comprobada sólo cuando se completan estas cuatro pruebas en **ambas** aplicaciones:

1. **Carga:** aparecen `conectar-plataforma`, `informe-di`, `informe-plan-abierto` e `informe-plan-cerrado`; el conector anuncia las herramientas del rol `tecnico` descritas en [ACCESOS-ROL-TECNICO.md](ACCESOS-ROL-TECNICO.md), incluidos `consultar_sql` y comandos.
2. **OAuth:** un técnico inicia sesión con su usuario individual; `mis_capacidades` responde con esa identidad. Desconectar y volver a conectar no debe dar acceso a otra persona.
3. **Permisos:** con A responsable del establecimiento y B asignado al servicio, ambos ven el plan. C, del mismo hub y sin asignación, no lo ve ni puede obtenerlo por ID. Repetir con grabaciones y transcripciones, y comprobar que quitar una asignación revoca el acceso en la siguiente lectura.
4. **Informe:** en una conversación nueva, pedir un borrador de DI, PA o PC de un caso de prueba autorizado. Verificar servicio, campaña, versión, cifras, unidades, fuentes y logo. El resultado es un borrador para revisar; no se publica ni envía.

Usar cuentas y datos sintéticos para la prueba de permisos. No copiar datos reales de un productor al repositorio ni a tickets públicos. Registrar aplicación, versión del plugin, cuenta de prueba, resultado y error exacto de cada paso.

Si falla la prueba 1 o 2, revisar la instalación o el OAuth. Si falla la 3, el permiso definido para informes no está aplicado por Plataforma. Registrar el caso y corregir la autorización del backend antes de declarar que el acceso se limita a asignaciones. Si falla la 4, revisar herramientas y skills después de comprobar las tres pruebas anteriores.
