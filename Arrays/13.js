// Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser
// idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la
// mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?
// Ejemplo de ejecución:
// (La misma salida del ejercicio 1)

// Funciones sugeridas:
// • mostrarLista(productos): versión con forEach.


//ejercicio 1

const leerProductos = (cantidad) => {
    const productos = []
    for (let i = 1; i <= cantidad; i++) {
        const nombreProducto = prompt(`Ingrese el producto ${i}`)

        productos.push(nombreProducto)
    }
    return productos
}


const mostrarLista = (productos) => {
    console.log(`Lista de mercado:`);

    productos.forEach((nombre, contador) =>
        console.log(`${contador + 1} : ${nombre}`),
    );

}

const cantidadProductos = prompt("Ingresa la cantidad de productos")

const productos = leerProductos(cantidadProductos)

mostrarLista(productos)

console.log(`Total de productos ${cantidadProductos}`);
