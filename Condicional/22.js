// Un tendero empezó el día con un Valor X en dinero. Luego tuvo 4 ventas por un
// valor de $800.000 y finalmente pagó a sus acreedores el 10% de todo lo que tenía
// en caja.
// Imprima el dinero con el que empezó, el dinero con el que terminó y el
// pago a sus acreedores. Imprima si se le pagó a proveedores más de $50.000 o no.
const dineroInicial = parseFloat(
  prompt("Ingrese el dinero con el que empezó el dia"),
);

const valorVentas = 800000;

const totalCaja = dineroInicial + valorVentas;

const pagoAcreedores = (totalCaja * 10) / 100;

console.log(`El tendero comenzó con ${dineroInicial}`);
console.log(
  `El tendero terminó con ${totalCaja} antes de pagar a los acreedores`,
);
console.log(`El pago a sus acreedores fue de ${pagoAcreedores}`);

if (pagoAcreedores > 50000)
  console.log(`El tendero pagó mas de 50000 a los acreedores`);
else console.log(`El tendero no pagó mas de 50000 a los acreedores`);
