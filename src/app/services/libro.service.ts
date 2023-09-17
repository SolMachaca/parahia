import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private apiUrl = 'https://hapi-books.p.rapidapi.com/';
  private apiKey = '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698';
  private apiHost = 'hapi-books.p.rapidapi.com';

  constructor(private _http:HttpClient) { }

  searchBooksByName(bookName: string) {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost
    });

    const url = `${this.apiUrl}?name=${encodeURIComponent(bookName)}`;

    return this._http.get(url, { headers });
  }

  public getLibro(text:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
		    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
      }),
    }
    return this._http.get("https://hapi-books.p.rapidapi.com/search/"+text,httpOptions);
  }

}
