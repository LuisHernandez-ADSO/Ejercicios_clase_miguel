//Una persona ingresa a un gimnasio pesando una cantidad desconocida. Luego de
//una sesión de trabajo redujo su peso en un 10%, posteriormente, asistió a una
//última sesión en la que rebajó 18.5%. En un período de 8 días de inactividad
//aumentó un 3% de su peso. Calcular e imprimir cada una de las disminuciones, el
//aumento y el peso actual de esa persona, además imprima si tiene sobrepeso o no.
//Nota: El límite es hasta 78 kg).

const pesoInicial = parseFloat(
  prompt("Ingrese su peso antes de comenzar el entrenamiento"),
);

const primeraDisminucion = (pesoInicial * 10) / 100;
const pesoPrimeraSesion = pesoInicial - primeraDisminucion;

const segundaDisminucion = (pesoPrimeraSesion * 18.5) / 100;
const pesoUltimaSesion = pesoPrimeraSesion - segundaDisminucion;

const primerAumento = (pesoUltimaSesion * 3) / 100;
const pesoFinal = pesoUltimaSesion + primerAumento;

console.log(`El peso inicial fue ${pesoInicial}`);
console.log(`La primera disminucion fue de ${primeraDisminucion}`);
console.log(`La segunda disminucion fue de ${segundaDisminucion}`);
console.log(`El primer aumento fue de ${primerAumento}`);

console.log(`El peso final es: ${pesoFinal}`);

if (pesoFinal > 78) console.log(`Tiene sobrepeso`);
else console.log(`No tiene sobre peso`);
