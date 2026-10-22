// Leer una frase, pasarla a minúsculas y separarla en palabras con split(" "). Contar cuántas
// veces aparece cada palabra usando un objeto. Mostrar cada palabra con su conteo en el orden
// en que apareció por primera vez, cuántas palabras distintas hay y cuál es la más repetida. Si
// hay empate, gana la que apareció primero.
// Ejemplo de ejecución:
// [prompt] Frase: el que madruga dios lo ayuda y el que no madruga también
// el: 2
// que: 2
// madruga: 2
// dios: 1
// lo: 1
// ayuda: 1
// y: 1
// no: 1
// tSambién: 1
// Palabras distintas: 9
// Más repetida: el (2 veces)
// Funciones sugeridas:
// • contarPalabras(frase): retorna el objeto contador.
// • contarClaves y buscarClaveMayor: las del ejercicio 5

//entrada: frase con split
//proceso: crear un objeto, las claves son las palabras

const contarPalabras = (frase) => {

    let objetoContador = {}

    //el que madruga dios lo ayuda y el que no madruga también
    for (let i = 0; i < frase.length; i++) {
        let temp = frase[i]
        objetoContador[temp] = 1


        for (let i = 0; i < frase.length; i++) {

        }

    }

    console.log(objetoContador);
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

const contarClaves = (objeto) => {
    let count = 0

    for (let clave in objeto) {
        count++
    }
    return count
}

let frase = prompt("Ingrese la frase")
frase = frase.toLowerCase().split(" ")

contarPalabras(frase)