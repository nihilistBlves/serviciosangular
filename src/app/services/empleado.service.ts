import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from '../Global';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private _http: HttpClient) {}

  getEmpleados(): Observable<any> {
    var request = "/api/empleados";
    var url = Global.urlEmpleados + request;
    return this._http.get(url);
  }

  getEmpleadoById(id: string): Observable<any> {
    var request = "/api/empleados/" + id;
    var url = Global.urlEmpleados + request;
    return this._http.get(url);
  }

  getEmpleadosSalario(salario: string): Observable<any> {
    var request = "/api/Empleados/EmpleadosSalario/" + salario;
    var url = Global.urlEmpleados + request;
    return this._http.get(url);
  }
  
}
