import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, // Classe responsable de la construction du formulaire
  FormGroup, // Conteneur de champs de formulaire (permet de lire les états des champs)
  FormControl, // Champs de formulaire avec le suivis des états et quelques fonctions
  Validators, // La classe responsable des validations de champs
} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
formulaire: FormGroup;

user: any = {
    nom:"",
    prenom: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  constructor(private fb: FormBuilder) {
    this.formulaire = new FormGroup({
      // Champ de formulaire avec 1 validateur
      nom: new FormControl(this.user.nom, Validators.required),
      prenom: new FormControl(this.user.prenom, Validators.required),
      // Possibilité de passer par le FormBuilder pour créer un champ
      email: this.fb.control(this.user.email, [Validators.email, Validators.required]),
      password: this.fb.control(this.user.password, Validators.required),
      confirmPassword: this.fb.control(this.user.confirmPassword, Validators.required)
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
