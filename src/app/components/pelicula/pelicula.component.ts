import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  searchTitle!: string;
  moviesByTitle!: Array<any>;

  constructor(private omdbService: MovieService, private router: Router) {}

  busquedaPorTitulo() {
    this.omdbService
      .searchByTitle(this.searchTitle)
      .subscribe((response: any) => {
        // this.moviesByTitle = response.result;
        // console.log(this.moviesByTitle);
        this.moviesByTitle = [];
        for (let i = 0; i < 4 && i < response.result.length; i++) {
          this.moviesByTitle.push(response.result[i]);
        }
        console.log(this.moviesByTitle);
      });
  }

  verDetallesPelicula(movie: any) {
    this.omdbService.peliculaSeleccionada = movie;
    this.router.navigate(['/detalles-pelicula/' + movie.title]);
  }

  ngOnInit(): void {}
}
