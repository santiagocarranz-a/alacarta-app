import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  private apiUrl:string=environment.apiUrl;
  //private apiKey1:string=environment.apiKey1;
  private apiKey2:string=environment.apiKey2;

  constructor( private http: HttpClient) { }

  getPlatos (busqueda:string){
    return this.http.get(`${this.apiUrl}recipes/complexSearch?apiKey=${this.apiKey2}&query=${busqueda}&addRecipeInformation=true&addRecipeNutrition=true`)
  }


}
