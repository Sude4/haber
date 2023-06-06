import { Injectable } from '@angular/core';
import { TheNews } from '../models/the-news';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class TheNewsService {
 private url = "TheNews";
  constructor(private http:HttpClient) { }

  public getTheNews() : Observable<TheNews[]>  {
 
    return this.http.get<TheNews[]>(`${environment.apiUrl}/${this.url}`);
  }
}
