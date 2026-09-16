# Bitácora y Reflexiones

## Paso 1: ¿Por qué NestJS separa el controlador de la lógica (servicio) y su relación con "desacoplar por contrato"?
La separación en NestJS permite que el Controlador defina el "contrato" (rutas, entradas, código de estado y formato de respuestas) hacia el consumidor externo, mientras que el Servicio encapsula toda la implementación interna (la lógica de negocio). Esto significa que podemos cambiar la fuente de datos subyacente en el servicio (por ejemplo, pasar de un arreglo en memoria a una base de datos SQL o MongoDB) sin modificar absolutamente nada en el controlador. El consumidor de la API nunca se enterará del cambio interno, ya que el contrato se mantiene intacto.

## Paso 5: ¿Qué le falta a tu Swagger para que otro equipo (frontend) la use sin haber visto tu código?
Para que el equipo de frontend sea 100% independiente utilizando únicamente nuestra documentación en Swagger, a la especificación actual le haría falta:
- **Ejemplos Reales (Payloads):** Mostrar un ejemplo JSON real del contenido de las respuestas.
- **Respuestas de Error Detalladas (4xx, 5xx):** Documentar explícitamente el formato que tendrán los errores (por ejemplo, la estructura JSON del NotFoundException 404).
- **Reglas de Validación de Entrada:** Si en el futuro tenemos peticiones POST, se requeriría el uso de DTOs con decoradores (ej: `@ApiProperty()`) para exponer los requerimientos de cada campo (tamaño máximo, formatos requeridos, etc.).

## Paso 8: Reflexión Final
El framework NestJS, gracias a su arquitectura modular orientada a decoradores y tipos estrictos de TypeScript, hace que sea muy rápido y seguro escalar una API, forzando buenas prácticas desde el día uno. Adicionalmente, el ecosistema integrado (como `@nestjs/swagger`) automatiza la documentación.

---

### Declaración de uso de IA
- **Herramienta(s):** Antigravity IDE (Gemini 3.1 Pro)
- **Nivel de uso:** Nivel 2-3 (Borrador / Revisor)
- **Qué se le pidió:** 
  1. Ayuda para explicar la separación de responsabilidades (controlador vs servicio) relacionada con "desacoplar por contrato".
  2. Asistencia para solucionar el error de compilación de TypeScript `TS1272` (provocado por mezclar exportación de interfaces con el flag emitDecoratorMetadata habilitado), resuelto usando `import type`.
  3. Guía sobre cómo aplicar el decorador `@ApiOkResponse` para añadir esquemas en línea al Swagger UI.
- **Qué se modificó/verificó manualmente:** Se verificó localmente el servidor, se comprobó que el endpoint `/api/docs` reflejara correctamente la nueva estructura y se administró de forma manual el repositorio en Git y GitHub, validando las exclusiones en el archivo `.gitignore`.
