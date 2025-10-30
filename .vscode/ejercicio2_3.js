const prompt = require(`prompt-sync`)();
let n= prompt(`Introduzca n: `);
    n=Number(n);
    let contador=1;
    let acumulador=0;
    while (contador<=n){
        console.log(contador);
        acumulador=acumulador+contador;
        contador++;
    }
console.log (`total=${acumulador}`);
