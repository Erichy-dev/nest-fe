export interface User {
  id: number;
  nombre: string;
  apellido: string;
  rut: string;
  email: string;
  celular: string;
  ordenesTrabajo: any[];
  roles: any[];
}
