import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  // Je récupère le focus d'un input
  handleFocus = (e: any) => {
    // J'ajoute la classe focus à l'élément focus, ce qui passe sa bordure en orange.
    e.target.previousSibling.classList.add("open", "focus");
    e.target.classList.add("focus");
  };

  // Je récupère le blur d'un input
  handleBlur = (e: any) => {
    // Je remove la classe focus, ce qui redonnera à l'élément la bordure de base
    e.target.previousSibling.classList.remove("focus");
    e.target.classList.remove("focus");
  };
  ngOnInit(): void {
  }

}
