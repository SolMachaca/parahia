import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  searchTerm = '';

  movies: any[] = [];


  constructor(private omdbService:MovieService) { }

  searchMovies() {
    this.omdbService.searchMovies(this.searchTerm).subscribe((response: any) => {
      this.movies = response.Search;
      console.log(this.movies);
    });
  }



  ngOnInit(): void {
  }

}
