// Ejercicio 2: Invertir y encontrar
// Usa reverse() para invertir el orden de las palabras. Luego usa find() para encontrar la primera
// palabra con más de 3 caracteres.
// Datos
// const palabras = ["sol", "luna", "mar", "estrella"];
// Resultado esperado
// // invertido: ["estrella", "mar", "luna", "sol"]
// // find: "estrella"
// Pregunta de análisis: ¿Qué palabra habría encontrado find() sin el reverse()? ¿Qué le pasó al
// array palabras?

const palabras = ["sol", "luna", "mar", "estrella"];
console.log(`Array original sin operaciones: ${palabras}`);


const palabrasReverso = palabras;

console.log(palabrasReverso.reverse());
console.log(palabrasReverso.find(i => i.length > 3));

console.log(`Array original: ${palabras}`);
console.log(`Copia del array original: ${palabrasReverso}`);

// Aunque use una copia del objeto, el metodo reverse modifica el objeto inicial tambien
//sin el reverse, el find se detenia con la primera coincidencia que es luna, por lo que el valor cambiaba
