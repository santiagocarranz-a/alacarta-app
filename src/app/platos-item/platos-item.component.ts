import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HomePlatosService } from 'src/services/home-platos.service'; 

@Component({
  selector: 'app-platos-item',
  templateUrl: './platos-item.component.html',
  styleUrls: ['./platos-item.component.css']
})
export class PlatosItemComponent implements OnInit {

  @Input() plato: any;
  
  constructor(private HPS: HomePlatosService) { }

  guardarPlatos(plato:any){
  this.HPS.addPlato(plato);
  }

  eliminarPlatos(plato:any){
    const platoAEliminar = plato
    const arrayPlatoBorrado = this.HPS.arrayPlatos.filter(data => data != platoAEliminar)
    this.HPS.newArrayPlatos(arrayPlatoBorrado)
    console.log(this.HPS.arrayPlatos)
    this.HPS.putPlato()
    

  }


  ngOnInit(): void {}
}
