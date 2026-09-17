// Leer la nota de un estudiante (en números enteros) e imprimir su equivalente en
// letras sabiendo que si la nota es 5 su equivalente es EXCELENTE, 4 es BUENO, 3 es
// ACEPTABLE, 2 INSUFICIENTE y 1 DEFICIENTE.

const nota = parseInt(prompt("Ingrese la nota de un estudiante"));

switch (nota) {
  case 1:
    console.log("DEFICIENTE");
    break;
  case 2:
    console.log("INSUFICIENTE");
    break;
  case 3:
    console.log("ACEPTABLE");
    break;
  case 4:
    console.log("BUENO");
    break;
  case 5:
    console.log("EXCELENTE");
    break;
  default:
    console.log("Ingrese una nota entre 1 y 5 entero");
    break;
}
