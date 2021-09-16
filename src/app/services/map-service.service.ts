import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
  showMe: boolean = true
  constructor() { }

  toogleTag() {
    this.showMe = !this.showMe
  }
}
