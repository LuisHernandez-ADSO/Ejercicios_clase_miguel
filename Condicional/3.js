//Realizar un diagrama donde solicite un número y determine si es par o impar.

const numero = parseInt(prompt("Ingrese un numero"));

const residuo = numero % 2;

if (residuo == 0) console.log(`El numero ${numero} es par`);
else console.log(`El numero ${numero} es impar`);
