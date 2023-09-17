import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private _http:HttpClient) { }

  public detectarIdioma(texto:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '5997b3d522msh272c7130965f68dp1f1631jsn820d67564be8',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      }),
    }
    const body = new HttpParams().set('q', texto);
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2/detect",body,httpOptions);
  }

  public traducirTexto(texto:string, source:string, target:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': '5997b3d522msh272c7130965f68dp1f1631jsn820d67564be8',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      })
    }
    const body = new HttpParams()
        .set('q',texto)
        .set('target', target)
        .set('source', source);
      return this._http.post('https://google-translate1.p.rapidapi.com/language/translate/v2',body,httpOptions);
  }
}
