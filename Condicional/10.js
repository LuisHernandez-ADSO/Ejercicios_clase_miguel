//Calcular e imprimir el salario básico, el salario neto y cada uno de los porcentajes
//que tiene un empleado en su liquidación de nómina. Tenga en cuenta que recibe
//un auxilio de alimentación del 1% del salario básico y un subsidio de transporte de
//$45.000 si su salario no asciende a $300.000, sino no tendrá auxilio de
//alimentación y el subsidio de transporte será de $25.000. Luego se le hacen unas
//deducciones correspondientes al 1.5%, 28.1% y 0.55% por concepto de salud,
//pensión y aportes parafiscales respectivamente. Luego de calculado el salario neto,
//se pide sacar un 0.05% del salario neto para una donación a una catástrofe.

let auxTransporte = 0;
let auxAlimento = 0;

const valorHora = parseFloat(prompt("ingrese el valor de la hora"));
const cantidadHoras = parseFloat(
  prompt("ingrese la cantidad de horas trabajadas"),
);

const salarioBasico = valorHora * cantidadHoras;

if (salarioBasico < 300000) {
  auxAlimento = (salarioBasico * 1) / 100;
  auxTransporte = 45000;
} else {
  auxTransporte = 25000;
}

//deducciones
const salud = (salarioBasico * 1.5) / 100;
const pension = (salarioBasico * 28.1) / 100;
const parafiscales = (salarioBasico * 0.55) / 100;

const salarioNeto =
  salarioBasico +
  auxTransporte +
  auxAlimento -
  (salud + pension + parafiscales);

const donacion = (salarioNeto * 0.05) / 100;

console.log(`El salario basico es de: ${salarioBasico}}`);
console.log(
  `Los valores de dedeuccion son: para salud ${salud}, para pension ${pension} y parafiscales ${parafiscales}`,
);
console.log(
  `El salario neto es de ${salarioNeto} y la donación es de ${donacion}`,
);
