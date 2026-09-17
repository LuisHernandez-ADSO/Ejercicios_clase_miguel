// En una escuela la matrícula de los 38 alumnos se determina según el número de materias
// que cursan. El costo de todas las materias es el mismo. Además, se ha establecido un
// programa para estimular a los alumnos, el cual consiste en lo siguiente: si el promedio
// obtenido por un alumno en el último periodo es mayor o igual que 9, se le hará un descuento
// del 30% sobre la matrícula y no se le cobrara IVA; si el promedio obtenido es menor que 9
// deberá pagar la matrícula completa, la cual incluye el 10% de IVA. Obtener cuanto debe
// pagar cada alumno.

//38 alumnos
//promedio
//cantidad materias

//mismo costo de materias
//promedio >= 9 descuento del 30% y no iva
//otro caso paga completo con iva (10%)

//total a pagar por alumno

const costoMateria = parseInt(prompt("Ingrese el costo de cada materia"))

let cantidadMaterias = 0
let totalBase = 0
let promedio = 0
let totalNeto = 0

for (i = 1; i <= 38; i++) {
    cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias a matricular"))
    totalBase = cantidadMaterias * costoMateria;

    promedio = parseInt(prompt("Ingrese el promedio del alumno"))

    if (promedio >= 9) {
        totalNeto = totalBase - (totalBase * 30 / 100)
    } else {
        totalNeto = totalBase + (totalBase * 10 / 100)
    }
    console.log(`El alumno con promedio ${promedio} tiene que pagar un total de ${totalNeto}`);


}