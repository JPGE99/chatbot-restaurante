
// Obtenemos los elementos de la interfaz HTML.
const chatForm = document.getElementById("chat-form");
const messageInput = document.getElementById("message-input");
const chatMessages = document.getElementById("chat-messages");

// Identificador temporal para esta conversación.
const clientId = crypto.randomUUID();


function addMessage(message, sender) {
    const messageElement = document.createElement("p");

    messageElement.textContent = message;
    messageElement.classList.add("message", sender);

    chatMessages.appendChild(messageElement);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}



chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }
addMessage(message, "user");
   
try {
    const response = await fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            clientId: clientId,
            message: message
        })
    });

    if (!response.ok) {
        throw new Error("Error al consultar el chatbot.");
    }

    const data = await response.json();

        addMessage(data.message, "bot");
    messageInput.value = "";

} catch (error) {
    console.error("Error de comunicación:", error);
}


});

// Obtiene el menú principal desde el servidor.
async function cargarMenuPrincipal() {
    try {
        const response = await fetch("/menu");
        const data = await response.json();

        addMessage(data.message, "bot");

    } catch (error) {
        console.error("Error al cargar el menú:", error);
    }
}

cargarMenuPrincipal();