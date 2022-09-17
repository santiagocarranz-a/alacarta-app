import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlatosService } from 'src/services/platos.service';
@Component({
  selector: 'app-buscador-de-platos',
  templateUrl: './buscador-de-platos.component.html',
  styleUrls: ['./buscador-de-platos.component.css']
})
export class BuscadorDePlatosComponent implements OnInit {

  @Output() catalogoPlatos: EventEmitter<any> = new EventEmitter<any>();


  constructor(private platosService:PlatosService) { }



  getPlatos(){
    let busqueda: string = (<HTMLInputElement>document.getElementById('txtPlato')).value;
    this.platosService.getPlatos(busqueda).subscribe((platos:any) =>{
      this.catalogoPlatos.emit(platos.results);
    })
  }


  ngOnInit(): void {
  }

}
