//Calcular el peso equivalente en Gramos de una fruta que tiene un peso no
//conocido en Kilogramos, sólo si el peso sobrepasa los 5 kilogramos, de lo contrario
//calcular el equivalente en onzas. 16 onzas son una libra. 2 libras son 1 kilogramo.
//Un kilogramo son 1000 gramos.

const pesoKilogramos = parseFloat(prompt("Ingrese el peso de la fruta en KG"));

if (pesoKilogramos > 5) {
  let pesoGramos = pesoKilogramos * 1000;
  console.log(`El peso de la fruta en gramos es ${pesoGramos}`);
} else {
  let pesoOnza = pesoKilogramos * 32;
  console.log(`El peso en onzas es ${pesoOnza}`);
}
