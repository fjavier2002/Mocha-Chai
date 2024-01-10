const { Bascula } = require("./Bascula");

class Paciente {

fechaNacimiento;
    constructor(nom, apellidos, strFecha) {
        this.nombre = nom;
        this.apellidos = apellidos;
        this.fechaNacimiento = strFecha;
    }

    saludar() {
        return `Hola soy ${this.nombre} ${this.apellidos}`;

    }

    obtenerNombre() {
        return this.nombre;
    }

    modificarNombre(nombre) {
        this.nombre = nombre;
    }

    obtenerApellidos() {
        return this.apellidos;
    }

    modificarApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    obtenerFechaNacimiento() {
        return this.fechaNacimiento;
    }

    modificarFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    obtenerEdad() {
        var partesFecha = this.fechaNacimiento.split('/');
  var diaNac = partesFecha[0];
  var mesNac = partesFecha[1];
  var anoNac = partesFecha[2];

  var fechaNac = new Date(anoNac, mesNac - 1, diaNac);
  var fechaActual = new Date();

  var edad = fechaActual.getFullYear() - fechaNac.getFullYear();

  // Verifica si aún no ha llegado el cumpleaños de este año
  if (
    fechaNac.getMonth() > fechaActual.getMonth() ||
    (fechaNac.getMonth() === fechaActual.getMonth() && fechaNac.getDate() > fechaActual.getDate())
  ) {
    edad--;
  }

  return edad;
    }


    modificarBascula(Bascula) {

        this.registroBascula = Bascula;

    }


    obtenerBascula() {
        return this.registroBascula;
    }


    calcularIMC() {
        if (this.registroBascula) 
        {
            return this.registroBascula.calcularIMC();
        } else 
        {
            return -1; 
        }

    }

}


module.exports = { Paciente }