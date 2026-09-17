// En un supermercado se hace una promoción, mediante la cual los clientes obtienen un
// descuento dependiendo de un número que se escoge al azar. Si el numero escogido es
// menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a 74
// el descuento es del 20%. Obtener cuánto dinero se le descuenta. Hacer el ciclo mientras el
// número escogido sea diferente de 0.

//escojo un numero al azar, de este numero depende mi descuento

//si ese random <74 da 15% descuento del total
// en otro caso da 20% del total

//dinero descontado

const totalNeto = parseFloat(prompt("Ingrese el valor total de la compra"))

let cantidadReducidaDescuento = 0
while (true) {
    let numeroRandom = parseInt(prompt(`Ingrese un numero al azar, con 0 rompe el ciclo`));
    let aux = 0
    if (numeroRandom == 0) {
        break;
    } else if (numeroRandom < 74) {
        aux = totalNeto * 15 / 100;
    } else {
        aux = totalNeto * 20 / 100;
    }
    cantidadReducidaDescuento += aux;

}

console.log(`El total de la compra es ${totalNeto}`);
console.log(`La cantidad total de descuentos realizados sobre el total neto es de: ${cantidadReducidaDescuento}`);
console.log(`La nueva cantidad a pagar es de: ${totalNeto - cantidadReducidaDescuento}`);

