// El programa arranca con este objeto:
// let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa",
// ciudad: "San Gil" };
// El usuario escribe qué dato quiere cambiar y el valor nuevo. Si la clave no existe, se avisa y no
// se crea. Se repite hasta que escriba "fin". Al final se muestra el perfil.
// Ejemplo de ejecución:
// [prompt] ¿Qué dato quieres cambiar? barrio
// [prompt] Nuevo valor: Pablo VI
// Actualizado: barrio = Pablo VI
// [prompt] ¿Qué dato quieres cambiar? correo
// El dato correo no existe
// [prompt] ¿Qué dato quieres cambiar? fin
// Perfil final:
// Nombre: Jorge Díaz
// Teléfono: 3001234567
// Barrio: Pablo VI
// Ciudad: San Gil
// Funciones sugeridas:
// • existeClave(objeto, clave): retorna true o false.
// • actualizarDato(objeto, clave, valor): modifica el objeto.
// • mostrarCliente(cliente): imprime el perfil.

//entrada:nueva clave y valor
//proceso: Verificar si la clave existe, terminar si escribe "fin",
//salida: mostrar los cambios y el objeto final

const existeClave = (objeto, clave) => {

    if (objeto[clave] != undefined) {
        return true
    } else return false

}

const actualizarDato = (objeto, clave, valor) => {
    objeto[clave] = valor
}

const mostrarCliente = (cliente) => {
    //iterar por cada atributo del objeto
    //imprimir su clave valor
    
    console.log(`Nombre: ${cliente.nombre}`);
    console.log(`Telefono: ${cliente.telefono}`);

    console.log(`Barrio: ${cliente.barrio}`);
    console.log(`Ciudad: ${cliente.ciudad}`);

}

let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa", ciudad: "San Gil" };

while (true) {
    let clave = prompt("Ingrese el dato a cambiar")

    clave = clave.toLowerCase()

    if (clave == "fin") {
        mostrarCliente(cliente)
        break
    }

    existe = (existeClave(cliente, clave))

    if (existe) {
        let valor = prompt(`Nuevo valor`)
        actualizarDato(cliente, clave, valor)

    } else console.log(`El dato ${clave} no existe`);

}