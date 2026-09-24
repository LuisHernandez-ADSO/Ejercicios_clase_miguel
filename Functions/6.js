// Una empresa necesita calcular el salario semanal de N obreros. Leer N y luego las horas
// trabajadas de cada obrero.
// Si el obrero trabaja 40 horas o menos, se le paga $12.000 por hora. Si trabaja más de 40, se le
// pagan $12.000 por cada una de las primeras 40 horas y $15.000 por cada hora extra. Mostrar
// el salario de cada obrero y el total de la nómina.
// Ejemplo de ejecución
// [prompt] ¿Cuántos obreros?: 2
// [prompt] Horas obrero 1: 38
// Obrero 1: 456000
// [prompt] Horas obrero 2: 45
// Obrero 2: 555000
// Total nómina: 1011000

// Funciones sugeridas
// • calcularHorasExtra(horas): retorna cuántas horas pasan de 40 (0 si no hay).
// • calcularSalarioSemanal(horas): retorna el salario de la semana.

//entrada: Cantidad de obreros, horas trabajadas por obrero
//proceso: hasta 40 horas se pagan a 12000, de ahi para arriba a 15000
//salida: salario de cada obrero y total de la nomina-

const calcularHorasExtra = (horasTrabajadas) => {

    if ((horasTrabajadas - 40) > 0) return horasTrabajadas - 40
    else return 0
}

const calcularSalarioSemanal = (horasTrabajadas, horasExtras) => {
    if (horasTrabajadas > 40) return (40 * 12000) + (horasExtras * 15000)
    else return (horasTrabajadas * 12000) + (horasExtras * 15000)
}


const cantidadObreros = parseInt(prompt("Ingrese la cantidad de obreros"))

let nomina = 0

for (let i = 1; i <= cantidadObreros; i++) {
    const horasTrabajadas = parseInt(prompt(`Ingrese la cantidad de horas trabajadas del obrero numero ${i}`));

    const horasExtras = calcularHorasExtra(horasTrabajadas);

    const salarioNeto = calcularSalarioSemanal(horasTrabajadas, horasExtras);

    console.log(`El salario neto del obrero ${i} es: ${salarioNeto}`);
    nomina += salarioNeto

}

console.log(`El total de la nomina es ${nomina}`);
