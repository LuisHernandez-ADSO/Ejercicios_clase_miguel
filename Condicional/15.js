// Desarrollar el mismo ejercicio anterior pero leyendo una nota con sus decimales y
// teniendo en cuenta que si la nota es mayor o igual que 4.6 es EXCELENTE,
// si la nota está entre 3.6 y 4.5 es BUENO,
// si la nota está entre 3.0 y 3.5 es ACEPTABLE,
// si la nota mayor o igual que 2.0 y menor que 3.0 es INSUFICIENTE
// y si la nota es menor a 2.0 la nota en letras es DEFICIENTE.

const nota = parseFloat(prompt("Ingrese la nota de un estudiante"));
//< >
if (nota >= 4.6) {
  console.log("Excelente");
} else if (nota >= 3.6 && nota <= 4.5) {
  console.log("Bueno");
} else if (nota >= 3 && nota <= 3.5) {
  console.log("Aceptable");
} else if (nota >= 2 && nota < 3) {
  console.log("Insuficiente");
} else {
  console.log("Deficiente");
}
