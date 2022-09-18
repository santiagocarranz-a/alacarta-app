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

    this.arrayPlatos = this.HPS.arrayPlatos
  }

}
