// Ejercicio 5: Quitar y agregar
// Usa shift() para eliminar el primer número, unshift() para agregar un 5 al principio y push() para
// agregar un 50 al final. Imprime lo que devuelve cada método.
// Datos
// const numeros = [10, 20, 30, 40];
// Resultado esperado
// // shift devuelve: 10
// // unshift devuelve: 4
// // push devuelve: 5
// // numeros queda: [5, 20, 30, 40, 50]
// Pregunta de análisis: ¿Qué devuelven unshift() y push()? ¿Es el array?

//shift y unshift modifican el array original porque usan este para insertar, lo mismo para push

const numeros = [10, 20, 30, 40];

const num = numeros;

num.shift()
num.unshift(5)
num.push(50)

console.log(numeros);
console.log(num);
