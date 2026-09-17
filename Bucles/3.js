// Calcular el número de pulsaciones que deben tener N personas por cada 10 segundos de
// ejercicio aeróbico; la fórmula que se aplica cuando el sexo es femenino es:
// num.pulsaciones = (220 - edad)/10,
// Y si el sexo es masculino:
// num. pulsaciones = (210 - edad)/10

while (true) {
    let num_pulsaciones = 0
    let edad = ""
    let genero = prompt(`Ingrese el genero femenino/masculino otro valor rompe el ciclo`)

    if (genero == "femenino") {
        edad = parseInt(prompt(`"Ingrese la edad de esta personita`))
        num_pulsaciones = (220 - edad) / 10

    } else if (genero == "masculino") {
        edad = parseInt(prompt(`"Ingrese la edad de esta personita`))
        num_pulsaciones = (210 - edad) / 10

    } else break;

    console.log(`El numero de pulsaciones para ${genero} con ${edad} años son: ${num_pulsaciones} pulsaciones`);
}