import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../modelos/empleado.model';
import { InfoEmpleadosService } from '../servicios/info-empleados.service';

interface Sexo {
  valor: string;
  valorVista: string;
}

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit{

  @Output() formEmpleado = new EventEmitter<{
    visibilidadFormulario : boolean,
    empleadoEdicion : Empleado | null }>();

  @Input('empleadoEdicion') infoEmpleadoEdicion : Empleado | null;

  public formularioEmpleado: FormGroup;
  public posicionEmpleado: number = -1;

  /* Creacion de campos del formulario */
  primerNombre = new FormControl('', Validators.required);
  segundoNombre = new FormControl('');
  primerApellido = new FormControl('', Validators.required);
  segundoApellido = new FormControl('', Validators.required);
  cedula = new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(10)]);
  fechaNacimiento = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  telefono = new FormControl('', [Validators.required, Validators.minLength(7),Validators.maxLength(10)]);
  sexo = new FormControl('', Validators.required);

  /* Asignacion de campos del formulario con sus valores y validaciones */
  constructor(private infoEmpleadosService : InfoEmpleadosService){
    this.formularioEmpleado = new FormGroup({
      'primerNombre': this.primerNombre,
      'segundoNombre': this.segundoNombre,
      'primerApellido' : this.primerApellido,
      'segundoApellido' : this.segundoApellido,
      'cedula' : this.cedula,
      'fechaNacimiento' : this.fechaNacimiento,
      'email' : this.email,
      'telefono' : this.telefono,
      'sexo' : this.sexo,
    })
  }

  ngOnInit(){
    if(this.infoEmpleadoEdicion){
      this.formularioEmpleado.setValue({
        'primerNombre': this.infoEmpleadoEdicion.primerNombre,
        'segundoNombre': this.infoEmpleadoEdicion.segundoNombre,
        'primerApellido' : this.infoEmpleadoEdicion.primerApellido,
        'segundoApellido' : this.infoEmpleadoEdicion.segundoApellido,
        'cedula' : this.infoEmpleadoEdicion.cedula,
        'fechaNacimiento' : this.infoEmpleadoEdicion.fechaNacimiento,
        'email' : this.infoEmpleadoEdicion.correo,
        'telefono' : this.infoEmpleadoEdicion.telefono,
        'sexo' : this.infoEmpleadoEdicion.sexoBiologico,
      })
    }
  }

  sexos: Sexo[] = [
    {valor: 'masculino', valorVista: 'Masculino'},
    {valor: 'femenino', valorVista: 'Femenino'},
  ];
  sexoSeleccionado = this.sexos[0].valor;

  /* Funciones Referentes a la validacion de datos */
  getErrorMensaje(controlFormulario : FormControl, mensajeControl : string){
    return (controlFormulario.hasError('required'))?'Debes ingresar un '+mensajeControl:'';
  }
  getErrorEmail() {
    if (this.email.hasError('required'))
      return 'Debes ingresar un correo';
    return this.email.hasError('email') ? 'Debes ingresar un correo valido' : '';
  }
  getErrorNumerico(controlFormulario : FormControl, mensajeControl : string){
    if (controlFormulario.hasError('required'))
      return 'Debes ingresar un ' + mensajeControl;
    return (controlFormulario.hasError('minlength') || controlFormulario.hasError('maxlength')) ? 'Debes ingresar un '+ mensajeControl +' valido' : '';
  }

  /* Funciones Referentes los botones del formulario */
  onAceptarFormulario(){
    let empleadoIntroduccion : Empleado = this.formularioEmpleado.value;
    empleadoIntroduccion.idEmpleado = this.infoEmpleadoEdicion?.idEmpleado;

    /* SE ACTUALIZA LA INFORMACION O SE INTRODUCE UN NUEVO EMPLEADO EN LA BASE DE DATOS*/
    if(this.infoEmpleadoEdicion){
      this.infoEmpleadosService.modificarEmpleado(empleadoIntroduccion);
    }
    else{
      this.infoEmpleadosService.registrarEmpleado(empleadoIntroduccion);
    }
    this.formEmpleado.emit({visibilidadFormulario : false, empleadoEdicion : null });
  }

  onCancelarFormulario(){
    this.formEmpleado.emit({visibilidadFormulario : false, empleadoEdicion : null });
  }

}
