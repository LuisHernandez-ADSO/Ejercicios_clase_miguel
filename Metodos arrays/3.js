// Ejercicio 3: Verificar, ordenar y encontrar
// Primero usa some() para verificar si hay al menos una persona menor de 18 años. Luego usa sort()
// para ordenar de menor a mayor edad y find() para obtener la persona mayor de edad (18 o más) más
// joven.
// Datos
// const personas = [
// { nombre: "Sara", edad: 31 },
// { nombre: "Luis", edad: 17 },
// { nombre: "Ana", edad: 25 },
// { nombre: "Pedro", edad: 15 },
// ];
// Resultado esperado
// // some: true
// // ordenado: Pedro (15), Luis (17), Ana (25), Sara (31)
// // find: { nombre: "Ana", edad: 25 }
// Pregunta de análisis: Si no ordenas antes, ¿a quién devuelve find()? ¿Por qué el orden cambia el
// resultado?


const personas = [
    { nombre: "Sara", edad: 31 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 15 },
];

console.log(personas.some(i => i.edad < 18 )); //itera por cada objeto del array y accedo a la edad para comparar


personas.sort((a, b) => a.edad - b.edad);

//ordenar por nombre
//const x=personas.sort((a,b) => a.nombre.localeCompare(b.nombre));

console.log(personas);


console.log(personas.find(i => i.edad >= 18));

//Si no ordeno antes, el primer resultado que encuentra find (edad >= 18) es Sara
//al ordenarlo por edad de menor a mayor el primer objteo que encuentra es Ana