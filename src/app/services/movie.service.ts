import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = "97ce6eab";
  private apiUrl = 'http://www.omdbapi.com/';

  peliculaSeleccionada: any;

  constructor(private _http:HttpClient) { }

  searchMovies(searchTerm: string) {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${searchTerm}`;
    return this._http.get(url);
  }

  public searchByTitle(title:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
		    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      })
    }
    return this._http.get('https://streaming-availability.p.rapidapi.com/v2/search/title?title='+title+'&country=us', httpOptions);
  }
}
