/*
Primero creamos una funcion que nos devuele el menu principal, esta funcion se llama 
getMainMenu y nos devuele un string con el menu principal del restaurante, en este caso el restaurante se llama Restaurante XYZ
(Restaurante ficticio para fines de este proyecto)
*/
function getMainMenu() {
    return ` 
    ¡Hola! Bienvenido al Restaurante XYZ. 
    ¿En qué podemos ayudarte?

    0. Escribe 0 para volver a mostrar el menu.
    1. Consultar menú
    2. Horarios y ubicación
    3. Promociones
    4. Contactar a un empleado
    5.Escribe 5 para cerrar el chatbot.

    Escribe el numero de la opción que deseas consultar.

    `
}

/**
 * Devuelve el menú de comida del restaurante.
 * @returns {Object} Un objeto con el mensaje y la imagen del menú.
 */
function getFoodMenu() {

    return {
        message: "Aquí está nuestro menú de comida:",
        image: "../assets/menu-restaurante.jpg",
    };

}


/*Obtenemos la informacion de horarios y ubicacion del restaurante*/ 

function getLocationInfo() {
    return `
    📍 Información del Restaurante XYZ

    🕒 Horarios de atención:
    Lunes a viernes: 9:00 AM - 10:00 PM
    Sábado y domingo: 10:00 AM - 11:00 PM

    📌 Ubicación:
    Calle Principal #123
    Culiacán, Sinaloa.

    ¡Te esperamos!
    `;
}



/*Obtenemos las promociones disponibles del restaurante */

function getPromotions() {
     return `
    🎉 ¡Promociones del Restaurante XYZ!

    🍔 PROMOCIÓN 1:
    Compra 2 hamburguesas y recibe una
    orden de papas gratis.

    🍕 PROMOCIÓN 2:
    Martes de pizza: 2 pizzas medianas
    por $199.

    🥤 PROMOCIÓN 3:
    En la compra de cualquier combo,
    recibe un refresco gratis.

    📅 Promociones sujetas a disponibilidad.

    ¡Aprovecha nuestras promociones!
    `;
} 


/*
Obtenemos los medios de contacto
del Restaurante XYZ.
*/
function getContactInfo() {
    return `
    📞 Medios de contacto:

    Teléfono: 667 123 4567
    WhatsApp: 667 123 4567
    Correo: contacto@restaurantexyz.com

    Nuestro personal estará encantado de ayudarte.
    `;
}



/*
Exportamos la o las funciones
*/
module.exports = {
    getMainMenu,
    getFoodMenu,
    getLocationInfo,
    getPromotions,
    getContactInfo
};

