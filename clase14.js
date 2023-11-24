/* let matriz = [
  [1, 2, 3, 4, 5], //primer subarreglo - 0
  [6, 7, 8, 9, 10], // segundo subarreglo - 1
  [11, 12, 13, 14, 15], // tercer subarreglo - 2
  [16, 17, 18, 19, 20], //cuarto subarreglo - 3
  [21, 22, 23, 24, 25], // quinto subarreglo - 4
];

console.table(matriz);
console.log(matriz[1]); // mostrar fila de index 1

matriz[1][1] = 9; // Cambiar el numero 7 por un 9
console.table(matriz);

matriz[1][1] = 7; // Cambiar el numero 7 por un 9
console.table(matriz); */

// para recorrer una matriz se requiere un doble for o anidación de for loop para que recorra entre los arreglos de la matriz y luego entre los elementos de cada subarreglo

/* for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
} */

// recorrer la matriz y mostrar por consola los numeros que sean pares
/* 
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] % 2 === 0) {
            console.log(matriz[i][j]);
        }
    }
} */

// crear una función que cree una matriz de 10 x 10

/* function generarMatriz10x10 () {
    let array = []
    for(let i = 0; i <= 90; i+= 10) {
        let filas = []
        for (let j = 1; j <= 10; j++) {
            filas.push(i + j)
        } array.push(filas)
    } return array
}

console.table(generarMatriz10x10()); */

// otra forma de lograr la matriz de 10 x 10

function generarMatrizde10x10() {
  // Inicializar una matriz vacía
  let matriz = [];
  // Inicializar un valor de inicio para llenar la matriz
  let valor = 1;
  // Bucle externo para iterar sobre las filas (10 filas en total)
  for (let i = 0; i < 10; i++) {
    // Inicializar una fila vacía para cada iteración del bucle externo
    let fila = [];
    // Bucle interno para iterar sobre las columnas (10 columnas en total)
    for (let j = 0; j < 10; j++) {
      // Agregar el valor actual al final de la fila
      fila.push(valor);
      // Incrementar el valor para la próxima iteración
      valor++;
      // Agregar la fila completa a la matriz
    }
    matriz.push(fila);
    // Devolver la matriz generada
  }
  return matriz;
}

console.table(generarMatrizde10x10());

//Mesa de Trabajo

//1- Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro de una matriz. https://codesandbox.io/s/mesa-17-ejercicio-1-forked-z4u7rb?file=/src/index.js

/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

let matriz = [
  [1, 2, 3, 4, 5], //primer subarreglo - 0
  [6, 7, 8, 9, 10], // segundo subarreglo - 1
  [11, 12, 13, 14, 15], // tercer subarreglo - 2
  [16, 17, 18, 19, 20], //cuarto subarreglo - 3
  [21, 22, 23, 24, 25], // quinto subarreglo - 4
];

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    suma += matriz[i][j];
  }
}

console.log(suma);

//2- Dada el siguiente cuadro, armar la matriz de 10x10

let matriz2 = [];
let valor = 1;

for (let i = 0; i < 10; i++) {
  let fila = [];
  for (let j = 0; j < 10; j++) {
    fila.push(valor);
    valor++;
  }
  matriz2.push(fila);
}

console.table(matriz2);

//a) crear una función que retorne la suma de todos los elementos de la matriz.

function devolverSuma() {
  let suma = 0;
  for (let i = 0; i < matriz2.length; i++) {
    for (let j = 0; j < matriz2[i].length; j++) {
      suma += matriz2[i][j];
    }
  }
  return suma;
}

console.log(devolverSuma());

//3- Por último, vamos a generar dos funciones:
//a) crear una función que nos retorne la sumatoria de la primer y última columna (sumar la primera Y y la última)

function sumaPrimerYUltimaColumna() {
  let suma = 0;
  for (let i = 0; i < matriz2.length; i++) {
    suma += matriz2[i][0];
  }
  for (let i = 0; i < matriz2.length; i++) {
    let ultimaColumna = matriz2[i].length - 1;
    suma += matriz2[i][ultimaColumna];
  }
  return suma;
}

console.log(sumaPrimerYUltimaColumna());

//b) crear una función que nos retorne la sumatoria de la quinta y sexta fila (la suma de ambas)

function sumaQuintaYSextaFila() {
  let suma1 = 0;
  let suma2 = 0;
  let sumaTotal = 0;
  for (let i = 0; i < matriz2[4].length; i++) {
    suma1 += matriz2[4][i];
    suma2 += matriz2[5][i];
    sumaTotal = suma1 + suma2
  }
  return sumaTotal;
}

console.log(sumaQuintaYSextaFila());

//c) Una va a sumar los valores en la diagonal marcada en rojo.

function sumarDiagonalRoja () {
    let suma = 0;
    for (let i = 0; i < matriz2.length; i++) {
        suma += matriz2[i][i];
    } return suma
}

console.log(sumarDiagonalRoja())

//d) La otra va a marcar los valores de la diagonal marcada en verde.

function marcarDiagonalVerde () {
    let columna = matriz2[0].length - 1
    for (let i = 0; i < matriz2.length; i++) {
        matriz2[i][columna - i] = "X";
    }
}

marcarDiagonalVerde(matriz2);
console.table(matriz2);