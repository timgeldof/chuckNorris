import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) { }
  private quoteUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
  private headers = {
    'X-RapidAPI-Host':"matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    'X-RapidAPI-Key': '504a84789cmsha8cea23c5a890b0p1379dfjsn398611479f9a'
  }
  private requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headers), 
  };
  getQuote(): Observable<Object>{
    return this.http.get(this.quoteUrl, this.requestOptions);
  }
}
