import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Params } from '@angular/router';

@Component({
  selector: 'app-detallesempleado',
  templateUrl: './detallesempleado.component.html',
  styleUrls: ['./detallesempleado.component.css']
})
export class DetallesempleadoComponent implements OnInit {
  public empleado!: Empleado;

  constructor(private _service: EmpleadoService, private _route: ActivatedRoute) { }

  findEmpleado(id: string): void {
    this._service.getEmpleadoById(id).subscribe(response => {
      this.empleado = response;
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = params['id'];
      this.findEmpleado(id);
    });
  }

}
