//El peso de un vehículo (en toneladas) se redujo en un 15% luego de hacerle unas
// reparaciones. Se pide calcular el peso actual luego de la reducción. Por último se
// pide calcular el equivalente en kilogramos y en gramos de ese peso actual. Si la
// reducción es mayor a 31⁄2 toneladas imprima un mensaje “El vehículo quedó liviano”.

const pesoInicial = parseFloat(
  prompt("Ingrese el peso inicial del vehiculo en toneladas"),
);

const reduccionPeso = (pesoInicial * 15) / 100;

const pesoFinal = pesoInicial - reduccionPeso;

const equivalenteKiloGramos = pesoFinal * 1000;
const equivalenteGramos = equivalenteKiloGramos * 1000;

if (reduccionPeso > 3.5) {
  console.log(`El vehiculo quedó liviano`);
}

console.log(
  `El peso final es ${pesoFinal}, el equivalente en KG es ${equivalenteKiloGramos} y el equivalente en gramos es ${equivalenteGramos}`,
);
