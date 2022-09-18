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

  ngOnInit(): void {
  }

 agregarPlato(plato:any){
  this.HPS.agregarPlato(plato);
  
  console.log(this.HPS.arrayPlatos)
 }

}
