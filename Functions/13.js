// Cinco miembros de un club quieren saber cuánto subieron o bajaron de peso desde la última
// reunión. Por cada miembro se lee su peso anterior y luego se pesa en 10 básculas distintas
// para obtener un promedio.
// Si el promedio es mayor que el peso anterior, imprimir "SUBIÓ" y los kilos. Si es menor,
// imprimir "BAJÓ" y los kilos. Si es igual, imprimir "SE MANTUVO". Los kilos siempre se
// muestran en positivo, sin usar Math.abs.
// Ejemplo de ejecución
// (probando con 2 miembros y 3 básculas)
// Miembro 1
// [prompt] Peso anterior: 80
// [prompt] Báscula 1: 81
// [prompt] Báscula 2: 82
// [prompt] Báscula 3: 83
// SUBIÓ 2 kg
// Miembro 2
// [prompt] Peso anterior: 70
// [prompt] Báscula 1: 68
// [prompt] Báscula 2: 69
// [prompt] Báscula 3: 67
// BAJÓ 2 kg
// Funciones sugeridas
// • leerPromedioBasculas(cantidadBasculas): lee los pesos de las básculas y retorna el
// promedio.
// • obtenerValorAbsoluto(numero): retorna el número en positivo.
// • generarLetrero(diferencia): retorna "SUBIÓ", "BAJÓ" o "SE MANTUVO".

//entrada: peso inicial, pesos en las basculas
//proceso: promedio de los pesos en las basculas, evaluar promedio con peso inicial
//salida: aumento || bajo || se mantivo

const leerPromedioBasculas = (cantidadBasculas) => {
    let sumaBascula = 0
    for (let j = 1; j <= cantidadBasculas; j++) { //pedir los pesos de la bascula
        let valorBascula = parseInt(prompt(`Bascula ${j}`))
        sumaBascula += valorBascula
    }
    return sumaBascula / cantidadBasculas
}

const obtenerValorAbsoluto = (numero) => {
    if (numero > 0) {
        return numero

    } else {
        return -numero
    }
}

const generarLetrero = (diferencia) => {
    if (diferencia == 0) console.log("Se mantuvo");
    else if (diferencia < 0) console.log(`Subió ${obtenerValorAbsoluto(diferencia)} KG`);
    else console.log(`Bajó ${obtenerValorAbsoluto(diferencia)} KG`);

}


for (let i = 1; i <= 5; i++) {

    const pesoIincial = parseInt(prompt(`Ingrese el peso anterior, miembro numero ${i}`))

    const promedioBascula = leerPromedioBasculas(10)

    const diferencia = pesoIincial - promedioBascula
    generarLetrero(diferencia)


}