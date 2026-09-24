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

const atenderCliente = (numeroCliente, totalCliente) => {
    console.log(`Total cliente ${numeroCliente}: ${totalCliente}`);
    hayOtroCliente()
}

const hayOtroCliente = () => {
    const otroCliente = prompt("¿Hay otro cliente? (S/N):")

    if (otroCliente == "S") {
        numeroCliente++
    } else {
        atencion = false
    }
}

let numeroCliente = 1
let TotalNeto = 0
let totalCliente = 0
let atencion = true

//mejor cliente
let maxMonto = 0
let maxCliente = 0

while (atencion) {
    const valor = parseInt(prompt("Precio (0 para cerrar la cuenta"));

    if (valor == 0) {

        if (maxMonto < totalCliente) {
            maxMonto = totalCliente
            maxCliente = numeroCliente
        }
        atenderCliente(numeroCliente, totalCliente)

        TotalNeto += totalCliente
        totalCliente = 0
    } else {
        totalCliente += valor
    }
}

console.log(`Clientes atendidos: ${numeroCliente}`);
console.log(`El total recaudado es: ${TotalNeto}`);

console.log(`El cliente con mayor monto es el cliente ${maxCliente} con un total de: ${maxMonto}`);
