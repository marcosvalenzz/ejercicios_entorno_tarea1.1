const prompt=require (`prompt-sync`)();
//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.
//
let flagFormatoOk = true;
let a = Number(prompt('Introduzca el primer número: '));
if (Number.isNaN(a)){
    console.log(`a = ${a} no es un número`);
    flagFormatoOk = false;
}

let b = Number(prompt('Introduzca el segundo número: '));
if (Number.isNaN(b)){
    console.log(`b = ${b} no es un número`);
    flagFormatoOk = false;
}

let c = Number(prompt('Introduzca el tercer número: '));
if (Number.isNaN(c)){
    console.log(`c = ${c} no es un número`);
    flagFormatoOk = false;
}

if(flagFormatoOk){
    if(a<0){
        let producto = a * b * c;
        console.log(`El producto de los tres números es: ${producto}`);
    } else {
        let suma = a + b + c;
        console.log(`La suma de los tres números es: ${suma}`);
    }
} else {
    console.log('Número/s no operables!');
}