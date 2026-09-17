// Ejercicio 1. Tabla de multiplicar
// Qué practicas: for con cantidad fija y una función con return llamada dentro del ciclo.
// Enunciado
// Leer un número y mostrar su tabla de multiplicar del 1 al 10. Cada línea debe mostrar el
// multiplicando, el multiplicador y el producto.
// Ejemplo de ejecución
// [prompt] Número: 7
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70
// Funciones sugeridas
// • multiplicar(multiplicando, multiplicador): retorna el producto.
// • mostrarTabla(numero): recorre del 1 al 10 e imprime cada línea usando multiplicar.

//entrada: el multiplicando
//proceso: la multiplicacion del multiplicando con los numeros del 1 al 10
//salida: resultado
 

const multiplicar = (multiplicando, multiplicador) => {
    return multiplicando * multiplicador;
}

const mostrarTabla = (multiplicando) => {
    for (let i = 1; i < 11; i++) {
        console.log(`${multiplicando} X ${i} = ${multiplicar(multiplicando, i)}`);
    }
}

const multiplicando = parseInt(prompt("Ingrese el numero a multiplicar"));

mostrarTabla(multiplicando);