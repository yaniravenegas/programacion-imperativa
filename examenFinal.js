//Examen final

// 1. Dado el siguiente array de países

let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamérica",
    poblacion: 40000000,
  },
  {
    nombre: "Colombia",
    continente: "Sudamérica",
    poblacion: 50372000,
  },

  {
    nombre: "Brasil",
    continente: "Sudamérica",
    poblacion: 300000000,
  },
  {
    nombre: "Etiopía",
    continente: "África",
    poblacion: 15000000,
  },
  {
    nombre: "Chile",
    continente: "Sudamérica",
    poblacion: 10000000,
  },
];

// Crear una función que reciba como parámetro el arreglo de objetos, un continente y un número de población. La misma debe La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado por parámetro, y además, que su población sea mayor o igual a la del parámetro. Si no encuentra coincidencias deberá retornar un array vacío.

function retornaPaises(paises, continente, poblacion) {
  let paisesFiltrados = [];
  for (let i = 0; i < paises.length; i++) {
    if (
      paises[i].continente === continente &&
      paises[i].poblacion >= poblacion
    ) {
      paisesFiltrados.push(paises[i]);
    }
  }
  return paisesFiltrados;
}

console.log(retornaPaises(paises, "sudamérica", 10000000));

// 2. Dado el siguiente array de números:

let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

// Crear una función llamada bubbleSort que reciba como parámetros el array y un string que represente el sentido de ordenamiento, la función deberá realizar un ordenamiento interno del array según el orden indicado “ASC” lo ordenará ascendente “DESC” lo ordenará descendente. Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función.

function bubbleSort(arrayDeNumeros, string) {
  const sentidoOrdenamiento = string.toUpperCase();
  if (sentidoOrdenamiento === "ASC") {
    console.log(arrayDeNumeros);
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      for (let j = 0; j < arrayDeNumeros.length - 1; j++) {
        if (arrayDeNumeros[j] > arrayDeNumeros[j + 1]) {
          let num = arrayDeNumeros[j];
          arrayDeNumeros[j] = arrayDeNumeros[j + 1];
          arrayDeNumeros[j + 1] = num;
        }
      }
    }
  } else if (sentidoOrdenamiento === "DESC") {
    console.log(arrayDeNumeros);
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      for (let j = 0; j < arrayDeNumeros.length - 1; j++) {
        if (arrayDeNumeros[j] < arrayDeNumeros[j + 1]) {
          let num = arrayDeNumeros[j];
          arrayDeNumeros[j] = arrayDeNumeros[j + 1];
          arrayDeNumeros[j + 1] = num;
        }
      }
    }
  }
  return arrayDeNumeros;
}

console.log(bubbleSort(arrayDeNumeros, "asc"));

// 3. Dada la matriz:

let matriz = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

//a. Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1 y retorne la suma.

function sumaValoresPrimerFila() {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    suma += matriz[1][i];
  }
  return suma;
}

console.log(sumaValoresPrimerFila());

//b. Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos los valores pares de la matriz.

function retornaArrayConPares(matriz) {
  let array = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        array.push(matriz[i][j]);
      }
    }
  } return array;
}

console.log(retornaArrayConPares(matriz));
