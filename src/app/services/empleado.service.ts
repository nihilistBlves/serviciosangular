import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../Global';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private _http: HttpClient) {}

  getEmpleadosSalario(salario: string): Observable<any> {
    var request = "/api/Empleados/EmpleadosSalario/" + salario;
    var url = Global.urlEmpleados + request;
    return this._http.get(url);
  }
  
}
