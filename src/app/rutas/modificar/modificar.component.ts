import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/modelos/empleado.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { InfoEmpleadosService } from 'src/app/servicios/info-empleados.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  empleadoEdicion : Empleado;
  paramsSubscription: Subscription;

  constructor(private route : ActivatedRoute,
              private infoEmpleadosService : InfoEmpleadosService) {}

  ngOnInit() {
    this.empleadoEdicion = this.infoEmpleadosService.getEmpleado(this.route.snapshot.params['idEmpleado']);
    this.paramsSubscription = this.route.params.subscribe(
      (parameters : Params) => {
        this.empleadoEdicion.idEmpleado = parameters['idEmpleado'];
      }
    );
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
