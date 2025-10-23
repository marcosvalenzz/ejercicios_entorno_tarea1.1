//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba de acceso.//
const prompt = require('prompt-sync')();
let estudios=prompt(`Tienes titulo de bachiller? (si o no):`);
if (estudios==`si`){
    console.log(`Puedes entrar al grado superior`);
    }else{
        console.log (`Tendrá que hacer la prueba de acceso para acceder`);
    }
