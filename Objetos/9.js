// El programa arranca con estos dos objetos:
// let cliente = {
//  nombre: "Laura Gómez",
//  telefonos: ["3104567890", "6077241234"],
//  direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }
// };
// let clienteNuevo = { nombre: "Pedro Ruiz", telefonos: [] };
// Mostrar la ficha de cliente, leer un teléfono nuevo, un barrio y una calle nuevos, actualizar el
// objeto y volver a mostrar la ficha. Al final, mostrar la ciudad de clienteNuevo usando la misma
// función que con cliente, sin que el programa se rompa.
// Ejemplo de ejecución:
// --- Antes ---
// Laura Gómez
// Teléfonos: 3104567890, 6077241234
// Dirección: Calle 12 # 9-45, Centro, San Gil
// [prompt] Nuevo teléfono: 3158889900
// [prompt] Nuevo barrio: Villa Olímpica
// [prompt] Nueva calle: Carrera 5 # 20-10
// --- Después ---
// Laura Gómez
// Teléfonos: 3104567890, 6077241234, 3158889900
// Dirección: Carrera 5 # 20-10, Villa Olímpica, San Gil
// Ciudad de Pedro Ruiz: sin dirección
// Funciones sugeridas:
// • mostrarFicha(cliente): imprime la ficha.
// • cambiarDireccion(cliente, calle, barrio): modifica la dirección.
// • obtenerCiudad(cliente): retorna la ciudad o el texto "sin dirección"

//entrada:los nuevos valores a los valores de la respectiva clave
//proceso: Llegar al arreglo de direccion y reemplazar los valores de la respectiva clave
//salida: retornar los objetos modificados

const mostrarFicha = (cliente) => {
    let direcciones = ""
    for (const key in cliente) {
        if (key != "direccion") {
            console.log(`${key} : ${cliente[key]}`);
        } else {
            for (const i in cliente.direccion) {
               direcciones += `${cliente.direccion[i]} `
            }
            console.log(direcciones);
            
        }
    }
}



const cambiarDireccion = (cliente, nuevaCalle, nuevoBarrio) => {

    cliente.direccion.calle = nuevaCalle
    cliente.direccion.barrio = nuevoBarrio

}

const obtenerCiudad = (cliente) => {
    if (cliente.direccion) {
        return cliente.direccion.ciudad
    }
    return `sin direccion`
}


let cliente = {
    nombre: "Laura Gómez",
    telefonos: ["3104567890", "6077241234"],
    direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }
};

let clienteNuevo = { nombre: "Pedro Ruiz", telefonos: [] };

mostrarFicha(cliente)

let telefono = prompt("Nuevo telefono")
let barrio = prompt("Nuevo barrio")
let calle = prompt("Nueva calle")

cliente.telefonos.push(telefono)
cambiarDireccion(cliente, calle, barrio)

mostrarFicha(cliente)
mostrarFicha(clienteNuevo)

console.log(`Ciudad de ${cliente.nombre} ${obtenerCiudad(cliente)}`);

console.log(`Ciudad de ${clienteNuevo.nombre} ${obtenerCiudad(clienteNuevo)}`);

