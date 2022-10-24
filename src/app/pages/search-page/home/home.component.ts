import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PlatosItemComponent } from 'src/app/platos-item/platos-item.component';
import {HomePlatosService} from 'src/services/home-platos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayPlatos:any = [] ;

  constructor( private HPS: HomePlatosService) { }

  ngOnInit(): void {

    this.HPS.getPlatos().subscribe(data=>{
      if(data!=null || undefined){
        this.arrayPlatos=Object.values(data);
        this.HPS.newArrayPlatos(this.arrayPlatos);
        }else{
          console.log("no hay platos")
        }

    })

  }  

}

