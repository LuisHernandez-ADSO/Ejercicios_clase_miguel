//En un montallantas se ofrece un descuento del 20% sobre el valor de cada llanta si
//el número de llantas no supera las 10, de lo contrario tiene un descuento del 50%.
//Se pide desarrollar un algoritmo que lea el número de llantas y el valor de cada
//llanta. Calcular el valor de la compra y el valor total después del descuento.

const cantidadLlantas = parseInt(prompt("Ingresa la cantidad de llantas"));
const precioLlantas = parseFloat(prompt("Ingrese el valor de cada llanta"));
const total = cantidadLlantas * precioLlantas;
let valorTotal = 0;

if (cantidadLlantas <= 10) {
  valorTotal = total - (total * 20) / 100;
} else {
  valorTotal = total - (total * 50) / 100;
}

console.log(
  `Precio inicial ${total}, nuevo precio con el descuento aplicado ${valorTotal}`,
);
