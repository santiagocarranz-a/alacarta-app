import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HomePlatosService } from 'src/services/home-platos.service'; 
import { CorroborarPlatosService} from 'src/services/corroborar-platos.service'
import { Router } from '@angular/router';
import Swal from "sweetalert2"

@Component({
  selector: 'app-platos-item',
  templateUrl: './platos-item.component.html',
  styleUrls: ['./platos-item.component.css']
})
export class PlatosItemComponent implements OnInit {

  @Input() plato: any;
  @Input() botonCorrespondiente: boolean = false;
  @Input() componentDetalles: boolean = true;

  cantPlatos:number=0
  platos:any
  controlAddPlato = false
  platosLength:any

  sweetalert = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1400,
    timerProgressBar: true,
    background:"black",
    color:"white",
    didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  constructor(private HPS: HomePlatosService, private CPS:CorroborarPlatosService, private router:Router) { }

  guardarPlatos(plato:any){
  
    this.HPS.getPlatos().subscribe(data=>{
      if(data===null||undefined){
        this.sweetalert.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Se ha guardado el plato.',
        })
        this.HPS.addPlato(plato);
        return    
      }
    })


    this.HPS.getPlatos().subscribe(data=>{
      this.platos = Object.values(data)
      console.log(this.platos)
      this.platosLength = Object.values(data).length

      if(this.platosLength<4){
        this.sweetalert.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Se ha guardado el plato.',
        })
        this.HPS.addPlato(plato);
        console.log(this.platosLength)
      }else{
        console.log("no se puede agregar más de 4 platos")
      }
    })

  }

  eliminarPlatos(plato:any){
    this.sweetalert.fire({
      icon: 'warning',
      title: 'Exito...',
      text: 'Se ha eliminado el plato!',
    })

    const platoAEliminar = plato
    const arrayPlatoBorrado = this.HPS.arrayPlatos.filter(data => data != platoAEliminar)
    this.HPS.newArrayPlatos(arrayPlatoBorrado)
    console.log(this.HPS.arrayPlatos)
    this.HPS.putPlato()

    setTimeout(()=>{
      this.reloadPag()
    },1000)
  }

  obtDetallesPlatos(id:any){
    this.router.navigate(['detallePlato/' + id]);
  }

  obtenerSummary(data:any){
    if(data!==undefined){
      data = data.replace(/<[^>]*>?/g, '')
      return data
    }
  }

  reloadPag ():void{
    this.router.routeReuseStrategy.shouldReuseRoute = function () {return false}
    this.router.navigate([this.router.url])
  }

  ngOnInit(): void {
}
}
