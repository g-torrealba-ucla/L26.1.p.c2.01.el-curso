import mAlumno from "./mAlumno.js";

export default class mCurso {
  private acumNotas: number = 0;
  private contAlumnos: number = 0;

  constructor() {
    this.acumNotas = 0;
    this.contAlumnos = 0;
  }

  procesarAlumno(a: mAlumno): void {
    this.acumNotas += a.nota;
    this.contAlumnos++;
  }

  notaPromedio(): number {
    if (this.contAlumnos > 0) return this.acumNotas / this.contAlumnos;
    return 0;
  }
}
