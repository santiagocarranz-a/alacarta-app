import { Injectable } from '@angular/core';
import { HomePlatosService } from './home-platos.service';

@Injectable({
  providedIn: 'root'
})
export class CorroborarPlatosService {

  plato:any = [];
  cantPlatos:number =0

  constructor(private HPS:HomePlatosService) { }

  limitarCantPlatos(data:number){
    
  }

}