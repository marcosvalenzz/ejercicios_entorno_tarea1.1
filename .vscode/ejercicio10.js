//Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error. //
// Si es válida escribir la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”.//
// El año debe ser mayor que 0.//
const prompt = require('prompt-sync')();
let flagFormatoOk = true;
let n1 = Number(prompt(`Escribe el día: `));
if (Number.isNaN(n1)) {
    console.log(`El valor introducido: ${n1} no es un número`);
    flagFormatoOk = false;
}
let n2 = Number(prompt(`Escribe el mes: `));
if (Number.isNaN(n2)) {
    console.log(`El valor introducido: ${n2} no es un número`);
    flagFormatoOk = false;
}
let n3 = Number(prompt(`Escribe el año: `));
if (Number.isNaN(n3)) {
    console.log(`El valor introducido: ${n3} no es un número`);
    flagFormatoOk = false;
}
if (n3 <= 0) {
    console.log(`El año no puede ser igual o menor a 0`);
    flagFormatoOk = false;
}
if (flagFormatoOk) {
    console.log(`La fecha introducida es: ${n1} de ${n2} del ${n3}`);
}
