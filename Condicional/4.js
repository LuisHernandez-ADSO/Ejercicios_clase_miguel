//Programa que lea un número por pantalla e indique si el número leído está
//comprendido entre 10 y 50.

const numero = parseFloat(prompt("Ingrese un numero"));

if (numero >= 10 && numero <= 50)
  console.log(`El ${numero} si esta comprendido entre 10 y 50`);
else console.log(`El ${numero} no esta comprendido entre 10 y 50`);
