// Calcula el promedio de los precios con reduce(). Si el promedio 
// es mayor a 100, crea un nuevo array
// con los precios menores al promedio.
// Datos
// const precios = [120, 80, 250, 60, 90];
// Resultado esperado
// // promedio: 120
// // [80, 60, 90]

// Pregunta de análisis: ¿Qué pasa con tu código si el array de 
// precios está vacío? ¿Cómo lo evitas?

//uso reduce para obtener el valor del promedio, luego uso filter para
//guardar solo los que sean menores al promedio
// evaluo si esta vacio no hago nada, si tiene almenos un elemento evaluo

const precios = [120, 80, 250, 60, 90];

if (precios.length > 0) {
    const sumatoria = precios.reduce((sumatoria, i) => sumatoria + i, 0)

    const promedio = sumatoria / precios.length

    console.log(promedio);


    if (promedio > 100) {
        const preciosMenores = precios.filter(value => (value < promedio));
        console.log(preciosMenores);
    }

}else console.log(`Array vacio`);




