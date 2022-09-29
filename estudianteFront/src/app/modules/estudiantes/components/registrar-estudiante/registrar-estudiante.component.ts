import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/core/models/estudiante';
import swal from 'sweetalert2';
import { estudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
})
export class RegistrarestudianteComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();

  constructor(
    private estudianteServicio:estudianteService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  guardarestudiante() {
    this.estudianteServicio.registrarestudiante(this.estudiante).subscribe(dato => {
      this.irListaestudiantes();
    },
      error => console.log(error)
    );
    swal('Registro Exitoso', 'estudiante ha sido creado con exito');
  }

  irListaestudiantes() {
    this.router.navigate(['/estudiantes']);
  }

  onSubmit() {
    this.guardarestudiante();
  }
}
