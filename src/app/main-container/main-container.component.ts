import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Empleado } from '../modelos/empleado.model';
import { InfoEmpleadosService } from '../servicios/info-empleados.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  displayedColumns: string[] = ['primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido','cedula','fechaNacimiento','correo','telefono','sexoBiologico','editar'];
  dataSource: MatTableDataSource<Empleado>;
  empleadosCargados: Empleado[] = [];
  empleadosSuscripcion : Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private infoEmpleadosService : InfoEmpleadosService,
              private router: Router){}

  ngOnInit(){
    this.empleadosSuscripcion = this.cargarEmpleados();
  }

  cargarEmpleados(){
    return this.infoEmpleadosService.getEmpleados().subscribe((empleados) => {
      this.empleadosCargados = empleados;
      this.dataSource = new MatTableDataSource<Empleado>(this.empleadosCargados);
      this.dataSource.paginator = this.paginator;
    });
  }

/*   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } */

  onAgregarEmpleado(){
    this.router.navigate(['/formInsertar']);
  }

  ngOnDestroy() {
    this.empleadosSuscripcion.unsubscribe();
  }

}

