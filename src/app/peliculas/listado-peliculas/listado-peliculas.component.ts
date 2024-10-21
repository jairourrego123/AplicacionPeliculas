import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../componentes/listado-generico/listado-generico.component";
import {MatButtonModule} from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, ListadoGenericoComponent,MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {


  @Input({required:true})
  peliculas !: any[]
  agregarPelicula(){
    this.peliculas.push({
      titulo:"Inception",
      fechaLanzamiento: new Date("2012-07-03"),
      precio:500
    })
  }


}
