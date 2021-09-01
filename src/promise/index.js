const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey, resuelto');
        } else {
            reject('Hey, rechazado');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Error'); // new Error, nos arroja información sobre el error.
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Correr varias promesas al mismo tiempo, o encadenadas.
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of results', response); // Nos devuelve un array con los resultados de las promesas.
    })
    .catch(error => {
        console.log('Error', error);
    });

/*
Hey, resuelto
True
Array of results [ 'Hey, resuelto', 'True' ]
*/