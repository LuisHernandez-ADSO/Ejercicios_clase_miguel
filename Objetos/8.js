// El programa arranca con este inventario:
// let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };
// Se registran ventas: producto y cantidad, hasta que el producto sea "fin". Si el producto no
// existe o no hay suficiente, se avisa y no se modifica nada. Al final se muestra el inventario y los
// productos agotados.
// Ejemplo de ejecución:
// [prompt] Producto: empanadas
// [prompt] Cantidad: 10
// Vendidas 10 empanadas. Quedan 25
// [prompt] Producto: jugos
// [prompt] Cantidad: 15
// Vendidas 15 jugos. Quedan 0
// [prompt] Producto: pandebono
// No vendemos pandebono
// [prompt] Producto: arepas
// [prompt] Cantidad: 30
// Solo quedan 20 arepas
// [prompt] Producto: fin
// Inventario final:
// arepas: 20
// empanadas: 25
// jugos: 0
// tintos: 40
// Agotados: jugos
// Funciones sugeridas:
// • vender(inventario, producto, cantidad): modifica el inventario si se puede y
// retorna el mensaje que se debe mostrar (no lo imprime).
// • obtenerAgotados(inventario): retorna un array con las claves en 0.
// • unirConComas(lista): la de la guía de arrays.


const vender = (inventario, producto, cantidad) => {

    const cantidadDisponible = inventario[producto]
    if (cantidad > cantidadDisponible) {
        return `Solo quedan ${cantidadDisponible} ${producto}`
    } else {
        inventario[producto] = cantidadDisponible - cantidad

       return `Vendidas ${cantidad} ${producto}. Quedan ${inventario[producto]}`

        
    }

}

const obtenerAgotados = (inventario) => {
    let array= []

    for (const key in inventario) {
        if (inventario[key] == 0) {
            array.push(key)
        }
    }
    return array
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

let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };

while (true) {
    let producto = prompt(`Ingrese un producto`)

    if (producto == "fin") {
        console.log(`${unirConComas(obtenerAgotados(inventario))}`);
        //podria imprimir todo el array pero resultaria redundante viendo los agotados 
        break
    }

    if (inventario[producto] == undefined) {
        console.log(`No vendemos ${producto}`);
        producto = prompt(`Ingrese un producto`)
    }


    const cantidad = parseInt(prompt(`Ingrese una cantidad`))

    console.log(
        vender(inventario, producto, cantidad));
}