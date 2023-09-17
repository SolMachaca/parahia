import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonedaService {

  constructor(private http:HttpClient) { }

  public convertMoney(cant:string, fromType:string, toType:string):Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '0a1eb14551mshf885964aee99f9cp16dc39jsn86c595317698',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      }),
    }
    const body = new HttpParams()
      .set('from-value',cant)
      .set('from-type', fromType)
      .set("to-type", toType);
    return this.http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body,httpOptions);
  }
}
