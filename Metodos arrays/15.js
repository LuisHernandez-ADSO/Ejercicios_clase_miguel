// Ejercicio 15: Extracción y unión
// Crea una nueva lista con los tres primeros colores, sin modificar 
// el array original. Luego crea otra lista
// que combine esa con los colores secundarios.
// Datos
// const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
// const secundarios = ["naranja", "violeta"];
// Resultado esperado
// // ["rojo", "azul", "verde"]
// // ["rojo", "azul", "verde", "naranja", "violeta"]
// // colores sigue con sus 5 elementos
// Pregunta de análisis: ¿Cómo comprobaste que colores no cambió?

//colores no cambia porque el metodo slice no modifica el array original
//guardo en otra variable el arreglo y opero sobre este nuevo

const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

const tresColores = colores.slice(0, 3)
console.log(tresColores);

const coloresCombinados = tresColores.concat(secundarios)
console.log(coloresCombinados);
