// Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más
// IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA.
// Escribe también la versión con for en otra función y comprueba que las dos den el mismo
// resultado.
// Ejemplo de ejecución:
// [prompt] ¿Cuántos productos? 3
// [prompt] Precio 1: 10000
// [prompt] Precio 2: 25000
// [prompt] Precio 3: 4200
// Sin IVA: 10000, 25000, 4200
// Con IVA: 11900, 29750, 4998
// Total con IVA: $46648
// Funciones sugeridas:
// • calcularConIva(precio): retorna el precio de un solo producto con IVA.
// • aplicarIvaConMap(precios) y aplicarIvaConFor(precios): retornan el array
// nuevo.
// • calcularTotal(numeros): la del ejercicio 4.

//entrada: recibo todos los precios base
//proceso: tengo mi array base, itero sobre mi arraybase con map y for llamando la funcion calcular con iva 
//salida:

const calcularConIva = (precio) => { //recibe un precio, aplica iva y retorna
    return (precio*19/100)
}

const aplicarIvaConMap = (precios) => { //usando map
    let arrayConMap = precios.map((precio) => precio + calcularConIva(precio))
    return arrayConMap
}

const aplicarIvaConFor = (precios) => { //usando for
    let arrayConFor = []

    for (let i = 0; i < precios.length; i++) {
        arrayConFor.push(precios[i] + calcularConIva(precios[i]))
    }
    return arrayConFor

}

const calcularTotal = (numeros) => {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma
}

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos"))

let arrayOirignal = []

for (let i = 1; i <= cantidadProductos; i++) {
    arrayOirignal.push(parseInt(prompt(`Precio ${i}`)))
}

console.log(`Array original sin iva: ${arrayOirignal}`);
console.log(`Array con iva (map) ${aplicarIvaConMap(arrayOirignal)}`);
console.log(`Array con iva (for) ${aplicarIvaConFor(arrayOirignal)}`);

console.log(`Total con iva ${calcularTotal(aplicarIvaConMap(arrayOirignal))}`);

