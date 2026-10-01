// Un local de empanadas registra sus ventas diarias. El programa arranca con este array fijo:
// let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
// "Domingo"];
// Pedir la venta de cada día usando el nombre del día en el mensaje, guardarlas en otro array y
// mostrar un reporte día por día con el total de la semana.

// Ejemplo de ejecución:
// [prompt] Venta del Lunes: 120000
// [prompt] Venta del Martes: 95000
// [prompt] Venta del Miércoles: 110000
// [prompt] Venta del Jueves: 130000
// [prompt] Venta del Viernes: 210000
// [prompt] Venta del Sábado: 260000
// [prompt] Venta del Domingo: 180000
// Lunes: $120000
// Martes: $95000
// Miércoles: $110000
// Jueves: $130000
// Viernes: $210000
// Sábado: $260000
// Domingo: $180000
// Total semana: $1105000
// Funciones sugeridas:
// • leerVentas(dias): pide una venta por cada día y retorna el array de ventas.
// • calcularTotal(numeros): retorna la suma de un array de números.
// • mostrarReporte(dias, ventas): imprime el reporte.

//entrada: ventas diarias
//proceso: comparten mismo indice, asi que la referencia es la misma (1 solo for), sumar las ventas
//salida: mostrar las ventas por dia y el total

const leerVentas = (dias) => {
    let ventas = []
    for (let i = 0; i < dias.length; i++) {
        let dia = parseInt(prompt(`Venta del ${dias[i]}`))
        ventas.push(dia)
    }
    return ventas
}

const calcularTotal = (numeros) => {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma
}

const mostrarReporte = (dias, ventas) => {
    for (let i = 0; i < dias.length; i++) {
        console.log(`${dias[i]}: $${ventas[i]}`);
    }
}

const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
let ingresos = []

let ventasDiarias = leerVentas(dias)
let sumaVentas = calcularTotal(ventasDiarias)
mostrarReporte(dias, ventasDiarias)

console.log(`Total de la semana: $${sumaVentas}`);
