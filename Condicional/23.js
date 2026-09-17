// Calcular el salario neto de empleado sabiendo que se le hace una retención del
// 25%. Imprima un mensaje que diga si gana más del mínimo, gana menos o gana el
// salario mínimo.

const salarioBruto = parseFloat(
  prompt("ingrese el salario que le pagan sin las retenciones"),
);

const salarioNeto = salarioBruto - (salarioBruto * 25) / 100;

if (salarioNeto > 1750905) console.log("Gana mas del minimo");
else if (salarioNeto < 1750905) console.log("Gana menos del minimo");
else console.log("gana el minimo");
