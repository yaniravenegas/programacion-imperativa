//Ejercicio 1

let resultado;

function verificaPares (numero1, numero2) {
    if ((numero1%2 === 0 && numero2%2 !== 0) || (numero1%2 !== 0 && numero2%2 === 0)) {
        resultado = numero1*numero2
    } else if (numero1%2 === 0 && numero2%2 === 0) {
        resultado = numero1+numero2
    } else {
        resultado = "Ninguno es par"
    } return resultado;
}

console.log(verificaPares(4,4));

// Ejercicio 2

let ciclista = [
    {
        nombre: "Matias",
        apellido: "Fuentes",
        edad: 20,
        tieneBici: true,
    },
    {
        nombre: "Matias",
        apellido: "Fuentes",
        edad: 17,
        tieneBici: true
    },
    {
        nombre: "Matias",
        apellido: "Fuentes",
        edad: 22,
        tieneBici: false
    }
]

function puedeCompetir (ciclista) { 
        if (ciclista.edad>=18 && ciclista.tieneBici===true) {
            return "Puede competir"
        } else if (ciclista.edad<18 && ciclista.tieneBici===true) {
            return "Podrá competir, pero con un adulto acompañante"
        } else {
            return "No podrá competir"
        }
}

console.log(puedeCompetir(ciclista[0]));
console.log(puedeCompetir(ciclista[1]));
console.log(puedeCompetir(ciclista[2]));

//Ejercicio 3: 

let libros = [];

let historiasInconscientes = {
    anio: 2013,
    autor: "Gabriel Rolon",
    paginas: 352
}

let elAlquimista = {
    anio: 1988,
    autor: "Paulo Coehlo",
    paginas: 192
}

let elCampamento = {
    anio: 2021,
    autor: "Blue Jeans",
    paginas: 480
}

let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
}

libros.push(historiasInconscientes, elAlquimista, elCampamento, operacionMasacre);
console.log(libros);

function agregarEpoca(arrayLibros) {
    arrayLibros.forEach(libro => {
        libro.epoca = libro.anio < 2020 ? "pre-pandemia" : "post-pandemia";
    });
}

agregarEpoca(libros);
console.log(libros);