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
function validadorNombres(){
    let nombre = prompt("Ingresa tu nombre");
    if (nombre == " ") 
}
