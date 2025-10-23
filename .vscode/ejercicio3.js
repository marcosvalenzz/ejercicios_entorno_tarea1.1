let prompt = require('prompt-sync')();
let flagFormatoOk = true;

let a = Number(prompt('Introduzca a:'));
if (Number.isNaN(a)){
    console.log(`a = ${a} no es un número`);
    flagFormatoOk = false;
}

let b = Number(prompt('Introduzca b:'));
if (Number.isNaN(b)){
    console.log(`b = ${b} no es un número`);
    flagFormatoOk = false;
}

if(flagFormatoOk){
    if(a > b){
        console.log(`El mayor es a = ${a}`);
    } else if(a === b){
        console.log(`a = ${a} y b = ${b} son iguales`);
    } else {
        console.log(`El mayor es b = ${b}`);
    }
} else {
    console.log('Número/s no operables!');
}

