import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, // Classe responsable de la construction du formulaire
  FormGroup, // Conteneur de champs de formulaire (permet de lire les états des champs)
  FormControl, // Champs de formulaire avec le suivis des états et quelques fonctions
  Validators, // La classe responsable des validations de champs
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulaire: FormGroup;

user: any = {
    email: "",
    password: "",
  };

  constructor(private fb: FormBuilder) {
    this.formulaire = new FormGroup({
      email: this.fb.control(this.user.email, [Validators.email, Validators.required]),
      password: this.fb.control(this.user.password, Validators.required),
    });
  }

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

  envoyerFormulaire(): void {
    // affichage en console du FormGroup qui contient les controls
    console.log(this.formulaire);
  }
  
  ngOnInit(): void {
  }

}
