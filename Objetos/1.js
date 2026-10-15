// Leer el nombre, la edad, el número de ficha y el programa de un aprendiz, y guardarlos en un
// objeto. Agregar al objeto una propiedad mayorDeEdad con true o false según la edad.
// Mostrar la ficha.
// Ejemplo de ejecución:
// [prompt] Nombre: Valentina Rojas
// [prompt] Edad: 19
// [prompt] Número de ficha: 2847561
// [prompt] Programa: Análisis y Desarrollo de Software
// --- Ficha del aprendiz ---
// Nombre: Valentina Rojas
// Edad: 19 años
// Ficha: 2847561
// Programa: Análisis y Desarrollo de Software
// Mayor de edad: sí
// Funciones sugeridas:
// • leerAprendiz(): pide los datos y retorna el objeto completo.
// • mostrarFicha(aprendiz): imprime la ficha.

//entrada: nombre, edad, ficha y programa
//proceso: guardar en objeto, añadir propiedad mayoredad(boolean)
//salida: objeto

const leerAprendiz = () => {

    let nombre = prompt("Nombre del aprendiz")
    let edad = parseInt(prompt("ingrese la edad"))
    let ficha = prompt("Ingrese el numero de  ficha")
    let nombrePrograma = prompt("Ingrese el programa")

    let mayorEdad = false
    if (edad >= 18) mayorEdad = true

    aprendiz = {
        nombre: nombre,
        edad: edad,
        ficha: ficha,
        nombrePrograma: nombrePrograma,
        esMayorEdad: mayorEdad
    }


    return aprendiz
}

const mostrarFicha = (aprendiz) => {
    console.log("Ficha del aprendiz");

    console.log(`Nombre ${aprendiz.nombre}`);
    console.log(`Edad ${aprendiz.edad} años`);
    console.log(`Ficha: ${aprendiz.ficha}`);
    console.log(`Programa: ${aprendiz.nombrePrograma}`);

    if (aprendiz.esMayorEdad == true) console.log(`Mayor de edad: Si`);
    else console.log(`Mayor de edad: No`);

}

mostrarFicha(leerAprendiz())

