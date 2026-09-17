// Calcule el promedio de goles anotados por un jugador en 4 encuentros, sólo si la
// suma de éstos es superior a 20.
const gol1 = parseInt(prompt("Ingrese los goles anotados del primer partido"));
const gol2 = parseInt(prompt("Ingrese los goles anotados del segundo partido"));
const gol3 = parseInt(prompt("Ingrese los goles anotados del tercer partido"));
const gol4 = parseInt(prompt("Ingrese los goles anotados del carto partido"));

const suma = gol1 + gol2 + gol3 + gol4;
if (suma > 20) {
  let promedio = suma / 4;
  console.log(`El promedio de goles anotados por el jugador son ${promedio}`);
}
