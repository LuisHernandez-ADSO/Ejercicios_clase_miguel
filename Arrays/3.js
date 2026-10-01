// Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el del
// medio. Si N es par hay dos del medio: mostrar ambos.
// Ejemplo de ejecución:
// [prompt] ¿Cuántos números? 5
// [prompt] Número 1: 8
// [prompt] Número 2: 3
// [prompt] Número 3: 9
// [prompt] Número 4: 1
// [prompt] Número 5: 7
// Primero: 8
// Último: 7
// Del medio: 9
// (Con N = 4 y los datos 10, 20, 30, 40, la última línea sería: Del medio: 20 y 30)
// Funciones sugeridas:
// • leerNumeros(cantidad): retorna el array con los números leídos.
// • obtenerUltimo(numeros): retorna el último elemento sin importar el tamaño del array.
// • mostrarMedio(numeros): imprime el elemento o los dos elementos del medio.

//entrada= n numeros (minimo 1, while)
//proceso = comparar
//salida = primer elemento, ultimo, medio (si impar ambos)
//limite = 

const leerNumeros = (cantidad) => {
    let numeros = []
    for (let i = 1; i <= cantidad; i++) {
        const numero = parseInt(prompt(`Numero ${i}:`))
        numeros.push(numero)
    }
    return numeros
}

const obtenerUltimo = (numeros) => {
    return numeros[numeros.length - 1]
}

const mostrarMedio = (numeros) => {
    let tamaño = (numeros.length)/2

    if (tamaño%2 == 0) { //caso si es par
        console.log(`Del medio ${numeros[tamaño-1]} y ${numeros[tamaño]}`);
    } else {
        tamaño = parseInt(tamaño)
        console.log(tamaño);
        
        console.log(`Del medio ${numeros[tamaño]}`);

    }

    // 1 2 3 4 //si par mostrar mitad y mitad -1
    // 1 2 3 4 5// si impar truncar
}


const cantidadNum = parseInt(prompt(`Ingrese la cantidad de numeros`))

let numeros = []
numeros = leerNumeros(cantidadNum)

const ultimoNumero = obtenerUltimo(numeros)


console.log(`Primer elemento: ${numeros[0]}`);
console.log(`Ultimo elemento: ${ultimoNumero}`);

mostrarMedio(numeros)