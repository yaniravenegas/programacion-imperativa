let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        return this.clientes[i];
      }
    }
    return "Cliente no encontrado";
  },
  deposito: function (titular, cantidad) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        this.clientes[i].saldoEnPesos += cantidad;
        return (
          "Depósito realizado, su nuevo saldo es: " +
          this.clientes[i].saldoEnPesos
        );
      }
    }
    return "Cliente no encontrado";
  },
  extraccion: function (titular, cantidad) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        this.clientes[i].saldoEnPesos -= cantidad;
        if (this.clientes[i].saldoEnPesos >= 0) {
          return (
            "Extracción realizada correctamente, su nuevo saldo es: " +
            this.clientes[i].saldoEnPesos
          );
        } else {
          return "Fondos insuficientes";
        }
      }
    }
    return "Cliente no encontrado";
  },
};

let clienteEncontrado = banco.consultarCliente("Ansel Ardley");
console.log(clienteEncontrado);

let nuevoSaldo = banco.deposito("Ansel Ardley", 2500);
console.log(nuevoSaldo);

let saldoFinal = banco.extraccion("Ansel Ardley", 35915);
console.log(saldoFinal);

let array = [
  { nombre: "Lean", edad: 27 },
  { nombre: "Eze", edad: 49 },
];

function propiedadUnica(array, propiedad) {
  let nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    nuevoArray.push(array[i][propiedad]);
  }
  return nuevoArray;
}

console.log(propiedadUnica(array, "edad"));

let alumnos = [
  {
    nombre: "Juan Perez",
    legajo: 27,
    notas: [90, 85, 78, 92],
  },
  {
    nombre: "Pedrito Fernandez",
    legajo: 32,
    notas: [60, 30, 42, 12],
  },
];

let notaAprobacion = 60;

function resultadoFinal(nombre) {
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].nombre === nombre) {
      let sumaNotas = alumnos[i].notas.reduce((a, b) => a + b, 0);
      let promedio = sumaNotas / alumnos[i].notas.length;
      if (promedio >= notaAprobacion) {
        return (
          "El promedio de " + nombre + "es: " + promedio + ". ¡Felicidades, estás aprobado!"
        );
      } else {
        return (
          "El promedio de " + nombre + "es:" + promedio + ". Lo sentimos, estás reprobado."
        );
      }
    }
  }
  return "Alumno no encontrado";
}

let resultado = resultadoFinal("Juan Perez");
console.log(resultado);