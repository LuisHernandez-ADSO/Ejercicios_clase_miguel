// Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días 
// estuvieron por encima del promedio y cuántos fueron.
// Ejemplo de ejecución:
// (Con los mismos datos del ejercicio 4)
// Promedio diario: $157857
// Días por encima del promedio:
// Viernes: $210000
// Sábado: $260000
// Domingo: $180000
// Total: 3 días

// Funciones sugeridas:
// • calcularPromedio(numeros): la del ejercicio 2.
// • contarMayoresQue(numeros, limite): retorna cuántos elementos superan limite.
// • mostrarDiasSobre(dias, ventas, limite): imprime los días que superan limite.

//entrada: lo mismo de 4
//proceso: calcular el promedio de ingresos luego comparar todos los valores con el promedio
//salida: total de dias y el dia con el valor debajo del promedio

const calcularPromedio = (numeros) => {
    let total = 0
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
    }
    return total / numeros.length

}

const contarMayoresQue = (numeros, limite) => { //retorna cantidad dias
    let count = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > limite) {
            count++
        }
    }
    return count
}

const mostrarDiasSobre = (dias, ventas, limite) => { //imprime dias y valor
    for (let i = 0; i < dias.length; i++) {
        if (ventas[i] > limite) {
            console.log(`${dias[i]}: $${ventas[i]}`);

        }
    }
}


//ejercicio 4
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

// ejercicio 8
let promedio = calcularPromedio(ventasDiarias);
console.log(`El promedio es: ${promedio}`);

mostrarDiasSobre(dias, ventasDiarias, promedio);
console.log(`Total: ${contarMayoresQue(ventasDiarias, promedio)} dias`);
