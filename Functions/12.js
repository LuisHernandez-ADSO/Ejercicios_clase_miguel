// Leer las calificaciones de un grupo (escala de 0.0 a 5.0) sin saber cuántas son. La lectura
// termina cuando se ingresa -1.
// Si una nota está fuera del rango, mostrar "Nota inválida" y no tenerla en cuenta. Al final
// mostrar: cantidad de notas válidas, promedio, nota más baja y cuántos aprobaron (nota mayor
// o igual a 3.0).
// Ejemplo de ejecución
// [prompt] Nota (-1 para terminar): 4.5
// [prompt] Nota (-1 para terminar): 2.8
// [prompt] Nota (-1 para terminar): 7
// Nota inválida, debe estar entre 0 y 5
// [prompt] Nota (-1 para terminar): 3
// [prompt] Nota (-1 para terminar): -1
// Notas válidas: 3
// Promedio: 3.43 (en consola sale con más decimales)
// Nota más baja: 2.8
// Aprobados: 2
// Funciones sugeridas
// • esNotaValida(nota): retorna true si la nota está entre 0 y 5.
// • estaAprobado(nota): retorna true si la nota es mayor o igual a 3.

//entrada: notas (de 0.0 a 5.0), 
//proceso= comparar si la nota se sale de rango (no se toma en cuenta), sumar notas validas, promedio, nota mas baja, cantidad aprobados (>=3.0)
//salida: todo

const esNotaValida = (nota) => {
    if (nota < 0.0 || nota > 5.0) {
        return false
    } else return true
}

const estaAprobado = (nota) => {
    if (nota >= 3.0) {
        return true
    } else return false
}

const notaMenor = (a, b) => {
    if (a < b) {
        return a
    } else return b
}

let notasValidas = 0
let personasAprobadas = 0
let notas = 0
let menor = 5.0

while (true) {
    const nota = parseFloat(prompt("Ingrese una nota (-1 para terminar)"))

    if (nota == -1) {
        console.log(`Programa finalizado`);
        break
    } else {

        const valida = esNotaValida(nota)

        if (!valida) {
            console.log(`Nota invalida, debe estar entre 0 y 5`);
        } else {

            const notaAprobada = estaAprobado(nota);
            menor =notaMenor(nota, menor)

            if (notaAprobada) personasAprobadas++

            notas += nota
            notasValidas++

        }
    }
}

const promedio = notas / notasValidas

console.log(`La cantidad de notas validas es: ${notasValidas}`);
console.log(`El promedio es: ${promedio}`);
console.log(`Nota mas baja ${menor}`);
console.log(`Cantidad aprobados: ${personasAprobadas}`);
