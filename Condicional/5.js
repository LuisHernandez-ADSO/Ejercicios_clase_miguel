//El mismo ejercicio anterior, pero ahora el rango esta entre A y B, deben tener en
//cuenta que si A es mayor que B, el programa debe enviar un error.

const numero = parseFloat(prompt("Ingrese un numero a evaluar"));

const numeroA = parseInt(prompt("Ingrese un numero para A"));

const numeroB = parseInt(prompt("Ingrese un numero para B"));

if (numeroA > numeroB)
  console.log(
    `El valor de A (${numeroA}) NO puede ser mayor que el valor de B (${numeroB})`,
  );
else if (numero >= numeroA && numero <= numeroB)
  console.log(`${numero} SI esta entre ${numeroA} y ${numeroB}`);
else console.log(`${numero} NO esta entre ${numeroA} y ${numeroB}`);
