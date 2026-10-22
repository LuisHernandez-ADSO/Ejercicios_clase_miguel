//     El programa arranca con este glosario:
// let glosario = {
//  api: "Conjunto de reglas para que dos programas se comuniquen.",
//  servidor: "Programa que recibe peticiones y devuelve respuestas.",
//  ruta: "Dirección a la que llega una petición, como /productos.",
//  middleware: "Función que se ejecuta entre la petición y la respuesta.",
//  endpoint: "Combinación de un método HTTP y una ruta."
// };
// El usuario escribe términos hasta "fin" y el programa muestra la definición, sin importar
// mayúsculas. Si el término no está, pregunta si quiere agregarlo y, si sí, pide la definición y lo
// agrega. Al final dice cuántos términos tiene el glosario.
// Ejemplo de ejecución:
// [prompt] Término: API
// api: Conjunto de reglas para que dos programas se comuniquen.
// [prompt] Término: cookie
// "cookie" no está en el glosario
// [prompt] ¿Quieres agregarlo? (si/no): si
// [prompt] Definición: Dato pequeño que el servidor guarda en el navegador.
// Agregado
// [prompt] Término: fin
// El glosario tiene 6 términos
// Funciones sugeridas:
// • buscarDefinicion(glosario, termino): retorna la definición o undefined.
// • contarClaves(objeto): la del ejercicio 5


const buscarDefinicion = (glosario, termino) => {
    let definición = undefined
    for (const key in glosario) {

        if (key == termino) {
            definición = glosario[key]
            return definición
        }
    }
    return definición
}

const contarClaves = (objeto) => {
    let count = 0

    for (let clave in objeto) {
        count++
    }
    return count
}

let glosario = {
    api: "Conjunto de reglas para que dos programas se comuniquen.",
    servidor: "Programa que recibe peticiones y devuelve respuestas.",
    ruta: "Dirección a la que llega una petición, como /productos.",
    middleware: "Función que se ejecuta entre la petición y la respuesta.",
    endpoint: "Combinación de un método HTTP y una ruta."
};

while (true) {
    let termino = prompt("Termino")
    termino = termino.toLowerCase()

    if (termino == "fin") {
        console.log(contarClaves(glosario));
        break;
    }

    const existe = buscarDefinicion(glosario, termino)

    if (existe != undefined) {
        console.log(existe);

    } else {
        console.log(`El termino "${termino}" no esta en el glosario`);
        const agregar = prompt("¿Quiere agregarlo? (si/no)")

        if (agregar == "si") {
            const definicion = prompt(`Ìngrese la definicion de ${termino}`)
            glosario[termino] = definicion
        }
    }
}