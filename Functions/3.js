// Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
// día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
// promedio en °C.
// Fórmulas: K = C + 273.15 y F = C * 9 / 5 + 32.
// Ejemplo de ejecución
// [prompt] ¿Cuántos días?: 2
// [prompt] Temperatura día 1 (°C): 25
// Día 1: 25 °C = 298.15 K = 77 °F
// [prompt] Temperatura día 2 (°C): 15
// Día 2: 15 °C = 288.15 K = 59 °F
// Promedio: 20 °C
// Funciones sugeridas
// • convertirAKelvin(celsius): retorna la temperatura en Kelvin.
// • convertirAFahrenheit(celsius): retorna la temperatura en Fahrenheit.
// • calcularPromedio(suma, cantidad): retorna el promedio.

//entrada: cantidad de dias, temperatura (°C)
//proceso: Convertir cada temperatura en grados kelvin y fahrenheit, promedio de temperatura en °C
//salida: temperatura en kelvin, temperatura en fahrenheit y promedio en °C

const convertirAKelvin = (temperatura) => {
    return temperatura + 273.15
}

const convertirAFahrenheit = (temperatura) => {
    return temperatura * 9 / 5 + 32
}

const calcularPromedio = (suma, cantidad) => {
    return suma / cantidad
}

const cantidadDias = parseInt(prompt("¿Cuántos días?:"))

let suma = 0

for (let i = 1; i <= cantidadDias; i++) {
    let temperatura = parseFloat(prompt(`Temperatura día ${i} (°C):`))
    console.log(`Día ${i}: ${temperatura} °C = ${convertirAKelvin(temperatura)} K = ${convertirAFahrenheit(temperatura)} °F `);
    suma += temperatura
}

console.log(`promedio: ${calcularPromedio(suma, cantidadDias)}`);
