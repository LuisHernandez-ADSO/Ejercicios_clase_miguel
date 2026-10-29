// Ejercicio 7: Filtrar y unir
// Usa filter() para quedarte con las frutas que contienen la letra "a" 
// (los strings también tienen includes()). Luego usa join() para 
// unirlas en un solo string, separadas por coma y espacio.
// Resultado esperado
// // "manzana, pera, uva"
// Pregunta de análisis: ¿Por qué no puedes hacer primero join() y 
// después filter()?

//no use join, no separe cada caracter del string para evaluarlo

const frutas = ["manzana", "kiwi", "pera", "uva"];

console.log(frutas[1].includes("a"));

console.log(frutas.filter((item) => item.includes("a")));

