export interface Egreso {
  id: number;
  nombre: string;
  costo: number;
  fecha: string; // Usamos string porque DateOnly se serializa como string (ej: "2025-08-01")
  descripcion?: string;
  idUsuario: number;
  erased: boolean;
  date: string; // DateTime en ISO format (ej: "2025-08-01T18:00:00Z")
}