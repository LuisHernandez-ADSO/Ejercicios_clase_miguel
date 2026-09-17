// Unas fábricas han sido sometidas a un programa de control de contaminación para lo cual
// se efectúa una revisión de los puntos IMECA generados por la fábrica. El programa de control
// de contaminación consiste en medir los puntos IMECA que emite la fábrica en cinco días de
// una semana y si el promedio es superior a los 170 puntos entonces tendrá la sanción de
// parar su producción por una semana y una multa del 50% de las ganancias diarias cuando
// no se detiene la producción. Si el promedio obtenido de puntos IMECA es de 170 o menor
// entonces no tendrá ni sanción ni multa. Los dueños de las fábricas desean saber cuánto
// dinero perderá después de ser sometido a la revisión.

//puntos en 5 dias, promedio

//promedio > 170 para produccion una semana y multa 50% ganancias
//promedio <= 170 no pasa nada 

//perdida

//inicializo las variables acumuladoras 
let puntos = 0 //almacena sumatoria de puntos imeca
let contador = 0 //almacena la cantidad de valores imeca

for (let i = 1; i <= 5; i++) { //ciclo for para iterar por los 5 dias

    while (true) { //ciclo while para iterar hasta tener todos los puntos de un determinado dia

        let imeca = parseInt(prompt(`Ingrese los puntos del dia ${i}, con 0 pasamos al siguiente dia`))
        if (imeca == 0) break;

        puntos += imeca
        contador++
    }
}

let promedio = puntos / contador;
const gananciasDiarias = parseFloat(prompt("Ingrese las ganancias diarias cuando no se detiene la produccion"))

if (promedio > 170) {
    console.log(`Sancion de parar la producción una semana`);
    let multa = gananciasDiarias * 50 / 100
    console.log(`La multa es de: ${multa}`);
} else {
    console.log(`No hay ni sancion ni multa`);

}


