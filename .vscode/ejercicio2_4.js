// Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. //
// Es decir, si insertamos un 5, tendremos la suma de 2+4+6+8+10.//
const prompt = require('prompt-sync')();
let n=prompt(`Introduce un número: `);
n=Number(n);
let sigPar=2;
let contador=0;
let suma=0;

while (contador<n){

    sigPar=sigPar+2;
    contador++;
    suma+=sigPar;
}
console.log(`La suma de los ${n} números pares es = ${suma}`);

