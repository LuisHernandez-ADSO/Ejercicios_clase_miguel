// Un centro de verificación quiere saber el promedio de puntos contaminantes de los primeros 25
// automóviles que lleguen. También quiere saber los puntos del auto que menos contaminó y del
// que más contaminó.

// Página 8

// Ejemplo de ejecución
// (probando con 4 autos)
// [prompt] Puntos auto 1: 120
// [prompt] Puntos auto 2: 85
// [prompt] Puntos auto 3: 200
// [prompt] Puntos auto 4: 95
// Promedio: 125
// Menor contaminación: 85
// Mayor contaminación: 200
// Funciones sugeridas
// • obtenerMenor(a, b): retorna el menor de los dos números.
// • obtenerMayor(a, b): retorna el mayor de los dos números.
// • calcularPromedio(suma, cantidad): retorna el promedio.

//entrada: 25 puntos
//proceso: calcular el promedio de los puntos, comparar el menor y mayir
//salida: mostrar el primedio, el menor y mayor

const obtenerMenor = (a, b) => {
    if (a < b) return a
    else return b
}

const obtenerMayor = (a, b) => {
    if (a > b) return a
    else return b
}

const calcularPromedio = (sumatoria, cantidad) => {
    return sumatoria / cantidad
}


let sumatoria = 0
let cantidad = 0

let mayor = 0

for (let i = 1; i <= 4; i++) {
    const punto = parseInt(prompt(`Ingrese el punto del auto ${i}`))
    
    mayor = obtenerMayor(punto, mayor) //R
    
    menor = obtenerMenor(punto, mayor)

    //promedio
    cantidad++
    sumatoria += punto
}

console.log(`El promedio es: ${calcularPromedio(sumatoria, cantidad)}`);
console.log(`Mayor contaminacion: ${mayor}`);
console.log(`Menor contaminacion: ${menor}`);
