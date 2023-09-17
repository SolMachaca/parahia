import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { MovieComponent } from './components/movie/movie.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { InfoPeliculaComponent } from './components/info-pelicula/info-pelicula.component';
import { LibroComponent } from './components/libro/libro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page1Component,
    PageaComponent,
    PagebComponent,
    PagecComponent,
    YoutubeComponent,
    MovieComponent,
    PeliculaComponent,
    InfoPeliculaComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
