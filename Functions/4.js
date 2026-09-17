// Una persona invierte su dinero en un banco que paga 2% de interés mensual. La ganancia de
// cada mes se reinvierte. Leer el capital inicial y la cantidad de meses. Mostrar el saldo al final de
// cada mes y la ganancia total.
// Ejemplo de ejecución
// [prompt] Capital inicial: 1000000
// [prompt] Número de meses: 3
// Mes 1: 1020000
// Mes 2: 1040400
// Mes 3: 1061208
// Ganancia total: 61208
// Funciones sugeridas
// • calcularInteres(saldo, porcentaje): retorna el interés que genera el saldo en un
// mes.
// • mostrarInversion(capital, meses): recorre los meses e imprime el saldo de cada
// uno.

//entrada: capital inicial, cantidad meses!""
//proceso: incremento del 2% a cada mes, se actualiza el capital y repite la cantidad de meses. para la ganancia iniio - fin
//salida: saldo final, ganancia total

const calcularInteres = (saldo) => {
    return saldo * 2 / 100
}

const mostrarInversion = (capital, mes) => {
    console.log(`Mes ${mes}: ${capital}`);
}

const capitalInicial = parseInt(prompt("Ingrese su capital inicial"));
const cantidadMeses = parseInt(prompt("Ingrese la cantidad de meses"));
let nuevoSaldo = capitalInicial;

for (let i = 1; i <= cantidadMeses; i++) {
    nuevoSaldo += calcularInteres(nuevoSaldo);
    mostrarInversion(nuevoSaldo, i);
}

console.log(`Ganancia total: ${nuevoSaldo - capitalInicial}`);
