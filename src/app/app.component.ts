import { Component } from '@angular/core';
import { Empleado } from './modelos/empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BienestarUD-DB';

  isFormularioVisible : boolean = false;
  empleadoEdicion : Empleado | null;

  onInicializarFormularioEmpleado(datosRecepcion : {visibilidadFormulario : boolean, empleadoEdicion : Empleado | null}){
    this.isFormularioVisible = datosRecepcion.visibilidadFormulario;
   /*  this.empleadoEdicion = (datosRecepcion.empleadoEdicion)?datosRecepcion.empleadoEdicion:null; */
    this.empleadoEdicion = datosRecepcion.empleadoEdicion;
  }

}
