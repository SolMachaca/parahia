import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  listMusic!:Array<Music>;

  constructor(private http:HttpClient) { }

  public getMusic(text:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
    }
    return this.http.get("https://deezerdevs-deezer.p.rapidapi.com/search?q="+text,httpOptions);
  }

  public gerTrack(id:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
		    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }),
    }
    return this.http.get("https://deezerdevs-deezer.p.rapidapi.com/track/"+id,httpOptions);
  }
}
