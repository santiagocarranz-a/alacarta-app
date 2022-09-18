import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePlatosService {

  arrayPlatos:Array<any>= []; 

  constructor() { }
  
  agregarPlato (plato:any){
    this.arrayPlatos.push(plato)
  }
  
}
