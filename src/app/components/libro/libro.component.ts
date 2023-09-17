import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  buscado!: string;
  libro!: any[];

  searchTerm!: string;
  books!: any[];

  constructor(private libroService: LibroService) {}

  searchBooks() {
    this.libroService
      .searchBooksByName(this.searchTerm)
      .subscribe((response: any) => {
        this.books = response.books;
      });
      console.log(5+2);
  }

  buscarLibro() {
    this.libroService.getLibro(this.buscado).subscribe(
      (result: any) => {
        this.libro = result;
        console.log(this.libro);
      },
      (error) => {
        console.log(error)
      }
    );
  }

  ngOnInit(): void {}
}
