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
  
  platosVeganos:number = 0
  trueOFalse:boolean=false
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


/*

Dentro de la funcion GuardarPlatos con un IF se consulta a la variable global platosVeganos si su contenido es < a 1.
Si lo és retorna la funcion funcPlatosVeganos.

ERROR: al moverme de componente la variable platosVeganos a quien le realizo las consultas se reinicia (vacia), de éste modo permite agregar un plato más. Luego adquiere la data que necesitaba en un principio y funciona de modo correcto (si su contenido es < a 1 activa la funcPlatosVeganos y caso contrario no lo hace)

AVISO: se esta probando sólo con los platos veganos
*/

  dataADD(data:any){
    this.sweetalert.fire({
      icon: 'success',
      title: 'Exito!',
      text: 'Se ha guardado el plato.',
    })
    this.HPS.addPlato(data);
    console.log(data)
  }

  funcPlatosVeganos(data:any,plato:any){
    let acumuladoVeganos = []
    for(let item in data){
       acumuladoVeganos.push(item)
    }


    console.log(acumuladoVeganos.length)

  }

  funcPlatosNoVeganos(data:any, plato:any){
    let platosNoVeganos = 0
    for(let item of data){
      if(item.vegan===false){
        if(platosNoVeganos<1){
          platosNoVeganos++
          console.log("platos No veganos"+ platosNoVeganos)
          this.dataADD(plato)
        }else{
          console.log("no se puede agregar más de 2 platos no veganos")
          return true
        }
      }
    }
    return true
  }

//Prueba 1
/*
    let platosNoVeganos = 0
    let items

    for(let item of data){
      if(item.vegan===false){
        console.log("item.vegan es FALSE")
      }
      platosNoVeganos += item.vegan
      console.log(platosNoVeganos)
      console.log(item.vegan)

    }

    if(platosNoVeganos>1){
      console.log("no se puede agregar más de 2 platos veganos")
      return true
    }
    return false
  }
*/

  guardarPlatos(plato:any){
    this.HPS.getPlatos().subscribe(data=>{

      if(data===null||undefined){
        this.sweetalert.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Se ha guardado el plato.',
        })
        this.HPS.addPlato(plato);
      }else{
        this.platos = Object.values(data)
        console.log(this.platos)
        this.platosLength = Object.values(data).length
        console.log()
        if(this.platosLength<4){

          // ACA
          if(plato.vegan===true){
            if(this.platosVeganos<1){
              this.funcPlatosVeganos(this.platos, plato)
            }
          }else{
            if(this.funcPlatosNoVeganos(this.platos, plato)===false){
            }
          }
          //ACA
          
        console.log(this.platosLength)
        }else{
          console.log("no se puede agregar más de 4 platos")
        }
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
