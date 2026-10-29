// Ejercicio 10: Transformar y verificar
// Usa map() para crear un nuevo array donde cada número se divide entre 2. 
// Luego usa includes()
// para verificar si el número 5 está en el array resultante. 
// Prueba con los dos arrays.

// Resultado esperado
// // a: [2, 5, 3.5, 6] -> true
// // b: [2, 4.5] -> false

// Pregunta de análisis: includes() no acepta una condición como 
// n => n === 5. ¿Qué método usarías
// si necesitaras una condición?

//sencillamente paso 5 como parametro y el metodo busca el 5 en el arreglo 
//generado con map

const a = [4, 10, 7, 12];
const b = [4, 9];

const map = a.map(value => value / 2)

console.log(map.includes(5));

const map2 = b.map(value => value / 2)

console.log(map2.includes(5));

console.log(`Arreglo A: ${a}`);
console.log(`Arreglo del mapa de A: ${map}`);

console.log(`Arreglo B: ${b}`);
console.log(`Arreglo del mapa de B: ${map2}`);