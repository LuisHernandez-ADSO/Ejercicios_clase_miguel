// Un cajero registra los precios de los artículos de cada cliente. Un precio de 0 cierra la cuenta de
// ese cliente y se muestra su total. Después se pregunta si hay otro cliente (S/N).
// Al final del día mostrar: cuántos clientes se atendieron, el total cobrado y cuál cliente hizo la
// compra más alta (número de cliente y monto).

// Ejemplo de ejecución
// Cliente 1
// [prompt] Precio (0 para cerrar la cuenta): 3500
// [prompt] Precio (0 para cerrar la cuenta): 12000
// [prompt] Precio (0 para cerrar la cuenta): 0
// Total cliente 1: 15500
// [prompt] ¿Hay otro cliente? (S/N): S
// Cliente 2
// [prompt] Precio (0 para cerrar la cuenta): 8000
// [prompt] Precio (0 para cerrar la cuenta): 0
// Total cliente 2: 8000
// [prompt] ¿Hay otro cliente? (S/N): N
// Clientes atendidos: 2
// Total cobrado: 23500
// Compra más alta: cliente 1 con 15500
// Funciones sugeridas
// • atenderCliente(numeroCliente): lee los precios hasta el 0 y retorna el total del cliente.
// • hayOtroCliente(): pregunta y retorna true o false.

//entrada: precios de articulos (si es 0 termina con ese cliente), pedir si hay mas (S)
//proceso: cantidad clientes, total cobrado, obtener la compra mas alta
//salida: total por cliente, compra mas alta con su numero de cliente y el monto

const atenderCliente = (numeroCliente) => {
    console.log(`Cliente numero ${numeroCliente}`);

    while (true) {
        
        const valorProducto = parseInt(prompt("Precio del producto (0 para cerrar la cuenta)"));
        if (valorProducto == 0) {
            console.log(`Total cliente ${numeroCliente}: ${sumaCuenta}`);
            hayOtroCliente()
            break

        } else {
            sumaCuenta += valorProducto
        }
    }
}

const hayOtroCliente = () => {
    const otroCliente = prompt("Hay otro cliente en la fila? (S/N)")

    if (otroCliente == "S") {
        numCliente++
        atenderCliente(numCliente)
    }
}

let numCliente = 1
let sumaCuenta = 0

atenderCliente(numCliente)


