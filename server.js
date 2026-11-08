const express = require("express");

const conversation = require("./src/conversation");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = 3000;

//Esta funcion es la que se encarga de iniciar el servidor y escuchar las peticiones del cliente, ademas de procesar los mensajes recibidos por el chatbot.
const sessions = new Map();

// Ruta para obtener el menú principal del chatbot.
app.get("/menu", (req, res) => {
    const session = conversation.createSession();
    const response = conversation.processMessage("0", session);

    res.json(response);
});
// Ruta para procesar los mensajes del chatbot.
app.post("/chat", (req, res) => {
    const { message, clientId } = req.body;

    if (!clientId || typeof message !== "string") {
        return res.status(400).json({
            error: "Debes proporcionar un clientId y un mensaje válido."
        });
    }

    if (!sessions.has(clientId)) {
        sessions.set(clientId, conversation.createSession());
    }

    const session = sessions.get(clientId);

    const response = conversation.processMessage(message, session);

    res.json(response);
});



app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});