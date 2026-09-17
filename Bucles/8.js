// En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
// dependerá del número de computadoras que compre. Si las computadoras son menos de
// cinco se les dará un 10% de descuento sobre el total de la compra; si el número de
// computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de
// descuento; y si son 10 o más se les da un 40% de descuento. El precio de cada computadora
// es de $11,000

//cantidad de computadoras

//<5 10% descuento
//>=5 20%
//>=10 40%

//total

const precioComputadora = 10000
let total = 0
let cantidadComputadoras = 0

while (true) {
    cantidadComputadoras = parseInt(prompt("Ingrese la cantidad de computadoras, con 0 rompe el ciclo"))

    total = precioComputadora * cantidadComputadoras

    if (cantidadComputadoras == 0) break;
    else if (cantidadComputadoras < 5) total -= (total * 10 / 100)
    else if (cantidadComputadoras >= 5 && cantidadComputadoras < 10) total -= (total * 20 / 100)
    else if (cantidadComputadoras >= 10) total -= (total * 40 / 100)

    console.log(`El total a pagar por tus ${cantidadComputadoras} computadoras es: ${total}`);

}

