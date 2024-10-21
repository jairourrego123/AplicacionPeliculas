import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform:numberAttribute})
  id!: number;

  cine:CineDTO = {id:1,nombre:"Teatro Colón",latitud:4.599422146448715,longitud:-74.07179224302531}

  guardarCambios(cine:CineCreacionDTO){
    console.log("editar cine",cine);
    
  }
}
