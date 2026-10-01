// Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la
// diferencia entre ambos.
// Ejemplo de ejecución:
// (Con los mismos datos del ejercicio 4)
// Mejor día: Sábado ($260000)
// Peor día: Martes ($95000)
// Diferencia: $165000
// Funciones sugeridas:
// • buscarPosicionMayor(numeros): retorna el índice del mayor.
// • buscarPosicionMenor(numeros): retorna el índice del menor.

//entrada: n/a
//proceso: obtener mayor venta, menor venta y diferencias


const buscarPosicionMayor = (numeros) => {
    let mayor = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }
    return mayor
}

const buscarPosicionMenor = (numeros) => {
    let menor = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}


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


//ejercicio 5
const max = buscarPosicionMayor(ventasDiarias)
const min = buscarPosicionMenor(ventasDiarias)
console.log(`Mejor dia: $${max}`);
console.log(`Peor dia: $${min}`);

console.log(`Diferencia $${max - min}`);
