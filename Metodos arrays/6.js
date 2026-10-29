// Ejercicio 6: Buscar y reemplazar
// Usa indexOf() para encontrar el índice de un nombre. Si existe (índice distinto de -1), reemplázalo por
// otro nombre en esa posición. Hazlo primero con fill(valor, indice, indice + 1) y luego con
// splice(). Prueba con un nombre que no exista.
// Datos
// const nombres = ["Ana", "Luis", "Sara", "Pedro"];
// Resultado esperado
// // reemplazar "Sara" por "Camila": ["Ana", "Luis", "Camila", "Pedro"]
// // reemplazar "Juan" (no existe): el array no cambia
// Pregunta de análisis: Si no validas el -1, ¿qué haría nombres.splice(-1, 1, "Camila")?

//supongo que -1 iria al ultimo elemento, por lo que el ejemplo de la pregunta
//reemplazaria a pedro por camila y deja sara, Ana, Luis, Sara, Camilia

const nombres = ["Ana", "Luis", "Sara", "Pedro"];

//array de ejemplo para comprobar mi hipotesis
const nombresCp = ["Ana", "Luis", "Sara", "Pedro"];
nombresCp.splice(-1, 1, "EJEMPLO");
console.log(nombresCp);

//continuacion del ejercicio con fill
const nombre = prompt("Ingrese un nombre a buscar")

const existe = nombres.indexOf(nombre)

if (existe==-1) {
    console.log(`${nombre} no existe`);
}else{
    const nombreReemplazo = prompt("Ingresa el nombre a reemplazar")

    nombres.fill(nombreReemplazo, existe, existe+1)
    console.log(`el nuevo array queda: ${nombres}`);    
}