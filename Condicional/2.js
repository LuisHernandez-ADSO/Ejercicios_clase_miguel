//Leer nombre y estatura de una persona, Imprimir el nombre
// si su estatura es mayor a 165.

const nombre = prompt("Ingrese su nombre");
const estatura = parseFloat(prompt("Ingrese su estatura"));

if (estatura > 165) console.log(`${nombre} la estatura es mayor a 165`);
else console.log(`la estatura es menor o igual a 165`);
