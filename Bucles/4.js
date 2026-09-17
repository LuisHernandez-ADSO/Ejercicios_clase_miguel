// Una compañía de seguros está abriendo un departamento de finanzas y estableció un
// programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa
// la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es
// mayor que $50 000 la cuota a pagar será el 2% del monto. La afianzadora desea determinar
// cuál será la cuota que debe pagar cada cliente.

//monto de la fianza

//menor a 50000 cuota = 3%
//mayor a 50000 cuota =2%

//cuota

let monto = 0
let cuota = 0

while (true) {
    monto = parseInt(prompt(`Ingrese el monto del usuario, con 0 rompe el ciclo`))
    
    if (monto == 0) break;
    else if (monto < 50000) cuota = monto * 3 / 100
    else if (monto >= 5000) cuota = monto * 2 / 100

    console.log(`El usuario con un monto de ${monto} debe pagar cuotas de ${cuota}`);
}