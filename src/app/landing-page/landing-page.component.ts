import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(()=>{
      this.peliculasEnCines = [ {
        titulo:'spider man',
        fechaLanzamiento: new Date(),
        precio : 1900.49,
        poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spider-Man.jpg/600px-Spider-Man.jpg"
      },
      {
        titulo:'Simpson',
        fechaLanzamiento: new Date("2016-05-03"),
        precio : 1200.49,
        poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/SimpsonsSpringfieldVT.jpg/500px-SimpsonsSpringfieldVT.jpg"
  
      },
     
  ]
  this.peliculasProximosExtrenos=[
    {
      titulo:'Toy story',
      fechaLanzamiento: new Date("2016-06-23"),
      precio : 1230.49,
      poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Toy_Story.svg/440px-Toy_Story.svg.png"

    },
    {
      titulo:'Frozen',
      fechaLanzamiento: new Date("2016-05-03"),
      precio : 1400.49,
      poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Frozen_2_Logo.png/560px-Frozen_2_Logo.png"

    },
    {
      titulo:'Titanic',
      fechaLanzamiento: new Date("2016-01-13"),
      precio : 1600.49,
      poster : "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Shrek_lass_nach_-_panoramio.jpg/440px-Shrek_lass_nach_-_panoramio.jpg"

    },
  ]
    },100)
  }

  title="Appcomponent"
  peliculasEnCines!:any []
  peliculasProximosExtrenos!:any[]
}
