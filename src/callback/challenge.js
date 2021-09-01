let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // Instanciar el objeto XMLHttpRequest que nos ayuda a realizar las peticiones
let API = "https://rickandmortyapi.com/api/character/";

// La sieguiente función se encarga de realizar peticiones a una API
function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); // Obtener la api, con true se activa el asincronismo.
    xhttp.onreadystatechange = function(event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) { //200 todo esta bien, 500 error, 400 no encontrado
                callback(null, JSON.parse(xhttp.responseText)); 
            } else {
                const error = new Error('Error' + url_api); // Error de la api.
                return callback(error, null);
            }
        }
    }
  xhttp.send(); // Se envia la solicitud
}

// Se realizarán tres peticiones a la API
// Es recomendado no realizar más de 3 peticiones a la API en un tiempo de 1 segundo.
fetchData(API, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    });
});

/*
671
Rick Sanchez   
Dimension C-137
*/