import { iCurso } from "../interfaces/iCurso.js";

export default class vCursoPlain implements iCurso {
  private lblNotaPromedio: HTMLElement;
  private btNuevoAlumno: HTMLButtonElement;
  private vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoAlumno = document.getElementById("body_btNuevoAlumno") as HTMLButtonElement;
    this.lblNotaPromedio = document.getElementById("body_lblNotaPromedio") as HTMLElement;
  }

  onNuevoAlumno(callback: () => void): void {
    this.btNuevoAlumno.onclick = callback;
  }

  reportar({ notaPromedio }: { notaPromedio: number }): void {
    this.lblNotaPromedio.innerHTML = `${notaPromedio}`;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
