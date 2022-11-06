import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienestar-Db';

  isFormularioVisible : boolean = false;

  onAgregarEmpleado(visibilidadFormulario : boolean){
    this.isFormularioVisible = visibilidadFormulario;
  }


}
