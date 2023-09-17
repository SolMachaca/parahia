import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styleUrls: ['./info-pelicula.component.css']
})
export class InfoPeliculaComponent implements OnInit {

  movie: any;
  isMovie!:boolean;
  url:string = "https://www.youtube.com/embed/";
  safeVideoUrl!: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private service:MovieService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.movie = this.service.peliculaSeleccionada;
    this.url = this.url+this.movie.youtubeTrailerVideoId;
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    if(this.movie.type == "movie"){
      this.isMovie = true;
    }
    // Utiliza this.movie para mostrar los detalles de la película en la vista
  }

}
