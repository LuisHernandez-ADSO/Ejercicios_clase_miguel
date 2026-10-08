// Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la
// cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el
// primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km
// y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en
// cobertura".
// Ejemplo de ejecución:
// [prompt] ¿Cuántos pedidos? 6
// [prompt] Distancia 1: 2.5
// [prompt] Distancia 2: 7
// [prompt] Distancia 3: 1.2
// [prompt] Distancia 4: 12
// [prompt] Distancia 5: 3
// [prompt] Distancia 6: 15
// Envío gratis (3): 2.5, 1.2, 3
// Pagan envío: 1
// Primer pedido fuera de cobertura: 12 km
// Funciones sugeridas:
// • obtenerEnvioGratis(distancias): con filter.
// • contarConEnvio(distancias): con filter y length.
// • buscarPrimeroFuera(distancias): con find.

//entrada: n distacias de pedidos
//proceso: con filter ver las distancias <= 3 para los envios gratis, con find el la distncia>10, cuantos pagan envio distancia > 3 and <=10
//salida: los datos

const obtenerEnvioGratis = (distancias) => {
    let envioGratis = distancias.filter((distancia) => distancia <= 3)
    return envioGratis
}

const contarConEnvio = (distancias) => {
    let enviosEnMargen = distancias.filter((distancia) => (distancia > 3 && distancia < 10))
    return enviosEnMargen.length
}

const buscarPrimeroFuera = (distancias) => {
    let primeroFuera = distancias.find((distancia) => distancia > 10)
    return primeroFuera
}

const cantidadPedidos = parseInt(prompt("Ingrese la cantidad de pedidos"))

let pedidos = []

for (let i = 1; i <= cantidadPedidos; i++) {
    pedidos.push(parseFloat(prompt(`Distancia ${i}`)))
}

let envioGratis = obtenerEnvioGratis(pedidos)

console.log(`Envio gratis ${envioGratis.length}: ${envioGratis}`);
console.log(`Pagan envio: ${contarConEnvio(pedidos)}`);
console.log(`Primer pedido fuera de cobertura: ${buscarPrimeroFuera(pedidos)} km`);
