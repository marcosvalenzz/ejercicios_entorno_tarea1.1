//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual. Diseñar un algoritmo para este propósito.//
const prompt=require (`prompt-sync`)();
let flagFormatoOk = true;

let numeroNinos = Number(prompt('Introduzca el número de niños: '));
if (Number.isNaN(numeroNinos)){
    console.log(`El valor introducido: ${numeroNinos} no es un número`);
    flagFormatoOk = false;
}

let numeroNinas = Number(prompt('Introduzca el número de niñas: '));
if (Number.isNaN(numeroNinas)){
    console.log(`El valor introducido: ${numeroNinas} no es un número`);
    flagFormatoOk = false;
}

if(flagFormatoOk){
    let totalAlumnos = numeroNinos + numeroNinas;
    if(totalAlumnos === 0){
        console.log('No hay alumnos en el curso.');
    } else {
        let porcentajeNinos = (numeroNinos / totalAlumnos) * 100;
        let porcentajeNinas = (numeroNinas / totalAlumnos) * 100;
        console.log(`Porcentaje de niños: ${porcentajeNinos.toFixed(2)}%`);
        console.log(`Porcentaje de niñas: ${porcentajeNinas.toFixed(2)}%`);
    }
} else {
    console.log('Número/s no operables!');
}
