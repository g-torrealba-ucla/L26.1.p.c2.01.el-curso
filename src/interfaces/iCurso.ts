export interface iCurso {
  onNuevoAlumno(callback: () => void): void;
  reportar({ notaPromedio }: { notaPromedio: number }): void;
}
