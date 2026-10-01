// Leer las notas de 5 aprendices en escala de 0 a 5. Si una nota está fuera del rango, se vuelve a
// pedir hasta que sea válida. Mostrar todas las notas separadas por comas, el promedio con un
// decimal y si el grupo aprobó (promedio mayor o igual a 3.0).
// Ejemplo de ejecución:
// [prompt] Nota 1: 4.5
// [prompt] Nota 2: 6
// Nota inválida, debe estar entre 0 y 5
// [prompt] Nota 2: 3
// [prompt] Nota 3: 2.5
// [prompt] Nota 4: 4
// [prompt] Nota 5: 3.5
// Notas: 4.5, 3, 2.5, 4, 3.5
// Promedio: 3.5
// El grupo aprobó
// Funciones sugeridas:
// • leerNotaValida(numero): pide la nota número numero hasta que sea válida y la
// retorna.
// • calcularPromedio(numeros): retorna el promedio de cualquier array de números.
// • unirConComas(lista): retorna un texto con los elementos separados por coma y
// espacio, sin coma al final. La vas a reutilizar en casi toda la guía.

//entrada: notas de 5 aprenices (De 0 a 5)
//proceso: si la nota esta fuera del rango se itera hasta que sea valido (while), calcular promedio (float)
//salida: mostrar las notas separadas por ",", si el promedio >= 3.0


const leerNotaValida = (numero) => {
    if (numero >= 0.0 && numero <= 5.0) return true

}

const calcularPromedio = (numeros) => {
    let total = 0
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i]
    }
    return total / numeros.length

}

const unirConComas = (lista) => {
    let texto = ""
    for (let i = 0; i < lista.length; i++) {
        if (i == 0) {
            texto += lista[i]
        } else {
            texto += ", " + lista[i]
        }

    }
    return texto
}

numeros = []

for (let i = 1; i <= 5; i++) {
    let nota = parseFloat(prompt(`Ingrese la nota ${i}`))

    while (true) {
        if (leerNotaValida(nota)) break
        console.log(`Nota inválida, debe estar entre 0 y 5`);

        nota = parseFloat(prompt(`Ingrese la nota ${i}`));
    }
    numeros.push(nota)
}

const promedioNotas = calcularPromedio(numeros)

const textoSeparad = unirConComas(numeros)

console.log(`Las nota son: ${textoSeparad}`);
console.log(`El promedio del grupo es: ${promedioNotas}`);

if (promedioNotas >= 3.0) console.log("El grupo aprobó");
