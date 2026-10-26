/**
 * LOS ESTUDIANTES
 * Se desea conocer la nota promedio de los alumnos de un curso.
 * Se conoce de cada alumno: nombre, cedula, nota1, nota2 y nota3.
 * La nota de un alumno es la suma de sus 3 notas.
 * La nota promedio es el promedio de las notas de todos los alumnos.
 */

import mCurso from "../models/mCurso.js";
import { iCurso } from "../interfaces/iCurso.js";
import cAlumno from "./cAlumno.js";

export default class cCurso {
  private mCurso: mCurso = new mCurso();
  private vCurso: iCurso;
  private cAlumno: cAlumno;

  // Recibe la vista del curso y el controlador del Alumno ya armado
  constructor(vistaCurso: iCurso, controladorAlumno: cAlumno) {
    this.vCurso = vistaCurso;
    this.cAlumno = controladorAlumno;

    this.vCurso.onNuevoAlumno(() => this.procesar1Alumno());
  }

  private procesar1Alumno(): void {
    this.cAlumno.solicitarAlumno((alumno) => {
      if (alumno !== null) {
        this.mCurso.procesarAlumno(alumno);
        this.vCurso.reportar({ notaPromedio: this.mCurso.notaPromedio() });
      }
    });
  }
}
