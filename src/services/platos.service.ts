import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  private apiUrl:string=environment.apiUrl;
  private apiKey:string=environment.apiKey;

  constructor( private http: HttpClient) { }

  getPlatos (busqueda:string){
    return this.http.get(`${this.apiUrl}recipes/complexSearch?apiKey=${this.apiKey}&query=${busqueda}&addRecipeInformation=true&addRecipeNutrition=true`)
  }


}
