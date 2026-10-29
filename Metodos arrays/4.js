// Ejercicio 4: Combinar y sumar
// Usa concat() para combinar los dos arrays en uno solo. Luego usa reduce() para obtener la suma
// total del array combinado.
// Datos
// const a = [3, 7, 2];
// const b = [10, 5];
// Resultado esperado
// // [3, 7, 2, 10, 5]
// // suma: 27
// Pregunta de análisis: ¿concat() modificó a o b?

const a = [3, 7, 2];
const b = [10, 5];

//concat crea un arreglo nuevo, no modifica los originales
//reduce no modifica tampoco el arreglo original y solo retornara un unico valor

const arrayConcatenado = a.concat(b);

console.log(arrayConcatenado);

console.log(arrayConcatenado.reduce((contador, n) => contador + n, 0));
