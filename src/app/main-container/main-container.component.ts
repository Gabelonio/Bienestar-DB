import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Empleado } from '../modelos/empleado.model';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements AfterViewInit {

  displayedColumns: string[] = ['primerNombre', 'segundoNombre', 'primerApellido', 'segundoApellido','cedula','fechaNacimiento','correo','telefono','sexoBiologico','editar'];
  dataSource = new MatTableDataSource<Empleado>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Output() agregarEmpleado = new EventEmitter<boolean>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onAgregarEmpleado(){
    this.agregarEmpleado.emit(true);
  }
}

const ELEMENT_DATA: Empleado[] = [
  {"primerNombre":"Elyse","segundoNombre":"Germayne","primerApellido":"Izod","segundoApellido":"Alway","cedula":"1380117117","fechaNacimiento":new Date("8/24/1985"),"correo":"galway0@clickbank.net","telefono":"489 719 5424","sexoBiologico":"masculino"},
  {"primerNombre":"Rowney","segundoNombre":"Padraig","primerApellido":"Richten","segundoApellido":"Mell","cedula":"8906866338","fechaNacimiento":new Date("2/2/1988"),"correo":"pmell1@nbcnews.com","telefono":"254 970 7568","sexoBiologico":"femenino"},
  {"primerNombre":"Dory","segundoNombre":"Faulkner","primerApellido":"Lantaph","segundoApellido":"Larose","cedula":"9472783424","fechaNacimiento":new Date("1/23/1989"),"correo":"flarose2@unicef.org","telefono":"722 816 3378","sexoBiologico":"masculino"},
  {"primerNombre":"Conrado","segundoNombre":"Davidson","primerApellido":"Roantree","segundoApellido":"Coulman","cedula":"4458213483","fechaNacimiento":new Date("1/23/1990"),"correo":"dcoulman3@si.edu","telefono":"606 687 9806","sexoBiologico":"femenino"},
  {"primerNombre":"Sigfried","segundoNombre":"Markos","primerApellido":"Rowell","segundoApellido":"Kingdom","cedula":"0793129563","fechaNacimiento":new Date("11/15/1982"),"correo":"mkingdom4@cnbc.com","telefono":"820 384 2649","sexoBiologico":"masculino"},
  {"primerNombre":"Lind","segundoNombre":"Mario","primerApellido":"Roubeix","segundoApellido":"Mulbry","cedula":"8298297379","fechaNacimiento":new Date("2/11/1990"),"correo":"mmulbry5@friendfeed.com","telefono":"528 541 3839","sexoBiologico":"masculino"},
  {"primerNombre":"Lock","segundoNombre":"Briana","primerApellido":"Tesseyman","segundoApellido":"Eilhart","cedula":"9168109152","fechaNacimiento":new Date("9/29/1998"),"correo":"beilhart6@hibu.com","telefono":"513 232 1758","sexoBiologico":"masculino"},
  {"primerNombre":"Belle","segundoNombre":"Bartholemy","primerApellido":"Caldecutt","segundoApellido":"Hanwell","cedula":"1524171754","fechaNacimiento":new Date("1/31/1995"),"correo":"bhanwell7@census.gov","telefono":"103 847 5654","sexoBiologico":"femenino"},
  {"primerNombre":"Karisa","segundoNombre":"Louisa","primerApellido":"Parry","segundoApellido":"Moncreif","cedula":"6896375300","fechaNacimiento":new Date("8/11/1998"),"correo":"lmoncreif8@unblog.fr","telefono":"554 858 4509","sexoBiologico":"masculino"},
  {"primerNombre":"Mame","segundoNombre":"Britt","primerApellido":"Conville","segundoApellido":"Pitcher","cedula":"0365428951","fechaNacimiento":new Date("7/18/1990"),"correo":"bpitcher9@rediff.com","telefono":"483 548 5519","sexoBiologico":"masculino"},
  {"primerNombre":"Tibold","segundoNombre":"Colby","primerApellido":"Haliburton","segundoApellido":"Ioannou","cedula":"2715079626","fechaNacimiento":new Date("5/9/1981"),"correo":"cioannoua@umn.edu","telefono":"383 967 4337","sexoBiologico":"masculino"},
  {"primerNombre":"Bradley","segundoNombre":"Edna","primerApellido":"Nudd","segundoApellido":"Castiblanco","cedula":"3989183885","fechaNacimiento":new Date("3/26/1981"),"correo":"ecastiblancob@weather.com","telefono":"311 614 0541","sexoBiologico":"femenino"},
  {"primerNombre":"Aldous","segundoNombre":"Madeleine","primerApellido":"Meeson","segundoApellido":"Kendle","cedula":"4453906869","fechaNacimiento":new Date("8/6/1988"),"correo":"mkendlec@cornell.edu","telefono":"271 377 8681","sexoBiologico":"masculino"},
  {"primerNombre":"Kelsy","segundoNombre":"Phoebe","primerApellido":"Rickeard","segundoApellido":"Axtens","cedula":"9344978265","fechaNacimiento":new Date("10/11/1995"),"correo":"paxtensd@state.gov","telefono":"412 880 4759","sexoBiologico":"femenino"},
  {"primerNombre":"Mellicent","segundoNombre":"Clare","primerApellido":"Rubinfeld","segundoApellido":"Holsall","cedula":"1884546572","fechaNacimiento":new Date("7/20/1986"),"correo":"cholsalle@gnu.org","telefono":"114 710 9051","sexoBiologico":"masculino"},
  {"primerNombre":"Mischa","segundoNombre":"Annetta","primerApellido":"Liddon","segundoApellido":"Gauford","cedula":"7938423530","fechaNacimiento":new Date("10/6/1998"),"correo":"agaufordf@illinois.edu","telefono":"284 446 9102","sexoBiologico":"masculino"},
  {"primerNombre":"Jermain","segundoNombre":"Patty","primerApellido":"Madine","segundoApellido":"Gosnold","cedula":"0685799877","fechaNacimiento":new Date("6/17/1989"),"correo":"pgosnoldg@lulu.com","telefono":"308 803 7158","sexoBiologico":"femenino"},
  {"primerNombre":"Olwen","segundoNombre":"Kahaleel","primerApellido":"Belson","segundoApellido":"Cellier","cedula":"4869659270","fechaNacimiento":new Date("11/22/1986"),"correo":"kcellierh@webs.com","telefono":"240 402 1876","sexoBiologico":"masculino"},
  {"primerNombre":"Thomas","segundoNombre":"Isabelle","primerApellido":"Cast","segundoApellido":"Loiterton","cedula":"4831408725","fechaNacimiento":new Date("1/22/1998"),"correo":"iloitertoni@google.it","telefono":"973 844 6741","sexoBiologico":"masculino"},
  {"primerNombre":"Kerstin","segundoNombre":"Rachael","primerApellido":"Heugle","segundoApellido":"Underdown","cedula":"5554083492","fechaNacimiento":new Date("5/11/1981"),"correo":"runderdownj@nbcnews.com","telefono":"575 653 3217","sexoBiologico":"femenino"},
  {"primerNombre":"Basil","segundoNombre":"Lemar","primerApellido":"Pert","segundoApellido":"Drakers","cedula":"2576563503","fechaNacimiento":new Date("8/4/1980"),"correo":"ldrakersk@g.co","telefono":"492 883 0642","sexoBiologico":"masculino"},
  {"primerNombre":"Deck","segundoNombre":"Freddie","primerApellido":"Stancliffe","segundoApellido":"Wolfe","cedula":"9625663820","fechaNacimiento":new Date("7/3/1981"),"correo":"fwolfel@xinhuanet.com","telefono":"681 293 7392","sexoBiologico":"masculino"},
  {"primerNombre":"Robin","segundoNombre":"Roxanna","primerApellido":"Varcoe","segundoApellido":"Tattersfield","cedula":"6670355611","fechaNacimiento":new Date("12/22/1990"),"correo":"rtattersfieldm@theatlantic.com","telefono":"279 752 9387","sexoBiologico":"femenino"},
  {"primerNombre":"Nicolai","segundoNombre":"Ruthann","primerApellido":"Wrought","segundoApellido":"Skitteral","cedula":"3839378930","fechaNacimiento":new Date("10/18/1980"),"correo":"rskitteraln@amazon.co.jp","telefono":"900 982 7071","sexoBiologico":"femenino"},
  {"primerNombre":"Heidie","segundoNombre":"Dalila","primerApellido":"Craigmile","segundoApellido":"Leger","cedula":"1030588336","fechaNacimiento":new Date("10/1/1988"),"correo":"dlegero@cdbaby.com","telefono":"414 424 3960","sexoBiologico":"masculino"},
  {"primerNombre":"Beltran","segundoNombre":"Giustina","primerApellido":"Trappe","segundoApellido":"Ceschini","cedula":"1747009187","fechaNacimiento":new Date("9/4/1996"),"correo":"gceschinip@mapquest.com","telefono":"551 177 3576","sexoBiologico":"masculino"},
  {"primerNombre":"Osborne","segundoNombre":"Gav","primerApellido":"Labbe","segundoApellido":"Berthel","cedula":"8801663231","fechaNacimiento":new Date("3/26/1993"),"correo":"gberthelq@jigsy.com","telefono":"197 789 5069","sexoBiologico":"femenino"},
  {"primerNombre":"Valdemar","segundoNombre":"Aubree","primerApellido":"Stamps","segundoApellido":"Isacsson","cedula":"8811774733","fechaNacimiento":new Date("4/15/1984"),"correo":"aisacssonr@cpanel.net","telefono":"257 387 1496","sexoBiologico":"femenino"},
];
