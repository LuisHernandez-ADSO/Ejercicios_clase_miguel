// Ejercicio 13: Comprobación y filtrado
// Verifica si todos los números son positivos. Luego crea un nuevo 
// array solo con los números pares.
// Prueba con los dos arrays.

// Resultado esperado
// // a: true, pares [4, 10, 8]
// // b: false, pares [4, -2, 10]

const a = [4, 7, 10, 3, 8];
const b = [4, -2, 10];

//uso every para evaluar todos los numeros si todos son positivos
//luego para el nuevo array de solo pares con filter

console.log(a.every(value => value > 0));

const paresAArray = a.filter(value => (value%2) == 0)

console.log(paresAArray);


console.log(b.every(value => value > 0));

const paresBArray = b.filter(value => (value%2) == 0)

console.log(paresBArray);
