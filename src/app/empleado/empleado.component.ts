import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Cruz";
  edad = 15;
  // empresa = "Chichosito";

  habilitaCuadro=false

  cambiarHabilitarCuadro(){
    return this.habilitaCuadro=true
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
