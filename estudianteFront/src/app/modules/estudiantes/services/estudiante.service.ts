import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/core/models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class estudianteService {

  private baseUrl = "http://localhost:8080/api/estudiantes";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeestudiantes():Observable<Estudiante[]> {
    return this.httpClient.get<Estudiante[]>(`${this.baseUrl}`);
  }

  registrarestudiante(estudiante:Estudiante): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`,estudiante);
  }

  actualizarestudiante(id:number, estudiante:Estudiante): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`,estudiante);
  }

  obtenerestudiantePorId(id:number): Observable<Estudiante> {
    return this.httpClient.get<Estudiante>(`${this.baseUrl}/${id}`);
  }

  eliminarestudiante(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
