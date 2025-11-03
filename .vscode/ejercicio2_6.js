const prompt=require (`prompt-sync`)();
let clave;
let contador=0;

do{
    clave=prompt(`Introduzca clave: `);
    contador++;
}while (clave.toLowerCase() !=`eureka` && contador<3);

if (clave.toLowerCase() ==`eureka`){
    console.log (`Clave correcta`);

}else{
    console.log (`Has agotado los 3 intentos`);
}