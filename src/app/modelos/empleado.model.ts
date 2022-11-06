export class Empleado{
  constructor(
    public primerNombre : string,
    public segundoNombre : string,
    public primerApellido : string,
    public segundoApellido: string,
    public cedula : string,
    public fechaNacimiento : Date,
    public correo : string,
    public telefono : string,
    public sexoBiologico: string
  ){}
}
