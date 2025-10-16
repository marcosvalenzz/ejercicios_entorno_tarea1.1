//Lee desde entrada dos variables numéricas A y B.// 
//Con ellas se pide realizar un algoritmo que intercambie los valores de ambas variables y muestre cuánto valen al final las dos variables.//
let prompt= require("prompt-sync")();
    let a = prompt("Introduce a:");
    a=Number(a);
    let b= prompt ("Introduce b:");
    b=Number(b);
    let aux=a;
    a=b;
    b=aux;
    console.log(`El valor de a=${a} y b=${b}`);


