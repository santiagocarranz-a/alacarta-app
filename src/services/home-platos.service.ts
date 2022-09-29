import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomePlatosService {

  arrayPlatos:Array<any>= []; 

  constructor(private httpPlatos:HttpClient) { }
  
  SetArrayPlatos(data:Array<any>){
    this.arrayPlatos=data
  }
  
  guardarPlatos (plato:any){
    this.arrayPlatos.push(plato)
    this.httpPlatos.post('https://a-la-carta-challenge-alk-b6c50-default-rtdb.firebaseio.com/datos.json',plato).subscribe({
      next: (v) => console.log('Se han guardado el plato ' + v),
      error: (e) => console.log('Error' + e),
    });
  
  }
  
  obtenerPlatos(){
    return this.httpPlatos.get('https://a-la-carta-challenge-alk-b6c50-default-rtdb.firebaseio.com/datos.json')

  }

}
