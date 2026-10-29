// Ejercicio 9: Buscar con condición
// Usa findIndex() para encontrar el índice del primer producto 
// cuyo precio sea mayor a 100. Prueba
// también con una condición que ningún producto cumpla.

// Resultado esperado
// // 1
// // si ninguno cumple: -1

//Pregunta de análisis: ¿Qué te devolvería find() en lugar de 
// findIndex() con esos mismos datos?

//me retornaria el objeto

const productos = [
    { nombre: "Lápiz", precio: 50 },
    { nombre: "Cuaderno", precio: 120 },
    { nombre: "Libro", precio: 200 },
];

console.log(productos.findIndex(i => i.precio > 100));

console.log(productos.find(value => value.precio > 100));
