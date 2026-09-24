// Un listado de personas recibe una cantidad de dólares. Por cada persona mostrar el
// equivalente en pesos, sabiendo que el dólar cuesta $3.550. El listado termina cuando se
// ingresa 0.
// Al final, mostrar cuántas personas se atendieron y el total en pesos. El 0 no cuenta como
// persona.
// Ejemplo de ejecución
// [prompt] Dólares (0 para terminar): 100
// Equivale a: 355000 pesos
// [prompt] Dólares (0 para terminar): 50
// Equivale a: 177500 pesos
// [prompt] Dólares (0 para terminar): 0
// Personas atendidas: 2
// Total en pesos: 532500
// Funciones sugeridas
// • convertirDolaresAPesos(dolares): retorna el valor en pesos.
// • procesarListado(): lee las cantidades hasta el 0 y muestra el resumen.

//entrada: dolares del usuario
//proceso: convetir los dolares a cop, sumar cantidad de personas, pesos totales convertidos
//salida: cantidad personas atendidas, pesos totalse convertidos

const convertirDolaresAPesos = (usd) => {
    return usd * 3550
}

const procesarListado = () => {
    console.log(`La cantidad de personas atendidas es: ${clientesAtendidos}`);
    console.log(`La cantidad de pesos convertidos en la jornada es: ${totalConvertido}`);


}


let clientesAtendidos = 0
let totalConvertido = 0

while (true) {
    const dolaresRecibidos = parseInt(prompt("Ingrese la cantidad de dolares (0 para terminar)"))

    if (dolaresRecibidos == 0) {
        break;
    } else {
        const copConvertidos = convertirDolaresAPesos(dolaresRecibidos)
        console.log(`Total en pesos ${copConvertidos}`);

        clientesAtendidos++
        totalConvertido += copConvertidos
    }
}
procesarListado()