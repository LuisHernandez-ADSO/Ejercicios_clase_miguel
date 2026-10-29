// Ejercicio 12: Ordenar y modificar
// Ordena las edades de mayor a menor. Después elimina la edad 
// más joven y agrega una nueva edad
// (19) al final.
// Datos
// const edades = [15, 32, 8, 21, 40];
// Resultado esperado
// // ordenado: [40, 32, 21, 15, 8]
// // sin la más joven: [40, 32, 21, 15]
// // con la nueva: [40, 32, 21, 15, 19]
// Pregunta de análisis: ¿Qué método usaste para quitar la edad 
// más joven y por qué ese y no otro?

//para ordenar uso sort, como esta ordenado (mayor a menor), la edad 
// mas joven sera el ultimo elemento, con pop lo elimino y 
// hago el push al final con el 19, practicamente reemplace el 8 por 19

const edades = [15, 32, 8, 21, 40];

console.log(`Ordenado: ${edades.sort((a,b) => b - a)}`);

edades.pop()

console.log(`Sin la mas joven ${edades}`);

edades.push(19)

console.log(`Con la nueva edad ${edades}`);

