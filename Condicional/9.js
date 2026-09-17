//Calcular el salario neto de un empleado sabiendo que se le hace una retención del
//3% para pensión y 5% para salud si su salario básico no llega a los $400.000, si este
//es mayor a $800.000 los porcentajes serán del 4% para pensión y 7% para salud; en
//caso contrario los porcentajes serán 9% y 7% respectivamente. Se debe leer el
//valor de cada hora y el número de horas trabajadas por el empleado.

const valorHora = parseFloat(prompt("Ingrese el valor por hora que cobras"));

const totalHoras = parseFloat(prompt("Ingrese el total de horas realizadas"));

const salarioInicial = valorHora * totalHoras;

let salarioNeto = 0;
let descuentoPension = 0;
let descuentoSalud = 0;

if (salarioInicial < 400000) {
  descuentoPension = (salarioInicial * 3) / 100;
  descuentoSalud = (salarioInicial * 5) / 100;
} else if (salarioInicial > 800000) {
  descuentoPension = (salarioInicial * 4) / 100;
  descuentoSalud = (salarioInicial * 7) / 100;
} else {
  descuentoPension = (salarioInicial * 9) / 100;
  descuentoSalud = (salarioInicial * 7) / 100;
}

salarioNeto = salarioInicial - descuentoPension - descuentoSalud;

console.log(
  `Salario inicial: ${salarioInicial}, luego de las respectivas retenciones queda: ${salarioNeto}`,
);
