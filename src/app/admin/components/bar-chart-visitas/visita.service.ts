import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private url: string = 'https://api-nossolar.herokuapp.com/imobil/visitas/mes';


  constructor(private http: HttpClient) { }

  getVisitasRegistradas(): Observable<[]> {
    return this.http.get<[]>(this.url);
  }

}
