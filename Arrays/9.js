// Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden
// inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que
// el original quedó igual.
// Ejemplo de ejecución:
// [prompt] ¿Cuántas palabras? 4
// [prompt] Palabra 1: sol
// [prompt] Palabra 2: luna
// [prompt] Palabra 3: mar
// [prompt] Palabra 4: río
// Original: sol, luna, mar, río
// Invertido: río, mar, luna, sol
// Funciones sugeridas:
// • invertir(lista): retorna el array nuevo invertido.
// • unirConComas(lista): la del ejercicio 2.

// no -1

//entrada: n cantidad de palabras

const invertir = (lista) => {
    let aux = []
    for (let i = lista.length - 1; i >= 0; i--) {
        aux.push(lista[i])
    }
    return aux
}

const unirConComas = (lista) => {
    let texto = ""
    for (let i = 0; i < lista.length; i++) {
        if (i == 0) {
            texto += lista[i]
        } else {
            texto += ", " + lista[i]
        }
    }
    return texto
}

let cantidadPalabras = parseInt(prompt("Ingrese la cantidad de palabras"))
let arrayOirignal = []

for (let i = 1; i <= cantidadPalabras; i++) {
    arrayOirignal.push(prompt(`Ingrese la palabra ${i}:`))
}
let arrayInvertido = invertir(arrayOirignal)

console.log(`Original: ${unirConComas(arrayOirignal)}`);
console.log(`Invertido: ${unirConComas(arrayInvertido)}`);

