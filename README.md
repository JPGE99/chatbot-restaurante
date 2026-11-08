# Chatbot Restaurante XYZ

Primera versión de un chatbot basado en reglas y opciones predefinidas. Se ejecuta localmente en la terminal de Node.js; todavía no está conectado a WhatsApp.

## Requisitos

- Node.js instalado
- Visual Studio Code (recomendado)

## Ejecutar

1. Abre esta carpeta en Visual Studio Code.
2. Abre una terminal dentro de la carpeta.
3. Ejecuta:

   ```bash
   npm start
   ```

   También puedes ejecutar directamente:

   ```bash
   node index.js
   ```

## Opciones

- `1` a `5`: opciones del menú principal.
- En el menú de alimentos: `1` hamburguesas, `2` pizzas, `3` bebidas.
- `0`: regresar al menú principal.
- `salir`: cerrar el chatbot.

## Alcance actual

Este prototipo funciona en la terminal y mantiene el menú actual durante la sesión. No utiliza IA, base de datos ni APIs externas. La conexión con WhatsApp se abordará en una etapa posterior.
