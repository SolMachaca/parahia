import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { MovieComponent } from './components/movie/movie.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { InfoPeliculaComponent } from './components/info-pelicula/info-pelicula.component';
import { LibroComponent } from './components/libro/libro.component';

const routes: Routes = [
  {path:"page1", component:Page1Component},
  {path:"pagea", component:PageaComponent},
  {path:"pageb", component:PagebComponent},
  {path:"pagec", component:PagecComponent},
  {path:"youtube", component:YoutubeComponent},
  {path:"peliculas",component:MovieComponent},
  {path:"movie", component:PeliculaComponent},
  {path:"detalles-pelicula/:title", component:InfoPeliculaComponent},
  {path:"libro", component:LibroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
