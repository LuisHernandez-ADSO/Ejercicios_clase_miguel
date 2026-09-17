// Goku es un personaje de las tiras cómicas que tiene la particularidad que puede
// transformarse y aumentar su nivel de pelea luego de determinados
// entrenamientos. Desarrolle un algoritmo que lea el nivel de pelea antes de una
// transformación que aumentó su nivel de pela en un 300%. Imprimir su nivel de
// pelea actual y su aumento, sólo si el nivel final es mayor a 5000.

const nivelInicial = parseFloat(
  prompt("Ingrese el nivel de pelea inicial de goku:"),
);

const aumento = nivelInicial * 3.0;
const nivelFinal = nivelInicial + aumento;

if (nivelFinal > 5000) {
  console.log(`Nivel de pelea actual: ${nivelFinal}`);
  console.log(`Aumento del nivel de pelea: ${aumento}`);
}
