import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosService } from 'src/services/platos.service';

@Component({
  selector: 'app-detalle-plato',
  templateUrl: './detalle-plato.component.html',
  styleUrls: ['./detalle-plato.component.css']
})
export class DetallePlatoComponent implements OnInit {

  plato:any = [] ;

  constructor(private route: ActivatedRoute, private PlatosService:PlatosService) { }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.PlatosService.getDetallesPlatos(id).subscribe((datos: any) => {
    this.plato = datos;
    })
  }

}
