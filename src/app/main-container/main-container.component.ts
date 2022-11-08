import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../modelos/empleado.model';
import { InfoEmpleadosService } from '../servicios/info-empleados.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido','cedula','fechaNacimiento','correo','telefono','sexoBiologico','editar'];
  dataSource: MatTableDataSource<Empleado>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private infoEmpleadosService : InfoEmpleadosService,
              private router: Router){}

  ngOnInit(){this.dataSource = new MatTableDataSource<Empleado>(this.infoEmpleadosService.getEmpleados());}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAgregarEmpleado(){
    this.router.navigate(['/formInsertar']);
    //this.formEmpleado.emit({visibilidadFormulario : true, empleadoEdicion : null});
  }

  /*   onEditarEmpleado(index : number){
    this.formEmpleado.emit({visibilidadFormulario : true, empleadoEdicion : this.infoEmpleadosService.getEmpleado(index)})
  } */

}

