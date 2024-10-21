import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { primerarLetraMayusculo } from '../../compartidos/componentes/funciones/validaciones';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CineCreacionDTO, CineDTO } from '../cines';
import { MapaComponent } from "../../componentes/mapa/mapa.component";
import { Coordenada } from '../../componentes/mapa/Coordenada';

@Component({
  selector: 'app-formulario-cines',
  standalone: true,
  imports: [MatButtonModule, RouterLink, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MapaComponent],
  templateUrl: './formulario-cines.component.html',
  styleUrl: './formulario-cines.component.css'
})
export class FormularioCinesComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo!==undefined) {

      
      this.form.patchValue(this.modelo)
      this.cordenadasIniciales.push({latitud:this.modelo.latitud,longitud:this.modelo.longitud})
    }
  }

    @Input()
    modelo?:CineCreacionDTO

    @Output()
    posterFormulario = new EventEmitter<CineCreacionDTO>();


    cordenadasIniciales:Coordenada[]=[];
    private formBuilder = inject(FormBuilder);

    form = this.formBuilder.group({
      nombre:['',{validators:[Validators.required,primerarLetraMayusculo()]}],
      latitud: new FormControl<number| null>(null,[Validators.required]),
      longitud: new FormControl<number| null>(null,[Validators.required])
    })

    obtenerErrorCampoNombre(){
      let campo = this.form.controls.nombre
      if (campo.hasError('required')) {
        return 'El campo nombre es requerido'
      }
      if (campo.hasError('primeraLetraMayuscula')) {
        return campo.getError('primeraLetraMayuscula').mensaje;
      }
      return ""
    }
    
    guardarCambiios(){

      if (!this.form.valid) return 

      const cine = this.form.value as CineCreacionDTO;
      this.posterFormulario.emit(cine)
    }

    cordenadaSeleccionada(cordenada:Coordenada){
      this.form.patchValue(cordenada)
    }
}
