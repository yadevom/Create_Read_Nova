import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaestudiantesComponent } from './modules/estudiantes/components/lista-estudiantes/lista-estudiantes.component';
import { RegistrarestudianteComponent } from './modules/estudiantes/components/registrar-estudiante/registrar-estudiante.component';
import { estudianteDetallesComponent } from './modules/estudiantes/components/estudiante-detalles/estudiante-detalles.component';

const routes: Routes = [
  {path: 'estudiantes', component: ListaestudiantesComponent},
  {path: 'registrar-estudiante', component: RegistrarestudianteComponent},
  {path: 'estudiante-detalles/:id', component: estudianteDetallesComponent},
  {path: '', redirectTo:'estudiantes', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
