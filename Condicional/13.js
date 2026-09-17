//Leer la temperatura de un día (en grados centígrados). Imprimir un mensaje “HACE
// FRIO” si la temperatura es menor a 23°C, imprima “ES UN BUEN DÍA” si la
// temperatura es mayor e igual que 23°C e inferior a 30°C. En caso que la
// temperatura sea igual o superior a 30°C imprima “HACE CALOR”.

const temperatura = parseFloat(
  prompt("Ingrese la temperatura de este nuevo dia"),
);

if (temperatura < 23) {
  console.log("Hace frio");
} else if (temperatura >= 23 && temperatura < 30) {
  console.log("Es un buen dia");
} else {
  console.log("Hace calor");
}
