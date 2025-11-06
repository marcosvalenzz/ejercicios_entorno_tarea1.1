//Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos.//
const prompt = require('prompt-sync')();

let n = Number(prompt("Introduce un número (0 para terminar): "));

if (n === 0) {
    console.log("No se introdujeron números.");
} else {
    let max = n;
    let min = n;
    let contador = 1;
    let acumulador = n;

    while (true) {
        n = Number(prompt("Introduce un número (0 para terminar): "));
        if (n === 0) break;

        if (n > max) max = n;
        if (n < min) min = n;

        contador++;
        acumulador += n;
    }

    console.log(`Máximo = ${max}`);
    console.log(`Mínimo = ${min}`);
    console.log(`Media = ${acumulador / contador}`);
}

