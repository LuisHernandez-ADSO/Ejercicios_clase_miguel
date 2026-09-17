// Calcular el número de días y horas vividos por una persona de la cual se desconoce
// su año de nacimiento. Sólo si el año de nacimiento es anterior al año 2000.

const anioNacimiento = parseInt(prompt("Ingrese el año de nacimiento"));

if (anioNacimiento < 2000) {
  let diasVividos = (2026 - anioNacimiento) * 365;
  let horasVividos = diasVividos * 24;
  console.log(
    `La persona que nació en ${anioNacimiento}, tiene aproximadamente ${diasVividos} dias vividos, lo que equivale a ${horasVividos} horas vividas`,
  );
}
