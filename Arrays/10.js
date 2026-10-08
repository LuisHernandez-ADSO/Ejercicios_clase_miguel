// Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares,
// en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar
// "(ninguno)".
// Ejemplo de ejecución:
// [prompt] Número 1: 12
// (...se piden los 8. Datos completos: 12, 7, 4, 9, 20, 15, 3, 8)
// Pares (4): 12, 4, 20, 8
// Impares (4): 7, 9, 15, 3
// Funciones sugeridas:
// • esPar(numero): la de la guía de ciclos. ni idea
// • filtrarPares(numeros) y filtrarImpares(numeros): retornan los arrays nuevos.

//entrada: 8 numeros al azar
//proceso: identificar los pares e impares, clasificarlo en su arreglo, si uno esta vacio imprimir ninguno

const filtrarPares = (numeros) => { //retorno array
    let arrayPares = []

    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) arrayPares.push(numeros[i])

    }

    if (arrayPares.length == 0) return "ninguno"
    else return arrayPares;
}


const filtrarImPares = (numeros) => { //retorno array
    let arrayImPares = []

    for (let i = 0; i < numeros.length; i++) {

        if (esPar(numeros[i])) {
            continue;
        } else {
            arrayImPares.push(numeros[i])
        }

    }
    if (arrayImPares.length == 0) return "ninguno"
    else return arrayImPares;
}

const esPar = (numero) => {
    if (numero % 2 == 0) return true
    else return false
}


let arrayOriginal = []
for (let i = 1; i <= 8; i++) {
    arrayOriginal.push(parseInt(prompt(`Numero ${i}`)))
}

let par = filtrarPares(arrayOriginal)
let impar = filtrarImPares(arrayOriginal)

//si alguna variable es "ninguno el lenght da 7, longitud de "ninguno"
console.log(`Pares ${par.length}: ${par}`);
console.log(`Impares ${impar.length}: ${imparpar}`);


