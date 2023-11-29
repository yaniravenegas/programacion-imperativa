//1. A partir de él siguiente array de edades nos solicitan realizar lo siguiente

const edades = [33, 27, 34, 30, 34, 25];

// a. Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.

for(let i = 0; i < edades.length; i++) {
    for(let j = 0; j < edades.length - 1; j++) {
        if(edades[j] > edades[j + 1]) {
            let num = edades[j]
            edades[j] = edades[j + 1]
            edades[j + 1] = num
        }
    }
}
console.log(edades);

// b. Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.

for(let i = 0; i < edades.length; i++) {
    for(let j = 0; j < edades.length - 1; j++) {
        if(edades[j] < edades[j + 1]) {
            let num = edades[j]
            edades[j] = edades[j + 1]
            edades[j + 1] = num
        }
    }
}
console.log(edades);

//2. Dado un array de strings:

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

//¿Cómo pudieras ordenar el array anterior, alfabéticamente?

for(let i = 0; i < letras.length; i++) {
    for(let j = 0; j < letras.length - 1; j++) {
        if(letras[j] > letras[j + 1]) {
            let letra = letras[j]
            letras[j] = letras[j + 1]
            letras[j + 1] = letra
        }
    }
}
console.log(letras);

//3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:

const arrayCuentas = [
    {
        titular: "Arlene Bar", 
        estaHabilitada: false, 
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres", 
        estaHabilitada: false, 
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez", 
        estaHabilitada: true, 
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone", 
        estaHabilitada: false, 
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon", 
        estaHabilitada: true, 
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell", 
        estaHabilitada: true, 
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

//a. Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado.

for(let i = 0 ; i < arrayCuentas.length; i++){
    for(let j = 0 ; j < arrayCuentas.length - 1 ; j++){
        if(arrayCuentas[j].saldo > arrayCuentas[j + 1].saldo){
            let persona = arrayCuentas[j]
            arrayCuentas[j] = arrayCuentas[j + 1]
            arrayCuentas[j + 1] = persona
        }
    }
}

console.log(arrayCuentas);

//b. Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

for(let i = 0 ; i < arrayCuentas.length; i++){
    for(let j = 0 ; j < arrayCuentas.length - 1 ; j++){
        if(arrayCuentas[j].edadTitular > arrayCuentas[j + 1].edadTitular){
            let persona = arrayCuentas[j]
            arrayCuentas[j] = arrayCuentas[j + 1]
            arrayCuentas[j + 1] = persona
        }
    }
}

console.log(arrayCuentas);