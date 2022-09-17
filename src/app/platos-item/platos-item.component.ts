import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-platos-item',
  templateUrl: './platos-item.component.html',
  styleUrls: ['./platos-item.component.css']
})
export class PlatosItemComponent implements OnInit {

  @Input() plato: any;


  constructor() { }

  ngOnInit(): void {
  }

 

}
