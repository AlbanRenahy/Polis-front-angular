import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-renseignement-donnees',
  templateUrl: './renseignement-donnees.component.html',
  styleUrls: ['./renseignement-donnees.component.scss']
})
export class RenseignementDonneesComponent implements OnInit {
  showMe: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  toogleTag() {
    this.showMe = !this.showMe
  }

}
