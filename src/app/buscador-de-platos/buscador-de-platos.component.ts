import { Component, OnInit } from '@angular/core';
import { PlatosService } from 'src/services/platos.service';
@Component({
  selector: 'app-buscador-de-platos',
  templateUrl: './buscador-de-platos.component.html',
  styleUrls: ['./buscador-de-platos.component.css']
})
export class BuscadorDePlatosComponent implements OnInit {

  constructor(private platosService:PlatosService) { }

  getPlatos(){
    let busqueda: string = (<HTMLInputElement>document.getElementById('txtPlato')).value;
    this.platosService.getPlatos(busqueda).subscribe(platos =>{
      console.log(platos)
    })
  }


  ngOnInit(): void {
  }

}
