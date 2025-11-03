const prompt = require('prompt-sync')();

let n = 0;
let contador = 0;
let acumulador = 0;

do {
    n = Number(prompt("Introduce un número (termina con -1): "));

    if (n === -1) {
        if (contador === 0) {
            console.log("No se introdujeron números válidos.");
        } else {
            let media = acumulador / contador;
            console.log(`Media aritmética = ${media}`);
        }
    } else if (n >= 0) {
        acumulador += n;
        contador++;
    } else {
        console.log("Valor incorrecto. Solo se permiten números positivos o -1 para terminar.");
    }

} while (n !== -1);


