//Resolver la siguiente ecuación Aux = i (n-3) / n2+x
const i = parseFloat(prompt("Ingrese el valor de i"));
const n = parseFloat(prompt("Ingrese el valor de n"));
const x = parseFloat(prompt("Ingrese el valor de x"));

const aux = (i * (n - 3)) / (n * n + x);

console.log(`El resultado de aux es: ${aux}`);
