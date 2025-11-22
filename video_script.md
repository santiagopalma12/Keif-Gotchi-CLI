# Guía de Producción: Video Demo de Keif-Gotchi (5 Minutos)

## 🎬 Resumen
Este video demostrará cómo Keif-Gotchi transforma el flujo de trabajo de Git en un juego, actuando como un "Accountability Partner" virtual.

## 🛠️ Preparación (Antes de Grabar)
1.  **Instalación**: Asegúrate de ejecutar `npm install` y `npm link` en el directorio del proyecto.
2.  **Limpieza**: Borra la configuración actual para empezar de cero.
    *   (Proporcionaré un script `src/demo_utils.ts` para esto).
3.  **Terminal**: Usa una terminal con buen contraste y fuente grande (ej. Windows Terminal con tema oscuro).

## 📝 Guion Paso a Paso

### Escena 1: La Introducción (0:00 - 0:45)
*   **Acción**: Mostrar la terminal vacía.
*   **Narración**: "Do you feel lonely while coding? Are your commits a mess? Meet Keif-Gotchi."
*   **Comando**: Ejecuta `keif init`.
*   **Resultado**: Muestra el mensaje de éxito "Keif is watching".
*   **Comando**: Ejecuta `keif status`.
*   **Resultado**: Muestra el Huevo (Egg) o Bebé Keif.

### Escena 2: Alimentando a la Bestia (0:45 - 1:30)
*   **Narración**: "Keif feeds on your code. He loves atomic commits and descriptive messages."
*   **Acción**:
    1.  Haz un cambio pequeño en un archivo (ej. `test.txt`).
    2.  `git add .`
    3.  `git commit -m "feat: add initial testing configuration"`
*   **Resultado**: El hook se dispara automáticamente. Muestra la salida de Keif ("Yummy! +XP").
*   **Comando**: `keif status`.
*   **Visual**: Muestra que la barra de XP ha subido.

### Escena 3: Comida Chatarra (1:30 - 2:15)
*   **Narración**: "But be careful. If you are lazy, Keif will judge you."
*   **Acción**:
    1.  Haz otro cambio pequeño.
    2.  `git add .`
    3.  `git commit -m "wip"` (Mensaje corto y malo).
*   **Resultado**: El hook se dispara. Keif se queja ("Bored...", "Low XP").
*   **Comando**: `keif status`.
*   **Visual**: Muestra la reacción de aburrimiento.

### Escena 4: Evolución (2:15 - 3:30)
*   **Narración**: "Over time, Keif evolves based on your coding style."
*   **Truco de Magia**:
    *   *Corte de cámara o pausa.*
    *   Ejecuta el script secreto: `node --loader ts-node/esm src/demo_utils.ts evolve architect`
    *   *Volver a grabar.*
*   **Comando**: `keif status`.
*   **Visual**: ¡Keif ha evolucionado a **Architect**! (O Hacker, si prefieres).
*   **Narración**: "If you write clean code, he becomes an Architect."

### Escena 5: El Peligro (3:30 - 4:15)
*   **Narración**: "But there is one thing you must never do..."
*   **Acción**: Escribe `git push --force`.
*   **Nota**: Si el hook falla en Windows, ejecutaremos manualmente `keif force-push` para la demo.
*   **Comando**: `keif force-push`.
*   **Visual**: Keif se asusta, pierde vida, y te regaña.
*   **Narración**: "Force Pushing terrifies Keif. Don't be that person."

### Escena 6: Conclusión (4:15 - 5:00)
*   **Acción**: `keif pet` (Acariciar).
*   **Resultado**: Keif se pone feliz.
*   **Narración**: "Keif-Gotchi. Make your code count. Available now."
*   **Pantalla Final**: Link al repo.

---

## 🧰 Herramientas Necesarias
Crearé un archivo `src/demo_utils.ts` para ayudarte a:
1.  Resetear el estado: `node --loader ts-node/esm src/demo_utils.ts reset`
2.  Forzar la evolución: `node --loader ts-node/esm src/demo_utils.ts evolve <type>`
