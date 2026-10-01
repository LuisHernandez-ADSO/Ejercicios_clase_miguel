// Qué practica: Array vacío, push, recorrido y la diferencia entre el índice y la posición que ve el
// usuario.
// Enunciado:
// Pedir cuántos productos se van a comprar, leer el nombre de cada uno y guardarlos en un
// array. Al final mostrar la lista numerada desde 1 y el total de productos.
// Ejemplo de ejecución:
// [prompt] ¿Cuántos productos? 3
// [prompt] Producto 1: arepas
// [prompt] Producto 2: queso
// [prompt] Producto 3: café
// Lista del mercado:
// 1. arepas
// 2. queso
// 3. café
// Total: 3 productos
// Funciones sugeridas:
// • leerProductos(cantidad): pide los nombres y retorna el array.
// • mostrarLista(productos): imprime la lista numerada y el total.

//entrada: cantidad productos, nombre de cada producto
//proceso: guardar nombre del producto en array, 
//salida: mostrar la lista (Desde 1), mostrar total de productos


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
    const tamanio = productos.length
    for (let i = 0; i < tamanio; i++) {
        console.log(`${i + 1}. ${productos[i]}`);
    }
    console.log(`Total de productos: ${tamanio}`);


}


const cantidadProductos = prompt("Ingresa la cantidad de productos")

const productos = leerProductos(cantidadProductos)

mostrarLista(productos)