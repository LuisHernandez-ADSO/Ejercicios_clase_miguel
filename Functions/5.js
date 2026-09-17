// Leer 20 números e imprimir cuántos son positivos, cuántos negativos y cuántos son cero.
// Ejemplo de ejecución
// (probando con 5 números)
// [prompt] Número 1: 4
// [prompt] Número 2: -2
// [prompt] Número 3: 0
// [prompt] Número 4: 9
// [prompt] Número 5: -7
// Positivos: 2
// Negativos: 2
// Ceros: 1
// Funciones sugeridas
// • clasificarNumero(numero): retorna el texto "positivo", "negativo" o "cero".
// • contarNumeros(cantidad): lee los números, usa clasificarNumero y muestra los tres
// conteos.

//etrada: 20 numeros
//proceso: evaluar si son positivos, negativos y ceros
//salida imprimir cuantos valores son positivos, negativos y ceros

const clasificarNumero = (num) => {
    if (num < 0) {
        return "negativo"
    } else if (num > 0) {
        return "positivo"
    }
}

const contarNumeros = (num) => {
    let clasificacion = clasificarNumero(num);
    if (clasificacion == "negativo") {
        negativos++
    } else if (clasificacion == "positivo") {
        positivos++
    } else {
        ceros++
    }
}

let positivos = 0
let negativos = 0
let ceros = 0

for (let i = 1; i <= 20; i++) {
    let num = parseInt(prompt(`Numero ${i}`))
    contarNumeros(num)

}

console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Ceros: ${ceros}`);
