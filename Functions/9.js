// En un grupo de N aprendices se lee, uno por uno, el género (H o M) y la edad. Mostrar cuántos
// hombres y cuántas mujeres hay, el promedio de edad de los hombres, el de las mujeres y el de
// todo el grupo.
// Si no hay hombres o no hay mujeres, mostrar un mensaje en lugar de calcular ese promedio.
// Ejemplo de ejecución
// [prompt] ¿Cuántas personas?: 4
// [prompt] Género persona 1 (H/M): H
// [prompt] Edad persona 1: 20
// [prompt] Género persona 2 (H/M): M
// [prompt] Edad persona 2: 18
// [prompt] Género persona 3 (H/M): M
// [prompt] Edad persona 3: 22
// [prompt] Género persona 4 (H/M): H
// [prompt] Edad persona 4: 30
// Hombres: 2 | Promedio de edad: 25
// Mujeres: 2 | Promedio de edad: 20
// Promedio del grupo: 22.5
// Funciones sugeridas
// • esHombre(genero): retorna true si el género es "H".
// • calcularPromedio(suma, cantidad): retorna el promedio.

//etrada: cantidad personas, genero y edad
//proceso: sumatoria de H y M, promedio de edad de hombres, promedio edad mujeres, promedio de todo el grupo
//salida: promedios

const esHombre = (genero) => {
    if (genero == "H") return true
    else return false
}

const calcularPromedio = (sumatoria, cantidad) => {
    return sumatoria / cantidad
}

const edadesHombres = (edad) => {
    return edadHombre += edad
}

const edadesMujeres = (edad) => {
    return edadMujer += edad
}

const cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas"))

let sumatoriaEdades = 0
let edadHombre = 0
let edadMujer = 0
let cantidadHombres = 0
let cantidadMujeres = 0


for (let i = 1; i <= cantidadPersonas; i++) {
    let genero = prompt(`Ingrese el genero de la persona ${i}`)
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${i}`))

    genero = esHombre(genero);

    if (genero) {
        edadesHombres(edad)
        cantidadHombres++
    } else {
        edadesMujeres(edad)
        cantidadMujeres++
    }

    sumatoriaEdades += edad
}

if (cantidadHombres == 0) {
    console.log(`No hay hombres, no promedio`);
} else {
    console.log(`Hombres ${cantidadHombres}, promedio: ${calcularPromedio(edadHombre, cantidadHombres)}`);
}

if (cantidadMujeres == 0) {
    console.log(`No hay mujeres, no promedio`);

} else {
    console.log(`Mujeres ${cantidadMujeres}, promedio: ${calcularPromedio(edadMujer, cantidadMujeres)}`);
}
console.log(`El promedio de todas las edades de todo el grupo es: ${calcularPromedio(sumatoriaEdades, cantidadPersonas)}`);
