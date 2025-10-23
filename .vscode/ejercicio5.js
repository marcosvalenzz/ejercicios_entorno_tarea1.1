//Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor que 0, se deberá calcular su cuadrado y la raíz cuadrada del mismo, visualizando el número que ha tecleado el usuario y su resultado («Del número X, su potencia es X y su raíz X» ).// 
//Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.//
const prompt=require (`prompt-sync`)();
let flagFormatoOk = true;
let numero = Number(prompt('Introduzca un número: '));
if (Number.isNaN(numero)){
    console.log(`El valor introducido: ${numero} no es un número`);
    flagFormatoOk = false;
}

if(flagFormatoOk){
    if(numero <= 0){
        console.log('Error: El número es 0 o menor que 0. Saliendo del programa.');
    } else {
        let cuadrado = numero ** 2;
        let raiz = numero ** 0.5;
        console.log(`Del número ${numero}, su potencia es ${cuadrado} y su raíz ${raiz}`);
    }
} else {
    console.log('Número no operable!');
} 