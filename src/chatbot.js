
/*chatbot.js se encarga de iniciar el chatbot y gestionar la conversacion del usuario  */
/*
Llamamos al archivo menu.js para poder usar la funcion getMainMenu y mostrar el menu principal del restaurante.
adicionalmente llamamos al modulo readline para leer la entrada del usuario desde la consola.
*/
const readline = require("node:readline");
const conversation = require("./conversation");



//Variables para almacenar temporalmente los datos del cliente.


/*
Definimos la funcion startChatbot, esta funcion es la que se encarga de iniciar el chatbot y mostrar el menu principal del restaurante.
posteriormente se encarga de leer la entrada del usuario y mostrar un mensaje de confirmacion con la opcion seleccionada por medio de 
la consola.
*/
function startChatbot() {

    // Creamos un objeto session para almacenar el estado de la conversación y los datos del cliente.
    const session = conversation.createSession();


    console.log("== Chatbot Restaurante XYZ ==");
    console.log(conversation.processMessage("0", session).message);

    // Creamos una interfaz de lectura para leer la entrada del usuario desde la consola.
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Ingrese un numero del 0 al  5 para consultar las opciones: "

        
    });
    // Mostramos el prompt para que el usuario ingrese su opcion.
    rl.prompt();
    rl.on("line", (input) => {
        const option = input.trim();

        if (session.contactStep !== null) {

    const response = conversation.processMessage(option, session);

    console.log(response.message);

    if (session.contactStep === "name") {
        rl.setPrompt("Ingresa tu nombre: ");
    } else if (session.contactStep === "message") {
        rl.setPrompt("Describe tu consulta: ");
    } else {
        rl.setPrompt("Ingrese su opción: ");
    }

    rl.prompt();
    return;
}

        switch (option) {
            case "0":
                console.log(conversation.processMessage(option, session).message);
                break;
            case "1": {
                const foodResponse = conversation.processMessage(option, session);
                console.log(foodResponse.message);
                console.log(foodResponse.image);
                break;
                    }       
            case "2":
                 const response = conversation.processMessage(option, session);
                console.log(response.message);
                break;
            case "3":
                console.log(conversation.processMessage(option, session).message);
                break; 
            case "4":
                console.log(conversation.processMessage(option, session).message);
                rl.setPrompt("Ingresa tu nombre: ");
                break;
           case "5":
                console.log(conversation.processMessage(option, session).message);
                rl.close();
                return;
           default:
                console.log(conversation.processMessage(option, session).message);
                break;
        }
        rl.prompt();
    });


    // Cuando el usuario cierra la interfaz de lectura, mostramos un mensaje de despedida.
    rl.on("close",()=>{
        console.log("chatbot finalizado.");
        process.exit(0);
    });
}


/*
Exportamos la funcion startChatbot para poder usarla en otros archivos.
*/ 
module.exports = {
    startChatbot
};


