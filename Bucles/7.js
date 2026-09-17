// 70 personas se encuentran con un problema de comprar un automóvil o un terreno, los
// cuales cuestan exactamente lo mismo. Sabe que mientras el automóvil se devalúa, con el
// terreno sucede lo contrario. Esta persona comprara el automóvil si al cabo de tres años la
// devaluación de este no es mayor que la mitad del incremento del valor del terreno. Ayúdale
// a estas personas a determinar si deben o no comprar el automóvil.

// 70 personas

//valor lote
//valor auto
//devaluacion del automovil
//valorizacion del terreno
//devaluacion > valorizacion/2 compra terreno
//otro modo compra auto

//salida que compra

for (let i = 1; i <= 70; i++) {
    let costoAuto = parseInt(prompt("Ingrese el costo del auto"))
    let costoLote = parseInt(prompt("Ingrese el valor del lote"))

    let devaluo = parseInt(prompt("Ingrese el % de devaluacion del auto"))
    let avaluo = parseInt(prompt("Ingrese el % de valorizacion del lote"))

    let devaluacion = costoAuto * devaluo / 100
    let valorizacion = costoLote * avaluo / 100
    
    if (devaluacion < (valorizacion / 2)) {
        console.log(`Compra el auto`);
    } else {
        console.log(`Compra el lote`);
    }
}