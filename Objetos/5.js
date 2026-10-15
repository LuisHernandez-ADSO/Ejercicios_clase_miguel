// El programa arranca con este objeto:
// let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };
// Mostrar cada materia con su nota, el promedio con un decimal, la materia con mejor nota y las
// materias por reforzar (nota menor a 3.5). Las funciones deben seguir funcionando si agregas
// una quinta materia sin tocarlas.
// Ejemplo de ejecución:
// matematicas: 4.2
// ingles: 3.1
// programacion: 4.8
// etica: 3.9
// Promedio: 4.0
// Mejor materia: programacion
// Por reforzar: ingles
// Funciones sugeridas:
// • contarClaves(objeto): retorna cuántas claves tiene. La vas a reutilizar.
// • calcularPromedioObjeto(objeto): retorna el promedio de los valores.
// • buscarClaveMayor(objeto): retorna la clave del valor más alto. También se reutiliza.
// • filtrarClavesMenores(objeto, limite): retorna un array con las claves cuyo valor
// es menor que limite

//entrada: n/a
//proceso: iterar el objeto, calcular promedio de valores (float), obtener valor mas alto, valores < 3.5
//salida: el proceso

const contarClaves = (objeto) => {
    let count = 0

    for (let clave in objeto) {
        count++
    }
    return count
}

const calcularPromedioObjeto = (objeto, count) => {

    let sumatoria = 0
    for (let i in objeto) {
        sumatoria += objeto[i]
    }
    return sumatoria / count
}

const buscarClaveMayor = (objeto) => {

    let notaMayor = 0
    let max = ""
    for (let i in objeto) {
        if (objeto[i] > notaMayor) {
            max = i
            notaMayor = objeto[i]
        }
    }
    return max
}

const filtrarClavesMenores = (objeto, limite) => {
    let clavesMenores = []
    for (let i in objeto) {
        if (objeto[i] < limite) {
            clavesMenores.push(i)
        }
    }
    return clavesMenores
}


let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9, sociales : 2.5, informatica : 5 };

for (let i in notas) {
    console.log(`${i} : ${notas[i]}`);
}

let cantidadClaves = contarClaves(notas)

console.log(`Promedio: ${calcularPromedioObjeto(notas, cantidadClaves)}`);

console.log(`Nota mas alta: ${buscarClaveMayor(notas)}`);

console.log(`Por reforzar: ${filtrarClavesMenores(notas, 3.5)}`);