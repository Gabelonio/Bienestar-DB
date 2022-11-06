export class Empleado{
  constructor(
    public primerNombre : string,
    public primerApellido : string,
    public cedula : string,
    public fechaNacimiento : Date,
    public correo : string,
    public telefono : string,
    public sexoBiologico: string,
    public segundoNombre ?: string,
    public segundoApellido ?: string,
    public idEmpleado ?: number
  ){}
}
