import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  //@Input('empleadoEdicion') infoEmpleadoEdicion : Empleado;
  @Input('isModoEdicion') isModoEdicion: boolean;

  public formularioEmpleado: FormGroup;
  public posicionEmpleado: number = -1;
  public idEmpleadoEdicion : number;
  public empleadoEdicion : Empleado;

  paramsSubscription: Subscription;
  empleadoSuscription: Subscription;

  /* Creacion de campos del formulario */
  primerNombre = new FormControl('', Validators.required);
  segundoNombre = new FormControl('');
  primerApellido = new FormControl('', Validators.required);
  segundoApellido = new FormControl('', Validators.required);
  cedula = new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(10)]);
  fechaNacimiento = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  telefono = new FormControl('', [Validators.required, Validators.minLength(7),Validators.maxLength(11)]);
  sexo = new FormControl('', Validators.required);

  /* Asignacion de campos del formulario con sus valores y validaciones */
  constructor(private infoEmpleadosService : InfoEmpleadosService,
              private router: Router,
              private route : ActivatedRoute){

    this.formularioEmpleado = new FormGroup({
      'primerNombre': this.primerNombre,
      'segundoNombre': this.segundoNombre,
      'primerApellido' : this.primerApellido,
      'segundoApellido' : this.segundoApellido,
      'cedula' : this.cedula,
      'fechaNacimiento' : this.fechaNacimiento,
      'correo' : this.email,
      'telefono' : this.telefono,
      'sexoBiologico' : this.sexo,
    })
  }

  ngOnInit(){
    if(this.isModoEdicion){
      this.paramsSubscription = this.route.params.subscribe(
        (parameters : Params) => {
          this.idEmpleadoEdicion = parameters['idEmpleado'];
          this.empleadoSuscription = this.infoEmpleadosService.getEmpleado(this.idEmpleadoEdicion).subscribe( empleado => {
            this.empleadoEdicion = empleado;
            //console.log(this.empleadoEdicion);
            this.formularioEmpleado.setValue({
              'primerNombre': this.empleadoEdicion.primerNombre,
              'segundoNombre': this.empleadoEdicion.segundoNombre,
              'primerApellido' : this.empleadoEdicion.primerApellido,
              'segundoApellido' : this.empleadoEdicion.segundoApellido,
              'cedula' : this.empleadoEdicion.cedula,
              'fechaNacimiento' : new Date(this.empleadoEdicion.fechaNacimiento),
              'correo' : this.empleadoEdicion.correo,
              'telefono' : this.empleadoEdicion.telefono,
              'sexoBiologico' : this.empleadoEdicion.sexoBiologico,
            })
          }, error => {console.log(error.message);});
        }
      );

    }
  }


  ngOnDestroy(){
    if(this.paramsSubscription){
      this.paramsSubscription.unsubscribe();
    }
    if(this.empleadoSuscription){
      this.empleadoSuscription.unsubscribe();
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

    /* SE ACTUALIZA LA INFORMACION O SE INTRODUCE UN NUEVO EMPLEADO EN LA BASE DE DATOS*/
    if(this.isModoEdicion){
      empleadoIntroduccion.idEmpleado = this.idEmpleadoEdicion;
      console.log('modo edicion');
      console.log(empleadoIntroduccion);
      this.infoEmpleadosService.actualizarEmpleado(empleadoIntroduccion).subscribe((data: {}) => {
        this.router.navigate(['/index']);
      });;
    }
    else{
      console.log("creacion de nuevo empleado");
      console.log(empleadoIntroduccion);
      this.infoEmpleadosService.registrarEmpleado(empleadoIntroduccion).subscribe((data: {}) => {
        this.router.navigate(['/index']);
      });;
    }
  }

  onCancelarFormulario(){
    this.router.navigate(['/index']);
  }

}
