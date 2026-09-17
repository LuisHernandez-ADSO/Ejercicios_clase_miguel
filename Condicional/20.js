// La banda ancha incrementó la velocidad de transferencia de datos en Internet en un 230%.
// Imprima la velocidad anterior y la velocidad actual, teniendo en cuenta
// que un equipo tiene banda ancha y otro no.
// Leer si tiene banda ancha o no un computador y tenga en cuenta que si no la tiene el incremento es 0.

const velocidadTransferenciaInicial = parseFloat(
  prompt("Ingrese la velocidad de transferencia"),
);

const tieneBandaAhcna = confirm(
  `Elija "aceptar" si el dispositivo cuenta con conexion banda ancha, elija "cancelar" de lo contrario`,
);

let incrementoVelocidad = 0;
let velocidadFinal = velocidadTransferenciaInicial + incrementoVelocidad;

if (tieneBandaAhcna) {
  incrementoVelocidad = (velocidadTransferenciaInicial * 230) / 100;
  velocidadFinal = velocidadFinal + incrementoVelocidad;
  console.log(
    `El equipo si tiene banda ancha, comenzó con una velocidad de ${velocidadTransferenciaInicial} y terminó con una velocidad de ${velocidadFinal}`,
  );
} else {
  console.log(
    `El equipo no tiene banda ancha, no tuvo incremento, por lo que su velocidad final e incial son ${velocidadFinal}`,
  );
}
