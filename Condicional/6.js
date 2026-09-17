//Un atleta recorre tres distancias diferentes en tres competiciones distintas.
//Calcular e imprimir la distancia promedio. Imprima “Excelente distancia” si el
//promedio es mayor a 12 kilómetros.

const distancia1 = parseFloat(prompt("Ingrese la primera distancia"));
const distancia2 = parseFloat(prompt("Ingrese la segunda distancia"));
const distancia3 = parseFloat(prompt("Ingrese la tercera distancia"));

const promedio = (distancia1 + distancia2 + distancia3) / 3;

if (promedio > 12) console.log(`Excelente distancia: ${promedio}`);
else console.log(`tu promedio (${promedio}) no es mayor a 12`);
