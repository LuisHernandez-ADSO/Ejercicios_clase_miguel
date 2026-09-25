// Leer un número N. Mostrar todos los números primos entre 2 y N, y al final cuántos hay.
// Un número es primo si solo es divisible entre 1 y entre sí mismo. Para saber si n es divisible
// entre d usa n % d === 0.
// Ejemplo de ejecución
// [prompt] Límite: 20
// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// Cantidad de primos: 8
// Funciones sugeridas
// • contarDivisores(numero): retorna cuántos divisores tiene el número.
// • esPrimo(numero): retorna true si el número es primo.

//entrada= un numero N (hasta N)
// salida = obtener todos los numeros primos de 2 hasta N, contar los primos
//salida = mostrar los primos

const contarDivisores = (numero) => {
    let divisores = 0

    for (let d = 1; d <= numero; d++) {
        if (numero % d === 0) {
            divisores++
        }
    }

    return divisores
}

const esPrimo = (numero) => {
    if (numero <= 1) return false
    return contarDivisores(numero) === 2
}

let cantidadPrimos = 0
const n = parseInt(prompt("Ingrese el límite:"))

for (let i = 2; i <= n; i++) {
    if (esPrimo(i)) {
        console.log(i)
        cantidadPrimos++
    }
}

console.log(`Cantidad de primos: ${cantidadPrimos}`)

