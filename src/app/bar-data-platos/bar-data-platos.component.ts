import { Component, Input, OnInit } from '@angular/core';
import {HomePlatosService} from 'src/services/home-platos.service'

@Component({
  selector: 'app-bar-data-platos',
  templateUrl: './bar-data-platos.component.html',
  styleUrls: ['./bar-data-platos.component.css']
})
export class BarDataPlatosComponent implements OnInit {

  constructor(public HPS :HomePlatosService) { }
  
  ngOnInit(): void {
    this.HPS.dataParaBarDataComponent()
  }

}
