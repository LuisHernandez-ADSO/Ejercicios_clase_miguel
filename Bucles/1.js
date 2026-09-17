// Calcular el total que 10 personas deben pagar en un almacén de llantas, si el precio de cada
// llanta es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o más.

const personas = 10
const llantasBase = 800 //menor a 5
const llantasDescuento = 700 //mayor o igual a 5

let totalLlantas = 0
for (let i = 1; i <= personas; i++) {
    let cantidadLlantas = parseInt(prompt(`Ingresa la cantidad de llantas persona ${i}`))

    let totalCliente = 0

    if (cantidadLlantas < 5) {
        totalCliente = cantidadLlantas * llantasBase
        totalLlantas = totalLlantas + (cantidadLlantas * llantasBase);
    } else {
        totalCliente = cantidadLlantas * llantasDescuento

        totalLlantas = totalLlantas + (cantidadLlantas * llantasDescuento);
    }
    console.log(`El cliente ${i} paga ${totalCliente} por sus ${cantidadLlantas} llantas`);

}

console.log(`El total que pagan las 10 personas es: ${totalLlantas}`);
