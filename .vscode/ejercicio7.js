//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.
//
const prompt=require (`prompt-sync`)();
let flagFormatoOk = true;

let mes = prompt('Introduzca el mes (en minúsculas): ');
let importe = Number(prompt('Introduzca el importe de la compra: '));
if (Number.isNaN(importe)){
    console.log(`El valor introducido no es un número`);
    flagFormatoOk = false;
}
if(flagFormatoOk){
let preciodescontado=importe*(1-0.15);
if (mes==`octubre`){
    console.log (`Este es el precio con un 15% de descuento:${preciodescontado}`);
}else{
    console.log (`Este es el precio sin descuento:${importe}`)
}
}
