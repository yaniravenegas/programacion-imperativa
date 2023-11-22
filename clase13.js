// Ahora bien. dado los siguientes numeros:

let num1 = 13;
let num2 = 1663;
let num3 = 3363;
let num4 = -10;
// agrega una variable mas, llamada num4
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.

function elMayor(num1, num2, num3, num4) {
  if (num1 > num2 && num1 > num3 && num1 > num4) {
    return num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4) {
    return num2;
  } else if (num3 > num1 && num3 > num2 && num3 > num4) {
    return num3;
  }
}
console.log(elMayor(num1, num2, num3, num4));

const numeritos = [5, 12, 2, 40, 33, 2, 8];
const numeros2 = [5, 56, 2, 40, 33, 2, 8];

function encontrarNumeroMayor(array) {
  let numeroMayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMayor) {
      numeroMayor = array[i];
    }
  }
  return numeroMayor;
}

console.log(encontrarNumeroMayor(numeros2));

// Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—, por la palabra “fizzbuzz”.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}

// Escriban una función que reciba dos parámetros: un array y un índice. La función deberá de mostrar por consola el valor del elemento según el índice dado. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6'. let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;

let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 9;

function buscaIndicePedido(array, index) {
    let numeroEncontrado;
    for (let i = 0; i < array.length; i++) {
        return numeroEncontrado = array[index];
    }
}

console.log(buscaIndicePedido(array, index));

// Escribir una función que, dado un número de mes, devuelva la cantidad de días de ese mes —suponiendo que no es un año bisiesto—.

function diasEnElMes (mes, año) {
    mes = mes.toUpperCase();
    var meses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL','MAYO', 'JUNIO', 'JULIO', 'AGOSTO','SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];
    return new Date(año, meses.indexOf(mes) + 1, 0).getDate();
}

console.log(diasEnElMes('mayo', 2018));

// Escribir una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.

let numero = 32443;

function invertirNumeros (numero) {
    const numeroInvertido = numero.toString().split("").reverse().join("");
    return parseFloat(numeroInvertido);
}

console.log(invertirNumeros (numero));

// Escribir una función que reciba una array y solo imprima los valores que se repiten. Por ejemplo, dada la siguiente array e índice, la función imprimirá '6,23,33,100'. let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const numeros = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const numerosDuplicados = numeros.filter((numero, posicion, numeros) => {
    return posicion !== numeros.indexOf(numero);
})

console.log(numerosDuplicados);

// numero hace referencia para cada elemento
// posicion: para las posiciones dentro del array
// numeros: hace referencia al arreglo entero
// el método indexOf verifica la posición de un elemento dentro de un arreglo y nos devuelve su índice, si no existe devuelve un -1.

