import swal from 'sweetalert2';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Estudiante } from 'src/app/core/models/estudiante';
import { estudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
})
export class ListaestudiantesComponent implements OnInit {
  estudiantes: Estudiante[];

  constructor(
    private estudianteServicio: estudianteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerestudiantes();
  }

  private obtenerestudiantes() {
    this.estudianteServicio.obtenerListaDeestudiantes().subscribe((dato) => {
      this.estudiantes = dato;
    });
  }


  verDetallesDelestudiante(id: number) {
    this.router.navigate(['estudiante-detalles', id]);
  }
}
