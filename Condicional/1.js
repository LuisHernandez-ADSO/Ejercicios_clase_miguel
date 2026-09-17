//Desarrolle un algoritmo que lea el valor del pasaje y el número de pasajeros que
// abordarán un microbús. Calcular el valor total a pagar.
// Además, imprima un mensaje que diga si tiene sobre cupo o no. Tenga en cuenta que a
// un microbús le caben 20 pasajeros.

const valorPasaje = parseFloat(prompt("Ingrese el valor del pasaje"));
const numeroPasajeros = parseInt(
  prompt("Ingrese el numero de pasajeros que abordaran"),
);
const cupoMaximo = 20;

const totalPagar = valorPasaje * numeroPasajeros;

console.log(`El total generado es: ${totalPagar}`);

if (numeroPasajeros > cupoMaximo) console.log(`Tiene sobrecupo`);
else console.log(`No tiene sobrecupo`);
