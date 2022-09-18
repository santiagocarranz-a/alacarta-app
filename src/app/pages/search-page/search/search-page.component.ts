import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  arrayPlatos: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  capturarCatalogoPlatos(catalogo: any) {
    this.arrayPlatos = catalogo;
  }

}
