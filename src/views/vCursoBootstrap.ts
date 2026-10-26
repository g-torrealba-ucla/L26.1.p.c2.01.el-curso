import { iCurso } from "../interfaces/iCurso.js";

export default class vCursoBootstrap implements iCurso {
  private lblNotaPromedio: HTMLElement;
  private btNuevoAlumno: HTMLButtonElement;

  constructor() {
    this.btNuevoAlumno = document.getElementById("body_btNuevoAlumno") as HTMLButtonElement;
    this.lblNotaPromedio = document.getElementById("body_lblNotaPromedio") as HTMLElement;
  }

  onNuevoAlumno(callback: () => void): void {
    this.btNuevoAlumno.onclick = callback;
  }

  reportar({ notaPromedio }: { notaPromedio: number }): void {
    this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
  }
}
