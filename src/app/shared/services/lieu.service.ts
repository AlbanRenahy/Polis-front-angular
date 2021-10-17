import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../models/image';
import { Lieu } from '../models/lieu';

@Injectable({
  providedIn: 'root'
})
export class LieuService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Lieu[]> {
    return this.httpClient.get<Lieu[]>(`${environment.back_url}/lieux`);
    }

  getImageOfLieu(id:number): Observable<Image> {
    console.log("id");
    console.log(id);
    return this.httpClient.get<Image>(`${environment.back_url}/lieux/image/`+id);
    }

  addOne(lieu: Lieu): Observable<Lieu> {
    return this.httpClient.post<Lieu>(`${environment.back_url}/lieux`, lieu);
    }

}
