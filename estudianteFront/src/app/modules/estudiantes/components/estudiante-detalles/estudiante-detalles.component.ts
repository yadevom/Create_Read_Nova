import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Estudiante } from 'src/app/core/models/estudiante';
import { estudianteService } from '../../services/estudiante.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-estudiante-detalles',
  templateUrl: './estudiante-detalles.component.html',
})
export class estudianteDetallesComponent implements OnInit {

  id:number;
  estudiante: Estudiante;

  constructor(
    private route: ActivatedRoute,
    private estudianteServicio:estudianteService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.estudiante = new Estudiante();
    this.estudianteServicio.obtenerestudiantePorId(this.id).subscribe(dato => {
      this.estudiante = dato;
      swal(`Detalles del estudiante ${this.estudiante.nombre}`)
    });
  }

}
