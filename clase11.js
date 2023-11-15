// Autor: Yanira Venegas

/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO

/* let multiplos = [];

function encontrarMultiplos (numero, limite) {
    for (let i = 0; i < limite; i++) {
        multiplos.push(numero * i);
    } return multiplos;
}

console.log(encontrarMultiplos(2, 10)); */

/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
// Crear arreglo de objetos estudiantes
// Función para calcular el promedio de notas (está como método de la propiedad promedioEstudiante)

/* let promedioAprobacion = 70;

let estudiantes = [
  {
    nombre: "Javier",
    notas: [20, 30, 40, 50],
    aprobado: false,
    calculoPromedio: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      return promedio;
    },
    promedioCalculado: 0,
  },
  {
    nombre: "Oscar",
    notas: [70, 70, 40, 60],
    aprobado: false,
    calculoPromedio: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      return promedio;
    },
    promedioCalculado: 0,
  },
  {
    nombre: "Francisca",
    notas: [80, 50, 20, 90],
    aprobado: false,
    calculoPromedio: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      return promedio;
    },
    promedioCalculado: 0,
  },
  {
    nombre: "Daniela",
    notas: [70, 80, 70, 70],
    aprobado: false,
    calculoPromedio: function () {
      let suma = 0;
      for (let i = 0; i < this.notas.length; i++) {
        suma += this.notas[i];
      }
      let promedio = suma / this.notas.length;
      return promedio;
    },
    promedioCalculado: 0,
  },
];

estudiantes.forEach((estudiante) => {
  estudiante.promedioCalculado = estudiante.calculoPromedio();
}); */

//console.log(estudiantes);

// Función para determinar si el estudiante aprobó

/* function aprobados(array) {
  array.forEach(function(estudiante, indice) {
    if (estudiante.promedioCalculado < 70) {
      estudiante.aprobado = false;
    } else {
      estudiante.aprobado = true;
    }
  });
} */

// Calcular si los estudiantes aprobaron o no

/* aprobados(estudiantes); */

// Imprimir estado de aprobación de los estudiantes

/* console.log(estudiantes); */

/* Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo. */

/* let numeros = [2, 4, 5, 9, 9, 11, 4];
let i = 0;
let suma = 0;

function sumaDePares(arreglo) {
  while (i < arreglo.length) {
    if (numeros[i] % 2 === 0) {
      suma += numeros[i];
    }
    i++;
  }
  if (suma === 0) {
    console.log("Este arreglo no contiene números pares");
  }
  return suma;
}

console.log(sumaDePares(numeros)); */

/* Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación: */

/* //Primero se crea una variable llamada numeros2 que va a corresponder al arreglo de números que va a evaluar la función
let numeros2 = [2, 4, 5, 9, 9, 11, 4];
// Se declara el contador que utilizará el bucle while en 0, para que empiece desde el primer elemento del arreglo.
let i = 0;
// se declara e inicializa la variable producto en 1, luego este valor cambiará según el resultado de la función.
let producto = 1;

// creamos una función declarada que se llama productoDePares, que recibirá como parámetro de entrada un arreglo
function productoDePares(arreglo) {
// Se utiliza el bucle while, que va a continuar evaluando la condición mientras el número de iteraciones sea menor a la cantidad de elementos del arreglo
    while (i < arreglo.length) {
// Establecemos una condición mediante estructura if, donde le indicamos que evalúe que el módulo del elemento del arreglo es estrictamente igual a 0    
        if (arreglo[i] % 2 === 0) {
// De cumplirse la condición del if, se ejecuta el siguiente código, donde en la primera ejecución producto = 1 * elemento del arreglo. Mientras se siga ejecutando el while, producto tomará como valor el resultado de la multiplicación anterior.    
            producto *= arreglo[i];
    }
//Aquí se indica el incremento del bucle, lo que indica que mientras se cumpla la condición del while, se seguirá iterando el arreglo    
    i++;
  }
//Aquí se establece otro if, donde se entrega una respuesta alternativa en caso de que no haya ningún número par en el arreglo, en cuyo caso el valor de producto permanecería invariable.  
  if (producto === 1) {
    console.log("Este arreglo no contiene números pares");
  }
//En esta línea se indica lo que debe retornar la función  
  return producto;
}

//Finalmente, se ejecuta la función indicando como parámetro la variable numeros2, cuyo resultado se mostrará por consola.
console.log(productoDePares(numeros2)); */

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.
*/

let vehiculo = [
  {
    marca: "Hyundai",
    modelo: "Accent",
    anio: 2014,
    precio: 10000000,
    calculoImpuesto: function () {
      let impuesto = 0;
      if (this.anio < 2010) {
        impuesto = this.precio * 0.1;
      } else {
        impuesto = this.precio * 0.05;
      }
      return impuesto;
    },
    impuestoPorPagar: 0,
  },
  {
    marca: "Susuki",
    modelo: "Swift",
    anio: 2008,
    precio: 5000000,
    calculoImpuesto: function () {
      let impuesto = 0;
      if (this.anio < 2010) {
        impuesto = this.precio * 0.1;
      } else {
        impuesto = this.precio * 0.05;
      }
      return impuesto;
    },
    impuestoPorPagar: 0,
  },
  {
    marca: "HAVAL",
    modelo: "Jolion",
    anio: 2023,
    precio: 23000000,
    calculoImpuesto: function () {
      let impuesto = 0;
      if (this.anio < 2010) {
        impuesto = this.precio * 0.1;
      } else {
        impuesto = this.precio * 0.05;
      }
      return impuesto;
    },
    impuestoPorPagar: 0,
  },
];

vehiculo.forEach((auto) => {
  auto.impuestoPorPagar = auto.calculoImpuesto();
});

console.log(vehiculo);
