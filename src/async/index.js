const doSomethingAsync = async () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Test error'))
    });
}
// El tiempo de 3000 permite que la funcion se ejecute de manera asincrona.
const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.log(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
