// Ejercicio 11: Transformación y búsqueda
// Crea un nuevo array con todos los nombres en mayúsculas. Luego encuentra 
// el primer nombre con más de 6 caracteres.
// Datos
// const nombres = ["ana", "luis", "valentina", "sara", "sebastian"];
// Resultado esperado
// // ["ANA", "LUIS", "VALENTINA", "SARA", "SEBASTIAN"]
// // "VALENTINA"

//un map para aplicar uppercase a cada valor
//find, primero que cumpla

const nombres = ["ana", "luis", "valentina", "sara", "sebastian"];

const upperNames= nombres.map(value => value.toUpperCase())

console.log(upperNames.find(value => value.length > 6));

