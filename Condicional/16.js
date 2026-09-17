// Un ratón se comió el 40% de un pedazo de queso y su peso aumentó en un 1,1%.
// Leer el peso del queso y el peso del ratón. Calcular e imprimir el peso actual de los
// dos sólo si el 20% del peso del ratón es inferior al peso final del queso.

const pesoQueso = parseFloat(prompt("Ingrese el peso del queso"));
const pesoRaton = parseFloat(prompt("Ingrese el peso del raton"));

const pesoFinalRaton = pesoRaton + (pesoRaton * 1.1) / 100;
const pesoFinalQueso = (pesoQueso * 60) / 100;

const quintaParteRaton = (pesoFinalRaton * 20) / 100;

if (quintaParteRaton < pesoFinalQueso) {
  console.log(
    `El peso final del queso ${pesoFinalQueso} y el peso final del raton es ${pesoFinalRaton}`,
  );
}
