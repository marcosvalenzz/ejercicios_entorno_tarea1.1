
//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” (para que un número sea par, se debe dividir entre dos y que su resto sea 0).//
const prompt = require('prompt-sync')();

let numero = Number(prompt('Introduzca un número: '));

if (Number.isNaN(numero)) {
    console.log('El valor introducido no es válido');
} else if (numero === 0) {
    console.log('El número no es par ni impar');
} else if (numero % 2 === 0) {
    console.log(`El número ${numero} es par`);
} else {
    console.log(`El número ${numero} es impar`);
}

