import { Component, OnInit } from '@angular/core';
import {HomePlatosService} from 'src/services/home-platos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayPlatos:any = [];

  constructor( private HPS: HomePlatosService) { }

  ngOnInit(): void {

      this.HPS.obtenerPlatos().subscribe(data=>{
        this.arrayPlatos=Object.values(data);
        this.HPS.SetArrayPlatos(this.arrayPlatos)
      })

  }

}
