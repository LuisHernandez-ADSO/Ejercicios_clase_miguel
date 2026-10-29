// Ejercicio 1: Transformar y filtrar
// Con map() multiplica cada número por 3. Luego, sobre el nuevo array, usa filter() para quedarte con
// los mayores a 10.
// Datos
// const numeros = [2, 5, 3, 8, 1];
// Resultado esperado
// // [15, 24]

//Pregunta de análisis: ¿Cambió el array numeros? ¿Cómo lo comprobaste?

const numeros = [2, 5, 3, 8, 1];

console.log(numeros.map(i => i * 3).filter(i => i > 10));

const numerosMap = numeros.map(i => i*3)

const numerosMapFilter = numerosMap.filter(i => i >10);

console.log(`Array original: ${numeros}`);


console.log(`Array con map: ${numerosMap}`);

console.log(`Numeros filtrados: ${numerosMapFilter}`);


//con map no modifico el array original, tengo uno independiente, filter tampoco modifica el original (el de map)
//entonces tengo 3 arreglos, numeros, el de map y el nuevo de filter que es el que imprimo

//Lo comprobe imprimiendo el array original al final y viendo que no cambió
//por lo que los metodos operaron sobre un array nuevo