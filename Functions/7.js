// Al cerrar un expendio de naranjas, 15 clientes que no han pagado reciben un 15% de
// descuento si compraron más de 10 kilos. Leer primero el precio por kilo y luego los kilos de
// cada cliente.
// Mostrar cuánto paga cada cliente, el total que recibe la tienda y cuántos clientes obtuvieron
// descuento.
// Ejemplo de ejecución
// (probando con 3 clientes)
// [prompt] Precio por kilo: 4000
// [prompt] Kilos cliente 1: 5
// Cliente 1 paga: 20000
// [prompt] Kilos cliente 2: 12
// Cliente 2 paga: 40800 (con descuento)
// [prompt] Kilos cliente 3: 10
// Cliente 3 paga: 40000
// Total recaudado: 100800
// Clientes con descuento: 1
// Funciones sugeridas
// • tieneDescuento(kilos): retorna true o false.
// • calcularTotalCliente(kilos, precioKilo): retorna lo que paga el cliente, con o sin
// descuento.

//entrada: precioKilo, cantidadKilos
//proceso: descuento para >10 kilos, descuento del 15% del total, calcular el totalCliente, calcular totalTienda, calcular cantidadClientesDescuento
//salida: cuanto paga cada cliente, total recaudado, cantidad de clientes con descuentos

const tieneDescuento = (cantidadKilos) => {
    if (cantidadKilos > 10) return true
    else return false
}

const calcularTotalCliente = (precioKilo, cantidadKilos, descuento) => {

    const total = precioKilo * cantidadKilos

    if (descuento) {
        cantidadClientesDescuento++
        return total - (total * 15 / 100)
    } else {
        return total
    }
}


const precioKilo = parseInt(prompt("Ingresa el precio por kilo de las naranjas"))

let recaudado = 0
let cantidadClientesDescuento = 0

for (let i = 1; i <= 15; i++) {

    const cantidadKilos = parseInt(prompt(`Ingresa la cantidad de kilos del cliente ${i}`));

    const descuento = tieneDescuento(cantidadKilos);

    const total = calcularTotalCliente(precioKilo, cantidadKilos, descuento);
    recaudado += total

    console.log(`El cliente numero ${i} debe pagar ${total}`);

}
console.log(`La tienda recaudo: ${recaudado}`);

console.log(`La cantidad de clientes con descuento fueron: ${cantidadClientesDescuento}`);

