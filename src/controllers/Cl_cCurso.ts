/**
 * LOS ESTUDIANTES
 * Se desea conocer la nota promedio de los alumnos de un curso.
 * Se conoce de cada alumno: nombre, cedula, nota1, nota2 y nota3.
 * La nota de un alumno es la suma de sus 3 notas.
 * La nota promedio es el promedio de las notas de todos los alumnos.
 *
 * Considere que la clase alumno hereda de una clase persona
 * con los atributos: nombre, cedula
 */

import Cl_mCurso from "../models/Cl_mCurso.js";
import { I_vCurso } from "../interfaces/I_vCurso.js";
import Cl_cAlumno from "./Cl_cAlumno.js";

export default class Cl_cCurso {
  private mCurso: Cl_mCurso = new Cl_mCurso();
  private vCurso: I_vCurso;
  private cAlumno: Cl_cAlumno;

  // Recibe la vista de la bodega y el controlador del Alumno ya armado
  constructor(vistaCurso: I_vCurso, controladorAlumno: Cl_cAlumno) {
    this.vCurso = vistaCurso;
    this.cAlumno = controladorAlumno;

    this.vCurso.onNuevoAlumno(() => this.procesar1Alumno());
  }

  private procesar1Alumno() {
    this.cAlumno.solicitarAlumno((alumno) => {
      if (alumno !== null) {
        this.mCurso.procesarAlumno(alumno);
        this.vCurso.reportar({ notaPromedio: this.mCurso.notaPromedio()});
      }
    });
  }
}
