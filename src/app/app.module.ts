import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule} from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainContainerComponent } from './main-container/main-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EmpleadoFormComponent } from './empleado-form/empleado-form.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { IndexComponent } from './rutas/index/index.component';
import { AppRoutingModule } from './app-routing-module';
import { FormInsertarComponent } from './rutas/form-insertar/form-insertar.component';
import { ModificarComponent } from './rutas/modificar/modificar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainContainerComponent,
    EmpleadoFormComponent,
    IndexComponent,
    FormInsertarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
