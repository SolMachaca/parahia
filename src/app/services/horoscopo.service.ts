import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public getHoroscopo(signId:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
        'X-RapidAPI-Host': 'horoscope-api.p.rapidapi.com'
      })
    }
    return this._http.get("https://horoscope-api.p.rapidapi.com/pt/"+signId, httpOptions);
  }

  public getDailyPhrase():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
		    'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
      })
    }
    return this._http.get('https://horoscope-astrology.p.rapidapi.com/dailyphrase', httpOptions);
  }

}
