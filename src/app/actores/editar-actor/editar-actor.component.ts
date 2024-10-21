import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCeacionDTO, ActorDTO } from '../actores';

@Component({
  selector: 'app-editar-actor',
  standalone: true,
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actor.component.html',
  styleUrl: './editar-actor.component.css'
})
export class EditarActorComponent {

  @Input({transform:numberAttribute})
  id!:number

  actor:ActorDTO = {id:1,nombre:"Jairo",fechaNacimiento: new Date("1999-01-25"),foto:'https://avatars.githubusercontent.com/u/57160592?v=4'}

  guardarCambios(actor:ActorCeacionDTO){
    console.log("Actualizar actor",actor)
  }
}
