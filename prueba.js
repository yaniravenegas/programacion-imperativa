const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`);

/* 
Comentario Multilínea Alt + Shift + A
*/
// Comentario de una línea

/* 
VARIABLE:

CONTENEDOR QUE GUARDA INFORMACIÓN PARA DESPUÉS PODER UTILIZARLA
variable local: dentro de la función
variable global: fuera de la función
para crear variables se utilizará (var, let, const)

var: es una forma más sencilla de declarar una variable, podemos redeclarar la variable y también actualizar o modificar su valor.

let: permite declarar una variable y actualizar su valor pero no permite redeclarar.

const: Permite declarar una variable que se mantiene constante, entonces no permite actualizar su valor ni redeclarar la variable.

*/

//Ejemplo var
var edad = 60;
var edad = 49;

//Ejemplo let
let persona = "Luciano";
persona = "Pedro";

//Ejemplo const
const genero = femenino;
const genero = femenino;

/*                  
TIPOS DE DATOS PRIMITIVOS

String, numericos, booleanos, undefined y null                                                

TIPOS DE DATOS COMPLEJOS

arreglos, funciones, objetos, etc.

*/

//Ejemplo string
let apellido = "Venegas";

//Ejemplo numerico
let anos = 24;

//Ejemplo booleano
let tieneMascota = true;

//Ejemplo undefined
let colorFavorito;

//Ejemplo null
let certificado = null;

console.log(apellido);
console.log(tieneMascota);

/* 

- Declara 3 variables. Siempre teniendo en cuenta que los nombres deben ser descriptivos:
    Numérica
    String
    Booleana
- Mostrarlas por la consola en 3 console.log distintos (uno por cada variable)
- Ahora modifica tus console.log para que ahora se muestran las 3 variables en el mismo console.log

*/
//1-
let edadd = 30;
let peliculaFavorita = "Hulk";
let esVerde = false;

//2-
console.log(edadd, esVerde, peliculaFavorita);
console.log(edadd);
console.log(esVerde);
console.log(peliculaFavorita);

//3-
/* console.log("Edad: " + edad + ", Película: " + peliculaFavorita + ", EsVerde: " + esVerde); */
console.log("Su edad es: " + edadd);

console.log(`${edadd} + ${esVerde} +  ${peliculaFavorita}`);

/* 
Operadores de comparación

... < ... Es menor que
... > ... Es mayor que
... <= ... Es menor o igual que
... >= ... Es mayor o igual que
... == ... Compara que el contenido sea el mismo (comparación blanda)
... === ... Evalúa el tipo de dato y el contenido (comparación estricta)

¿Diferencia entre = y ==?
El = es un operador de asignación.


Operadores lógicos y de desigualdad

Todos retornan valores booleanos, permiten agrupar muchas condiciones y refactorizar el código, haciéndolo más rápido, legible y eficiente.

... || ...: Operador "o", sólo requiere que una de las condiciones sea true para que el resultado final se veradero.

true || true //true
true || false //true
false || true //true
false || false //false

... && ... Basta que una de las condiciones sea falsa para que el resultado final sea false

true && true //true
true && false //false
false && true //false
false && false //false

... !- ... "diferente de" o "de desigualdad" Basta que una condición sea diferente para que nos devuelva true, si todas las condiciones soniguales devuelve false.


Diferencia blanda (!=) y diferencia estricta (!==)
La primera evalúa sólo el contenido, la segunda evalúa el contenido y el tipo de dato.

Operador de negación

!true = false.
!false = true.
!!false = false.
!!true = true.
!0 = true. En JavaScript, el valor 0 se considera falso en contexto booleano.
!!1 = true. En JavaScript, cualquier valor distinto de 0 se considera verdadero en contexto booleano.
!!0 = false.
!!"" = false. Una cadena de texto vacía ("") se considera falso en contexto booleano.
!"" = true. La negación de una cadena de texto vacía es verdadera.



*/
