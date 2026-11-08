/*conversation.js se encarga de gestionar la conversacion con el usuario */

const menus = require ("./menus");

//procesar los mensajes recibidos por el chatbot 

function createSession() {
    return {
        contactStep: null,
        contactName: "",
        contactMessage: "",
    };
}

function processMessage(message, session) {    
    const option = message.trim();

if (session.contactStep !== null && option === "0") {
        session.contactStep = null;
        session.contactName = "";
        session.contactMessage = "";

        return {
        message: "Solicitud de contacto cancelada.\n" + menus.getMainMenu()
        };
    }

if (session.contactStep === "name" && option !== "0") {
    
        if (option === "") {
            return {
                message: "Por favor, ingresa tu nombre."
            };
        }

        session.contactName = option;
        session.contactStep = "message";

        return {
            message: `Mucho gusto, ${session.contactName}. ¿En qué podemos ayudarte?`
        };
    }

if (session.contactStep === "message") {

    if (option === "") {
        return {
            message: "Por favor, describe brevemente tu consulta."
        };
    }

    session.contactMessage = option;

    const response = {
        message: `Solicitud registrada.\nNombre: ${session.contactName}\nConsulta: ${session.contactMessage}\n\nGracias por comunicarte con nosotros.\n${menus.getContactInfo()}\n${menus.getMainMenu()}`
    };

    session.contactStep = null;
    session.contactName = "";
    session.contactMessage = "";

    return response;
}

    
    

    // Comprobamos si la opción es "0" para volver al menú principal.
    if (option === "0") {
        return {
            message: menus.getMainMenu()
        };
    }

    // Comprobamos si la opción es "1" para mostrar el menú de comida del restaurante.
    if(option ==="1"){
    const foodMenu = menus.getFoodMenu();

    return{
        message: foodMenu.message,
        image: foodMenu.image
    };
    }

    // Comprobamos si la opción es "2" para mostrar la información de ubicación y horarios del restaurante.
    if(option === "2") {
        return {
            message: menus.getLocationInfo()
        };
    }

    // Comprobamos si la opción es "3" para mostrar las promociones del restaurante.
    if(option === "3") {
        return {
            message: menus.getPromotions()
        };
    }

    // Comprobamos si la opción es "4" para mostrar la información de contacto del restaurante.
    if(option === "4") {
        session.contactStep = "name";

        return {
            message: "Para contactar a un empleado, primeoro ingresa tu nombre. Si deseas cancelar la solicitud de contacto, escribe 0 en cualquier momento."
        };
    }

    // Comprobamos si la opción es "5" para cerrar el chatbot.
    if(option === "5") {
        return {
            message: "Cerrando el chatbot. ¡Hasta luego!"
        };
    }


   return {
    message: "Opción no válida. Por favor, ingresa un número del 0 al 5."
};
}
    




module.exports = {
    createSession,
    processMessage
};