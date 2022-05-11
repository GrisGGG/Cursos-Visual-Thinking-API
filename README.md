## Cursos-Visual-Thinking-API
Proyecto  para consultar los datos de los Cursos de Visual Thinking, parte del code challenge del programa de Launch-X

### Requerimientos
Requerimientos:
1. Habilitar un endpoint para consultar todos los estudiantes con todos sus campos.
2. Habilitar un endpoint para consultar los emails de todos los estudiantes que tengan certificación `haveCertification`.
3. Habilitar un endpoint para consultar todos los estudiantes que tengan `credits` mayor a 500.

| Endpoint | Request | Response |
|---|---|---|
| `v1/students` | `localhost:3000/v1/students` | Se obtendra la lista de estudiantes con todos sus campos |
| `v1/students/haveCertification/emails` | `localhost:3000/v1/students/haveCertification/emails` | Se obtendran los email de los estudiantes con la condición `haveCertification` |
| `v1/students/credits` | `localhost:3000/v1/students/credits` | Se obtendran los datos de los estudiantes que tengran `credits` mayor a 500 |

### Estructura del proyecto

