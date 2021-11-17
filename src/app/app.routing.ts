import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
import { ListadoempleadosComponent } from "./components/listadoempleados/listadoempleados.component";
import { DetallesempleadoComponent } from "./components/detallesempleado/detallesempleado.component";

const appRoutes = [
    {path: "", component: HomeComponent},
    {path: "home", component: HomeComponent},
    {path: "libreria", component: LibreriaComponent},
    {path: "inyeccioncomics", component: ComicsinyeccionComponent},
    {path: "personasapi", component: PersonasapiComponent},
    {path: "empleadossalario", component: EmpleadossalarioComponent},
    {path: "empleadosoficio", component: EmpleadosoficioComponent},
    {path: "empleados", component: ListadoempleadosComponent},
    {path: "empleados/:id", component: DetallesempleadoComponent},
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);