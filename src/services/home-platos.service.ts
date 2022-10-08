import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomePlatosService {

  arrayPlatos:Array<any>= []; 

  plato:any = [];
  healthScore:number = 0;
  precio:number = 0;
  timePreparation:number = 0;
  platosVeganos:number = 0

  constructor(private httpPlatos:HttpClient) { }

  newArrayPlatos(data:Array<any>){
    this.arrayPlatos=data
  }

// Firebase
  putPlato(){
    this.httpPlatos.put('https://a-la-carta-challenge-alk-b6c50-default-rtdb.firebaseio.com/datos.json',this.arrayPlatos).subscribe({
      next: (v) => console.log('Se ha modificado el array ' + v),
      error: (e) => console.log('Error' + e),
    });
  }

  getPlatos(){
    return this.httpPlatos.get('https://a-la-carta-challenge-alk-b6c50-default-rtdb.firebaseio.com/datos.json')
  }

  addPlato (plato:any){
    this.httpPlatos.post('https://a-la-carta-challenge-alk-b6c50-default-rtdb.firebaseio.com/datos.json',plato).subscribe({
      next: (v) => console.log('Se ha guardado el plato ' + v),
      error: (e) => console.log('Error' + e),
    });
  }


// Bar-data-component
  dataParaBarDataComponent(){
    this.getPlatos().subscribe(data=>{
      this.plato= Object.values(data)
      console.log(this.plato)
      let cantidadPlatos = this.plato.length;

      for(let item of this.plato){
        this.precio += item.pricePerServing 
        this.platosVeganos += item.vegan
        this.healthScore += item.healthScore = (item.healthScore / cantidadPlatos)
        this.timePreparation += item.readyInMinutes = (item.readyInMinutes / cantidadPlatos)
      }

      this.healthScore = parseFloat(this.healthScore.toFixed(3))
      this.precio = parseFloat(this.precio.toFixed(2))
      this.timePreparation = parseFloat(this.timePreparation.toFixed(2))
    })  
  }

  
}
