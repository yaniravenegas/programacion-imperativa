//Desarrollo Agregá Caminos

if (edad<0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} if (edad>=0 && edad<18) {
    console.log("No puede pasar al bar.")
} if (edad>=18 && edad<21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} if (edad==21) {
    console.log("Felicidades por alcanzar la mayoría de edad. Puede pasar al bar y tomar alcohol.")
} if (edad % 2 != 0) {
    console.log("¿Sabías que tu edad es impar?")
} else {
    console.log("Puede pasar al bar y tomar alcohol.")
}

//Desarrollo totalAPagar()

let total;
let vehiculo = "moto";
let litrosConsumidos = 30;

function totalAPagar(vehiculo, litrosConsumidos) {
    if (vehiculo === "coche") {
    total = litrosConsumidos * 86;
} else if (vehiculo === "moto") {
    total = litrosConsumidos * 70;
} else if (vehiculo === "autobús") {
    total = litrosConsumidos * 55;
} if (litrosConsumidos >= 0 && litrosConsumidos < 25) {
    total += 50;
} else if (litrosConsumidos >= 25) {
    total += 25;
} 
console.log("Total a pagar: $" + total);
}

totalAPagar(vehiculo, litrosConsumidos);

//Desarrollo Local de sándwiches

let totalSandwich = 0;
const preciosAdicionales = {
    queso: 20,
    tomate: 15,
    lechuga: 10,
    cebolla: 15,
    mayonesa: 5,
    mostaza: 5
};
let sandwichBase = "pollo";
let tipoPan = "carne"
let ingredientesAdicionales = [true, false, true, false, true, false]

function costoSandwich (sandwichBase, tipoPan, ingredientesAdicionales) {
    if (sandwichBase === "pollo") {
        totalSandwich += 150;
    } else if (sandwichBase === "carne") {
        totalSandwich += 200;
    } else if (sandwichBase === "veggie") {
        totalSandwich += 100;
    }
    
    if (tipoPan === "blanco") {
        totalSandwich += 50;
    } else if (tipoPan === "negro") {
        totalSandwich += 60;
    } else if (tipoPan === "s/gluten") {
        totalSandwich += 75;
    }
    for (let i =0; i < ingredientesAdicionales.length; i++) {
        if (ingredientesAdicionales[i]) {
            const ingrediente = Object.keys(preciosAdicionales)[i];
            totalSandwich += preciosAdicionales[ingrediente];
        }
    }
    return totalSandwich;
}
costoSandwich (sandwichBase, tipoPan, ingredientesAdicionales);
console.log("El costo total del sándwich es: $" + totalSandwich);

//Desarrollo Número secreto

const prompt = require("prompt-sync")({ sigint: true });

let numeroIngresado = parseInt(prompt("Ingrese el número: "));

const numeroSecreto = Math.floor(Math.random()*10)+1;

function AdivinaElNumero (numeroSecreto, numeroIngresado) {
    if (numeroSecreto === numeroIngresado) {
        console.log("¡Felicidades, adivinaste el número secreto!")
    } else {
        console.log("Lo siento, no acertaste. El número secreto era: "+ numeroSecreto)
    }
}
AdivinaElNumero(numeroSecreto, numeroIngresado);

//Desarrollo abrirParacaidas()
const prompt = require("prompt-sync")({ sigint: true });

let velocidad = parseInt(prompt("Ingrese la velocidad: "));
let altura = parseInt(prompt("Ingrese la altura: "));

function abrirParacaidas (velocidad, altura) {
    if (velocidad<1000 && altura>=2000 && altura<3000) {
        console.log("Abrir Paracaídas")
    } else {
        console.log("No abrir paracaídas")
    }
}

abrirParacaidas(velocidad, altura);

//Desarrollo Traductor Condicional

const prompt = require("prompt-sync")({ sigint: true });
let palabra = prompt("Ingrese la palabra a traducir: ");

switch (palabra) {
    case "perro": console.log("dog");
    break;
    case "árbol": console.log("tree");
    break;
    case "pelota": console.log("ball");
    break;
    case "genio": console.log("genius");
    break;
    case "casa": console.log("house");
    break;
    default: console.log("La palabra ingresada no es válida para la traducción, favor ingrese una palabra válida.")
}

//Desarrollo Valoración de Películas

const prompt = require("prompt-sync")({ sigint: true });
let valoracion = prompt("¿Cómo evalúa la película que acaba de ver?: ");

switch (valoracion) {
    case "Muy Mala": console.log("Calificaste la película como Muy Mala. Lo lamentamos mucho. Gracias por su visita.");
    break;
    case "Mala": console.log("Calificaste la película como Mala. Lo lamentamos mucho. Gracias por su visita.");
    break;
    case "Mediocre": console.log("Calificaste la película como Mediocre. Lo lamentamos mucho. Gracias por su visita.");
    break;
    case "Buena": console.log("Calificaste la película como Buena. Nos da gusto que la hayas disfrutado. Gracias por su visita.");
    break;
    case "Muy buena": console.log("Calificaste la película como Muy buena. Nos da gusto que la hayas disfrutado. Gracias por su visita.");
    break;
    default: console.log("Ingresaste un valor inválido.")
}

