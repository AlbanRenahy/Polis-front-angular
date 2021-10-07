import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lieu } from '../models/lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Lieu[]> {
    return this.httpClient.get<Lieu[]>(`${environment.back_url}/lieux`);
    }

}
