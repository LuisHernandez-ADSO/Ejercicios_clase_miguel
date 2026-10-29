// Ejercicio 8: Mayor y verificar
// Usa reduce() para encontrar el número mayor. Luego usa every() para comprobar si todos los
// números son mayores a 0. Prueba con los dos arrays.
// Datos
// const a = [4, 9, 2, 7];
// const b = [4, -1, 2];
// Resultado esperado
// // a: mayor 9, every: true
// // b: mayor 4, every: false
// Pregunta de análisis: ¿Qué valor inicial usaste en reduce() y por qué?

//uso el valor inicial como partida, si ninguno es mayor a ese, queda por defecto

const a = [4, 9, 2, 7];
const b = [4, -1, 2];

console.log(a.reduce((max, i) => (max < i ? max=i : max=max), a[0]));

console.log(b.reduce((max, i) => (max < i ? max=i : max=max), b[0]));

console.log(a.every(i => i>0));

console.log(b.every(i => i>0));