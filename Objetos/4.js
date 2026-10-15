// Leer el nombre del cliente y la cantidad de adultos, y crear una reserva con la actividad "Rafting
// río Fonce" y seguro: true. Preguntar si van menores; si sí, agregar la propiedad menores con
// su cantidad. Preguntar si rechaza el seguro; si sí, eliminar la propiedad seguro. Calcular el
// total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro. Mostrar solo los
// datos que existen en la reserva.
// Ejemplo de ejecución:
// [prompt] Cliente: Camila Peña
// [prompt] Adultos: 2
// [prompt] ¿Van menores de edad? (si/no): si
// [prompt] ¿Cuántos menores?: 1
// [prompt] ¿Rechaza el seguro? (si/no): si
// --- Reserva ---
// Cliente: Camila Peña
// Actividad: Rafting río Fonce
// Adultos: 2
// Menores: 1
// Seguro: no incluido
// Total: $190000
// Funciones sugeridas:
// • crearReserva(cliente, adultos): retorna el objeto inicial.
// • calcularTotal(reserva): retorna el total según las propiedades que existan.
// • mostrarReserva(reserva): imprime la reserva

//entrada: nombre, cant adultos, cant menores, seguro
//proceso: precio de adultos, precio menores y el seguro por persona
//salida: el objeto

const crearReserva = (cliente) => {

    let nombreCliente = prompt("Nombre del cliente")
    let cantAdultos = parseInt(prompt("Ingrese la cantidad de adultos"))

    let menores = prompt("Van menores de edad? (si/no)")
    let cantMenores = 0
    let seguro = true

    if (menores == "si") cantMenores = parseInt(prompt("Cuantos menores vans"))

    let cambiarSeguro = prompt("Rechaza el seguro? (si/no)")

    if (cambiarSeguro == "si") seguro = false

    cliente = {
        cliente: nombreCliente,
        actividad: "Rafting rio fonce",
        adultos: cantAdultos,
        menores: cantMenores,
        seguro: seguro
    }
    return cliente
}

const calcularTotal = (reserva) => {
    //Calcular el total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro
    let cantAdultos = reserva.adultos
    let cantMenores = reserva.menores
    let totalSeguro
    let totalReserva = 0

    if (cantAdultos > 0) totalReserva += cantAdultos * 70000

    if (cantMenores > 0) totalReserva += cantMenores * 50000

    if (reserva.seguro) {
        totalSeguro += (cantAdultos * 8000) + (cantMenores * 8000)
        totalReserva += totalSeguro

    } else totalSeguro = "No incluido"

    reserva.seguro = totalSeguro
    reserva["total"] = `$${totalReserva}`
    return reserva

}
const mostrarReserva = (reserva) => {
    for (let clave in reserva) {
        console.log(`${clave} ${reserva[clave]}`);

    }
}

let cliente = {}

cliente = crearReserva(cliente)

cliente = calcularTotal(cliente)

mostrarReserva(cliente)

