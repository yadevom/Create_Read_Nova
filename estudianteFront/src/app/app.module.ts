import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaestudiantesComponent } from './modules/estudiantes/components/lista-estudiantes/lista-estudiantes.component';
import { RegistrarestudianteComponent } from './modules/estudiantes/components/registrar-estudiante/registrar-estudiante.component';
import { FormsModule } from '@angular/forms';
import { estudianteDetallesComponent } from './modules/estudiantes/components/estudiante-detalles/estudiante-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaestudiantesComponent,
    RegistrarestudianteComponent,
    estudianteDetallesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
