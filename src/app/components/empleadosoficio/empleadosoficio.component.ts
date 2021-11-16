import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado2 } from 'src/app/models/empleado2';
import { Empleado2Service } from 'src/app/services/empleado2.service';


@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public empleados!: Array<Empleado2>;
  public oficios!: Array<string>;
  @ViewChild("selectoficio") selectoficio!: ElementRef;

  constructor(private _service: Empleado2Service) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response => {
      this.oficios = response;
    });
  }

  buscarPorOficio(): void {
    var oficio = this.selectoficio.nativeElement.value;
    this._service.getEmpleadosPorOficio(oficio).subscribe(response => {
      this.empleados = response;
    });
  }

}
