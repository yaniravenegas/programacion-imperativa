//Primer actividad (continuación clase 3)

const prompt = require("prompt-sync")({ sigint: true });

//Punto 5
//Instrucción: Solicitar que el usuario ingrese su nombre utilizando el prompt. Imprimilo en consola mostrando la etiqueta “Nombre:” seguida del valor ingresado por ejemplo “Nombre: Juan”

//Desarrollo:

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);


//Punto 6
//Instrucción: Imprimir en consola la comparación de nuestra variable cantidad de vidas restante con el valor 0.

//Desarrollo: 

let vidasRestantes = prompt("Ingrese número de vidas: ");
if (vidasRestantes === "0") {
    console.log("La comparación vidasRestantes === '0' es verdadera")
    console.log("GAME OVER");
} else {
    ("La comparación vidasRestantes === '0' es falsa")
    console.log("El juego continúa")
}

//Punto 7
//Instrucción: Descontar una vida a esa variable y volver a imprimir la comparación, además del nuevo valor de la variable.

//Desarrollo:

let vidasRestantes = prompt("Ingrese número de vidas: ");
if (vidasRestantes - 1 === 0) {
    console.log("La comparación vidasRestantes - 1 === 0 es verdadera")
    console.log("Resultado: " + (vidasRestantes - 1));
} else {
    console.log("La comparación vidasRestantes - 1 === 0 es falsa")
    console.log("Resultado: " + (vidasRestantes - 1));
}






