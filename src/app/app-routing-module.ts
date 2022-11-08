import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { FormInsertarComponent } from "./rutas/form-insertar/form-insertar.component";
import { IndexComponent } from "./rutas/index/index.component";
import { ModificarComponent } from "./rutas/modificar/modificar.component";

const appRoutes: Routes =[
    { path: '', component : IndexComponent },
    { path: 'index', component : IndexComponent},
    { path: 'home', component : IndexComponent},
    { path: 'vista', component : IndexComponent},
    { path: 'formInsertar', component : FormInsertarComponent},
    { path: 'modificar/:idEmpleado', component : ModificarComponent},
];

@NgModule({
    imports: [
        //RouterModule.forRoot(appRoutes, {useHash : true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
