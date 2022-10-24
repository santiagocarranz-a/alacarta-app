import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlatosService } from 'src/services/platos.service';
import Swal from "sweetalert2"

@Component({
  selector: 'app-buscador-de-platos',
  templateUrl: './buscador-de-platos.component.html',
  styleUrls: ['./buscador-de-platos.component.css']
})
export class BuscadorDePlatosComponent implements OnInit {

  @Output() catalogoPlatos: EventEmitter<any> = new EventEmitter<any>();


  constructor(private platosService:PlatosService) { }

  sweetalert = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 1400,
    timerProgressBar: true,
    background:"yellow",
    color:"black",

    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })


  getPlatos(){
    let busqueda: string = (<HTMLInputElement>document.getElementById('txtPlato')).value;
    
    if(busqueda.length<3){
    this.sweetalert.fire({
    icon: 'error',
    text: 'Porfavor realize su búsqueda colocando más de 3 letras',
    })
    }else{
      this.platosService.getPlatos(busqueda).subscribe((platos:any) =>{
  
        this.catalogoPlatos.emit(platos.results);
    })
    }
  }

  keyDownEnter(e:any){
    if(e.keyCode===13){
      this.getPlatos()
    }
  }

  ngOnInit(): void {
  }

}
