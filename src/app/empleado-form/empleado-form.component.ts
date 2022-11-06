import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})

export class EmpleadoFormComponent{

  @Output() cerrarFormulario = new EventEmitter<boolean>();

  public formularioEmpleado: FormGroup;

  primerNombre = new FormControl('', Validators.required);
  primerApellido = new FormControl('', Validators.required);
  cedula = new FormControl('', Validators.required);
  fechaNacimiento = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  telefono = new FormControl('', Validators.required);
  sexo = new FormControl('', Validators.required);

  constructor(){
    this.formularioEmpleado = new FormGroup({
      'primerNombre': this.primerNombre,
      'primerApellido' : this.primerApellido,
      'cedula' : this.cedula,
      'fechaNacimiento' : this.fechaNacimiento,
      'email' : this.email,
      'telefono' : this.telefono,
      'sexo' : this.sexo,

    })
  }

  sexos: Sexo[] = [
    {valor: 'masculino', valorVista: 'Masculino'},
    {valor: 'femenino', valorVista: 'Femenino'},
  ];
  sexoSeleccionado = this.sexos[0].valor;

  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Debes ingresar un correo';
    }
    return this.email.hasError('email') ? 'Debes ingresar un correo valido' : '';
  }

  getErrorMensaje(controlFormulario : FormControl, mensajeControl : string){
    return (controlFormulario.hasError('required'))?'Debes ingresar un '+mensajeControl:'';
  }

  onAceptarFormulario(){
    console.log(this.formularioEmpleado.value);
    this.cerrarFormulario.emit(false);
  }

  onCancelarFormulario(){
    this.cerrarFormulario.emit(false);
  }

}
interface Sexo {
  valor: string;
  valorVista: string;
}
