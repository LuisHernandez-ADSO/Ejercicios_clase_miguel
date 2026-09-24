// El programa genera un número secreto entre 1 y 100. El usuario tiene máximo 7 intentos para
// adivinarlo. Después de cada intento, el programa dice si el número secreto es mayor o menor.
// El juego termina cuando el usuario adivina o se le acaban los intentos. Si adivina, mostrar en
// cuántos intentos lo logró. Si pierde, mostrar cuál era el número.
// Para generar el número usa: Math.floor(Math.random() * 100) + 1.
// Ejemplo de ejecución
// (número secreto: 42)
// [prompt] Intento 1: 50
// El número secreto es menor
// [prompt] Intento 2: 25
// El número secreto es mayor
// [prompt] Intento 3: 42
// ¡Adivinaste en 3 intentos!

// Funciones sugeridas
// • generarNumeroSecreto(minimo, maximo): retorna un número aleatorio entre minimo y
// maximo.
// • evaluarIntento(intento, secreto): retorna "mayor", "menor" o "correcto".

//entrada= prompts del numero a adivinar
//proceso= evaluar si el numero ingresado es mayot||menor respecto al secreto
//salida= mas arriba ||mas abajo || ese es|| intentos insuficiente, numero secreto

const generarNumeroSecreto = () => {
    return Math.floor(Math.random() * 100) + 1
}

const evaluarIntento = (intento, secreto) => {
    if (intento > secreto) {
        console.log(`El numero secreto es menor`);
        return false
    }
    else if (intento < secreto) {
        console.log(`El numero secreto es mayor`);
        return false
    }
    else {
        console.log(`Lo logro...`);
        return true
    }
}

const numeroSecreto = generarNumeroSecreto()
console.log(`El numero secreto es: ${numeroSecreto}`);


for (let i = 1; i <= 7; i++) {
    const numeroUsuario = parseInt(prompt(`Intento numero ${i}, ingrese un numero`))
    let adivinar = evaluarIntento(numeroUsuario, numeroSecreto)

    if (adivinar) {
        console.log(`Adivinaste en ${i} intentos`);
        break
    }
}
