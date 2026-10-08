// Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones
// validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no
// cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más
// frecuente.
// Ejemplo de ejecución:
// [prompt] Calificación 1: 5
// [prompt] Calificación 2: 4
// (...se piden las 10. Datos completos: 5, 4, 5, 3, 5, 4, 2, 5, 4, 5)
// Estrellas 1: (0)
// Estrellas 2: * (1)
// Estrellas 3: * (1)       array de 5 contadores
// Estrellas 4: *** (3)
// Estrellas 5: ***** (5)
// Más frecuente: 5 estrellas
// Funciones sugeridas:
// • contarPorEstrellas(calificaciones): retorna un array de 5 contadores.
// • repetirCaracter(caracter, veces): retorna un texto con el carácter repetido.
// • buscarPosicionMayor(numeros): la del ejercicio 5.

//entrada: 10 calificaciones (1 a 5)
//proceso:
//salida: el grafico de *

const contarPorEstrellas = (calificaciones) => {
    let contadores = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < calificaciones.length; i++) {
        let valor = calificaciones[i]
        contadores[valor]++
    }
    return contadores
}

const repetirCaracter = (caracter, veces) => {
    //si tengo 4 veces necesito ****, mostrar un log veces veces en una sola linea?
    //si itero imprimo linea por linea
    let concatenar = ""
    for (let i = 0; i < veces; i++) {
        concatenar += caracter
    }
    return concatenar
}

//ejercicio 5
const buscarPosicionMayor = (numeros) => {
    let mayor = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = i  //posicion, no valor
        }
    }
    return mayor
}

let calificaciones = []

for (let i = 1; i <= 10; i++) {
    let calificacion = parseInt(prompt(`Ingrese la calificacion ${i}`))
    calificaciones.push(calificacion)
}

let cantidadEstrellas = contarPorEstrellas(calificaciones)
console.log(cantidadEstrellas);


for (let i = 0; i < cantidadEstrellas.length; i++) {
    
    let veces = cantidadEstrellas[i]

    let letras = repetirCaracter("*", veces)
        console.log(`Estrellas ${i}: ${letras} (${veces})`);

}


console.log(`La calificacion mas frecuente: ${buscarPosicionMayor(cantidadEstrellas)} estrellas`);
