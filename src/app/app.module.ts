import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { HttpClientModule} from '@angular/common/http'
import { ComicsService } from './services/comics.service';
import { PersonasService } from './services/personas.service';
import { EmpleadoService } from './services/empleado.service';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { MenucomicsComponent } from './components/menucomics/menucomics.component';
import { ComicComponent } from './components/comic/comic.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { Empleado2Service } from './services/empleado2.service';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    HomeComponent,
    MenucomicsComponent,
    ComicComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders, ComicsService, PersonasService, EmpleadoService, Empleado2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
