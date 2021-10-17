import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Categorie[]> {
    return this.httpClient.get<Categorie[]>(`${environment.back_url}/categories`);
    }
}
