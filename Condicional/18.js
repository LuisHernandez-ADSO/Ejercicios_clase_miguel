// Desarrolle un algoritmo que dé solución a la ecuación contable ACTIVO = PASIVO +
// PATRIMONIO. Además, imprima si la empresa tiene saldo en cero, tiene perdida o
// tiene alguna ganancia.
const activo = parseFloat(prompt("Ingrese el valor del activo"));
const pasivo = parseFloat(prompt("Ingrese el valor del pasivo"));
const patrimonioInicial = parseFloat(
  prompt("Ingrese el valor del oatrimonio inicial:"),
);

const resultado = activo - (pasivo + patrimonioInicial);

console.log(
  `activo: ${activo}, pasivo: ${pasivo} | patrimonio base: ${patrimonioInicial}`,
);

if (resultado > 0) {
  console.log(`La empresa tiene una GANANCIA de $${resultado}`);
} else if (resultado < 0) {
  console.log(`La empresa tiene una PÉRDIDA de $${resultado}`);
} else {
  console.log("La empresa tiene saldo en cero");
}
