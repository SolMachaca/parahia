import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiUrl = 'https://simple-youtube-search.p.rapidapi.com/search';

  constructor(private http:HttpClient) { }

  public getVideo(texto:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
		    'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      }),
      params: new HttpParams().set('query', texto)
    };

    return this.http.get(this.apiUrl, httpOptions);
  }
}

// en la url se concatena el texo - PROBAR ESTE METODO
