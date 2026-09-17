// En una biblioteca se prestaron 457 libros en los últimos días. Calcular el número
// total de libros que hay en la actualidad sabiendo que al iniciar la biblioteca tenia Y
// libros, imprima si hay libros o no.

const librosIniciales = parseInt(prompt("Ingrese la cantidad de libros que habian al iniciar la biblioteca"));

if (librosIniciales<457) {
  console.log("No se pueden prestar mas libros de los que hay inicialmente");
} else if(librosIniciales>457) {
  const librosRestantes = librosIniciales - 457;
  console.log(`Quedan ${librosRestantes} libros en la biblioteca`);
} else {
  console.log("no hay libros porque se prestaron la misma cantidad que habían");
}
