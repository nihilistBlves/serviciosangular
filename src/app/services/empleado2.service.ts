import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../Global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Empleado2Service {

  constructor(private _http: HttpClient) {}

  getEmpleadosPorOficio(oficio: string): Observable<any> {
    var request = "/api/Empleados/EmpleadosOficio/" + oficio;
    var url = Global.urlEmpleados + request;
    return this._http.get(url);
  }

  getOficios(): Observable<any> {
    var request = "/api/empleados/oficios";
    var url = Global.urlEmpleados + request;
    return this._http.get(url);
  }
}
