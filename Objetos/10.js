// Parte A. Copia este código y, antes de ejecutarlo, escribe en un comentario lo que crees que
// imprime la última línea y por qué. Después ejecútalo. Si te equivocaste, explica en otro
// comentario qué fue lo que no viste. Equivocarse aquí no resta: dejarlo sin explicar sí.


let pedido = { cliente: "Ana", total: 30000, entrega: { barrio: "Centro", hora: "7:00pm" } };

let copia1 = pedido;

copia1.total = 45000;

let copia2 = { cliente: pedido.cliente, total: pedido.total, entrega: pedido.entrega};

copia2.cliente = "Luis";

copia2.entrega.barrio = "La Playa";

console.log(pedido.total, pedido.cliente, pedido.entrega.barrio);
// como me paso en un ejercicio que las copias de objetos modifican la original, la salida debe ser:
//45000, Luis, La Playa

//Luego de ejecutar, el error fue en el nombre y tuve un error al momento de editar el barrio
//No tuve en cuenta que copia2 es un objeto diferente a pedido, copia2 solo copia los valores, no el objeto completo
//por lo que editar copia2 no modifica pedido, esto explica que pedido siga con cliente Ana

//pero al modificar el barrio de copia2 se estaba modificando el objeto dentro de pedido, es decir,
//pedido2 si copia el objeto entrega de pedido (no el objeto pedido), entonces al editar copia2, este va
//al objeto entrega de pedido y lo modifica (en pedido).
//entonces esto ocurre al copiar objetos completos como entrega y no al copiar valores.

// Parte B. Escribe una función que haga una copia completa del pedido, de modo que cambiar el
// barrio de la copia no afecte el original. Pruébala.
// Ejemplo de ejecución:
// (Salida de la parte B, con el pedido original de la parte A antes de modificarlo)
// Barrio del original: Centro
// Barrio de la copia: La Playa
// Funciones sugeridas:
// • clonarEntrega(entrega): retorna un objeto entrega nuevo.
// • clonarPedido(pedido): retorna un pedido nuevo usando clonarEntrega

const clonarEntrega = (entrega) =>{

}

const clonarPedido = (pedido) =>{
    
}