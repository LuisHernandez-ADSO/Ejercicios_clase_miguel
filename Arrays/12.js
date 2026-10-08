// En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio.
// Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N:
// rotar 7 en una fila de 5 es lo mismo que rotar 2.
// Ejemplo de ejecución:
// [prompt] ¿Cuántas personas? 5
// [prompt] Persona 1: Ana
// [prompt] Persona 2: Beto
// [prompt] Persona 3: Caro
// [prompt] Persona 4: Dani
// [prompt] Persona 5: Eli
// [prompt] ¿Cuántas posiciones rotar? 2
// Fila original: Ana, Beto, Caro, Dani, Eli
// Fila rotada: Dani, Eli, Ana, Beto, Caro
// (Con k = 7 el resultado debe ser el mismo)
// Funciones sugeridas:
// • rotarDerecha(lista, k): retorna el array nuevo rotado.

//entrada: array de 5 elementos, el valor de k
//proceso: Desde el ultimo elemento tomo los k elementos, los añado en otro array de primeras y lo que queda despues, si k > n resto k con n y continuo 
//salida: la lista rotada

const rotarDerecha = (lista, k) => { //retorna nuevo array
    let newArray = []

    //trabajar siempre con k menora a n
    if (k > lista.length) {
        k = k - lista.length
    }

    //ya devuelve el orden de los elementos k
    for (let i = lista.length - k; i <= lista.length - 1; i++) {
        newArray.push(lista[i])
    }

    for (let i = 0; i < lista.length - k; i++) {
        newArray.push(lista[i])
    }

    return newArray
}

let n = parseInt(prompt("Ingrese la cantidad de personas"));

let originalArrray = []
for (let i = 1; i <= n; i++) {
    originalArrray.push(prompt(`Persona ${i}`))
}

let k = parseInt(prompt(`Cuantas posiciones vamos a rotar`))

console.log(`Fila original: ${originalArrray}`);

console.log(`Fila rotada: ${rotarDerecha(originalArrray, k)}`);
