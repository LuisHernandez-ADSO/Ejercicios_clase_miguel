// Leer 10 números. Por cada número mostrar su cubo y su cuarta parte. Al terminar, mostrar la
// suma de todos los cubos.
// Ejemplo de ejecución
// [prompt] Número 1: 2
// Número: 2 | Cubo: 8 | Cuarta parte: 0.5
// [prompt] Número 2: 8
// Número: 8 | Cubo: 512 | Cuarta parte: 2
// ... (8 números más)
// Suma de los cubos: (según los 10 números)
// Funciones sugeridas
// • calcularCubo(numero): retorna el número elevado al cubo.
// • calcularCuartaParte(numero): retorna la cuarta parte del número.

//entrada: 10 numeros
//proceso: calcular el cubo y la cuarta parte en base al numero
//salida el numero, su valor al cubo y su valor de la cuarta parte


const numeroCubo = (numero) => {
    return numero * numero * numero
}

const numeroCuartaParte = (numero) => {
    return numero / 4
}

for (let i = 1; i < 11; i++) {
    let numero = parseInt(prompt(`Numero ${i}`))
    console.log(`Numero ${numero} | Cubo: ${numeroCubo(numero)} | Cuarta parte: ${numeroCuartaParte(numero)}`);
}
