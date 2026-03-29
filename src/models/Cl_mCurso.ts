import Cl_mAlumno from "./Cl_mAlumno.js";

export default class Cl_mCurso {
  private acNotas: number = 0;
  private cntAlumnos: number = 0;

  procesarAlumno(a: Cl_mAlumno): void {
    this.acNotas += a.nota;
    this.cntAlumnos++;
  }

  notaPromedio(): number {
    if (this.cntAlumnos > 0) return this.acNotas / this.cntAlumnos;
    return 0;
  }
}
