import { Component, Input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';
import { CrearGenerosComponent } from "../crear-generos/crear-generos.component";
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO, GeneroDTO } from '../generos';

@Component({
  selector: 'app-editar-generos',
  standalone: true,
  imports: [CrearGenerosComponent, FormularioGeneroComponent],
  templateUrl: './editar-generos.component.html',
  styleUrl: './editar-generos.component.css'
})
export class EditarGenerosComponent {
  @Input({transform:numberAttribute})
  id !: number;
  genero : GeneroDTO = {id:1,nombre:'Accion'}
  
  guardarCambios(genero : GeneroCreacionDTO){
    console.log("editando el genero",genero);
    
  }
}
