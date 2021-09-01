let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Instanciar el objeto XMLHttpRequest que nos ayuda a realizar las peticiones

// La sieguiente función se encarga de realizar peticiones a una API
const fetchData = (url_api, callback) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true); // Obtener la api, con true se activa el asincronismo.
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) // Operador ternario, condicional.
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api))
            }
        });
    xhttp.send(); // Se envia la solicitud
    });
}

module.exports = fetchData;