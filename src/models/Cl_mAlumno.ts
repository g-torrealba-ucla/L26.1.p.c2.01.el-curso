import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAlumno extends Cl_mPersona {
  private _nota1: number = 0;
  private _nota2: number = 0;
  private _nota3: number = 0;

  constructor({
    nombre,
    cedula,
    nota1,
    nota2,
    nota3,
  }: {
    nombre: string;
    cedula: number;
    nota1: number;
    nota2: number;
    nota3: number;
  }) {
    super({ nombre, cedula });
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    
  }
  set nota1(nota1: number) {
    this._nota1 = +nota1;
  }
  get nota1(): number {
    return this._nota1;
  }
  set nota2(nota2: number) {
    this._nota2 = +nota2;
  }
  get nota2(): number {
    return this._nota2;
  }
  set nota3(nota3: number) {
    this._nota3 = +nota3;
  }
  get nota3(): number {
    return this._nota3;
  }
  get nota(): number {
    return this.nota1 + this.nota2 + this.nota3;
  }
}
