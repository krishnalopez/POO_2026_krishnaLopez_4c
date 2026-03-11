// Bloque 1: Calentamiento (Lógica Básica)
// 1. El Portero Digital
// Crea una variable edad. Si la edad es 18 o más,
// muestra por consola: "Acceso permitido a la App". Si es menor, muestra: 
//   console.log("Acceso concedido. Eres mayor de edad.");
// "Acceso denegado: necesitas ser mayor de edad".
function porteroDigital() {
    let edad = parseInt(prompt("Ingresa tu edad"));
    if (edad >= 18) {
        alert("Acceso concedido. Eres mayor de edad.");
    } else if (edad <= 17 && edad > 0) {
        alert("Acceso denegado. Eres menor de edad.");
    } else {
        alert("Ingrese valores validos")
    }
}
/*2. Validador de Nombres
Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
 */
function validadorNombres() {
    let nombre = prompt("Ingresa tu nombre");
    let usuarios = [];
    if (nombre !== "") {
        usuarios.push(nombre);
        alert(`Hola ${usuario}`);
    } else {
        alert("Error: El nombre no puede estar en blanco");
    };
};

/*3. El Filtro de Duplicados
Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
 */
function reordenarDatos() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = "celular";

    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario");
    } else {
        alert("El producto no está en el inventario");
    }
}

// 4. Control de Stock Máximo
// Imagina que una bodega solo tiene espacio para 5 cajas.
// let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
// Si el tamaño de la bodega (.length) es mayor a 5, 
// elimina la última caja con .pop() y 
// muestra: "Bodega llena, eliminando último ingreso".
// Si es 5 o menos, muestra: "Espacio disponible".
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];

function controlStock() {
    if (bodega.length <= 5) {
        alert("Espacio disponible")
    } else {
        alert("Bodega llena, eliminando último ingreso")
        bodega.pop();
    }
}
/*5. Limpieza de Datos
A veces recibimos datos 
basura. let colaEspera = ["error_404", "Juan", "Sofía"];
Si el primer elemento (índice 0)
es igual a "error_404", elimínalo usando .shift()
y muestra la cola limpia.
Si no, muestra: "La lista de espera está correcta".
 */
let colaEspera = ["error_404", "Juan", "Sofía"];
function limpiezaDatos() {
    if (colaEspera[0] == "error_404") {
        colaEspera.shift()
    }
    alert(`Cola de espera limpia: ${colaEspera.join(" - ")}`)
}

/*6. Acceso VIP
Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
Si el rol es "Admin", agrega el nombre al inicio de la lista con .unshift() para que tenga prioridad.
Si no es Admin, agrégalo al final con .push().
 */

function accesoVip() {
    let foro = ["User1", "User2"];
    let rol = prompt("Iingrese rol:");
    if (rol.toLocaleLowerCase() === "admin") {
        foro.unshift(rol);
        alert(foro);
    } else {
        foro.push(rol);
        alert(foro);
    }
}

/*7. Sistema de Calificaciones Chile (Escala 1 a 7)
Crea una variable nota.
Si la nota es 6 o superior: "Excelente, eximido".
Si la nota es entre 4 y 5.9: "Aprobado, vas a examen".
Si es menor a 4: "Reprobado".
(Pista: Usa else if).
 */
function calificacionChile() {
    let nota = parseFloat(prompt("Ingrese la nota:"));
    if (nota >= 6 && nota <= 7) {
        alert("Excelente, eximido")
    } else if (nota >= 4 && nota >= 5.9) {
        alert("Aprobado, vas a examen")
    } else if (nota < 4 && nota >= 1) {
        alert("Reprobado")
    } else {
        alert("Ingrese un valor valido")
    }
}
/* 8. Buscador de Invitados
let invitados = ["Ana", "Luis", "Camila", "Diego"];
Crea una variable persona.
Si la persona está en la lista, muestra: "¡Bienvenido/a [nombre]! Pasa a la fiesta".
Si no está, muestra: "Lo siento, no estás en la lista de invitados".
*/
function buscardorInvitados() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];
    let personas = prompt("Ingrese su nombre: ")
    if (invitados.includes(personas)) {
        alert(`¡Bienvenido/a ${personas}! Pasa a la fiesta`);
    } else {
        alert("Lo siento, no estás em la lista de invitados");
    }
}
//9
function almacenMaterices() {
    let estanteria = [["Manzanas", "Peras"], ["Leche", "Yogur"]];
    let seccion = prompt("Ingresar una seccion(0-1)");
    let productos = prompt("Ingresar productos selecionados");
    if (seccion !== 0 || secion !== 1) {
        alert("No tenemos esta seccion")
    } else if (estanteria[seccion].includes(productos)) {
        alert("Productos encontrado en el estante")
    } else {
        alert("No tenemos ese producto en esa sección")
    }
}
//10
