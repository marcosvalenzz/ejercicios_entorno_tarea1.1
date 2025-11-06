//8. Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.//
const prompt = require('prompt-sync')();

let n = Number(prompt("Introduce un número (0 para terminar): "));

if (isNaN(n) || n <= 0) {
    console.log("No es válido");
} else {
    console.log("Es válido");

    for (let i = 0; i < n; i++) {
        let fila = "";
        for (let j = 0; j < n; j++) {
            fila += "*";
        }
        console.log(fila); 
    }
}
