// El programa arranca con este objeto:
// let producto = { nombre: "Morral", precio: 85000, stock: 12 };
// Leer un porcentaje de descuento. Una función debe retornar un objeto nuevo con el precio
// rebajado y una propiedad extra precioAnterior. Las demás propiedades se copian igual.
// Mostrar ambos objetos para demostrar que el original quedó intacto.
// Ejemplo de ejecución:
// [prompt] Porcentaje de descuento: 20
// Original: Morral - $85000 - 12 unidades
// En oferta: Morral - $68000 (antes $85000) - 12 unidades
// Funciones sugeridas:
// • aplicarDescuento(producto, porcentaje): retorna el objeto nuevo.
// • mostrarProducto(producto): imprime una línea; si tiene precioAnterior, lo muestra
// entre paréntesis

//entrada: descuento
//proceso: copia del objeto con nuevo valor
//salida: original y el nuevo objeto

const aplicarDescuento = (producto, porcentaje) => {
    let nuevoProducto = structuredClone(producto) 

    let precioInicial = producto.precio

    let descuento = precioInicial - (precioInicial * porcentaje / 100)

    nuevoProducto.precio = `$${descuento}`

    nuevoProducto["antes"] = `$${precioInicial}`
    console.log(producto, nuevoProducto);

    return nuevoProducto
}

const mostrarProducto = (producto) => {
    let text = ""
    for (let clave in producto) {
        if (clave == "antes") {
            text += `(${clave} ${producto[clave]}) `
        } else {
            text += producto[clave] + " - "
        }

    }
    console.log(text);


}

let miproducto = {
    nombre: "Morral",
    precio: 85000,
    stock: 12
};

let descuento = parseInt(prompt("Ingrese el porcentaje de descuento"))

let nuevoProducto = aplicarDescuento(miproducto, descuento)

mostrarProducto(miproducto)

mostrarProducto(nuevoProducto)