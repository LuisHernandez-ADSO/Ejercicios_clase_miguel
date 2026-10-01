// El programa tiene la lista fija de invitados:
// let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"];
// El portero escribe nombres y para cada uno el pr
// ograma dice si puede entrar. Termina cuando
// escribe "fin". Al final muestra cuántos entraron y cuántos fueron rechazados. Prohibido
// includes e indexOf.
// Ejemplo de ejecución:
// [prompt] Nombre: luisa
// luisa puede entrar
// [prompt] Nombre: jorge
// jorge no está en la lista
// [prompt] Nombre: ana
// ana puede entrar
// [prompt] Nombre: fin
// Entraron: 2
// Rechazados: 1
// Funciones sugeridas:
// • existeEnLista(lista, valor): retorna true si valor está en lista y false si no.

//entrada: un nombre
//proceso: iterar sobre los invitados y decidir: esta o no (aumentar respectivo contador)
//salida: contadores
//fin: escribir fin

const existeEnLista = (lista, valor) => {
    let existe = false
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == valor) existe = true
    }
    return existe
}

let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"];

let entraron = 0
let rechazados = 0

while (true) {
    const nombre = prompt("Ingrese un nombre (fin para terminar")
    if (nombre == "fin") break

    if (existeEnLista(invitados, nombre)) {
        console.log(`${nombre} puede entrar`);
        entraron++
    } else {
        console.log(`${nombre} no esta en la lista`);
        rechazados++
    }
}

console.log(`Entraron ${entraron}`);
console.log(`Rechazados ${rechazados}`);

