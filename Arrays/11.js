// Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que
// apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido
// includes, indexOf y Set.
// Ejemplo de ejecución:
// [prompt] Número 1: 3
// (...se piden los 10. Datos completos: 3, 7, 3, 1, 7, 7, 9, 1, 2, 3)
// Sin repetidos: 3, 7, 1, 9, 2
// Se eliminaron 5 repetidos
// Funciones sugeridas:
// • eliminarRepetidos(numeros): retorna el array nuevo.
// • existeEnLista(lista, valor): la del ejercicio 6.

//entrada: array de 10 elementos
//proceso: recibo un elemento, miro si esta en mi nuevo array, si esta push sino continuo
//salida: nuevo array

const existeEnLista = (lista, valor) => {
    let existe = false
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == valor) existe = true
    }
    return existe
}
let cantidadEliminado = 0

const eliminarRepetidos = (numeros) => {
    let arrayLimpio = []

    for (let i = 0; i < numeros.length; i++) {

        if (!existeEnLista(arrayLimpio, numeros[i])) {
            arrayLimpio.push(numeros[i])
        } else cantidadEliminado++

    }
    return arrayLimpio
}

let arrayOriginal = []

for (let i = 1; i <= 10; i++) {
    arrayOriginal.push(parseInt(prompt(`Numero ${i}`)))
}

console.log(`Sin repetidos: ${eliminarRepetidos(arrayOriginal)}`);
console.log(`Se eliminaron ${cantidadEliminado} repetidos`);
